import { Card, CardContent } from "@/components/ui/card";

export function ContestCard() {
  return (
    <Card className="bg-[#282828] border-none text-white overflow-hidden h-full">
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs text-[#9e9e9e] font-medium">Contest Rating</p>
            <p className="text-2xl font-bold">1,483</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#9e9e9e] font-medium">Global Ranking</p>
            <p className="text-sm font-bold">
              395,190
              <span className="text-[#9e9e9e] font-normal text-[10px]">
                /802,558
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-[#9e9e9e] font-medium">Attended</p>
            <p className="text-sm font-bold">1</p>
          </div>
        </div>

        {/* Graph Placeholder */}
        <div className="relative h-24 flex flex-col justify-end">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#3e3e3e] px-2 py-0.5 rounded text-[10px] text-[#9e9e9e]">
            1,483
          </div>
          <div className="w-full h-[1px] bg-orange-500 mb-8 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
          </div>
          <p className="text-center text-[10px] text-[#9e9e9e]">Sept 2025</p>
        </div>
      </CardContent>
    </Card>
  );
}
