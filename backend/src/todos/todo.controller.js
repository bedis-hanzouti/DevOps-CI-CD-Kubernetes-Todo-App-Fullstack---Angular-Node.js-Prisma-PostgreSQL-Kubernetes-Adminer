
import * as service from './todo.service.js'

export const getAll = async (_, res) => res.json(await service.getTodos())
export const create = async (req, res) => res.json(await service.createTodo(req.body))
export const update = async (req, res) => res.json(await service.updateTodo(req.params.id, req.body))
export const remove = async (req, res) => {
  await service.deleteTodo(req.params.id)
  res.json({ deleted: true })
}
