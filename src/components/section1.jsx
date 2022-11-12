import love from "./images/love.svg";
import SectionContent from "./sectionContent1";
import ellipse2 from "./images/Ellipse 2.svg";
import ellipse3 from "./images/Ellipse 3.svg";
import ellipse4 from "./images/Ellipse 4.svg";
import ellipse5 from "./images/Ellipse 5.svg";
import ellipse6 from "./images/Ellipse 6.svg";
import musicHead from "./images/Pexels Photo2.png"

export default function Section() {
  return (
    <section className="container-container">
      <section className="container-Box">
        <section className="container">
          
          <div>
            <div>
              <p className="currated">Currated playlist</p>
              <aside>
              <h2>R & B Hits</h2>
              <p className="para">
                All mine, Lie again , Petty call me everyday, Out of time, No
                love, Bad Habit, and so much more
              </p>
            </aside>
            <aside className="likes">
              <div className="avatarBox">
                <div>
                  <img src={ellipse2} alt="avatar" />
                  <img src={ellipse3} alt="avatar" />
                  <img src={ellipse4} alt="avatar" />
                  <img src={ellipse5} alt="avatar" />
                  <img src={ellipse6} alt="avatar" />
                </div>
              </div>
              <div>
                <img src={love} alt="likes" className="love" />
                <p>33k Likes</p>
              </div>
            </aside>
          </div>
          <img src={musicHead} alt="music Head" />
            </div>
            
        </section>
      </section>
      <SectionContent />
    </section>
  );
}
