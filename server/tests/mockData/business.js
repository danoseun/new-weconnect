/**
 * Could have also classified it as registerBusinessSeed/Data
 * instead of valid and invalid
 * Then simulate different cases as usual
 */
export const inValidBusinessData = [
  {
    description: 'We are the key',
    location: 'Kano',
    category: 'Insurance',
    email: 'koriko@example.com',
    phoneNumber: '07033288384'
  },
  {
    businessName: '',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'Kweku ventures qwertyuiop pouytr rewtqwer tyeruitrewq uytrewq qwerty beans consortium business consortium science technology internet business long qwertyuiop lukwertyuiop jason john james',
    description: 'Try us',
    location: 'Toronto',
    category: 'Education',
    email: 'kweku@exam.com',
    phoneNumber: '07033288423'
  },
  {
    businessName: 'John Doe!@',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  // Description
  {
    businessName: 'John Doe Boys',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Doebiz',
    description: '',
    location: 'Quebec',
    category: 'Hospitalite',
    email: 'jdml@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Doe',
    description: 'Best service ever ever you will not regret patronising us now and always',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Do Biz',
    description: 'Best service ever@!',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  // Location
  {
    businessName: 'John Doe Greenry',
    description: 'Best service ever had',
    category: 'Hospitalitee',
    email: 'email@examp.com',
    phoneNumber: '07033288345'
  },
  {
    businessName: 'John Doe and boys',
    description: 'Best service ever',
    location: '',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Doezy',
    description: 'Best service ever',
    location: 'Quebec34',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'Doe man Inc',
    description: 'Best service ever',
    location: 'QuebecTorontoJapanNewOrleansTanji',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  // Category
  {
    businessName: 'John Lens',
    description: 'Best service always',
    location: 'Poshville',
    email: 'eyeml@exam.com',
    phoneNumber: '07033288340'
  },
  {
    businessName: 'John Dewy',
    description: 'Best service ever gotten',
    location: 'Quebec',
    category: '',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Doe inc',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitable4',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'Mary and Mary',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'H',
    email: 'email@exam.com',
    phoneNumber: '07033288341'
  },
  // Email
  {
    businessName: 'John DewyEyed',
    description: 'Best service ever',
    location: 'Quebeczoom',
    category: 'Hospitality',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Doelec',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: '',
    phoneNumber: '07033288341'
  },
  {
    businessName: 'John Dodo',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'emailexam.com',
    phoneNumber: '07033288341'
  },
  // Phonenumber
  {
    businessName: 'John Dekpelin',
    description: 'Best service ever liveth',
    location: 'Jasmine',
    category: 'Hospitality',
    email: 'emaill@exam.com'
  },
  {
    businessName: 'John Gaye',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: ''
  },
  {
    businessName: 'Infantin Perems',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'email@exam.com',
    phoneNumber: '07033288'
  },
];

export const validBusinessData = [
  // Can Register
  {
    id: 1,
    businessName: 'Yawa Boys',
    description: 'Best service in the universe',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'emailus@exam.com',
    phoneNumber: '07033288343'
  },
  {
    id: 2,
    businessName: 'Desiree Foundation',
    description: 'Best service ever',
    location: 'Lagos',
    category: 'Education',
    email: 'emaildes@exam.com',
    phoneNumber: '07033288340'
  },
  // Modify Business
  {
    businessName: 'John Doe and Brothers',
    description: 'Best service ever rendered',
    location: 'Quebec',
    category: 'Sports',
    email: 'emailj@exam.com',
    phoneNumber: '07033288349'
  },
  // foundEmail
  {
    businessName: 'John Bosco',
    description: 'Best service ever given to people',
    location: 'Katsina',
    category: 'Sports',
    email: 'emaildes@exam.com',
    phoneNumber: '07033288341'
  },
  // Not found
  {
    id: 15,
    businessName: 'John Doerian',
    description: 'Best service ever',
    location: 'Quebec',
    category: 'Hospitality',
    email: 'emaildoe@exam.com',
    phoneNumber: '07033288333'
  },
  // another modify business
  {
    businessName: 'TY mix Limited',
    description: 'Best mix in town',
    location: 'Semedo',
    category: 'Entertainment',
    email: 'tymix@gmail.com',
    phoneNumber: '07033288384'
  },
  // Another business deletion
  {
    businessName: 'Heirs Holdings',
    description: 'Financial Doms',
    location: 'Lagos',
    category: 'Investment',
    email: 'heirs@example.com',
    phoneNumber: '09023456754'
  }
];
