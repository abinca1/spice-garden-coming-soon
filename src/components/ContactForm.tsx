
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully! 🌶️",
      description: "Thank you for your interest! We'll be in touch soon with updates about our launch.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <Card className="w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-emerald-200 hover:shadow-3xl hover:border-emerald-300 transition-all duration-300">
      <CardHeader className="text-center bg-gradient-to-r from-emerald-50 to-orange-50 rounded-t-lg">
        <CardTitle className="text-2xl bg-gradient-to-r from-emerald-800 to-orange-700 bg-clip-text text-transparent mb-2 font-bold">
          Stay Connected
        </CardTitle>
        <CardDescription className="text-emerald-700 font-medium">
          Be the first to know when we launch and get exclusive early access to our premium spices
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-3 h-5 w-5 text-emerald-600" />
            <Input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-emerald-50/50"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-emerald-600" />
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-10 border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-emerald-50/50"
              required
            />
          </div>
          
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-emerald-600" />
            <Textarea
              name="message"
              placeholder="Tell us about your spice preferences or any questions you have..."
              value={formData.message}
              onChange={handleInputChange}
              className="pl-10 min-h-[100px] resize-none border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-emerald-50/50"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 text-white font-bold py-3 transform transition-all duration-200 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Send Message & Get Notified
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
