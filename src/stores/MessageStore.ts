import { action, makeObservable, observable } from 'mobx'


class MessageStore {

    @observable 
    message

    @observable
    messages = [
        'I ❤️ VueJS',
        'I ❤️ TypeStyle',
        'I ❤️ one file',
    ]

    constructor(){
        makeObservable(this)
        this.message = this.messages[this.setRandomIndex()]
    }


    @action
    setRandomIndex = () => Math.floor(Math.random() * this.messages.length)

    @action
    changeMessage = (m) => this.message = m
  
}

let messageStore = new MessageStore()


type IMessageStore = typeof messageStore

export { messageStore, IMessageStore }

export default messageStore
