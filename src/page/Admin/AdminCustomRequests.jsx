import React, { useContext } from 'react';
import { OrderContext } from '../../Context/OrderContext';

const AdminCustomRequests = () => {
  const { customRequests, deleteCustomRequest } = useContext(OrderContext);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this custom request?")) {
      deleteCustomRequest(id);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Custom Arrangement Requests
        </h1>
        <span className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold">
          {customRequests.length} Pending
        </span>
      </div>
      
      {customRequests.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200">
          <p className="text-gray-500">No custom requests found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {customRequests.map((req) => (
            <div 
              key={req.id} 
              className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border-l-8 border-pink-500 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg text-gray-800 truncate" title={req.name}>
                      {req.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">{req.date}</p>
                  </div>
                  <button 
                    onClick={() => handleDelete(req.id)}
                    className="shrink-0 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                  >
                    Delete
                  </button>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex flex-col">
                    <strong className="text-gray-400 text-[10px] uppercase tracking-wider">Email</strong>
                    {/* Fixed: Used break-all for emails to prevent layout break */}
                    <span className="break-all text-blue-600 font-medium">{req.email}</span>
                  </p>
                  <p className="flex flex-col">
                    <strong className="text-gray-400 text-[10px] uppercase tracking-wider">Phone</strong>
                    <span>{req.phone || "Not provided"}</span>
                  </p>
                  
                  <div className="mt-4 p-4 bg-pink-50 rounded-xl border border-pink-100">
                    <p className="font-bold text-pink-800 text-xs mb-1 uppercase tracking-tighter">Vision:</p>
                    {/* Fixed: whitespace-pre-wrap handles breaks and long text properly */}
                    <p className="italic text-gray-700 leading-relaxed whitespace-pre-wrap overflow-hidden">
                      "{req.vision}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminCustomRequests;