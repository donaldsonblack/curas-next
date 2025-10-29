"use client";

import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Building2, Check } from "lucide-react";

const wards = [
  { id: 1, name: "Surgery" },
  { id: 2, name: "Emergency" },
  { id: 3, name: "Cardiology" },
];

export function AppSidebar() {
  const [selectedWard, setSelectedWard] = useState(wards[0]);

  return (
    <Sidebar variant="floating" collapsible="icon">
      {/*Scrollable content area*/}
      <SidebarContent>
        {/*Logical grouping with spacing*/}
        <SidebarGroup>
          {/*List container (ul)*/}
          <SidebarMenu>
            {/*Individual list item (li) */}
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <Building2 />
                    <span>{selectedWard.name}</span>
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-popper-anchor-width]"
                  align="start"
                  side="bottom"
                >
                  {wards.map((ward) => (
                    <DropdownMenuItem
                      key={ward.id}
                      onClick={() => setSelectedWard(ward)}
                    >
                      <span>{ward.name}</span>
										{selectedWard.id === ward.id && (
											<Check className="ml-auto h-4 w-4"/>
										)}
                    </DropdownMenuItem>
									))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
