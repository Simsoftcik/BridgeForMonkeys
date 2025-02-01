import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Sieci</span>,
  project: {
    link: "https://github.com/Simsoftcik/BridgeForMonkeys",
  },
  docsRepositoryBase:
    "https://github.com/Simsoftcik/BridgeForMonkeys/tree/main",
  editLink: {
    text: null,
  },
  feedback: {
    content: "Zauważyłeś błąd, masz pomysł co poprawić - to zgłoś propozycję!",
  },
  footer: {
    text: "BridgeForMonkeys, autorzy Szymon Kubiczek, ( + Bartłomiej Szubiak)",
  },
  toc: {
    float: true, // Ustawienie, czy spis treści ma być pływający
    title: "On This Page", // Tytuł sekcji spisu treści
  },
};

export default config;
