import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";


export default function Sidebar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Button variant="contained" color="secondary"><Link to="/" style={{color: "white"}}>Home</Link></Button>
                    <Button variant="contained" color="secondary"><Link to="/posts" style={{color: "black"}}>Posts</Link></Button>
                    <Button variant="contained" color="secondary"><Link to="/about" style={{color: "white"}}>About</Link></Button>

                </Toolbar>


            </AppBar>
        </Box>
    );
}