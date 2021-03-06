import React from 'react';
import PropTypes from 'prop-types';

import Smurf from './smurf';

const SmurfsList =(props) => {
    return (
        props.crudStates.postingSmurf || props.crudStates.gettingSmurfs || props.crudStates.puttingSmurf || props.crudStates.deletingSmurf ? 
            <p>Please be patient while we fetch the smurfs from the village :)</p>
        : props.crudStates.error !== '' ? 
            <p style={{color: '#FF0000'}}>Smurfs {props.crudStates.error}</p>
        :
            <div>
                {props.smurfsList.map( (smurf, i) => 
                    <Smurf 
                        smurf={smurf} 
                        editHandler={props.editHandler} 
                        deleteSmurf={props.deleteSmurf} 
                        key={i} 
                    /> 
                )}
            </div>
    );
};

SmurfsList.propTypes = {
    smurfsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number, 
        height: PropTypes.string,
        id: PropTypes.number
    })).isRequired,
    crudStates: PropTypes.shape({
        postingSmurf: PropTypes.bool.isRequired, 
        postedSmurf: PropTypes.bool, 
        gettingSmurfs: PropTypes.bool.isRequired, 
        gotSmurfs: PropTypes.bool, 
        puttingSmurf: PropTypes.bool.isRequired, 
        putSmurf: PropTypes.bool, 
        deletingSmurf: PropTypes.bool.isRequired, 
        deletedSmurf: PropTypes.bool, 
        error: PropTypes.string.isRequired
      }).isRequired,
      editHandler: PropTypes.func,
      deleteSmurf: PropTypes.func
};

export default SmurfsList;
