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
                    "62e15fb0d5afc5425513ad11",
                  title: "Sanity Studio",
                  name: "recipt-web-studio",
                  apiId: "cd42cb72-a09d-4975-bb20-5fba2ac016d1",
                },
                {
                  buildHookId: "62e15fb1f778594482a74843",
                  title: "Blog Website",
                  name: "recipt-web-hy8x7zsg",
                  apiId: "19f37d73-ec55-4e11-8843-8865f7dfe528",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jackyso2000/recipt-web",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://recipt-web-hy8x7zsg.netlify.app",
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
