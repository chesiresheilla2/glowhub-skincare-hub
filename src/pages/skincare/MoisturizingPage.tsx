import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowLeft, Check } from 'lucide-react';
import moisturizingImage from '@/assets/category-moisturizing.jpg';

const productTypes = [
  {
    name: 'Day Creams',
    description: 'Lightweight formulas that hydrate and protect during the day, often with added SPF or antioxidants.',
    benefits: ['Daytime protection', 'Lightweight feel', 'Makeup-friendly'],
    skinTypes: ['All types'],
  },
  {
    name: 'Night Creams',
    description: 'Rich, nourishing formulas that support skin repair and regeneration while you sleep.',
    benefits: ['Deep nourishment', 'Supports repair', 'Anti-aging benefits'],
    skinTypes: ['Normal', 'Dry', 'Mature'],
  },
  {
    name: 'Gel Moisturizers',
    description: 'Water-based, oil-free formulas that provide hydration without heaviness or greasiness.',
    benefits: ['Oil-free hydration', 'Cooling sensation', 'Fast absorption'],
    skinTypes: ['Oily', 'Combination', 'Acne-prone'],
  },
  {
    name: 'Face Oils',
    description: 'Concentrated oils that seal in moisture and provide essential fatty acids for a healthy glow.',
    benefits: ['Intense nourishment', 'Adds radiance', 'Strengthens barrier'],
    skinTypes: ['Dry', 'Normal', 'Mature'],
  },
];

const MoisturizingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={moisturizingImage}
            alt="Moisturizing products"
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
          <span className="text-8xl font-serif font-light text-primary/20 block mb-2">04</span>
          <h1 className="heading-display mb-4">Moisturizing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Lock in hydration and nourish your skin barrier for lasting comfort.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="heading-section mb-6">Why Moisturize?</h2>
            <div className="prose prose-lg text-body space-y-4">
              <p>
                Moisturizing is essential for every skin type—yes, even oily skin! A good moisturizer 
                seals in all the benefits of your previous steps and maintains your skin's protective 
                barrier.
              </p>
              <p>
                Your skin barrier keeps moisture in and irritants out. When it's compromised, you 
                experience dryness, sensitivity, and increased signs of aging. Moisturizers 
                strengthen this barrier with ingredients like ceramides, fatty acids, and humectants.
              </p>
              <p>
                Choose a moisturizer based on your skin type and the time of day. Lighter formulas 
                work well under makeup, while richer creams provide overnight nourishment.
              </p>
            </div>
          </div>

          <h2 className="heading-section text-center mb-12">Types of Moisturizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productTypes.map((product) => (
              <div key={product.name} className="card-elevated">
                <h3 className="font-serif text-xl font-medium mb-3">{product.name}</h3>
                <p className="text-body mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.skinTypes.map((type) => (
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
              to="/skincare-steps/serums"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Serums
            </Link>
            <Link
              to="/skincare-steps/sun-protection"
              className="text-primary font-medium hover:underline"
            >
              Sun Protection →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MoisturizingPage;
