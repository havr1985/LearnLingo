import logo from "../../assets/ukraine.svg";
import { LogIn } from "lucide-react";
import {
  BtnWrap,
  HeaderWrap,
  Link,
  LoginBtn,
  LogoText,
  LogoWrap,
  NavWrap,
  RegBtn,
} from "./Header.styled";
import { useState } from "react";
import { RegisterModal } from "../RegisterModal/RegisterModal";

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState('')

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

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
          <LoginBtn onClick={() => { openModal(); setModal('login') }}>
            <LogIn size={20} color="#F4C550" /> Log in
          </LoginBtn>
          <RegBtn type="button" onClick={() => { openModal(); setModal('register') }}>
            Registration
          </RegBtn>
        </BtnWrap>
      </HeaderWrap>
      {modalIsOpen && (
        <RegisterModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          modal={modal}
        />
      )}
    </header>
  );
};
