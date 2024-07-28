import './App.css';

interface ProductCardProps {
    productImage: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    // productIsLiked: boolean;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div className="product-card">
            <img src={props.productImage} alt={props.productName} />
            <h2>{props.productName}</h2>
            <p>{props.productDescription}</p>
            <p className="price">${props.productPrice.toFixed(2)}</p>
            {/* <p className={props.productIsLiked ? 'liked' : 'not-liked'}>
                {props.productIsLiked ? 'Liked' : 'Not Liked'}
            </p> */}
        </div>
    );
}

export default ProductCard;