import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "suresh1234bathina@gmail.com",
      href: "mailto:suresh1234bathina@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8897850494",
      href: "tel:+918897850494"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <div className="card-gradient p-8 rounded-2xl card-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Contact Information
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-smooth"
                          >
                            {item.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="text-lg font-medium mb-4 text-primary">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg transition-smooth hover-scale ${social.color}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="card-gradient p-8 rounded-2xl card-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Send Message
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hi!"
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow transition-smooth"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;