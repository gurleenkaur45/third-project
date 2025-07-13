import { Query } from "@tanstack/react-query";
import "./App.css";
import Address from "./components/address";
import Button from "./components/button";
import ColorChanger from "./components/button";
import Card from "./components/card";
import ECommerce from "./components/e-commerce";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Hooks from "./components/hooks";
import Navbar, { Fullname } from "./components/navbar";
import NewCard from "./components/newCard";
import Passstring from "./components/passstring";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Icon from "./pages/icon";
import Zod from "./components/zod";

// import { data } from "./constantdata/cardData" ;

function App() {
  return (
    <>
      {/* <Navbar />
      <Footer/>
      <Fullname/>
      <Homepage/> 
      <Passstring/>
      <ECommerce/>
      <Address/> */}

      {/* <Hooks/> */}
      {/* <About/> */}
      {/* <Icon/>
<Contact/>
<Button/> */}
      {/* <Home/> */}
      {/* <NewCard/> */}

      <Zod />

      {/* <h1>E-commerce</h1>
      {data.map((item) => {
        return (
          <div>
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
      </div>
        );
       })} */}
    </>
  );
}

export default App;

// class based component banauni eg garni xutai file banauni ani padherw pani aauni ani diff pani
// paila chai e-commerce wala lai dherai component banako thiye teslai eutai component garayerw check garni
// react lifecycle herni
