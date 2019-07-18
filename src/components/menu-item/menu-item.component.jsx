import React from 'react';

import './menu-item.styles.scss';

class MenuItem extends React.Component {
    render() {
        return (
            <div className={`${this.props.items.size} menu-item`} >
                <div className="background-image" style={{ backgroundImage: `url(${this.props.items.imageUrl})` }} />
                <div className="content">
                    <h1 className="title">{this.props.items.title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div >
        )
    }
}

export default MenuItem;