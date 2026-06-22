import docs from './Exercises_Docs.md?raw'

export default function Exercises_Docs() {
  return (
    <div className='p-6 prose max-w-none'>
      <pre className='whitespace-pre-wrap'>{docs}</pre>
    </div>
  )
}
