import React from 'react'

function PricingSwitch({pricingHandler, billing}) {

  const thumb = billing === 'per month' ? 'bg-gray  ' : 'bg-black  '
  const bg = billing === 'per month' ? ' before:bg-black ' : ' before:bg-white '

  
  return (
    <label className="relative inline-block w-[64px] h-[32px]" aria-label="Dark mode">
    <input 
    className="peer opacity-0 w-0 h-0" 
    type="checkbox" 
    // checked={props.checked} 
    onChange={pricingHandler}
    />
    <span className={`absolute cursor-pointer inset-0 rounded-[20px] ${thumb} dark:bg-purple before:absolute 
    before:content-[''] before:h-[25px] before:w-[25px] before:rounded-full before:left-[3px] 
    before:bottom-[4px] ${bg}  peer-checked:before:translate-x-[32px] 
    before:transition-all`}></span>
  </label>
  )
}

export default PricingSwitch