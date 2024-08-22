import { createFakeContact } from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
  const newContacts = Array(number).fill(0).map(createFakeContact);
  const contacts = await getAllContacts();
  contacts.push(...newContacts);
  await await updateContacts(contacts);
};

generateContacts(5);
