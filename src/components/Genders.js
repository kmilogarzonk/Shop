import React from "react"
import { Row, Col} from 'react-materialize'
import './style/Genders.scss';
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Genders = ({genders, stablishGender}) => (
  <Row className="contentType" >
    <Col s={12} l={12} className="center-align">
      <p className="description">
        ¿Cómo quieres publicar?
      </p>
      {
        genders.map( gender => (
          <div key={gender.id} className="sectionShop">
            <Link
              to="/publish"
              onClick={() => stablishGender(gender)}>
              <img src={gender.image} alt={gender.name} />
            </Link>
            <p className="description">
              {gender.name}
            </p>
          </div>
        ))
      }
    </Col>
  </Row> 
)

const mapStateToProps = state => ({
  genders: state.genders
})

const mapDispatchToProps = dispatch => ({
  stablishGender(gender){
    dispatch({
      type: "stablishGender",
      gender: gender.name
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Genders);