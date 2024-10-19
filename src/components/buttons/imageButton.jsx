import { Box, Typography } from "@mui/material";
import { CustomButton1 } from "./customButton1";

export function ImageButton({ onClick, src, text }) {
  return (
    <CustomButton1
      style={{ display: "flex", gap: "5px", width: "40%" }}
      size="large"
      variant="contained"
      onClick={() => onClick()}
    >
      <Box display={'flex'} flexDirection={'column'} gap={2} alignItems={"center"}>
        <img src={src} width={100} height={"100"} />

        <Typography lineHeight={1.2} variant="button">{text}</Typography>
      </Box>
    </CustomButton1>
  );
}
