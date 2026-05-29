import { useState } from "react";
import { WexAlertDialog } from "@wex/components-react/wex-alert-dialog";
import { WexContextMenu } from "@wex/components-react/wex-context-menu";
import { WexDialog } from "@wex/components-react/wex-dialog";
import { WexDrawer } from "@wex/components-react/wex-drawer";
import { WexDropdownMenu } from "@wex/components-react/wex-dropdown-menu";
import { WexHoverCard } from "@wex/components-react/wex-hover-card";
import { WexPopover } from "@wex/components-react/wex-popover";
import { WexSheet } from "@wex/components-react/wex-sheet";
import { WexTooltip } from "@wex/components-react/wex-tooltip";
import { WexButton } from "@wex/components-react/wex-button";
import { WexAvatar } from "@wex/components-react/wex-avatar";
import { WexInput } from "@wex/components-react/wex-input";
import { WexLabel } from "@wex/components-react/wex-label";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";
import { CalendarDays, ChevronDown, Copy, CreditCard as Edit, FileText, LayoutGrid, Link, LogOut, MoveHorizontal as MoreHorizontal, RefreshCw, Settings, Share, Trash2, User } from "lucide-react";

// ─── Alert Dialog ─────────────────────────────────────────────────────────────

function AlertDialogDemo() {
  return (
    <PageSection title="Alert Dialog">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Default Confirmation">
            <WexAlertDialog>
              <WexAlertDialog.Trigger asChild>
                <WexButton variant="outline">Open Alert Dialog</WexButton>
              </WexAlertDialog.Trigger>
              <WexAlertDialog.Content>
                <WexAlertDialog.Header>
                  <WexAlertDialog.Title>Are you absolutely sure?</WexAlertDialog.Title>
                  <WexAlertDialog.Description>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </WexAlertDialog.Description>
                </WexAlertDialog.Header>
                <WexAlertDialog.Footer>
                  <WexAlertDialog.Cancel>Cancel</WexAlertDialog.Cancel>
                  <WexAlertDialog.Action>Continue</WexAlertDialog.Action>
                </WexAlertDialog.Footer>
              </WexAlertDialog.Content>
            </WexAlertDialog>
          </DemoCell>

          <DemoCell label="Destructive Action">
            <WexAlertDialog>
              <WexAlertDialog.Trigger asChild>
                <WexButton intent="destructive">Delete Item</WexButton>
              </WexAlertDialog.Trigger>
              <WexAlertDialog.Content>
                <WexAlertDialog.Header>
                  <WexAlertDialog.Title>Delete Item</WexAlertDialog.Title>
                  <WexAlertDialog.Description>
                    This will permanently delete this item. This action cannot be undone.
                  </WexAlertDialog.Description>
                </WexAlertDialog.Header>
                <WexAlertDialog.Footer>
                  <WexAlertDialog.Cancel>Cancel</WexAlertDialog.Cancel>
                  <WexAlertDialog.Action className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                  </WexAlertDialog.Action>
                </WexAlertDialog.Footer>
              </WexAlertDialog.Content>
            </WexAlertDialog>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Context Menu ─────────────────────────────────────────────────────────────

function ContextMenuDemo() {
  const [checked, setChecked] = useState(true);
  const [radioVal, setRadioVal] = useState("grid");

  return (
    <PageSection title="Context Menu">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Basic">
            <WexContextMenu>
              <WexContextMenu.Trigger className="flex h-28 w-64 items-center justify-center rounded-[var(--wex-radius-12)] border border-dashed border-border text-sm text-muted-foreground select-none cursor-context-menu">
                Right-click here
              </WexContextMenu.Trigger>
              <WexContextMenu.Content className="w-52">
                <WexContextMenu.Item>
                  <Edit className="mr-2 size-4" aria-hidden />
                  Edit
                </WexContextMenu.Item>
                <WexContextMenu.Item>
                  <Copy className="mr-2 size-4" aria-hidden />
                  Copy
                </WexContextMenu.Item>
                <WexContextMenu.Item>
                  <Share className="mr-2 size-4" aria-hidden />
                  Share
                </WexContextMenu.Item>
                <WexContextMenu.Separator />
                <WexContextMenu.Item className="text-destructive">
                  <Trash2 className="mr-2 size-4" aria-hidden />
                  Delete
                </WexContextMenu.Item>
              </WexContextMenu.Content>
            </WexContextMenu>
          </DemoCell>

          <DemoCell label="With Shortcuts & Checks">
            <WexContextMenu>
              <WexContextMenu.Trigger className="flex h-28 w-64 items-center justify-center rounded-[var(--wex-radius-12)] border border-dashed border-border text-sm text-muted-foreground select-none cursor-context-menu">
                Right-click here
              </WexContextMenu.Trigger>
              <WexContextMenu.Content className="w-56">
                <WexContextMenu.Item>
                  Back <WexContextMenu.Shortcut>⌘[</WexContextMenu.Shortcut>
                </WexContextMenu.Item>
                <WexContextMenu.Item>
                  Forward <WexContextMenu.Shortcut>⌘]</WexContextMenu.Shortcut>
                </WexContextMenu.Item>
                <WexContextMenu.Item>
                  Reload <WexContextMenu.Shortcut>⌘R</WexContextMenu.Shortcut>
                </WexContextMenu.Item>
                <WexContextMenu.Separator />
                <WexContextMenu.CheckboxItem checked={checked} onCheckedChange={setChecked}>
                  Show Toolbar
                </WexContextMenu.CheckboxItem>
                <WexContextMenu.Separator />
                <WexContextMenu.Label>View Mode</WexContextMenu.Label>
                <WexContextMenu.RadioGroup value={radioVal} onValueChange={setRadioVal}>
                  <WexContextMenu.RadioItem value="grid">
                    <LayoutGrid className="mr-2 size-4" aria-hidden />
                    Grid
                  </WexContextMenu.RadioItem>
                  <WexContextMenu.RadioItem value="list">
                    <FileText className="mr-2 size-4" aria-hidden />
                    List
                  </WexContextMenu.RadioItem>
                </WexContextMenu.RadioGroup>
              </WexContextMenu.Content>
            </WexContextMenu>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Dialog ───────────────────────────────────────────────────────────────────

function DialogDemo() {
  return (
    <PageSection title="Dialog">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Basic">
            <WexDialog>
              <WexDialog.Trigger asChild>
                <WexButton variant="outline">Open Dialog</WexButton>
              </WexDialog.Trigger>
              <WexDialog.Content size="md">
                <WexDialog.Header>
                  <WexDialog.Title>Edit Profile</WexDialog.Title>
                  <WexDialog.Description>
                    Make changes to your profile here. Click save when you're done.
                  </WexDialog.Description>
                </WexDialog.Header>
                <div className="grid gap-4 py-2">
                  <div className="grid gap-1.5">
                    <WexLabel htmlFor="dialog-name">Name</WexLabel>
                    <WexInput id="dialog-name" defaultValue="Jane Smith" />
                  </div>
                  <div className="grid gap-1.5">
                    <WexLabel htmlFor="dialog-email">Email</WexLabel>
                    <WexInput id="dialog-email" type="email" defaultValue="jane@wex.com" />
                  </div>
                </div>
                <WexDialog.Footer>
                  <WexDialog.CloseButton variant="outline" intent="primary">
                    Cancel
                  </WexDialog.CloseButton>
                  <WexButton intent="primary">Save Changes</WexButton>
                </WexDialog.Footer>
              </WexDialog.Content>
            </WexDialog>
          </DemoCell>

          <DemoCell label="Size Variants">
            <div className="flex flex-wrap gap-2">
              {(["sm", "md", "lg"] as const).map((size) => (
                <WexDialog key={size}>
                  <WexDialog.Trigger asChild>
                    <WexButton variant="outline" size="sm">{size.toUpperCase()}</WexButton>
                  </WexDialog.Trigger>
                  <WexDialog.Content size={size}>
                    <WexDialog.Header>
                      <WexDialog.Title>{size.toUpperCase()} Dialog</WexDialog.Title>
                      <WexDialog.Description>
                        This is a {size} size dialog panel.
                      </WexDialog.Description>
                    </WexDialog.Header>
                    <WexDialog.Footer>
                      <WexDialog.CloseButton>Close</WexDialog.CloseButton>
                    </WexDialog.Footer>
                  </WexDialog.Content>
                </WexDialog>
              ))}
            </div>
          </DemoCell>

          <DemoCell label="Maximizable">
            <WexDialog>
              <WexDialog.Trigger asChild>
                <WexButton variant="outline">Maximizable Dialog</WexButton>
              </WexDialog.Trigger>
              <WexDialog.Content size="md" maximizable>
                <WexDialog.Header>
                  <WexDialog.Title>Maximizable Dialog</WexDialog.Title>
                  <WexDialog.Description>
                    Click the maximize button in the header to expand this dialog.
                  </WexDialog.Description>
                </WexDialog.Header>
                <p className="text-sm text-muted-foreground py-2">
                  Content area that expands when maximized.
                </p>
                <WexDialog.Footer>
                  <WexDialog.CloseButton>Close</WexDialog.CloseButton>
                </WexDialog.Footer>
              </WexDialog.Content>
            </WexDialog>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Drawer ───────────────────────────────────────────────────────────────────

function DrawerDemo() {
  return (
    <PageSection title="Drawer">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Basic">
            <WexDrawer>
              <WexDrawer.Trigger asChild>
                <WexButton variant="outline">Open Drawer</WexButton>
              </WexDrawer.Trigger>
              <WexDrawer.Content>
                <WexDrawer.Header>
                  <WexDrawer.Title>Drawer Panel</WexDrawer.Title>
                  <WexDrawer.Description>
                    A bottom sheet ideal for mobile-first flows.
                  </WexDrawer.Description>
                </WexDrawer.Header>
                <div className="p-4 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Drag down or click outside to dismiss.
                  </p>
                </div>
                <WexDrawer.Footer className="items-end">
                  <WexDrawer.Close asChild>
                    <WexButton variant="outline">Close</WexButton>
                  </WexDrawer.Close>
                </WexDrawer.Footer>
              </WexDrawer.Content>
            </WexDrawer>
          </DemoCell>

          <DemoCell label="With Form">
            <WexDrawer>
              <WexDrawer.Trigger asChild>
                <WexButton variant="outline">Edit Settings</WexButton>
              </WexDrawer.Trigger>
              <WexDrawer.Content>
                <WexDrawer.Header>
                  <WexDrawer.Title>Edit Settings</WexDrawer.Title>
                  <WexDrawer.Description>
                    Make changes to your settings below.
                  </WexDrawer.Description>
                </WexDrawer.Header>
                <div className="p-4 space-y-4">
                  <div className="space-y-1.5">
                    <WexLabel htmlFor="drawer-name">Display Name</WexLabel>
                    <WexInput id="drawer-name" defaultValue="Jane Smith" />
                  </div>
                  <div className="space-y-1.5">
                    <WexLabel htmlFor="drawer-username">Username</WexLabel>
                    <WexInput id="drawer-username" defaultValue="@janesmith" />
                  </div>
                </div>
                <WexDrawer.Footer className="flex-row justify-end gap-2">
                  <WexDrawer.Close asChild>
                    <WexButton variant="outline">Cancel</WexButton>
                  </WexDrawer.Close>
                  <WexButton intent="primary">Save Changes</WexButton>
                </WexDrawer.Footer>
              </WexDrawer.Content>
            </WexDrawer>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────

function DropdownMenuDemo() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [position, setPosition] = useState("bottom");

  return (
    <PageSection title="Dropdown Menu">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Basic">
            <WexDropdownMenu>
              <WexDropdownMenu.Trigger asChild>
                <WexButton variant="outline">
                  My Account <ChevronDown className="ml-1.5 size-4" aria-hidden />
                </WexButton>
              </WexDropdownMenu.Trigger>
              <WexDropdownMenu.Content className="w-48">
                <WexDropdownMenu.Label>My Account</WexDropdownMenu.Label>
                <WexDropdownMenu.Separator />
                <WexDropdownMenu.Item>
                  <User className="mr-2 size-4" aria-hidden />
                  Profile
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Item>
                  <Settings className="mr-2 size-4" aria-hidden />
                  Settings
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Separator />
                <WexDropdownMenu.Item className="text-destructive">
                  <LogOut className="mr-2 size-4" aria-hidden />
                  Logout
                </WexDropdownMenu.Item>
              </WexDropdownMenu.Content>
            </WexDropdownMenu>
          </DemoCell>

          <DemoCell label="With Shortcuts">
            <WexDropdownMenu>
              <WexDropdownMenu.Trigger asChild>
                <WexButton variant="outline">
                  Edit <ChevronDown className="ml-1.5 size-4" aria-hidden />
                </WexButton>
              </WexDropdownMenu.Trigger>
              <WexDropdownMenu.Content className="w-48">
                <WexDropdownMenu.Item>
                  Undo <WexDropdownMenu.Shortcut>⌘Z</WexDropdownMenu.Shortcut>
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Item>
                  Redo <WexDropdownMenu.Shortcut>⇧⌘Z</WexDropdownMenu.Shortcut>
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Separator />
                <WexDropdownMenu.Item>
                  Cut <WexDropdownMenu.Shortcut>⌘X</WexDropdownMenu.Shortcut>
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Item>
                  Copy <WexDropdownMenu.Shortcut>⌘C</WexDropdownMenu.Shortcut>
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Item>
                  Paste <WexDropdownMenu.Shortcut>⌘V</WexDropdownMenu.Shortcut>
                </WexDropdownMenu.Item>
              </WexDropdownMenu.Content>
            </WexDropdownMenu>
          </DemoCell>

          <DemoCell label="Checkbox & Radio">
            <div className="flex gap-2">
              <WexDropdownMenu>
                <WexDropdownMenu.Trigger asChild>
                  <WexButton variant="outline" size="sm">
                    View <ChevronDown className="ml-1 size-3.5" aria-hidden />
                  </WexButton>
                </WexDropdownMenu.Trigger>
                <WexDropdownMenu.Content className="w-48">
                  <WexDropdownMenu.Label>Appearance</WexDropdownMenu.Label>
                  <WexDropdownMenu.Separator />
                  <WexDropdownMenu.CheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Status Bar
                  </WexDropdownMenu.CheckboxItem>
                </WexDropdownMenu.Content>
              </WexDropdownMenu>

              <WexDropdownMenu>
                <WexDropdownMenu.Trigger asChild>
                  <WexButton variant="outline" size="sm">
                    Panel: {position} <ChevronDown className="ml-1 size-3.5" aria-hidden />
                  </WexButton>
                </WexDropdownMenu.Trigger>
                <WexDropdownMenu.Content className="w-40">
                  <WexDropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
                    <WexDropdownMenu.RadioItem value="top">Top</WexDropdownMenu.RadioItem>
                    <WexDropdownMenu.RadioItem value="bottom">Bottom</WexDropdownMenu.RadioItem>
                    <WexDropdownMenu.RadioItem value="left">Left</WexDropdownMenu.RadioItem>
                  </WexDropdownMenu.RadioGroup>
                </WexDropdownMenu.Content>
              </WexDropdownMenu>
            </div>
          </DemoCell>

          <DemoCell label="With Submenu">
            <WexDropdownMenu>
              <WexDropdownMenu.Trigger asChild>
                <WexButton variant="outline">
                  <MoreHorizontal className="size-4" aria-hidden />
                  <span className="sr-only">More options</span>
                </WexButton>
              </WexDropdownMenu.Trigger>
              <WexDropdownMenu.Content className="w-48">
                <WexDropdownMenu.Item>
                  <Edit className="mr-2 size-4" aria-hidden />
                  Edit
                </WexDropdownMenu.Item>
                <WexDropdownMenu.Sub>
                  <WexDropdownMenu.SubTrigger>
                    <Share className="mr-2 size-4" aria-hidden />
                    Share
                  </WexDropdownMenu.SubTrigger>
                  <WexDropdownMenu.SubContent>
                    <WexDropdownMenu.Item>
                      <Link className="mr-2 size-4" aria-hidden />
                      Copy link
                    </WexDropdownMenu.Item>
                    <WexDropdownMenu.Item>
                      <Share className="mr-2 size-4" aria-hidden />
                      Send via email
                    </WexDropdownMenu.Item>
                  </WexDropdownMenu.SubContent>
                </WexDropdownMenu.Sub>
                <WexDropdownMenu.Separator />
                <WexDropdownMenu.Item disabled>Archive</WexDropdownMenu.Item>
                <WexDropdownMenu.Item className="text-destructive">
                  <Trash2 className="mr-2 size-4" aria-hidden />
                  Delete
                </WexDropdownMenu.Item>
              </WexDropdownMenu.Content>
            </WexDropdownMenu>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Hover Card ───────────────────────────────────────────────────────────────

function HoverCardDemo() {
  return (
    <PageSection title="Hover Card">
      <DemoCard>
        <DemoRow>
          <DemoCell label="User Profile">
            <WexHoverCard>
              <WexHoverCard.Trigger asChild>
                <WexButton variant="ghost" className="text-link underline underline-offset-4">
                  @wexinc
                </WexButton>
              </WexHoverCard.Trigger>
              <WexHoverCard.Content className="w-80">
                <div className="flex justify-between space-x-4">
                  <WexAvatar>
                    <WexAvatar.Fallback className="bg-primary text-primary-foreground">
                      WX
                    </WexAvatar.Fallback>
                  </WexAvatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@wexinc</h4>
                    <p className="text-sm text-muted-foreground">
                      The WEX Design System — components, tokens, and guidelines.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 size-4 opacity-70" aria-hidden />
                      <span className="text-xs text-muted-foreground">Member since December 2023</span>
                    </div>
                  </div>
                </div>
              </WexHoverCard.Content>
            </WexHoverCard>
          </DemoCell>

          <DemoCell label="Link Preview">
            <WexHoverCard>
              <WexHoverCard.Trigger asChild>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-link underline underline-offset-4"
                  onClick={(e) => e.preventDefault()}
                >
                  <Link className="size-3.5" aria-hidden />
                  Design System Docs
                </a>
              </WexHoverCard.Trigger>
              <WexHoverCard.Content className="w-72" side="top">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-[var(--wex-radius-8)] bg-primary flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">W</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">WEX Design System</h4>
                      <p className="text-xs text-muted-foreground">wex.com/design-system</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Official documentation for WEX components, tokens, and design guidelines.
                  </p>
                </div>
              </WexHoverCard.Content>
            </WexHoverCard>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Popover ──────────────────────────────────────────────────────────────────

function PopoverDemo() {
  return (
    <PageSection title="Popover">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Dimensions Form">
            <WexPopover>
              <WexPopover.Trigger asChild>
                <WexButton variant="outline">Open Popover</WexButton>
              </WexPopover.Trigger>
              <WexPopover.Content className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-foreground">Dimensions</h4>
                    <p className="text-xs text-muted-foreground">Set the dimensions for the layer.</p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <WexLabel htmlFor="pop-width">Width</WexLabel>
                      <WexInput id="pop-width" defaultValue="100%" className="col-span-2" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <WexLabel htmlFor="pop-height">Height</WexLabel>
                      <WexInput id="pop-height" defaultValue="auto" className="col-span-2" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <WexLabel htmlFor="pop-max">Max width</WexLabel>
                      <WexInput id="pop-max" defaultValue="1280px" className="col-span-2" />
                    </div>
                  </div>
                </div>
              </WexPopover.Content>
            </WexPopover>
          </DemoCell>

          <DemoCell label="Placement Variants">
            <div className="flex flex-wrap gap-2">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <WexPopover key={side}>
                  <WexPopover.Trigger asChild>
                    <WexButton variant="outline" size="sm" className="capitalize">{side}</WexButton>
                  </WexPopover.Trigger>
                  <WexPopover.Content side={side} className="w-48">
                    <p className="text-sm text-muted-foreground">Popover positioned on the {side}.</p>
                  </WexPopover.Content>
                </WexPopover>
              ))}
            </div>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Sheet ────────────────────────────────────────────────────────────────────

function SheetDemo() {
  return (
    <PageSection title="Sheet">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Side Variants">
            <div className="flex flex-wrap gap-2">
              {(["right", "left", "top", "bottom"] as const).map((side) => (
                <WexSheet key={side}>
                  <WexSheet.Trigger asChild>
                    <WexButton variant="outline" size="sm" className="capitalize">{side}</WexButton>
                  </WexSheet.Trigger>
                  <WexSheet.Content side={side} size="md" className="bolt-right-sheet">
                    <WexSheet.Header>
                      <WexSheet.Title>{side.charAt(0).toUpperCase() + side.slice(1)} Sheet</WexSheet.Title>
                      <WexSheet.Description>
                        This sheet slides in from the {side} edge.
                      </WexSheet.Description>
                    </WexSheet.Header>
                    <div className="flex-1 p-4">
                      <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                    </div>
                    <WexSheet.Footer className="items-end px-4">
                      <WexSheet.CloseButton>Close</WexSheet.CloseButton>
                    </WexSheet.Footer>
                  </WexSheet.Content>
                </WexSheet>
              ))}
            </div>
          </DemoCell>

          <DemoCell label="Navigation Sheet">
            <WexSheet>
              <WexSheet.Trigger asChild>
                <WexButton variant="outline">Open Nav Sheet</WexButton>
              </WexSheet.Trigger>
              <WexSheet.Content side="left" size="sm">
                <WexSheet.Header>
                  <WexSheet.Title>Navigation</WexSheet.Title>
                  <WexSheet.Description>Main application navigation.</WexSheet.Description>
                </WexSheet.Header>
                <nav className="flex flex-col gap-1 p-4">
                  {[
                    { label: "Dashboard", icon: LayoutGrid },
                    { label: "Documents", icon: FileText },
                    { label: "Settings", icon: Settings },
                    { label: "Profile", icon: User },
                  ].map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-center gap-3 rounded-[var(--wex-radius-8)] px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      <Icon className="size-4 text-muted-foreground" aria-hidden />
                      {label}
                    </a>
                  ))}
                </nav>
                <WexSheet.Footer className="items-end px-4">
                  <WexSheet.CloseButton variant="outline" intent="primary">
                    Close
                  </WexSheet.CloseButton>
                </WexSheet.Footer>
              </WexSheet.Content>
            </WexSheet>
          </DemoCell>

          <DemoCell label="Edit Sheet with Save">
            <WexSheet>
              <WexSheet.Trigger asChild>
                <WexButton variant="outline">Edit Profile</WexButton>
              </WexSheet.Trigger>
              <WexSheet.Content side="right" size="md" className="bolt-right-sheet">
                <WexSheet.Header>
                  <WexSheet.Title>Edit Profile</WexSheet.Title>
                  <WexSheet.Description>
                    Update your profile information below.
                  </WexSheet.Description>
                </WexSheet.Header>
                <div className="flex-1 space-y-4 p-4">
                  <div className="space-y-1.5">
                    <WexLabel htmlFor="sheet-name">Full Name</WexLabel>
                    <WexInput id="sheet-name" defaultValue="Jane Smith" />
                  </div>
                  <div className="space-y-1.5">
                    <WexLabel htmlFor="sheet-email">Email</WexLabel>
                    <WexInput id="sheet-email" type="email" defaultValue="jane@wex.com" />
                  </div>
                  <div className="space-y-1.5">
                    <WexLabel htmlFor="sheet-role">Role</WexLabel>
                    <WexInput id="sheet-role" defaultValue="Product Designer" />
                  </div>
                </div>
                <WexSheet.Footer className="flex-row justify-end gap-2 px-4">
                  <WexSheet.CloseButton variant="outline" intent="primary">
                    Cancel
                  </WexSheet.CloseButton>
                  <WexButton intent="primary">Save Changes</WexButton>
                </WexSheet.Footer>
              </WexSheet.Content>
            </WexSheet>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Tooltip ──────────────────────────────────────────────────────────────────

function TooltipDemo() {
  return (
    <PageSection title="Tooltip">
      <DemoCard>
        <DemoRow>
          <DemoCell label="Basic">
            <WexTooltip.Provider>
              <WexTooltip>
                <WexTooltip.Trigger asChild>
                  <WexButton variant="outline">Hover me</WexButton>
                </WexTooltip.Trigger>
                <WexTooltip.Content>
                  <p>This is a tooltip</p>
                </WexTooltip.Content>
              </WexTooltip>
            </WexTooltip.Provider>
          </DemoCell>

          <DemoCell label="Placement Variants">
            <WexTooltip.Provider>
              <div className="flex flex-wrap gap-2">
                {(["top", "right", "bottom", "left"] as const).map((side) => (
                  <WexTooltip key={side}>
                    <WexTooltip.Trigger asChild>
                      <WexButton variant="outline" size="sm" className="capitalize">{side}</WexButton>
                    </WexTooltip.Trigger>
                    <WexTooltip.Content side={side}>
                      <p>Tooltip on {side}</p>
                    </WexTooltip.Content>
                  </WexTooltip>
                ))}
              </div>
            </WexTooltip.Provider>
          </DemoCell>

          <DemoCell label="Icon Buttons">
            <WexTooltip.Provider>
              <div className="flex gap-2">
                {[
                  { icon: Settings, label: "Settings" },
                  { icon: RefreshCw, label: "Refresh" },
                  { icon: Share, label: "Share" },
                  { icon: Trash2, label: "Delete" },
                ].map(({ icon: Icon, label }) => (
                  <WexTooltip key={label} delayDuration={0}>
                    <WexTooltip.Trigger asChild>
                      <WexButton variant="ghost" size="sm" aria-label={label}>
                        <Icon className="size-4" aria-hidden />
                      </WexButton>
                    </WexTooltip.Trigger>
                    <WexTooltip.Content>
                      <p>{label}</p>
                    </WexTooltip.Content>
                  </WexTooltip>
                ))}
              </div>
            </WexTooltip.Provider>
          </DemoCell>

          <DemoCell label="Disabled Button">
            <WexTooltip.Provider>
              <WexTooltip>
                <WexTooltip.Trigger asChild>
                  <span tabIndex={0} className="inline-block">
                    <WexButton disabled intent="primary">
                      Submit
                    </WexButton>
                  </span>
                </WexTooltip.Trigger>
                <WexTooltip.Content>
                  <p>Complete all required fields to submit</p>
                </WexTooltip.Content>
              </WexTooltip>
            </WexTooltip.Provider>
          </DemoCell>
        </DemoRow>
      </DemoCard>
    </PageSection>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────

export function OverlaysDemo() {
  return (
    <>
      <CategoryDivider title="Overlays" id="category-overlays" />
      <AlertDialogDemo />
      <ContextMenuDemo />
      <DialogDemo />
      <DrawerDemo />
      <DropdownMenuDemo />
      <HoverCardDemo />
      <PopoverDemo />
      <SheetDemo />
      <TooltipDemo />
    </>
  );
}
