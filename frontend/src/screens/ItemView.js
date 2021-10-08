import React, { useState, useEffect } from "react"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import CardItem from "../components/CardItem"

function ItemView() {
   const [items, setItems] = useState([])

   const getAllData = () => {
      axios
         .get("https://api.spacexdata.com/v3/launches")
         .then((res) => {
            const allData = res.data
            setItems(allData)
         })
         .catch((error) => console.log(`error :${error}`))
   }
   useEffect(() => {
      getAllData()
   }, [])

   return (
      <>
         <h1>All Missions</h1>
         <Row>
            {items.map((item) => (
               <Col key={item.flight_number} sm={12} md={6} lg={4} xl={3}>
                  <CardItem item={item} />
               </Col>
            ))}
         </Row>
      </>
   )
}

export default ItemView
