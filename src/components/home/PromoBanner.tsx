import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent to-accent/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTJIMTR2Mmgxem0wLTR2LTJIMTR2Mmgxem0tMTIgNHYtMkgxNHYyaDEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          
          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-foreground/20 px-4 py-1.5 text-sm font-medium text-accent-foreground mb-4">
                <Zap className="h-4 w-4" />
                Flash Sale - Limited Time
              </div>
              <h2 className="text-3xl font-extrabold text-accent-foreground md:text-4xl lg:text-5xl">
                Get Up to 40% Off
              </h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Exclusive deals on electronics, fashion & more. Don't miss out!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent-foreground text-accent hover:bg-accent-foreground/90"
                  >
                    Shop the Sale
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-4 max-w-xs">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-accent-foreground/10 p-6 backdrop-blur text-center">
                    <span className="text-4xl font-bold text-accent-foreground">24</span>
                    <p className="text-sm text-accent-foreground/80">Hours</p>
                  </div>
                  <div className="rounded-2xl bg-accent-foreground/10 p-6 backdrop-blur text-center">
                    <span className="text-4xl font-bold text-accent-foreground">59</span>
                    <p className="text-sm text-accent-foreground/80">Seconds</p>
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl bg-accent-foreground/10 p-6 backdrop-blur text-center">
                    <span className="text-4xl font-bold text-accent-foreground">12</span>
                    <p className="text-sm text-accent-foreground/80">Minutes</p>
                  </div>
                  <div className="rounded-2xl bg-accent-foreground/10 p-6 backdrop-blur text-center">
                    <span className="text-4xl font-bold text-accent-foreground">3K+</span>
                    <p className="text-sm text-accent-foreground/80">Items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
