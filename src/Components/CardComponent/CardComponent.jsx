import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperStyleTextSell, WrapperTextDiscount, WrapperTextPrice, WrapperTextReport } from './style'
import {
    StarFilled
  } from '@ant-design/icons';
import notice from '../../assets/images/notice.png'
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width: '200px', height: '200px'}}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://cf.shopee.vn/file/58dcbd95089b359d0e9898f5d87d8f81" />}
        >
            <img src={notice} 
                style={{ width: '68px', height: '14px', 
                        position: 'absolute', top: -1, left: -1,
                        borderTopLeftRadius: '3px' 
                    }} alt=''>
            </img>
            <StyleNameProduct>Sữa rửa mặt L'Oreal</StyleNameProduct>

            <WrapperTextReport>
                <span style={{marginRight: '7px'}}>
                    <span>4.96</span> <StarFilled style={{ fontSize: '12px', gap: '5px', color: 'rgb(253, 216, 54)'}}/>
                    {/* #faad14 */}
                </span>
                {/* <span>|</span>
                <span style={{marginLeft: '7px'}}>Đã bán 1000+</span> */}
                <WrapperStyleTextSell>|</WrapperStyleTextSell>
                <WrapperStyleTextSell style={{marginLeft: '7px'}}>Đã bán 1000+</WrapperStyleTextSell>

            </WrapperTextReport>
            <WrapperTextPrice>
                <span style={{ marginRight: '8px' }}>1.000.000 đ </span>
                <WrapperTextDiscount> -5% </WrapperTextDiscount>
            </WrapperTextPrice>

        </WrapperCardStyle>
    )
}

export default CardComponent