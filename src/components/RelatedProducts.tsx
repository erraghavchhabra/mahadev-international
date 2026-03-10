import React from "react";

interface Product {
  name: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    name: "Filter Press",
    description:
      "Filter press optimised for reliable separation of solids and smooth oil clarification.",
    image: "/img/filter-press-36.png",
    link: "#",
  },
  {
    name: "Redler Chain",
    description:
      "Engineered for efficient horizontal or inclined transfer of oilseed, cake, or bulk materials.",
    image: "/img/redler.png",
    link: "#",
  },
  {
    name: "Spare Parts",
    description:
      "Reliable, hardfaced spares that boost equipment longevity and reduce unexpected production halts.",
    image: "/img/kcp.png",
    link: "#",
  },
];

const RelatedProducts: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Related Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 w-full bg-white overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-[14px] mb-4">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
