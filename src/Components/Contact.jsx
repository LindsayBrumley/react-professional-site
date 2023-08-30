import "../Components/component-css/contact.css";
export function Contact() {
  return (
    // <div>
    //   <header>Contact Information</header>
    //   <figure className="fig1">
    //     <img
    //       src="https://drive.google.com/uc?export=view&id=10uLrNKJMFFjnn_QihwYuQvuaL2xS_JU8"
    //       classNameName="prophoto"
    //     />
    //   </figure>
    // </div>
    <div className="wrapper">
      <div className="item">
        <div className="polaroid">
          <img src="https://image.ibb.co/b8UJBc/administration_architecture_big_ben_221166.jpg" />
          <div className="caption">I Miss London</div>
        </div>
      </div>

      <div className="item">
        <div className="polaroid">
          <img src="https://image.ibb.co/mmyvrc/anniversary_balloons_birthday_68369.jpg" />
          <div className="caption">Love ballons</div>
        </div>
      </div>

      <div className="item">
        <div className="polaroid">
          <img src="https://image.ibb.co/hQaarc/antique_blur_camera_828378.jpg" />
          <div className="caption">Vintage life </div>
        </div>
      </div>

      <div className="item">
        <div className="polaroid">
          <img src="https://image.ibb.co/crFarc/pexels_photo_100756.jpg" />
          <div className="caption">Summer Day</div>
        </div>
      </div>

      <div className="item">
        <div className="polaroid">
          <img src="https://image.ibb.co/fvekrc/action_adult_art_673649.jpg" />
          <div className="caption">Art</div>
        </div>
      </div>
    </div>
  );
}
