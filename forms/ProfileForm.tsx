export default function ProfileForm() {
    return (
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <textarea
          className="w-full border p-3 rounded bg-gray-100"
          placeholder="Write a compelling professional summary that highlights your key strengths and career goals..."
        ></textarea>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="input" placeholder="GitHub Username *" />
          <input className="input" placeholder="LinkedIn Username *" />
          <input className="input" placeholder="Instagram" />
          <input className="input" placeholder="Email Address *" />
        </div>
      </div>
    );
  }