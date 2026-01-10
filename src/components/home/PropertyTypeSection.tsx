import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import houseSecurity from "@/assets/house-security.jpg";
import shopSecurity from "@/assets/shop-security.jpg";

interface PropertyTypeSectionProps {
  onSelectProperty: (type: "residential" | "commercial") => void;
}

const PropertyTypeSection = ({ onSelectProperty }: PropertyTypeSectionProps) => {
  const { toast } = useToast();
  const [callbackForm, setCallbackForm] = useState({
    name: "",
    mobile: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallbackForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Request Received!",
        description: "We'll call you back shortly.",
      });
      setCallbackForm({ name: "", mobile: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Property Type
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your property type to get a tailored security solution
          </p>
        </div>

        {/* Property Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* House */}
          <button
            onClick={() => onSelectProperty("residential")}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
          >
            <img 
              src={houseSecurity}
              alt="House Security"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-display font-bold">House</h3>
              <p className="text-white/80">Residential security solutions</p>
            </div>
          </button>

          {/* Business / Shop */}
          <button
            onClick={() => onSelectProperty("commercial")}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
          >
            <img 
              src={shopSecurity}
              alt="Business Security"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-display font-bold">Business / Shop</h3>
              <p className="text-white/80">Commercial security solutions</p>
            </div>
          </button>
        </div>

        {/* Callback Form */}
        <div className="max-w-md mx-auto">
          <div className="bg-muted rounded-2xl p-8">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">
              Request a Call Back
            </h3>
            <form onSubmit={handleCallbackSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="callback-name">Name *</Label>
                <Input
                  id="callback-name"
                  name="name"
                  placeholder="Your full name"
                  value={callbackForm.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="callback-mobile">Mobile Number *</Label>
                <Input
                  id="callback-mobile"
                  name="mobile"
                  type="tel"
                  placeholder="07123 456789"
                  value={callbackForm.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request a Call Back"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeSection;
