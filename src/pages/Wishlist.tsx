import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-secondary p-6">
              <Heart className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Your wishlist is empty</h1>
          <p className="mt-2 text-muted-foreground">
            Start adding items you love to your wishlist!
          </p>
          <Link to="/products">
            <Button variant="accent" size="lg" className="mt-6 gap-2">
              Browse Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
