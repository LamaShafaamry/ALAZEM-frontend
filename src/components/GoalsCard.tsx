import React from 'react'

const GoalsCard = ({data}) => {
  return (
    <div className="max-w-72 flex flex-col gap-5 px-4 py-2 border border-gray-400 rounded-2xl shadow-lg shadow-top text-center">
      <div className="mx-auto">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-24 h-24 object-cover"
        />
      </div>
      <p>{data?.description}</p>
    </div>
  )
}

export default GoalsCard