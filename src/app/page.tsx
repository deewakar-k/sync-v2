import { HeroSection } from "@/components/blocks/hero-section-dark";

export default async function Home() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      subtitle={{
        regular: "Your Schedule,",
        gradient: " Simplified",
      }}
      description="The modern platform for service providers to showcase their offerings and for clients to book available slots with ease."
      ctaText="Book now"
      ctaHref="/signup"
      bottomImage={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  );
}
