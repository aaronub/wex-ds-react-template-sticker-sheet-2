import { useState } from "react";
import { WexButton } from "@wex/components-react/wex-button";
import { WexButtonGroup } from "@wex/components-react/wex-button-group";
import { WexToggle } from "@wex/components-react/wex-toggle";
import { WexToggleGroup } from "@wex/components-react/wex-toggle-group";
import {
  Plus, Trash2, Download, Bold, Italic, Underline,
  ChevronLeft as AlignLeft,
  TextAlignCenter as AlignCenter,
  Highlighter as AlignRight,
  TextAlignJustify as AlignJustify,
  Star, Grid2x2X as Grid2X2, List, LayoutGrid,
} from "lucide-react";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

export function ActionsDemo() {
  const [boldPressed, setBoldPressed] = useState(false);
  const [italicPressed, setItalicPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(false);
  const [starPressed, setStarPressed] = useState(false);
  const [alignValue, setAlignValue] = useState("left");
  const [viewValue, setViewValue] = useState("grid");
  const [formatValues, setFormatValues] = useState<string[]>([]);
  const [periodValue, setPeriodValue] = useState("week");

  return (
    <>
      <CategoryDivider title="Actions" id="category-actions" />

      <PageSection title="Button">
        <DemoCard title="Intents × Variants">
          <DemoRow>
            <DemoCell label="Solid">
              <WexButton intent="primary" variant="solid">Primary</WexButton>
              <WexButton intent="destructive" variant="solid">Destructive</WexButton>
              <WexButton intent="contrast" variant="solid">Contrast</WexButton>
            </DemoCell>
            <DemoCell label="Outline">
              <WexButton intent="primary" variant="outline">Primary</WexButton>
              <WexButton intent="destructive" variant="outline">Destructive</WexButton>
              <WexButton intent="contrast" variant="outline">Contrast</WexButton>
            </DemoCell>
            <DemoCell label="Ghost">
              <WexButton intent="primary" variant="ghost">Primary</WexButton>
              <WexButton intent="destructive" variant="ghost">Destructive</WexButton>
              <WexButton intent="contrast" variant="ghost">Contrast</WexButton>
            </DemoCell>
            <DemoCell label="Link">
              <WexButton intent="primary" variant="link">Primary</WexButton>
              <WexButton intent="destructive" variant="link">Destructive</WexButton>
              <WexButton intent="contrast" variant="link">Contrast</WexButton>
            </DemoCell>
          </DemoRow>
        </DemoCard>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <DemoCard title="Sizes">
            <DemoRow>
              <DemoCell label="sm / md / lg / xl">
                <WexButton size="sm">Small</WexButton>
                <WexButton size="md">Medium</WexButton>
                <WexButton size="lg">Large</WexButton>
                <WexButton size="xl">Extra Large</WexButton>
              </DemoCell>
            </DemoRow>
          </DemoCard>

          <DemoCard title="States">
            <DemoRow>
              <DemoCell label="Default / Loading / Disabled">
                <WexButton>Default</WexButton>
                <WexButton loading>Loading</WexButton>
                <WexButton disabled>Disabled</WexButton>
              </DemoCell>
            </DemoRow>
          </DemoCard>

          <DemoCard title="Icon Only">
            <DemoRow>
              <DemoCell label="Primary / Destructive / Outline">
                <WexButton iconOnly aria-label="Add"><Plus /></WexButton>
                <WexButton iconOnly intent="destructive" aria-label="Delete"><Trash2 /></WexButton>
                <WexButton iconOnly variant="outline" aria-label="Download"><Download /></WexButton>
                <WexButton iconOnly variant="ghost" aria-label="Star"><Star /></WexButton>
              </DemoCell>
            </DemoRow>
          </DemoCard>

          <DemoCard title="Rounded (Pill)">
            <DemoRow>
              <DemoCell label="Solid / Outline / Ghost">
                <WexButton rounded>Subscribe</WexButton>
                <WexButton rounded variant="outline" intent="destructive">Remove</WexButton>
                <WexButton rounded variant="ghost"><Plus />Add</WexButton>
              </DemoCell>
            </DemoRow>
          </DemoCard>
        </div>
      </PageSection>

      <PageSection title="Button Group">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Horizontal">
              <WexButtonGroup>
                <WexButton variant="outline">Left</WexButton>
                <WexButton variant="outline">Center</WexButton>
                <WexButton variant="outline">Right</WexButton>
              </WexButtonGroup>
            </DemoCell>

            <DemoCell label="Attached (gap-0)">
              <WexButtonGroup className="gap-0">
                <WexButton variant="outline">Cut</WexButton>
                <WexButton variant="outline">Copy</WexButton>
                <WexButton variant="outline">Paste</WexButton>
              </WexButtonGroup>
            </DemoCell>

            <DemoCell label="Vertical">
              <WexButtonGroup orientation="vertical">
                <WexButton variant="outline">First</WexButton>
                <WexButton variant="outline">Second</WexButton>
                <WexButton variant="outline">Third</WexButton>
              </WexButtonGroup>
            </DemoCell>

            <DemoCell label="With Separator">
              <WexButtonGroup>
                <WexButton variant="outline">Edit</WexButton>
                <WexButtonGroup.Separator />
                <WexButton variant="outline">Archive</WexButton>
                <WexButtonGroup.Separator />
                <WexButton variant="outline">Delete</WexButton>
              </WexButtonGroup>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      <PageSection title="Toggle">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Default — Icons">
              <WexToggle pressed={boldPressed} onPressedChange={setBoldPressed} aria-label="Bold">
                <Bold />
              </WexToggle>
              <WexToggle pressed={italicPressed} onPressedChange={setItalicPressed} aria-label="Italic">
                <Italic />
              </WexToggle>
              <WexToggle pressed={underlinePressed} onPressedChange={setUnderlinePressed} aria-label="Underline">
                <Underline />
              </WexToggle>
            </DemoCell>

            <DemoCell label="Outline — Text + Icon">
              <WexToggle variant="outline" pressed={starPressed} onPressedChange={setStarPressed} aria-label="Favourite">
                <Star />Favourite
              </WexToggle>
              <WexToggle variant="outline" aria-label="List view">
                <List />List
              </WexToggle>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex items-center gap-2">
                <WexToggle size="sm" aria-label="Small"><Star className="size-3.5" /></WexToggle>
                <WexToggle aria-label="Default"><Star className="size-4" /></WexToggle>
                <WexToggle size="lg" aria-label="Large"><Star className="size-5" /></WexToggle>
              </div>
            </DemoCell>

            <DemoCell label="States">
              <WexToggle defaultPressed={false} aria-label="Unpressed"><Star /></WexToggle>
              <WexToggle defaultPressed={true} aria-label="Pressed"><Star /></WexToggle>
              <WexToggle disabled aria-label="Disabled"><Star /></WexToggle>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      <PageSection title="Toggle Group">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single — Icons">
              <WexToggleGroup type="single" value={alignValue} onValueChange={(v) => v && setAlignValue(v)}>
                <WexToggleGroup.Item value="left" aria-label="Left"><AlignLeft /></WexToggleGroup.Item>
                <WexToggleGroup.Item value="center" aria-label="Center"><AlignCenter /></WexToggleGroup.Item>
                <WexToggleGroup.Item value="right" aria-label="Right"><AlignRight /></WexToggleGroup.Item>
                <WexToggleGroup.Item value="justify" aria-label="Justify"><AlignJustify /></WexToggleGroup.Item>
              </WexToggleGroup>
            </DemoCell>

            <DemoCell label="Multiple — Text">
              <WexToggleGroup type="multiple" value={formatValues} onValueChange={(v) => setFormatValues(v as string[])}>
                <WexToggleGroup.Item value="bold">Bold</WexToggleGroup.Item>
                <WexToggleGroup.Item value="italic">Italic</WexToggleGroup.Item>
                <WexToggleGroup.Item value="underline">Underline</WexToggleGroup.Item>
              </WexToggleGroup>
            </DemoCell>

            <DemoCell label="Segmented (spacing=0)">
              <WexToggleGroup type="single" variant="outline" spacing={0} value={periodValue} onValueChange={(v) => v && setPeriodValue(v)}>
                <WexToggleGroup.Item value="day">Day</WexToggleGroup.Item>
                <WexToggleGroup.Item value="week">Week</WexToggleGroup.Item>
                <WexToggleGroup.Item value="month">Month</WexToggleGroup.Item>
                <WexToggleGroup.Item value="year">Year</WexToggleGroup.Item>
              </WexToggleGroup>
            </DemoCell>

            <DemoCell label="View Switcher">
              <WexToggleGroup type="single" variant="outline" value={viewValue} onValueChange={(v) => v && setViewValue(v)}>
                <WexToggleGroup.Item value="grid" aria-label="Grid"><Grid2X2 /></WexToggleGroup.Item>
                <WexToggleGroup.Item value="list" aria-label="List"><List /></WexToggleGroup.Item>
                <WexToggleGroup.Item value="layout" aria-label="Layout"><LayoutGrid /></WexToggleGroup.Item>
              </WexToggleGroup>
            </DemoCell>
          </DemoRow>

          <div className="border-t border-border">
            <DemoRow>
              <DemoCell label="Size — sm">
                <WexToggleGroup type="single" size="sm" defaultValue="a">
                  <WexToggleGroup.Item value="a">Option A</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="b">Option B</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="c">Option C</WexToggleGroup.Item>
                </WexToggleGroup>
              </DemoCell>
              <DemoCell label="Size — default">
                <WexToggleGroup type="single" defaultValue="a">
                  <WexToggleGroup.Item value="a">Option A</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="b">Option B</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="c">Option C</WexToggleGroup.Item>
                </WexToggleGroup>
              </DemoCell>
              <DemoCell label="Size — lg">
                <WexToggleGroup type="single" size="lg" defaultValue="a">
                  <WexToggleGroup.Item value="a">Option A</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="b">Option B</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="c">Option C</WexToggleGroup.Item>
                </WexToggleGroup>
              </DemoCell>
              <DemoCell label="Disabled">
                <WexToggleGroup type="single" defaultValue="b" disabled>
                  <WexToggleGroup.Item value="a">Option A</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="b">Option B</WexToggleGroup.Item>
                  <WexToggleGroup.Item value="c">Option C</WexToggleGroup.Item>
                </WexToggleGroup>
              </DemoCell>
            </DemoRow>
          </div>
        </DemoCard>
      </PageSection>
    </>
  );
}
