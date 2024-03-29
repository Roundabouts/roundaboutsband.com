// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBandMemberFields {
  /** Full name */
  fullName: string;

  /** Name */
  name: string;

  /** Function */
  function: string;

  /** Main image */
  mainImage: Asset;

  /** Biography */
  biography: string;
}

export interface IBandMember extends Entry<IBandMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "bandMember";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IEventFields {
  /** Title */
  title: string;

  /** Date */
  date: string;

  /** Location */
  location?: { lat: number; lon: number } | undefined;

  /** Url */
  url?: string | undefined;

  /** Tickets URL */
  ticketsUrl?: string | undefined;

  /** Type */
  type: "gig";
}

export interface IEvent extends Entry<IEventFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "event";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IFileFields {
  /** Title */
  title: string;

  /** File */
  file: Asset;

  /** Category */
  category: string;

  /** Page */
  page: IPage[];
}

export interface IFile extends Entry<IFileFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "file";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INewsItemFields {
  /** Title */
  title: string;

  /** Date */
  date: string;

  /** Message */
  message: Document;

  /** Image */
  image: Asset;

  /** Author */
  author: string;
}

export interface INewsItem extends Entry<INewsItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "newsItem";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Description */
  description?: string | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IVideoFields {
  /** Title */
  title: string;

  /** Author */
  author: "Roundabouts";

  /** Video */
  video: Asset;
}

export interface IVideo extends Entry<IVideoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "video";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWebsiteFields {
  /** Title */
  title: string;

  /** Description */
  description: string;
}

export interface IWebsite extends Entry<IWebsiteFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "website";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "bandMember"
  | "event"
  | "file"
  | "newsItem"
  | "page"
  | "video"
  | "website";

export type IEntry =
  | IBandMember
  | IEvent
  | IFile
  | INewsItem
  | IPage
  | IVideo
  | IWebsite;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
