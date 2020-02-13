const fs = require('fs')

fs.readFile('contacts.csv', {encoding: 'utf8'},
    (err, data) => {
        if (err) throw err;
        const lines = data.split('\n')
        let arrIdAndNames = []
        for (i = 0; i < lines.length; i++) {
            let temp = lines[i].split(',')
            arrIdAndNames.push(
                {
                    location_id: temp[1],
                    name: temp[4]
                }
            )
        }
        //console.log(arrIdAndNames)
        fs.readFile('phones.csv', {encoding: 'utf8'},
            (err, data) => {
                if (err) throw err;
                const lines = data.split('\n')
                let arrPhones = []

                for (i = 0; i < lines.length; i++) {
                    let temp = lines[i].split(',')
                    arrPhones.push(
                        {
                            location_id: temp[2],
                            phoneNumber: temp[8]
                        }
                    )
                }
                //console.log(arrPhones)
                let finalArr = []
                for (i = 1; i < arrIdAndNames.length; i++) {
                    let obj = {
                        name: arrIdAndNames[i].name,
                        phones: [{phone1: ""}, {phone2: ""},]
                    }
                    for (j = 1;j < arrPhones.length;j++) {
                        if (arrIdAndNames[i].location_id === arrPhones[j].location_id){
                            obj.phones[1].phone2 = arrPhones[j].phoneNumber
                        } else{
                            obj.phones[0].phone1 = arrPhones[j].phoneNumber
                        }
                    }
                    finalArr.push({[i]:obj})
                }
                fs.writeFileSync('people.json', JSON.stringify(finalArr,null, ''))
                }
            )

    })


