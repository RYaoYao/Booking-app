import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Feature from "../../components/feature/Feature"
import PropertyList from "../../propertyList/PropertyList"
import FeaturedProp from "../../components/featuredProp/FeaturedProp"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
const Home = () => {
  return (
    <div><Navbar/>
      <Header/>
      <div className="homeContainer">
        <Feature/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProp/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home