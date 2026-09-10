import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="font-display text-6xl font-bold text-brick">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-charcoal">
          Page Not Found
        </h1>
        <p className="mt-2 max-w-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8 bg-brick hover:bg-brick-dark">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
