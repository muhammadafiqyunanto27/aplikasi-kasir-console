import promptSync from 'prompt-sync'

const prompt = promptSync();

export const getInput = (question: string) => {
    return prompt(question);
};

