export default {
    name: 'completedList',
    title: 'Completed Order',
    type: 'document',
    fields: [
      {
        name: 'firstname',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastname',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'service',
        title: 'Service',
        type: 'string',
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ],
      },
    ],
  };
  