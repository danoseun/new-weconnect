export const validSignUpData = [
  {
    firstName: 'John',
    lastName: 'James',
    email: 'jjames@gmail.com',
    username: 'jjames',
    password: 'jamespass'
  },
  {
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'janej@example.com',
    username: 'janej',
    password: 'janepass'
  },
  {
    firstName: 'Vince',
    lastName: 'Rana',
    email: 'vrana@example.com',
    username: 'ymary',
    password: 'vincepass'
  },
  {
    firstName: 'Yoyo',
    lastName: 'Mary',
    email: 'janej@example.com',
    username: 'ymary',
    password: 'yoyopass'
  }
];

export const inValidSignUpData = [
  {
    firstName: '',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: '',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: '',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: '',
    password: 'lnamepass'
  },
  {
    firstName: 'lastname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: ''
  },

  // Undefined
  {
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    username: 'lname',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    password: 'lnamepass'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
  },
  {
    firstName: 'F',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpass'
  },
  {
    firstName: 'Firstnamefirstnameowk',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'L',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastnamelastnameowkowk',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname7',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname77',
    email: 'lastname@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'l',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lnamenameame',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lna me',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@example.com',
    username: 'lname@.',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastname@examplecom',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'lastnamelastnamertyt@example.com',
    username: 'lname',
    password: 'passpa'
  },
  {
    firstName: 'Firstname',
    lastName: 'Lastname',
    email: 'last@example.com',
    username: 'lname',
    password: 'passwordpassword'
  }
];

export const validSignInData = [
  {
    username: 'jjames',
    password: 'jamespass'
  },
  {
    username: 'ymary',
    password: 'yoyopass'
  }
];

export const inValidSignInData = [
  {
    password: 'joripass'
  },
  {
    username: 'jjames'
  },
  {
    username: '',
    password: 'emptypass'
  },
  {
    username: 'ymary',
    password: ''
  },
  {
    username: 'notusername',
    password: 'notpassword'
  },
  {
    username: 'ymary',
    password: 'passyoyo'
  }
];
