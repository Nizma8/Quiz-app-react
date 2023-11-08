import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TbBrandJavascript } from "react-icons/tb";
import { MdStart } from "react-icons/md";
import { BiSolidUserPin } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";


function Landing({ getCat ,handleSelect,categor, }) {
;
  return (
    <>
      <div className="w-50  border shadow-lg bg-info rounded d-flex flex-column" >
        <Card className="border w-100  bg-info py-2 " >
          
        </Card>
        <Card
          className=" d-flex justify-content-center align-items-center p-5  bg-white text-white "
          
        >
          <Card.Body className="bg-white">
            <Card.Title className="fs-1 fw-bold">
              {" "}
              <TbBrandJavascript
                style={{ fontSize: "80px" }}
                className="text-info me-2"
              />
              Quiz
            </Card.Title>
            <Card.Text className="text-black">
              Welcome to the JavaScript Beginners Quiz! This quiz is designed
              for those who are new to JavaScript and want to test their basic
              knowledge of this popular programming language. Whether you're
              just starting your coding journey or looking to reinforce your
              foundational skills, our quiz is the perfect place to begin.
            </Card.Text>
            <Row className="">
              <Col md={12} xl={12} lg={12} sm={12} className="">
             {
              ["Html","React","Javascript"].map((item,index)=>{return(
                <Card  onClick={()=>{handleSelect(item)}} key={index} className={` rounded ${item!==categor?'bg-info':'bg-black text-white'} border-none border fw-bolder fs-4 bu text-center py-3 mb-2 cursor-pointer`} >{item}</Card>
              )})
             }
              </Col>
            </Row>
            <div className="d-flex justify-content-center mt-3"> {/* Center the button */}
      <Button variant="white border shadow rounded btn-link fw-bolder py-2" onClick={getCat}>
        GET STARTED <MdStart className="fs-5" />
      </Button>
    </div>
          </Card.Body>
        </Card>
      </div>

      
    </>
  );
}

export default Landing;
