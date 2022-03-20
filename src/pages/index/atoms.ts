import { atom } from 'recoil'
import type { TodoFilter, TodoItem } from './types'

export const todoListState = atom<TodoItem[]>({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom<TodoFilter>({
  key: 'todoListFilterState',
  default: 'Show All',
})
