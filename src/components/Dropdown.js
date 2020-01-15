import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

function DropDown(){
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    return(
        <React.Fragment>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dashboard-nav justify-content-end d-flex pt-3 pr-2">
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                    className="d-flex"
                >
                    <i className="fa fa-2x fa-user mr-2"/>
                    <p className="mr-2 mt-1">User</p>
                </DropdownToggle>
                <DropdownMenu  className="mr-3 dropdown">
                    <div className="p-2 "><Link to="/profile">Profile</Link></div>
                    <div onClick={toggle} className="p-2"><Link to="/app">Sign Out</Link></div>
                </DropdownMenu>                 
            </Dropdown>
        </React.Fragment>
    )
}

export default DropDown;