import React, {useState} from 'react';
import "../../../App";

const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    // Use search input to go through database info
    // if (searchInput.length > 0) {
    //     countries.filter(( * database here * ) => {
    //         return { * database here * }.name.match(searchInput)
    //     })
    // };

    return (
        <div className = 'searchBar'>

            {/* Handle user input here */}
            <input
                type = 'text'
                placeholder = 'Search here'
                onChange = {handleChange}
                value = {searchInput}
            />

            {/* <table>
            <tr>

            </tr>

            {{* Database here *}.map(( {* Database here *} , index) => {

            <tr>
                <td>{{* Database here *} {* Array data name *} }</td>
                <td>{{* Database here *} {* Array data name *} }</td>

            </tr>

            })}
            </table> */}

        </div>
    ) 
}


export default Searchbar;