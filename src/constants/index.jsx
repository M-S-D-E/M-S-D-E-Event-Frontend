
import cardOne from '../assets/images/cardOne.jpg';
import cardTwo from '../assets/images/cardTwo.jpg';
import cardThree from '../assets/images/cardThree.jpg';
import cardFour from '../assets/images/cardFour.jpg';

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
};
export default K;