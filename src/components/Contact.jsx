import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center text-center p-4 text-white'>
            <form method='POST' action="https://getform.io/f/fc45c84e-fa80-4955-9761-332b5f69e71d" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-600'>Ota yhteyttä</p>
                    <p className='py-4'>Täytä alla oleva lomake ottaaksesi yhteyttä tai lähetä viesti suoraan sähköpostiin - miskalait@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nimi' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Sähköposti' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" id="" rows="10" placeholder='Viesti' ></textarea>
                <button className='border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center'>Lähetä</button>
            </form>
        </div>
    )
}

export default Contact
