'use client'


import Button from '@/Button'
import React, { useState } from 'react'

export default function page() {

const [count, setCount] = useState<number>(0)

const formSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  e.preventDefault();
 
};

const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value)
};

const btnClick = (e: React.MouseEvent<HTMLButtonElement>) =>{

}

  return (
    <div>
      <Button data="moon khan" data2="john doe"  action={() => setCount(count + 1)} countData={count}/>

        <hr />

        <form action="" onSubmit={formSubmit}>
          <input type="text" name="name" id="name" placeholder='Enter your name' onChange={inputChange}/>
          <button type="button" onClick={btnClick}>Submit</button>
        </form>
    </div>
  )
}
