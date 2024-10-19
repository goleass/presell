import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const CustomButton1 = styled(Button)({
    boxShadow: "0px 10px 0px -3px #743732",
    borderRadius: "10px",
    textTransform: "none",
    fontSize: 20,
    color: "#333333",
    padding: "10px 20px",
    // border: '0.4px solid',
    lineHeight: 1.5,
    // backgroundColor: '#0063cc',
    // borderColor: '#0063cc',
    backgroundColor: "#ececec",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // '&:hover': {
    //   backgroundColor: '#0069d9',
    //   borderColor: '#0062cc',
    //   boxShadow: 'none',
    // },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#d1d1d1",
      borderColor: "#d1d1d1",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem #3333",
    },
  });
  