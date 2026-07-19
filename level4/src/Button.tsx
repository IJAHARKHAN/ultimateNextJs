import React from 'react'
type ButtonProps = {
    data: string;
    data2?: string; // Optional prop
    action?: () => void; // Optional function prop
    countData?: number; // Optional prop to display count
}

function Button({ data, data2, action, countData }: ButtonProps) {
  return (
    <div className="p-4">
      <p>{data}</p>
      <p>{data2}</p>
      {action && <button onClick={action} className='text-white bg-black mb-2 p-1 rounded-md'>Click me b: {countData}</button>}
    </div>
  )
}

export default Button