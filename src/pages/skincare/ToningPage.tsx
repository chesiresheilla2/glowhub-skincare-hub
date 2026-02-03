import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowLeft, Check } from 'lucide-react';
import toningImage from '@/assets/category-toning.jpg';

const productTypes = [
  {
    name: 'Hydrating Toners',
    description: 'Packed with humectants like hyaluronic acid and glycerin to deliver deep hydration and plump the skin.',
    benefits: ['Intense hydration', 'Plumps fine lines', 'Preps skin for serums'],
    skinTypes: ['Dry', 'Normal', 'All types'],
  },
  {
    name: 'Exfoliating Toners',
    description: 'Contains gentle acids (AHA/BHA) to remove dead skin cells, unclog pores, and improve skin texture.',
    benefits: ['Brightens complexion', 'Unclogs pores', 'Smooths texture'],
    skinTypes: ['Oily', 'Combination', 'Acne-prone'],
  },
];

const ToningPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={toningImage}
            alt="Toning products"
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
          <span className="text-8xl font-serif font-light text-primary/20 block mb-2">02</span>
          <h1 className="heading-display mb-4">Toning</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Balance your skin and prepare it to absorb the benefits of your next steps.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="heading-section mb-6">The Role of Toners</h2>
            <div className="prose prose-lg text-body space-y-4">
              <p>
                Modern toners have evolved far beyond the harsh, alcohol-based formulas of the past. 
                Today's toners are treatment products that prep your skin, restore pH balance, and 
                deliver targeted benefits.
              </p>
              <p>
                After cleansing, your skin's pH may be slightly off-balance. A good toner helps 
                restore that balance while removing any last traces of impurities. More importantly, 
                toners enhance the absorption of everything that follows.
              </p>
              <p>
                Apply toner to slightly damp skin by patting it in with your palms or using a cotton 
                pad. This step takes just seconds but makes a noticeable difference in how well 
                your serums and moisturizers work.
              </p>
            </div>
          </div>

          <h2 className="heading-section text-center mb-12">Types of Toners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              to="/skincare-steps/cleansing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Cleansing
            </Link>
            <Link
              to="/skincare-steps/serums"
              className="text-primary font-medium hover:underline"
            >
              Serums →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ToningPage;
