import CheckIcon from "@mui/icons-material/Check";
import { CustomButton1 } from "./customButton1";
import { green } from "@mui/material/colors";

export function YesButton({ onClick, full }) {
  return (
    <CustomButton1
      style={{ display: "flex", gap: "5px", width: '40%' }}
      size="large"
      variant="contained"
      onClick={() => onClick()}
      fullWidth={full}
    >
      <CheckIcon sx={{ color: green[500], fontSize: 30 }} />
      Sim
    </CustomButton1>
  );
}
