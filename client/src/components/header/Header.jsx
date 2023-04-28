import "./header.css"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane,faCar, faTreeCity, faTaxi,  } from '@fortawesome/free-solid-svg-icons'
import { faUser, faCalendarDays} from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options,setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1
    })

    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] +1 : options[name] -1,
        };
      });
    };
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode": "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed}  />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane}  />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar}  />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTreeCity}  />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi}  />
            <span>Airport Taxis</span>
            </div>
          </div>
          { type !== "list" &&
            <>
          <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
          <p className="headerDesc">
            Get rewarded from your travels - unlock instant saving of 10$ or more with a free Eclipse Booking account
          </p>
          <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className = "searchDate"
                />}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faUser} className="headerIcon" />
              <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult ‧ ${options.children} children  ‧ ${options.room} room`}</span>
              {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled= {options.adult <=1} onClick={()=> handleOption("adult", "d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterButton" onClick={()=> handleOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled= {options.children <=0} onClick={()=> handleOption("children", "d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterButton" onClick={()=> handleOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                  <button className="optionCounterButton" disabled= {options.room <=1} onClick={()=> handleOption("room", "d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterButton" onClick={()=> handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn">Search</button>
            </div>
          </div> </>}
        </div>
    </div>

  )
}

export default Header