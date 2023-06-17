'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {

  const { data: session } = useSession()
  
  const [myPrompts, setMyPrompts] = useState([])

  useEffect(() => {
    
    const fetchPrompts = async () => {
      
      const response = await fetch(`/api/users/${session?.user.id}/prompts`)      

      const responseData = await response.json()      
      setMyPrompts(responseData)
      
    }
    
    if (session?.user.id) {
      
      fetchPrompts()
    }

  }, [])

  const handleEdit = () => {

  }

  const handleDelete = async () => {

  }

  return (
    <Profile 
      name="My"
      desc='Welcome to your personalized profile page'
      data={myPrompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile