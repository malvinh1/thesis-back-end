import { inputObjectType } from 'nexus';

export const QuestionChoices = inputObjectType({
  name: 'QuestionChoices',
  definition(t) {
    t.field('answer', {
      type: 'String',
      required: true,
      list: true,
    });
    t.field('correct', {
      type: 'Boolean',
      required: true,
      list: true,
    });
  },
});
