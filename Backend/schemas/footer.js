export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      initialValue: "// INITIATE_CONTACT",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main title or message for the footer.",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Link Title",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "copyright",
      title: "Copyright Text",
      type: "string",
    },
  ],
};
