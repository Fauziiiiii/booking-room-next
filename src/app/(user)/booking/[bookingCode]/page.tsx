export default function BookingDetailPage({ params }: {params: { bookingCode: string}}) {
    return (
      <div className="container mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-4">Weekly Meeting Marketplace Team Project</h1>
        <p className="text-gray-600 mb-6">lkas dflkamsdfl aslkdfm laksd fasd</p>
  
        <div className="grid grid-cols-2 gap-6 bg-white rounded-lg shadow-md p-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Booking Details</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Date:</strong>  Thu, Nov 19, 2024</li>
              <li><strong>Time:</strong>09:00  - 10:30</li>
              <li><strong>Room:</strong> Conference Room A</li>
              <li><strong>Organizer:</strong> Jhon Doe</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg font-semibold mb-2">Participants</h2>
            <ul className="space-y-2 text-gray-700">
              {/* {bookingData.participants.map((user, index) => ( */}
                {/* <li key={index}>{user.name} ({user.email})</li> */}
                <li>Stevan stevan@gmail.com</li>
                <li>Stevan stevan@gmail.com</li>
                <li>Stevan stevan@gmail.com</li>
                <li>Stevan stevan@gmail.com</li>
               {/* ))} */}
            </ul>
          </div>
        </div>
  
        <div className="flex gap-4 mt-6">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-full">Edit Booking</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full">Cancel Booking</button>
        </div>
      </div>
    );
  }
  