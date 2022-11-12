import coverPhoto1 from "./images/Rectangle 29.svg";
import coverPhoto2 from "./images/Rectangle 21.svg";
import coverPhoto3 from "./images/Rectangle 26 (3).png";

export default function SectionContent() {
  const div = [
    {
      id: 0,
      img: coverPhoto1,
      alt: "avatar",
      title: "Golden age of 80s",
      artist: "Sean swadder",
      duration: "2:35:45",
    },
    {
      id: 1,
      img: coverPhoto2,
      alt: "avatar",
      title: 'Reggae "n" blues',
      artist: "Dj YK mule",
      duration: "1:02:42",
    },
    {
      id: 2,
      img: coverPhoto3,
      alt: "avatar",
      title: "Tomorrow's tunes",
      artist: "Jagaban",
      duration: "2:01:25",
    },
  ];

  const eachDiv = div.map((item) => {
    return (
      <div key={item.id}>
        <aside className="first">
          <img src={item.img} alt={item.alt} />
          <div>
            <h4>{item.title}</h4>
            <p className="artist">{item.artist}</p>
            <p className="duration">{item.duration}</p>
          </div>
        </aside>
        <aside className="favourite">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.1539 7.69874C0.349149 5.18624 1.28965 2.31449 3.9274 1.46474C5.3149 1.01699 6.8464 1.28099 7.9999 2.14874C9.09115 1.30499 10.6789 1.01999 12.0649 1.46474C14.7026 2.31449 15.6491 5.18624 14.8451 7.69874C13.5926 11.6812 7.9999 14.7487 7.9999 14.7487C7.9999 14.7487 2.4484 11.7277 1.1539 7.69874Z"
              stroke="#FACD66"
              stroke-width="0.5625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M11 4.02502C11.8025 4.28452 12.3695 5.00077 12.4377 5.84152"
              stroke="#FACD66"
              stroke-width="0.5625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </aside>
      </div>
    );
  });

  return (
    <section className="topChart">
      <h2>Top charts</h2>
      <aside>{eachDiv}</aside>
    </section>
  );
}
