"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        
      <HoveredLink href="#about">About Me</HoveredLink>
      <HoveredLink href="#skills">Skills</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 lg:grid-cols-3">
            <ProductItem
              title="DoiTung E-learning"
              href="https://github.com/"
              src="https://i.postimg.cc/mrPX5kQ0/home.png"
              description="An interactive e-learning platform for enhancing education."
            />
            <ProductItem
              title="University Dormitory System"
              href="https://github.com/"
              src="https://i.postimg.cc/DwrybfJ3/rentalx.png"
              description="A system to manage student dormitory bookings and assignments."
            />
            <ProductItem
              title="University Sports Complex"
              href="https://github.com/"
              src="https://i.postimg.cc/qMd7BCqx/sportcomplex.png"
              description="A platform to manage sports complex bookings and events."
            />
            <ProductItem
              title="Hackathon Project"
              href="https://github.com/"
              src="https://i.postimg.cc/HnFsbV9d/hackathon.png"
              description="A collaborative hackathon project offering innovative solutions."
            />
          </div>
        </MenuItem>
        <HoveredLink href="#contact">Contact</HoveredLink>
          
        
      </Menu>
    </div>
  );
}
