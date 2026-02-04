import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* CTA Section - Hidden on Contact page */}
      {!isContactPage && (
        <section className="py-16 bg-primary/10">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2">
                  Have Questions About Our Products?
                </h3>
                <p className="text-muted-foreground">
                  We'd love to hear from you. Get in touch with our skincare experts.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-hero flex items-center gap-2 whitespace-nowrap"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
};
