import React from 'react'
import AboutContent from '../sub/AboutContent'

const About = () => {
    return (
        <section
        id="about"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9" }}
      >
        <div className='relative flex flex-col h-full w-full'>
                <AboutContent />
            </div>
            </section>
    )
}

export default About