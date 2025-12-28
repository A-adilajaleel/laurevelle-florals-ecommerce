import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {

  const [contact, setContact] = useState({
    title: "",
    email: "",
    number: "",
    message: ""
  })

  const handleInput = e => {
    const { name, value } = e.target
    setContact(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    let oldmessages = JSON.parse(localStorage.getItem("messages") || "[]")
    oldmessages.push(contact)
    localStorage.setItem("messages", JSON.stringify(oldmessages))

    toast.success("Thank you! Your message has been sent")
    console.log(contact)

    setContact({
      title: "",
      email: "",
      number: "",
      message: ""
    })
  }

 return (
    <div className="min-h-screen  flex flex-col items-center px-4 py-10 bg-[url('/images/secondbg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-14">
     <div className="">
      <h1 className="text-4xl font-bold text-rose-700 mb-3 tracking-wide">
        Contact Us
      </h1>

      <p className="text-rose-500 mb-10 text-center">
        We’d love to hear from you
      </p>
     </div>
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-pink-950 text-white shadow-xl border border-rose-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl"
      >
        <div className="grid grid-cols-1 gap-5">

          <input
            name="title"
            type="text"
            placeholder="Your Name"
            value={contact.title}
            onChange={handleInput}
            required
            className="px-4 py-3 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-200"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={handleInput}
            required
            className="px-4 py-3 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-200"
          />

          <input
            name="number"
            type="text"
            placeholder="Phone Number (optional)"
            value={contact.number}
            onChange={handleInput}
            className="px-4 py-3 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={contact.message}
            onChange={handleInput}
            required
            className="px-4 py-3 rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-200 resize-none h-32"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>

        </div>
      </form>

      <hr className="my-12 w-3/4 border-rose-300" />

      <div className="text-rose-700 bg-white/80 border border-rose-200 rounded-3xl p-6 shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Our Info</h2>

        <p><span className="font-semibold">Address:</span> 123 Blossom Street, London</p>
        <p><span className="font-semibold">Phone:</span> +44 123 456 789</p>

        <p>
          <span className="font-semibold">Email:</span>{' '}
          <a 
            href="mailto:contact@laurevelleflowers.com"
            className="text-rose-600 hover:underline"
          >
            contact@laurevelleflowers.com
          </a>
        </p>

        <p><span className="font-semibold">Hours:</span> MON–SAT, 9am–6pm</p>
      </div>

    </div>
)

}

export default Contact
