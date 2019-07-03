const users = [
    {id: '1', name: 'Gabriel Passos', email: 'gabriel@gmail.com'},
    {id: '2', name: 'Maria Souza', email: 'maria@gmail.com'}
];

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users);
    }

    static findById(id: string): Promise<any> {
        return new Promise(resolve => {
            const filtered = users.filter(users => users.id === id);
            let user = undefined;
            if(filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}