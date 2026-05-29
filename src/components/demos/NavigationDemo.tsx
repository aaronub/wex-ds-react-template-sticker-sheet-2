import { useState, useEffect, useRef } from "react";
import { WexBreadcrumb } from "@wex/components-react/wex-breadcrumb";
import { WexCommand } from "@wex/components-react/wex-command";
import { WexMenubar } from "@wex/components-react/wex-menubar";
import { WexNavigationMenu, wexNavigationMenuTriggerStyle } from "@wex/components-react/wex-navigation-menu";
import { WexPagination } from "@wex/components-react/wex-pagination";
import { WexSidebar, useWexSidebar } from "@wex/components-react/wex-sidebar";
import { WexTabs } from "@wex/components-react/wex-tabs";
import { WexButton } from "@wex/components-react/wex-button";
import { WexBadge } from "@wex/components-react/wex-badge";
import { WexAvatar } from "@wex/components-react/wex-avatar";
import { Hop as Home, FileText, Settings, User, Calculator, Calendar, ChartBar as BarChart2, Bell, Search, LogOut, CreditCard, Users, ShieldCheck, Inbox, Star, Folder, Tag, ChevronRight } from "lucide-react";
import { CategoryDivider, DemoCard, DemoCell, DemoRow, PageSection } from "../layout";

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function BreadcrumbDemo() {
  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Basic">
          <WexBreadcrumb>
            <WexBreadcrumb.List>
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Home</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Components</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Page>Breadcrumb</WexBreadcrumb.Page>
              </WexBreadcrumb.Item>
            </WexBreadcrumb.List>
          </WexBreadcrumb>
        </DemoCell>

        <DemoCell label="With Ellipsis">
          <WexBreadcrumb>
            <WexBreadcrumb.List>
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Home</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Ellipsis />
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Components</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Page>Breadcrumb</WexBreadcrumb.Page>
              </WexBreadcrumb.Item>
            </WexBreadcrumb.List>
          </WexBreadcrumb>
        </DemoCell>

        <DemoCell label="Deep Path">
          <WexBreadcrumb>
            <WexBreadcrumb.List>
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Dashboard</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Settings</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Link href="#">Billing</WexBreadcrumb.Link>
              </WexBreadcrumb.Item>
              <WexBreadcrumb.Separator />
              <WexBreadcrumb.Item>
                <WexBreadcrumb.Page>Payment Methods</WexBreadcrumb.Page>
              </WexBreadcrumb.Item>
            </WexBreadcrumb.List>
          </WexBreadcrumb>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Command ──────────────────────────────────────────────────────────────────

function CommandDemo() {
  const [open, setOpen] = useState(false);

  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Inline Palette" wide>
          <WexCommand className="rounded-lg border border-border shadow-[var(--wex-shadow-low)] w-full max-w-sm">
            <WexCommand.Input placeholder="Type a command or search..." />
            <WexCommand.List>
              <WexCommand.Empty>No results found.</WexCommand.Empty>
              <WexCommand.Group heading="Suggestions">
                <WexCommand.Item>
                  <Calendar className="mr-2 size-4" aria-hidden />
                  <span>Calendar</span>
                </WexCommand.Item>
                <WexCommand.Item>
                  <Search className="mr-2 size-4" aria-hidden />
                  <span>Search</span>
                  <WexCommand.Shortcut>⌘K</WexCommand.Shortcut>
                </WexCommand.Item>
                <WexCommand.Item>
                  <Calculator className="mr-2 size-4" aria-hidden />
                  <span>Calculator</span>
                </WexCommand.Item>
              </WexCommand.Group>
              <WexCommand.Separator />
              <WexCommand.Group heading="Settings">
                <WexCommand.Item>
                  <User className="mr-2 size-4" aria-hidden />
                  <span>Profile</span>
                  <WexCommand.Shortcut>⌘P</WexCommand.Shortcut>
                </WexCommand.Item>
                <WexCommand.Item>
                  <Settings className="mr-2 size-4" aria-hidden />
                  <span>Settings</span>
                  <WexCommand.Shortcut>⌘S</WexCommand.Shortcut>
                </WexCommand.Item>
              </WexCommand.Group>
            </WexCommand.List>
          </WexCommand>
        </DemoCell>

        <DemoCell label="Dialog Mode (⌘K)">
          <p className="text-xs text-muted-foreground mb-2">
            Press{" "}
            <kbd className="rounded border border-border px-1 py-0.5 font-mono text-xs">⌘K</kbd>{" "}
            or click to open
          </p>
          <WexButton variant="outline" onClick={() => setOpen(true)}>
            <Search className="mr-2 size-4" aria-hidden />
            Open Command Palette
          </WexButton>
          <WexCommand.Dialog open={open} onOpenChange={setOpen}>
            <WexCommand.Input placeholder="Type a command or search..." />
            <WexCommand.List>
              <WexCommand.Empty>No results found.</WexCommand.Empty>
              <WexCommand.Group heading="Pages">
                <WexCommand.Item onSelect={() => setOpen(false)}>
                  <Home className="mr-2 size-4" aria-hidden />
                  <span>Dashboard</span>
                </WexCommand.Item>
                <WexCommand.Item onSelect={() => setOpen(false)}>
                  <FileText className="mr-2 size-4" aria-hidden />
                  <span>Reports</span>
                </WexCommand.Item>
                <WexCommand.Item onSelect={() => setOpen(false)}>
                  <BarChart2 className="mr-2 size-4" aria-hidden />
                  <span>Analytics</span>
                </WexCommand.Item>
              </WexCommand.Group>
              <WexCommand.Separator />
              <WexCommand.Group heading="Actions">
                <WexCommand.Item onSelect={() => setOpen(false)}>
                  <Settings className="mr-2 size-4" aria-hidden />
                  <span>Settings</span>
                  <WexCommand.Shortcut>⌘,</WexCommand.Shortcut>
                </WexCommand.Item>
                <WexCommand.Item onSelect={() => setOpen(false)}>
                  <LogOut className="mr-2 size-4" aria-hidden />
                  <span>Log out</span>
                  <WexCommand.Shortcut>⌘Q</WexCommand.Shortcut>
                </WexCommand.Item>
              </WexCommand.Group>
            </WexCommand.List>
          </WexCommand.Dialog>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Menubar ──────────────────────────────────────────────────────────────────

function MenubarDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [theme, setTheme] = useState("system");

  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Full Menubar" wide>
          <WexMenubar>
            <WexMenubar.Menu>
              <WexMenubar.Trigger>File</WexMenubar.Trigger>
              <WexMenubar.Content>
                <WexMenubar.Item>
                  New Tab <WexMenubar.Shortcut>⌘T</WexMenubar.Shortcut>
                </WexMenubar.Item>
                <WexMenubar.Item>
                  New Window <WexMenubar.Shortcut>⌘N</WexMenubar.Shortcut>
                </WexMenubar.Item>
                <WexMenubar.Item disabled>New Incognito Window</WexMenubar.Item>
                <WexMenubar.Separator />
                <WexMenubar.Sub>
                  <WexMenubar.SubTrigger>Share</WexMenubar.SubTrigger>
                  <WexMenubar.SubContent>
                    <WexMenubar.Item>Email Link</WexMenubar.Item>
                    <WexMenubar.Item>Messages</WexMenubar.Item>
                    <WexMenubar.Item>Notes</WexMenubar.Item>
                  </WexMenubar.SubContent>
                </WexMenubar.Sub>
                <WexMenubar.Separator />
                <WexMenubar.Item>
                  Print <WexMenubar.Shortcut>⌘P</WexMenubar.Shortcut>
                </WexMenubar.Item>
              </WexMenubar.Content>
            </WexMenubar.Menu>

            <WexMenubar.Menu>
              <WexMenubar.Trigger>Edit</WexMenubar.Trigger>
              <WexMenubar.Content>
                <WexMenubar.Item>
                  Undo <WexMenubar.Shortcut>⌘Z</WexMenubar.Shortcut>
                </WexMenubar.Item>
                <WexMenubar.Item>
                  Redo <WexMenubar.Shortcut>⇧⌘Z</WexMenubar.Shortcut>
                </WexMenubar.Item>
                <WexMenubar.Separator />
                <WexMenubar.Item>
                  Find <WexMenubar.Shortcut>⌘F</WexMenubar.Shortcut>
                </WexMenubar.Item>
                <WexMenubar.Separator />
                <WexMenubar.Item>Cut</WexMenubar.Item>
                <WexMenubar.Item>Copy</WexMenubar.Item>
                <WexMenubar.Item>Paste</WexMenubar.Item>
              </WexMenubar.Content>
            </WexMenubar.Menu>

            <WexMenubar.Menu>
              <WexMenubar.Trigger>View</WexMenubar.Trigger>
              <WexMenubar.Content>
                <WexMenubar.CheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </WexMenubar.CheckboxItem>
                <WexMenubar.CheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Side Panel
                </WexMenubar.CheckboxItem>
                <WexMenubar.Separator />
                <WexMenubar.RadioGroup value={theme} onValueChange={setTheme}>
                  <WexMenubar.RadioItem value="light">Light</WexMenubar.RadioItem>
                  <WexMenubar.RadioItem value="dark">Dark</WexMenubar.RadioItem>
                  <WexMenubar.RadioItem value="system">System</WexMenubar.RadioItem>
                </WexMenubar.RadioGroup>
              </WexMenubar.Content>
            </WexMenubar.Menu>

            <WexMenubar.Menu>
              <WexMenubar.Trigger>Help</WexMenubar.Trigger>
              <WexMenubar.Content>
                <WexMenubar.Item>Documentation</WexMenubar.Item>
                <WexMenubar.Item>Keyboard Shortcuts</WexMenubar.Item>
                <WexMenubar.Separator />
                <WexMenubar.Item variant="destructive">Report Issue</WexMenubar.Item>
              </WexMenubar.Content>
            </WexMenubar.Menu>
          </WexMenubar>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Navigation Menu ──────────────────────────────────────────────────────────

function NavigationMenuDemo() {
  return (
    <DemoCard className="overflow-visible">
      <DemoRow>
        <DemoCell label="Mega-menu with Dropdown" wide>
          <WexNavigationMenu>
            <WexNavigationMenu.List>
              <WexNavigationMenu.Item>
                <WexNavigationMenu.Trigger>Getting Started</WexNavigationMenu.Trigger>
                <WexNavigationMenu.Content>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <WexNavigationMenu.Link asChild>
                        <a
                          href="#"
                          className="flex h-full w-full select-none flex-col justify-end rounded-[var(--wex-radius-12)] bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">WEX Design System</div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built on Radix UI and Tailwind CSS.
                          </p>
                        </a>
                      </WexNavigationMenu.Link>
                    </li>
                    <li>
                      <WexNavigationMenu.Link asChild>
                        <a href="#" className="block select-none space-y-1 rounded-[var(--wex-radius-8)] p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Introduction</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Re-usable components built on top of Radix UI.
                          </p>
                        </a>
                      </WexNavigationMenu.Link>
                    </li>
                    <li>
                      <WexNavigationMenu.Link asChild>
                        <a href="#" className="block select-none space-y-1 rounded-[var(--wex-radius-8)] p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Installation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            How to install dependencies and set up the project.
                          </p>
                        </a>
                      </WexNavigationMenu.Link>
                    </li>
                    <li>
                      <WexNavigationMenu.Link asChild>
                        <a href="#" className="block select-none space-y-1 rounded-[var(--wex-radius-8)] p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Typography</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Styles for headings, paragraphs, lists.
                          </p>
                        </a>
                      </WexNavigationMenu.Link>
                    </li>
                  </ul>
                </WexNavigationMenu.Content>
              </WexNavigationMenu.Item>

              <WexNavigationMenu.Item>
                <WexNavigationMenu.Trigger>Components</WexNavigationMenu.Trigger>
                <WexNavigationMenu.Content>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {[
                      { title: "Alert Dialog", desc: "Modal dialog for critical actions." },
                      { title: "Breadcrumb", desc: "Hierarchical page location trail." },
                      { title: "Command", desc: "Keyboard-first command palette." },
                      { title: "Navigation Menu", desc: "Primary site navigation with flyouts." },
                      { title: "Tabs", desc: "Tabbed content panel switching." },
                      { title: "Pagination", desc: "Multi-page content navigation." },
                    ].map(({ title, desc }) => (
                      <li key={title}>
                        <WexNavigationMenu.Link asChild>
                          <a href="#" className="block select-none space-y-1 rounded-[var(--wex-radius-8)] p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{desc}</p>
                          </a>
                        </WexNavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </WexNavigationMenu.Content>
              </WexNavigationMenu.Item>

              <WexNavigationMenu.Item>
                <WexNavigationMenu.Link href="#" className={wexNavigationMenuTriggerStyle()}>
                  Documentation
                </WexNavigationMenu.Link>
              </WexNavigationMenu.Item>
            </WexNavigationMenu.List>
          </WexNavigationMenu>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Pagination ───────────────────────────────────────────────────────────────

function PaginationDemo() {
  const [page, setPage] = useState(3);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const totalItems = 500;
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const pages = [1, 2, 3, 4, 5];

  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Basic" wide>
          <WexPagination>
            <WexPagination.Content>
              <WexPagination.Item>
                <WexPagination.Previous
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(p => Math.max(1, p - 1)); }}
                />
              </WexPagination.Item>
              {pages.map((p) => (
                <WexPagination.Item key={p}>
                  <WexPagination.Link
                    href="#"
                    isActive={page === p}
                    onClick={(e) => { e.preventDefault(); setPage(p); }}
                  >
                    {p}
                  </WexPagination.Link>
                </WexPagination.Item>
              ))}
              <WexPagination.Item>
                <WexPagination.Ellipsis />
              </WexPagination.Item>
              <WexPagination.Item>
                <WexPagination.Link
                  href="#"
                  isActive={page === totalPages}
                  onClick={(e) => { e.preventDefault(); setPage(totalPages); }}
                >
                  {totalPages}
                </WexPagination.Link>
              </WexPagination.Item>
              <WexPagination.Item>
                <WexPagination.Next
                  href="#"
                  onClick={(e) => { e.preventDefault(); setPage(p => Math.min(totalPages, p + 1)); }}
                />
              </WexPagination.Item>
            </WexPagination.Content>
          </WexPagination>
        </DemoCell>
      </DemoRow>

      <div className="border-t border-border">
        <DemoRow>
          <DemoCell label="With Toolbar Helpers" wide>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <WexPagination.RowsPerPage
                  value={rowsPerPage}
                  onChange={(v) => { setRowsPerPage(v); setPage(1); }}
                  options={[10, 25, 50, 100]}
                />
                <WexPagination.PageReport
                  currentPage={page}
                  totalPages={totalPages}
                  totalItems={totalItems}
                  pageSize={rowsPerPage}
                />
              </div>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <WexPagination>
                  <WexPagination.Content>
                    <WexPagination.Item>
                      <WexPagination.First href="#" onClick={(e) => { e.preventDefault(); setPage(1); }} />
                    </WexPagination.Item>
                    <WexPagination.Item>
                      <WexPagination.Previous href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.max(1, p - 1)); }} />
                    </WexPagination.Item>
                    {[1, 2, 3].map((p) => (
                      <WexPagination.Item key={p}>
                        <WexPagination.Link
                          href="#"
                          isActive={page === p}
                          onClick={(e) => { e.preventDefault(); setPage(p); }}
                        >
                          {p}
                        </WexPagination.Link>
                      </WexPagination.Item>
                    ))}
                    <WexPagination.Item>
                      <WexPagination.Next href="#" onClick={(e) => { e.preventDefault(); setPage(p => Math.min(totalPages, p + 1)); }} />
                    </WexPagination.Item>
                    <WexPagination.Item>
                      <WexPagination.Last href="#" onClick={(e) => { e.preventDefault(); setPage(totalPages); }} />
                    </WexPagination.Item>
                  </WexPagination.Content>
                </WexPagination>
                <WexPagination.JumpToPage
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                />
              </div>
            </div>
          </DemoCell>
        </DemoRow>
      </div>
    </DemoCard>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const PAGE_CONTENT: Record<string, { title: string; description: string; stats?: { label: string; value: string }[] }> = {
  inbox: {
    title: "Inbox",
    description: "Review incoming messages and action items from across your fleet.",
    stats: [
      { label: "Unread", value: "12" },
      { label: "Flagged", value: "4" },
      { label: "Archived", value: "38" },
    ],
  },
  dashboard: {
    title: "Dashboard",
    description: "High-level overview of spending, transactions, and fleet health.",
    stats: [
      { label: "Total Spend", value: "$24,830" },
      { label: "Transactions", value: "1,204" },
      { label: "Active Cards", value: "87" },
    ],
  },
  analytics: {
    title: "Analytics",
    description: "Drill into spending trends, category breakdowns, and anomalies.",
    stats: [
      { label: "Fuel", value: "42%" },
      { label: "Maintenance", value: "27%" },
      { label: "Tolls", value: "31%" },
    ],
  },
  reports: {
    title: "Reports",
    description: "Download and schedule detailed reports for finance and compliance.",
    stats: [
      { label: "Scheduled", value: "6" },
      { label: "Pending", value: "2" },
      { label: "Delivered", value: "48" },
    ],
  },
  cards: {
    title: "Cards",
    description: "Issue, manage, and set controls on payment cards for your fleet.",
    stats: [
      { label: "Active", value: "87" },
      { label: "Suspended", value: "3" },
      { label: "Pending", value: "5" },
    ],
  },
  drivers: {
    title: "Drivers",
    description: "View driver profiles, assignments, and compliance status.",
    stats: [
      { label: "Total", value: "132" },
      { label: "On Route", value: "54" },
      { label: "Off Duty", value: "78" },
    ],
  },
  saved: {
    title: "Saved Filters",
    description: "Quick-access filters you've pinned for repeated use.",
  },
  tags: {
    title: "Tags",
    description: "Organize transactions and vehicles with custom tags.",
  },
  security: {
    title: "Security",
    description: "Manage roles, permissions, and audit logs.",
  },
  settings: {
    title: "Settings",
    description: "Configure account preferences, notifications, and integrations.",
  },
};

function SidebarInsetContent({ activeItem }: { activeItem: string }) {
  const { state, toggleSidebar } = useWexSidebar();
  const page = PAGE_CONTENT[activeItem] ?? PAGE_CONTENT.dashboard;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <WexButton
            size="sm"
            variant="ghost"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            className="text-muted-foreground"
          >
            <ChevronRight
              className={`size-4 transition-transform duration-200 ${state === "expanded" ? "rotate-180" : ""}`}
              aria-hidden
            />
          </WexButton>
          <h3 className="font-display text-sm font-semibold text-foreground">{page.title}</h3>
        </div>
        <WexBadge intent="secondary" className="text-xs">Fleet Portal</WexBadge>
      </div>

      <div className="flex-1 p-5 overflow-auto">
        <p className="text-sm text-muted-foreground mb-5">{page.description}</p>

        {page.stats && (
          <div className="grid grid-cols-3 gap-3">
            {page.stats.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-[var(--wex-radius-12)] border border-border bg-muted/30 px-4 py-3"
              >
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="font-display text-lg font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SidebarDemo() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Collapsible Sidebar — Groups, Badges, Sub-menus & Toggle" wide>
          <div ref={containerRef} className="flex h-[9
            00px] w-full rounded-[var(--wex-radius-12)] border border-border overflow-hidden">
            <WexSidebar.Provider defaultOpen={true}>

              <WexSidebar collapsible="icon" className="overflow-x-hidden">

                {/* Header */}
                <WexSidebar.Header className="border-b border-sidebar-border">
                  <div className="flex items-center justify-center gap-2 px-3 py-1.5 group-data-[collapsible=icon]:justify-center group-data-[state=expanded]:justify-start">
                    <div className="size-7 shrink-0 rounded-[var(--wex-radius-8)] bg-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">W</span>
                    </div>
                    <span className="font-semibold text-sm text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                      WEX Fleet
                    </span>
                  </div>
                </WexSidebar.Header>

                {/* Search */}
                <div className="px-2 pt-2 group-data-[collapsible=icon]:hidden">
                  <WexSidebar.Input placeholder="Search..." />
                </div>

                {/* Content */}
                <WexSidebar.Content className="p-2 gap-1 overflow-x-hidden">

                  {/* Main group */}
                  <WexSidebar.Group>
                    <WexSidebar.GroupLabel>Main</WexSidebar.GroupLabel>
                    <WexSidebar.GroupContent>
                      <WexSidebar.Menu>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "inbox"}
                            onClick={() => setActiveItem("inbox")}
                            tooltip="Inbox"
                          >
                            <Inbox className="size-4" aria-hidden />
                            <span>Inbox</span>
                            <WexSidebar.MenuBadge>12</WexSidebar.MenuBadge>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "dashboard"}
                            onClick={() => setActiveItem("dashboard")}
                            tooltip="Dashboard"
                          >
                            <Home className="size-4" aria-hidden />
                            <span>Dashboard</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "analytics"}
                            onClick={() => setActiveItem("analytics")}
                            tooltip="Analytics"
                          >
                            <BarChart2 className="size-4" aria-hidden />
                            <span>Analytics</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "reports"}
                            onClick={() => setActiveItem("reports")}
                            tooltip="Reports"
                          >
                            <FileText className="size-4" aria-hidden />
                            <span>Reports</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                      </WexSidebar.Menu>
                    </WexSidebar.GroupContent>
                  </WexSidebar.Group>

                  <WexSidebar.Separator />

                  {/* Fleet group with sub-menu */}
                  <WexSidebar.Group>
                    <WexSidebar.GroupLabel>Fleet</WexSidebar.GroupLabel>
                    <WexSidebar.GroupContent>
                      <WexSidebar.Menu>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "cards"}
                            onClick={() => setActiveItem("cards")}
                            tooltip="Cards"
                          >
                            <CreditCard className="size-4" aria-hidden />
                            <span>Cards</span>
                            <WexSidebar.MenuBadge>8</WexSidebar.MenuBadge>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "drivers"}
                            onClick={() => setActiveItem("drivers")}
                            tooltip="Drivers"
                          >
                            <Users className="size-4" aria-hidden />
                            <span>Drivers</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                      </WexSidebar.Menu>
                    </WexSidebar.GroupContent>
                  </WexSidebar.Group>

                  <WexSidebar.Separator />

                  {/* Organize group */}
                  <WexSidebar.Group>
                    <WexSidebar.GroupLabel>Organize</WexSidebar.GroupLabel>
                    <WexSidebar.GroupContent>
                      <WexSidebar.Menu>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "saved"}
                            onClick={() => setActiveItem("saved")}
                            tooltip="Saved Filters"
                          >
                            <Star className="size-4" aria-hidden />
                            <span>Saved Filters</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                        <WexSidebar.MenuItem>
                          <WexSidebar.MenuButton
                            isActive={activeItem === "tags"}
                            onClick={() => setActiveItem("tags")}
                            tooltip="Tags"
                          >
                            <Tag className="size-4" aria-hidden />
                            <span>Tags</span>
                          </WexSidebar.MenuButton>
                        </WexSidebar.MenuItem>
                      </WexSidebar.Menu>
                    </WexSidebar.GroupContent>
                  </WexSidebar.Group>

                </WexSidebar.Content>

                {/* Footer */}
                <WexSidebar.Footer className="border-t border-sidebar-border overflow-x-hidden">
                  <WexSidebar.Menu>
                    <WexSidebar.MenuItem>
                      <WexSidebar.MenuButton
                        isActive={activeItem === "security"}
                        onClick={() => setActiveItem("security")}
                        tooltip="Security"
                      >
                        <ShieldCheck className="size-4" aria-hidden />
                        <span>Security</span>
                      </WexSidebar.MenuButton>
                    </WexSidebar.MenuItem>
                    <WexSidebar.MenuItem>
                      <WexSidebar.MenuButton
                        isActive={activeItem === "settings"}
                        onClick={() => setActiveItem("settings")}
                        tooltip="Settings"
                      >
                        <Settings className="size-4" aria-hidden />
                        <span>Settings</span>
                      </WexSidebar.MenuButton>
                    </WexSidebar.MenuItem>
                  </WexSidebar.Menu>

                  <div className="flex items-center gap-2 px-2 py-2 group-data-[collapsible=icon]:hidden">
                    <WexAvatar className="size-7 shrink-0">
                      <WexAvatar.Fallback className="text-xs bg-muted text-muted-foreground">JS</WexAvatar.Fallback>
                    </WexAvatar>
                    <div className="flex flex-col min-w-0 flex-1">
                      <span className="text-xs font-medium text-sidebar-foreground truncate">Jane Smith</span>
                      <span className="text-[10px] text-muted-foreground truncate">jane@wex.com</span>
                    </div>
                    <LogOut className="size-3.5 text-muted-foreground shrink-0" aria-hidden />
                  </div>
                </WexSidebar.Footer>

                <WexSidebar.Rail />
              </WexSidebar>

              <WexSidebar.Inset className="flex-1 bg-background overflow-hidden">
                <SidebarInsetContent activeItem={activeItem} />
              </WexSidebar.Inset>

            </WexSidebar.Provider>
          </div>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Tabs ─────────────────────────────────────────────────────────────────────

