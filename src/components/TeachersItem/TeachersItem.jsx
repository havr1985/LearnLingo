import { BookOpen, Heart, Star } from "lucide-react";
import {
  Avatar,
  AvatarWrapp,
  Box,
  CardWrapper,
  ContBox,
  ContLeft,
  ContRight,
  ContRightB,
  FirstText,
  IconBox,
  LastText,
  LevelsText,
  LevelsWrap,
  Point,
  ReadMoreBtn,
  Span,
  Title,
  TitleWrap,
  TopContentWrap,
  TopText,
  TopTextWrap,
  TrialBtn,
} from "./TeachersItem.styled";
import { useState } from "react";
import { TeacherItemMore } from "../TeacherItemMore/TeacherItemMore";

export const TeachersItem = (teacher) => {
  const {
    teacher: {
      avatar_url,
      name,
      surname,
      lessons_done,
      rating,
      price_per_hour,
      languages,
      lesson_info,
      conditions,
      levels,
      experience,
      reviews,
    },
  } = teacher;

  const [readMore, setReadMore] = useState(false);

  const clickReadMore = () => {
    setReadMore(true)
  }

  return (
    <CardWrapper>
      <AvatarWrapp>
        <Avatar src={avatar_url} alt={surname} />
        <Point></Point>
      </AvatarWrapp>
      <Box>
        <TopContentWrap>
          <FirstText>Languages</FirstText>
          <TopTextWrap>
            <IconBox>
              <BookOpen size={16} />
              <TopText>Lesson online</TopText>
            </IconBox>

            <TopText>Lessons done: {lessons_done}</TopText>
            <IconBox>
              <Star size={16} color="#FFC531" fill="#FFC531" />
              <TopText>Rating: {rating}</TopText>
            </IconBox>

            <LastText>
              Price / 1 hour: <Span>{price_per_hour}$</Span>
            </LastText>
            <button>
              <Heart size={26} />
            </button>
          </TopTextWrap>
        </TopContentWrap>
        <TitleWrap>
          <Title>
            {name} {surname}
          </Title>
          <ContBox>
            <ContLeft>Speaks: </ContLeft>
            {languages.map((item, idx) => (
              <ContRight key={idx}> {item}, </ContRight>
            ))}
          </ContBox>
          <ContBox>
            <ContLeft>Lesson info: </ContLeft>
            <ContRightB> {lesson_info} </ContRightB>
          </ContBox>
          <ContBox>
            <ContLeft>Conditions: </ContLeft>
            {conditions.map((item, idx) => (
              <ContRightB key={idx}> {item} </ContRightB>
            ))}
          </ContBox>
          {readMore ? (
            <TeacherItemMore experience={experience} reviews={reviews} />
          ) : (
            <ReadMoreBtn type="button" onClick={clickReadMore}>
              Read more
            </ReadMoreBtn>
          )}

          <LevelsWrap>
            {levels.map((item, idx) => (
              <LevelsText key={idx}>#{item}</LevelsText>
            ))}
          </LevelsWrap>
          {readMore && <TrialBtn type="button">Book trial lesson</TrialBtn>}
        </TitleWrap>
      </Box>
    </CardWrapper>
  );
};
