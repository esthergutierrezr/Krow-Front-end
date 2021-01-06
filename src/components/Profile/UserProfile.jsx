import React, { useContext} from "react";
// import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function UserProfile() {
  const {firstName, lastName, isMember, image} = useContext(UserContext)

//   const history = useHistory();

//   async function handleSubmit(event) {
//     event.preventDefault();
  
//     try {
//       await Auth.signIn();
//       userHasAuthenticated(true);
//       history.push("/profile");
//     } catch (error) {
//       alert(error.message);
//     }
//   }

  return (
    <div>
      <img
        className="profile-picture"
        src={image}
        alt={`${firstName}_${lastName}`}
      />
      <p>
        Name:
        {`${firstName} ${lastName}`}
      </p>
      <p>
        {isMember ? (
          "Membership Active"
        ) : (
          <p>
            No active membership
            <br />
            <Link to="membership">Click here to buy a plan</Link>
          </p>
        )}
      </p>
    </div>
  );
}
