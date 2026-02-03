import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowLeft, Check, AlertTriangle } from 'lucide-react';
import sunprotectionImage from '@/assets/category-sunprotection.jpg';

const productTypes = [
  {
    name: 'SPF 30',
    description: 'Blocks about 97% of UVB rays. Suitable for daily use with limited sun exposure.',
    benefits: ['Daily protection', 'Lightweight formulas', 'Great for makeup base'],
    bestFor: ['Indoor lifestyle', 'Minimal sun exposure'],
  },
  {
    name: 'SPF 50',
    description: 'Blocks about 98% of UVB rays. Recommended for extended outdoor activities.',
    benefits: ['Maximum protection', 'Longer outdoor time', 'Beach & sport ready'],
    bestFor: ['Outdoor activities', 'Fair skin', 'Sun-sensitive skin'],
  },
  {
    name: 'Mineral Sunscreen',
    description: 'Uses zinc oxide or titanium dioxide to physically block UV rays by sitting on top of skin.',
    benefits: ['Gentle on skin', 'Reef-safe options', 'Immediate protection'],
    bestFor: ['Sensitive skin', 'Acne-prone', 'Eco-conscious'],
  },
  {
    name: 'Chemical Sunscreen',
    description: 'Absorbs UV rays and converts them to heat. Often more cosmetically elegant.',
    benefits: ['Lightweight feel', 'No white cast', 'Easy to layer'],
    bestFor: ['Darker skin tones', 'Daily wear', 'Under makeup'],
  },
];

const SunProtectionPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={sunprotectionImage}
            alt="Sun protection products"
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
          <span className="text-8xl font-serif font-light text-primary/20 block mb-2">05</span>
          <h1 className="heading-display mb-4">Sun Protection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            The most important step for preventing premature aging and protecting your skin health.
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-accent/50 py-6">
        <div className="container-custom">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertTriangle className="w-6 h-6 text-accent-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-accent-foreground">
              <strong>Did you know?</strong> Up to 90% of visible skin aging is caused by sun damage. 
              Daily sunscreen use is the single most effective anti-aging product you can use.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="heading-section mb-6">Why Sunscreen is Non-Negotiable</h2>
            <div className="prose prose-lg text-body space-y-4">
              <p>
                Sunscreen is the final and most crucial step of your morning routine. UV rays cause 
                premature aging, dark spots, and increase skin cancer risk—even on cloudy days and 
                through windows.
              </p>
              <p>
                Apply sunscreen as the last step of your skincare routine, before makeup. Use about 
                two finger-lengths for your face, and don't forget your neck and ears. Reapply 
                every 2 hours when outdoors.
              </p>
              <p>
                Modern sunscreens have come a long way—no more heavy, greasy formulas or intense 
                white casts. Today's options are lightweight, comfortable, and work beautifully 
                under makeup.
              </p>
            </div>
          </div>

          <h2 className="heading-section text-center mb-12">Types of Sunscreen</h2>
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

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Complete Your Routine</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Now that you know all the steps, it's time to build your personalized routine. 
            Join GlowHub for curated recommendations.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:shadow-lg transition-all"
          >
            Join GlowHub
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link
              to="/skincare-steps/moisturizing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Moisturizing
            </Link>
            <Link
              to="/skincare-steps"
              className="text-primary font-medium hover:underline"
            >
              All Steps →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SunProtectionPage;
