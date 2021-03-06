import styled from "styled-components";

// Styled component named StyledButton
export const StyledButton = styled.button`
  background: ${(props) => (props.dark ? "#000000" : "#F8C861")};
  color: ${(props) => (props.dark ? "#FFFFFF" : "#181812")};
  border: none;
  border-radius: 0.4em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

