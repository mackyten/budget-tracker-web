import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  Grid2,
  Typography,
  Tooltip,
  Divider,
} from "@mui/material";
import { AccountBalance, Add } from "@mui/icons-material";
import useHomePageStore from "./api/store";
import { modal } from "../../common/styles";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const { isCreating, setIsCreating } = useHomePageStore();
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const isCreatePage = location.pathname !== "/home";

  return (
    <Box
      sx={{
        //border: '1px solid red',
        height: "100%",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {!isCreatePage ? (
        <Box>
          <Grid2 container>
            <Grid2 size={{ mobile: 12, tablet: 4, laptop: 2 }}>
              <Tooltip title="Create new plan">
                <Card
                  onClick={() => navigate("/home/create")}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    padding: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.secondary.contrastText,
                    minHeight: "100px",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  <Add />
                  <Typography variant="subtitle1" sx={{ mr: 2 }}>
                    Create
                  </Typography>
                </Card>
              </Tooltip>
            </Grid2>
          </Grid2>
          <Divider
            sx={{
              marginY: "20px",
            }}
          />

          <Grid2 container>
            <Grid2 size={{ mobile: 12, tablet: 4, laptop: 2 }}>
              <Tooltip title="Income">
                <Card
                  onClick={() => navigate("/home/income-list")}
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    padding: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.secondary.contrastText,
                    minHeight: "100px",
                    "&:hover": {
                      cursor: "pointer",
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  <AccountBalance />
                  <Typography variant="subtitle1" sx={{ mr: 2 }}>
                    Income
                  </Typography>
                </Card>
              </Tooltip>
            </Grid2>
          </Grid2>
        </Box>
      ) : (
        <Outlet />
      )}
    </Box>
  );
};

export default App;
