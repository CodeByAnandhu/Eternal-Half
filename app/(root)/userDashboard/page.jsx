import { UserButton } from "@clerk/nextjs"

function page() {
  return (
    <div className="flex items-center justify-center p-9 font-extrabold text-4xl">
          <UserButton showName fallbackRedirectUrl="/sign-in" />
      <h1>Dashboard</h1>
    </div>
  ) 
}

export default page
