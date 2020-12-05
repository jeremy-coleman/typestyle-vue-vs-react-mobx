import { viewHeight } from 'csx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { style } from 'typestyle'
import { messageStore } from '../stores/MessageStore'
import { colors } from '../styles'


const heroHeight = viewHeight(35)



@observer
class Hero extends React.Component {
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
        {messageStore.message}
      </h1>
    </div>)  
  }
}

export { Hero }
