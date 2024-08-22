import updateContacts from './updateContacts.js';

const removeAllContacts = async () => {
  updateContacts([]);
};

removeAllContacts();
