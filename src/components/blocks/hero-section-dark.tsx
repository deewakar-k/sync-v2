import * as React from "react";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        "opacity-[var(--opacity)]"
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [inset:0%_0px] [margin-left:-200%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-size:var(--cell-size)_var(--cell-size)] [background-repeat:repeat] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = {
        light: "https://farmui.vercel.app/dashboard-light.png",
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-black/5 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))] dark:bg-black/10 dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,255,255,0.15),rgba(255,255,255,0))]" />
        <section className="relative z-1 mx-auto max-w-full">
          <RetroGrid {...gridOptions} />
          <div className="z-10 mx-auto max-w-screen-xl gap-12 px-4 py-28 md:px-8">
            <div className="mx-auto max-w-3xl space-y-5 text-center leading-0 lg:leading-5">
              <h1 className="group font-geist mx-auto w-fit rounded-3xl border-[2px] border-black/5 bg-gradient-to-tr from-white/10 via-white/5 to-transparent px-5 py-2 text-sm text-gray-500 dark:border-white/10 dark:from-white/5 dark:via-white/10 dark:text-gray-300">
                {title}
                <ChevronRight className="ml-2 inline h-4 w-4 duration-300 group-hover:translate-x-1" />
              </h1>
              <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                {subtitle.regular}
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  {subtitle.gradient}
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
                {description}
              </p>
              <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#666666_50%,#ffffff_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-xs font-medium backdrop-blur-3xl dark:bg-black">
                    <a
                      href={ctaHref}
                      className="group border-input inline-flex w-full items-center justify-center rounded-full border-[1px] bg-gradient-to-tr from-white/10 via-white/20 to-transparent px-10 py-4 text-center text-black transition-all hover:bg-gradient-to-tr hover:from-white/20 hover:via-white/30 hover:to-transparent sm:w-auto dark:from-white/5 dark:via-white/10 dark:text-white dark:hover:from-white/10 dark:hover:via-white/20"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
            {bottomImage && (
              <div className="relative z-10 mx-10 mt-32">
                <img
                  src={bottomImage.light}
                  className="w-full rounded-lg border border-gray-200 shadow-lg dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="border-black-800 hidden w-full rounded-lg border shadow-lg dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
