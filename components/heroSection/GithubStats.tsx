import axios from 'axios'
import React from 'react'

const GithubStats = async() => {
    const res = await axios.get("http://localhost:3000/api/contribution")
    console.log(res.data.contribution)
    const totalContribution = res.data.contribution?.totalContributions || 0
  return (
    <div>
        <div>
            <h1>Github Stats</h1>
        </div>
        <div className='p-5  rounded-full w-64 h-64 shadow border-4 border-primary flex items-center justify-center'>
            <p className='text-7xl'>{totalContribution}</p>

        </div>
    </div>
  )
}

export default GithubStats