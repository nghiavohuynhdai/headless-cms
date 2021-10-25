import React from 'react';
import {SvgIcon} from '@material-ui/core';

function PinIcon(props) {
    return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
    <path data-name="layer2"
    fill="none" stroke="#e3d918" stroke-miterlimit="10" stroke-width="2" d="M2.6 61.4l24.2-24.2"
    stroke-linejoin="round" stroke-linecap="round"></path>
    <path data-name="layer1" d="M43.1 45V33.7L53.7 23a5 5 0 0 0 6.3-.6l1.4-1.4L43.1 2.6 41.6 4a5 5 0 0 0-.6 6.3L30.3 20.9H19l-4.2 4.2 8.5 8.5 3 3 1 1 3 3 8.5 8.5z"
    fill="none" stroke="#e3d918" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
    stroke-linecap="round"></path>
      </SvgIcon>
    );
}

export default PinIcon;