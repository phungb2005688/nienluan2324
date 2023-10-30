import React from 'react'
import CardComponent from '../../Components/CardComponent/CardComponent'
import NavbarComponent from '../../Components/NavbarCompponent/NavbarComponent'
import { Pagination, Col, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => {

    }
    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{ width: '1070px', margin: '0 auto',}}>
                {/* từ padding: '14px 100px 0px' đổi thành width: '1270px', margin: '0 auto', */}
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
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
                        <Pagination defaultCurrent={1} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />

                    </Col>
                </Row>

            </div>
        </div>

    )
}

export default TypeProductPage