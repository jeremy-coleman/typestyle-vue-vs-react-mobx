import * as React from 'react'
import { style } from 'typestyle'
import { colors } from '../styles' 

import {observer, inject} from 'mobx-react'

import {MessageStore} from '../stores/MessageStore'

type Props = {
  messages?: MessageStore
};


@inject('messages')
@observer
export class Entry extends React.Component<Props, any>  {
  inputRef = React.createRef<HTMLInputElement>()

  componentClass = style({
    textAlign: 'center',
    paddingTop: '1rem'
  })

  inputClass = style({
    backgroundColor: colors.background,
    border: 'none',
    color: colors.foreground,
    fontSize: '1.2rem',
    marginLeft: '1rem',
    outline: 'none',
    $nest: {
      '&:focus': {
        outline: `dashed thin ${colors.border}`
      }
    }
  })

  onInputChanged = (eventValue) => {
    this.props.messages.changeMessage(eventValue)
  }
  
  render() {
    return (
      <div className={this.componentClass}>
        <label> 
          Write something:  
          <input className={this.inputClass} value={this.props.messages.message} onChange={e => this.onInputChanged(e.target.value)}/>
        </label>   
      </div>
    )
  }
}