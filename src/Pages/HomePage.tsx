import HeatMap from "@/components/HeatMap";
import Footer from "@/components/Footer";
import AnimatedName from "@/components/AnimatedName";
import ProfileCard from "@/components/ProfileCard";
import ProjectsCard from "@/components/ProjectsCard";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen max-w-[736px] py-4 px-4">
      <ProfileCard/>
      <AnimatedName className="sm:hidden mb-13 mt-4" />
      <HeatMap />
      <ProjectsCard />
      <Footer />
    </div>
  );
}
