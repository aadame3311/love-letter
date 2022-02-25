import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heart from "../heart.svg";

const Home = (props) => {
  const quotes = [
    {
      quote: "In love there are two things, bodies and words.",
      author: "Joyce Carol Oates",
    },
    {
      quote:
        "Continue to share your heart with people even if it has been broken.",
      author: "Amy Poehler",
    },
    {
      quote:
        "Love is such a powerful force. It's there for everyone to embrace-that kind of unconditional love for all of humankind. That is the kind of love that impels people to go into the community and try to change conditions for others, to take risks for what they believe in.",
      author: "Coretta Scott King",
    },
    {
      quote: "To love is to recognize yourself in another.",
      author: "Eckhart Tolle",
    },
    {
      quote:
        "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
      author: "Elizabeth Gilbert",
    },
    {
      quote:
        "Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism. It isn't a feeling, it is a practice.",
      author: "Eric Fromm",
    },
    {
      quote:
        "There is always some madness in love. But there is also always some reason in madness.",
      author: "Friedrich Nietzsche",
    },
    {
      quote:
        "There's all kinds of reasons that you fall in love with one person rather than another: Timing is important. Proximity is important. Mystery is important.",
      author: "Helen Fisher",
    },
    {
      quote:
        "I believe in love. I think it just hits you and pulls the rug out from underneath you and, like a baby, demands your attention every minute of the day.",
      author: "Jodi Picoult",
    },
  ];

  const index = Math.floor(Math.random() * quotes.length);

  return (
    <div
      className=""
      style={{ width: "50vw", display: "flex", flexDirection: "column" }}
    >
      <img src={heart} className="App-heart" alt="logo" />
      <h2>{quotes[index].quote}</h2>
      <h3>- {quotes[index].author}</h3>
    </div>
  );
};

export default Home;
