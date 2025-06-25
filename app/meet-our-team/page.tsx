import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100">
      <h1 className="text-4xl font-bold text-primary-green mb-4">Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">This page is coming soon. Please check back later!</p>
      <span className="text-6xl animate-bounce">🚧</span>
    </section>
  )
}

export default page