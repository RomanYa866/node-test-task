const fs = require('fs')

const allObjects = new Map

fs.readFile('contacts.csv', { encoding : 'utf8' },
    (err, data) => {
        if (err) throw err;
        data = data.split('\n')

        data = data.map(line => line.split(','))
        const cols = data.shift();
        //console.log(data)
        const [locId, name] = [cols.indexOf('location_id'), cols.indexOf('name')];
        const rowData = data.map(line => ([line[locId], line[name]]));
           // console.log(rowData[1])
        const allObjects = new Map
        for(var i=0;i<data.length;++i) {
            for (var j = 0; j < rowData.length; ++j) {
                if (rowData[i][0]) {
                    const object = {
                        name: rowData[j][1],
                        phones: []
                    }
                    allObjects.set(rowData[j][0], object)
                }
            }
        }
       //console.log(allObjects)

fs.readFile('phones.csv', { encoding : 'utf8' },
    (err, data) => {
        if (err) throw err;
        data = data.split('\n')
        data = data.map(line => line.split(','))
        const cols = data.shift();
        const [locId, number] = [cols.indexOf('location_id'), cols.indexOf('number')];
        const rowData = data.map(line => ([line[locId], line[number]]));
        const keys = new Set()
        for(var i=0;i<rowData.length;++i) {
            const object = allObjects.get(rowData[i][1])
            for (var j = 0; j < rowData.length; ++j) {
                if (object) {
                    const phone = {}

                    phone[rowData[i][1]] = rowData[j][1]
                    object.phones.push(phone)

                    keys.add(rowData[j][1])

                    allObjects.set(rowData[j][1], object)
                }
            }
        }
        console.log(allObjects)
    });
});