import { Layout } from '@/components/layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ingredients = [
  {
    name: 'Vitamin C',
    category: 'Antioxidant',
    description: 'A powerful antioxidant that brightens skin, boosts collagen production, and protects against environmental damage.',
    benefits: ['Brightens complexion', 'Fades dark spots', 'Fights free radicals', 'Boosts collagen'],
    usage: 'Best used in the morning before sunscreen. Start with lower concentrations (10-15%) and work up.',
    pairsWellWith: ['Vitamin E', 'Ferulic Acid', 'Hyaluronic Acid'],
    avoidWith: ['Niacinamide (myth!)', 'Retinol (use at different times)'],
  },
  {
    name: 'Retinol',
    category: 'Anti-Aging',
    description: 'The gold standard for anti-aging. A vitamin A derivative that increases cell turnover and stimulates collagen.',
    benefits: ['Reduces wrinkles', 'Improves texture', 'Treats acne', 'Evens skin tone'],
    usage: 'Use at night, starting 2-3x weekly. Always use sunscreen during the day. Expect some purging initially.',
    pairsWellWith: ['Hyaluronic Acid', 'Niacinamide', 'Ceramides'],
    avoidWith: ['Vitamin C (same routine)', 'AHAs/BHAs (same night)', 'Benzoyl Peroxide'],
  },
  {
    name: 'Hyaluronic Acid',
    category: 'Hydration',
    description: 'A moisture magnet that can hold up to 1000x its weight in water, plumping skin and reducing fine lines.',
    benefits: ['Intense hydration', 'Plumps fine lines', 'Suitable for all types', 'Enhances other products'],
    usage: 'Apply to damp skin for best results. Can be used morning and night. Layer under moisturizer.',
    pairsWellWith: ['Everything!', 'Vitamin C', 'Retinol', 'Niacinamide'],
    avoidWith: ['Nothing—it plays well with all ingredients'],
  },
  {
    name: 'Niacinamide',
    category: 'Multi-Tasker',
    description: 'A form of vitamin B3 that minimizes pores, controls oil, and strengthens the skin barrier.',
    benefits: ['Minimizes pores', 'Controls sebum', 'Reduces redness', 'Strengthens barrier'],
    usage: 'Can be used morning and night. Works well at 2-10% concentration. Very well-tolerated.',
    pairsWellWith: ['Hyaluronic Acid', 'Retinol', 'Zinc', 'Peptides'],
    avoidWith: ['Vitamin C (old myth—actually fine together)'],
  },
  {
    name: 'Salicylic Acid',
    category: 'Exfoliant (BHA)',
    description: 'An oil-soluble acid that penetrates pores to dissolve debris, making it ideal for acne and blackheads.',
    benefits: ['Clears pores', 'Fights acne', 'Reduces blackheads', 'Anti-inflammatory'],
    usage: 'Best for oily/acne-prone skin. Start with lower percentages (0.5-2%). Don\'t over-exfoliate.',
    pairsWellWith: ['Niacinamide', 'Hyaluronic Acid', 'Centella'],
    avoidWith: ['Other acids (same routine)', 'Retinol (same night)'],
  },
];

const IngredientsPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <div className="badge-sage mb-6">Shop By</div>
          <h1 className="heading-display mb-6">Key Ingredients</h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Become an ingredient expert. Learn what each active does and how to incorporate it into your routine.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {ingredients.map((ingredient) => (
              <div key={ingredient.name} className="card-elevated">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <span className="badge-sage mb-3">{ingredient.category}</span>
                    <h2 className="font-serif text-3xl font-medium mb-3">{ingredient.name}</h2>
                    <p className="text-body">{ingredient.description}</p>
                  </div>
                  
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {ingredient.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                        How to Use
                      </h4>
                      <p className="text-sm text-muted-foreground">{ingredient.usage}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                        Pairs Well With
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.pairsWellWith.map((item) => (
                          <span key={item} className="text-xs px-2 py-1 bg-sage-light rounded-full text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                        Avoid Mixing With
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.avoidWith.map((item) => (
                          <span key={item} className="text-xs px-2 py-1 bg-accent rounded-full text-accent-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sage-light">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Need Help Building Your Routine?</h2>
          <p className="text-body max-w-xl mx-auto mb-8">
            Our experts can help you combine these ingredients effectively for your specific skin needs.
          </p>
          <Link to="/signup" className="btn-hero">
            Get Expert Guidance
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default IngredientsPage;
