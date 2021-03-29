import { User, UserProps } from './../models/User'
import { View } from './View'
export class UserForm extends View<User, UserProps> {
  

    template(): string {
        return `
        <div>
           
            <input class='input-name' placeholder=${this.model.get('name')}>
            <button class='set-name'>Change Name</button>
            <button class='set-age'>Random Age</button>
            <button class='btn save-model'>Save</button>
        </div> 
    `
    }

    bindData = (): { [key: string]: (e: KeyboardEvent) => void } => {
        return {
            'input:.input-name': this.onSetInput,
            'click:.set-name': this.onSetName,
            'click:.set-age': this.onSetAge,
            'click:.save-model': this.onSaveModel,
        }
    }
    onSetAge = (): void => {
        this.model.setRandomAge()
    }

    onSaveModel = (): void => {
        this.model.save()
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
