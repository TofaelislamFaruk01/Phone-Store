import { useLoaderData, Link } from "react-router-dom";

const PhoneDetails = () => {
  const phone = useLoaderData();
  console.log(phone);

  return (
    <>
      {phone.id && (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row gap-8">
          {/* Phone Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Phone Details Section */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Phone Name & Description */}
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{phone.name}</h1>
              <p className="text-lg text-gray-700 mb-6">{phone.description}</p>
            </div>

            {/* Phone Price & Buy Button */}
            <div>
              <p className="text-2xl font-semibold text-blue-600 mb-4">${phone.price}</p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back to Phones Button */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <Link
          to="/phones"
          className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-md transition duration-300 transform hover:scale-105"
        >
          ← Back to Phones
        </Link>
      </div>
    </>
  );
};

export default PhoneDetails;
