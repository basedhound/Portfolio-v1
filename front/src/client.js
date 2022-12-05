import sanityClient from "@sanity/client";
import imageUrlbuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "s2ij3lfu",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlbuilder(client);

export const urlFor = (source) => builder.image(source);
