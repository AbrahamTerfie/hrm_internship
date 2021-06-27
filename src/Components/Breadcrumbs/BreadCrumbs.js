import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = ({title1, title2, title3}) => {
    return (
        <div>

            <Breadcrumb>
                <BreadcrumbItem> {title1} </BreadcrumbItem>
                <BreadcrumbItem>{title2} </BreadcrumbItem>
                <BreadcrumbItem > {title3} </BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default Breadcrumbs;