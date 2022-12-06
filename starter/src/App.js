import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from './components/homeComponents/HomeScreen'
import NewRecipeScreen from './components/newRecipeComponents/NewRecipeScreen'
import DetailScreen from './components/detailComponents/DetailScreen'

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={ <HomeScreen />}/>
          <Route path='/newrecipe' element={ <NewRecipeScreen />}/>
          <Route path='/details/:id' element={ <DetailScreen />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App