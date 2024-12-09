import { Link } from './Link'

const i18n = {
  en: {
    title: 'About Page',
    ancoreText: 'Home'
  },
  es: {
    title: 'Pagina acerca de nosotros',
    ancoreText: 'Casa'
  }
}

const useI18n = lang => {
  return i18n[lang] || en
}

export default function AboutPage({ routeParams }) {
  const lang = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{lang.title}</h1>
      <Link to='/'>{lang.ancoreText}</Link>
    </>
  )
}
