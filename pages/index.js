import { getCookie } from 'cookies-next'
import { verify } from '../services/user'


export default function Home() {
  return (
    <div>
      Pagina segura - Perfil do usuario
    </div>
  )
}

export const getServerSideProps = async ({req, res}) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('Token Invalido!')

    verify(token)
    return {
      props: {}
    }
  } catch {
    return {
      redirect: { 
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}