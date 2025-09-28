import { useState } from "react"
import Input from "../components/ui/Input"
import Button from "../components/ui/Button"
import { useNavigate } from "react-router-dom"
import { useStore } from "../store/useStore"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("student")
  const navigate = useNavigate()
  const { login } = useStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    login({ name, email, role })
    navigate("/dashboard")
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow rounded mt-12">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <div className="mb-4">
          <label className="block mb-1">Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border px-3 py-2 rounded">
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div>
  )
}
