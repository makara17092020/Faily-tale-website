
import Header from "./components/header"
import Footer from "./components/footer"
import AppRoute from "./Routes"





function App() {
  return (
    <>
     <Header/>
      <main>
        <AppRoute/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
