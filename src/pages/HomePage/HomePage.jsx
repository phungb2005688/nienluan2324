import React from 'react'
import TypeProduct from '../../Components/TypeProduct/TypeProduct'
import { WrapperProductType } from './style'
import SliderComponent from '../../Components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import CardComponent from '../../Components/CardComponent/CardComponent'

const HomePage = () => {
  const arr = ['Trang điểm', 'Chăm sóc da', 'Chăm sóc sức khỏe', 'Chăm sóc tóc', 'Body']
  return (
    <>
      <div style={{ padding: '0px 120px' }}>
        <WrapperProductType>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item}></TypeProduct>
            )
          })}
        </WrapperProductType>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', padding: '10px 120px', height: '1000px' }}>
        <SliderComponent
          arrImages={[slider1, slider2, slider3]}>
        </SliderComponent>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <CardComponent></CardComponent>
        </div>
      </div>

    </>

  )
}

export default HomePage