import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Trophy, Users, Target, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Juventus
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Juventus Football Club is one of the most successful football teams in Italy and Europe.
              Known as "The Old Lady", the club has a rich history and a huge global fan base.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/about">
                <a>
                  <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                    Learn More
                  </Button>
                </a>
              </Link>
              <Link href="/squad">
                <a>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    View Squad
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Founded
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">1897</p>
                <p className="text-sm text-muted-foreground">Over 125 years of history</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">Turin, Italy</p>
                <p className="text-sm text-muted-foreground">Allianz Stadium</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent" />
                  Nickname
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">La Vecchia Signora</p>
                <p className="text-sm text-muted-foreground">The Old Lady</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Stadium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-accent">Allianz</p>
                <p className="text-sm text-muted-foreground">Modern & Atmospheric</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club Philosophy Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Club Philosophy</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Juventus focuses on discipline, strong defense, and winning mentality. The club is known for producing world-class players and competing at the highest level. Our commitment to excellence extends beyond the pitch, with a strong emphasis on youth development, tactical innovation, and maintaining the highest standards of professionalism.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Every player, staff member, and supporter is part of the Juventus family, united by a shared passion for success and a dedication to the club's values. This philosophy has guided us through over a century of achievements and continues to drive us forward.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Juventus Community</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest news, squad information, and get in touch with us. Become part of our global fan base.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-accent text-primary hover:bg-accent/90">
                Get in Touch
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
