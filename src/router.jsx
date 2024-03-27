import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App.jsx"
import Index from "./pages/Index"
import Show from "./pages/Show"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>}/>
        <Route path="pets/:id" element={<Show/>}/>
        
    </Route>
))

export default router