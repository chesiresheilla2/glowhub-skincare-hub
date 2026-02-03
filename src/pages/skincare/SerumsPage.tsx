import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowLeft, Check } from 'lucide-react';
import serumsImage from '@/assets/category-serums.jpg';

const productTypes = [
  {
    name: 'Vitamin C',
    description: 'A powerful antioxidant that brightens skin, fades dark spots, and protects against environmental damage.',
    benefits: ['Brightens complexion', 'Fades hyperpigmentation', 'Boosts collagen'],
    bestFor: ['Dull skin', 'Dark spots', 'Anti-aging'],
  },
  {
    name: 'Hyaluronic Acid',
    description: 'A hydration superstar that holds up to 1000x its weight in water, plumping skin from within.',
    benefits: ['Intense hydration', 'Plumps fine lines', 'Suitable for all skin types'],
    bestFor: ['Dehydrated skin', 'Fine lines', 'All skin types'],
  },
  {
    name: 'Niacinamide',
    description: 'A versatile ingredient that minimizes pores, controls oil, and strengthens the skin barrier.',
    benefits: ['Minimizes pores', 'Controls sebum', 'Reduces redness'],
    bestFor: ['Oily skin', 'Large pores', 'Uneven texture'],
  },
  {
    name: 'Retinol',
    description: 'The gold standard for anti-aging. Speeds up cell turnover for smoother, younger-looking skin.',
    benefits: ['Reduces wrinkles', 'Improves texture', 'Treats acne'],
    bestFor: ['Aging concerns', 'Acne', 'Uneven skin tone'],
  },
  {
    name: 'Acne Treatments',
    description: 'Targeted formulas with salicylic acid, benzoyl peroxide, or azelaic acid to fight breakouts.',
    benefits: ['Clears breakouts', 'Prevents new acne', 'Reduces inflammation'],
    bestFor: ['Acne-prone skin', 'Blackheads', 'Congested pores'],
  },
];

const SerumsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={serumsImage}
            alt="Serum products"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container-custom relative z-10">
          <Link
            to="/skincare-steps"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Skincare Steps
          </Link>
          <span className="text-8xl font-serif font-light text-primary/20 block mb-2">03</span>
          <h1 className="heading-display mb-4">Treatments & Serums</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Concentrated formulas that target your specific skin concerns.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="heading-section mb-6">The Power of Serums</h2>
            <div className="prose prose-lg text-body space-y-4">
              <p>
                Serums are the workhorses of your skincare routine. These lightweight, fast-absorbing 
                formulas are packed with high concentrations of active ingredients that penetrate 
                deeper than regular moisturizers.
              </p>
              <p>
                Unlike moisturizers that sit on top of the skin, serums are designed to deliver 
                powerful ingredients directly where they're needed. Whether you're targeting wrinkles, 
                dark spots, acne, or dehydration, there's a serum for you.
              </p>
              <p>
                Apply serums after toning and before moisturizing. A few drops are all you need—pat 
                gently into your skin and let it absorb for a minute before moving to your next step.
              </p>
            </div>
          </div>

          <h2 className="heading-section text-center mb-12">Popular Active Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productTypes.map((product) => (
              <div key={product.name} className="card-elevated">
                <h3 className="font-serif text-xl font-medium mb-3">{product.name}</h3>
                <p className="text-body text-sm mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Benefits
                  </h4>
                  <ul className="space-y-1.5">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((type) => (
                    <span key={type} className="badge-sage text-xs">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link
              to="/skincare-steps/toning"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Toning
            </Link>
            <Link
              to="/skincare-steps/moisturizing"
              className="text-primary font-medium hover:underline"
            >
              Moisturizing →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SerumsPage;
