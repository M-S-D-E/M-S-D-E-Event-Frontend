
import cardOne from '../assets/images/cardOne.jpg';
import cardTwo from '../assets/images/cardTwo.jpg';
import cardThree from '../assets/images/cardThree.jpg';
import cardFour from '../assets/images/cardFour.jpg';
import dataOne from '../assets/images/dataOne.webp';
import dataTwo from '../assets/images/dataTwo.webp';
import dataThree from '../assets/images/dataThree.webp';
import insiderOne from '../assets/images/insiderOne.webp';
import insiderTwo from '../assets/images/insiderTwo.webp';

const K = {
  NAVLINKS: [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Find Events",
      path: "/collection",
    },
    {
      name: "Create Event",
      path: "/contact-us",
    },
    {
      name: "Sign-up",
      path: "/about-us",
    },
    {
      name: " Login",
      path: "/login",
    },

  ],
  EVENTS: [
    {
      title: "An Evening with Lee Harris in Seattle - Watch the full video...",
      date: "Monday • 2:00 AM GMT",
      price: "From $39.00",
      organization: "Lee Harris Productions Inc.",
      followers: "864 followers",
      image: cardOne
    },
    {
      title: "Creating Happier Workplaces - Henry Stewart",
      date: "Tue, Jul 9 • 6:00 PM GMT",
      price: "From £0.00",
      organization: "Action for Happiness",
      followers: "20.8k followers",
      image: cardTwo
    },
    {
      title: "Julio One Piece Regional",
      date: "Sun, Jul 14 • 2:00 PM GMT",
      price: "From $35.00",
      organization: "LATAM TCG Events",
      followers: "1.2k followers",
      image: cardThree,
      soldOut: true
    },
    {
      title: "World Trade, Development and Sustainability",
      date: "Fri, Jul 19 • 4:00 PM GMT",
      price: "Free",
      organization: "University of Cambridge",
      followers: "574 followers",
      image: cardFour
    }
  ],
  PEOPLE: [
    {
      title: "9 Insider Tips for Building Your Events Community",
      date: "Monday • 2:00 AM GMT",
      price: "From $39.00",
      organization: "Lee Harris Productions Inc.",
      followers: "864 followers",
      image: insiderOne
    },
    {
      title: "How to Sell Tickets: A Guidebook for Event Organizers",
      date: "MSDE’s community of event creators sold 284 million tickets in 2022.",
      organization: "Action for Happiness",
      image: insiderTwo
    },
    {
      title: "Julio three Piece Regional",
      date: "Sun, Jul 14 • 2:00 PM GMT",
      price: "From $35.00",
      organization: "LATAM TCG Events",
      followers: "1.2k followers",
      image: cardThree,
      soldOut: true
    },
    {
      title: "World gave, Development and Sustainability",
      date: "Fri, Jul 19 • 4:00 PM GMT",
      price: "Free",
      organization: "University of Cambridge",
      followers: "574 followers",
      image: cardFour
    }
  ],
  GROUPS: [
    {
      image: dataOne,
      category: 'Event Planning',
      title: '104 Event Themes + Real Examples to Inspire Your Next Event',
      description: 'Not feeling creative? Here’s a laundry list of event theme ideas to adopt or alter for your next event.'
    },
    {
      image: dataTwo,
      category: 'Reconnvene',
      title: 'How to Build Lasting Partnerships With Brands, Nonprofits, and Governments',
      description: 'One of the best ways to expand your events’ reach is to find partners that support your vision: big corporate brands,...'
    },
    {
      image: dataThree,
      category: 'Quick Tips',
      title: 'How to Create an Event Page That Attendees Love',
      description: 'As an event organizer, your Eventbrite listing page needs to stand out. First impressions count, and your event page is...'
    },
  ]


};
export default K;