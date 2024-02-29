import { Entry, createClient } from 'contentful'; 
import { IEvent, IEventFields, IWebsite } from '../@types/contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
});

export interface WebsiteData {
  title: string;
  description: string;
}

export interface Event {
  title: string;
  note: string | null;
  date: string;
  location?: string;
  country: string;
  url: string | null;
  ticketsUrl: string | null;
  soldOut: boolean;
}

class ContentfulParser {
  static parseWebsiteData(entry: IWebsite): WebsiteData {
    return {
      title: entry.fields.title,
      description: entry.fields.description,
    };
  }

  static parseEvent(entry: IEvent): Event {
    return {
      title: entry.fields.title,
      note: entry.fields.note || null,
      date: entry.fields.date,
      location: entry.fields.location,
      country: entry.fields.country,
      url: entry.fields.url || null,
      ticketsUrl: entry.fields.ticketsUrl || null,
      soldOut: !!entry.fields.soldOut,
    };
  }
}

export async function getWebsiteData() {
  const response = await client.getEntries<IEvent>({
    content_type: 'website',
  });

  return ContentfulParser.parseWebsiteData(response.items[0] as any);
}

export async function getEvents() {
  const response = await client.getEntries<IEvent>({
    content_type: 'event',
    order: 'fields.date',
  });

  return response.items.map(item => ContentfulParser.parseEvent(item as any));
}


export async function getFrontpageImages() {
  const response = await client.getAssets<IEvent>({
    content_type: 'event',
    order: 'fields.date',
  });

  return response.items.map(item => ContentfulParser.parseEvent(item as any));
}
