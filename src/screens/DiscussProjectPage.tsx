import React, { useState, useEffect, ChangeEvent } from 'react'

import DiscussForm from '../components/DiscussForm'

interface DiscussProjectPageState {
  name: string
  company: string
  email: string
  phone: string
  projectIdea: string
}

const DiscussProjectPage: React.FC = () => {
  const [data, setData] = useState<DiscussProjectPageState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: ''
    })
  }

  return (
    <>
      <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
    </>
  )
}

export default DiscussProjectPage
