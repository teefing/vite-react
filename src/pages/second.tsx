import { Link } from 'react-router-dom'

const SeconPage = () => {
  return (
    <div>
      <p className="text-xl text-slate-500 px-2">
        Second Page{' '}
        <span className="text-blue-600">
          <Link to="/">Home</Link>
        </span>
      </p>
    </div>
  )
}

export default SeconPage
