import './index.css'

const Content = () => (
  <div className="content">
    <div className="cont-1-top">
      <h1 className="land-head">
        Learn French online and gain the confidence to speak fluently.
      </h1>
      <p className="land-desc">
        Learn about all the basics and wonders of the French Language by our
        renowned trainer and get professional guidance with native style
        speaking skills.
      </p>
      <button type="button" className="request-button">
        Request Brochure
      </button>
    </div>
    <div className="cont-2-video">
      <div className="number-cont">
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019547/student_1_kwbvtt.png"
            alt="student"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">5000+</h1>
            <p className="sub-desc">Happy Learners</p>
          </div>
        </div>
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019547/bulb_2_is7ber.png"
            alt="bulb"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">50000+</h1>
            <p className="sub-desc">Hours Of Engagement</p>
          </div>
        </div>
        <div className="number-item">
          <img
            src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019546/training_1_ohtv3m.png"
            alt="training"
            className="number-logo"
          />
          <div className="sub-item">
            <h1 className="sub-head">150+</h1>
            <p className="sub-desc">Alpha Mentors</p>
          </div>
        </div>
      </div>
      <div className="video-cont">
        <img
          src="https://res.cloudinary.com/dzi1shwap/image/upload/v1680019854/image_1_wcq2z1.png"
          alt="video"
          className="video"
        />
      </div>
    </div>
  </div>
)

export default Content
