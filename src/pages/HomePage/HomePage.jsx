import React from 'react'
import TypeProduct from '../../Components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProductType, WrapperProducts } from './style'
import SliderComponent from '../../Components/SliderComponent/SliderComponent'
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.png'
import CardComponent from '../../Components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
// import NavbarComponent from '../../Components/NavbarCompponent/NavbarComponent'
// import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'

const HomePage = () => {
  const arr = ['Trang điểm', 'Chăm sóc da', 'Chăm sóc sức khỏe', 'Chăm sóc tóc', 'Body']
  
  const fetchProductAll = async () => {
    const res = await ProductService.getAllproduct()
    console.log('res', res);
    return res
  }
  // const {isLoading, data} = useQuery(['product'], fetchProductAll)
  const { isLoading, data: products } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProductAll,
    retry: 3, retryDelay: 1000
  })

  console.log('data', products);
  return (
    <>
      {/* <div style={{ padding: '0px 110px' }}> */}
      <div style={{ width: '1070px', margin: '0 auto' }}>
        <WrapperProductType>
          {arr.map((item) => {
            return (
              <TypeProduct name={item} key={item}></TypeProduct>
            )
          })}
        </WrapperProductType>
      </div>
      <div className='body' style={{ width: '100%', backgroundColor: '#efefef', }}>
        <div id="container" style={{ padding: '5px 110px', height: '1000px', width: '100%' }}>
          {/* margin: '0 auto' thay đổi thành padding: '5px 110px'   */}
          <SliderComponent
            arrImages={[slider1, slider2, slider3]}>
          </SliderComponent>
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  // id={product._id}
                ></CardComponent>

              )
            })}
            {/* <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent>
            <CardComponent></CardComponent> */}
          </WrapperProducts>
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
      </div>


    </>

  )
}

export default HomePage