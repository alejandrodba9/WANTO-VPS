import React from "react";
import {ContainerButtonLogin,FormBox,InputBox,LoginButton,Section,} from "./styled";

const Login =  () => {
  
return (
  <Section>
    <FormBox>
      <h2>¡BIENVENIDO!</h2>
      <InputBox>
        <i className="fa-solid fa-envelope"></i>
        <input
          type="email"

          required
        />
        <label>Email</label>
      </InputBox>
      <InputBox>
        <i className="fa-solid fa-lock"></i>
        <input
          type="password"

          required
        />
        <label>Password</label>
      </InputBox>
      <ContainerButtonLogin>
        <LoginButton >Sign In</LoginButton>
      </ContainerButtonLogin>
    </FormBox>
  </Section>
);
}

export default Login;
