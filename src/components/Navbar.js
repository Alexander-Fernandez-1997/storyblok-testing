import { getStoryblokApi } from "@storyblok/react/rsc";
import React from "react";
import { Hamburger } from "./Hamburger";

export const Navbar = async () => {
  const { data } = await fetchNavbarData();
  const { logo, links } = data.story.content;

  return (
    <>
      <div>
        <code>{JSON.stringify(data.story.content, null, 2)}</code>
      </div>
      <nav>
        <div className="navbar-container">
          <div className="d-flex justify-content-between text-red border-bottom border-blue text-bold text-small">
            <div className="d-flex gap-1">
              <p>NRF.com</p>
              <p>NRF Events</p>
            </div>
            <button className="btn-no-bg text-red text-bold text-small d-flex align-items-center">
              Search
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <Hamburger />
              <img className="navbar-img" src={logo.filename} alt={logo.id} />
              <div className="text-blue text-bold">
                <p className="mb-0">January 13: Opening Party</p>
                <p className="mb-0 mt-0">January 14–16: Conference & Expo</p>
                <p className="mb-0 mt-0">
                  Jacob K. Javits Convention Center | NYC
                </p>
              </div>
            </div>
            <div className="d-flex aling-items-end text-small">
              <a
                className="text-bold bg-red text-white special-btns"
                href="https://nrf.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                EXHIBIT/ EXPONSORS
              </a>

              <a
                className="text-bold bg-red text-white special-btns"
                href="https://nrf.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                NRF 2024 EVENT RECAP
              </a>
            </div>
          </div>
          <div className="navbar-dropdown d-none">
            {links.map((link) => {
              return (
                <div className="navbar-dropdown-item ">
                  <h4 className="text-blue mt-0 mb-0 text-bold">
                    {link.tittle}
                  </h4>

                  {link.links.map((subLink) => {
                    return <a href={subLink.url}>{subLink.text}</a>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export async function fetchNavbarData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/navigation`, sbParams, {
    cache: "no-store",
  });
}
