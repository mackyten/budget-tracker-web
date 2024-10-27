import { styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export const MyText = styled(Typography)(() => ({
    color: grey[700],
    fontWeight: 'normal',
    alignItems: 'center',
}));