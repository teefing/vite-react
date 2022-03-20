import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atoms'
import { getId } from '../utils'

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ])
    setInputValue('')
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setInputValue(value)
  }

  return (
    <div className="flex flex-col">
      <input className="
      rounded-[10px] py-[12px] px-[20px] my-[8px] box-border mx-[5px]
      focus:outline-none focus:border focus:border-solid focus:border-red-700 focus:shadow-md
      " type="text" value={inputValue} onChange={onChange} />
      <button className="
        bg-green-400 border-none text-white py-[15px] px-[32px] text-center inline-block text-[12px] m-[5px] rounded-[10px]
      " onClick={addItem}>Add</button>
    </div>
  )
}
