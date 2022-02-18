import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'


const RoutesApp  = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
  )
}

export default RoutesApp 