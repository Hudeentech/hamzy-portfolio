export default {
  name: 'experience',
  title: 'Skills / Tools Stack',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category Name',
      type: 'string',
      description: 'e.g. Design Tools, Frontend, Backend',
    },
    {
      name: 'tools',
      title: 'Tools List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
             {name: 'name', title: 'Tool Name', type: 'string'},
             {name: 'icon', title: 'Icon', type: 'image', options: {hotspot: true}}
          ]
        }
      ],
    },
  ],
};
