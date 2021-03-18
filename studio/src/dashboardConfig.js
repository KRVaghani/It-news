export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60537fe6d498594b0e86919d",
                  title: "Sanity Studio",
                  name: "it-news-studio",
                  apiId: "521c5120-9d40-4eef-9d63-feaf7af9d894",
                },
                {
                  buildHookId: "60537fe6e5ad4e0f26c28e36",
                  title: "Blog Website",
                  name: "it-news-web",
                  apiId: "50a43416-05dd-4f62-b780-d3665d467375",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/KRVaghani/It-news",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://it-news-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
