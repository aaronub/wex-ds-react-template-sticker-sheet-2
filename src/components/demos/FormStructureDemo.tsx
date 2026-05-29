import { WexField } from "@wex/components-react/wex-field";
import { WexInput } from "@wex/components-react/wex-input";
import { WexLabel } from "@wex/components-react/wex-label";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

export function FormStructureDemo() {
  return (
    <>
      <CategoryDivider title="Form Structure" id="category-form-structure" />

      {/* ── Field ── */}
      <PageSection title="Field">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Basic (with description)">
              <div className="w-full">
                <WexField>
                  <WexField.Label htmlFor="f-email">Email address</WexField.Label>
                  <WexInput id="f-email" type="email" placeholder="you@example.com" />
                  <WexField.Description>We'll never share your email with anyone.</WexField.Description>
                </WexField>
              </div>
            </DemoCell>

            <DemoCell label="With Validation Error">
              <div className="w-full">
                <WexField data-invalid="true">
                  <WexField.Label htmlFor="f-username">Username</WexField.Label>
                  <WexInput id="f-username" aria-invalid="true" defaultValue="ab" />
                  <WexField.Error>Must be at least 3 characters.</WexField.Error>
                </WexField>
              </div>
            </DemoCell>

            <DemoCell label="Horizontal Orientation">
              <div className="w-full space-y-3">
                <WexField orientation="horizontal">
                  <WexField.Label htmlFor="f-name" className="w-16 shrink-0">Name</WexField.Label>
                  <WexInput id="f-name" placeholder="John Doe" />
                </WexField>
                <WexField orientation="horizontal">
                  <WexField.Label htmlFor="f-role" className="w-16 shrink-0">Role</WexField.Label>
                  <WexInput id="f-role" placeholder="Engineer" />
                </WexField>
              </div>
            </DemoCell>

            <DemoCell label="Fieldset with Legend">
              <div className="w-full">
                <WexField.Set className="w-full border border-border rounded-[var(--wex-radius-8)] p-4">
                  <WexField.Legend className="px-1 text-sm font-semibold text-foreground">Contact Information</WexField.Legend>
                  <div className="mt-3 space-y-3">
                    <WexField>
                      <WexField.Label htmlFor="fs-email">Email</WexField.Label>
                      <WexInput id="fs-email" type="email" placeholder="you@example.com" />
                    </WexField>
                    <WexField>
                      <WexField.Label htmlFor="fs-phone">Phone</WexField.Label>
                      <WexInput id="fs-phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </WexField>
                  </div>
                </WexField.Set>
              </div>
            </DemoCell>
          </DemoRow>

          <div className="border-t border-border" />
          <DemoRow>
            <DemoCell label="Field Group">
              <div className="w-full">
                <WexField.Group>
                  <WexField>
                    <WexField.Label htmlFor="fg-first">First Name</WexField.Label>
                    <WexInput id="fg-first" placeholder="Jane" />
                  </WexField>
                  <WexField>
                    <WexField.Label htmlFor="fg-last">Last Name</WexField.Label>
                    <WexInput id="fg-last" placeholder="Smith" />
                  </WexField>
                  <WexField>
                    <WexField.Label htmlFor="fg-email">Email</WexField.Label>
                    <WexInput id="fg-email" type="email" placeholder="jane@example.com" />
                    <WexField.Description>Used for account notifications.</WexField.Description>
                  </WexField>
                </WexField.Group>
              </div>
            </DemoCell>

            <DemoCell label="Multiple Errors">
              <div className="w-full">
                <WexField data-invalid="true">
                  <WexField.Label htmlFor="f-pass">Password</WexField.Label>
                  <WexInput id="f-pass" type="password" aria-invalid="true" defaultValue="abc" />
                  <WexField.Error errors={[{ message: "Must be at least 8 characters." }, { message: "Must contain a number." }]} />
                </WexField>
              </div>
            </DemoCell>

            <DemoCell label="With Separator">
              <div className="w-full space-y-4">
                <WexField>
                  <WexField.Label htmlFor="f-title">Title</WexField.Label>
                  <WexInput id="f-title" placeholder="Senior Engineer" />
                </WexField>
                <WexField.Separator />
                <WexField>
                  <WexField.Label htmlFor="f-dept">Department</WexField.Label>
                  <WexInput id="f-dept" placeholder="Engineering" />
                  <WexField.Description>Your primary team or business unit.</WexField.Description>
                </WexField>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Label ── */}
      <PageSection title="Label">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Basic">
              <div className="w-full space-y-1">
                <WexLabel htmlFor="lbl-basic">Email address</WexLabel>
                <WexInput id="lbl-basic" type="email" placeholder="you@example.com" />
              </div>
            </DemoCell>

            <DemoCell label="Required Marker">
              <div className="w-full space-y-1">
                <WexLabel htmlFor="lbl-required">
                  Username <span className="text-destructive">*</span>
                </WexLabel>
                <WexInput id="lbl-required" placeholder="Required field" required />
              </div>
            </DemoCell>

            <DemoCell label="Multiple Fields">
              <div className="w-full space-y-3">
                <div className="space-y-1">
                  <WexLabel htmlFor="lbl-first">First Name</WexLabel>
                  <WexInput id="lbl-first" placeholder="Jane" />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="lbl-last">Last Name</WexLabel>
                  <WexInput id="lbl-last" placeholder="Smith" />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="lbl-job">Job Title</WexLabel>
                  <WexInput id="lbl-job" placeholder="Product Designer" />
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Disabled State">
              <div className="w-full space-y-1">
                <WexLabel htmlFor="lbl-disabled" className="peer-disabled:opacity-60">Account ID</WexLabel>
                <WexInput id="lbl-disabled" defaultValue="USR-00142" disabled />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>
    </>
  );
}
