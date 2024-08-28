// import React, { useState } from "react";
// import { styles } from "./LogInPage.styles.ts";
// import { globalStyles } from "../../globalStyles.ts";

// const LogInPage: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>("");

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Data saved:", inputValue);
//     setInputValue("");
//   };

//   return (
//     <section style={styles.pageWrapper}>
//       <form style={styles.formWrapper} onSubmit={handleSubmit}>
//         <div>
//           <h3 style={styles.logInTitle}>Sing In</h3>
//         </div>
//         <div style={styles.logInForm}>
//           <input
//             style={styles.textInput}
//             type="text"
//             id="inputField"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Username Text Field"
//           />
//           <button
//             style={{ ...styles.logInButton, ...globalStyles.baseTitle }}
//             type="submit"
//           >
//             Save Data
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default LogInPage;

// src/pages/LogInPage/LogInPage.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserByUsername, logout } from "../../features/logInSlice.ts";
import { RootState } from "../../features/store.ts";
import { styles } from "./LogInPage.styles.ts";
import { globalStyles } from "../../globalStyles.ts";

const LogInPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const { isLoggedIn, userData, status, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim()) {
      dispatch(fetchUserByUsername(inputValue.trim()));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section style={styles.pageWrapper}>
      <div>
        <form style={styles.formWrapper} onSubmit={handleSubmit}>
          <div>
            <h3 style={styles.logInTitle}>Sign In</h3>
          </div>
          {isLoggedIn && userData ? (
            <div>
              <button
                style={{ ...styles.logInButton, ...globalStyles.baseTitle }}
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div style={styles.logInForm}>
              <input
                style={styles.textInput}
                type="text"
                id="inputField"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Username"
              />
              <button
                style={{ ...styles.logInButton, ...globalStyles.baseTitle }}
                type="submit"
              >
                Sign In
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LogInPage;
