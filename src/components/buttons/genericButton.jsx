import { CustomButton1 } from "./customButton1";

export function GenericButton({ onClick, text, full, style }) {
  return (
    <CustomButton1
      style={{ display: "flex", gap: "10px", ...style }}
      size="large"
      variant="contained"
      onClick={() => onClick()}
      fullWidth={full}
    >
      {text}
    </CustomButton1>
  );
}
