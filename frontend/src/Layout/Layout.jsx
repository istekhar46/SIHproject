import Footer from "../Pages/Footer"
import Routres from "../Routes/Routers"
import Header from "../components/Header/Header"

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routres/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout