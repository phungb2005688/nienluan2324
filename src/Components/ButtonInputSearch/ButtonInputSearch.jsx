// import { Button } from 'antd'
import {
    SearchOutlined
} from '@ant-design/icons';
import React from 'react'
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtonInputSearch = (props) => {
    const {
        size, placeholder, textButton,
        bordered, backgroundColorInput = 'white',
        backgroundColorButton = '#006400',
        colorButton = 'white'
    } = props

    return (
        <div style={{ display: 'flex' }}>
            <InputComponent
                size={size} placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput }}
            />

            <ButtonComponent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined style={{ color: colorButton }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            >
            </ButtonComponent>
        </div>
    )
}

export default ButtonInputSearch