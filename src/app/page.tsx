"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Crown, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758745679-yohmp87k.jpg"
          logoAlt="Luxe Brand Logo"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
            { name: "Follow", id: "https://instagram.com" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Premium Fashion for the Modern Lifestyle"
          description="Discover our curated collection of luxury clothing designed for those who appreciate quality, elegance, and timeless style"
          tag="New Collection 2025"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758746530-vjdawgvp.jpg"
          imageAlt="Luxury fashion collection featuring premium clothing pieces"
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Collection"
          description="Handpicked luxury pieces from our latest seasonal collection"
          tag="Exclusive"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              name: "Premium Wool Jacket",
              price: "$480",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758747242-bj6ccw3j.jpg",
              imageAlt: "Luxury wool jacket in charcoal black"
            },
            {
              id: "2",
              name: "Silk Evening Dress",
              price: "$650",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758747971-6j6yxdeb.jpg",
              imageAlt: "Elegant silk evening dress in emerald green"
            },
            {
              id: "3",
              name: "Designer Leather Handbag",
              price: "$520",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758748824-b0q019ur.jpg",
              imageAlt: "Premium leather handbag in cognac brown"
            },
            {
              id: "4",
              name: "Italian Leather Heels",
              price: "$380",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758749517-cbeno00u.jpg",
              imageAlt: "Luxury Italian leather heels in black"
            },
            {
              id: "5",
              name: "Tailored Blazer",
              price: "$520",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758750177-3pofjat0.jpg",
              imageAlt: "Premium tailored blazer in navy blue"
            },
            {
              id: "6",
              name: "Cocktail Dress",
              price: "$590",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758750953-hkx7g6wb.jpg",
              imageAlt: "Sophisticated cocktail dress in midnight blue"
            }
          ]}
          buttons={[
            { text: "View All", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          tag="About Our Brand"
          title="Crafted with Purpose and Passion"
          description="We believe in creating timeless pieces that celebrate individuality and quality craftsmanship. Each garment is designed to make you feel confident, elegant, and authentically yourself."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758751692-7l5uk8z1.jpg",
            imageAlt: "Our sustainable fashion philosophy"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758752388-kjfhrjfu.jpg",
            imageAlt: "Luxury collection showcase"
          }}
          buttons={[
            { text: "Discover More", href: "contact" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real stories from fashion lovers who have discovered their signature style with us"
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Fashion Stylist",
              company: "Elite Styling Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758753049-knnt9465.jpg",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Emma Chen",
              role: "Influencer",
              company: "Fashion Forward",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758753820-sxp5bzrt.jpg",
              imageAlt: "Portrait of Emma Chen"
            },
            {
              id: "3",
              name: "Victoria Adams",
              role: "Executive",
              company: "Tech Innovation Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758754429-g9gqmp40.jpg",
              imageAlt: "Portrait of Victoria Adams"
            },
            {
              id: "4",
              name: "Jessica Park",
              role: "Designer",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758754991-mjzpyq51.jpg",
              imageAlt: "Portrait of Jessica Park"
            },
            {
              id: "5",
              name: "Rachel Green",
              role: "Blogger",
              company: "Style Chronicles",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758755618-hlzr6pso.jpg",
              imageAlt: "Portrait of Rachel Green"
            },
            {
              id: "6",
              name: "Amanda White",
              role: "Entrepreneur",
              company: "Luxury Consulting",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758756288-v4l3ggvq.jpg",
              imageAlt: "Portrait of Amanda White"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have a question or ready to shop? We would love to hear from you. Contact us and let's start a conversation."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry or style preferences",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763758745679-yohmp87k.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 Luxe Fashion. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "Women's Collection", href: "products" },
                { label: "New Arrivals", href: "products" },
                { label: "Sale", href: "products" },
                { label: "Gift Cards", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Blog", href: "contact" },
                { label: "Careers", href: "contact" },
                { label: "Press", href: "contact" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "contact" },
                { label: "Shipping Info", href: "contact" },
                { label: "Returns", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}