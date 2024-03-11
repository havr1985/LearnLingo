
import logo from '../../assets/ukraine.svg'
import { LogIn } from 'lucide-react';
import { BtnWrap, HeaderWrap, Link, LoginBtn, LogoText, LogoWrap, NavWrap, RegBtn } from './Header.styled';


export const Header = () => {
    return (
      <header>
        <HeaderWrap>
          <LogoWrap>
            <img src={logo} alt="logo" />
            <LogoText>LearnLingo</LogoText>
          </LogoWrap>

          <NavWrap>
            <Link to="/">Home</Link>
            <Link to="/teachers">Teachers</Link>
          </NavWrap>
          <BtnWrap>
            <LoginBtn>
              <LogIn size={20} color="#F4C550" /> Log in
            </LoginBtn>
            <RegBtn>Registration</RegBtn>
          </BtnWrap>
        </HeaderWrap>
      </header>
    );
}