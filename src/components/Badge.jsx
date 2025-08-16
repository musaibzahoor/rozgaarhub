// src/components/Badge.jsx
export default function Badge({ text, color = "bg-blue-500" }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${color}`}
    >
      {text}
    </span>
  );
}
