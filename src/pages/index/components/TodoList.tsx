import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../selectors'
import { TodoItemCreator } from './TodoItemCreator'
import { TodoListItem } from './TodoListItem'
import { TodoListStats } from './TodoListStats'
import { TodoListFilters } from './TodoListFilters'

export const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-solid bg-gray-300 rounded-[10px]">
        <text className="text-center block mb-2">TODO LIST</text>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />

        <div className="w-[300px] overflow-y-scroll max-h-[70vh] border border-green-200 rounded-[10px] min-h-[30vh]">
          {todoList.map(todoItem => (
            <TodoListItem key={todoItem.id} item={todoItem} />
          ))}
        </div>

      </div>
    </div>

  )
}
