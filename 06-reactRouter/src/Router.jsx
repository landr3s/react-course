import { Children, useEffect, useState } from 'react'
import { match } from 'path-to-regexp'

export const Router = ({
  children,
  routerRoutes = [],
  defaultComponent: DefaultComponent = () => {}
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    console.log(currentPath)

    window.addEventListener('pushstate', onLocationChange)
    window.addEventListener('popstate', onLocationChange)
    return () => {
      window.removeEventListener('pushstate', onLocationChange)
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  let routeParams = {}

  const childrenRoutes = Children.map(children, ({ type, props }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routesToUse = routerRoutes.concat(childrenRoutes).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    console.log(path)

    if (path === currentPath) return true

    const matcherURL = match(path)
    const matched = matcherURL(currentPath)

    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
