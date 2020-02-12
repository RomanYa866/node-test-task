const fs = require('fs')

const results = []

fs.readFile('contacts.csv', { encoding : 'utf8' },
    (err, data) => {
        if (err) throw err;
        data = data.split('\n')
        data = data.map(line => line.split(','))
        const cols = data.shift();
        const [locId, name] = [cols.indexOf('location_id'), cols.indexOf('name')];
        data = data.map(line => ([line[locId], line[name]]));
            console.log(data)
        // for(var i=0;i<data.length;++i){
        //     const object = {
        //         name: data[],
        //
        //     }
    });
fs.readFile('phones.csv', { encoding : 'utf8' },
    (err, data) => {
        if (err) throw err;
        data = data.split('\n')
        data = data.map(line => line.split(','))
        const cols = data.shift();
        const [locId, number] = [cols.indexOf('location_id'), cols.indexOf('number')];
        data = data.map(line => ([line[locId], line[number]]));
        console.log(data)
    });
