import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Target, Zap, Trophy, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  description: string;
  image: string;
}

const currentPlayers: Player[] = [
  {
    id: 1,
    name: "Dusan Vlahovic",
    position: "Forward",
    number: 7,
    nationality: "Serbia",
    description: "Dynamic and clinical striker known for his goal-scoring ability and physical presence in the box.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-dusan-vlahovic-F8vX3fnM5RC8mJkhyRBTs7.webp"
  },
  {
    id: 2,
    name: "Kenan Yildiz",
    position: "Winger",
    number: 15,
    nationality: "Turkey",
    description: "Young talented winger with excellent dribbling skills and tactical intelligence on both flanks.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-kenan-yildiz-BAuCQDr7dUMzoP2vDC82oL.webp"
  },
  {
    id: 3,
    name: "Bremer",
    position: "Defender",
    number: 23,
    nationality: "Brazil",
    description: "Strong Brazilian center-back known for his defensive prowess, physical presence, and leadership on the field.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-bremer-RjwjxPkEqB8kNMaDNfEf9H.webp"
  },
  {
    id: 4,
    name: "Weston McKennie",
    position: "Midfielder",
    number: 14,
    nationality: "United States",
    description: "Experienced American midfielder providing defensive stability and attacking support.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-weston-mckennie-kAdg8ivEedRBX2T9L6GFSZ.webp"
  },
  {
    id: 5,
    name: "Adrien Rabiot",
    position: "Midfielder",
    number: 25,
    nationality: "France",
    description: "Versatile midfielder with strong technical abilities and box-to-box presence.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-adrien-rabiot-E6Eq3oeFUNGYg8JGDnGpFx.webp"
  },
  {
    id: 6,
    name: "Matteo Perin",
    position: "Goalkeeper",
    number: 1,
    nationality: "Italy",
    description: "Talented Italian goalkeeper known for his shot-stopping ability and distribution skills.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-matteo-perin-K2QuQxoq3J3QE8NAeLchrT.webp"
  }
];

const legendaryPlayers: Player[] = [
  {
    id: 101,
    name: "Cristiano Ronaldo",
    position: "Forward",
    number: 7,
    nationality: "Portugal",
    description: "One of the greatest footballers of all time. Won multiple Ballon d'Or awards and scored over 140 goals for Juventus during his iconic spell (2018-2021).",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-cristiano-ronaldo-Un6VjVagjxmGBhrv5YQSmc.webp"
  },
  {
    id: 102,
    name: "Paulo Dybala",
    position: "Forward",
    number: 10,
    nationality: "Argentina",
    description: "Juventus legend who spent 7 seasons with the club. Known for his technical skills, creativity, and important goals in major competitions.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-paulo-dybala-ayfy5gAFEkdgQUmKA7DstZ.webp"
  },
  {
    id: 103,
    name: "Gianluigi Buffon",
    position: "Goalkeeper",
    number: 1,
    nationality: "Italy",
    description: "Legendary goalkeeper who spent 17 seasons at Juventus. One of the greatest goalkeepers in football history with multiple Serie A titles.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/player-gianluigi-buffon-9nWuY4jJ52YhraTKVvM6AK.webp"
  },
  {
    id: 104,
    name: "Zinedine Zidane",
    position: "Midfielder",
    number: 5,
    nationality: "France",
    description: "French maestro who played for Juventus from 1996-2001. Known for his elegance, technical mastery, and decisive moments in crucial matches.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/legend-zinedine-zidane-S9FfHpcLBpGeN7CKRYCkii.webp"
  },
  {
    id: 105,
    name: "Alessandro Del Piero",
    position: "Forward",
    number: 10,
    nationality: "Italy",
    description: "Juventus icon who spent 19 seasons with the club. One of the most decorated Italian players ever, with 290 goals for the Bianconeri.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/legend-alessandro-del-piero-VKDbACHYBr4ZjbCmrA98eM.webp"
  },
  {
    id: 106,
    name: "Giorgio Chiellini",
    position: "Defender",
    number: 3,
    nationality: "Italy",
    description: "Juventus legend and captain who spent 17 seasons with the club. Known for his leadership, defensive prowess, and winning mentality.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/legend-giorgio-chiellini-PdFJmNY6VZPZ8Eaxir7vR6.webp"
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
    case "Goalkeeper":
      return <Users className="w-4 h-4" />;
    case "Winger":
      return <Zap className="w-4 h-4" />;
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
    case "Goalkeeper":
      return "bg-purple-100 text-purple-800";
    case "Winger":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const PlayerCard = ({ player }: { player: Player }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-square overflow-hidden bg-muted">
      <img
        src={player.image}
        alt={player.name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 pb-4">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-lg">{player.name}</CardTitle>
          <CardDescription className="mt-1">
            #{player.number} • {player.nationality}
          </CardDescription>
        </div>
        <div className="text-2xl font-bold text-accent">{player.number}</div>
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
);

export default function Squad() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Stadium Image */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663635840558/iqsLr4tFriysJwPU3C8XmN/allianz-stadium-Bxk4Rv4R9XYhuPC7kcAhuJ.webp"
          alt="Allianz Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Allianz Stadium</h1>
            <p className="text-lg">Home of Juventus FC - Turin, Italy</p>
          </div>
        </div>
      </section>

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
                  Current Squad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">{currentPlayers.length}+</p>
                <p className="text-sm text-muted-foreground mt-2">Active Players 2025-26</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  Legends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent">{legendaryPlayers.length}</p>
                <p className="text-sm text-muted-foreground mt-2">Historic Players</p>
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
          </div>
        </div>
      </section>

      {/* Tabs for Current and Legendary Players */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="current" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Current Squad</span>
              </TabsTrigger>
              <TabsTrigger value="legends" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Legends</span>
              </TabsTrigger>
            </TabsList>

            {/* Current Players Tab */}
            <TabsContent value="current" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">2025-26 Season Squad</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentPlayers.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>

              {/* Squad Composition */}
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Squad Composition</h3>
                <Card>
                  <CardContent className="pt-6">
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
                        <span className="text-lg font-bold text-accent">4-5</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-purple-600" />
                          <span className="font-semibold">Goalkeepers</span>
                        </div>
                        <span className="text-lg font-bold text-accent">2-3</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Legendary Players Tab */}
            <TabsContent value="legends" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Juventus Legends</h2>
                <p className="text-muted-foreground mb-8">
                  Iconic players who shaped the history of Juventus Football Club
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {legendaryPlayers.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>

              {/* Historic Achievements */}
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">Historic Achievements</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-lg">36 Serie A Titles</p>
                        <p className="text-sm text-muted-foreground mt-1">Most successful Italian club</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-lg">14 Coppa Italia Titles</p>
                        <p className="text-sm text-muted-foreground mt-1">Dominant in domestic cup competitions</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-lg">2 European Cups</p>
                        <p className="text-sm text-muted-foreground mt-1">Champions of Europe in 1985 and 1996</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-lg">9 Supercoppa Italiana</p>
                        <p className="text-sm text-muted-foreground mt-1">Italian Super Cup victories</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
