import { useState } from "react";
import { WexAvatar } from "@wex/components-react/wex-avatar";
import { WexBadge } from "@wex/components-react/wex-badge";
import { WexButton } from "@wex/components-react/wex-button";
import { WexCarousel } from "@wex/components-react/wex-carousel";
import { WexChart } from "@wex/components-react/wex-chart";
import { WexDataTable, WexDataTableColumnHeader } from "@wex/components-react/wex-data-table";
import { WexEmpty } from "@wex/components-react/wex-empty";
import { WexItem } from "@wex/components-react/wex-item";
import { WexKbd } from "@wex/components-react/wex-kbd";
import { WexTable } from "@wex/components-react/wex-table";
import { WexCheckbox } from "@wex/components-react/wex-checkbox";
import { WexTimeline } from "@wex/components-react/wex-timeline";
import { WexTree } from "@wex/components-react/wex-tree";
import type { TreeNode } from "@wex/components-react/wex-tree";
import type { ColumnDef } from "@tanstack/react-table";
import { BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  Plus, Inbox, FileQuestionMark as FileQuestion, Folder, File,
  MoveHorizontal as MoreHorizontal, CircleCheck as CheckCircle,
  Clock, CircleAlert as AlertCircle, Package,
} from "lucide-react";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

// ─── Static data ─────────────────────────────────────────────────────────────

const chartData = [
  { month: "Jan", revenue: 4200, expenses: 2400 },
  { month: "Feb", revenue: 3800, expenses: 1800 },
  { month: "Mar", revenue: 5100, expenses: 2900 },
  { month: "Apr", revenue: 4700, expenses: 2100 },
  { month: "May", revenue: 6200, expenses: 3200 },
  { month: "Jun", revenue: 5800, expenses: 2700 },
];

const barChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  expenses: { label: "Expenses", color: "hsl(var(--chart-2))" },
};

const lineChartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
};

type Person = { id: number; name: string; email: string; role: string; status: string };

const tableData: Person[] = [
  { id: 1, name: "Alice Martin", email: "alice@wex.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Chen", email: "bob@wex.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol Davis", email: "carol@wex.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Lee", email: "david@wex.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eva Torres", email: "eva@wex.com", role: "Admin", status: "Pending" },
];

const dataTableColumns: ColumnDef<Person>[] = [
  { accessorKey: "name", header: ({ column }) => <WexDataTableColumnHeader column={column} title="Name" /> },
  { accessorKey: "email", header: ({ column }) => <WexDataTableColumnHeader column={column} title="Email" /> },
  { accessorKey: "role", header: ({ column }) => <WexDataTableColumnHeader column={column} title="Role" /> },
  { accessorKey: "status", header: ({ column }) => <WexDataTableColumnHeader column={column} title="Status" /> },
];

