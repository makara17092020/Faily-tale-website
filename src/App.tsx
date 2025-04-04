
import './App.css'
import Home from './pages/Home/home'
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./pages/Register/register";
// import Home from "./pages/Home/home";



function App() {
  return (
    <>
    <Home/>
      <main>
        <Header/>
        <Register/>
        <Footer/>
      </main>
       
    </>
  );
}

export default App;
