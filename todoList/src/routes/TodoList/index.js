import { useEffect, useState } from 'react'
import styles from './TodoList.module.scss'
import Category from '../../components/Category'
import AddModal from '../../components/AddModal'
import SearchTodo from '../../components/SearchTodo'
import Detail from '../../components/Detail'
import DeleteAllModal from '../../components/DeleteAllModal'
import useDragDrop from '../../hooks/useDragDrop'
import useTodoList from '../../hooks/useTodoList'
import ToastMessage from '../../components/Toast'
import TodoCheck from '../../components/TodoCheck'
import { CategoryList } from '../../atom/CategoryList'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredTodoListState, todoListCategory, todoListState, openSidebar } from '../../atom/Todolist'
import { cx } from '../../styles'
import { SideMenuIcon } from '../../assets/svgs'

function TodoList() {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [openSide, setOpenSide] = useRecoilState(openSidebar)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const filteredTodoList = useRecoilValue(filteredTodoListState)
  const setCategory = useSetRecoilState(todoListCategory)
  const { handleDragStart, handleDragOver, handleDragEnd, handleOnDrop, grab } = useDragDrop()
  const {
    handleChange,
    handleOpenModal,
    handleCloseModal,
    handleTodoDelete,
    handleTodoEdit,
    currentTask,
    showUpdateMsg,
    showDeleteMsg,
  } = useTodoList()
  const inputChecked = todoList && todoList.find((item) => item.done)

  useEffect(() => {
    const todolist = localStorage.getItem('todoList')
    if (todolist) setTodoList(JSON.parse(localStorage.getItem('todoList')))
  }, [setTodoList])

  useEffect(() => {
    localStorage.removeItem(todoList)
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [inputChecked, todoList])

  const isGrabbing = (index) => {
    return grab && Number(grab.dataset.position) === index
  }

  const handleSide = () => {
    setOpenSide((prev) => !prev)
  }

  const handleCategoryClick = (e) => {
    const { title } = e.currentTarget.dataset

    setCategory(title)
  }

  const handleDeleteAllClick = () => {
    setIsDeleteModalOpen(true)
  }

  const handleAddClick = () => {
    setIsAddModalOpen(true)
  }

  return (
    <div className={cx(styles.todoList, { [styles.sideOpen]: openSide })}>
      <div className={styles.centering}>
        <button type='button' className={styles.openSideBtn} onClick={handleSide}>
          <SideMenuIcon className={styles.openSideBtnBg} />
        </button>
        <SearchTodo />
        <h1>Hi! this is your assignment.</h1>
        <p className={styles.tasksTitle}>Categories</p>
        <div className={styles.categories}>
          <Category onClick={handleCategoryClick} />
          {CategoryList.map((item) => (
            <Category
              key={item.id}
              categoryType={item.title}
              categoryColor={item.color}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        <div className={styles.tasksTopWrapper}>
          <p className={styles.tasksTitle}>Today&apos;s</p>
          <button
            type='button'
            className={styles.deleteButton}
            onClick={handleDeleteAllClick}
            aria-label='Delete All TodoList button'
          >
            Delete All
          </button>
        </div>
        <ul className={styles.todoListScroll}>
          {filteredTodoList.map((todo, index) => (
            <li
              key={`todo-${todo.id}`}
              data-position={index}
              className={cx(
                styles.task,
                { [styles.hidden]: todo.hidden },
                {
                  [styles.grabbing]: isGrabbing(index),
                }
              )}
              draggable='true'
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDragEnd={handleDragEnd}
              onDrop={handleOnDrop}
            >
              <TodoCheck onChange={handleChange} todo={todo} />
              <button
                type='button'
                className={cx(styles.title, { [styles.show]: todo.done })}
                onClick={() => handleOpenModal(todo.id, todo.title)}
              >
                {todo.title}
              </button>
            </li>
          ))}
        </ul>
        <button type='button' className={styles.addButton} aria-label='Add button' onClick={handleAddClick} />
      </div>
      {isAddModalOpen && <AddModal setIsAddModalOpen={setIsAddModalOpen} />}
      {currentTask && (
        <Detail
          item={currentTask}
          handleCloseModal={handleCloseModal}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
        />
      )}
      {isDeleteModalOpen ? <DeleteAllModal setIsDeleteModalOpen={setIsDeleteModalOpen} /> : ''}
      {showUpdateMsg && <ToastMessage message='수정' />}
      {showDeleteMsg && <ToastMessage message='삭제' />}
    </div>
  )
}

export default TodoList
