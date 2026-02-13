import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { serviceOptions } from "@/data/services";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "residential" | "commercial" | null;
}

const QuoteModal = ({
  isOpen,
  onClose,
  initialType = null,
}: QuoteModalProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"select" | "form">(
    initialType ? "form" : "select",
  );
  const [quoteType, setQuoteType] = useState<
    "residential" | "commercial" | null
  >(initialType);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
    // Residential fields
    propertyType: "",
    bedrooms: "",
    postcode: "",
    // Commercial fields
    businessName: "",
    premisesType: "",
    numberOfSites: "",
    // ✅ honeypot
    website: "",
  });

  useEffect(() => {
    if (initialType) {
      setQuoteType(initialType);
      setStep("form");
    }
  }, [initialType]);

  useEffect(() => {
    if (!isOpen) {
      setStep(initialType ? "form" : "select");
      setQuoteType(initialType);
      setServiceDropdownOpen(false);
    }
  }, [isOpen, initialType]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setServiceDropdownOpen(false);
  };

  const handleTypeSelect = (type: "residential" | "commercial") => {
    setQuoteType(type);
    setStep("form");
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      service: "",
      message: "",
      propertyType: "",
      bedrooms: "",
      postcode: "",
      businessName: "",
      premisesType: "",
      numberOfSites: "",
      website: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ bot trap
    if (formData.website?.trim()) return;

    // ✅ service required
    if (!formData.service?.trim()) {
      toast({
        title: "Service Required",
        description: "Please select a service to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        quoteType: quoteType ?? null,
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email || "",
        service: formData.service,
        message: formData.message || "",
        postcode: formData.postcode,

        propertyType: quoteType === "residential" ? formData.propertyType : "",
        bedrooms: quoteType === "residential" ? formData.bedrooms : "",

        businessName: quoteType === "commercial" ? formData.businessName : "",
        premisesType: quoteType === "commercial" ? formData.premisesType : "",
        numberOfSites: quoteType === "commercial" ? formData.numberOfSites : "",

        website: formData.website,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to submit. Please try again.");
      }

      toast({
        title: "Quote Request Received!",
        description: "We'll get back to you within 24 hours.",
      });

      resetForm();
      onClose();
    } catch (err) {
      toast({
        title: "Submission failed",
        description: err?.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-display font-bold text-foreground">
            {step === "select"
              ? "Get a Quote"
              : quoteType === "residential"
                ? "Residential Quote"
                : "Commercial Quote"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {step === "select" ? (
            /* Type Selection */
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Please select your property type to continue:
              </p>

              <button
                onClick={() => handleTypeSelect("residential")}
                className="w-full p-6 text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Residential
                </h3>
                <p className="text-sm text-muted-foreground">
                  Security solutions for homes and flats
                </p>
              </button>

              <button
                onClick={() => handleTypeSelect("commercial")}
                className="w-full p-6 text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  Commercial
                </h3>
                <p className="text-sm text-muted-foreground">
                  Security solutions for businesses and shops
                </p>
              </button>
            </div>
          ) : (
            /* Quote Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ✅ hidden honeypot (no UI change) */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Common Fields */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="07123 456789"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Service Required Dropdown */}
              <div className="space-y-2">
                <Label>Service Required *</Label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 border border-input rounded-md bg-background text-left hover:bg-muted transition-colors"
                  >
                    <span
                      className={
                        formData.service
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {formData.service || "Select a service"}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${serviceDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {serviceDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-lg shadow-lg z-10">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceSelect(service)}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Residential Specific Fields */}
              {quoteType === "residential" && (
                <>
                  <div className="space-y-2">
                    <Label>Property Type *</Label>
                    <div className="flex gap-4">
                      {["House", "Flat"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="propertyType"
                            value={type}
                            checked={formData.propertyType === type}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary"
                            required
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Bedrooms *</Label>
                    <div className="flex flex-wrap gap-3">
                      {["1", "2", "3", "4", "5+"].map((num) => (
                        <label
                          key={num}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="bedrooms"
                            value={num}
                            checked={formData.bedrooms === num}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary"
                            required
                          />
                          <span className="text-sm">{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      placeholder="B23 6JP"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {/* Commercial Specific Fields */}
              {quoteType === "commercial" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      placeholder="Your company name"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Premises Type *</Label>
                    <div className="flex flex-wrap gap-3">
                      {["Shop", "Office", "Warehouse", "Other"].map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="premisesType"
                            value={type}
                            checked={formData.premisesType === type}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary"
                            required
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Sites *</Label>
                    <div className="flex gap-4">
                      {["1", "2-3", "4+"].map((num) => (
                        <label
                          key={num}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="numberOfSites"
                            value={num}
                            checked={formData.numberOfSites === num}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary"
                            required
                          />
                          <span className="text-sm">{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input
                      id="postcode"
                      name="postcode"
                      placeholder="B23 6JP"
                      value={formData.postcode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request a Call Back"}
              </Button>

              {/* Back Button */}
              {!initialType && (
                <button
                  type="button"
                  onClick={() => {
                    setStep("select");
                    setQuoteType(null);
                  }}
                  className="w-full text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ← Back to property type selection
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
