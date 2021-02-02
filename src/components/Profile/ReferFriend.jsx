import React from "react";
import { Content } from "./Styles";

// import { AuthContext } from "../../contexts/AuthContext";

const ReferFriend = () => {
  // const { user } = useContext(AuthContext);
  // should be the membership context, when created we should be able to get the info for generate the code of Stripe!!!!!!

  const Copy = () => {};

  const Share = () => {};

  return (
    <Content>
      <div>
        {/* image of refer friend */}
        <h1>Refer a Friend</h1>
        <h3>Offer a discount of 25%</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iure,
          odit aut earum perferendis aspernatur, necessitatibus nemo corrupti
          ratione neque soluta. Suscipit qui, dolor tempore laudantium odio
          quasi cumque error.
        </p>
        <input type="text" placeholder="CODE" />
        <button type="button" onClick={() => Copy()}>
          Copy
        </button>
        {/* img for sharing */}
        <button type="button" onClick={() => Share()}>
          Share
        </button>
      </div>
    </Content>
  );
};

export default ReferFriend;
