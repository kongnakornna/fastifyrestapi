import { FastifyInstance } from 'fastify'
import indexRouter from '../controllers/index'
import usersRouter from '../controllers/users'
import loginRouter from '../controllers/login'
import uploadRouter from '../controllers/upload'
export default async function router(fastify: FastifyInstance) {
  // router prefix
  fastify.register(indexRouter, { prefix: '/' }) 
  fastify.register(usersRouter, { prefix: '/users' }) 
  fastify.register(loginRouter, { prefix: '/login' }) 
  fastify.register(uploadRouter, { prefix: '/uploads' })
}