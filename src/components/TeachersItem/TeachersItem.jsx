import { BookOpen, Heart, Star } from "lucide-react";
import { Avatar, Box, CardWrapper, FirstText, IconBox, LastText, Span, Title, TitleWrap, TopContentWrap, TopText, TopTextWrap } from "./TeachersItem.styled";

export const TeachersItem = (teacher) => {

    const {
        teacher: {
            avatar_url,
            name,
            surname,
            lessons_done,
            rating,
            price_per_hour,

        }
    } = teacher;


    return (
      <CardWrapper>
        <div>
          <Avatar src={avatar_url} alt={surname} />
        </div>
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
          
        </Box>
      </CardWrapper>
    );
}