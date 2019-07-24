import React from 'react';

import CollectionItem from '../preview-collection-item/preview-collection-item.component';

import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className="preview">
            {
                items.filter((item, index) => index < 4).map(({ id, ...otherCollectionItem }) => <CollectionItem key={id} {...otherCollectionItem} />)
            }
        </div>
    </div>
)

export default PreviewCollection;