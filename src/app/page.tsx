"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, Moon, Sun, ChevronDown, Zap, Shield } from "lucide-react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle Button */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </div>

      {/* Header */}
      <header className="text-center py-16 px-6">
        <h1 className="text-6xl font-bold text-primary mb-4">Coffi</h1>
        <p className="text-xl text-muted-foreground">
          Geometry Dash mod menu for iOS
        </p>
      </header>

      {/* Hero Section with Orange Accent Line */}
      <div className="w-full h-1 bg-primary mb-16"></div>

      {/* Main Image Section */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <Card className="overflow-hidden bg-card border-border">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
              <img
                src="https://ext.same-assets.com/3660623386/2672771283.jpeg"
                alt="Coffi app on iPhone"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coffi Mod Menu Section */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-primary mb-2">Coffi Mod Menu</h2>
        <p className="text-muted-foreground mb-8">
          <small>Official Website of Coffi.</small>
        </p>

        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="w-full max-w-sm mb-8 justify-between text-left"
            >
              Normal Mods
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <a href="#speedhack">SpeedHack</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#noclip">Noclip</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Features Grid */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SpeedHack Card */}
          <Card
            id="speedhack"
            className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300"
          >
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">
                  SpeedHack
                </h3>
              </div>
              <p className="text-muted-foreground">
                Allows you to go at anyspeed at any moment.
              </p>
            </CardContent>
          </Card>

          {/* Noclip Card */}
          <Card
            id="noclip"
            className="p-6 bg-card border-border hover:border-primary/50 transition-colors duration-300"
          >
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Noclip</h3>
              </div>
              <p className="text-muted-foreground">
                w/ Noclip you can just go into anything!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center mb-16">
        <a
          href="https://drive.usercontent.google.com/download?id=17sD1FOP5S4oILw2ZNd-lHz3bSdgK3-nx&export=download"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full"
          >
            <Download className="h-5 w-5 mr-2" />
            Download now
          </Button>
        </a>
      </div>

      {/* Credits Section */}
      <div className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-8">Credits</h2>

        <div className="space-y-8">
          {/* David - Developer */}
          <Card className="p-6 bg-card border-border">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/3660623386/3996289962.png"
                    alt="David"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">
                    David - Developer
                  </h3>
                  <p className="text-muted-foreground">Developer of this site!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* sStack */}
          <Card className="p-6 bg-card border-border">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/3660623386/3333820831.jpeg"
                    alt="sStack"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    sStack
                  </h2>
                  <p className="text-muted-foreground">
                    Main Game Developer of Coffi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 px-6 border-t border-border">
        <p className="text-muted-foreground">
          This is Not affiliated with Geometry Dash nor RobTop Games.
        </p>
      </footer>
    </div>
  );
}
