"use client";

import { ShoppingCart } from "lucide-react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  //
  const router = useRouter();

  //
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push(`/cart`)}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">9</span>
      </Button>
    </div>
  );
};

export default NavbarActions;