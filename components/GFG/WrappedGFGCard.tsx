import LeetCodeQueryProvider from "../QueryProviders/LeetCodeQueryProvider";
import { GFGCard } from "./gfg-card";

const WrappedGFGCard = () => {
  return (
    <LeetCodeQueryProvider>
      <GFGCard />
    </LeetCodeQueryProvider>
  );
};

export default WrappedGFGCard;
