import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function EmailForm() {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                    type="email"
                    placeholder="Email address"
                    className="flex-grow bg-black text-white border-gray-600 text-lg py-6 px-4 rounded-md"
                />
                <Button className="bg-[#008A65] hover:bg-[#007455] text-white text-lg py-6 px-8 rounded-md whitespace-nowrap">
                    Get Started
                </Button>
            </div>
        </div>
    );
}