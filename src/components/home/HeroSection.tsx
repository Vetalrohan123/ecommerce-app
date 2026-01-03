import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container-custom relative py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
              ✨ New Year Sale - Up to 50% Off
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Discover the
              <span className="block text-accent">Best Deals</span>
              of the Season
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0">
              Shop from thousands of products across electronics, fashion, home & more. 
              Premium quality, unbeatable prices.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link to="/products">
                <Button variant="hero" size="xl" className="gap-2 w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products?category=electronics">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Explore Electronics
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 to-accent/10 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055uj8e0?w=600&q=80"
                alt="Featured products"
                className="relative rounded-3xl object-cover shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -left-8 top-1/4 animate-bounce-subtle rounded-2xl bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Headphones</p>
                    <p className="text-xs text-muted-foreground">30% Off</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 animate-bounce-subtle rounded-2xl bg-card p-4 shadow-xl" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                    <span className="text-2xl">⌚</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Smartwatch</p>
                    <p className="text-xs text-muted-foreground">New Arrival</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 border-t border-primary-foreground/10 pt-8">
          <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
            <Truck className="h-6 w-6" />
            <div>
              <p className="font-semibold">Free Shipping</p>
              <p className="text-sm text-primary-foreground/60">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
            <Shield className="h-6 w-6" />
            <div>
              <p className="font-semibold">Secure Payment</p>
              <p className="text-sm text-primary-foreground/60">100% protected</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
            <RefreshCw className="h-6 w-6" />
            <div>
              <p className="font-semibold">Easy Returns</p>
              <p className="text-sm text-primary-foreground/60">30-day returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
