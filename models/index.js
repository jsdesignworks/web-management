// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BlankForm, Posts, Authors } = initSchema(schema);

export {
  BlankForm,
  Posts,
  Authors
};