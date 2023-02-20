import React from "react";
import ReactDOM from "react-dom/client";
import { Testimonial } from "./TestimonialBox";
import { UserData } from "./UserData";
import "./styles/base.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="main">
        <Testimonial
          quote={true}
          imgSrc={UserData.user_dc_1.img}
          name={UserData.user_dc_1.name}
          status={UserData.user_dc_1.status}
          heading={UserData.user_dc_1.heading}
          testimonial={UserData.user_dc_1.testimonial}
          bgColor={UserData.user_dc_1.bgColor}
          cl={UserData.user_dc_1.cl}
        />

        <Testimonial
          imgSrc={UserData.user_jw_2.img}
          name={UserData.user_jw_2.name}
          status={UserData.user_jw_2.status}
          heading={UserData.user_jw_2.heading}
          testimonial={UserData.user_jw_2.testimonial}
          bgColor={UserData.user_jw_2.bgColor}
          cl={UserData.user_jw_2.cl}
        />

        <Testimonial
          imgSrc={UserData.user_jh_3.img}
          name={UserData.user_jh_3.name}
          status={UserData.user_jh_3.status}
          heading={UserData.user_jh_3.heading}
          testimonial={UserData.user_jh_3.testimonial}
          bgColor={UserData.user_jh_3.bgColor}
          cl={UserData.user_jh_3.cl}
        />

        <Testimonial
          imgSrc={UserData.user_pa_4.img}
          name={UserData.user_pa_4.name}
          status={UserData.user_pa_4.status}
          heading={UserData.user_pa_4.heading}
          testimonial={UserData.user_pa_4.testimonial}
          bgColor={UserData.user_pa_4.bgColor}
          cl={UserData.user_pa_4.cl}
        />

        <Testimonial
          imgSrc={UserData.user_kw_5.img}
          name={UserData.user_kw_5.name}
          status={UserData.user_kw_5.status}
          heading={UserData.user_kw_5.heading}
          testimonial={UserData.user_kw_5.testimonial}
          bgColor={UserData.user_kw_5.bgColor}
          cl={UserData.user_kw_5.cl}
        />
      </main>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
