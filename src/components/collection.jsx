import audioImg1 from "./images/Rectangle 14.svg";
import audioImg2 from "./images/Rectangle 15.svg";
import audioImg3 from "./images/Rectangle 16.svg";
import audioImg4 from "./images/Rectangle 17.svg";
import audioImg5 from "./images/Rectangle 18.svg";
import audioImg6 from "./images/Rectangle 19.svg";
import audioImg7 from "./images/Rectangle 20.svg";
import "./collection.css";

export default function Collection() {
  const each = [
    {
      id: 0,
      img: audioImg1,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 1,
      img: audioImg2,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 2,
      img: audioImg3,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 3,
      img: audioImg4,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 4,
      img: audioImg5,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 5,
      img: audioImg6,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
    {
      id: 6,
      img: audioImg7,
      title: "Limits",
      artist: "Beyonce",
      likes: "2.3m likes",
    },
  ];

  const eachItem = each.map((item) => {
    return (
      <div key={item.id}>
        <img src={item.img} alt={item.title} />
        <div className="collection-item">
          <div>
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
            <p className="last">{item.likes}</p>
          </div>
          
          <div  className="play-container">
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M0.333344 4.77262V2.9536C0.333344 0.619203 1.98563 -0.335721 4.0017 0.831476L5.57814 1.74094L7.15463 2.65041C9.17069 3.81761 9.17069 5.72764 7.15463 6.89484L5.57814 7.80431L4.0017 8.71377C1.98563 9.88097 0.333344 8.92605 0.333344 6.59165V4.77262Z"
                fill="#EFEEE0"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section className="collection">
      <aside>
        <aside>
           <button>My collection</button>
          <button>Likes</button>
        </aside>
       
      </aside>
      {eachItem}
    </section>
  );
}
