import React from 'react';
import ContentModal from '../ContentModal/ContentModal';
import { Container_inner, Image, H5, Container_outer } from './StyledProduct';

const ProductCard = ({ image, title, price, id }) => {
    return (
        <ContentModal  id={id} >
                <div>
                    <Image src={image} alt={title} />
                </div>
                <div>
                    <h5>{title.substring(0, 15)}...</h5>
                </div>
                <div>
                    <H5>${price}</H5>
            </div>
        </ContentModal>
    );
};

export default ProductCard;
