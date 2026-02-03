import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowLeft, Check } from 'lucide-react';
import cleansingImage from '@/assets/category-cleansing.jpg';

const productTypes = [
  {
    name: 'Gel Cleansers',
    description: 'Best for oily and combination skin. Gel cleansers provide a deep clean without over-drying.',
    benefits: ['Removes excess oil', 'Light and refreshing', 'Non-comedogenic'],
    skinTypes: ['Oily', 'Combination'],
  },
  {
    name: 'Foam Cleansers',
    description: 'Creates a rich lather that thoroughly removes impurities. Great for normal to oily skin.',
    benefits: ['Deep cleansing action', 'Satisfying lather', 'Rinses off easily'],
    skinTypes: ['Normal', 'Oily'],
  },
  {
    name: 'Oil Cleansers',
    description: 'Perfect for double cleansing. Oil dissolves oil, making it excellent for removing makeup and sunscreen.',
    benefits: ['Dissolves makeup', 'Gentle yet effective', 'Nourishing ingredients'],
    skinTypes: ['All skin types', 'Especially dry'],
  },
  {
    name: 'Micellar Water',
    description: 'A gentle, no-rinse option that uses micelles to lift away dirt and makeup without harsh rubbing.',
    benefits: ['No rinsing required', 'Ultra gentle', 'Great for sensitive skin'],
    skinTypes: ['Sensitive', 'All types'],
  },
];

const CleansingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={cleansingImage}
            alt="Cleansing products"
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
          <span className="text-8xl font-serif font-light text-primary/20 block mb-2">01</span>
          <h1 className="heading-display mb-4">Cleansing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The essential first step that sets the foundation for your entire skincare routine.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="heading-section mb-6">Why Cleansing Matters</h2>
            <div className="prose prose-lg text-body space-y-4">
              <p>
                Cleansing is the cornerstone of any effective skincare routine. Throughout the day, 
                your skin accumulates dirt, oil, makeup, and environmental pollutants that can clog 
                pores and lead to breakouts, dullness, and premature aging.
              </p>
              <p>
                A proper cleanser removes these impurities without stripping your skin of its natural 
                oils. The key is finding the right formula for your skin type—one that cleans 
                effectively while maintaining your skin's delicate moisture balance.
              </p>
              <p>
                For best results, cleanse twice daily: in the morning to remove overnight buildup, 
                and in the evening to wash away the day's accumulation. If you wear makeup or 
                sunscreen, consider double cleansing at night for a thorough clean.
              </p>
            </div>
          </div>

          <h2 className="heading-section text-center mb-12">Types of Cleansers</h2>
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

      {/* Tips */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-section mb-8">Pro Tips for Cleansing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-card rounded-2xl p-6">
                <span className="text-3xl font-serif text-primary/50 block mb-2">01</span>
                <h4 className="font-medium mb-2">Use Lukewarm Water</h4>
                <p className="text-sm text-muted-foreground">
                  Hot water can strip your skin, while cold water won't effectively remove oils.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6">
                <span className="text-3xl font-serif text-primary/50 block mb-2">02</span>
                <h4 className="font-medium mb-2">Be Gentle</h4>
                <p className="text-sm text-muted-foreground">
                  Use light, circular motions. No need to scrub—let the cleanser do the work.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6">
                <span className="text-3xl font-serif text-primary/50 block mb-2">03</span>
                <h4 className="font-medium mb-2">Pat Dry</h4>
                <p className="text-sm text-muted-foreground">
                  Gently pat your face with a clean towel instead of rubbing to avoid irritation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Step */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <p className="text-muted-foreground mb-4">Next Step</p>
          <Link
            to="/skincare-steps/toning"
            className="inline-flex items-center gap-3 group"
          >
            <span className="heading-section group-hover:text-primary transition-colors">
              Toning →
            </span>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CleansingPage;