function TabsDemo() {
  return (
    <DemoCard>
      <DemoRow>
        <DemoCell label="Default (Pill)">
          <WexTabs defaultValue="account" className="w-full max-w-sm">
            <WexTabs.List>
              <WexTabs.Trigger value="account">Account</WexTabs.Trigger>
              <WexTabs.Trigger value="password">Password</WexTabs.Trigger>
              <WexTabs.Trigger value="billing">Billing</WexTabs.Trigger>
            </WexTabs.List>
            <WexTabs.Content value="account" className="pt-3">
              <p className="text-sm text-muted-foreground">Manage your account details and preferences.</p>
            </WexTabs.Content>
            <WexTabs.Content value="password" className="pt-3">
              <p className="text-sm text-muted-foreground">Update your password and security settings.</p>
            </WexTabs.Content>
            <WexTabs.Content value="billing" className="pt-3">
              <p className="text-sm text-muted-foreground">View invoices and manage payment methods.</p>
            </WexTabs.Content>
          </WexTabs>
        </DemoCell>

        <DemoCell label="Underline Variant">
          <WexTabs defaultValue="overview" className="w-full max-w-sm">
            <WexTabs.List variant="underline">
              <WexTabs.Trigger value="overview">Overview</WexTabs.Trigger>
              <WexTabs.Trigger value="analytics">Analytics</WexTabs.Trigger>
              <WexTabs.Trigger value="reports">Reports</WexTabs.Trigger>
            </WexTabs.List>
            <WexTabs.Content value="overview" className="pt-3">
              <p className="text-sm text-muted-foreground">Summary and key performance metrics.</p>
            </WexTabs.Content>
            <WexTabs.Content value="analytics" className="pt-3">
              <p className="text-sm text-muted-foreground">Detailed analytics and trends over time.</p>
            </WexTabs.Content>
            <WexTabs.Content value="reports" className="pt-3">
              <p className="text-sm text-muted-foreground">Exportable reports and data summaries.</p>
            </WexTabs.Content>
          </WexTabs>
        </DemoCell>

        <DemoCell label="Scrollable">
          <WexTabs defaultValue="tab1" className="w-full max-w-xs">
            <WexTabs.ScrollableList>
              <WexTabs.Trigger value="tab1">Dashboard</WexTabs.Trigger>
              <WexTabs.Trigger value="tab2">Analytics</WexTabs.Trigger>
              <WexTabs.Trigger value="tab3">Reports</WexTabs.Trigger>
              <WexTabs.Trigger value="tab4">Settings</WexTabs.Trigger>
              <WexTabs.Trigger value="tab5">Integrations</WexTabs.Trigger>
              <WexTabs.Trigger value="tab6">Notifications</WexTabs.Trigger>
            </WexTabs.ScrollableList>
            <WexTabs.Content value="tab1" className="pt-3">
              <p className="text-sm text-muted-foreground">Dashboard overview content.</p>
            </WexTabs.Content>
            <WexTabs.Content value="tab2" className="pt-3">
              <p className="text-sm text-muted-foreground">Analytics content.</p>
            </WexTabs.Content>
            <WexTabs.Content value="tab3" className="pt-3">
              <p className="text-sm text-muted-foreground">Reports content.</p>
            </WexTabs.Content>
            <WexTabs.Content value="tab4" className="pt-3">
              <p className="text-sm text-muted-foreground">Settings content.</p>
            </WexTabs.Content>
            <WexTabs.Content value="tab5" className="pt-3">
              <p className="text-sm text-muted-foreground">Integrations content.</p>
            </WexTabs.Content>
            <WexTabs.Content value="tab6" className="pt-3">
              <p className="text-sm text-muted-foreground">Notifications content.</p>
            </WexTabs.Content>
          </WexTabs>
        </DemoCell>
      </DemoRow>
    </DemoCard>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function NavigationDemo() {
  return (
    <>
      <CategoryDivider title="Navigation" id="category-navigation" />

      <PageSection title="Breadcrumb">
        <BreadcrumbDemo />
      </PageSection>

      <PageSection title="Command">
        <CommandDemo />
      </PageSection>

      <PageSection title="Menubar">
        <MenubarDemo />
      </PageSection>

      <PageSection title="Navigation Menu">
        <NavigationMenuDemo />
      </PageSection>

      <PageSection title="Pagination">
        <PaginationDemo />
      </PageSection>

      <PageSection title="Sidebar">
        <SidebarDemo />
      </PageSection>

      <PageSection title="Tabs">
        <TabsDemo />
      </PageSection>
    </>
  );
}
