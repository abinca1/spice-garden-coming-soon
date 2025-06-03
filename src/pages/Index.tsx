
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-yellow-50 to-orange-100">
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-800 to-orange-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-emerald-800 mb-8 leading-relaxed font-medium">
              We're preparing something <span className="text-orange-600 font-bold">extraordinary</span> for spice lovers everywhere
            </p>
            <div className="text-lg md:text-xl text-emerald-700 space-y-4 mb-8">
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">🌶️</span> 
                <span>Premium organic spices from the heart of Idukki</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">✨</span>
                <span>Carefully selected and harvested for maximum flavor</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <span className="text-2xl">🚚</span>
                <span>Soon delivering authentic taste to your kitchen</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-emerald-600 text-sm font-medium">
              Follow us for updates on our launch and exclusive early-bird offers
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="fixed top-10 left-10 opacity-30 animate-float">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg"></div>
      </div>
      <div className="fixed top-32 right-20 opacity-30 animate-float delay-1000">
        <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-lg"></div>
      </div>
      <div className="fixed bottom-20 left-20 opacity-30 animate-float delay-2000">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
      </div>
      <div className="fixed top-1/2 right-10 opacity-20 animate-float delay-3000">
        <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full shadow-md"></div>
      </div>
      <div className="fixed bottom-32 right-32 opacity-25 animate-float delay-500">
        <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default Index;
