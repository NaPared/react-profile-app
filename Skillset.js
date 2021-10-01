import React from 'react'
import '../App.css';


function Skillset() {
    return (
        <div className='skills-list-container'>
            <div className='skills-list'>
                <img className='lan-img' alt='' id='html' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'/>
                <img className='lan-img' alt='' id='css' src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'/>
                <img className='lan-img' alt='' id='react' src='https://coryrylan.com/assets/images/posts/types/react.svg'/>
                <img className='lan-img' alt='' id='javaScript' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'/>
            </div>
        </div>
    )
}

export default Skillset
