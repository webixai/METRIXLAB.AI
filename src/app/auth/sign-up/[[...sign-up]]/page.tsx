import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)' }}>
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}
