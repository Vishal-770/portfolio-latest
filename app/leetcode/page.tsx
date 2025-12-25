import { ProfileDashboard } from "@/components/Leetcode/LeetcodeProfilePage";
import LeetCodeQueryProvider from "@/components/QueryProviders/LeetCodeQueryProvider";

export default function LeetCodeProfilePage() {
  return (
    <LeetCodeQueryProvider>
      <ProfileDashboard />
    </LeetCodeQueryProvider>
  );
}
