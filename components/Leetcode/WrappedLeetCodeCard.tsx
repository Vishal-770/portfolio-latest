import LeetCodeQueryProvider from "../QueryProviders/LeetCodeQueryProvider";
import { LeetCodeCard } from "./leetcode-card";

const WrappedLeetCodeCard = () => {
  return (
    <LeetCodeQueryProvider>
      <LeetCodeCard />
    </LeetCodeQueryProvider>
  );
};

export default WrappedLeetCodeCard;
