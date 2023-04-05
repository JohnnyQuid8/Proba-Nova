import {Input} from "antd"
import React from "react";



const SearchBar = () => {

const [searchState, setSearchState] = React.useState("");
    console.log(searchState)
    return (
        <Input
         placeholder="Search"
         onChange={(event)=> setSearchState(event.target.value.toLowerCase())}>

        </Input>
    )
}
export default SearchBar;