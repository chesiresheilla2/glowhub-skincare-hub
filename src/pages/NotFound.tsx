import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="container-custom text-center">
          <span className="text-8xl font-serif font-light text-primary/30 block mb-4">404</span>
          <h1 className="heading-section mb-4">Page Not Found</h1>
          <p className="text-body max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <Link to="/" className="btn-hero">
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
