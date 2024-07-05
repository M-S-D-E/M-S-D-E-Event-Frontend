import axios from "axios";

const Location = () => {
  // Host event to backend
  const postEvent = async (event) => {
    event.preventDefault();
    // Collect all inputs from form
    const formData = new FormData(event.target);
    // Post data to backend
    const response = await axios.post('https://m-s-d-e-event-backend-1.onrender.com/events', formData);
    console.log(response);
  };

  return (
    <div>
      <div className="p-10 px-5 bg-white">
        <h2 className="text-2xl font-bold text-center mt-10 mb-5">Create Event</h2>
        <form onSubmit={postEvent} className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <label htmlFor="eventNames" className="block text-gray-500 font-bold mb-1 ml-4">NAME</label>
              <input type="text" id="eventNames" name="eventNames" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-8">
              <label htmlFor="eventDate" className="block text-gray-500 font-bold mb-1 ml-4">DATE</label>
              <input type="date" id="eventDate" name="eventDate" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-8">
              <label htmlFor="eventType" className="block text-gray-500 font-bold mb-1 ml-4">EVENT TYPE</label>
              <select id="eventType" name="eventType" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
                <option value="">Select Event Type</option>
                <option value="concerts">concerts</option>
                <option value="serminar">serminar</option>
                <option value="tasting">tasting</option>
              </select>
            </div>
            <div className="mb-8">
              <label htmlFor="price" className="block text-gray-500 font-bold mb-1 ml-4">PRICE</label>
              <input type="number" id="price" name="price" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-8">
              <label htmlFor="eventCompany" className="block text-gray-500 font-bold mb-1 ml-4">COMPANY</label>
              <input type="text" id="eventCompany" name="eventCompany" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-8">
              <label htmlFor="location" className="block text-gray-500 font-bold mb-1 ml-4">LOCATION</label>
              <input type="text" id="location" name="location" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
            <div className="mb-8">
              <label htmlFor="eventStatus" className="block text-gray-500 font-bold mb-1 ml-4">STATUS</label>
              <select id="eventStatus" name="eventStatus" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
                <option value="">Select Status</option>
                <option value="upcoming">upcoming</option>
                <option value="completed">completed</option>
                <option value="postponed">postponed</option>
              </select>
            </div>
            <div className="mb-8">
              <label htmlFor="image" className="block text-gray-500 font-bold mb-1 ml-4">IMAGE</label>
              <input type="file" id="image" name="image" className="h-14 bg-[#f1f1f1] w-full px-3 py-2 border-[#00B4BF] border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button type="submit" className="h-14 w-full md:w-1/2 bg-black text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Location;
