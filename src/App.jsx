// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const nav =['Home','about','service','car-center','contact'];
  const hom =[
    {
      h1:"Car service provider",
      p: "As a Customer Account Representative, I specialize in delivering personalized service and building strong client relationships. With a keen eye for detail and a proactive approach, I ensure that every customer's needs are met promptly and efficiently.",
      cont: "Contact Us",
      img: "../Images/Illustration/image1.jpg"
    }
  ]
  const serv=[
    {
      h2:"Our Servives",
      h_img:"../Images/Illustration/plug.png",
      img1:"../public/images/illustration/s1.png",
      h5_1:"Special services",
      p1:"Understand the pain points of car owners and what they seek in a car service provider.",
      img2:"../Images/Illustration/s2.png",
      h5_2:"Registration and Onboarding",
      p2:"Permanently electrically connected together and can be supplied",
      img3:"../Images/Illustration/s3.png",
      h5_3:"Insurance Management",
      p3:"Liability insurance for service providers and protection for customer vehicles..",
      img4:"../Images/Illustration/s4.png",
      h5_4:"Customer Retention",
      p4:"Implement loyalty programs and regular engagement through newsletters and updates.",
      img5:"../Images/Illustration/s5.png",
      h5_5:"Customer Support",
      p5:"Provide robust customer support for inquiries, complaints, and feedback."
    }
  ]
  const abou=[
    {

      h2:"About Us",
      img:"../Images/Illustration/plug.png",
      p:"Welcome to car service provider, your trusted partner for all your car service needs. We are a dedicated team of automotive enthusiasts and professionals committed to providing exceptional car maintenance and repair services. Our mission is to make car ownership hassle-free by offering a comprehensive range of services, from routine maintenance to emergency repairs, all tailored to meet the unique needs of our customers.",
      read:"Explore More",
      img1:"../Images/Illustration/image3.jpg",
      img2:"../Images/Illustration/image2.jpg"
    }
  ]

  const blo=[{
    h2:"Our car center",
    img:"../Images/Illustration/plug.png",
    img1: "../Images/Illustration/image4.jpg",
    img2: "../Images/Illustration/image2.jpg",
    img3: "../Images/Illustration/image5.jpg",
    img4: "../Images/Illustration/image6.jpg",
    p:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised",
    h5:"Blog Title Goes Here"
  }]

  const cont=[
    {
      h2:"Contact Us",
      img:"../Images/Illustration/plug.png",
      send:"Submit problem"
    }
  ]
  const foot=[
    {
      p:"Location: India",
      call:"Call: +91 1223456789",
      mail:"carservice@domain.com",
      sub:"CONTACT US"  
    }
  ]
  return (
    <>
        <BrowserRouter>
          <Navigation navApp={nav}/>
          <Routes>
            <Route path="/" element={<Home homeApp={hom}/>}/>
            <Route path="/Service" element={<Service servApp={serv}/>}/>
            <Route path="/About" element={<About aboApp={abou}/>}/>
            <Route path="/Blog" element={<Blog blogApp={blo}/>}/>
            <Route path="/Contact" element={<Contact contApp={cont}/>}/>
          </Routes>
          <Footer footApp={foot}/>
        </BrowserRouter>
    </>
  )
}

export default App;