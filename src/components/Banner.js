import React from "react";

export const Banner = ({ data }) => {
  return (
    <div className="banner">
      <div className="layout-container">
        <div className="text-white banner-text">
          <h2>{data.tittle}</h2>
          <h4>{data.subtittle}</h4>
          <h5>{data.date_place}</h5>
          <p>{data.main_text}</p>
          <p>{data.sub_text}</p>
          <button>{data.btn_text}</button>
        </div>
        <div className="slogan-container text-blue">
          <h2 className="w-60">{data.slogan}</h2>
        </div>
      </div>
    </div>
  );
};
