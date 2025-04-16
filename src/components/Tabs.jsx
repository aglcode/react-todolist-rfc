import React from 'react'

const Tabs = (props) => {
  
  const { todos, selectedTabs, setSelectedTabs } = props
  const tabs = ['All', 'Open', 'Complete']

  return (
    
    <nav className=' tab-container'>
       {tabs.map((tab, tabIndex) => {
         const numOfTask = tab === 'All' ? todos.length : tab === 'Open' ? 
             todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length

        return (
          <button key={tabIndex} onClick={() => {setSelectedTabs(tab)}}
          className={' tab-button' + (tab === selectedTabs ? ' tab-selected' : '')}>

            <h4>{tab} 
              <span>({ numOfTask })</span>
            </h4>

          </button>
        )
       })}
       <hr />
    </nav>
  )
}

export default Tabs