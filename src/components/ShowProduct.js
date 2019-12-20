import React from "react"
import { Row, Col} from 'react-materialize'
import './style/ShowProduct.scss'
import { connect } from "react-redux"

const ShowProduct = ({product}) => (
  <Row className="contentType" >
    <Col s={12} l={12} className="center-align">
      <h5>Nuevo Producto</h5>
      <p className="description">        
        ID: {product.id}<br />
        GENERO: {product.gender}<br />
        PRODUCTO: {product.product}<br />
        ITEM: {product.item}<br />
        TALLA: {product.size}<br />
        MARCA: {product.brand}<br />
        ESTADO: {product.stateP}<br />
        IMAGEN: {product.imgDest}<br />
      </p>
    </Col>
  </Row> 
)

const mapStateToProps = state => ({
  product: state.products[state.products.length-1]
})

const mapDispatchToProps = dispatch => ({
  stablishGender(gender){
    dispatch({
      type: "stablishGender",
      gender: gender.name
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);