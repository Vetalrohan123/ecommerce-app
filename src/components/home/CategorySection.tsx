import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Shop by Category</h2>
          <p className="mt-2 text-muted-foreground">
            Explore our wide range of product categories
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="mb-1 block text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-foreground">{category.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {category.productCount.toLocaleString()} items
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
