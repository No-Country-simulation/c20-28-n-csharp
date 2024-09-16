import React from 'react';
import {Link} from 'react-router-dom';

const SideBarLinks = ({url, text}) => {
    return (
        <li>
            <Link to={url} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none ">
                <span className="fs-4">{text}</span>
            </Link>
        </li>
    
    );
};

export default SideBarLinks;