import React from 'react'
import main from "../../config/privacy-policy.json"
const Privacy = () => {
    return (
        <main className='lg:w-8/12 sm:full sm:px-3 lg:mx-32 sm:mx-auto px-3'>
            <header>
                <h1 className='text-3xl'>{`What is Privacy Policy ?`}</h1>
                <p className='mt-3'>{`This Privacy Policy describes how we collect, use, and disclose information that we obtain from visitors to our website. By using our website, you agree to the collection and use of information in accordance with this policy.`}</p>
            </header>
            <section>
                {main.menu.map((element, index) => {
                    return <div key={index}>
                        <h1 className='text-2xl my-1 py-3'>{element.heading}:</h1>
                        <p>{element.reply}</p>
                    </div>
                })}
            </section>
        </main>
    )
}
export default Privacy