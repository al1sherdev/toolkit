import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreatePage from "./components/CreatePage"
import Home from "./components/Home"
import Update from "./components/Update"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/create-page" element={ <CreatePage /> } />
          <Route path="/edit/:id" element={ <Update /> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
