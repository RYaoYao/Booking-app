import "./featuredprop.css"

const FeaturedProp = () => {
  return (
    <div className="fp">
        
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="Aparthotel" className="fpImg" />
            <span className="fpName">ApartHotel Stare Miasto</span>
            <span className="fpCity">Old Town Poland</span>
            <span className="fpPrice">Starting from P 10,790</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="7seasons" className="fpImg" />
            <span className="fpName">7Seasons Apartments</span>
            <span className="fpCity">06, Hungary, Budapest</span>
            <span className="fpPrice">Starting from P 9,277</span>
            <div className='fpRating'>
                <button>8.8</button>
                <span>Fabolous</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1" alt="oriente" className="fpImg" />
            <span className="fpName">Oriente Palace Apartments</span>
            <span className="fpCity">Centro, Spain, Madrid</span>
            <span className="fpPrice">Starting from P 12,379</span>
            <div className='fpRating'>
                <button>8.9</button>
                <span>Fabolous</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" alt="numa" className="fpImg" />
            <span className="fpName">numa I Vita Apartments</span>
            <span className="fpCity">Fortezza da Basso, Italy, Florence</span>
            <span className="fpPrice">Starting from P 18,097</span>
            <div className='fpRating'>
                <button>9.3</button>
                <span>Superb</span>
            </div>
        </div>
    </div>
    )
}

export default FeaturedProp