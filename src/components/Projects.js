import React from 'react'
import '../App.css'


function Projects() {
    return (
        <div>
            <h1 className='project-header-txt'>
                Projects
            </h1><br/><br/>
            <div className='project-container'>
                <section className='project-item project1'>
                    <h1 className='text'>Pizza Menu</h1>
                    <p className='text-info'>An online menu for a fake pizzeria. I created this as my first ever React.js project.</p>
                    <a className='text-btn' rel="noreferrer"  href='https://github.com/NaPared/FirstReactProject' target='_blank'>
                        <button className='text-btn-style'>Repository
                        </button></a>
                </section>

                <section className='project-item project2'>
                    <h1 className='text'>Tic-Tac-Toe</h1>
                    <p className='text-info'>A tic-tac-toe game that uses a youtuber's backend with some adjustments made by me. One of my first projects.</p>
                    <a className='text-btn' href='https://github.com/NaPared/TicTacToeGame' rel="noreferrer" target='_blank'>
                        <button className='text-btn-style'>Repository
                        </button></a>
                </section>

                <section className='project-item project3'>
                    <h1 className='text'>Portal</h1>
                    <p className='text-info'>A student landing page for their education apps. This app was created for a school in my community.</p>
                    <a className='text-btn' href='https://github.com/NaPared/StudentNavigation' rel="noreferrer" target='_blank'>
                        <button className='text-btn-style'>Repository
                        </button></a>
                </section>
            </div>
        </div>
    )
}

export default Projects
