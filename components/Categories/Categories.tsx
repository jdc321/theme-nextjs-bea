import { Category } from '@prezly/sdk';
import React, { FunctionComponent } from 'react';

import CategoryLink from '@/components/CategoryLink';

type Props = {
    categories: Category[];
};

const Categories: FunctionComponent<Props> = ({ categories }) => (
    <>
        {categories.map((category) => (
            <CategoryLink key={category.id} category={category} />
        ))}
    </>
);

export default Categories;
