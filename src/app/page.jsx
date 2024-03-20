import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <h1>Story: {data.story.id}</h1>
      <code>{JSON.stringify(data.story, null, 2)}</code>
      <hr />
      <code>{JSON.stringify(data.story.content.body[0], null, 2)}</code>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
