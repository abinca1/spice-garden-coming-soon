
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Logo */}
          <div className="mb-8 transform transition-all duration-500 hover:scale-105">
            <img 
              src="/lovable-uploads/5980f8e9-de4d-4aff-a996-5833b6799067.png" 
              alt="Flavour Bomb Spices - Harvested from the Heart of Idukki"
              className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Coming Soon Content */}
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 tracking-tight">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 leading-relaxed">
              We're preparing something <span className="text-red-600 font-semibold">extraordinary</span> for spice lovers everywhere
            </p>
            <div className="text-lg md:text-xl text-amber-700 space-y-4 mb-8">
              <p>🌶️ Premium organic spices from the heart of Idukki</p>
              <p>✨ Carefully selected and harvested for maximum flavor</p>
              <p>🚚 Soon delivering authentic taste to your kitchen</p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-amber-600 text-sm">
              Follow us for updates on our launch and exclusive early-bird offers
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 opacity-20 animate-float">
        <div className="w-8 h-8 bg-red-400 rounded-full"></div>
      </div>
      <div className="fixed top-32 right-20 opacity-20 animate-float delay-1000">
        <div className="w-6 h-6 bg-amber-400 rounded-full"></div>
      </div>
      <div className="fixed bottom-20 left-20 opacity-20 animate-float delay-2000">
        <div className="w-10 h-10 bg-orange-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Index;
