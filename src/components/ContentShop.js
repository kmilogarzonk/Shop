import React, { useState } from 'react';
import { Row, Col, Icon} from 'react-materialize'
import './style/ContentShop.scss';


function ContentShop() {

  const [typePublish, setTypePublish] = useState(0);

  return (
    <Row className="contentShop">
      <Col s={12} l={12}>
        <Row className="content white z-depth-1" >
          <Col s={12} l={12} className="center-align">
            <h4 className="title">VENDE TUS PRODUCTOS</h4>
            <p className="description">
              ¿Cómo quieres publicar?
            </p>
            <div className="sectionShop">
              <a onClick={e => {
                e.preventDefault();
                setTypePublish("Mujer");
              }}>
                <img src="images/woman.jpg" />
              </a>
              <p className="description">
                Mujer
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ContentShop;