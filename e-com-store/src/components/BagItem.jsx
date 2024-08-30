import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { TiDelete } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";


const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="bag-nail-card position-relative" /*style={{ width: "18rem" }}*/>
        <div className="bag-nail-card-img">
          <img
            src={item.image}
            className="bag-card-img"
            alt="Nail image not loaded"
          />
        </div>
        <div className="bag-card-body">
          <div className="bag-item-details">
            <h5 className="card-title bag-card-title">{item.item_name}</h5>
            <h6 className="nail-artist bag-nail-artist">By {item.nail_artist}</h6>
            <p className="card-text">Original Price: ₹{item.original_price}</p>
            <p className="card-text">Discount: {item.discount_percentage}%</p>

            <p className="current-price">
              Current Price: ₹{item.current_price}
            </p>
          </div>
          <div className="bag-remove-btn-div"></div>
        </div>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger remove-badge" onClick={handleRemove}>
        <AiFillDelete />
        </span>
      </div>
    </>
  );
};

export default BagItem;
