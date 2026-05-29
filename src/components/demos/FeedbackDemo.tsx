import { useState } from "react";
import { WexAlert } from "@wex/components-react/wex-alert";
import { WexProgress } from "@wex/components-react/wex-progress";
import { WexSkeleton } from "@wex/components-react/wex-skeleton";
import { WexSpinner } from "@wex/components-react/wex-spinner";
import { wexToast } from "@wex/components-react/wex-toast";
import { toast } from "sonner";
import { WexButton } from "@wex/components-react/wex-button";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

export function FeedbackDemo() {
  const [progress, setProgress] = useState(60);

  return (
    <>
      <CategoryDivider title="Feedback" id="category-feedback" />

      {/* ALERT */}
      <PageSection title="Alert">
        <DemoCard title="All Intents">
          <div className="flex flex-col gap-3 p-6">
            <WexAlert intent="default">
              <WexAlert.Title>Default</WexAlert.Title>
              <WexAlert.Description>General information message for the user.</WexAlert.Description>
            </WexAlert>
            <WexAlert intent="info">
              <WexAlert.Title>Info</WexAlert.Title>
              <WexAlert.Description>Your account settings have been updated.</WexAlert.Description>
            </WexAlert>
            <WexAlert intent="success">
              <WexAlert.Title>Success</WexAlert.Title>
              <WexAlert.Description>Your changes have been saved successfully.</WexAlert.Description>
            </WexAlert>
            <WexAlert intent="warning">
              <WexAlert.Title>Warning</WexAlert.Title>
              <WexAlert.Description>Please review your input before proceeding.</WexAlert.Description>
            </WexAlert>
            <WexAlert intent="destructive">
              <WexAlert.Title>Error</WexAlert.Title>
              <WexAlert.Description>Something went wrong. Please try again.</WexAlert.Description>
            </WexAlert>
          </div>
        </DemoCard>
      </PageSection>

      {/* PROGRESS */}
      <PageSection title="Progress">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Determinate">
              <div className="flex w-full flex-col gap-4">
                <WexProgress value={25} />
                <WexProgress value={50} />
                <WexProgress value={75} />
                <WexProgress value={100} />
              </div>
            </DemoCell>

            <DemoCell label="With Label">
              <div className="flex w-full flex-col gap-4">
                <WexProgress value={progress} showLabel />
                <div className="flex gap-2">
                  <WexButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.max(0, p - 10))}>−10</WexButton>
                  <WexButton size="sm" variant="outline" onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10</WexButton>
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Indeterminate">
              <div className="w-full">
                <WexProgress indeterminate />
              </div>
            </DemoCell>

            <DemoCell label="Custom Label">
              <div className="w-full">
                <WexProgress value={45} showLabel labelFormat={(v) => `${v} of 100 steps`} />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* SKELETON */}
      <PageSection title="Skeleton">
        <div className="grid grid-cols-3 gap-4">
          <DemoCard title="Shapes &amp; Animations">
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3">
                <WexSkeleton shape="circle" className="h-10 w-10 shrink-0" />
                <div className="flex flex-1 flex-col gap-2">
                  <WexSkeleton shape="text" className="h-4 w-32" />
                  <WexSkeleton shape="text" className="h-3 w-48" />
                </div>
              </div>
              <WexSkeleton shape="rectangle" className="h-24 w-full" />
              <WexSkeleton animation="wave" className="h-4 w-3/4" />
              <WexSkeleton animation="none" className="h-4 w-1/2" />
            </div>
          </DemoCard>

          <DemoCard title="Card Preset">
            <div className="p-6">
              <WexSkeleton.Card />
            </div>
          </DemoCard>

          <DemoCard title="List Preset">
            <div className="p-6">
              <WexSkeleton.List count={4} />
            </div>
          </DemoCard>
        </div>
      </PageSection>

      {/* SPINNER */}
      <PageSection title="Spinner">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Sizes">
              <WexSpinner className="h-4 w-4" />
              <WexSpinner />
              <WexSpinner className="h-8 w-8" />
              <WexSpinner className="h-12 w-12" />
            </DemoCell>

            <DemoCell label="Colors">
              <WexSpinner className="h-6 w-6 text-primary" />
              <WexSpinner className="h-6 w-6 text-destructive" />
              <WexSpinner className="h-6 w-6 text-success" />
              <WexSpinner className="h-6 w-6 text-warning" />
              <WexSpinner className="h-6 w-6 text-muted-foreground" />
            </DemoCell>

            <DemoCell label="In Button">
              <WexButton disabled>
                <WexSpinner className="h-4 w-4" />
                Loading...
              </WexButton>
              <WexButton variant="outline" disabled>
                <WexSpinner className="h-4 w-4" />
                Saving
              </WexButton>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* SONNER (wexToast intents) */} 
      <PageSection title="Sonner">
        <DemoCard title="wexToast Intents">
          <DemoRow>
            <DemoCell label="Intents">
              <WexButton size="sm" variant="outline" onClick={() => wexToast("Default notification")}>
                Default
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => wexToast.success("Changes saved!")}>
                Success
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => wexToast.error("Something went wrong.")}>
                Error
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => wexToast.warning("Please review input.")}>
                Warning
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => wexToast.info("New features available.")}>
                Info
              </WexButton>
              <WexButton
                size="sm"
                variant="outline"
                onClick={() =>
                  wexToast.promise(
                    new Promise((resolve) => setTimeout(resolve, 2000)),
                    { loading: "Processing...", success: "Done!", error: "Failed." }
                  )
                }
              >
                Loading
              </WexButton>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* TOAST (sonner toast) */}
      <PageSection title="Toast">
        <DemoCard title="Toast (sonner)">
          <DemoRow>
            <DemoCell label="Intents">
              <WexButton size="sm" variant="outline" onClick={() => toast("Default notification")}>
                Default
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => toast.success("Changes saved!")}>
                Success
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => toast.error("Something went wrong.")}>
                Error
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => toast.warning("Please review input.")}>
                Warning
              </WexButton>
              <WexButton size="sm" variant="outline" onClick={() => toast.info("New features available.")}>
                Info
              </WexButton>
            </DemoCell>

            <DemoCell label="With Description">
              <WexButton
                size="sm"
                variant="outline"
                onClick={() =>
                  toast.success("Payment received", {
                    description: "Order #5678 is being prepared.",
                  })
                }
              >
                Success + Description
              </WexButton>
              <WexButton
                size="sm"
                variant="outline"
                onClick={() =>
                  toast.error("Upload failed", {
                    description: "File exceeds the 10 MB limit.",
                  })
                }
              >
                Error + Description
              </WexButton>
            </DemoCell>

            <DemoCell label="With Action">
              <WexButton
                size="sm"
                variant="outline"
                onClick={() =>
                  toast("Email archived", {
                    action: { label: "Undo", onClick: () => toast.success("Restored!") },
                  })
                }
              >
                With Undo Action
              </WexButton>
            </DemoCell>

            <DemoCell label="Promise">
              <WexButton
                size="sm"
                variant="outline"
                onClick={() =>
                  toast.promise(
                    new Promise((resolve) => setTimeout(resolve, 3000)),
                    { loading: "Submitting form...", success: "Form submitted!", error: "Submission failed." }
                  )
                }
              >
                Promise Toast
              </WexButton>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

    </>
  );
}
