import React from 'react'
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
import Loading from '../../Components/LoadingComponent/Loading'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isLoading } = mutation

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }
  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }
  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword })

    console.log('sign-up', email, password, confirmPassword);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc Tạo tài khoản</p>

          <InputForm style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail}></InputForm>

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
            <InputForm placeholder="Nhập mật khẩu" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}
              value={password} onChange={handleOnchangePassword}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}

              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px',
                fontSize: '14px',
                paddingTop: '5px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm placeholder="Nhập lại mật khẩu" type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword} onChange={handleOnchangeConfirmPassword}
            />
          </div>

          {/* <InputForm style={{ marginBottom: '10px' }} placeholder="Nhập mật khẩu" ></InputForm>
          <InputForm placeholder="" ></InputForm> */}
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          {/* <Loading isLoading={isLoading}> */}
             <ButtonComponent
            disabled={!email.length || !password.length || !confirmPassword.length}
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: '#7eb37a',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng ký'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          >
          </ButtonComponent>
          {/* </Loading> */}
         
          <p style={{ marginTop: '50px' }}>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}>Đăng nhập</WrapperTextLight></p>
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

export default SignUpPage