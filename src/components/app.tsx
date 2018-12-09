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
// the injection key will be 'messages'

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
