import { Box } from "@mui/material";
import styled from "styled-components";

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

export const FormBase = ({ children }) => {
  return (
    <>
      <AppContainer>
        <Box
          sx={{
            width: "480px",
            maxWidth: "1320px",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // backgroundColor: "blueviolet",
          }}
        >
          {children}
        </Box>
      </AppContainer>
    </>
  );
};
