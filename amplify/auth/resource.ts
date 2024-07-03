import { defineAuth } from '@aws-amplify/backend';
import { UserAttributeKey } from 'aws-amplify/auth';


/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },

  userAttributes: {
    birthdate: {
      mutable: true,
      required: false,
    },
    name: {
      mutable: true,
      required: false,
    },
    email: {
      mutable: true,
      required: true,
    }
  }

});
