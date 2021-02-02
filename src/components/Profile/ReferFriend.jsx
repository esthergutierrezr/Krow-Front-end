import React from "react";
import { Black, Red, White, YellowButton, BlackButton } from "../Style/Colors";
import styled from "styled-components";
import ReferLogo from "../Style/SVG/Invite/SVG_Screen Registar-01.svg";
import "./profile.css";

// import { AuthContext } from "../../contexts/AuthContext";
const Header = styled.div`
display:block;
position:relative;
height:130.3px;
background-image: src={WhiteBg}
align-self: center;
background-size:cover;
`;
export const Logo = styled.img`
  height: 200px;
  width: 250px;
  display: block;
  position: absolute;
  margin: -47px auto 35.9px 120px;
`;
const Content = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 21.1px;
  .text-refer {
    padding-top: 167px;
    display: block;
    margin: 0 59.5px 17.4px 59.5px;
    width: 361px;
    height: 288px;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: Raleway;
    font-size: 15.4px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: ${White};
    padding: 10px;
  }
  h1,
  h3 {
    font-family: Raleway;
    font-size: 37.9px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: ${White};
    padding: 10px;
  }
  h3 {
    font-size: 14.4px;
    font-weight: bold;
  }

  .bgRed {
    background-color: ${Red};
    height: 90vh;
  }
`;

const Background = styled.div`
  .bgRed {
    background-color: ${Red};
    height: 90vh;
  }
`;
export const ButtonCopy = styled.button`
  background-color: ${YellowButton};
  border-radius: 10px;
  border: hidden;
  margin-right: auto;
  margin-left:10.1px;
  margin-top: 17.4px;
  width: 76.3px;
  height:41.9px;
  color: ${Black};
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 16.2px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  }
`;
export const ButtonCode = styled.button`
  background-color: ${White};
  border-radius: 10px;
  border: hidden;
  margin-left: 121.9px;
  margin-right: auto;
  margin-top: 17.4px;
  width: 151.2px;
  height:41.9px;
  color: ${Black};
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 16.2px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  }
`;
export const ButtonShare = styled.button`
  background-color: ${BlackButton};
  border-radius: 10px;
  border: hidden;
  margin-left: 121.9px;
  margin-right: auto;
  margin-top:19.6px;
  margin-bottom:21.1px;
  width: 237.7px;
  height:58.5px;
  color: ${White};
  justify-content: center;
  align-items: center;
  font-family: Raleway;
  font-size: 16.2px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  }
`;

const ReferFriend = () => {
  // const { user } = useContext(AuthContext);
  // should be the membership context, when created we should be able to get the info for generate the code of Stripe!!!!!!

  const Copy = () => {};

  const Share = () => {};

  return (
    <Content>
      <Header className="bgwhite" />
      <Background className="bgRed">
        <Logo src={ReferLogo} alt="Krow-logo" />
        {/* image of refer friend */}
        <div className="text-refer">
          <h1>Refer a Friend</h1>
          <h3>Offer a discount of 25%</h3>
          <p>
            Partilhe o código abaixo com um amigo e à primeira subscrição do
            mesmo será aplicado um desconto de 25%.
          </p>
          <p>
            No seu caso, por cada amigo que convidar e que subscreva, irá ganhar
            1 ponto.
          </p>
          <p>
            Quando atingir 5 pontos, e por participar ativamente na comunidade,
            teremos algo (mesmo) muito especial para si.
          </p>
        </div>
        <ButtonCode type="button">Code</ButtonCode>
        <ButtonCopy type="button" onClick={() => Copy()}>
          Copy
        </ButtonCopy>
        <br />
        {/* img for sharing */}
        <ButtonShare type="button" onClick={() => Share()}>
          Share
        </ButtonShare>
      </Background>
    </Content>
  );
};

export default ReferFriend;
