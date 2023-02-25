import { useRouter } from 'next/router'
import React from 'react'
import Recovery from '../../components/Recovery'

export default function prueba() {

    const router = useRouter()
    const { token } = router.query

  return (
    <div><Recovery/>
    <p>
        {token}
    </p>
    </div>
  )
}

