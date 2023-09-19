import React from 'react'
import CardComponent from '../../Components/CardComponent/CardComponent'
import NavbarComponent from '../../Components/NavbarCompponent/NavbarComponent'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
    return (
        <Row style={{ padding: '0 110px', backgroundColor: '#efefef', paddingTop: '10px', flexWrap: 'nowrap'}}>
            <Col span={5} style={{ backgroundColor: '#fff', marginRight: '10px', padding: '12px', borderRadius: '5px' }}>
                <NavbarComponent></NavbarComponent>
            </Col>
            <Col span={19}>
                <CardComponent></CardComponent>
            </Col>
        </Row>
    )
}

export default TypeProductPage