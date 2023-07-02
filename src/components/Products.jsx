import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-gray-300 py-2 w-80 text-center">
          Shopping Everday
        </h1>
        <span className="w-20 h-[3px] bg-gray-800"></span>
        <p className="max-w-[700px] text-gray-600 text-center ">
          eshop is an online platform with over 1000 products and over a 100
          brands in our catalogue you will find everything you are looking for.
          Right from Sweatshirts, T-Shirts, Shirts, and Jackets. Choose from a
          wide range of options in every category, exclusively handpicked to
          help you find the best quality available at the lowest prices.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
