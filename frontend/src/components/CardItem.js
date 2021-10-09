import React from "react"
import { Card, Badge } from "react-bootstrap"
import Moment from "react-moment"

function CardItem({ item }) {
   const rocketType = "rocket_type"
   const rocketName = "rocket_name"
   return (
      <Card className="m-3" text="dark">
         {item.launch_success === true ? (
            <div bg="green" border="success">
               <Card.Header text="text-center">
                  <h5 style={{ color: "green" }}>{item.mission_name}</h5>
               </Card.Header>
               <Card.Body>
                  <div className="row">
                     <div className="col-md-6">
                        <p>Rocket Name: {item.rocket[rocketName]}</p>
                     </div>
                     <div className="col-md-6">
                        <p>Rocket Type: {item.rocket[rocketType]}</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <p>
                           Date:{" "}
                           <Moment format="YYYY-MM-DD">
                              {item.launch_date_local}
                           </Moment>
                        </p>
                     </div>
                     <div className="col-md-6">
                        Launch:{" "}
                        <Badge pill bg="success">
                           Successful
                        </Badge>
                     </div>
                  </div>
               </Card.Body>
            </div>
         ) : (
            <div bg="danger" border="danger">
               <Card.Header text="text-center">
                  <h5 style={{ color: "red" }}>{item.mission_name}</h5>
               </Card.Header>
               <Card.Body>
                  <div className="row">
                     <div className="col-md-6">
                        <p>Rocket Name: {item.rocket[rocketName]}</p>
                     </div>
                     <div className="col-md-6">
                        <p>Rocket Type: {item.rocket[rocketType]}</p>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-md-6">
                        <p>
                           Date:{" "}
                           <Moment format="YYYY-MM-DD">
                              {item.launch_date_local}
                           </Moment>
                        </p>
                     </div>
                     <div className="col-md-6">
                        Launch:{" "}
                        <Badge pill bg="danger">
                           Failed
                        </Badge>
                     </div>
                  </div>
               </Card.Body>
            </div>
         )}
      </Card>
   )
}

export default CardItem
