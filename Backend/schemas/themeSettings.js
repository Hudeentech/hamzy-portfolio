export default {
    name: 'themeSettings',
    title: 'Theme Settings (Colors)',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Site Theme',
        readOnly: true,
        hidden: true
      },
      {
        name: 'primaryColor',
        title: 'Primary Accent Color',
        description: 'Main accent color (e.g. Buttons, Highlights).',
        type: 'color',
      },
      {
        name: 'secondaryColor',
        title: 'Secondary Accent Color',
        description: 'Secondary accent (e.g. Orange text).',
        type: 'color',
      },
      {
        name: 'backgroundColor',
        title: 'Background Color',
        description: 'Main background color Override.',
        type: 'color',
      },
      {
        name: 'surfaceColor',
        title: 'Surface/Card Color',
        description: 'Color for cards and panels.',
        type: 'color',
      },
      {
        name: 'textColor',
        title: 'Text Color',
        description: 'Main text color.',
        type: 'color',
      }
    ],
  };
