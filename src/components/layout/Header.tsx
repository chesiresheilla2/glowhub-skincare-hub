import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Skincare Steps',
    href: '/skincare-steps',
    children: [
      { name: 'Cleansing', href: '/skincare-steps/cleansing' },
      { name: 'Toning', href: '/skincare-steps/toning' },
      { name: 'Treatments & Serums', href: '/skincare-steps/serums' },
      { name: 'Moisturizing', href: '/skincare-steps/moisturizing' },
      { name: 'Sun Protection', href: '/skincare-steps/sun-protection' },
    ],
  },
  {
    name: 'Shop By',
    href: '#',
    children: [
      { name: 'Skin Type', href: '/shop/skin-type' },
      { name: 'Skin Concern', href: '/shop/skin-concern' },
      { name: 'Key Ingredients', href: '/shop/ingredients' },
    ],
  },
  { name: 'Join Us', href: '/signup' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-semibold tracking-tight">
              Glow<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`nav-link flex items-center gap-1 ${
                      isActive(item.href) ? 'text-foreground' : ''
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-3 h-3 transition-transform duration-200" 
                      style={{ transform: openDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`nav-link ${isActive(item.href) ? 'text-foreground' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-elevated border border-border/50 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/signup" className="btn-hero text-sm py-3 px-6">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="py-2">
                    <button
                      className="w-full flex items-center justify-between py-2 text-base font-medium"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className="w-4 h-4 transition-transform duration-200"
                        style={{
                          transform: openDropdown === item.name ? 'rotate(180deg)' : 'rotate(0)',
                        }}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2 animate-fade-in">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-base font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border/50">
              <Link
                to="/signup"
                className="btn-hero w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
