import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Target, Users, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import leadParrotImg from "@/assets/portfolio/lead-parrot.png";

const LeadParrot = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Lead Generation",
      description: "Get verified, targeted leads delivered in seconds — not days. Our AI scans and qualifies prospects so you can focus on closing.",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Define your ideal customer profile and let Lead-Parrot find them. Filter by industry, location, company size, and more.",
    },
    {
      icon: Users,
      title: "Smart Outreach Templates",
      description: "AI-generated outreach messages tailored to each prospect, increasing response rates and building genuine connections.",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track your pipeline, monitor conversion rates, and optimize your outreach strategy with real-time dashboards.",
    },
  ];

  const benefits = [
    "Verified contact information",
    "AI-powered lead scoring",
    "CRM integration ready",
    "Multi-channel outreach",
    "Real-time lead alerts",
    "Custom audience filters",
  ];

  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="Lead-Parrot - AI-Powered Lead Generation | Studios by Dave"
        description="Generate verified, targeted leads in seconds with Lead-Parrot. AI-powered prospecting, smart outreach templates, and real-time analytics for your business."
        keywords="lead generation, AI leads, prospecting tool, sales automation, targeted leads, business leads, lead scoring"
      />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <Zap className="h-4 w-4" />
                  Studios Gear Product
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Meet{" "}
                  <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Lead-Parrot
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  AI-powered lead generation that delivers verified, targeted prospects in seconds — not days. Stop chasing leads. Let them come to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                      Get Early Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/studiosweb/portfolio">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src={leadParrotImg}
                    alt="Lead-Parrot AI-powered lead generation platform interface"
                    className="w-full h-auto"
                    width="600"
                    height="400"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20 blur-xl" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400 to-primary rounded-2xl opacity-15 blur-xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features, Simple Results
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to find, qualify, and connect with your ideal customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Businesses Choose Lead-Parrot
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Built for contractors, service businesses, and growing companies who need a steady pipeline of qualified leads without the hassle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
                <div className="text-6xl font-bold text-primary mb-2">10x</div>
                <p className="text-lg text-muted-foreground mb-6">Faster than manual prospecting</p>
                <div className="text-4xl font-bold text-foreground mb-2">85%</div>
                <p className="text-lg text-muted-foreground mb-6">Lead accuracy rate</p>
                <div className="text-4xl font-bold text-emerald-500 mb-2">3x</div>
                <p className="text-lg text-muted-foreground">Higher response rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Supercharge Your Lead Generation?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get in touch to learn more about Lead-Parrot and how it can transform your sales pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Contact Us Today
                </Button>
              </Link>
              <Link to="/studiosgear">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Back to Studios Gear
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeadParrot;
