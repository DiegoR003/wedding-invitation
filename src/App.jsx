import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import RSVP from './components/RSVP'
import GiftTable from './components/GiftTable'
import Hashtag from './components/Hashtag'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <OurStory />
        <EventDetails />
        <RSVP />
        <GiftTable />
        <Hashtag />
      </main>
      <Footer />
    </>
  )
}
