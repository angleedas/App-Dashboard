 function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
export default Card;