const treeNodes: TreeNode[] = [
  {
    key: "src",
    label: "src",
    icon: <Folder className="size-4" />,
    children: [
      { key: "app", label: "App.tsx", icon: <File className="size-4" /> },
      { key: "main", label: "main.tsx", icon: <File className="size-4" /> },
      {
        key: "components",
        label: "components",
        icon: <Folder className="size-4" />,
        children: [
          { key: "button", label: "Button.tsx", icon: <File className="size-4" /> },
          { key: "input", label: "Input.tsx", icon: <File className="size-4" /> },
        ],
      },
    ],
  },
  { key: "readme", label: "README.md", icon: <File className="size-4" /> },
  { key: "package", label: "package.json", icon: <File className="size-4" /> },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function DataDisplayDemo() {
  const [treeSelected, setTreeSelected] = useState<string>("app");
  const [treeExpanded, setTreeExpanded] = useState<string[]>(["src", "components"]);
  const [treeFilterSelected, setTreeFilterSelected] = useState<string | null>(null);
  const [tableChecked, setTableChecked] = useState<Record<number, boolean>>({});

  return (
    <>
      <CategoryDivider title="Data Display" id="category-data-display" />

      <PageSection title="Avatar">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Sizes">
              <WexAvatar size="xs"><WexAvatar.Fallback>XS</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="sm"><WexAvatar.Fallback>SM</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="md"><WexAvatar.Fallback>MD</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="lg"><WexAvatar.Fallback>LG</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="xl"><WexAvatar.Fallback>XL</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="2xl"><WexAvatar.Fallback>2X</WexAvatar.Fallback></WexAvatar>
            </DemoCell>

            <DemoCell label="Shapes">
              <WexAvatar size="lg" shape="circle"><WexAvatar.Fallback>AB</WexAvatar.Fallback></WexAvatar>
              <WexAvatar size="lg" shape="square"><WexAvatar.Fallback>CD</WexAvatar.Fallback></WexAvatar>
            </DemoCell>

            <DemoCell label="Status Badge">
              {[
                { status: "online" as const, img: "https://i.pravatar.cc/80?img=1", initials: "AM" },
                { status: "busy" as const, img: "https://i.pravatar.cc/80?img=5", initials: "BC" },
                { status: "away" as const, img: "https://i.pravatar.cc/80?img=9", initials: "CD" },
                { status: "offline" as const, img: "https://i.pravatar.cc/80?img=12", initials: "DL" },
              ].map(({ status, img, initials }) => (
                <WexAvatar key={status} size="lg">
                  <WexAvatar.Image src={img} alt={initials} />
                  <WexAvatar.Fallback>{initials}</WexAvatar.Fallback>
                  <WexAvatar.Badge status={status} size="lg" />
                </WexAvatar>
              ))}
            </DemoCell>

            <DemoCell label="Group (max=3)">
              <WexAvatar.Group max={3}>
                <WexAvatar><WexAvatar.Fallback>A</WexAvatar.Fallback></WexAvatar>
                <WexAvatar><WexAvatar.Fallback>B</WexAvatar.Fallback></WexAvatar>
                <WexAvatar><WexAvatar.Fallback>C</WexAvatar.Fallback></WexAvatar>
                <WexAvatar><WexAvatar.Fallback>D</WexAvatar.Fallback></WexAvatar>
                <WexAvatar><WexAvatar.Fallback>E</WexAvatar.Fallback></WexAvatar>
              </WexAvatar.Group>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      <PageSection title="Badge">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Intents" wide>
              <WexBadge intent="default">Default</WexBadge>
              <WexBadge intent="primary">Primary</WexBadge>
              <WexBadge intent="secondary">Secondary</WexBadge>
              <WexBadge intent="outline">Outline</WexBadge>
              <WexBadge intent="success">Success</WexBadge>
              <WexBadge intent="warning">Warning</WexBadge>
              <WexBadge intent="destructive">Destructive</WexBadge>
              <WexBadge intent="info">Info</WexBadge>
              <WexBadge intent="contrast">Contrast</WexBadge>
            </DemoCell>

            <DemoCell label="Pill Shape">
              <WexBadge intent="primary" pill>Primary</WexBadge>
              <WexBadge intent="success" pill>Active</WexBadge>
              <WexBadge intent="warning" pill>Pending</WexBadge>
              <WexBadge intent="destructive" pill>Error</WexBadge>
              <WexBadge intent="info" pill>Info</WexBadge>
            </DemoCell>

            <DemoCell label="Counts">
              <WexBadge intent="destructive">3</WexBadge>
              <WexBadge intent="primary">12</WexBadge>
              <WexBadge intent="warning" pill>99+</WexBadge>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      <PageSection title="Carousel">
        <DemoCard title="Horizontal — 3 Slides">
          <div className="flex justify-center py-6">
            <div className="w-80 px-10">
              <WexCarousel opts={{ loop: true }}>
                <WexCarousel.Content>
                  {["Slide One", "Slide Two", "Slide Three"].map((label, i) => (
                    <WexCarousel.Item key={i}>
                      <div className="flex h-32 items-center justify-center rounded-[var(--wex-radius-12)] bg-muted">
                        <span className="font-display text-lg font-semibold text-muted-foreground">{label}</span>
                      </div>
                    </WexCarousel.Item>
                  ))}
                </WexCarousel.Content>
                <WexCarousel.Previous />
                <WexCarousel.Next />
              </WexCarousel>
            </div>
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="Chart">
        <div className="grid grid-cols-2 gap-4">
          <DemoCard title="Bar Chart — Revenue vs Expenses">
            <div className="p-6">
              <WexChart.Container config={barChartConfig} style={{ height: 208 }}>
                <BarChart data={chartData} width={500} height={200}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <WexChart.Tooltip content={<WexChart.TooltipContent />} />
                  <WexChart.Legend content={<WexChart.LegendContent />} />
                  <WexChart.Bar dataKey="revenue" fill="var(--color-revenue)" />
                  <WexChart.Bar dataKey="expenses" fill="var(--color-expenses)" />
                </BarChart>
              </WexChart.Container>
            </div>
          </DemoCard>

          <DemoCard title="Line Chart — Revenue Trend">
            <div className="p-6">
              <WexChart.Container config={lineChartConfig} style={{ height: 208 }}>
                <LineChart data={chartData} width={500} height={200}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <WexChart.Tooltip content={<WexChart.TooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="var(--color-revenue)"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </WexChart.Container>
            </div>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Data Table">
        <DemoCard title="Filterable, Sortable, Paginated">
          <div className="p-6">
            <WexDataTable
              columns={dataTableColumns}
              data={tableData}
              searchKey="name"
              searchPlaceholder="Search users..."
              enableRowSelection
              pageSize={10}
              pageSizeOptions={[5, 10, 20]}
            />
          </div>
        </DemoCard>
      </PageSection>

      <PageSection title="Empty">
        <div className="grid grid-cols-3 gap-4">
          <DemoCard title="With Icon + Action">
            <div className="p-6">
              <WexEmpty>
                <WexEmpty.Media variant="icon">
                  <Inbox className="size-8" />
                </WexEmpty.Media>
                <WexEmpty.Header>
                  <WexEmpty.Title>No messages</WexEmpty.Title>
                  <WexEmpty.Description>Start a conversation to see messages here.</WexEmpty.Description>
                </WexEmpty.Header>
                <WexEmpty.Content>
                  <WexButton size="sm">New Message</WexButton>
                </WexEmpty.Content>
              </WexEmpty>
            </div>
          </DemoCard>

          <DemoCard title="No Results">
            <div className="p-6">
              <WexEmpty>
                <WexEmpty.Media variant="icon">
                  <FileQuestion className="size-8" />
                </WexEmpty.Media>
                <WexEmpty.Header>
                  <WexEmpty.Title>No results found</WexEmpty.Title>
                  <WexEmpty.Description>Try adjusting your search or filters.</WexEmpty.Description>
                </WexEmpty.Header>
                <WexEmpty.Content>
                  <WexButton variant="outline" size="sm">Clear Filters</WexButton>
                </WexEmpty.Content>
              </WexEmpty>
            </div>
          </DemoCard>

          <DemoCard title="Text Only">
            <div className="p-6">
              <WexEmpty>
                <WexEmpty.Header>
                  <WexEmpty.Title>Nothing here yet</WexEmpty.Title>
                  <WexEmpty.Description>Create your first item to get started.</WexEmpty.Description>
                </WexEmpty.Header>
                <WexEmpty.Content>
                  <WexButton size="sm"><Plus />Create Item</WexButton>
                </WexEmpty.Content>
              </WexEmpty>
            </div>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Item">
        <div className="grid grid-cols-2 gap-4">
          <DemoCard title="Default — With Avatar + Actions">
            <WexItem.Group aria-label="User list">
              <WexItem>
                <WexItem.Media variant="image">
                  <WexAvatar><WexAvatar.Fallback>JD</WexAvatar.Fallback></WexAvatar>
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>John Doe</WexItem.Title>
                  <WexItem.Description>Software Engineer</WexItem.Description>
                </WexItem.Content>
                <WexItem.Actions>
                  <WexButton variant="ghost" iconOnly aria-label="More options for John Doe">
                    <MoreHorizontal className="size-4" aria-hidden="true" />
                  </WexButton>
                </WexItem.Actions>
              </WexItem>
              <WexItem.Separator />
              <WexItem>
                <WexItem.Media variant="image">
                  <WexAvatar><WexAvatar.Fallback>AM</WexAvatar.Fallback></WexAvatar>
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>Alice Martin</WexItem.Title>
                  <WexItem.Description>Product Designer</WexItem.Description>
                </WexItem.Content>
                <WexItem.Actions>
                  <WexButton variant="ghost" iconOnly aria-label="More options for Alice Martin">
                    <MoreHorizontal className="size-4" aria-hidden="true" />
                  </WexButton>
                </WexItem.Actions>
              </WexItem>
              <WexItem.Separator />
              <WexItem>
                <WexItem.Media variant="image">
                  <WexAvatar><WexAvatar.Fallback>BC</WexAvatar.Fallback></WexAvatar>
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>Bob Chen</WexItem.Title>
                  <WexItem.Description>Engineering Manager</WexItem.Description>
                </WexItem.Content>
                <WexItem.Actions>
                  <WexButton variant="ghost" iconOnly aria-label="More options for Bob Chen">
                    <MoreHorizontal className="size-4" aria-hidden="true" />
                  </WexButton>
                </WexItem.Actions>
              </WexItem>
            </WexItem.Group>
          </DemoCard>

          <DemoCard title="Variants — Default / Outline / Muted">
            <div className="flex flex-col gap-3 p-4">
              <WexItem variant="default">
                <WexItem.Media variant="icon">
                  <Package className="size-4" />
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>Default Variant</WexItem.Title>
                  <WexItem.Description>Standard item style</WexItem.Description>
                </WexItem.Content>
              </WexItem>
              <WexItem variant="outline">
                <WexItem.Media variant="icon">
                  <Package className="size-4" />
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>Outline Variant</WexItem.Title>
                  <WexItem.Description>Bordered item style</WexItem.Description>
                </WexItem.Content>
              </WexItem>
              <WexItem variant="muted">
                <WexItem.Media variant="icon">
                  <Package className="size-4" />
                </WexItem.Media>
                <WexItem.Content>
                  <WexItem.Title>Muted Variant</WexItem.Title>
                  <WexItem.Description>Subdued background style</WexItem.Description>
                </WexItem.Content>
              </WexItem>
            </div>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Kbd">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single Keys">
              <WexKbd>Enter</WexKbd>
              <WexKbd>Escape</WexKbd>
              <WexKbd>Tab</WexKbd>
              <WexKbd>Space</WexKbd>
              <WexKbd>Delete</WexKbd>
            </DemoCell>

            <DemoCell label="Chord Combinations">
              <WexKbd.Group><WexKbd>⌘</WexKbd><WexKbd>K</WexKbd></WexKbd.Group>
              <WexKbd.Group><WexKbd>⌘</WexKbd><WexKbd>S</WexKbd></WexKbd.Group>
              <WexKbd.Group><WexKbd>Ctrl</WexKbd><WexKbd>C</WexKbd></WexKbd.Group>
              <WexKbd.Group><WexKbd>⇧</WexKbd><WexKbd>⌘</WexKbd><WexKbd>P</WexKbd></WexKbd.Group>
            </DemoCell>

            <DemoCell label="Inline Usage">
              <p className="text-sm text-foreground">
                Press <WexKbd.Group><WexKbd>⌘</WexKbd><WexKbd>K</WexKbd></WexKbd.Group> to open command palette.
              </p>
              <p className="text-sm text-foreground">
                Hit <WexKbd>Escape</WexKbd> to dismiss.
              </p>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      <PageSection title="Table">
        <div className="grid grid-cols-2 gap-4">
          <DemoCard title="Default">
            <div className="px-4">
              <WexTable>
                <WexTable.Header>
                  <WexTable.Row>
                    <WexTable.Head>Name</WexTable.Head>
                    <WexTable.Head>Role</WexTable.Head>
                    <WexTable.Head>Status</WexTable.Head>
                  </WexTable.Row>
                </WexTable.Header>
                <WexTable.Body>
                  {tableData.slice(0, 4).map((row) => (
                    <WexTable.Row key={row.id}>
                      <WexTable.Cell>{row.name}</WexTable.Cell>
                      <WexTable.Cell>{row.role}</WexTable.Cell>
                      <WexTable.Cell>{row.status}</WexTable.Cell>
                    </WexTable.Row>
                  ))}
                </WexTable.Body>
              </WexTable>
            </div>
          </DemoCard>

          <DemoCard title="With Checkboxes">
            <div className="px-4">
              <WexTable>
                <WexTable.Header>
                  <WexTable.Row>
                    <WexTable.Head className="w-10">
                      <WexCheckbox
                        checked={tableData.slice(0, 4).every((r) => tableChecked[r.id])}
                        onCheckedChange={(v) =>
                          setTableChecked(
                            tableData.slice(0, 4).reduce((acc, r) => ({ ...acc, [r.id]: !!v }), {})
                          )
                        }
                        aria-label="Select all"
                      />
                    </WexTable.Head>
                    <WexTable.Head>Name</WexTable.Head>
                    <WexTable.Head>Role</WexTable.Head>
                    <WexTable.Head>Status</WexTable.Head>
                  </WexTable.Row>
                </WexTable.Header>
                <WexTable.Body>
                  {tableData.slice(0, 4).map((row) => (
                    <WexTable.Row key={row.id} data-state={tableChecked[row.id] ? "selected" : undefined}>
                      <WexTable.Cell>
                        <WexCheckbox
                          checked={!!tableChecked[row.id]}
                          onCheckedChange={(v) =>
                            setTableChecked((prev) => ({ ...prev, [row.id]: !!v }))
                          }
                          aria-label={`Select ${row.name}`}
                        />
                      </WexTable.Cell>
                      <WexTable.Cell>{row.name}</WexTable.Cell>
                      <WexTable.Cell>{row.role}</WexTable.Cell>
                      <WexTable.Cell>{row.status}</WexTable.Cell>
                    </WexTable.Row>
                  ))}
                </WexTable.Body>
              </WexTable>
            </div>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Timeline">
        <div className="grid grid-cols-3 gap-4">
          <DemoCard title="Left Aligned — Dot Markers">
            <div className="p-6">
              <WexTimeline>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Order Placed</p>
                    <p className="text-sm text-muted-foreground">Your order has been received.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Processing</p>
                    <p className="text-sm text-muted-foreground">Preparing your shipment.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Delivered</p>
                    <p className="text-sm text-muted-foreground">Package delivered.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
              </WexTimeline>
            </div>
          </DemoCard>

          <DemoCard title="Icon Markers">
            <div className="p-6">
              <WexTimeline>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker>
                      <CheckCircle className="size-4" aria-hidden="true" />
                    </WexTimeline.Marker>
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Completed</p>
                    <p className="text-sm text-muted-foreground">Task finished successfully.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker>
                      <Clock className="size-4" aria-hidden="true" />
                    </WexTimeline.Marker>
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">In Progress</p>
                    <p className="text-sm text-muted-foreground">Currently being worked on.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker>
                      <AlertCircle className="size-4" aria-hidden="true" />
                    </WexTimeline.Marker>
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Blocked</p>
                    <p className="text-sm text-muted-foreground">Waiting for dependencies.</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
              </WexTimeline>
            </div>
          </DemoCard>

          <DemoCard title="Alternate — With Opposite Content">
            <div className="p-6">
              <WexTimeline align="alternate">
                <WexTimeline.Event>
                  <WexTimeline.Opposite>
                    <span className="text-xs text-muted-foreground">Jan 2024</span>
                  </WexTimeline.Opposite>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Project Kickoff</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Opposite>
                    <span className="text-xs text-muted-foreground">Mar 2024</span>
                  </WexTimeline.Opposite>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                    <WexTimeline.Connector />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">Beta Launch</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
                <WexTimeline.Event>
                  <WexTimeline.Opposite>
                    <span className="text-xs text-muted-foreground">Jun 2024</span>
                  </WexTimeline.Opposite>
                  <WexTimeline.Separator>
                    <WexTimeline.Marker />
                  </WexTimeline.Separator>
                  <WexTimeline.Content>
                    <p className="font-medium text-foreground">GA Release</p>
                  </WexTimeline.Content>
                </WexTimeline.Event>
              </WexTimeline>
            </div>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Tree">
        <div className="grid grid-cols-2 gap-4">
          <DemoCard title="Single Selection">
            <div className="p-4">
              <WexTree
                nodes={treeNodes}
                selectionMode="single"
                value={treeSelected}
                onValueChange={(v) => setTreeSelected(v as string)}
                expandedKeys={treeExpanded}
                onExpandedKeysChange={setTreeExpanded}
                aria-label="Select file"
              />
            </div>
          </DemoCard>

          <DemoCard title="With Filter">
            <div className="p-4">
              <WexTree
                nodes={treeNodes}
                selectionMode="single"
                value={treeFilterSelected}
                onValueChange={(val) => setTreeFilterSelected(val as string | null)}
                aria-label="Searchable file tree"
              >
                <WexTree.Header>
                  <WexTree.Filter placeholder="Search files..." />
                </WexTree.Header>
                <WexTree.List />
                <WexTree.Empty>No files found</WexTree.Empty>
              </WexTree>
            </div>
          </DemoCard>
        </div>
      </PageSection>
    </>
  );
}
