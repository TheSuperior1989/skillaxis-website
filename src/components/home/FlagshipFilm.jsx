import './FlagshipFilm.css';

// The SkillAxis flagship film "ONE LINE", from the SkillAxis Dynamics YouTube channel.
// youtube-nocookie: no tracking cookie is set until the visitor presses play.
const FILM_ID = 'XsHN6Bykres';

const FlagshipFilm = () => (
  <section className="flagship-film" id="film">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">Watch</span>
        <h2 className="section-title">From a sketch to a working machine, in three minutes</h2>
        <p className="section-subtitle">
          One idea followed from the first pencil line through design, drawings, stress checks, machining, controls and software.
        </p>
      </div>
      <div className="flagship-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${FILM_ID}?rel=0`}
          title="ONE LINE: SkillAxis Dynamics, from a sketch to a working machine"
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

export default FlagshipFilm;
