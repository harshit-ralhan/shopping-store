import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const ShoppingItem = ({ item }) => {
  const dispatchMeraAction = useDispatch();
  const bagItems = useSelector((store) => store.bag);

  const handleAdd = () => {
    dispatchMeraAction(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatchMeraAction(bagActions.removeFromBag(item.id));
  };

  const elementFound = bagItems.indexOf(item.id) >= 0;

  return (
    <>
      <div className="card shop-nail-card">
        <img
          src={item.image}
          className="shop-card-img"
          alt="Nail image not loaded"
        />
        <div className="card-body">
          <div className="nail-name">
            <h5 className="card-title">{item.item_name}</h5>
            <h6 className="nail-artist">By {item.nail_artist}</h6>
          </div>

          <hr className="card-hr" />

          <div className="pricing-info">
            <p className="card-text">Original Price: ₹{item.original_price}</p>
            <p className="card-text">Discount: {item.discount_percentage}%</p>

            <div className="curr-price-div">
              <p className="card-text curr-price">Current Price:</p>
              <p className="curr-price-value">₹{item.current_price}</p>
            </div>
          </div>

          {elementFound ? (
            <button
              type="button"
              className="btn  remove-button"
              onClick={handleRemove}
            >
              Remove
            </button>
          ) : (
            <button
              type="button"
              className="btn add-to-bag-button"
              onClick={handleAdd}
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingItem;
