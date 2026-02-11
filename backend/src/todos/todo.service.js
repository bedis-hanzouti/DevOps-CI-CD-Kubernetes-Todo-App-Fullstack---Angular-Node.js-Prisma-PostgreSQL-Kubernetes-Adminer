
import prisma from '../utils/prisma.js'

export const getTodos = () => prisma.todo.findMany()
export const createTodo = data => prisma.todo.create({ data })
export const updateTodo = (id, data) =>
  prisma.todo.update({ where: { id: Number(id) }, data })
export const deleteTodo = id =>
  prisma.todo.delete({ where: { id: Number(id) } })
