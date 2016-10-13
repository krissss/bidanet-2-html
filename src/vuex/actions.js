import * as types from './mutation-types'

// TODO
export const getAllMessages = ({ dispatch }) => {
  api.getAllMessages(messages => {
    dispatch(types.RECEIVE_ALL, messages)
  })
}