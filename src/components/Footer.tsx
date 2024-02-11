import { Box } from "@mui/material";

function Footer() {

    return (
        <Box maxWidth={"100vw"} minHeight={"15vh"} sx={{ display: "flex",alignItems: 'center', fontSize:'0.7rem', justifyContent:"center"}}>
            &copy; Copyright 2024. All rights reserved | Paula Airaudo ♥
        </Box>
    );
}

export default Footer;