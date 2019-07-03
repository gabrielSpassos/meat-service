const users = [
    {name: 'Gabriel Passos', email: 'gabriel@gmail.com'},
    {name: 'Maria Souza', email: 'maria@gmail.com'}
];

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users);
    }
}