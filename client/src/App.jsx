import AppBar from "./components/AppBar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";




function App() {


    return (
        <Container>
            <AppBar />
            <Outlet />
        </Container>
    )
}

export default App
