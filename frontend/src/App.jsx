import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Error page</h1>} />
        </Route>

    </Routes>
    
    </>
      
  )
}

export default App
