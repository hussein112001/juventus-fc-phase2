import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Juventus</h1>
          <p className="text-lg text-primary-foreground/90 mt-2">
            Discover the history and legacy of one of Europe's greatest football clubs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Club History */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Club History</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Juventus was founded in 1897 in Turin, Italy. It is one of the oldest and most successful clubs in Italian football history. The club has won multiple Serie A titles and has a strong presence in European competitions. Over more than 125 years, Juventus has established itself as a symbol of excellence, innovation, and winning mentality.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                From the early days of Italian football to becoming a continental powerhouse, Juventus has consistently set the standard for professional football. The club's commitment to developing young talent, tactical innovation, and maintaining competitive excellence has made it a model for clubs worldwide.
              </p>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      Serie A Titles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-accent mb-2">36+</p>
                    <p className="text-sm text-muted-foreground">Most successful in Italian football</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Coppa Italia
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-accent mb-2">14+</p>
                    <p className="text-sm text-muted-foreground">Domestic cup championships</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-accent">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-accent" />
                      European Presence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-accent mb-2">2</p>
                    <p className="text-sm text-muted-foreground">UEFA Champions League titles</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stadium */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Allianz Stadium</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Home of Juventus</CardTitle>
                  <CardDescription>Modern Design & Strong Atmosphere</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    Juventus plays its home matches at the Allianz Stadium in Turin, which has a modern design and strong atmosphere for fans. Opened in 2011, the stadium replaced the historic Stadio delle Alpi and has become an iconic venue in European football.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Capacity</p>
                      <p className="text-lg font-bold">41,507</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Opened</p>
                      <p className="text-lg font-bold">2011</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-bold">Turin</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Features</p>
                      <p className="text-lg font-bold">Modern</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fan Base */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Fan Base</h2>
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                    The club has millions of supporters worldwide who are known for their loyalty and passion. Juventus fans, known as "Bianconeri" (Black and Whites), form one of the most dedicated and organized supporter bases in world football.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="secondary">Passionate</Badge>
                    <Badge variant="secondary">Loyal</Badge>
                    <Badge variant="secondary">Global</Badge>
                    <Badge variant="secondary">Organized</Badge>
                    <Badge variant="secondary">Dedicated</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">125+</p>
              <p className="text-foreground/70">Years of History</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">36+</p>
              <p className="text-foreground/70">Serie A Titles</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">14+</p>
              <p className="text-foreground/70">Coppa Italia Wins</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">Millions</p>
              <p className="text-foreground/70">Global Fans</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
