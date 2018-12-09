import * as React from 'react'

import {observer, inject} from 'mobx-react'
import { style } from 'typestyle'
import { viewHeight } from 'csx'
import { colors } from '../styles'

const heroHeight = viewHeight(35)

import {MessageStore} from '../stores/MessageStore'

type Props = {
  messages?: MessageStore
};

@inject('messages')
@observer
export class Hero extends React.Component<Props, any> {

  componentClass = style({
    backgroundColor: colors.foreground,
    color: colors.background, 
    height: heroHeight,
    lineHeight: heroHeight,
    textAlign: 'center',
    width: '100%'
  })
  heroClass = style({ 
    fontSize: '1.8rem'
  }) 
  render() {
    return (<div className={this.componentClass}>
      <h1 className={this.heroClass}>
        {this.props.messages.message}
      </h1>
    </div>)  
  }
}
