import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems }) => {
    return (
        <div>
            { menuItems.map(item => 
            <MenuItem  itemInfo={item} key={item.itemName} itemName={item.itemName} description={item.description} price={item.price} foodImage={item.foodImage} isfavorite={item.isfavorite}  /> ) }
        </div>
       
    )
}

export default MenuList;