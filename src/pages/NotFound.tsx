import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>

      <div className="text-center space-y-6 relative z-10 animate-fade-in">
        <h1 className="text-9xl font-bold text-primary animate-neon-pulse">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Ups! Strona nie znaleziona</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Wygląda na to, że ta trasa nie istnieje. Może chcesz wrócić na stronę główną?
          </p>
        </div>
        <Link to="/">
          <Button size="lg" className="group mt-4">
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Wróć na stronę główną
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
