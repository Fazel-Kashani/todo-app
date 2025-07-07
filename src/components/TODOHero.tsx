import React from 'react'

interface TODOHeroProps {
    todos_completed: number;
    total_todos: number;
}

function TODOHero ({todos_completed, total_todos}: TODOHeroProps) {
    return(
        <section className="todohero-section">
            <div>
                <p className='text-large'>Task Done</p>
                <p className='text-small'>Keep it up</p>
            </div>
            <div>
                {todos_completed}/{total_todos}
            </div>
        </section>
    )
}

export default TODOHero