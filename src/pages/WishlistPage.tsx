import { Link } from 'react-router-dom';
import { Heart, ArrowRight, ShoppingCart, Trash2 } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { WishlistItem } from '@/components/products';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const WishlistPage = () => {
  const { items, clearWishlist, getWishlistCount } = useWishlist();
  const { addToCart } = useCart();

  const handleAddAllToCart = () => {
    items.forEach(product => addToCart(product));
    toast.success('All items added to cart');
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl font-medium mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Save your favorite products here to easily find them later.
            </p>
            <Button asChild size="lg">
              <Link to="/products">
                Browse Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium">
            My Wishlist ({getWishlistCount()})
          </h1>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2"
              onClick={handleAddAllToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add All to Cart
            </Button>
            <Button
              variant="ghost"
              className="text-muted-foreground gap-2"
              onClick={clearWishlist}
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 p-6">
          {items.map(product => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
