import { Badge, Col } from 'antd';
import React from 'react'
import { WrapperHeader, WrapperHeaderText, WrapperHeaderAccount, WrapperHeaderTextSmall } from './style';
import {
  UserOutlined, CaretDownOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
          <WrapperHeaderText>
            {/* <WrapperIMGHeader style={{ fontSize: '10px'}} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HP_logo_630x630.png/240px-HP_logo_630x630.png" alt="" /></WrapperIMGHeader> */}
            RINEL
          </WrapperHeaderText>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="Tìm sản phẩm..."
            bordered={false}
          //onSearch={onSearch}
          />
        </Col>
        <Col span={7} style={{ display: 'flex', gap: '20px' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px' }} />
            <div>
              <WrapperHeaderTextSmall>Đăng nhập/Đăng ký</WrapperHeaderTextSmall>
              <div>
                <WrapperHeaderTextSmall>Tài khoản <CaretDownOutlined /></WrapperHeaderTextSmall>
              </div>
            </div>
          </WrapperHeaderAccount>

          <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <Badge count={4} size = "small" >
              <ShoppingCartOutlined style={{ fontSize: '30px', padding: '5px', color: 'white' }} />
            </Badge>
            <span>Giỏ hàng</span>
            {/* WrapperHeaderTextSmall */}
          </div>

        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent