import "./SearchItem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/448282241.jpg?k=c7bfb743b1fa42be65e7e01e624a4b43c5cb072701b4349ecb2f17e507b67d2d&o=&hp=1"
        alt=""
        className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Tree of Life</h1>
            <span className="siDistance">10.6km from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Air conditioned apartment</span>
            <span className="siFeatures">Situated in Manila, Tree of Life Penthouse 3BR w/Gym, Pool, Sauna+More features accommodation with a private pool, private parking and free WiFi. This apartment is 6.6 km from Shangri-La Plaza and 8.7 km from Bonifacio High Street.</span>
            <span className="CancelOp">Free cancellation</span>
            <span className="CancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails"></div>
    </div>
  )
}

export default SearchItem