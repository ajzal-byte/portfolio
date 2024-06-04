import { Approach, Certifications, Experience, Footer, Grid, Hero, RecentProjects, Testimonials } from "@/components";
import { FloatingNav } from "@/components/ui";
import { navItems } from "@/data";

export const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Certifications />
        <Testimonials />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
