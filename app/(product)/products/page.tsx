"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  Shield,
  Zap,
  Check,
  Cpu,
  Keyboard,
  Palette,
  Code2,
} from "lucide-react";
import Image from "next/image";
import ProductNavbar from "@/components/ProductNavbar";

const ProductPage = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    {
      src: "/product/IMG_20250723_181623-removebg-preview.png",
      title: "Complete Split Setup",
      description: "Ergonomic 42-key split layout",
    },
    {
      src: "/product/IMG_20250723_181655-removebg-preview.png",
      title: "Complete Split Setup",
      description: "Ergonomic 42-key split layout",
    },
    {
      src: "/product/IMG_20250723_181728-removebg-preview.png",
      title: "Left Split PCB",
      description: "Custom designed for ergonomic typing",
    },
    {
      src: "/product/IMG_20250723_181815-removebg-preview.png",
      title: "Right Split PCB",
      description: "Connects both halves seamlessly",
    },
    {
      src: "/product/IMG_20250723_182020-removebg-preview.png",
      title: "TRRS Cable",
      description: "Connect both halves seamlessly",
    },
    {
      src: "/product/300px-RP2040-Zero-1.jpg",
      title: "RP2040-Zero",
      description: "Powerful microcontroller",
    },
    {
      src: "/product/switches.jpeg",
      title: "Gatron 3.0 Blue Switches",
      description: "Tactile and clicky switches",
    },
    {
      src: "/product/IMG_1530-scaled.jpg",
      title: "DSA Keycaps",
      description: "Custom keycap set",
    },
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Developer Optimized",
      description:
        "Designed specifically for programmers with strategic key placement",
      highlight: "QMK/VIA Compatible",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hot-Swappable",
      description: "Change switches instantly without any soldering required",
      highlight: "Gateron G Pro 3.0",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ergonomic Split",
      description: "Reduce wrist strain with natural hand positioning",
      highlight: "42-Key Layout",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "RP2040 Powered",
      description: "Fast, reliable microcontroller with USB-C connectivity",
      highlight: "Modern MCU",
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Premium Build",
      description: "3D printed case with precision engineering",
      highlight: "Handcrafted",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Fully Customizable",
      description: "Every key, macro, and layout can be personalized",
      highlight: "Your Style",
    },
  ];

  const configurations = [
    {
      name: "Standard Build",
      price: 7000,
      description: "Perfect for beginners",
      features: [
        "Split PCB",
        "Basic switches",
        "3D printed case",
        "Standard keycaps",
      ],
      popular: false,
    },
    {
      name: "Professional Build",
      price: 9500,
      description: "Most popular choice",
      features: [
        "Premium switches",
        "Aluminum case",
        "Custom keycaps",
        "TRRS cable",
      ],
      popular: true,
    },
    {
      name: "Enthusiast Build",
      price: 12000,
      description: "Ultimate experience",
      features: [
        "Rotary encoder",
        "OLED display",
        "Premium materials",
        "Custom firmware",
      ],
      popular: false,
    },
  ];

  const specifications = [
    {
      category: "Layout",
      items: [
        "42-key split ortholinear",
        "Ergonomic positioning",
        "Thumb cluster design",
      ],
    },
    {
      category: "Hardware",
      items: ["RP2040 Zero MCU", "Hot-swap sockets", "USB-C connectivity"],
    },
    {
      category: "Build",
      items: ["3D printed case", "Premium switches", "Custom keycaps"],
    },
    {
      category: "Software",
      items: ["QMK firmware", "VIA compatibility", "Custom layouts"],
    },
  ];

  return (
    <>
      <ProductNavbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/30 to-muted/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Ergonomic Split Keyboard
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Hand-crafted mechanical keyboards designed for developers. Built
                on-demand with premium materials and unlimited customization
                possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                  On-Demand Manufacturing
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                  QMK Compatible
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                  Premium Materials
                </span>
              </div>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
              {/* Left Side - Main Image */}
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group shadow-2xl">
                  <Image
                    src={productImages[activeImageIndex].src}
                    alt={productImages[activeImageIndex].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {productImages[activeImageIndex].title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {productImages[activeImageIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {productImages.slice(0, 3).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
                        index === activeImageIndex
                          ? "ring-4 ring-primary shadow-lg"
                          : "hover:shadow-lg hover:-translate-y-1 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side - Image List with Descriptions */}
              <div className="space-y-4">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Gallery
                  </h3>
                  <p className="text-muted-foreground">
                    Explore every detail of our handcrafted ergonomic split
                    keyboard
                  </p>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`group cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                        index === activeImageIndex
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <div className="flex gap-4 items-start">
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {image.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {image.description}
                          </p>
                          {index === activeImageIndex && (
                            <div className="mt-2">
                              <span className="inline-flex items-center px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                                Currently Viewing
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Why Developers Choose Our Keyboards
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every feature is designed with productivity and comfort in mind,
                backed by years of development experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Configuration Options */}
        <section className="py-20 bg-muted/30" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Build Configurations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your perfect setup. Each keyboard is built to order with
                your specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {configurations.map((config, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border-2 bg-card transition-all duration-300 hover:shadow-xl ${
                    config.popular
                      ? "border-primary shadow-lg scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {config.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{config.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {config.description}
                    </p>
                    <div className="text-3xl font-bold text-primary">
                      ₹{config.price.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {config.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Grid */}
        <section className="py-20" id="specifications">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built with premium components and modern technology for the
                ultimate typing experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {spec.category}
                  </h3>
                  <div className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From consultation to delivery, we handle every step of your
                custom keyboard build.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "Discuss your needs and preferences",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Customize layout, switches, and materials",
                },
                {
                  step: "03",
                  title: "Build",
                  description: "Hand-assembly with quality testing",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Shipped with setup guide and support",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Build Your Dream Keyboard?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Starting at ₹7,000. Each keyboard is built to order with a 2-3
                week delivery time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Custom Order
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Free consultation • 1-year warranty • Lifetime firmware support
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
