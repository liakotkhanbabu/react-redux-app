import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header"
import ItemView from "./screens/ItemView"

function App() {
   return (
      <>
         <Router>
            <Header />
            <Route path="/" component={ItemView} />
         </Router>
      </>
   )
}

export default App
