import { useRecoilState } from 'recoil'
import type { TodoItem } from '../types'
import { todoListState } from '../atoms'
import { removeItemAtIndex, replaceItemAtIndex } from '../utils'

interface Props {
  item: TodoItem
}

export const TodoListItem = (props: Props) => {
  const { item } = props

  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(listItem => listItem === item)

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div className="flex items-center w-full justify-evenly p-[10px]">
      <input className="
      rounded-[10px] w-full px-[20px] py-[12px] my-[8px] box-border
      focus:outline-none focus:border focus:border-solid focus:border-red-700 focus:shadow-md
      " type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button className="
      bg-red-400 border-none text-white py-[15px] px-[32px] text-center inline-block text-[12px] m-[5px] rounded-[10px]
      hover:bg-red-500 hover:opacity-80 hover:cursor-pointer
      " onClick={deleteItem}>X</button>
    </div>
  )
}
