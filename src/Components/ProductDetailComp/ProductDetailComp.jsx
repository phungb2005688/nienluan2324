import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.png'
import imageProductSmall from '../../assets/images/test1.png'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleSmallImage, WrapperStyleTextSell } from './style'
import {
    StarFilled, PlusOutlined, MinusOutlined
} from '@ant-design/icons';
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const ProductDetailComp = () => {
    const onChange = () => {

    }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px', height:'100%' }}>
            <Col span={9} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image style={{ width: '375px' }} src={imageProduct} alt="image product" preview={false}></Image>
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={imageProductSmall} alt="image small" preview={false}></WrapperStyleSmallImage>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={imageProductSmall} alt="image small" preview={false}></WrapperStyleSmallImage>

                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={imageProductSmall} alt="image small" preview={false}></WrapperStyleSmallImage>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={imageProductSmall} alt="image small" preview={false}></WrapperStyleSmallImage>
                    </WrapperStyleColImage>

                    <WrapperStyleColImage span={4}>
                        <WrapperStyleSmallImage src={imageProductSmall} alt="image small" preview={false}></WrapperStyleSmallImage>
                    </WrapperStyleColImage>

                </Row>
            </Col>
            <Col span={13} style={{ paddingLeft: '15px'}}>
                <WrapperStyleNameProduct> Sách - Thám tử lừng danh Conan - Combo 10 tập từ tập 70 đến tập 79</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', gap: '5px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', gap: '5px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', gap: '5px', color: 'rgb(253, 216, 54)' }} />
                    <StarFilled style={{ fontSize: '12px', gap: '5px', color: 'rgb(253, 216, 54)' }} />
                    <WrapperStyleTextSell style={{ marginLeft: '7px' }}>| Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>
                        200.000
                    </WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao đến </span>
                    <span className='address'>Phường 7, Quận 6, TP. Hồ Chí Minh </span> -
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAddressProduct>

                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{ marginBottom: '10px' }} >Số lượng</div>
                    <WrapperQualityProduct>
                        <div>
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>

                            <WrapperInputNumber defaultValue={4} onChange={onChange} size='small' />

                            <button style={{ border: 'none', background: 'transparent' }}>
                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                            </button>
                        </div>
                    </WrapperQualityProduct>
                </div>
                <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div>
                        <ButtonComponent
                            // bordered={false}
                            size={40}
                            styleButton={{
                                background: 'rgb(255, 57, 69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px'
                            }}
                            textButton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                        >
                        </ButtonComponent>
                    </div>
                    <ButtonComponent
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid rgb(13, 92, 182)',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    >
                    </ButtonComponent>
                </div>

            </Col>
        </Row>
    )
}

export default ProductDetailComp