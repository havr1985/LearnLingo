import styled from "styled-components";

export const List = styled.ul`
max-width: 1440px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`
export const LoadMoreBtn = styled.button`
  margin-top: 32px;
  margin-bottom: 96px;
  border-radius: 12px;
  background-color: #f4c550;
  padding: 16px 48px;
  color: #121417;
  font-size: 18px;
  font-weight: 700;
  line-height: 155.556%; /* 155.556% */
  &:hover{
    background-color: #FFDC86;
  }
`;