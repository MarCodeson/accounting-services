import sanityClient, { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion:"2023-09-21",
  useCdn: false,
});

export async function fetchPendingList() {
  const query = '*[_type == "pendingList"]';
  const data = await client.fetch(query);
  return data;
}

export async function fetchOrderList() {
  const query = '*[_type == "completedList"]';
  const data = await client.fetch(query);
  return data;
}