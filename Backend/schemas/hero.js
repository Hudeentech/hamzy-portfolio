export default {
  name: 'hero',
  title: 'Hero / Landing',
  type: 'document',
  fields: [
    {
      name: 'smallText',
      title: 'Small Label Text',
      type: 'string',
      description: 'e.g. GRAPHIC_DESIGN / ART_DIRECTION'
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string', // text or string, string is usually fine for titles
      description: 'Name or Headline e.g. DANESI HAMZAH'
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      description: 'e.g. VISUAL DESIGNER [v.2.0] ...'
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'cta1',
      title: 'Button 1 Text',
      type: 'string',
      initialValue: 'View_Portfolio'
    },
    {
      name: 'cta2',
      title: 'Button 2 Text',
      type: 'string',
      initialValue: 'Start Collaboration'
    },
    {
      name: 'status',
      title: 'Availability Status',
      type: 'string',
      initialValue: 'AVAILABLE'
    }
  ],
};
