import { Link } from "react-router-dom"
import "./SearchItem.css"
const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img 
        src= {item.photos[0]}
        alt=""
        className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.size} from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Air conditioned apartment</span>
            <span className="siFeatures">{item.description}</span>
            <span className="CancelOp">Free cancellation</span>
            <span className="CancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">details
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
          </div>}
        
        <div className="siDetailTexts">
          <span className="siPrice">P{item.CheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availablity</button>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default SearchItem