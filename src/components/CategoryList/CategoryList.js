// CategoryList.js

import React from 'react';
import { categories } from '../../data/categories';

const CategoryList = () => {
    return (
        <div>
            <h3>Blog Categories</h3>
            <ul>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;