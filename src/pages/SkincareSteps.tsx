import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowRight } from 'lucide-react';
import cleansingImage from '@/assets/category-cleansing.jpg';
import toningImage from '@/assets/category-toning.jpg';
import serumsImage from '@/assets/category-serums.jpg';
import moisturizingImage from '@/assets/category-moisturizing.jpg';
import sunprotectionImage from '@/assets/category-sunprotection.jpg';

const steps = [
  {
    number: '01',
    name: 'Cleansing',
    tagline: 'The Foundation of Great Skin',
    description: 'Cleansing is the first and most important step in any skincare routine. It removes dirt, oil, makeup, and environmental pollutants that accumulate on your skin throughout the day.',
    image: cleansingImage,
    href: '/skincare-steps/cleansing',
    products: ['Gel Cleansers', 'Foam Cleansers', 'Oil Cleansers', 'Micellar Water'],
  },
  {
    number: '02',
    name: 'Toning',
    tagline: 'Balance & Prepare',
    description: 'Toners help restore your skin\'s pH balance after cleansing and prepare it to better absorb the products that follow. Modern toners also deliver hydration and targeted benefits.',
    image: toningImage,
    href: '/skincare-steps/toning',
    products: ['Hydrating Toners', 'Exfoliating Toners'],
  },
  {
    number: '03',
    name: 'Treatments & Serums',
    tagline: 'Target Your Concerns',
    description: 'Serums are concentrated formulas packed with active ingredients that address specific skin concerns. They penetrate deeper than regular moisturizers for visible results.',
    image: serumsImage,
    href: '/skincare-steps/serums',
    products: ['Vitamin C', 'Hyaluronic Acid', 'Niacinamide', 'Retinol', 'Acne Treatments'],
  },
  {
    number: '04',
    name: 'Moisturizing',
    tagline: 'Lock In Hydration',
    description: 'Moisturizers seal in all the goodness from your previous steps and strengthen your skin barrier. They keep your skin hydrated, soft, and protected throughout the day or night.',
    image: moisturizingImage,
    href: '/skincare-steps/moisturizing',
    products: ['Day Creams', 'Night Creams', 'Gel Moisturizers', 'Face Oils'],
  },
  {
    number: '05',
    name: 'Sun Protection',
    tagline: 'Your Best Anti-Aging Investment',
    description: 'Sunscreen is the single most important product for preventing premature aging, dark spots, and skin cancer. Apply it every morning as the final step of your routine.',
    image: sunprotectionImage,
    href: '/skincare-steps/sun-protection',
    products: ['SPF 30', 'SPF 50', 'Mineral Sunscreen', 'Chemical Sunscreen'],
  },
];

const SkincareSteps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom text-center">
          <div className="badge-sage mb-6">Learn & Glow</div>
          <h1 className="heading-display mb-6">
            Master Your <span className="text-gradient-sage">Skincare Routine</span>
          </h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Great skin starts with the right routine. Learn the proper order of skincare steps 
            and discover products that work for your unique skin.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="category-card overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.name}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-6xl font-serif font-light text-primary/20 mb-4 block">
                    {step.number}
                  </span>
                  <h2 className="heading-section mb-2">{step.name}</h2>
                  <p className="text-primary font-medium mb-4">{step.tagline}</p>
                  <p className="text-body mb-6">{step.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                      Product Types
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {step.products.map((product) => (
                        <span key={product} className="badge-sage">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={step.href}
                    className="inline-flex items-center gap-2 btn-hero"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Ready to Start Your Journey?</h2>
          <p className="text-body max-w-xl mx-auto mb-8">
            Join GlowHub to get personalized product recommendations based on your skin type and concerns.
          </p>
          <Link to="/signup" className="btn-hero">
            Join GlowHub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SkincareSteps;
