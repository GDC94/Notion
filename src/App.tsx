import Hero from "./components/Hero";
import WithSubnavigation from "./components/Navbar";
import Section from "./components/Section";
import foto from "./assets/spot-team-up.png";
import dash from "./assets/dash.png";
import dash2 from "./assets/dash-2.png";
import dash3 from "./assets/dash-3.png";

import dash4 from "./assets/dash-4.png";
import spot from "./assets/spot-context.png";
import workflow from "./assets/spot-workflow.png";
import box from "./assets/spot-ecosystem.png";
import { Stack } from "@chakra-ui/layout";
import Feature from "./components/Feature";
import Options from "./components/Options";
import bookshelf from "./assets/bookshelf-spot.png";
import block from "./assets/blocks-spot.png";
import team from "./assets/teamwork.png";
import Templates from "./components/Templates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <Hero />
      <Section
        cover={dash}
        image={foto}
        title="Team up without the chaos"
        description="Connect your teams, projects, and docs in Notion so you can bust silos and move as one."
      />

      <Section
        py={"100px"}
        cover={dash2}
        w={"70px"}
        maxWtitle="300px"
        maxWdesc="360px"
        image={spot}
        title="Never ask “What’s the context?” again"
        description="Stale wikis arent helpful. Neither are floating docs. In Notion, your daily work and knowledge live side by side — so you never lose context."
      />

      <Section
        cover={dash4}
        w={"170px"}
        maxWtitle="300px"
        maxWdesc="360px"
        image={workflow}
        title="Build the workflow you want"
        description="Customize Notion to make it work the way you want it to. Just drag and drop to craft the dashboard, website, doc, or system you need."
      />

      <Section
        py={"100px"}
        cover={dash3}
        w={"60px"}
        maxWtitle="320px"
        maxWdesc="360px"
        image={box}
        title="Benefit from a global ecosystem of creators"
        description="Get inspiration from thousands of community-made templates, integrations, and events.
        You'll never want for resources or support."
      />

      <Stack
        maxW="1260px"
        m="0 auto"
        borderWidth=".5px"
        borderColor="#0000003d"
      ></Stack>
      <Feature
        text="Built for endless uses. Across all teams."
        description="Notion solves problems common and unique to every team. These are just a few."
        textButton="Try Notion free"
        img={bookshelf}
        bg="#dd5f56"
        bgBorder="#dd554b"
        bgHover="#c85b53"
        wtitle="430px"
        wdesc="400px"
      />
      <Options />

      <Feature
        text="Start with a template. Modify it however you need."
        description="Choose from thousands of free, pre-built setups — for work and life."
        textButton="See all templates →"
        img={block}
        bg="#ffffff"
        bgBorder="#c3c3c3"
        bgHover="#e0e0e0ba"
        wtitle="520px"
        wdesc="400px"
        color="black"
      />
      <Templates />

      <Feature
        text="Used by the world’s most innovative teams"
        textButton="Read all customer stories →"
        img={team}
        bg="#ffffff"
        bgBorder="#c3c3c3"
        bgHover="#e0e0e0ba"
        wtitle="520px"
        wdesc="400px"
        color="black"
        wImg="400px"
      />
      <Contact />
      <Footer />
    </div>
  );
}
