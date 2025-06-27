import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-brand-50/30 dark:from-brand-950/20 dark:via-background dark:to-brand-900/10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl animate-float"></div>
          <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-glow"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="mb-8 animate-slide-up">
              <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-950/50 dark:text-brand-300 dark:border-brand-800"
              >
                ❄️ Your Content’s Already Done
              </Badge>
            </div>

            {/* Main headline */}
            <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up"
                style={{ animationDelay: "0.1s" }}
            >
              YetiGen
              <span className="bg-gradient-to-r from-brand-500 to-brand-600 bg-clip-text text-transparent block">
              Just click. We create. You chill.
            </span>
            </h1>

            {/* Subtitle */}
            <p
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up"
                style={{ animationDelay: "0.2s" }}
            >
              YetiGen magically generates scroll-stopping content for your socials—so you can stop brainstorming and start posting. Zero effort. Total wow.
            </p>

            {/* CTA buttons */}
            <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
            >
              <Link href="/signup">
                <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white px-8 py-3 text-lg font-semibold group"
                >
                  Sign me up
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg font-semibold group border-2"
                >
                  <Play className="mr-2 h-5 w-5" />
                  I'm Back
                </Button>
              </Link>
            </div>

            {/* Features list */}
            <div
                className="text-center animate-slide-up"
                style={{ animationDelay: "0.4s" }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Fully automatic. Always cool.
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {[
                  "Auto Captions",
                  "Hashtag Magic",
                  "Post in Seconds",
                  "Built-in Themes",
                  "Zero Guesswork",
                ].map((feature, index) => (
                    <div
                        key={feature}
                        className="text-sm font-medium text-muted-foreground"
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      {feature}
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>
  );
};
