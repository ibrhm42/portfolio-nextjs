import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
const HomeSection1 = dynamic(() => import("@/components/home/Section1"));
const Home = () => {
  return (
    <PageBox>
      <HomeSection1 id="hero" />
    </PageBox>
  );
};

export default Home;
