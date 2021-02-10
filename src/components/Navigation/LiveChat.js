import React from "react";
import { Helmet } from "react-helmet";

//import "./LiveChat.css";

const LiveChat = () => {
  return (
    <div style={{left: '15px', position: 'absolute'}}>
      <Helmet>
        {/*<script
            type="text/javascript"
            async
            defer
            src="//js.hs-scripts.com/9197058.js"
          ></script>*/}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/9274349.js"
        ></script>
      </Helmet>
    </div>
  );
};

export default LiveChat;
// //   <!-- Start of HubSpot Embed Code -->
// // <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9197058.js"></script>
// // <!-- End of HubSpot Embed Code -->
