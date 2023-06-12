import { createClient } from 'contentful'; 
import { TypeEventFields, TypeEventSkeleton } from '../Types/Contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

export interface Event {
    title: string;
    date: string;
    location?: any;
    url: string | null;
    ticketsUrl: string | null;
    type: 'gig';
}

export async function getEvents(): Promise<Array<Event>> {
  const response = await client.getEntries<TypeEventSkeleton>({
    content_type: 'event',
  });

  return response.items.map(({ fields }) => ({
    title: fields.title,
    date: fields.date,
    location: fields.location,
    url: fields.url || null,
    ticketsUrl: fields.ticketsUrl || null,
    type: fields.type,
  }));
}
