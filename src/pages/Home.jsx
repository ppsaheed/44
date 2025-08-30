import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';
import { companyInfo, storyContent, servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import ExpandableStory from '../components/ExpandableStory';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times for all government transactions'
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      description: 'Complete adherence to UAE government regulations'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals handling your paperwork'
    },
    {
      icon: Star,
      title: 'Trusted Service',
      description: 'Hundreds of satisfied clients across the UAE'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              <span className="text-gradient">{companyInfo.motto}</span>
            </h1>
            <div className="flex justify-center items-center gap-6 mb-8 animate-fadeInUp animation-delay-300">
              <img src="/Gov_logo.png" alt="Government Logo 1" className="w-100 md:w-100" />
            </div>
            <p className="text-xl text-gray-700 mb-8 animate-fadeInUp animation-delay-200">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <Link to="/services" className="btn-primary">
                The Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 44 Digital?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just process transactions. We build legacies. We turn visitors into visionaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg card-shadow bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* New Expandable Story Section */}
      <ExpandableStory />

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From business setup to Golden Visa, we handle every aspect of your UAE journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(servicesData).slice(0, 6).map((key) => (
              <ServiceCard key={key} service={servicesData[key]} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-view-all-services">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
