import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems, foodItems }) => {
    return (
        <div>
            { menuItems.map(item => <MenuItem itemInfo={item} key={item.itemName} /> ) }
            {foodItems.map((item)=> <MenuItem itemName={item} description={item} foodImage={item} price={item} isFavorite={item} /> ) }
        </div>
    )
}

export default MenuList;