import { Users, Surveys, Questions, Options, Answers, SurveyResponses } from './types';

export const fakeUsers: Users[] = [{
    id: '123',
    firstName: 'Tim',
    lastName: 'Ong',
    email: 'test@test.com',
}, {
    id: '345',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@test.com',
}];

export const fakeSurveys: Surveys[] = [{
    id: '789',
    title: 'Food',
    description: 'All about food',
    expirationDate: '2021-04-23T18:25:43.511Z',
    userId: '123',
}, {
    id: '234',
    title: 'Gadgets',
    description: 'All about electronics',
    expirationDate: '2021-03-23T18:25:43.511Z',
    userId: '345',
}];

export const fakeQuestions: Questions[] = [{
    id: '741',
    title: 'Snacks',
    description: 'What is your favorite snack?',
    surveyId: '789',
}, {
    id: '742',
    title: 'Vegetable',
    description: 'What is your favorite veggie?',
    surveyId: '789',
}, {
    id: '147',
    title: 'Cellphone',
    description: 'What is your current cellphone?',
    surveyId: '234',
}];

export const fakeOptions: Options[] = [{
    id: '963',
    title: 'Chips',
    questionId: '741',
}, {
    id: '369',
    title: 'Candys',
    questionId: '741',
}];


export const fakeAnswers: Answers[] = [{
    id: '852',
    questionId: '741',
    optionId: '963',
    surveyResponseId: '777',
}, {
    id: '258',
    questionId: '147',
    optionId: 'Samsung',
    surveyResponseId: '888',
}];

export const fakeSurveyResponses: SurveyResponses[] = [{
    id: '777',
    dataAnswered: '2021-01-11T10:25:43.511Z',
    userId: '',
    surveyId: '789',
}, {
    id: '888',
    dataAnswered: '2021-01-12T17:25:43.511Z',
    userId: '123',
    surveyId: '234',
}];
