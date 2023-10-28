import React from 'react'
import CardComponent from '../../Components/CardComponent/CardComponent'
import NavbarComponent from '../../Components/NavbarCompponent/NavbarComponent'
import { Pagination, Col, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {

    }
    return (
        <div style={{ padding: '14px 100px 0px', backgroundColor: '#efefef' }}>
            <Row style={{ flexWrap: 'nowrap' }}>
                <WrapperNavbar span={5}>
                    <NavbarComponent></NavbarComponent>
                </WrapperNavbar>

                <Col span={19}>
                    <WrapperProducts >
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                        <CardComponent></CardComponent>
                    </WrapperProducts>
                    <Pagination defaultCurrent={1} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '10px'}} />

                </Col>
            </Row>

        </div>
    )
}

export default TypeProductPage