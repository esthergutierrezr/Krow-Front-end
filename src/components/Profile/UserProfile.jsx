import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

// import { useHistory } from "react-router-dom";
// import Cookies from "js-cookie";
// import { AuthContext } from "../../contexts/AuthContext";

// export default function Profile() {
//   const { user } = useContext(AuthContext);
//   const history = useHistory();

//   return (
//     <div>
//       <p>
//         Welcome
//         {user.fullName}
//       </p>
//       <button
//         onClick={() => {
//           Cookies.remove("authToken");
//           history.push("/login");
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

function UserProfile() {
  const { user } = useContext(AuthContext);

  const initialGreeting = `Welcome, ${user.fullName}`;

  return (
    <div className="greeting">
      <h1>{initialGreeting}</h1>
      <br />
      {/* {isMember ? (
        <>
          <p>Active Membership</p>
          <p>
            Expire in
            (time to expire membership)
          </p>
        </>
      ) : ( */}
        <>
          <p className="no-membership">No Active Membership</p>
          <br />
          <Link to="/membership">
            <p className="add-membership">Add a Membership</p>
          </Link>
        </>
      {/* )} */}
      <img
        className="profile-picture"
        src={user.image}
        alt={`${user.fullName}`}
      />
    </div>
  );
}

export default UserProfile;
