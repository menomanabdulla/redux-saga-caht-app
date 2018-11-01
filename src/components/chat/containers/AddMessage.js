
import { connect } from 'react-redux'
import AddMessageComponent from '../addmessage/index'

import { addMessage } from '../../../store/action/index'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)