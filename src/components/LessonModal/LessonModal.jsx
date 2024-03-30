import { LessonModalForm } from "../LessonModalForm/LessonModalForm";
import { Avatar, ContWrap, LessonModalWrap, SecondTitle, TeacherName, Text, Title, YourTeacherText } from "./LessonModal.styled";

export const LessonModal = ({ name, avatar_url }) => {
  return (
    <LessonModalWrap>
      <Title>Book trial lesson</Title>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <ContWrap>
        <Avatar src={avatar_url} alt={name} />
        <div>
          <YourTeacherText>Your teacher</YourTeacherText>
          <TeacherName>{name}</TeacherName>
        </div>
      </ContWrap>
          <SecondTitle>What is your main reason for learning English?</SecondTitle>
          <LessonModalForm/>
    </LessonModalWrap>
  );
};
