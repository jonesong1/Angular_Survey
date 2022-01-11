export interface Users { 
    id: string,
    firstName: string,
    lastName: string,
    email: string,
};

export interface Surveys {
    id: string,
    title: string,
    description: string,
    expirationDate: string,
    userId: string,
}

export interface Questions {
    id: string,
    title: string,
    description: string,
    surveyId: string,
}

export interface Options {
    id: string,
    title: string,
    questionId: string,
}

export interface Answers {
    id: string,
    questionId: string,
    optionId: string,
    surveyResponseId: string,
}

export interface SurveyResponses {
    id: string,
    dataAnswered: string,
    userId: string,
    surveyId: string,
}