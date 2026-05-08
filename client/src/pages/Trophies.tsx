import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Zap } from "lucide-react";

interface Trophy {
  id: number;
  name: string;
  count: number;
  description: string;
  image: string;
  lastWon: number;
  icon: React.ReactNode;
}

const trophies: Trophy[] = [
  {
    id: 1,
    name: "Serie A",
    count: 36,
    description: "Italian League Championship - The most prestigious domestic title in Italian football",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/trophy-serie-a-jg3hdk7BFuNTzffxQLMP9n.webp",
    lastWon: 2020,
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 2,
    name: "Coppa Italia",
    count: 14,
    description: "Italian Cup - One of the most important domestic cup competitions in Europe",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/trophy-coppa-italia-QFAgnmHZqaEfjBtVN4weH3.webp",
    lastWon: 2021,
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 3,
    name: "UEFA Champions League",
    count: 2,
    description: "European Club Championship - The pinnacle of European club football",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/trophy-champions-league-RbS7BfzBCWzKMRm3EdRw6D.webp",
    lastWon: 1996,
    icon: <Star className="w-6 h-6" />
  },
  {
    id: 4,
    name: "UEFA Cup / Europa League",
    count: 3,
    description: "European secondary club competition - Won multiple times in club history",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/trophy-europa-league-miNqh7UyNW2EbtPNKZPQX3.webp",
    lastWon: 1993,
    icon: <Zap className="w-6 h-6" />
  }
];

const TrophyCard = ({ trophy }: { trophy: Trophy }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={trophy.image}
        alt={trophy.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardHeader className="bg-gradient-to-r from-accent/20 to-primary/20 pb-4">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-lg flex items-center gap-2">
            {trophy.icon}
            {trophy.name}
          </CardTitle>
          <CardDescription className="mt-1">
            Last won: {trophy.lastWon}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <div className="mb-4">
        <Badge className="bg-accent text-accent-foreground text-lg px-3 py-1">
          {trophy.count} Titles
        </Badge>
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed">
        {trophy.description}
      </p>
    </CardContent>
  </Card>
);

export default function Trophies() {
  const totalTrophies = trophies.reduce((sum, trophy) => sum + trophy.count, 0);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Juventus Trophies</h1>
          <p className="text-lg text-accent-foreground/90 mt-2">
            A legacy of excellence and achievement spanning over 125 years
          </p>
        </div>
      </section>

      {/* Trophy Statistics */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Total Trophies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent">{totalTrophies}+</p>
                <p className="text-sm text-muted-foreground mt-2">Major Titles Won</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  Serie A
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent">36</p>
                <p className="text-sm text-muted-foreground mt-2">League Championships</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Coppa Italia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent">14</p>
                <p className="text-sm text-muted-foreground mt-2">Cup Victories</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  European
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-accent">5</p>
                <p className="text-sm text-muted-foreground mt-2">Continental Titles</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trophy Gallery */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Major Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {trophies.map((trophy) => (
              <TrophyCard key={trophy.id} trophy={trophy} />
            ))}
          </div>
        </div>
      </section>

      {/* Historic Timeline */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Historic Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Domestic Dominance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1905</span>
                    <span>First Serie A Championship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1960s-70s</span>
                    <span>Golden era with multiple consecutive titles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1980s-90s</span>
                    <span>Continued excellence under legendary management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2010-2020</span>
                    <span>9 consecutive Serie A titles (record)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>European Glory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1985</span>
                    <span>First European Cup (Champions League)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1996</span>
                    <span>Second European Cup victory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">1990s</span>
                    <span>Multiple UEFA Cup/Europa League titles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">2015</span>
                    <span>Champions League Final appearance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club Records */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Club Records & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Consecutive Titles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">9</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Serie A titles in a row (2010-2020) - Italian record
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Most Appearances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">656</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Gianluigi Buffon's appearances for the club
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stadium Capacity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">41,507</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Allianz Stadium in Turin, Italy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
