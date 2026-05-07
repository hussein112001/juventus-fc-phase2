import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Target, Zap } from "lucide-react";

interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  description: string;
}

const players: Player[] = [
  {
    id: 1,
    name: "Dusan Vlahovic",
    position: "Forward",
    number: 7,
    nationality: "Serbia",
    description: "Dynamic and clinical striker known for his goal-scoring ability and physical presence in the box."
  },
  {
    id: 2,
    name: "Federico Chiesa",
    position: "Winger",
    number: 22,
    nationality: "Italy",
    description: "Versatile winger with excellent dribbling skills and tactical intelligence on both flanks."
  },
  {
    id: 3,
    name: "Matthijs de Ligt",
    position: "Defender",
    number: 4,
    nationality: "Netherlands",
    description: "Strong and commanding center-back who brings leadership and defensive solidity to the backline."
  },
  {
    id: 4,
    name: "Juan Cuadrado",
    position: "Midfielder",
    number: 11,
    nationality: "Colombia",
    description: "Experienced right-back/midfielder providing defensive stability and attacking support."
  },
  {
    id: 5,
    name: "Adrien Rabiot",
    position: "Midfielder",
    number: 25,
    nationality: "France",
    description: "Versatile midfielder with strong technical abilities and box-to-box presence."
  },
  {
    id: 6,
    name: "Manuel Locatelli",
    position: "Midfielder",
    number: 5,
    nationality: "Italy",
    description: "Talented Italian midfielder known for his passing range and tactical awareness."
  }
];

const getPositionIcon = (position: string) => {
  switch (position) {
    case "Forward":
      return <Target className="w-4 h-4" />;
    case "Midfielder":
      return <Zap className="w-4 h-4" />;
    case "Defender":
      return <Shield className="w-4 h-4" />;
    default:
      return <Users className="w-4 h-4" />;
  }
};

const getPositionColor = (position: string) => {
  switch (position) {
    case "Forward":
      return "bg-red-100 text-red-800";
    case "Midfielder":
      return "bg-blue-100 text-blue-800";
    case "Defender":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Squad() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Juventus Squad</h1>
          <p className="text-lg text-primary-foreground/90 mt-2">
            Meet the talented players representing Juventus on the pitch
          </p>
        </div>
      </section>

      {/* Squad Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Total Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">{players.length}+</p>
                <p className="text-sm text-muted-foreground mt-2">Featured Squad Members</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Attacking Force
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">World-Class</p>
                <p className="text-sm text-muted-foreground mt-2">Competitive & Dynamic</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  Defense
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">Solid</p>
                <p className="text-sm text-muted-foreground mt-2">Strong & Reliable</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Players Grid */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Key Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <Card key={player.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{player.name}</CardTitle>
                      <CardDescription className="mt-1">
                        #{player.number} • {player.nationality}
                      </CardDescription>
                    </div>
                    <div className="text-3xl font-bold text-accent">{player.number}</div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Badge className={`${getPositionColor(player.position)} border-0`}>
                      {getPositionIcon(player.position)}
                      <span className="ml-1">{player.position}</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {player.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Info */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Squad Composition</h2>
            <Card>
              <CardHeader>
                <CardTitle>Team Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-red-600" />
                      <span className="font-semibold">Forwards</span>
                    </div>
                    <span className="text-lg font-bold text-accent">3-4</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">Midfielders</span>
                    </div>
                    <span className="text-lg font-bold text-accent">4-5</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">Defenders</span>
                    </div>
                    <span className="text-lg font-bold text-accent">4</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold">Goalkeepers</span>
                    </div>
                    <span className="text-lg font-bold text-accent">2-3</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mt-6 leading-relaxed">
                  Juventus maintains a balanced squad with world-class talent across all positions. The team is built for tactical flexibility, allowing for various formations depending on opponent and competition requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
