export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role / Position',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Client Picture',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'message',
      title: 'Feedback Message',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Review Link (Optional)',
      type: 'url',
      description: 'Link to LinkedIn recommendation, Trustpilot, etc.'
    }
  ],
};
