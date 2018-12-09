import * as React from 'react'

import {Provider} from 'mobx-react'

import { style } from 'typestyle'
import { Entry, Hero } from '.'
import { colors } from '../styles'

import {observer, inject} from 'mobx-react'

import messageStore from '../stores/MessageStore'
import {MessageStore} from '../stores/MessageStore'

let stores = {
  messages: new MessageStore()
}


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