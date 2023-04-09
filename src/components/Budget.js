import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const [budget, setBudget] = useState(0);
    const {Currency} = useContext(AppContext);
    return (
        // <div className='alert alert-secondary'>
        //     <span>Budget: {Currency}{2000}</span>
        // </div>
        
        
        <div className='alert alert-secondary'>

            <div style={{ display: 'inline-block' }}>
            <span>Budget: {Currency}</span>
            
             <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' }}
                        onChange={(event) => setBudget(event.target.value)}>
                        
                        </input>
        </div>
        </div>
    );
};
export default Budget;
