import { getStoryblokApi } from "@storyblok/react/rsc";
import React from "react";

export const Footer = async () => {
  const { data } = await fetchFooterData();
  const { logo, politic, contact, news, social_media, footer_links } =
    data.story.content;
  return (
    <footer className="pt-2 pb-1">
      <div className="layout-container">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-1 flex-column">
            <img
              className="newsletter-logo"
              src={logo.filename}
              alt={logo.id}
            />
            <div>
              <p className="text-bold mb-0 mt-0">{contact[0].street}</p>
              <p className="text-bold mb-0 mt-0">{contact[0].number}</p>
              <p className="text-bold mb-0 mt-0">Fax: {contact[0].fax}</p>
            </div>
            <div className="d-flex gap-1">
              {social_media.map((social) => (
                <img
                  className="social-media"
                  src={social.icon.url}
                  alt={social.icon.id}
                />
              ))}
            </div>
          </div>
          <div>
            <h2>{news[0].tittle}</h2>
            <p className="text-bold">{news[0].message}</p>
            <button className="text-bold p-1 newsletter-btn text-white">
              {news[0].btn_text}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between border-top mt-2">
          <div class="d-flex  gap-1 mt-1">
            {footer_links.map((link) => (
              <a href={link.href.url} className="text-bold">
                {link.text}
              </a>
            ))}
          </div>
          <p className="text-bold">{politic}</p>
        </div>
      </div>
    </footer>
  );
};

export async function fetchFooterData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/footer`, sbParams, {
    cache: "no-store",
  });
}
