import React from 'react';
import { Row, Col, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize'
import { Link } from "react-router-dom"
import './style/TypeProduct.scss'
import { connect } from "react-redux"

function selectImageType(gender){
  let image
  if(gender === "Mujer"){
    image = "woman"
  }else if(gender === "Hombre"){
    image = "man"
  }else{
    image = "boy"
  }
  return (
    <img src={`images/${image}.jpg`} alt={image} className="image" />
  )
}


const TypeProduct = ({publish, stablishProduct}) => (
  <Row className="typeProduct">
    <Col s={12} l={12}>
      <Row className="valign-wrapper products">
        <Col s={6} l={6} m={12} className="center-align">
          {selectImageType(publish.typePublish)}
          <p>{publish.typePublish}</p>              
          <Link to="/">
            <Button
              className="red lighten-2"
              node="button"
              style={{
                marginRight: '5px'
              }}
              waves="light"
            >
              Volver
              <Icon left>
                arrow_back
              </Icon>
            </Button>
          </Link>
        </Col>
        <Col s={6} m={12} l={6} className="left-align">
          <Row>
            <Col m={12} s={12}>
              <Collapsible popout>              
                {
                  publish.typeProducts.map(product => (
                    <CollapsibleItem
                      key={product.id}
                      header={product.name}
                    >
                      <ul>
                        {
                          product.items.map(item => (
                            <Link key={item.id} to="/createproduct" onClick={() => stablishProduct(product, item)}>
                              <li>
                                {item.name}
                              </li>
                            </Link>
                          ))
                        }
                      </ul>
                    </CollapsibleItem>                    
                  ))
                }
              </Collapsible>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
)
function getProducts(type, arProducts){
  if(type === "" ){
    window.location.href = '/'
  }
  let productsFound = arProducts
  return productsFound
}

const mapStateToProps = state => ({
  publish: {
    typePublish: state.typePublish,
    typeProducts: getProducts(state.typePublish, state.typeProducts)
  }
})

const mapDispatchToProps = dispatch => ({
  stablishProduct(product, item){
    dispatch({
      type: "stablishProduct",
      product: product.name,
      item: item.name
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TypeProduct)

