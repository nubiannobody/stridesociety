import React, { useState, useEffect } from 'react';

interface Walk {
  name: string;
  date: string;
  time: string;
  location: string;
  miles: string;
  difficulty: string;
  spots: string;
  type: string;
  summary: string;
  image: string;
  theme: string;
  highlights: string[];
}

const WalkRegistration: React.FC = () => {
  const [walk, setWalk] = useState<Walk | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    walkShoes: '',
    walkLevel: '',
    image: ''
  });

  useEffect(() => {
    const storedWalk = localStorage.getItem('selectedWalk');
    if (storedWalk) {
      setWalk(JSON.parse(storedWalk));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!walk) {
      alert('No walk selected.');
      return;
    }
    alert(`✨🙌🏾 Registered for ${walk.name}!`);
  };

  return (
    <div className="WalkRegistration px-4 py-8">
      {walk && (
        <>
          <h2 className="text-3xl font-bold text-center mb-6">
            ✨You're registering for <em>{walk.name}</em>✨
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow p-4 mb-8">
            {walk.image && (
              <img
                src={walk.image}
                alt={walk.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2">{walk.name}</h3>
            <p className="text-gray-600 mb-2">{walk.theme}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              {walk.highlights?.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 mb-4 text-gray-700">
              <p><strong>Miles:</strong> {walk.miles}</p>
              <p><strong>Difficulty:</strong> {walk.difficulty}</p>
              <p><strong>Type:</strong> {walk.type}</p>
              <p><strong>Location:</strong> {walk.location}</p>
              <p><strong>Date:</strong> {walk.date}</p>
              <p><strong>Time:</strong> {walk.time}</p>
              <p><strong>Spots left:</strong> {walk.spots}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Email Address</label>
              <input
                name="Email Address"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Confirm Email Address</label>
              <input
                name="Confirm Email Address"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Walk Shoes</label>
              <input
                name="walkShoes"
                value={formData.walkShoes}
                onChange={handleChange}
                placeholder="Brand/model"
                className="border rounded p-2 w-full"
              />
            </div>
            <div>
              <label className="block font-semibold">Walk Level</label>
              <select
                name="walkLevel"
                value={formData.walkLevel}
                onChange={handleChange}
                required
                className="border rounded p-2 w-full"
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div className="mt-6 flex gap-4 max-w-md mx-auto">
              <button
                type="submit"
                className="flex-1 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Submit Registration
              </button>
              <a
                href="/"
                className="flex-1 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors duration-200 inline-block text-center"
              >
                Back to Home
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default WalkRegistration;
