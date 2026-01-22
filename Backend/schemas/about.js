

export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Profile Images (Slideshow)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'age',
      title: 'Age',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
    },
    {
      name: 'hobbies',
      title: 'Hobbies',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'skills',
      title: 'Skills (List)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'experience',
      title: 'Experience Summary',
      type: 'text',
    },
    {
      name: 'homeLabel',
      title: 'Home Section Label',
      type: 'string',
      initialValue: 'ID_VERIFIED // 02',
      group: 'homeSection'
    },
    {
      name: 'homeHeadline',
      title: 'Home Section Headline',
      type: 'text',
      description: 'e.g. I help brands find their distinct visual voice...',
      group: 'homeSection'
    },
    {
      name: 'homeDescription',
      title: 'Home Section Body',
      type: 'text',
      description: 'e.g. My work sits at the intersection...',
      group: 'homeSection'
    },
    {
      name: 'homeFocus',
      title: 'Current Focus',
      type: 'string',
      description: 'e.g. 3D Web Experiences & Minimalist Ecommerce',
      group: 'homeSection'
    },
    {
      name: 'stats',
      title: 'Stats (Home)',
      type: 'object',
      group: 'homeSection',
      fields: [
        { name: 'years', title: 'Years Experience', type: 'string', initialValue: '05' },
        { name: 'projects', title: 'Projects Shipped', type: 'string', initialValue: '50+' },
        { name: 'clients', title: 'Client Satisfaction', type: 'string', initialValue: '100%' }
      ]
    }
  ],
  groups: [
    { name: 'homeSection', title: 'Home Page Section' }
  ]
};
