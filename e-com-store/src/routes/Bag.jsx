import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const homeItems = useSelector((store) => store.homeItems);
  console.log("homeitems = ", homeItems);
  // console.log("eg- ",homeItems[1].id)
  const finalItems = homeItems.filter((item) => {
    const boolean = bagItems.indexOf(item.id) >= 0;
    return boolean;
  });
  console.log("bagitems-", bagItems);
  console.log("final items -  ", finalItems);
  return (
    <>
      <div className="bag">
        {bagItems.length === 0 ? (
          <center className="bag-empty-div">
            <p className="bag-empty-message">Your Bag is Empty</p>
          </center>
        ) : (
          <>
            <div className="bag-items">
              {finalItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
            <div className="bag-summary">
              <BagSummary />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bag;
