
import { connect } from 'react-redux'
import SidebarComponent from '../sidebar/index'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComponent)