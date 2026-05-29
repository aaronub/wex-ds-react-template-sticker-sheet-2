import { useState } from "react";
import { WexAccordion } from "@wex/components-react/wex-accordion";
import { WexAspectRatio } from "@wex/components-react/wex-aspect-ratio";
import { WexCard } from "@wex/components-react/wex-card";
import { WexCollapsible } from "@wex/components-react/wex-collapsible";
import { WexResizable } from "@wex/components-react/wex-resizable";
import { WexScrollArea } from "@wex/components-react/wex-scroll-area";
import { WexSeparator } from "@wex/components-react/wex-separator";
import { WexButton } from "@wex/components-react/wex-button";
import { ChevronsUpDown } from "lucide-react";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

export function LayoutDemo() {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  const [multiCollapsibleOpen, setMultiCollapsibleOpen] = useState(false);

  return (
    <>
      <CategoryDivider title="Layout" id="category-layout" />

      {/* ── Accordion ── */}
      <PageSection title="Accordion">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single (collapsible)">
              <div className="w-full">
                <WexAccordion type="single" collapsible className="w-full">
                  <WexAccordion.Item value="item-1">
                    <WexAccordion.Trigger>Is it accessible?</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Yes. It adheres to the WAI-ARIA design pattern with full keyboard navigation.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="item-2">
                    <WexAccordion.Trigger>Is it styled?</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Yes. It comes with default styles that match the WEX design system tokens.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="item-3">
                    <WexAccordion.Trigger>Is it animated?</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Yes. The accordion uses smooth height transitions powered by CSS.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                </WexAccordion>
              </div>
            </DemoCell>

            <DemoCell label="Multiple (open many)">
              <div className="w-full">
                <WexAccordion type="multiple" defaultValue={["a-1"]} className="w-full">
                  <WexAccordion.Item value="a-1">
                    <WexAccordion.Trigger>Account Settings</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Manage your profile, password, and notification preferences.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="a-2">
                    <WexAccordion.Trigger>Billing</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      View invoices, update payment methods, and manage subscriptions.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="a-3">
                    <WexAccordion.Trigger>Security</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Configure two-factor authentication and active sessions.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                </WexAccordion>
              </div>
            </DemoCell>

            <DemoCell label="Disabled item">
              <div className="w-full">
                <WexAccordion type="single" collapsible className="w-full">
                  <WexAccordion.Item value="d-1">
                    <WexAccordion.Trigger>Available section</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      This section can be expanded and collapsed normally.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="d-2" disabled>
                    <WexAccordion.Trigger>Disabled section</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      This content is not reachable.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                  <WexAccordion.Item value="d-3">
                    <WexAccordion.Trigger>Another section</WexAccordion.Trigger>
                    <WexAccordion.Content>
                      Another available section that can be toggled.
                    </WexAccordion.Content>
                  </WexAccordion.Item>
                </WexAccordion>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Aspect Ratio ── */}
      <PageSection title="Aspect Ratio">
        <DemoCard>
          <DemoRow>
            <DemoCell label="16 / 9 — Widescreen">
              <div className="w-full">
                <WexAspectRatio ratio={16 / 9} className="rounded-[var(--wex-radius-8)] overflow-hidden bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium">
                    16 : 9
                  </div>
                </WexAspectRatio>
              </div>
            </DemoCell>

            <DemoCell label="4 / 3 — Traditional">
              <div className="w-full">
                <WexAspectRatio ratio={4 / 3} className="rounded-[var(--wex-radius-8)] overflow-hidden bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium">
                    4 : 3
                  </div>
                </WexAspectRatio>
              </div>
            </DemoCell>

            <DemoCell label="1 / 1 — Square">
              <div className="w-full max-w-[200px]">
                <WexAspectRatio ratio={1} className="rounded-[var(--wex-radius-8)] overflow-hidden bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium">
                    1 : 1
                  </div>
                </WexAspectRatio>
              </div>
            </DemoCell>

            <DemoCell label="21 / 9 — Ultrawide">
              <div className="w-full">
                <WexAspectRatio ratio={21 / 9} className="rounded-[var(--wex-radius-8)] overflow-hidden bg-muted">
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground text-sm font-medium">
                    21 : 9
                  </div>
                </WexAspectRatio>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Card ── */}
      <PageSection title="Card">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Default (shadow low)">
              <div className="w-full">
                <WexCard className="w-full">
                  <WexCard.Header>
                    <WexCard.Title>Card Title</WexCard.Title>
                    <WexCard.Description>Supporting description text below the title.</WexCard.Description>
                  </WexCard.Header>
                  <WexCard.Content>
                    <p className="text-sm text-muted-foreground">Card body content goes here.</p>
                  </WexCard.Content>
                  <WexCard.Footer>
                    <WexButton size="sm">Action</WexButton>
                    <WexButton size="sm" variant="outline">Cancel</WexButton>
                  </WexCard.Footer>
                </WexCard>
              </div>
            </DemoCell>

            <DemoCell label="Bordered, no shadow">
              <div className="w-full">
                <WexCard bordered shadow="none" className="w-full">
                  <WexCard.Header>
                    <WexCard.Title>Settings</WexCard.Title>
                    <WexCard.Description>Manage your preferences.</WexCard.Description>
                  </WexCard.Header>
                  <WexCard.Content>
                    <p className="text-sm text-muted-foreground">Use a bordered card for secondary surfaces.</p>
                  </WexCard.Content>
                </WexCard>
              </div>
            </DemoCell>

            <DemoCell label="Elevated shadow">
              <div className="w-full">
                <WexCard shadow="elevated" className="w-full">
                  <WexCard.Header>
                    <WexCard.Title>Elevated Card</WexCard.Title>
                    <WexCard.Description>Higher elevation for emphasis.</WexCard.Description>
                  </WexCard.Header>
                  <WexCard.Content>
                    <p className="text-sm text-muted-foreground">Great for modals or featured content sections.</p>
                  </WexCard.Content>
                </WexCard>
              </div>
            </DemoCell>

            <DemoCell label="Radius sizes">
              <div className="w-full space-y-3">
                {(["xs", "sm", "md"] as const).map((size) => (
                  <WexCard key={size} radiusSize={size} bordered shadow="none" className="w-full">
                    <WexCard.Content>
                      <p className="text-xs font-medium text-muted-foreground">radiusSize="{size}"</p>
                    </WexCard.Content>
                  </WexCard>
                ))}
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Collapsible ── */}
      <PageSection title="Collapsible">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Controlled">
              <div className="w-full">
                <WexCollapsible
                  open={collapsibleOpen}
                  onOpenChange={setCollapsibleOpen}
                  className="w-full"
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-semibold">Related primitives</span>
                    <WexCollapsible.Trigger asChild>
                      <WexButton variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                      </WexButton>
                    </WexCollapsible.Trigger>
                  </div>
                  <div className="px-4 py-3 font-mono text-sm">@radix-ui/react-collapsible</div>
                  <WexCollapsible.Content>
                    <div className="px-4 py-3 font-mono text-sm">@radix-ui/react-accordion</div>
                    <div className="px-4 py-3 font-mono text-sm">@radix-ui/react-tabs</div>
                  </WexCollapsible.Content>
                </WexCollapsible>
              </div>
            </DemoCell>

            <DemoCell label="Default open">
              <div className="w-full">
                <WexCollapsible defaultOpen className="w-full">
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-semibold">Expanded by default</span>
                    <WexCollapsible.Trigger asChild>
                      <WexButton variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                      </WexButton>
                    </WexCollapsible.Trigger>
                  </div>
                  <WexCollapsible.Content>
                    <div className="px-4 py-3 text-sm text-muted-foreground">
                      This content is visible immediately on render.
                    </div>
                    <div className="px-4 py-3 text-sm text-muted-foreground">
                      Collapse it using the toggle button above.
                    </div>
                  </WexCollapsible.Content>
                </WexCollapsible>
              </div>
            </DemoCell>

            <DemoCell label="Disabled">
              <div className="w-full">
                <WexCollapsible
                  open={multiCollapsibleOpen}
                  onOpenChange={setMultiCollapsibleOpen}
                  disabled
                  className="w-full"
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-sm font-semibold text-muted-foreground">Disabled collapsible</span>
                    <WexCollapsible.Trigger asChild>
                      <WexButton variant="ghost" size="sm" className="w-9 p-0" disabled>
                        <ChevronsUpDown className="size-4" />
                        <span className="sr-only">Toggle</span>
                      </WexButton>
                    </WexCollapsible.Trigger>
                  </div>
                  <div className="px-4 py-3 text-sm text-muted-foreground">Always visible content row.</div>
                  <WexCollapsible.Content>
                    <div className="px-4 py-3 text-sm">This is unreachable when disabled.</div>
                  </WexCollapsible.Content>
                </WexCollapsible>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Resizable ── */}
      <PageSection title="Resizable">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Two panels">
              <div className="w-full">
                <WexResizable.Group
                  orientation="horizontal"
                  className="min-h-[140px] w-full rounded-[var(--wex-radius-8)] border border-border"
                >
                  <WexResizable.Panel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="text-sm font-semibold text-foreground">Panel One</span>
                    </div>
                  </WexResizable.Panel>
                  <WexResizable.Handle withHandle aria-label="Resize panels" />
                  <WexResizable.Panel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="text-sm font-semibold text-foreground">Panel Two</span>
                    </div>
                  </WexResizable.Panel>
                </WexResizable.Group>
              </div>
            </DemoCell>

            <DemoCell label="Three panels" wide>
              <div className="w-full">
                <WexResizable.Group
                  orientation="horizontal"
                  className="min-h-[140px] w-full rounded-[var(--wex-radius-8)] border border-border"
                >
                  <WexResizable.Panel defaultSize={25} minSize={15}>
                    <div className="flex h-full items-center justify-center p-3">
                      <span className="text-sm font-semibold text-foreground">Left</span>
                    </div>
                  </WexResizable.Panel>
                  <WexResizable.Handle aria-label="Resize left and center" />
                  <WexResizable.Panel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-3">
                      <span className="text-sm font-semibold text-foreground">Center</span>
                    </div>
                  </WexResizable.Panel>
                  <WexResizable.Handle aria-label="Resize center and right" />
                  <WexResizable.Panel defaultSize={25} minSize={15}>
                    <div className="flex h-full items-center justify-center p-3">
                      <span className="text-sm font-semibold text-foreground">Right</span>
                    </div>
                  </WexResizable.Panel>
                </WexResizable.Group>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Scroll Area ── */}
      <PageSection title="Scroll Area">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Vertical">
              <div className="w-full h-42">
                <WexScrollArea className="h-full w-full rounded-[var(--wex-radius-8)] border border-border p-4">
                  <div className="space-y-3">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-primary shrink-0" />
                        <p className="text-sm text-foreground">List item {i + 1}</p>
                      </div>
                    ))}
                  </div>
                </WexScrollArea>
              </div>
            </DemoCell>

            <DemoCell label="Horizontal">
              <WexScrollArea className="w-full rounded-[var(--wex-radius-8)] border border-border whitespace-nowrap">
                <div className="flex gap-3 p-4">
                  {Array.from({ length: 16 }, (_, i) => (
                    <div
                      key={i}
                      className="flex shrink-0 flex-col items-center gap-2 rounded-[var(--wex-radius-8)] border border-border bg-card p-3"
                    >
                      <div className="size-10 rounded-full bg-muted" />
                      <p className="text-xs font-medium text-foreground">Item {i + 1}</p>
                    </div>
                  ))}
                </div>
                <WexScrollArea.Bar orientation="horizontal" />
              </WexScrollArea>
            </DemoCell>

            <DemoCell label="Always visible scrollbar">
              <div className="w-full h-42">
                <WexScrollArea type="always" className="h-full w-full rounded-[var(--wex-radius-8)] border border-border p-4">
                  <div className="space-y-2">
                    {Array.from({ length: 15 }, (_, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        Paragraph {i + 1}: Always-visible scrollbar stays rendered at all times.
                      </p>
                    ))}
                  </div>
                </WexScrollArea>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Separator ── */}
      <PageSection title="Separator">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Horizontal (default)">
              <div className="w-full space-y-4">
                <p className="text-sm text-foreground">Content above the separator</p>
                <WexSeparator />
                <p className="text-sm text-foreground">Content below the separator</p>
                <WexSeparator />
                <p className="text-sm text-foreground">Another section below</p>
              </div>
            </DemoCell>

            <DemoCell label="Vertical">
              <div className="flex h-10 items-center gap-4 text-sm text-foreground">
                <span>Profile</span>
                <WexSeparator orientation="vertical" />
                <span>Settings</span>
                <WexSeparator orientation="vertical" />
                <span>Logout</span>
              </div>
            </DemoCell>

            <DemoCell label="Semantic (decorative=false)">
              <div className="w-full space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Section A</h4>
                  <p className="text-sm text-muted-foreground">First content region.</p>
                </div>
                <WexSeparator decorative={false} />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Section B</h4>
                  <p className="text-sm text-muted-foreground">Second content region.</p>
                </div>
              </div>
            </DemoCell>

            <DemoCell label="In a nav row">
              <div className="flex flex-col gap-0 w-full">
                {["Dashboard", "Analytics", "Reports", "Settings"].map((item, i, arr) => (
                  <div key={item}>
                    <div className="flex items-center gap-3 py-2 px-1 text-sm text-foreground hover:text-primary cursor-pointer">
                      <div className="size-2 rounded-full bg-muted-foreground/40" />
                      {item}
                    </div>
                    {i < arr.length - 1 && <WexSeparator />}
                  </div>
                ))}
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>
    </>
  );
}
