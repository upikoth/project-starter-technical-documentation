module.exports = {
  title: "Техническая документация",
  lang: "ru",
  base: "/project-starter-technical-documentation/",
  appearance: false,

  themeConfig: {
    sidebar: getSidebar(),
    outlineTitle: "На этой странице",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
  },
};

function getSidebar() {
  return [
    {
      text: "Product manager",
      items: [{ text: "Идея приложения", link: "/product/analysis" }],
    },
  ];
}
