export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields:[
        {
          name: 'title',
          title: 'Project Title',
          type: 'string',
        },
        {
          name: 'tags',
          title: 'Tags / Categories',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags'
          }
        },
        {
          name: 'mainImage',
          title: 'Main Thumbnail',
          type: 'image',
          options: { hotspot:true }
        },
        {
          name: 'images',
          title: 'Case Study Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }]
        },
        {
          name: 'description',
          title: 'Short Description (Card)',
          type: 'string',
        },
        {
          name: 'overview',
          title: 'Full Overview',
          type: 'text',
        },
        {
          name: 'conclusion',
          title: 'Conclusion / Result',
          type: 'text',
        },
        {
          name: 'link',
          title: 'Live Link',
          type: 'url',
        },
    ]
  }
  