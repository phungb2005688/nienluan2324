import React from 'react'
import TypeProduct from '../../Components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProductType } from './style'
import SliderComponent from '../../Components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import CardComponent from '../../Components/CardComponent/CardComponent'
// import NavbarComponent from '../../Components/NavbarCompponent/NavbarComponent'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'

const HomePage = () => {
  const arr = ['Trang điểm', 'Chăm sóc da', 'Chăm sóc sức khỏe', 'Chăm sóc tóc', 'Body']
  return (
    <>
      <div style={{ padding: '0px 110px' }}>
        <WrapperProductType>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item}></TypeProduct>
            )
          })}
        </WrapperProductType>
      </div>
      <div id="container" style={{ backgroundColor: '#efefef', padding: '10px 110px', height: '1000px', width: '100%' }}>
        <SliderComponent
          arrImages={[slider1, slider2, slider3]}>
        </SliderComponent>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
          <CardComponent></CardComponent>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <WrapperButtonMore textButton="Xem thêm" type="outline" styleButton={{
            border: '1px solid #008000', color: '#008000',
            width: '180px', height: '35px', borderRadius: '4px'
          }}
            styleTextButton={{ fontWeight: 500 }} >
          </WrapperButtonMore>
        </div>


        {/* <NavbarComponent></NavbarComponent> */}

      </div>

    </>

  )
}

export default HomePage