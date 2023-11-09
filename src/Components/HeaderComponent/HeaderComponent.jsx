import { Badge, Col } from 'antd';
import React from 'react'
import { WrapperHeader, WrapperHeaderText, WrapperHeaderAccount, WrapperHeaderTextSmall } from './style';
import {
  UserOutlined, CaretDownOutlined, ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  return (
    <div style={{  heiht: '100%', width: '100%', display: 'flex', background: '#008000', justifyContent: 'center' }}>
      <WrapperHeader>
        <Col span={3}>
          <WrapperHeaderText>
            {/* <WrapperIMGHeader style={{ fontSize: '10px'}} ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/HP_logo_630x630.png/240px-HP_logo_630x630.png" alt="" /></WrapperIMGHeader> */}
            RINEL
          </WrapperHeaderText>
        </Col>
        <Col span={12} style={{ width: '500px' }}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="Tìm sản phẩm..."
            bordered={false}
          //onSearch={onSearch}
          />
        </Col>
        <Col span={9} style={{ display: 'flex', gap: '74px', alignItems: 'center' }}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: '30px', paddingLeft: '20px' }} />
            
            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
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