import className from "classnames";
import React from "react";
import T from 'prop-types';
const Icon = ({icon}) => {

    const iconClass = className('fas',icon);

    return (
        <i className={iconClass} >
        </i>
    )
}

Icon.propTypes= {
    icon:T.string
}
Icon.defaltProps={
    icon:null
}
export default Icon