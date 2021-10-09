/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import "moment-timezone"
import { Row, Col, FormControl, Form } from "react-bootstrap"
import CardItem from "../components/CardItem"
import listItems from "../actions/itemAction"

function ItemView() {
   const [searchWord, setSearchWord] = useState("")
   const [selectedFilter, setSeletedFilter] = useState("")
   const dispatch = useDispatch()

   const itemLists = useSelector((state) => state.itemList)

   const { items } = itemLists
   const rocketName = "rocket_name"
   useEffect(() => {
      dispatch(listItems())
   }, [dispatch])

   const lastYear = moment().subtract(1, "year")
   const lastMonth = moment().subtract(1, "month")
   const lastWeek = moment().subtract(1, "week")

   return (
      <>
         <Row className="justify-content-center m-4">
            <Col sm={12} md={6} lg={4} xl={3}>
               <Form className="d-flex " onSubmit={(e) => e.preventDefault()}>
                  <FormControl
                     type="search"
                     placeholder="Search By Name"
                     className="me-2 form-group col-lg-1"
                     aria-label="Search"
                     onChange={(event) => {
                        setSearchWord(event.target.value)
                     }}
                  />
               </Form>
            </Col>
            <Col sm={12} md={4} lg={2} xl={2}>
               <Form.Control
                  as="select"
                  className="ml-1"
                  defaultValue={selectedFilter}
                  onChange={(event) => setSeletedFilter(event.target.value)}
                  custom
               >
                  <option value="all">All</option>
                  <option value="success">Success</option>
                  <option value="failure">Failure</option>
                  <option value="upcoming">upcoming</option>
                  <option value="lastYear">Last Year</option>
                  <option value="lastMonth">Last Month</option>
                  <option value="lastWeek">Last Week</option>
               </Form.Control>
            </Col>
         </Row>
         <Row>
            {items
               // eslint-disable-next-line array-callback-return
               // eslint-disable-next-line consistent-return
               .filter((val) => {
                  if (searchWord == "") {
                     return val
                  }
                  if (
                     val.rocket[rocketName]
                        .toLowerCase()
                        .replaceAll(/\s/g, "")
                        .includes(
                           searchWord.toLowerCase().replaceAll(/\s/g, ""),
                        )
                  ) {
                     return val
                  }
               })
               .filter((val) => {
                  if (selectedFilter === "all" || selectedFilter === "") {
                     return val
                  }
                  if (selectedFilter === "upcoming" && val.upcoming) {
                     return val
                  }
                  if (selectedFilter === "success" && val.launch_success) {
                     return val
                  }
                  if (selectedFilter === "failure" && !val.launch_success) {
                     return val
                  }
                  if (
                     selectedFilter === "lastWeek" &&
                     moment(val.launch_date_utc).isSame(lastWeek, "week")
                  ) {
                     return val
                  }
                  if (
                     selectedFilter === "lastMonth" &&
                     moment(val.launch_date_utc).isSame(lastMonth, "month")
                  ) {
                     return val
                  }
                  if (
                     selectedFilter === "lastYear" &&
                     moment(val.launch_year).isSame(lastYear, "year")
                  ) {
                     return val
                  }
               })
               .map((item) => (
                  <Col key={item.mission_name} sm={12} md={6} lg={4} xl={3}>
                     <CardItem item={item} />
                  </Col>
               ))}
         </Row>
      </>
   )
}

export default ItemView
