import PropTypes from 'prop-types';

import { Fragment } from 'react';



export const Septimo = ({title, subtitle}) => {

    Septimo.PropTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    }


    
    return (
        <>
        <Fragment>
        <h2> {title} </h2>
        <h3> {subtitle} </h3>
        </Fragment>
        </>
    )
}