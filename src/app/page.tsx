import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Juicy Habits</h1>
      <nav>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/logout">Logout</Link>
      </nav>
    </div>
  );
}
