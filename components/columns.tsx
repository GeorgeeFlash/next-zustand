import Column from './column'
import NewTodoDialog from './new-todo-dialog'

export default function Columns() {
  return (
    <div>
      <NewTodoDialog />

      <section className='h-full w-full mt-10 flex flex-col md:flex-row gap-6 lg:gap-12'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
