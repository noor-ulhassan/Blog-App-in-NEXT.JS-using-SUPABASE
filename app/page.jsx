import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action={"auth/logout"} method="post">
        <Button>Logout</Button>
      </form>
    </div>
  );
}

//6w0jwhXssId9dbrN
