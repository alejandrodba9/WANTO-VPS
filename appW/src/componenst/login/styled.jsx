import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000046;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
`;

export const FormBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  width: 400px;
  height: 500px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  /* backdrop-filter: blur(15px); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgb(255, 255, 255);
  }
  h2 {
    font-size: 2em;
    color: white;
    text-align: center;
    margin-bottom:1px
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 310px;
  border-bottom: 2px solid white;

  label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #ffffff;
    font-size: 17px;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -5px;
  }

  input {
    width: 100%;
    height: 50px;
    background: transparent; 
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: #000;
  }

  .fa-solid{
    position: absolute;
    right: 8px;
    color: #fff;
    font-size: 1.2em;
    top: 20px;
  }
`;

export const ContainerButtonLogin = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  height: auto;
  & :hover{
    background-color: #777777;
    color: #fff;
    border: 1px solid white;
    transition: 0.6s;
  }
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: white;
  height: 50px;
  border-radius: 20px;
  /* border-color: blue; */
  border: none;
  font-size: 20px;
  font-weight:500;
  cursor: pointer;
`;