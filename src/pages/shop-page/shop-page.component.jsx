import React from 'react';

import PreviewCollection from '../../components/preview-collections/preview-collection.component';
import SHOP_DATA from './shop-page.data';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollection }) => (
                        <PreviewCollection key={id} {...otherCollection} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;