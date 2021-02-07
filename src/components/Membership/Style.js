import styled from "styled-components";

// Styled component named StyledButton
export const StyledButton = styled.button`
  background: ${(props) => (props.dark ? "#000000" : "#F8C861")};
  color: ${(props) => (props.dark ? "#FFFFFF" : "#181812")};
  width: ${(props) => (props.dark ? "100px" : "205.4px")};
  border: none;
  border-radius: 0.4em;
  font-size: 18.3px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  padding: 14.5px 54.6px;
  letter-spacing: normal;
`;

