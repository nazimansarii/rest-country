import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
