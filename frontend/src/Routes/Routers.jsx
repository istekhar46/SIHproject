import {Route, Routes, } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Community from '../components/Community/Community'
import NewsCategory from '../components/NewsCategory/NewsCategory'
import Hindi from '../Pages/Hindi'
import EngNews from '../Pages/NewsInEnglish'
import Gujrati from '../Pages/NewsInSpanish'

const Routers = () => {
  return (

    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/newscategory" element={<NewsCategory/>}/>
        <Route path="/english" element={<EngNews/>}/>
        <Route path="/hindi" element={<Hindi/>}/>
        <Route path="/gujarati" element={<Gujrati/>}/>
    </Routes>


    </>
  )
}

export default Routers