export default {
    name: 'clients',
    title: 'Clients (Trusted By)',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Client Name',
        type: 'string',
      },
      {
        name: 'logo',
        title: 'Client Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
