import React from "react"
import { Row, Col} from 'react-materialize'
import './style/ContentShop.scss';
import TypeProduct from './TypeProduct'
import Genders from './Genders'
import CreateProduct from './CreateProduct'
import ShowProduct from './ShowProduct'
import { Switch, Route } from "react-router-dom"

const ContentShop = () => (
  <Row className="contentShop" >
    <Col s={12} l={12} className="white z-depth-1 center-align">
      <h4 className="title">VENDE TUS PRODUCTOS</h4>
      <Switch>
        <Route exact path="/">
          <Genders /> 
        </Route>
        <Route exact path="/publish">
          <TypeProduct />
        </Route>
        <Route exact path="/createproduct">
          <CreateProduct />
        </Route>
        <Route exact path="/product">
          <ShowProduct />
        </Route>
      </Switch>
    </Col>
  </Row>
)

export default ContentShop