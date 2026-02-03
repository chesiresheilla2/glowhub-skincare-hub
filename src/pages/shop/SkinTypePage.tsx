import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { ArrowRight } from 'lucide-react';

const skinTypes = [
  {
    name: 'Oily Skin',
    description: 'Produces excess sebum, often shiny with enlarged pores. Prone to blackheads and acne.',
    tips: 'Look for oil-free, non-comedogenic products. Gel cleansers and lightweight moisturizers work best.',
    products: ['Gel Cleansers', 'Niacinamide Serums', 'Oil-Free Moisturizers', 'Mattifying Sunscreens'],
  },
  {
    name: 'Dry Skin',
    description: 'Lacks natural oils, feels tight, may appear flaky or rough. Can be sensitive to harsh products.',
    tips: 'Focus on hydration and barrier repair. Rich creams and nourishing oils are your friends.',
    products: ['Cream Cleansers', 'Hyaluronic Acid', 'Rich Moisturizers', 'Face Oils'],
  },
  {
    name: 'Combination Skin',
    description: 'Oily in the T-zone (forehead, nose, chin) but dry or normal on cheeks. Requires balanced care.',
    tips: 'Use gentle products that balance without over-drying. Consider multi-masking for different zones.',
    products: ['Gentle Foam Cleansers', 'Balancing Toners', 'Lightweight Moisturizers', 'Zone-Specific Treatments'],
  },
  {
    name: 'Sensitive Skin',
    description: 'Easily irritated, may experience redness, itching, or burning. Reacts to many ingredients.',
    tips: 'Keep your routine simple with fragrance-free, soothing ingredients. Patch test everything!',
    products: ['Micellar Water', 'Centella Products', 'Barrier Creams', 'Mineral Sunscreens'],
  },
];

const SkinTypePage = () => {
  return (
    <Layout>
      <section className="section-padding bg-sage-light">
        <div className="container-custom text-center">
          <div className="badge-sage mb-6">Shop By</div>
          <h1 className="heading-display mb-6">Your Skin Type</h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Understanding your skin type is the first step to building an effective routine. 
            Find products tailored to your unique needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skinTypes.map((type) => (
              <div key={type.name} className="card-elevated">
                <h2 className="font-serif text-2xl font-medium mb-3">{type.name}</h2>
                <p className="text-body mb-4">{type.description}</p>
                
                <div className="bg-sage-light rounded-xl p-4 mb-4">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Pro Tip:</span> {type.tips}
                  </p>
                </div>

                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  Recommended Products
                </h4>
                <div className="flex flex-wrap gap-2">
                  {type.products.map((product) => (
                    <span key={product} className="badge-sage">
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Not Sure About Your Skin Type?</h2>
          <p className="text-body max-w-xl mx-auto mb-8">
            Join GlowHub to get personalized recommendations based on a quick skin assessment.
          </p>
          <Link to="/signup" className="btn-hero">
            Take the Quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SkinTypePage;
