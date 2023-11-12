import React, { useEffect } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../Components/InputForm/InputForm'
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logo_login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as UserService from '../../services/UserService'
// import Loading from '../../Components/LoadingComponent/Loading'
import { useDispatch } from 'react-redux'
import { jwtDecode } from "jwt-decode";
import { updateUser } from '../../redux/slices/userSlice'


const SignInPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data, isSuccess } = mutation
  useEffect(() => {
    if (isSuccess) {
      navigate('/')
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if (data?.access_token) {
        // const decoded = jwt_decode(data?.access_token)
        const decoded = jwtDecode(data?.access_token)
        console.log('decoded', decoded)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)

        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

  const handleSignIn = () => {
    mutation.mutate({
      email,
      password
    })
    console.log('sign-in', email, password);
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>

          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} ></InputForm>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}

              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
                fontSize: '14px',
                paddingTop: '5px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm
              placeholder="Nhập mật khẩu"
              type={isShowPassword ? "text" : "password"}
              value={password} onChange={handleOnchangePassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          {/* <Loading isLoading={isLoading}> */}
          <ButtonComponent
            disabled={!email.length || !password.length}
            onClick={handleSignIn}
            size={40}
            styleButton={{
              background: '#7eb37a',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          >
          </ButtonComponent>
          {/* </Loading> */}

          <p style={{ marginTop: '50px' }}><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
          <p>Bạn chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt='image-logo' height="203px" width="203px"></Image>
          <h4 style={{ marginTop: '3px', fontFamily: 'monospace', fontSize: '16px', fontWeight: '700' }}>Mua sắm tại Rinel</h4>
          <h5 style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: '500' }}>Không lo về giá</h5>

        </WrapperContainerRight>
      </div>
    </div>

  )
}

export default SignInPage