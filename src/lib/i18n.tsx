// this file is used to set and get the current language for server components

let currentLang: langTypes = "fa";

export function setLang(lang: langTypes) {
  currentLang = lang;
}

export function getLang() {
  return currentLang;
}
