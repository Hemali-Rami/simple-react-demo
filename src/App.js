import Birthdayreminemain from "./compoents/FunctionalComponents/BithdayReminder/Birthdayreminemain.js";
import TourContainer from "./compoents/FunctionalComponents/Tour/TourContainer";
import { Reviewmain } from "./compoents/FunctionalComponents/Review/Reviewmain";
import AccordianContainer from "./compoents/FunctionalComponents/Accordian/AccordianContainer";
import FoodMenuContainer from "./compoents/FunctionalComponents/FoodMenu/FoodMenuContainer";
import TabsContainer from "./compoents/FunctionalComponents/Tabs/TabsContainer";
import SliderContainer from "./compoents/FunctionalComponents/Slider/SliderContainer";
import "./scss/style.css";
function App() {
  return (
    <>
      <Birthdayreminemain />
      <TourContainer />
      <Reviewmain />
      <AccordianContainer />
      <FoodMenuContainer />
      <TabsContainer />
      <SliderContainer />
    </>
  );
}

export default App;
