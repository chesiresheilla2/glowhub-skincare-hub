import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowRight } from 'lucide-react';

const concerns = [
  {
    name: 'Acne',
    description: 'Breakouts, blackheads, whiteheads, and congested pores that need targeted treatment.',
    ingredients: ['Salicylic Acid', 'Benzoyl Peroxide', 'Niacinamide', 'Tea Tree'],
    routine: 'Gentle cleansing, BHA exfoliation, lightweight hydration, and spot treatments.',
  },
  {
    name: 'Hyperpigmentation',
    description: 'Dark spots, sun spots, and uneven skin tone caused by sun damage or inflammation.',
    ingredients: ['Vitamin C', 'Alpha Arbutin', 'Tranexamic Acid', 'Azelaic Acid'],
    routine: 'Brightening serums, consistent sunscreen use, and gentle exfoliation.',
  },
  {
    name: 'Anti-Aging',
    description: 'Fine lines, wrinkles, loss of firmness, and reduced elasticity that come with time.',
    ingredients: ['Retinol', 'Peptides', 'Vitamin C', 'Hyaluronic Acid'],
    routine: 'Hydrating serums, retinol at night, rich moisturizers, and daily SPF.',
  },
  {
    name: 'Dull Skin',
    description: 'Lack of radiance, tired-looking complexion, and overall lackluster appearance.',
    ingredients: ['Vitamin C', 'AHAs', 'Niacinamide', 'Squalane'],
    routine: 'Regular exfoliation, antioxidant serums, and proper hydration.',
  },
  {
    name: 'Uneven Texture',
    description: 'Rough patches, bumpy skin, enlarged pores, and inconsistent skin surface.',
    ingredients: ['AHAs', 'BHAs', 'Retinol', 'Niacinamide'],
    routine: 'Chemical exfoliation, pore-refining products, and hydrating treatments.',
  },
];

const SkinConcernPage = () => {
  return (
    <Layout>
      <section className="section-padding bg-accent/30">
        <div className="container-custom text-center">
          <div className="badge-sage mb-6">Shop By</div>
          <h1 className="heading-display mb-6">Your Skin Concerns</h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Every skin has its challenges. Find targeted solutions for your specific concerns.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {concerns.map((concern, index) => (
              <div
                key={concern.name}
                className="card-elevated grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                <div>
                  <span className="text-4xl font-serif font-light text-primary/30 block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-2xl font-medium mb-3">{concern.name}</h2>
                  <p className="text-body">{concern.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Key Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {concern.ingredients.map((ingredient) => (
                      <span key={ingredient} className="badge-sage">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                    Routine Focus
                  </h4>
                  <p className="text-sm text-muted-foreground">{concern.routine}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Multiple Concerns?</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            It's normal to have more than one concern. Join GlowHub for a customized routine that addresses all your needs.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:shadow-lg transition-all"
          >
            Get Personalized Recommendations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SkinConcernPage;
