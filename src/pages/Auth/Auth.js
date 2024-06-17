import styled from "styled-components";
import AccountBox from "../AccountBox/index";

const Auth = ({ check }) => {
  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <>
      <AppContainer>
        <AccountBox />
      </AppContainer>
    </>
  );
};

export default Auth;
