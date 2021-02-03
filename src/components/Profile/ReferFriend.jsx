import React, { useState, useRef } from "react";
import { Black, Red, White, YellowButton, BlackButton } from "../Style/Colors";
import styled from "styled-components";
import ReferLogo from "../Style/SVG/Invite/SVG_Screen Registar-01.svg";
import ShareCode from "../Style/SVG/Invite/SVG_Screen Registar_Icon Partilhar-01.svg";
import "./profile.css";

// import { AuthContext } from "../../contexts/AuthContext";
const Header = styled.div`
  display: block;
  position: relative;
  height: 130.3px;
`;
export const LogoInvite = styled.img`
  height: 200px;
  width: 250px;
  display: block;
  position: absolute;
  margin: -47px auto 35.9px 120px;
`;

export const LogoShare = styled.img`
  width: 30px;
  height: 30px;
  // margin-top: 83px;
  margin: auto;
  display: inline-block;
  padding-right:18.9px;
  // margin-left: auto;
  // margin-right: auto;
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
  .share{
    // align-items: center;
    // justify-content: center
    // text-align: center;
    font-family: Raleway;
    font-size: 18.3px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
  }
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
export const ButtonCode = styled.input`
  justify-content: center;
  align-items: center;
  background-color: ${White};
  border-radius: 10px;
  border: hidden;
  margin-left: 121.9px;
  margin-right: auto;
  margin-top: 17.4px;
  padding-left:38px;
  width: 109.2px;
  height:39.9px;
  color: ${Black};
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
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const copyToClipboard = (event) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    event.target.focus();
    // console.log(textAreaRef);
    // console.log(event.target)
    // console.log(copySuccess)
    setCopySuccess("Copied!");
  };

  {
    /*******1*******
  import {Share} from 'react-native'
  Share.share({
  message: this.state.inputValue.toString(),
})
.then(result => console.log(result))
.catch(errorMsg => console.log(errorMsg));

******2*******
  <intent-filter >
    <action android:name="com.example.project.SHOW_CURRENT" />
    <action android:name="com.example.project.SHOW_RECENT" />
    <action android:name="com.example.project.SHOW_PENDING" />
 
</intent-filter> 
*/
  }

  const Share = () => {};

  return (
    <Content>
      <Header className="bgwhite" />
      <div className="bgRed">
        <LogoInvite src={ReferLogo} alt="Krow-logo" />
        {/* image of refer friend */}
        <div className="text-refer">
          <h1>Refer a Friend</h1>
          <h3>Offer a discount of 25%</h3>
          <p>
            Share the code below with a friend and the first subscription to a
            25% discount will be applied.
          </p>
          <p>
            In your case, for every friend you invite and subscribe, you will
            earn 1 point.
          </p>
          <p>
            When you reach 5 points, and for actively participating in the
            community, we will have something (really) very special for you.
          </p>
        </div>
        <ButtonCode ref={textAreaRef} type="text" value="Code12" />
        <ButtonCopy type="button" onClick={copyToClipboard}>
          Copy
        </ButtonCopy>
        {/* {
            copySuccess ?
            <div style={{"color": "green"}}>
              Success!
            </div> : null
          } */}
        <br />
        {/* img for sharing */}
        <ButtonShare type="button" onClick={() => Share()}>
          <LogoShare src={ShareCode} alt="share-code" />
          <span className="share">Share</span>
        </ButtonShare>
      </div>
    </Content>
  );
};

export default ReferFriend;
