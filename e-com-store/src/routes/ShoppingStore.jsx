import { useSelector } from "react-redux";
import ShoppingItem from "../components/ShoppingItem";

const ShoppingStore = () => {
  const homeItems = useSelector((store) => store.homeItems);

  return (
    <>
      <div className="shopping-store">
        {homeItems.map((item) => (
          <ShoppingItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ShoppingStore;
