import React, { useEffect,useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Nav } from "./components/Header";
import { Front } from "./components/Front";
import { Feature } from "./components/Feature";
import { Footer, Footer1 } from "./components/Footer1";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewFeaturesSection from "./components/NewFeatureSection";
import "./App.css";
import Carousel from "./components/Carousel";
import FormModal from "./components/Form";
import ButtonComponent from "./components/Button";
import Checkout from "./components/Checkout";
import TermsAndConditions from "./components/Terms";
import CancellationRefundPolicy from "./components/Policy";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailure from "./components/PaymentFailure";
import Enquiry from "./components/steps/Enquiry";
import Rejected from "./components/Reject";
import ResponsePage from "./components/ResponsePage";
import MultiForm from "./components/MultiForm";
import Meeting from "./components/Meeting";

function App() {

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.action === 'approved') {
        window.location.href = `/checkout?user=${encodeURIComponent(data.user)}`;
      } else if (data.action === 'rejected') {
        window.location.href = `/rejected?user=${encodeURIComponent(data.user)}`;
      }
    };

    return () => {
      socket.close();
    };
  }, []);
  // Creating refs for different sections
  const homeRef = useRef(null);
  const trainingRef = useRef(null);
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const ButtonRef = useRef(null);
  const MeetingRef=useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const navbarHeight = 80; // Adjust this value based on your navbar height

  // Scroll to section or navigate to page
  const scrollToSection = (ref) => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: ref.current.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    } else {
      // Navigate back to home first, then scroll
      // Navigate back to home first, then scroll
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: ref.current.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }, 0); // delay for the navigation
    }
  };

  return (
    <>
      <Nav
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToTraining={() => scrollToSection(trainingRef)}
        scrollToCourses={() => scrollToSection(coursesRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToButton={() => scrollToSection(ButtonRef)}
        scrollToMeeting={()=> scrollToSection(MeetingRef)}

      />

      <Routes>
        {/* Main page sections */}
        <Route
          path="/"
          element={
            <>
              {/* Sections on the same page */}
              <Carousel />
              <div id="home" ref={homeRef}>
                <Front scrollToButton={() => scrollToSection(ButtonRef)} />
              </div>
              <div id="training" ref={trainingRef}>
                <Feature />
              </div>
              <div  id="meeting" ref={MeetingRef}>
                <Meeting/>
              </div>
              <div id="button" ref={ButtonRef}>
                {" "}
                {/* Add id for RegistrationComponent */}
                <ButtonComponent />
              </div>
              <div id="courses" ref={coursesRef}>
                <Home />
              </div>
              <div id="about" ref={aboutRef}>
                <NewFeaturesSection />
              </div>
              <div id="contact" ref={contactRef}>
                <Contact />
              </div>
            </>
          }
        />

        {/* Page-based navigation */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/form" element={<FormModal />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<CancellationRefundPolicy />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/enquiry" element={<Enquiry/>}/>
        <Route path="/rejected" element={<Rejected/>} />
        <Route path="/responsePage" element={<ResponsePage/>} />
        <Route path='/multiform' element={<MultiForm/>}/>

      </Routes>

      <Footer1 />
    </>
  );
}

export default App;
