import { User } from './../models/User'
export class UserForm {
  

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <h3>Name: ${this.model.get('name')}</h3>
            <h3>Age: ${this.model.get('age')}</h3>
            <input class='input-name'/>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Random Age</button>
        </div> 
    `
    }

    bindData = (): { [key: string]: (e: KeyboardEvent) => void } => {
        return {
            'input:.input-name': this.onSetInput,
            'click:.set-name': this.onSetName,
            'click:.set-age': this.onSetAge,
        }
    }
    onSetAge = (e: KeyboardEvent): void => {
        this.model.setRandomAge()
    }

    onSetInput = (e: KeyboardEvent): void => {
        this.inputValue.push((e!.target as HTMLInputElement).value)

        if (this.inputValue.length > 1) {
            this.inputValue.shift()
        }
    }

    onSetName = () => {
        const name = this.inputValue.join('')
        this.model.setName(name)
    }

}
