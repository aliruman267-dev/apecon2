import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
