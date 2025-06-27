import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Lock,
  Mail,
  Key,
  Database,
  ArrowRight,
  Zap,
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Built with Supabase's enterprise-grade security features including row-level security and JWT tokens.",
      badge: "Secure",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Authentication",
      description:
        "Seamless email-based authentication with email verification and password reset functionality.",
      badge: "Core",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Complete user management system with user profiles, permissions, and role-based access control.",
      badge: "Management",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Lock,
      title: "Secure Sessions",
      description:
        "Automatic session management with secure token handling and refresh token rotation.",
      badge: "Sessions",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Key,
      title: "Password Security",
      description:
        "Strong password policies with secure hashing and password strength validation.",
      badge: "Protection",
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: Database,
      title: "Real-time Sync",
      description:
        "Real-time user data synchronization across all devices and sessions using Supabase realtime.",
      badge: "Real-time",
      color: "from-teal-400 to-green-500",
    },
  ];

  const additionalFeatures = [
    { icon: Zap, title: "Fast Setup", description: "Get started in minutes" },
    {
      icon: ArrowRight,
      title: "Easy Integration",
      description: "Simple API integration with your apps",
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-950/50 dark:text-brand-300"
          >
            Features
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need for
            <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent">
              {" "}
              secure authentication
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful authentication features built on Supabase's robust platform,
            designed for modern applications.
          </p>
        </div>

        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10`}
                    >
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-center space-x-4 p-6 rounded-xl bg-card/30 backdrop-blur-sm border hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="p-2 rounded-lg bg-brand-100 dark:bg-brand-900/30">
                  <Icon className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};