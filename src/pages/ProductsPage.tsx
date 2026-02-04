import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products';
import { products, Product } from '@/data/products';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const categories: { value: Product['category'] | 'all'; label: string }[] = [
  { value: 'all', label: 'All Products' },
  { value: 'cleansing', label: 'Cleansing' },
  { value: 'toning', label: 'Toning' },
  { value: 'serums', label: 'Serums' },
  { value: 'moisturizing', label: 'Moisturizing' },
  { value: 'sunscreen', label: 'Sun Protection' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const skinTypes = useMemo(() => {
    const types = new Set<string>();
    products.forEach(p => p.skinType.forEach(t => types.add(t)));
    return Array.from(types).sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.ingredients.some(i => i.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    result = result.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Skin type filter
    if (selectedSkinTypes.length > 0) {
      result = result.filter(p =>
        selectedSkinTypes.some(type => p.skinType.includes(type))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, priceRange, selectedSkinTypes]);

  const handleSkinTypeChange = (type: string, checked: boolean) => {
    setSelectedSkinTypes(prev =>
      checked ? [...prev, type] : prev.filter(t => t !== type)
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('featured');
    setPriceRange([0, 100]);
    setSelectedSkinTypes([]);
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== 'all' ||
    selectedSkinTypes.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 100;

  return (
    <Layout>
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Shop All Products
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our curated collection of premium skincare essentials for every step of your routine.
          </p>
        </div>

        {/* Search & Filters Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map(opt => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Filters Sheet */}
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {hasActiveFilters && (
                  <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                    {selectedSkinTypes.length + (selectedCategory !== 'all' ? 1 : 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-6">
                {/* Skin Type Filter */}
                <div>
                  <h4 className="font-medium mb-3">Skin Type</h4>
                  <div className="space-y-2">
                    {skinTypes.map(type => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox
                          id={type}
                          checked={selectedSkinTypes.includes(type)}
                          onCheckedChange={(checked) =>
                            handleSkinTypeChange(type, checked as boolean)
                          }
                        />
                        <Label htmlFor={type} className="text-sm cursor-pointer">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={clearFilters}
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-muted-foreground"
              onClick={clearFilters}
            >
              Clear filters
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              No products found
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductsPage;
