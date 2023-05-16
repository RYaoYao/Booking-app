import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./reserve.css"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import useFetch from "../../hooks/useFetch"
import { useContext, useState } from "react"
import { SearchContext } from "../../context/SearchContext"

import axios from "axios"
import { useNavigate } from "react-router-dom"

const Reserve = ({setOpen, hotelId}) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState([])
    const {dates} = useContext(SearchContext)
    const {data, loading, error} = useFetch(`http://localhost:3000/api/hotels/room/${hotelId}`)

    const getDateRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());
        let list = []
        while(date <= end){
            list.push(new Date(date).getTime());
            date.setDate(date.getDate()+1)
        }
        return list;
    }
    const handleSelect = (e) => {
        const isSelected =  e.target.checked;
        const value = e.target.value;
        setSelected(isSelected ? [...selected, value] : selected.filter(item=> item !== value))
    }
    const handleClick = async ()=> {
        try{
            await Promise.all(selected.map(roomId => {
                const res= axios.put(`http://localhost:3000/api/rooms/availability/${roomId}`,{dates:alldates})
                return res.data;
            }))
            setOpen(false)
            navigate("/");
        }catch (err){

        }
    }

    const alldates = getDateRange(dates[0].startDate, dates[0].endDate);
    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date=> alldates.includes(new Date(date).getTime()));
        return !isFound;
    }
  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={() => setOpen(false)} />
            <span>Select your rooms:</span>
            {data.map(item=> (
                <div className="rItem">
                    <div className="rItemInfo">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">Max people: <b>{item.maxPeople}</b></div>
                        <div className="rPrice">{item.price}</div>
                    </div>
                    <div className="rSelectRooms">
                    {item.roomNumbers.map(roomNumber=> (
                        <div className="room">
                            <label>{roomNumber.number}</label>
                            <input type="checkbox" value={roomNumber._id} onChange={handleSelect} disabled={!isAvailable(roomNumber)}/>
                        </div>
                    
                    ))}
                    </div>
                </div>
            ))}
                <button className="rButton" onClick={handleClick}>Reserve!</button>
        </div>
    </div>
  )
}

export default Reserve