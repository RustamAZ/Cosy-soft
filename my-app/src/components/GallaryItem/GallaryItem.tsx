import React from 'react';

const GallaryItem: React.FC<any> = ({dataItem}) => {
    return (
        <div>
           <img src={dataItem.url} alt={dataItem.alt} />
           <p>{dataItem.desc}</p>
        </div>
    )
}

export default GallaryItem;