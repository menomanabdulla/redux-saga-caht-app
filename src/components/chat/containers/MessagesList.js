import { connect } from 'react-redux'
import MessagesListComponent from '../messagelist/index'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesListComponent)