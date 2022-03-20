
import { Link } from 'react-router-dom'
import { TodoList } from '@/pages/index/components/TodoList'

const IndexPage = (): JSX.Element => {
  return (
    <div>
      <p className="text-xl text-slate-500 px-2">
        Index Page{' '}
        <span className="text-blue-600">
          <Link to="/second">Second</Link>
        </span>
      </p>
      <TodoList />
    </div>
  )
}

export default IndexPage
