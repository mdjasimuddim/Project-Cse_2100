import PlainLayout from '@/components/master/Plain-Layout'
import PinVerifyForm from '@/components/user/PinVerifyForm'
import React from 'react'
import {cookies} from 'next/headers'
import {redirect} from 'next/navigation'

const page = () => {
  const cookieStore = cookies()
    const token = cookieStore.get('token')
    if(typeof token!=='undefined'){
        redirect('/')
    }

  return (
    <PlainLayout>
      <PinVerifyForm />
    </PlainLayout>
  )
}

export default page