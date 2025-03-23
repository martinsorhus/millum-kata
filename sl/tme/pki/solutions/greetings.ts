export const greetings = (name: string) => {
    return (greeting: string) => `${greeting}, ${name}`;
};
