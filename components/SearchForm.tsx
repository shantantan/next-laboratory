"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const SearchForm = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) {
      return;
    }

    const inputValue = inputRef.current.value;

    const replacedValue = inputValue.replace(/　/g, " ");

    const encodedValue = encodeURIComponent(replacedValue);

    router.push(`/search/${encodedValue}/1`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-md bg-border flex gap-x-[1px]">
        <Input
          ref={inputRef}
          type="text"
          name="value"
          className="rounded-none rounded-s-md bg-background"
        />
        <Button
          type="submit"
          variant="outline"
          className="rounded-none rounded-e-md"
        >
          <Search className="stroke-[1.5] w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
