import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBandMemberFields {
    fullName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    function: EntryFieldTypes.Symbol;
    mainImage: EntryFieldTypes.AssetLink;
    biography: EntryFieldTypes.Text;
}

export type TypeBandMemberSkeleton = EntrySkeletonType<TypeBandMemberFields, "bandMember">;
export type TypeBandMember<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBandMemberSkeleton, Modifiers, Locales>;

export interface TypeEventFields {
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    location?: EntryFieldTypes.Location;
    url?: EntryFieldTypes.Symbol;
    ticketsUrl?: EntryFieldTypes.Symbol;
    type: EntryFieldTypes.Symbol<"gig">;
}

export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "event">;
export type TypeEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeEventSkeleton, Modifiers, Locales>;

export interface TypeFileFields {
    title: EntryFieldTypes.Symbol;
    file: EntryFieldTypes.AssetLink;
    category: EntryFieldTypes.Symbol;
    page: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageSkeleton>>;
}

export type TypeFileSkeleton = EntrySkeletonType<TypeFileFields, "file">;
export type TypeFile<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFileSkeleton, Modifiers, Locales>;

export interface TypeNewsItemFields {
    title: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    message: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.Symbol;
}

export type TypeNewsItemSkeleton = EntrySkeletonType<TypeNewsItemFields, "newsItem">;
export type TypeNewsItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNewsItemSkeleton, Modifiers, Locales>;

export interface TypePageFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypeVideoFields {
    title: EntryFieldTypes.Symbol;
    author: EntryFieldTypes.Symbol<"Roundabouts">;
    video: EntryFieldTypes.AssetLink;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVideoSkeleton, Modifiers, Locales>;

export interface TypeWebsiteFields {
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
}

export type TypeWebsiteSkeleton = EntrySkeletonType<TypeWebsiteFields, "website">;
export type TypeWebsite<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeWebsiteSkeleton, Modifiers, Locales>;
