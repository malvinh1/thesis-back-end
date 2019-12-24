import { rule, shield } from 'graphql-shield';

let isAuthenticated = rule()(async (_, __, ctx) => {
  return ctx.userId != '';
});

let permissions = shield({
  Mutation: {
    updateUser: isAuthenticated,
  },
});

export { permissions };
