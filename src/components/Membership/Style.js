import styled from "styled-components";

// Styled component named StyledButton
export const StyledButton = styled.button`
  background: ${(props) => (props.dark ? "#000000" : "#F8C861")};
  color: ${(props) => (props.dark ? "#FFFFFF" : "#65493e")};
  width: ${(props) => (props.dark ? "100px" : "140px")};
  border: none;
  border-radius: 0.4em;
  font-size: 0.9rem;
  padding: 5px 0px;
`;

// #07726C blueish background
