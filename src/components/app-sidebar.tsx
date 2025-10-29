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
import { ChevronDown, Building2 } from "lucide-react";

const wards = [
	{ id: 1, name: "Surgery"},
	{ id: 2, name: "Emergency"},
	{ id: 3, name: "Cardiology"},
]

export function AppSidebar() {
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
                    <span>Select Workspace</span>
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-popper-anchor-width]"
                  align="start"
                  side="bottom"
                >
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
