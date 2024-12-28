// src/lib/design-system.ts
export const designSystem = {
  // As cores que definimos
  colors: {
    background: "#000000",
    text: "#FFFFFF",
    accent: "#0066FF",
  },

  // Tipografia que já estamos usando
  typography: {
    display: {
      title: {
        font: "Bebas Neue",
        size: "100px",
        weight: "400",
      },
      subtitle: {
        font: "Neue Regrade",
        size: "30px",
        weight: "500",
        letterSpacing: "70%",
      },
    },
    text: {
      body: {
        font: "Neue Regrade",
        size: "16px",
        weight: "400",
      },
      label: {
        font: "Neue Regrade",
        size: "12px",
        weight: "500",
        letterSpacing: "20%",
      },
    },
  },

  // Layout
  layout: {
    maxWidth: "1440px",
    grid: {
      columns: 12,
      margin: "64px", // 16rem
      gutter: "32px", // 8rem
    },
  },
};
