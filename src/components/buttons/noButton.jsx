import CloseIcon from "@mui/icons-material/Close";
import { pink } from "@mui/material/colors";
import { CustomButton1 } from "./customButton1";

export function NoButton({ onClick }) {
  return (
    <CustomButton1
      style={{ display: "flex", gap: "5px", width: '40%' }}
      size="large"
      variant="contained"
      onClick={() => onClick()}
    >
      <CloseIcon sx={{ color: pink[500], fontSize: 30 }} />
      Não
    </CustomButton1>
  );
}
