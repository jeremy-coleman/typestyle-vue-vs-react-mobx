import { observable } from 'mobx'


let messageStore = observable({
    message: '',
    messages: [
        'I ❤️ VueJS',
        'I ❤️ TypeStyle',
        'I ❤️ one file',
        ],
    setRandomIndex: () => Math.floor(Math.random() * messageStore.messages.length),

    changeMessage: (m) => messageStore.message = m
})

messageStore.message = messageStore.messages[messageStore.setRandomIndex()]

type IMessageStore = typeof messageStore

export { messageStore, IMessageStore }

export default messageStore