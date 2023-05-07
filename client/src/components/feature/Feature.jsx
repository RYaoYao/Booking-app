import "./feature.css"
import useFetch from "../../hooks/useFetch"
const Feature = () => {
    const {data, loading, error} = useFetch("http://localhost:3000/api/hotels/countByCity?cities=Manila,Boracay,Cebu")
  return (
    <div className="featured">
        {loading ? ("Loading please wait") : (<><div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685731.jpg?k=fc0210d717fbafe0fef7faa2b24b65cedfcae96704e636d7915d63d9b36d05d5&o=" className="featuredImg" alt='Manila'/>
            <div className="featuredTitles">
                <h1>Manila</h1>
                <h2>{data[0]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685685.jpg?k=f79f48b55a70e2dc06234ef95e5f6ffc88916ceff681d6a7090a1129de7d9c0b&o=" className="featuredImg" alt='Cebu'/>
            <div className="featuredTitles">
                <h1>Cebu City</h1>
                <h2>{data[2]} properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/685714.jpg?k=b8bf819f77d847518d4e4e7af812c6612648e9298f17136d4e22c4e495330c2f&o=" className="featuredImg" alt='Boracay'/>
            <div className="featuredTitles">
                <h1>Boracay</h1>
                <h2>{data[1]} properties</h2>
            </div>
        </div></>)}
    </div>
  )
}

export default Feature