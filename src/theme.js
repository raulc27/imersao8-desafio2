import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    main: "#f0f0f0",
    contrastText: "#fafafa",
  },
  background: {
    default: "#242526",
  },
};

const theme = createTheme({
  palette,
});

export default theme;