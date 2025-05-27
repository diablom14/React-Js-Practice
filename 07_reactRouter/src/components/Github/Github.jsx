import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  return (
    <div className='bg-gray-500 text-3xl text-white'>
    Github Followers: {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

async function getGithubData(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
export default Github

export {getGithubData}