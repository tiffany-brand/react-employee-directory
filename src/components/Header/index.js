import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import "./style.css";

function Header() {



    return (
        <>
            <Grid className="Header-heading" container justify="center">
                <Typography variant="h2" align="center">Employee Directory</Typography>
                <Grid className="Header-instructions" container justify="center">
                    <Typography variant="p" align="center">Click the headings to sort or search to filter results. </Typography>
                </Grid>
            </Grid>

        </>
    )

}

export default Header;