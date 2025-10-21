import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const HomeSection2 = dynamic(() => import("@/components/home/Section2"));
const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="hero" />
      <HomeSection2 id="services" />
    </PageBox>
  );
};

export default Home;
