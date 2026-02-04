import { useState } from 'react';
import { Layout } from '@/components/layout';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@glowhub.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Nairobi, Kenya',
    description: 'Online skincare marketplace',
  },
  {
    icon: Clock,
    title: 'Support Hours',
    content: 'Mon - Fri, 9am - 6pm EAT',
    description: 'Weekend email support available',
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-sage-light">
        <div className="container-custom text-center">
          <h1 className="heading-display mb-6">Get in Touch</h1>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Have questions about skincare or our products? We'd love to hear from you. 
            Our team is here to help you on your skincare journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="card-elevated text-center">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium mb-1">{info.title}</h3>
                <p className="text-foreground font-medium">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card-elevated p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-medium mb-3">Message Sent!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out, {formData.name}! We've received your message 
                    and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-medium mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        placeholder="What's this about?"
                        className="input-elegant"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="input-elegant resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="btn-hero w-full justify-center">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="heading-section mb-4">Common Questions</h2>
          <p className="text-body max-w-xl mx-auto mb-8">
            Looking for quick answers? Check out our most frequently asked questions about 
            skincare routines, product recommendations, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6">
              <h4 className="font-medium mb-2">What's the right order for skincare?</h4>
              <p className="text-sm text-muted-foreground">
                Cleanser → Toner → Serum → Moisturizer → Sunscreen (AM only)
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6">
              <h4 className="font-medium mb-2">How do I find my skin type?</h4>
              <p className="text-sm text-muted-foreground">
                Cleanse, wait 30 min. Oily all over = oily. Tight = dry. T-zone oily = combination.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6">
              <h4 className="font-medium mb-2">Do you ship internationally?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! We ship to most countries. Shipping costs calculated at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
