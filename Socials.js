import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Socials() {
    return (
        <div>
            <ul className='social-icons'>
                <li id='icon' className='twitter'><SocialIcon target='_blank' url="https://twitter.com/nathandevelops1" fgColor='white'/></li><br/>
                <li id='icon' className='instagram'><SocialIcon target='_blank' url="https://www.instagram.com/nathan_pared/" fgColor='white'/></li><br/>
                <li id='icon' className='github'><SocialIcon target='_blank' url="https://github.com/NaPared" fgColor='white'/></li><br/>
                <li id='icon' className='facebook'><SocialIcon target='_blank' url='https://www.facebook.com/nathan.pared' fgColor='white'/></li><br/>
             </ul>
        </div>
    )
}

export default Socials
