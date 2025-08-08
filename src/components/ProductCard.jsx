import { FiStar, FiShoppingCart, FiPackage } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { toast } from  'react-hot-toast';

const ProductCard = ({ product, addProduct }) => {

    // Simulate stock status - some products are out of stock
    const isOutOfStock = product.id % 7 === 0 // Every 7th product is out of stock

    // Render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);

        for (let i = 1; i <= 5; i++) {
            stars.push(
                < FiStar
                    key={i}
                    className={`${i <= fullStars ? 'text-warning' : 'text-secondary'}`}
                   style={{ fontSize: '0.9rem' }}
                />
            );
        }
        return stars;
    };

    const handleAddToCart = () => {
        if (isOutOfStock) {
            toast.error(`${product.title} is currently out of stock`);
            return;
        }
        toast.success(`${product.title} added to cart`);
        addProduct(product);
    };

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
            <div className={`card text-center h-100 ${isOutOfStock ? 'opacity-75' : ''}`}>
                {/* Product Image with "out of stock" badge */}
                <div className="position-relative" style={{ paddingTop: '100%' }}>

                    <div className="position-absolute top-0 start-0 w-100 h-100
                        d-flex align-items-center justify-content-center p-4">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="img-fluid w-auto h-auto"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                    {isOutOfStock && (
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center
                            justify-content-center bg-dark bg-opacity-25">
                          <span className="badge bg-danger text-white">
                            <FiPackage className="me-1" />
                            Agotado
                          </span>
                        </div>
                    )}
                </div>
                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                    {/* Title */}
                    <h5 className="card-title fs-6 mb-2 text-truncate">
                        {product.title}
                    </h5>

                    {/* Description */}
                    <p className="card-text text-muted small mb-3" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {product.description.substring(0, 90)}...
                    </p>

                    {/* Review Stars */}
                    <div className="d-flex align-items-center mb-2">
                        <div className="me-1">
                            {renderStars(product.rating?.rate || 0)}
                        </div>
                        <span className="text-muted small">
                          ({product.rating?.count || 0} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="fs-5 fw-bold mb-3">
                        ${product.price.toFixed(2)}
                        {isOutOfStock && (
                            <span className="text-danger small ms-2">(Not Available)</span>
                        )}
                    </div>

                    {/* buttons */}
                    <div className="d-flex gap-2 mt-auto">
                        {! isOutOfStock && (
                        <Link
                            to={`/product/${product.id}`}
                            className="btn btn-outline-dark btn-sm flex-grow-1"
                        >
                            View Details
                        </Link>)}
                        <button
                            className={`btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1 ${
                                isOutOfStock ? 'btn-secondary' : 'btn-dark'
                            }`}
                            onClick={handleAddToCart}
                            disabled={isOutOfStock}
                        >
                            <FiShoppingCart />
                            <span>{isOutOfStock ? 'Out of stock' : 'Add to cart'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;