import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
    return (
        <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
            <FloatingNav navItems={navItems} />
            <Hero />
            <div className="max-w-7xl">
                <Grid />
                <RecentProjects />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </div>
    );
}
