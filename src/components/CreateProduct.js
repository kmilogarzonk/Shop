import React from 'react';
import { Row, Col, Select, TextInput, Button, Modal, Icon } from 'react-materialize'
import { Link } from "react-router-dom"
import M from "materialize-css/dist/js/materialize"
import './style/CreateProduct.scss'
import { connect } from "react-redux"

let size
let brand
let stateP
let imgDest
let otherImgOne
let otherImgTwo

const CreateProduct = ({product, addProduct}) => (  
  <Row className="createProduct">
    <Col s={12} l={12}>
      <form 
        onSubmit={ e => {
            e.preventDefault()
            if(size === undefined || brand === undefined || stateP === undefined || imgDest === undefined ){
              return M.toast({ html: 'Todos los datos marcados con * son obligatorios' })
            }else if(product.typePublish === "" || product.typeProduct === "" || product.typeProductItem === ""){
              return M.toast({ html: 'No haz elegido la categoria' })
            }else{
              let newProduct = {
                gender: product.typePublish,
                product: product.typeProduct,
                item: product.typeProductItem,
                size: size,
                brand: brand,
                stateP: stateP,
                imgDest: imgDest,
                otherImgOne: otherImgOne? otherImgOne : null,
                otherImgTwo: otherImgTwo? otherImgTwo : null
              }
              addProduct(newProduct)
            }
        }}
        className="formCreateProduct">
        <Row className="form">

          <Col m={12} s={12} l={12}>
            <div className="options">
              <div className="titles">
                CATEGORÍA <span>*</span>
              </div>
              <div className="contentSec">
                <p>{product.typePublish} > {product.typeProduct} > {product.typeProductItem}</p>
                <Link to="/publish">
                  Cambiar
                </Link>
              </div>
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                TALLA <span>*</span>
              </div>
              <div className="contentSec">
                <Select
                  s={12} l={12}
                  value={ size }
                  onChange={ e => {
                    size = e.target.value
                  }}>
                  <option value="" >
                    - Seleccionar -
                  </option>
                  {
                    product.sizeProduct.map( size => (
                      <option key={size.id} value={size.name}>
                        {size.name}
                      </option>
                    ))
                  }
                </Select>
              </div>
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                MARCA <span>*</span>
              </div>
              <div className="contentSec">
                <Select
                  s={12} l={12}
                  value={ brand }
                  onChange={ e => {
                    brand = e.target.value
                  }}>
                  <option value="">
                    - Seleccionar -
                  </option>
                  {
                    product.brandProduct.map( size => (
                      <option key={size.id} value={size.name}>
                        {size.name}
                      </option>
                    ))
                  }
                </Select>
              </div>
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                ESTADO <span>*</span>
              </div>
              <div className="contentSec">
                <Select
                  s={12} l={12}
                  value={ stateP }
                  onChange={ e => {
                    stateP = e.target.value
                  }}>
                  <option value="">
                    - Seleccionar -
                  </option>
                  {
                    product.stateProduct.map( size => (
                      <option key={size.id} value={size.name}>
                        {size.name}
                      </option>
                    ))
                  }
                </Select>
              </div>
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                SUBE FOTOS
              </div>
              <div className="contentSec">
                <a
                  className="modal-trigger"
                  href="#modalInfoImg">
                  Mira nuestros tips para subir buenas fotos
                </a>
                <TextInput
                  s={12} l={12}
                  type="file"
                  label="Sube tu imagen"
                  onChange={e => {
                    console.log("uploadFile")
                    console.log("e", e)
                  }}
                /> 
              </div>         
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                IMAGEN DESTACADA <span>*</span>
              </div>
              <div className="contentSec">
                <p className="label">Ingresa URL</p>
                <TextInput
                  className="inputText"
                  s={12} l={12}      
                  value={imgDest}
                  onChange={ e => {
                    imgDest = e.target.value
                  }}
                  children={
                    <Button
                      className="iconInput"         
                      node="a"
                      icon={<Icon>send</Icon>}>
                    </Button>
                  } />
              </div>
            </div>
          </Col>

          <Col m={12} s={6} l={6}>
            <div className="options">
              <div className="titles">
                OTRAS IMAGENES
              </div>
              <div className="contentSec">
                <p className="label">Ingresa URL</p>
                <TextInput
                  s={12} l={12}    
                  className="inputText"  
                  value={otherImgOne}
                  onChange={ e => {
                    otherImgOne = e.target.value
                  }}
                  children={
                    <Button
                      className="iconInput"         
                      node="a"
                      icon={<Icon>send</Icon>}>
                    </Button>
                  } />
                <p className="label">Ingresa URL</p>
                <TextInput
                  s={12} l={12}    
                  className="inputText"  
                  value={otherImgTwo}
                  onChange={ e => {
                    otherImgTwo = e.target.value
                  }}
                  children={
                    <Button
                      className="iconInput"         
                      node="a"
                      icon={<Icon>send</Icon>}>
                    </Button>
                  } />
              </div>
            </div>
          </Col>
          <Col s={12} m={12} l={12}>
            <Button
              className="btnSend"       
              type="submit"
              waves="light">
              Publicar
            </Button>
          </Col>
        </Row>  
      </form>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Close</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Modal Header"
        id="modalInfoImg"
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
      >
        Lorem ipsum dolor sit amet
      </Modal>
    </Col>
  </Row>
)

function initInfo(typePublish, typeProductItem){
  if(typePublish === "" ){
    window.location.href = '/'
  }
  let productsFound = typeProductItem
  return productsFound
}

const mapStateToProps = state => ({  
  product: {
    typePublish: state.typePublish,
    typeProduct: state.typeProduct,
    typeProductItem: initInfo(state.typePublish, state.typeProductItem),
    sizeProduct: state.sizeProduct,
    brandProduct: state.brandProduct,
    stateProduct: state.stateProduct
  }
})

const mapDispatchToProps = dispatch => ({
  addProduct(product){
    dispatch({
      type: "addProduct",
      product: product
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)

