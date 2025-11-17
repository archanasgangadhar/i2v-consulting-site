export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold">Contact Us</h1>

      <form className="mt-4 space-y-4 max-w-md">
        <input className="w-full border p-2 rounded" placeholder="Name" />
        <input className="w-full border p-2 rounded" placeholder="Email" />
        <textarea className="w-full border p-2 rounded" placeholder="Message" rows="4" />
        <button className="bg-[#D32F2F] text-white px-4 py-2 rounded">
          Send message
        </button>
      </form>
    </div>
  );
}
