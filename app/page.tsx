import { access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { CodeSection } from "@/components/code-section";
import { Contact } from "@/components/contact";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Navigation } from "@/components/navigation";
import { Preloader } from "@/components/preloader";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SmoothScroll } from "@/components/smooth-scroll";

async function fileExists(relativePath: string) {
  try {
    await access(
      path.join(process.cwd(), "public", relativePath),
      constants.F_OK,
    );

    return true;
  } catch {
    return false;
  }
}

export default async function Home() {
  const [hasProfileImage, hasSpiderImage] = await Promise.all([
    fileExists("images/profile.jpg"),
    fileExists("images/spiderman_arun.png"),
  ]);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Preloader />
      <Navigation />

      <main className="relative overflow-x-clip">
        <Hero
          hasProfileImage={hasProfileImage}
          hasSpiderImage={hasSpiderImage}
        />

        <About />

        <Skills />
        <Journey />
        <CodeSection />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}