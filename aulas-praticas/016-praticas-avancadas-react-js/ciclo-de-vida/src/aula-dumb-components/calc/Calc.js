import React, { memo } from "react";
import PropTypes from 'prop-types';

function Calc(props) {
    const { min, max, onChange } = props;

    return(
        <div>
            <p> Valor mínimo: {min} </p>
            <p> Valor máximo: {max} </p>
            <input type="text" onChange={onChange}/>
        </div>
    )
}

Calc.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default memo(Calc);