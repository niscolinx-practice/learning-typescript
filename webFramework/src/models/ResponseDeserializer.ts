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

interface Response {
    notifications: string[],
    entities : {
        [key: string] : {
            subject: string,
            type: string,
        }
    }
}

const dataDeserializer = (response: Response): string => {


    return ''
}


dataDeserializer(responseData)
