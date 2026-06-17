import docs from './Exercises_docs.md?raw'

export default function Exercises_docs() {
  return (
    <div className='p-6 prose max-w-none'>
      <pre className='whitespace-pre-wrap'>{docs}</pre>
    </div>
  )
}
