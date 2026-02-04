import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-border/50 last:border-0">
      {/* Product Image */}
      <Link
        to={`/products/${product.id}`}
        className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/30"
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
          className="font-medium text-foreground hover:text-primary transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(product.id, quantity - 1)}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(product.id, quantity + 1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>

          {/* Price */}
          <div className="text-right">
            <span className="font-semibold">
              ${(product.price * quantity).toFixed(2)}
            </span>
            {quantity > 1 && (
              <p className="text-xs text-muted-foreground">
                ${product.price.toFixed(2)} each
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
        onClick={() => removeFromCart(product.id)}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
