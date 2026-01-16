import React, { useContext } from 'react';
import { OrderContext } from '../../Context/OrderContext';

const AdminCustomRequests = () => {
  const { customRequests, deleteCustomRequest } = useContext(OrderContext);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Custom Arrangement Requests</h1>
      
      {customRequests.length === 0 ? (
        <p className="text-gray-500">No custom requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customRequests.map((req) => (
            <div key={req.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-pink-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{req.name}</h3>
                  <p className="text-sm text-gray-500">{req.date}</p>
                </div>
                <button 
                  onClick={() => deleteCustomRequest(req.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Email:</strong> {req.email}</p>
                <p><strong>Phone:</strong> {req.phone}</p>
                <div className="mt-4 p-3 bg-pink-50 rounded-lg">
                  <p className="font-semibold text-pink-800 mb-1">Vision:</p>
                  <p className="italic">"{req.vision}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminCustomRequests