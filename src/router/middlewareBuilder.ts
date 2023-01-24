import type { Router } from 'vue-router'

function nextFactory(context: any, middleware: Array<Function>, index: number) {
  const subsequentMiddleware = middleware[index]

  if (!subsequentMiddleware) return context.next

  return (...parameters: any) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters)
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({ ...context, next: nextMiddleware })
  }
}

export default function (router: Router) {
  router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
      const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware]

      const context = {
        from,
        next,
        router,
        to,
      }
      const nextMiddleware = nextFactory(context, middleware, 1)

      return middleware[0]({ ...context, next: nextMiddleware })
    }

    return next()
  })

  return router
}
