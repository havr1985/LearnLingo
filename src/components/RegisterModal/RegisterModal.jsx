import Modal from "react-modal";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { X } from "lucide-react";
import { CloseBtn, ModalWrap } from "./Modal.styled";
import { LessonModal } from "../LessonModal/LessonModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 30,
  },
  overlay: {
    backgroundColor: "#12141780",
  },
};

export const RegisterModal = ({ modalIsOpen, closeModal, modal, name, avatar_url }) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={450}
    >
      <ModalWrap>
        <CloseBtn onClick={closeModal}>
          <X size={32} />
        </CloseBtn>
        {modal === "register" && <RegisterForm />}
        {modal === "login" && (
          <LoginForm modalIsOpen={modalIsOpen} onRequestClose={closeModal} />
        )}
        {modal === "lesson" && (
          <LessonModal
            modalIsOpen={modalIsOpen}
            onRequestClose={closeModal}
            name={name}
            avatar_url={avatar_url}
          />
        )}
      </ModalWrap>
    </Modal>
  );
};
