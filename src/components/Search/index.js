import React from "react";
import TextField from '@material-ui/core/TextField';

function Search(props) {



    return (
        <TextField id="standard-search" label="search" type="search" name="search" variant="outlined" onChange={props.handleInputChange} />
    )

}

export default Search;