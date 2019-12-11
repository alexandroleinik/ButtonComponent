import React,{useState,useEffect} from 'react';
import T from 'prop-types';
import className from 'classnames';
import Icon from '../Icon'

import './button.scss';



const Button = ({size, type, href,children,classes,loading, disabled,onClick,icon,...attrs})=>{

    const [hover,setHover]=useState(false);
    const [btnLoading,setLoading]=useState(false);


    const btnClass = className(
        'btn',
        classes ,
        `btn--${size}`,
        `btn--${type}`,
        hover ? 'hover' : null,
        href ?'btn--link':null,
        btnLoading ? 'loading' :null
    );

    useEffect(()=>{
        loading ? setLoading(true):setLoading(false)
    },[loading])


    const Tag = href ? 'a' : 'button';




    return(
        <Tag {...attrs}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
             className={btnClass}
             disabled={disabled}
             onClick={onClick}
        >
            {btnLoading && <Icon icon='fa-spinner'/>}
            {!btnLoading && (icon && <Icon icon={icon}/>)}
            {children && <span>{children}</span>}
        </Tag>
    )
}



Button.propTypes= {
    size:T.oneOf(['s','m','l']),
    type:T.oneOf(['default','primary','success','warning','error','link']),
    href:T.string,
    children:T.node,
    disabled:T.bool,
    onClick:T.func,
    icon:T.string,
    loading:T.bool
}
Button.defaultProps={
    size:'s',
    type:'default',
    children:null,
    disabled:false,
    onClick:()=>{},
    icon:null,
    href:null,
    loading:false
}

export default Button;