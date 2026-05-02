import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Countdown } from "./components/Countdown";
import { EventDetails } from "./components/EventDetails";
import Transport from "./components/Transport";
import { FAQ } from "./components/FAQ";
import { Timeline } from "./components/Timeline";
import { RSVP } from "./components/RSVP";
import { GiftTable } from "./components/GiftTable";
import Hashtag from "./components/Hashtag";
import WeddingSummary from "./components/WeddingSummary";
import Footer from "./components/Footer";
import StickyRSVPBar from "./components/StickyRSVPBar";

import { weddingData } from "./data/weddingData";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        eyebrow={weddingData.hero.eyebrow}
        couple={weddingData.couple}
        musicLabel={weddingData.hero.musicLabel}
        weddingDate="01/10/2026"
        ceremony={weddingData.ceremony}
        reception={weddingData.reception}
      />

      <Countdown
        targetDate={weddingData.date}
        calendarUrl={weddingData.calendarUrl}
      />

      <EventDetails
        intro={weddingData.itineraryIntro}
        schedule={weddingData.schedule}
      />

      <FAQ items={weddingData.faq} />

      <Timeline
        title="Nuestra historia"
        items={weddingData.story}
        images={weddingData.storyImages}
      />

      <RSVP
        title={weddingData.rsvp.title}
        description={weddingData.rsvp.description}
        buttonLabel={weddingData.rsvp.buttonLabel}
        leftImage={weddingData.rsvp.leftImage}
        rightImage={weddingData.rsvp.rightImage}
      />

      <GiftTable
        title={weddingData.gift.title}
        description={weddingData.gift.description}
        buttonLabel="¡Regalo de boda!"
        buttonHref="/regalos"
      />

      <Hashtag />

      <WeddingSummary
        items={weddingData.summary.items}
        note={weddingData.summary.note}
      />

      <Footer
        couple="Nancy & Jose"
        designerName="Diego R."
        designerUrl="https://tusitio.com"
      />

      <StickyRSVPBar href="/asistencia" />
    </>
  );
}

export default App;
