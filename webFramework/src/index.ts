import { dataDeserializer } from './models/ResponseDeserializer';
// import { UserForm } from './models/UserForm'

// const userForm = new UserForm(document.getElementById('root'))

// userForm.render()

console.log(
    dataDeserializer(
        '{{173d8098-ea25-dc4c-2c28-d1691ed8ea13}} sent you a friend request!!.'
    )
)