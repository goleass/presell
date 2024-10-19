import AvatarBase from "@mui/material/Avatar";

export function Avatar({ src }) {
  return (
    <AvatarBase
      alt="Remy Sharp"
      src={src}
      sx={{ width: 250, height: 250 }}
    />
  );
}
