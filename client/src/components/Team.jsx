export default function Team() {
  const members = [
    'Mahmoud Magdy Badawy (Team Leader)',
    'Youssef Mohammed Gamal',
    'Aly Sayed Aly',
    'Donya Mousa',
    'Marwan Mostafa'
  ]
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Team Members</h2>
      <ul className="list-disc list-inside text-left">
        {members.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </div>
  )
}
