import { useState, useEffect } from "react"

const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const msgs = JSON.parse(localStorage.getItem("messages") || "[]")
    setMessages(msgs)
  }, [])

  const deleteMessage = (index) => {
    const newMessages = messages.filter((_, i) => i !== index)
    setMessages(newMessages)
    localStorage.setItem("messages", JSON.stringify(newMessages))
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-5">Messages</h2>

      {messages.length === 0 ? (
        <p>No messages yet</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="p-4 border rounded shadow">
              <h3 className="font-bold text-lg">{msg.title}</h3>
              <p><span className="font-semibold">Email:</span> {msg.email}</p>
              {msg.number && <p><span className="font-semibold">Phone:</span> {msg.number}</p>}
              <p className="mt-2">{msg.message}</p>
              <button
                onClick={() => deleteMessage(i)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Messages

