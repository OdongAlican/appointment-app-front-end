export const initDoctorsState = {
  list: [
    {
      id: 1,
      name: 'Jeff Denlea',
      specialization: 'General Surgeon',
      practice_from: '1-1-2017',
      professional_statement: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 2,
      name: 'Jeff Denlea',
      specialization: 'General Surgeon',
      practice_from: '1-1-2017',
      professional_statement: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 3,
      name: 'Jeff Denlea',
      specialization: 'General Surgeon',
      practice_from: '1-1-2017',
      professional_statement: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ],
  fetching: true,
  message: '',
  currentDoctor: {},
};

export const initAuthState = {
  authToken: '',
  fetching: true,
  message: '',
};

export const initApptState = {
  list: [
    {
      id: 1,
      location: 'Eldoret',
      doctor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '1  8:00:00',
    },
    {
      id: 2,
      location: 'Kisumu',
      doctor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 3,
      location: 'Nairobi',
      doctor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
    {
      id: 4,
      location: 'Mombasa',
      doctor_id: 1,
      canceled: false,
      created_at: '2020-06-08 16:51:35',
      updated_at: '2020-06-08 16:51:35',
      user_id: 1,
      date: '2020-07-05',
      time: '15:00:00',
    },
  ],
  fetching: true,
  message: '',
};
