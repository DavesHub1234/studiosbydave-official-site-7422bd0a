import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SimpleSEO from "@/components/SimpleSEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Palette, Music, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const packs = [
  {
    id: "content",
    icon: Calendar,
    title: "AI‑Powered 30‑Day Content Pack",
    tagline: "Your entire month of social media — done for you.",
    who: "Local business owners, contractors, realtors, and service providers who know they need to post but never have the time.",
    deliverables: [
      "30 custom‑designed social media posts (branded to your business)",
      "Optimized formats for Facebook, Instagram feed & Stories",
      "On‑brand AI‑generated visuals — no generic stock photos",
      "Captions with hashtags and calls‑to‑action ready to copy & paste",
      "Content calendar so you know exactly when to post",
    ],
    highlight: "One delivery. One price. An entire month handled.",
  },
  {
    id: "branding",
    icon: Palette,
    title: "AI Branding & Image Pack for Local Businesses",
    tagline: "A complete visual toolkit for your brand — website, social, and beyond.",
    who: "Small businesses launching a new brand, refreshing their look, or building out their online presence for the first time.",
    deliverables: [
      "Hero images and section graphics for your website",
      "Social media headers & profile images (all platforms)",
      "Branded promotional templates you can reuse",
      "Custom AI‑generated imagery that matches your brand palette",
      "Optional logo support & brand guideline sheet",
    ],
    highlight: "Everything your brand needs to look professional — in one pack.",
  },
  {
    id: "artist",
    icon: Music,
    title: "AI Cover Art & Creator Pack",
    tagline: "Visuals that match your sound, your story, your brand.",
    who: "Independent musicians, podcasters, YouTubers, and content creators who want standout artwork without the studio price tag.",
    deliverables: [
      "Single or album cover art (print‑ready & digital)",
      "YouTube thumbnail templates (custom to your channel style)",
      "Banner images for Spotify, YouTube, SoundCloud & more",
      "Promotional social graphics for release day",
      "Multiple concept variations to choose from",
    ],
    highlight: "Professional creator visuals — powered by AI, refined by a designer.",
  },
];

const ProductPacks = () => {
  return (
    <div className="min-h-screen">
      <SimpleSEO
        title="AI Product Packs — Turnkey Content, Branding & Creator Visuals"
        description="Done‑for‑you AI‑powered image packs, social media content packs, and branding kits for local businesses and creators. One order, everything you need."
        keywords="AI content packs, AI social media images, AI branding pack, AI album cover design, social media content for businesses, turnkey content solution"
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-accent/10 to-primary/5 py-20 md:py-28">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              New Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-foreground">AI‑Powered </span>
              <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                Product Packs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Custom image packs, content bundles, and branding kits — designed with AI precision, 
              refined by a real designer. One order. Everything you need. Zero hassle.
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Get Your Pack Today
              </Button>
            </Link>
          </div>
        </section>

        {/* Packs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Pack
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each pack is a turnkey solution — you tell us about your business, we deliver everything ready to use.
              </p>
            </div>

            <div className="space-y-16">
              {packs.map((pack, idx) => {
                const Icon = pack.icon;
                const isReversed = idx % 2 !== 0;
                return (
                  <Card
                    key={pack.id}
                    className="overflow-hidden border-border/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                      {/* Info side */}
                      <div className="flex-1 p-8 md:p-12">
                        <CardHeader className="p-0 mb-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-lg bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl md:text-3xl">{pack.title}</CardTitle>
                          </div>
                          <p className="text-lg text-muted-foreground italic">{pack.tagline}</p>
                        </CardHeader>

                        <CardContent className="p-0 space-y-6">
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">Who it's for</h3>
                            <p className="text-muted-foreground">{pack.who}</p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-foreground mb-3">What's included</h3>
                            <ul className="space-y-2">
                              {pack.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <p className="font-semibold text-primary">{pack.highlight}</p>

                          <Link to="/contact">
                            <Button className="gap-2">
                              Book a Call <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </div>

                      {/* Accent side */}
                      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 p-12">
                        <Icon className="h-32 w-32 text-primary/20" />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Tell Us About Your Business", desc: "Fill out a short creative brief — your brand, your audience, your goals." },
                { step: "2", title: "We Create Your Pack", desc: "AI generates the visuals, then a real designer refines every piece to perfection." },
                { step: "3", title: "Download & Deploy", desc: "Receive your ready‑to‑use files. Post them, upload them, print them — done." },
              ].map((s) => (
                <div key={s.step} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Save Hours Every Month?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Stop stressing over content. Let us build your pack so you can focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Get Started
                </Button>
              </Link>
              <Link to="/studiosweb/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  See Our Work
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

export default ProductPacks;
