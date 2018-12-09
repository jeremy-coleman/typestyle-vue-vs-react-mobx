import * as React from 'react'

import {Provider} from 'mobx-react'

import { style } from 'typestyle'
import { Entry, Hero } from '.'
import { colors } from '../styles'

import {observer, inject} from 'mobx-react'

import messageStore from '../stores/MessageStore'
import {MessageStore} from '../stores/MessageStore'


type Props = {
  messages?: MessageStore
};



@inject('messages')
@observer
export class App extends React.Component<Props, any>  {
  
  styles = style({
    backgroundColor: colors.background,
    color: colors.foreground,
    height: '100%',
    width: '100%'
  })
  
  render() {
    return (
      <div className={this.styles}> 
        <Hero/>
        <Entry/> 
      </div>
    )
  }
}

//you can also do 
// let stores = {
//   messages: new MessageStore()
// }
// <Provider {...stores}/>
// if you havn't used mobx before, this is pretty crucial to understand for using @inject
// the @inject decorator or inject() hoc uses the name directly provided to the provider component
// or the keys of the spread object you provide. IE: in the above case using store ={messages: new MessageStore()}
// the injection key will be 'messages'. the injected store will be found on props or you can destructure functional comps
// to the store directly 
//
// the following 4 ex: are equivalent
//1)
//let MyWidget = inject('messages')(observer(props: MessageStore) => <div>{props.messages.message}</div>
//2)
//let MyWidget = inject('messages')(observer({messages}: MessageStore) => <div>{messages.message}</div>
//3)
// @inject('messages')
// class MyWidget extends React.Component{render(){return <div>{this.props.messages.message}</div> }}
//4)
// @inject('messages')
// class MyWidget extends React.Component{render() const{messages} = this.props {return <div>{messages.message}</div> }}
//
// also note that you can use the Class definition itself as your type definition but you must ensure you're using
// an instance of that store in your provider by calling new 
//
// A common way to manage this is by exporting the class store itself and a default export of a new instance
// as in 
// export {MyStore}
// export default new MyStore()
// this way, you have some consistency with dealing with the data in your store instances
//
// if you create a store that you intend to have multiple instances of (like a generic toggle store), 
// i've found it best practice to name it as a Value and not Store. aka ToggleValue
// then you can have class instances such as drawerToggle = new ToggleValue(), dropDownToggle = new ToggleValue(), etc.
//

@observer
export class AppContainer extends React.Component<any, any>  {
  render() {
    return (
      <Provider messages={messageStore}>
        <App/>
      </Provider>
    )
  }
}
