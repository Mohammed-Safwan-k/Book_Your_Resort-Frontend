import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import AllRoomsPage from "scenes/AllRoomsPage/AllRoomsPage";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import SingleRoomPage from "scenes/SingleRoomPage/SingleRoomPage";
import Pagenotfound  from "scenes/PageNotFound";

function App() {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token))

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage /> } />
            <Route path="/hotels" element={<AllRoomsPage /> } />
            <Route path="/hotels/:id" element={<SingleRoomPage /> } />
            <Route path="*" element={<Pagenotfound /> } />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
