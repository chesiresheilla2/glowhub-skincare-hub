import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Check, Sparkles } from 'lucide-react';

const benefits = [
  'Personalized product recommendations',
  'Exclusive member discounts',
  'Early access to new products',
  'Expert skincare tips & guides',
  'Community of skincare enthusiasts',
];

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Benefits */}
            <div>
              <div className="badge-sage mb-6">Join the Community</div>
              <h1 className="heading-display mb-6">
                Start Your <span className="text-gradient-sage">Glow Journey</span>
              </h1>
              <p className="text-body text-lg mb-8">
                Join thousands of skincare enthusiasts who have discovered their perfect routine with GlowHub. 
                Get personalized recommendations, exclusive offers, and expert guidance.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="lg:pl-12">
              <div className="card-elevated p-8 md:p-10">
                {/* Logo */}
                <div className="text-center mb-8">
                  <span className="text-3xl font-serif font-semibold tracking-tight">
                    Glow<span className="text-primary">Hub</span>
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-medium mb-3">Welcome to GlowHub!</h2>
                    <p className="text-muted-foreground mb-6">
                      Thank you for joining, {formData.name}! Check your email for a welcome message 
                      and your first personalized skincare tips.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-sm text-primary hover:underline"
                    >
                      Sign up another email
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-medium mb-2 text-center">Create Your Account</h2>
                    <p className="text-muted-foreground text-sm mb-8 text-center">
                      It's free and takes less than a minute.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Enter your name"
                          className="input-elegant"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="you@example.com"
                          className="input-elegant"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <button type="submit" className="btn-hero w-full justify-center mt-6">
                        Join GlowHub
                      </button>
                    </form>

                    <p className="text-xs text-muted-foreground text-center mt-6">
                      By signing up, you agree to our Terms of Service and Privacy Policy. 
                      We'll never spam you.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUpPage;
