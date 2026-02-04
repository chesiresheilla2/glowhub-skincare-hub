import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WishlistItemProps {
  product: Product;
}

export const WishlistItem = ({ product }: WishlistItemProps) => {
  const { addToCart, isInCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemove = () => {
    removeFromWishlist(product.id);
    toast.info(`${product.name} removed from wishlist`);
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border/50 last:border-0">
      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/30"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <Link
          to={`/products/${product.id}`}
          className="font-serif font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="font-semibold text-lg">KSh {product.price.toFixed(2)}</span>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="gap-1.5"
              disabled={isInCart(product.id)}
            >
              <ShoppingCart className="w-4 h-4" />
              {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 text-muted-foreground hover:text-destructive"
              onClick={handleRemove}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
