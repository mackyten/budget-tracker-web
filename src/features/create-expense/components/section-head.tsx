import { AddCircle } from "@mui/icons-material";
import { Box, Chip, Grid2, Stack } from "@mui/material";
import theme from "../../../common/theme";

export const SectionHead: React.FC<{
    onClick: () => void,
    label: string,
    icon: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
}> = ({
    onClick,
    label,
    icon
}) => {
        return (


            <Grid2 container sx={{ marginY: '30px' }}>
                <Grid2 size={12}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Chip icon={icon} label={label} color="secondary" />
                        <Box sx={{
                            color: 'gray',
                            width: { mobile: 0, tablet: "100%" },
                            height: '1px',
                            backgroundColor: theme.palette.grey[300],
                        }} />
                        <Chip
                            variant="outlined"
                            icon={<AddCircle />}
                            label={`Add ${label}`}
                            onClick={onClick}
                            color="secondary"
                        />
                    </Stack>
                </Grid2>
            </Grid2>

        );
    }