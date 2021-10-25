import React from 'react';
import {SvgIcon} from '@material-ui/core';

function PhoneIcon(props) {
    return (
      <SvgIcon viewBox="0 0 64 64" {...props}>
        <path data-name="layer2"
        d="M15 24a3.9 3.9 0 0 0 3-4.5c-.3-3 1.4-7.5 14-7.5s14.3 4.4 14 7.5 2.9 4.3 4 4.5 4.8 1.5 6.1 1.8 3.2.8 4.6-1.1a11.2 11.2 0 0 0-2-13.2C53.5 6.3 43.1 4 32 4S10.5 6.3 5.3 11.4a11.2 11.2 0 0 0-2 13.2c1.4 1.8 3.3 1.3 4.6 1.1z"
        fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
        stroke-linecap="round"></path>
        <path data-name="layer1" d="M56 60V48a22 22 0 0 0-22-22h-4A22 22 0 0 0 8 48v12zM26 20v6.4M38 20v6.4"
        fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
        stroke-linecap="round"></path>
        <path data-name="layer1" fill="none" stroke="#ffffff" stroke-miterlimit="10"
        stroke-width="2" d="M21 35h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm-20 8h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2zm-20 8h2v2h-2zm10 0h2v2h-2zm10 0h2v2h-2z"
        stroke-linejoin="round" stroke-linecap="round"></path>
      </SvgIcon>
    );
}

export default PhoneIcon;