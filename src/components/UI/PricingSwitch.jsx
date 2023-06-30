import React from 'react'

function PricingSwitch() {
  return (
    <label className="relative inline-block w-[64px] h-[32px]" aria-label="Dark mode">
    <input 
    className="peer opacity-0 w-0 h-0" 
    type="checkbox" 
    // checked={props.checked} 
    // onChange={props.toggle}
    />
    <span className="absolute cursor-pointer inset-0 rounded-[20px] bg-gray dark:bg-purple before:absolute 
    before:content-[''] before:h-[25px] before:w-[25px] before:rounded-full before:left-[3px] 
    before:bottom-[4px] before:bg-black peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[32px] 
    before:transition-all"></span>
  </label>
  )
}

export default PricingSwitch