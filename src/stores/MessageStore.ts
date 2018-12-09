import {observable, action} from 'mobx'

class MessageStore {

    @observable message

    @observable messages = [
        'I ❤️ VueJS',
        'I ❤️ TypeStyle',
        'I ❤️ one file',
        ]


    constructor(){
        this.message = this.messages[this.setRandomIndex()]
    }

//   mounted() {
//     const input = this.inputRef.current
//     const len = input.value.length
//     input.setSelectionRange(len, len)
//   }

    @action
    setRandomIndex = () => Math.floor(Math.random() * this.messages.length)

    @action
    changeMessage = (m) => this.message = m
  
}

export {MessageStore}
export default new MessageStore()