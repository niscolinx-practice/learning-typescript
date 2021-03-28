interface StoreIndex {
    [key: number]: string
}

interface ResponseData {
    notifications: string[]
    entities: {
        [key: string]: {
            subject: string
            type: string
        }
    }
}


const responseData = {
    notifications: [
        '{{172edb5e-0434-fb4b-abec-96bedc814599}} mentioned you in a post \n{{173d80bc-a995-c2ba-3d80-61d641b482df}}',
        '{{173d8098-ea25-dc4c-2c28-d1691ed8ea13}} sent you a friend request.',
    ],
    entities: {
        '173d80bc-a995-c2ba-3d80-61d641b482df': {
            subject: "@backend what's up again?",
            type: 'POST',
        },
        '172edb5e-0434-fb4b-abec-96bedc814599': {
            subject: 'Power Sunday',
            type: 'USER',
        },
        '173d8098-ea25-dc4c-2c28-d1691ed8ea13': {
            subject: 'Emmanuel Sunday',
            type: 'USER',
        },
    },
}



export const dataDeserializer = (data: string): string => {
    const splitData = data.split('\n').join(' ').split(' ')

    let regex = /^\{{[^}]*\}}$/i

    const storeIndex: StoreIndex = {}

    const entityUids: string[] = []
    const fetchedUids: string[] = []
    const deserializedData: string[] = []

    for (let i = 0; i < splitData.length; i++) {
        if (regex.test(splitData[i])) {
            entityUids.push(splitData[i])
            storeIndex[i] = splitData[i]
        }
    }


    for (let i of entityUids) {
        let temp: string[] = []
        i.split('').map((item) => {
            if (item !== '{' && item !== '}') {
                temp.push(item)
            }
        })

        fetchedUids.push(temp.join(''))
    }


    
    for (let j of fetchedUids) {
        for (let i in responseData.entities) {
            if (i === j) {
                console.log(responseData.entities[j])
                deserializedData.push(responseData.entities[j].subject)
            }
        }
    }

    const index = Object.keys(storeIndex)

    for(let i = 0; i <= splitData.length; i++){
        for(let j = 0; j <= index.length; j++){
            if(i === +index[j]){
                splitData[i] = deserializedData[j]
            }
        }
    }

    const reformedString = splitData.join(' ')


    return reformedString
}

