import React from 'react';
import { Row, Col, Select, TextInput, Button, Modal, Icon } from 'react-materialize'
import { Redirect, Link } from "react-router-dom"
import M from "materialize-css/dist/js/materialize"
import './style/CreateProduct.scss'
import { connect } from "react-redux"

class CreateProduct extends React.Component {
  constructor(props) {    
    super(props)
    this.state = {
      size: "",
      stateP: "",
      brand: "",
      imgDest: "",
      otherImgOne: "",
      otherImgTwo: "",
      redirect: false
    }
  }

  componentDidMount(){     
  }

  _submitCreateProduct = e => {
    e.preventDefault()
    if(this.state.size === "" || this.state.brand === "" || this.state.stateP === "" || this.state.imgDest === "" ){
      return M.toast({ html: 'Todos los datos marcados con * son obligatorios' })
    }else if(this.props.product.typePublish === "" || this.props.product.typeProduct === "" || this.props.product.typeProductItem === ""){
      return M.toast({ html: 'No haz elegido la categoria' })
    }else{
      let newProduct = {
        gender: this.props.product.typePublish,
        product: this.props.product.typeProduct,
        item: this.props.product.typeProductItem,
        size: this.state.size,
        brand: this.state.brand,
        stateP: this.state.stateP,
        imgDest: this.state.imgDest,
        otherImgOne: this.state.otherImgOne,
        otherImgTwo: this.state.otherImgTwo
      }
      this.setState({redirect: true})
      this.props.addProduct(newProduct)      
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {      
      return <Redirect to='/product' />
    }
  }

  render() {
    return (
      <Row className="createProduct">
        <Col s={12} l={12}>
          {this.renderRedirect()}
          <form 
            onSubmit={ this._submitCreateProduct.bind(this)}
            className="formCreateProduct">
            <Row className="form">

              <Col m={12} s={12} l={12}>
                <div className="options">
                  <div className="titles">
                    CATEGORÍA <span>*</span>
                  </div>
                  <div className="contentSec">
                    <p>{this.props.product.typePublish} > {this.props.product.typeProduct} > {this.props.product.typeProductItem}</p>
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
                      value={ this.state.size }
                      onChange={ e => {
                        this.setState({size: e.target.value})
                      }}>
                      <option value="" >
                        - Seleccionar -
                      </option>
                      {
                        this.props.product.sizeProduct.map( size => (
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
                      value={ this.state.brand }
                      onChange={ e => {
                        this.setState({brand: e.target.value})
                      }}>
                      <option value="">
                        - Seleccionar -
                      </option>
                      {
                        this.props.product.brandProduct.map( size => (
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
                      value={ this.state.stateP }
                      onChange={ e => {
                        this.setState({stateP: e.target.value})
                      }}>
                      <option value="">
                        - Seleccionar -
                      </option>
                      {
                        this.props.product.stateProduct.map( size => (
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
                      value={this.state.imgDest}
                      onChange={ e => {
                        this.setState({imgDest: e.target.value})
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
                      value={this.state.otherImgOne}
                      onChange={ e => {
                        this.setState({otherImgOne: e.target.value})
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
                      value={this.state.otherImgTwo}
                      onChange={ e => {
                        this.setState({otherImgTwo: e.target.value})
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
            header="Tu imagen"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Modal>
        </Col>
      </Row>
    )
  }
}  

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

