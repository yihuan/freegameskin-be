import Router from 'koa-router'

const router = new Router()

router.get('/ping', async ctx => {
  try {
    ctx.body = {
      status: 'success',
      data: 'pong'
    }
  } catch (e) {
    console.error(e)
  }
})

export default router
