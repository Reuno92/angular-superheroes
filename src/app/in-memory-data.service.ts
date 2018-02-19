import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0, name: 'HTML Boy'},
            { id: 1, name: 'CSS Man'},
            { id: 3, name: 'Twitter Bootstrap niece\'s CSS Man'},
            { id: 5, name: 'FontAwesome Granddaughter\'s CSS Man' },
            { id: 6, name: 'React Dog'},
            { id: 7, name: 'VUEjs baby'},
            { id: 8, name: 'Angularator'},
            { id: 9, name: 'JavaScript Girl'},
            { id: 10, name: 'Php Man'},
            { id: 11, name: 'Symfony widget'},
            { id: 12, name: 'Mr. Nice' },
            { id: 13, name: 'Narco' },
            { id: 14, name: 'Bombasto' },
            { id: 15, name: 'Celeritas' },
            { id: 16, name: 'Magneta' },
            { id: 17, name: 'RubberMan' },
            { id: 18, name: 'Dynama' },
            { id: 19, name: 'Dr IQ' },
            { id: 20, name: 'Magma' },
            { id: 21, name: 'Tornado' }
        ];
        return {heroes};
    }
}