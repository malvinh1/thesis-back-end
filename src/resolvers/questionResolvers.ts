import { Context } from '../main';
import { queryField, arg, stringArg } from 'nexus/dist';

export let questions = queryField('questions', {
  type: 'Question',
  list: true,
  args: {
    category: arg({ type: 'Category', required: true }),
  },
  resolve: async (_, { category }, ctx: Context) => {
    return await ctx.prisma.questions({
      where: {
        category,
      },
    });
  },
});

export let createQuestion = queryField('createQuestion', {
  type: 'Question',
  args: {
    category: arg({ type: 'Category', required: true }),
    description: stringArg({ required: true }),
    questionChoices: arg({ type: 'QuestionChoices', required: true }),
  },
  resolve: async (
    _,
    { category, description, questionChoices },
    ctx: Context,
  ) => {
    return await ctx.prisma.createQuestion({
      category,
      description,
      choices: {
        create: {
          answer: questionChoices.answer[0],
          correct: questionChoices.correct[0],
        },
      },
    });
  },
});
