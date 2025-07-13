import { useState } from "react";

const FormPage = () => {
  //   Uncontrolled input
  //   const inputFullNameRef = useRef<HTMLInputElement>(null);
  //   const inputEmailRef = useRef<HTMLInputElement>(null);
  //   const inputPasswordRef = useRef<HTMLInputElement>(null);

  //Controlled input
  const [fullNameInput, setFullNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = () => {
    // const fullNameFormValue = inputFullNameRef.current?.value;
    // const emailFormValue = inputFullNameRef.current?.value;
    // const passwordFormValue = inputFullNameRef.current?.value;
  };
  return (
    <>
      <h1>Form Page</h1>
      <h3>Username : {fullNameInput}</h3>
      <h3>Password : {passwordInput}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <label htmlFor="full-name">Full Name</label>
        <input
          onChange={(event) => {
            setFullNameInput(event.target.value);
            const fullNameValidation = event.target.value.length < 4;
            if (fullNameValidation) {
              setUsernameErrorMessage("Username must be at least 4 characters");
            } else {
              setUsernameErrorMessage("");
            }
          }}
          id="full-name"
          type="text"
          value={fullNameInput}
        />
        <span style={{ color: "red" }}>{usernameErrorMessage}</span>

        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => {
            setPasswordInput(event.target.value);
            const passwordValidation = event.target.value.length < 8;

            if (passwordValidation) {
              setPasswordErrorMessage("Password must at least be 8 characters");
            } else {
              setPasswordErrorMessage("");
            }
          }}
          id="email"
          type="email"
          value={passwordInput}
        />
        <span style={{ color: "red" }}>{passwordErrorMessage}</span>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default FormPage;
