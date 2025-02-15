import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  defaultShowCopyCode: true,
});

export default withNextra({
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  basePath: "/BridgeForMonkeys",
});
