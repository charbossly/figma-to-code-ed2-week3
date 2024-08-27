import { SignUp } from "@clerk/nextjs";
import NoAuthLayout from "@/components/layouts/noAuthLayout";

export default function Page() {
  return (
    <NoAuthLayout>
      <SignUp />
    </NoAuthLayout>
  );
}
