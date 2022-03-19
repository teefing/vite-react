import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../atoms'
import type { TodoFilter } from '../types'

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState)

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event
    setFilter(value as TodoFilter)
  }

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  )
}
