import { createStore } from 'redux'

import user from './reducers/userReducer';

export default createStore(user, {});