import AccessoriesComp from "../../Components/AccessoriesComp/AccessoriesComp";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const Accessories = ({ products, onAddToCart }) => {
  return (
    <div>
      <Header />
      <AccessoriesComp products={products} onAddToCart={onAddToCart} />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Accessories;
