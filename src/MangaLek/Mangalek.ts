import { LanguageCode, SourceInfo, TagType } from "paperback-extensions-common";
import { Madara } from "./MangaLekMadaraTemplate";

const MANGALEK_DOMAIN = "https://mangalek.com/";

export const MangaLekInfo: SourceInfo = {
  version: "0.1.0",
  name: "MangaLek",
  description: "Extension that pulls manga from mangalek.com",
  author: "MCry",
  authorWebsite: "https://github.com/M-Cry",
  icon: "icon.png",
  hentaiSource: false,
  websiteBaseURL: MANGALEK_DOMAIN,
  sourceTags: [
    {
      text: "Notifications",
      type: TagType.GREEN,
    },
  ],
};

export class MangaLek extends Madara {
  baseUrl: string = MANGALEK_DOMAIN;
  languageCode: LanguageCode = LanguageCode.UNKNOWN;
}
