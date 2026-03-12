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

// Fanned cards visual component
const FannedCards = ({ variant }: { variant: "content" | "branding" | "artist" }) => {
  const colorSets = {
    content: [
      "from-primary/30 to-secondary/40",
      "from-secondary/25 to-primary/35",
      "from-primary/20 to-accent/30",
    ],
    branding: [
      "from-secondary/30 to-primary/40",
      "from-primary/25 to-secondary/35",
      "from-accent/20 to-primary/30",
    ],
    artist: [
      "from-primary/30 to-accent/40",
      "from-accent/25 to-secondary/35",
      "from-secondary/20 to-primary/30",
    ],
  };

  const colors = colorSets[variant];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Card 3 - back */}
      <div
        className={`absolute w-40 h-56 md:w-48 md:h-64 rounded-xl bg-gradient-to-br ${colors[2]} border border-border/40 shadow-lg backdrop-blur-sm`}
        style={{ transform: "rotate(12deg) translateX(20px)" }}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="w-full h-3 bg-white/20 rounded-full" />
          <div className="space-y-2">
            <div className="w-3/4 h-2 bg-white/15 rounded-full" />
            <div className="w-1/2 h-2 bg-white/10 rounded-full" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-white/10" />
        </div>
      </div>
      {/* Card 2 - middle */}
      <div
        className={`absolute w-40 h-56 md:w-48 md:h-64 rounded-xl bg-gradient-to-br ${colors[1]} border border-border/40 shadow-xl backdrop-blur-sm`}
        style={{ transform: "rotate(2deg) translateX(0px)" }}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/20" />
          </div>
          <div className="space-y-2">
            <div className="w-full h-2 bg-white/15 rounded-full" />
            <div className="w-2/3 h-2 bg-white/10 rounded-full" />
            <div className="w-4/5 h-2 bg-white/10 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded bg-white/10" />
            <div className="w-8 h-8 rounded bg-white/10" />
          </div>
        </div>
      </div>
      {/* Card 1 - front */}
      <div
        className={`absolute w-40 h-56 md:w-48 md:h-64 rounded-xl bg-gradient-to-br ${colors[0]} border border-border/40 shadow-2xl backdrop-blur-sm`}
        style={{ transform: "rotate(-8deg) translateX(-20px)" }}
      >
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="w-full h-20 rounded-lg bg-white/10" />
          <div className="space-y-2">
            <div className="w-full h-2.5 bg-white/20 rounded-full" />
            <div className="w-3/4 h-2 bg-white/15 rounded-full" />
          </div>
          <div className="w-full h-8 rounded-lg bg-white/15" />
        </div>
      </div>
    </div>
  );
};

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
        <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, hsl(218 49% 15%) 0%, hsl(218 49% 22%) 50%, hsl(218 49% 18%) 100%)' }}>
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4" />
              New Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              AI‑Powered{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(45 100% 75%) 0%, hsl(38 100% 65%) 25%, hsl(45 100% 85%) 50%, hsl(35 100% 55%) 75%, hsl(45 100% 70%) 100%)',
                }}
              >
                Product Packs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">
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

                      {/* Fanned cards visual side */}
                      <div className="hidden lg:flex flex-1 items-center justify-center bg-muted/30 p-12 min-h-[320px]">
                        <FannedCards variant={pack.id as "content" | "branding" | "artist"} />
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
