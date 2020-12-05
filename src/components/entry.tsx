import { observer } from 'mobx-react'
import * as React from 'react'
import { style } from 'typestyle'
import { messageStore } from '../stores/MessageStore'
import { colors } from '../styles'




@observer
class Entry extends React.Component  {
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
    messageStore.changeMessage(eventValue)
  }
  
  render() {
    return (
      <div className={this.componentClass}>
        <label> 
          Write something:  
          <input className={this.inputClass} value={messageStore.message} onChange={e => this.onInputChanged(e.target.value)}/>
        </label>   
      </div>
    )
  }
}

export {Entry}