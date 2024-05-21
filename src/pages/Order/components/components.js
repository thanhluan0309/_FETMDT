import * as React from "react";
import { DataGrid } from "@mui/x-data-grid/";
import { GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Input } from "@mui/material";

import PropTypes from "prop-types";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

import { blue } from "@mui/material/colors";
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `
);

const StyledInput = styled("input")(
  ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.05)"
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[700] : blue[200]
      };
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

const StyledButton = styled("button")(
  ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
    color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `
);
const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: "increment",
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});
export const Columns = [
  //   { flex: 1, field: "id", headerName: "ID", width: 70 },
  {
    flex: 2,
    field: "name",

    headerName: "Sản Phẩm",
    renderCell: ProductCell,
  },
  {
    flex: 1,
    field: "price",
    headerName: "Đơn giá",
  },
  {
    flex: 1,
    field: "amount",
    headerName: "Số Lượng",
    renderCell: ProductQuantCell,
  },

  {
    flex: 1,
    field: "fullName",
    headerName: "Thao Tác",
    renderCell: ProductTTCell,
  },
];

function ProductQuantCell(params) {
  return (
    <>
      <Box display={"flex"}>
        <NumberInput aria-label="Quantity Input" min={1} max={99} />;
      </Box>
    </>
  );
}
function ProductCell(params) {
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
      >
        <img height={"200"} width={"100"} src={params.row.image[0]}></img>
        <Typography
          ml={2}
          width={"150px"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          fontSize={".8rem"}
          fontWeight={"200"}
        >
          {params.value}
        </Typography>
        <Typography ml={2} fontSize={".8rem"} fontWeight={"200"}>
          Lợi nhuận : {params.row.Profit}
        </Typography>
      </Box>
    </>
  );
}
function ProductTTCell(params) {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button color="error">Xoá</Button>
        <Button color="warning">Điều Chỉnh</Button>
      </ButtonGroup>
    </>
  );
}
export function SimpleDialog(props) {
  const { onClose, selectedValue, open, Emails } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {Emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick("addAccount")}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export const Rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
