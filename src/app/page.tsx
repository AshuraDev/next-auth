import LoginButton from "@/components/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col h-full">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md">Auth</h1>
        <p className="text-lg">A simple authentication service</p>
        <div className="">
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
