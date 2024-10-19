import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import classes from "./classes.module.css";
export function DefaultTemplate() {
return (
<Box className={classes.root}>
<header>
<Header />
</header>
<main>
<Outlet />
</main>
<footer>
<Footer />
</footer>
</Box>
);
}