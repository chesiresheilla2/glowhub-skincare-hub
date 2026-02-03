import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';
import { Layout } from '@/components/layout';
import heroImage from '@/assets/hero-skincare.jpg';
import cleansingImage from '@/assets/category-cleansing.jpg';
import toningImage from '@/assets/category-toning.jpg';
import serumsImage from '@/assets/category-serums.jpg';
import moisturizingImage from '@/assets/category-moisturizing.jpg';
import sunprotectionImage from '@/assets/category-sunprotection.jpg';

const categories = [
  {
    name: 'Cleansing',
    description: 'Start fresh with the perfect cleanser for your skin',
    image: cleansingImage,
    href: '/skincare-steps/cleansing',
    step: '01',
  },
  {
    name: 'Toning',
    description: 'Balance and prep your skin for better absorption',
    image: toningImage,
    href: '/skincare-steps/toning',
    step: '02',
  },
  {
    name: 'Treatments & Serums',
    description: 'Target specific concerns with powerful actives',
    image: serumsImage,
    href: '/skincare-steps/serums',
    step: '03',
  },
  {
    name: 'Moisturizing',
    description: 'Lock in hydration and nourish your skin barrier',
    image: moisturizingImage,
    href: '/skincare-steps/moisturizing',
    step: '04',
  },
  {
    name: 'Sun Protection',
    description: 'Shield your skin from UV damage daily',
    image: sunprotectionImage,
    href: '/skincare-steps/sun-protection',
    step: '05',
  },
];

const benefits = [
  {
    icon: Sparkles,
    title: 'Curated Selection',
    description: 'We handpick products from trusted brands, so you get only the best for your skin.',
  },
  {
    icon: Shield,
    title: 'Expert Guidance',
    description: 'Learn the right order and techniques for your skincare routine with our educational content.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Find products tailored to your skin type, concerns, and goals.',
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury skincare products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="badge-sage mb-6 animate-fade-in">
              Your Skincare Journey Starts Here
            </div>
            <h1 className="heading-display mb-6 animate-fade-in-up">
              Discover Your
              <br />
              <span className="text-gradient-sage">Perfect Routine</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in-delay-1">
              GlowHub is your trusted skincare marketplace. We curate the best products 
              and teach you how to build a routine that works for your unique skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link to="/skincare-steps" className="btn-hero">
                Explore Skincare Steps
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/signup" className="btn-hero-outline">
                Join GlowHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Why Choose GlowHub?</h2>
            <p className="text-body">
              We're more than just a store. We're your partner in achieving healthy, glowing skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="card-elevated text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-light mb-6">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-body text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="heading-section mb-4">Build Your Routine</h2>
              <p className="text-body max-w-xl">
                A great skincare routine follows a specific order. Learn each step and find the 
                perfect products for your journey to healthy skin.
              </p>
            </div>
            <Link
              to="/skincare-steps"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all steps
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="category-card group"
              >
                <div className="aspect-category overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary mb-1 block">
                    Step {category.step}
                  </span>
                  <h3 className="font-serif text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop By Section */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-section mb-4">Find What Works For You</h2>
            <p className="text-body">
              Everyone's skin is different. Shop by what matters most to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/shop/skin-type"
              className="card-elevated flex flex-col items-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-medium text-primary">T</span>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">By Skin Type</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Oily, dry, combination, or sensitive
              </p>
              <span className="text-sm font-medium text-primary flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              to="/shop/skin-concern"
              className="card-elevated flex flex-col items-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-medium text-primary">C</span>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">By Skin Concern</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acne, aging, pigmentation & more
              </p>
              <span className="text-sm font-medium text-primary flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              to="/shop/ingredients"
              className="card-elevated flex flex-col items-center text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-2xl font-serif font-medium text-primary">I</span>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">By Ingredient</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Vitamin C, Retinol, Niacinamide
              </p>
              <span className="text-sm font-medium text-primary flex items-center gap-1">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-10 md:p-16 text-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="heading-section text-primary-foreground mb-4">
                Ready to Transform Your Skin?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Join thousands of skincare enthusiasts who have found their perfect routine with GlowHub.
                Get personalized recommendations and exclusive offers.
              </p>
              <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-medium hover:shadow-lg transition-all">
                Join GlowHub Today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
