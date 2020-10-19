import React from 'react';
import MenuItem from './MenuItem';
import App from '../App';

const MenuList = ({ menuItems, foodItems }) => {
    return (
        <div>
            { menuItems.map(item => <MenuItem itemInfo={item} key={item.itemName}  /> ) }

            <div>
                {foodItems.map(item => <MenuItem itemName={item} description={item} foodImage={item} price={item} isFavorite={item} /> ) }
            </div>
        </div>
       
    )
}

export default MenuList;