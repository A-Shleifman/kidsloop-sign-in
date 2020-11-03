import { build, fake } from '@jackfranklin/test-data-bot';

interface User {
  email: string;
  password: string;
}

export const buildUser = build<User>('User', {
  fields: {
    email: fake((f) => f.internet.email()),
    password: fake((f) => f.internet.password()),
  },
});
