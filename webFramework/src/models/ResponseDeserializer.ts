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

export const dataDeserializer = (data: string): void => {
    const splitData = data.split('\n').join(' ').split(' ')

    let regex = /^\{{[^}]*\}}$/i

    const entityUids = []
    const fetchedUids = []
    let count: number = 0
    for (let i = 0; i < splitData.length; i++) {
        if (regex.test(splitData[i])) {
            entityUids.push(splitData[i])
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
    console.log(fetchedUids)

}

//dataDeserializer("{{172edb5e-0434-fb4b-abec-96bedc814599}} mentioned you in a post \n{{173d80bc-a995-c2ba-3d80-61d641b482df}}")