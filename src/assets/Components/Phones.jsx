import { useLoaderData, Link } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-6">Available Phones</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phones.map((phone) => (
          <div key={phone.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={phone.image} alt={phone.name} className="w-full h-48 object-contain mb-4" />
            <h3 className="text-xl font-semibold">{phone.name}</h3>
            <p className="text-green-600 font-bold text-lg">${phone.price}</p>
            <Link
              to={`/phones/${phone.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
