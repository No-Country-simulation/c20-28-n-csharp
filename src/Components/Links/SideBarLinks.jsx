import React from 'react';
import {Link} from 'react-router-dom';

const SideBarLinks = ({url, text}) => {
    return (
        <li>
            <Link to={url} class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none  link-light mt-5">
                <span class="fs-4">{text}</span>
            </Link>
        </li>
    
    );
};

export default SideBarLinks;