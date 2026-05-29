import { useEffect, useRef, useState } from "react";
import { WexToast } from "@wex/components-react/wex-sonner";
import { WexTabs } from "@wex/components-react/wex-tabs";
import { ActionsDemo } from "./components/demos/ActionsDemo";
import { DataDisplayDemo } from "./components/demos/DataDisplayDemo";
import { FeedbackDemo } from "./components/demos/FeedbackDemo";
import { FormInputsDemo } from "./components/demos/FormInputsDemo";
import { FormStructureDemo } from "./components/demos/FormStructureDemo";
import { LayoutDemo } from "./components/demos/LayoutDemo";
import { NavigationDemo } from "./components/demos/NavigationDemo";
import { OverlaysDemo } from "./components/demos/OverlaysDemo";

const categories = [
  { label: "Actions", id: "category-actions" },
  { label: "Data Display", id: "category-data-display" },
  { label: "Feedback", id: "category-feedback" },
  { label: "Form Inputs", id: "category-form-inputs" },
  { label: "Form Structure", id: "category-form-structure" },
  { label: "Layout", id: "category-layout" },
  { label: "Navigation", id: "category-navigation" },
  { label: "Overlays", id: "category-overlays" },
];

function scrollToCategory(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [activeTab, setActiveTab] = useState("category-actions");
  const isScrollingToRef = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Track which sections are currently visible and pick the topmost one
    const visibleSections = new Map<string, number>();

    const updateActive = () => {
      if (isScrollingToRef.current) return;
      if (visibleSections.size === 0) return;
      // Pick the section with the smallest top ratio (highest on screen)
      let topmost = "";
      let topmostRatio = Infinity;
      visibleSections.forEach((top, id) => {
        if (top < topmostRatio) {
          topmostRatio = top;
          topmost = id;
        }
      });
      if (topmost) setActiveTab(topmost);
    };

    categories.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.boundingClientRect.top);
            } else {
              visibleSections.delete(id);
            }
          });
          updateActive();
        },
        { rootMargin: "-56px 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleTabClick = (id: string) => {
    isScrollingToRef.current = true;
    setActiveTab(id);
    scrollToCategory(id);
    // Re-enable scroll detection after animation settles
    setTimeout(() => { isScrollingToRef.current = false; }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-[var(--wex-shadow-subtle)]">
        <div className="px-10">
          <WexTabs value={activeTab} onValueChange={setActiveTab}>
            <WexTabs.List variant="underline" className="gap-1">
              {categories.map(({ label, id }) => (
                <WexTabs.Trigger
                  key={id}
                  value={id}
                  onClick={() => handleTabClick(id)}
                >
                  {label}
                </WexTabs.Trigger>
              ))}
            </WexTabs.List>
          </WexTabs>
        </div>
      </div>

      <div className="px-10 py-14">
        {/* Header */}
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            WEX Design System
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground">Sticker Sheet</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Component catalogue — Actions, Data Display, Feedback &amp; Form Inputs
          </p>
        </div>

        <div className="space-y-4">
          <ActionsDemo /><br/>
          <DataDisplayDemo /><br/>
          <FeedbackDemo /><br/>
          <FormInputsDemo /><br/>
          <FormStructureDemo /><br/>
          <LayoutDemo />
          <NavigationDemo />
          <OverlaysDemo />
        </div>
      </div>

      <WexToast />
    </div>
  );
}
