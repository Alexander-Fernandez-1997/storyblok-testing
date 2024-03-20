import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { Banner } from "@/components/Banner";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      {data?.story?.content?.Banner?.length > 0 && (
        <Banner data={data.story.content.Banner[0]} />
      )}
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
