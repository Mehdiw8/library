import React from 'react';

const Title = ({classStyle , text}) => {
    return (
        <div className='border-pink-700 align-middle border-2 border-solid border-r-0  border-t-0 border-l-0 pb-2'>
            <h3 className={classStyle}>{text}</h3>
        </div>
    );
};

export default Title;