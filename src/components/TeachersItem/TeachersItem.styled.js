import styled from "styled-components";

export const CardWrapper = styled.div`
max-width: 1136px;
padding: 24px;
border-radius: 24px;
background-color: #FFFFFF;
display: flex;
margin-bottom: 32px;
gap: 48px;
`
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fbe9ba;
  padding: 12px;
`;
export const TopContentWrap = styled.div`
  display: flex;
  gap: 149px;
  height: 24px;
`;
export const TopTextWrap = styled.div`
display: flex;

`
export const TopText = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
  
  &::after {
    content: "|";
    margin-left: 16px;
    margin-right: 16px;
    color: #12141733;
  }
`;
export const IconBox = styled.div`
display: flex;
gap: 8px;
align-items: center;
`
export const LastText = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
  margin-right: 40px;
`;
export const FirstText = styled.p`
  color: #8a8a89;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 150% */
`;
export const Span = styled.span`
  color: #38cd3e;
`;
export const Title = styled.h2`
  color: #121417;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 100% */
`;
export const Box = styled.div`
display: flex;
flex-wrap: wrap;

`
export const TitleWrap = styled.div`
display: flex;
flex-direction: column;
`