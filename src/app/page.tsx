"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Award, Mail, Sparkles, Users, Zap, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Heel"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Discover Your Perfect Vehicle"
          description="Premium automotive selection with expert service. Find luxury vehicles curated for discerning buyers."
          tag="Premium Automotive"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985114198-kefvdcvs.jpg"
          imageAlt="Luxury sports car"
          imagePosition="right"
          kpis={[
            { value: "500+", label: "Premium Vehicles" },
            { value: "15+", label: "Years Experience" },
            { value: "98%", label: "Customer Satisfaction" }
          ]}
          buttons={[
            { text: "Browse Inventory", href: "#inventory" },
            { text: "Schedule Test Drive", href: "#contact" }
          ]}
        />
      </div>

      <div id="featured-cars" data-section="featured-cars">
        <ProductCardTwo
          title="Featured Inventory"
          description="Hand-picked premium vehicles ready for immediate delivery"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="three-columns-all-equal-width"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              brand: "Mercedes-Benz",
              name: "E-Class Sedan 2024",
              price: "$89,500",
              rating: 5,
              reviewCount: "47",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985115693-0wkg0yfi.jpg",
              imageAlt: "Mercedes-Benz E-Class"
            },
            {
              id: "2",
              brand: "BMW",
              name: "M440i xDrive 2024",
              price: "$78,900",
              rating: 5,
              reviewCount: "38",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985117083-kfpcejy2.jpg",
              imageAlt: "BMW M440i"
            },
            {
              id: "3",
              brand: "Audi",
              name: "A6 Premium Plus 2024",
              price: "$85,200",
              rating: 5,
              reviewCount: "52",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985118222-u4ecy3wm.jpg",
              imageAlt: "Audi A6"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Why Choose Heel Automotive. We deliver excellence through premium selection, transparent pricing, and exceptional customer service"
          useInvertedBackground="noInvert"
          metrics={[
            { icon: Award, label: "Industry Awards", value: "12+" },
            { icon: Users, label: "Satisfied Customers", value: "5,000+" },
            { icon: Zap, label: "Fast Delivery", value: "3 Days" },
            { icon: Shield, label: "Quality Guarantee", value: "100%" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Testimonials"
          description="Hear what our satisfied customers have to say about their experience with Heel Automotive"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "James Richardson",
              role: "Executive Director",
              testimonial: "Exceptional service from start to finish. The team understood exactly what I was looking for and delivered beyond expectations. Highly recommend Heel for premium automotive needs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985119436-jcx2v8hv.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Business Owner",
              testimonial: "Outstanding experience. The professionalism and attention to detail was remarkable. Found the perfect vehicle quickly and the financing process was seamless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985120738-fg3iawb6.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "3",
              name: "Michael Chen",
              role: "Entrepreneur",
              testimonial: "Heel Automotive set new standards for customer service in the industry. Their transparency and expertise made the buying process enjoyable and stress-free.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985122022-pbmgeq9n.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "4",
              name: "Elizabeth Watson",
              role: "Corporate Executive",
              testimonial: "Best automotive experience I've had. Professional staff, honest pricing, and a fantastic selection of premium vehicles. Will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985123054-s5yvk6lx.jpg",
              imageAlt: "Elizabeth Watson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          tagIcon={Mail}
          title="Schedule Your Test Drive"
          description="Connect with our team to arrange a private showing or discuss your vehicle preferences. We are here to help you find the perfect car."
          useInvertedBackground="noInvert"
          inputPlaceholder="Enter your email"
          buttonText="Contact Us"
          termsText="We respect your privacy. Your information will only be used to contact you about your vehicle inquiry."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35eNGemlCEhFf8xGC6iUDmHzPTI/uploaded-1765985124289-aay4o05s.jpg"
          imageAlt="Luxury automotive showroom"
          logoText="Heel Automotive"
          copyrightText="© 2025 Heel Automotive. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Inventory", href: "#inventory" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Vehicle Sales", href: "#" },
                { label: "Test Drives", href: "#" },
                { label: "Financing", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}