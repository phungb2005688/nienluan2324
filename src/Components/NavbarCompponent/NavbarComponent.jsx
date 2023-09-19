import React from 'react'
import { WrapperContent, WrapperTextLabel, WrapperTextPrice, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd'

const NavbarComponent = () => {
    const onChange = () => {

    }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>

                            )
                        })}
                        {/* <Checkbox value="B">B</Checkbox> */}
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    // console.log('check', option)
                    return (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Rate style={{ fontSize: '13px' }} disabled defaultValue={option} />
                            <span style={{}}>{`từ ${option} sao`}</span>
                        </div>
                    )
                })
                case 'price':
                return options.map((option) => {
                    return (
                        <WrapperTextPrice style={{ }}>
                            {option}
                        </WrapperTextPrice>
                    )
                })

            default:
                return {}
        }
    }
    return (
        <div>
            <WrapperTextLabel>Danh mục sản phẩm</WrapperTextLabel>
            <WrapperContent>
                {renderContent('text', ['Trang điểm ', 'Chăm sóc da', 'Chăm sóc tóc'])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['Dưới 40.000', 'Trên 50.000'])}
            </WrapperContent>
        </div>
    )
}

export default NavbarComponent