import { useState, useCallback } from "react";
import { WexCalendar } from "@wex/components-react/wex-calendar";
import { WexCheckbox } from "@wex/components-react/wex-checkbox";
import { WexCombobox } from "@wex/components-react/wex-combobox";
import { WexDatePicker } from "@wex/components-react/wex-date-picker";
import { WexFloatLabel } from "@wex/components-react/wex-float-label";
import { WexInput } from "@wex/components-react/wex-input";
import { WexInputGroup } from "@wex/components-react/wex-input-group";
import { WexInputMask } from "@wex/components-react/wex-input-mask";
import { WexInputNumber } from "@wex/components-react/wex-input-number";
import { WexInputOTP } from "@wex/components-react/wex-input-otp";
import { WexListbox } from "@wex/components-react/wex-listbox";
import type { ListboxOptionData } from "@wex/components-react/wex-listbox";
import { WexMultiSelect } from "@wex/components-react/wex-multiselect";
import { WexRadioGroup } from "@wex/components-react/wex-radio-group";
import { WexSelect } from "@wex/components-react/wex-select";
import { WexSlider } from "@wex/components-react/wex-slider";
import { WexSwitch } from "@wex/components-react/wex-switch";
import { WexTextarea } from "@wex/components-react/wex-textarea";
import { WexLabel } from "@wex/components-react/wex-label";
import { WexField } from "@wex/components-react/wex-field";
import type { DateRange } from "react-day-picker";
import { Search, Mail, Eye, EyeOff, Lock, Globe } from "lucide-react";
import { PageSection, CategoryDivider, DemoCard, DemoCell, DemoRow } from "../layout";

const cityOptions: ListboxOptionData[] = [
  { label: "New York", value: "ny", group: "East Coast" },
  { label: "Boston", value: "bos", group: "East Coast" },
  { label: "Miami", value: "mia", group: "East Coast" },
  { label: "Chicago", value: "chi", group: "Midwest" },
  { label: "Detroit", value: "det", group: "Midwest" },
  { label: "Los Angeles", value: "la", group: "West Coast" },
  { label: "Seattle", value: "sea", group: "West Coast" },
  { label: "San Francisco", value: "sf", group: "West Coast" },
];

const multiOptions = [
  { label: "New York", value: "ny" },
  { label: "Los Angeles", value: "la" },
  { label: "Chicago", value: "chi" },
  { label: "Houston", value: "hou" },
  { label: "Phoenix", value: "phx" },
  { label: "Philadelphia", value: "phi" },
];

const frameworkOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "qwik", label: "Qwik" },
];

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

export function FormInputsDemo() {
  // Calendar state
  const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 86400000),
  });

  // Checkbox state
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [items, setItems] = useState([false, false, false]);
  const allChecked = items.every(Boolean);
  const someChecked = items.some(Boolean);

  // Combobox state
  const [framework, setFramework] = useState("");
  const [country, setCountry] = useState("");

  // DatePicker state
  const [dpDate, setDpDate] = useState<Date | undefined>(undefined);
  const [dpInputDate, setDpInputDate] = useState<Date | undefined>(undefined);
  const [dpRange, setDpRange] = useState<DateRange | undefined>(undefined);

  // Float label state
  const [floatUsername, setFloatUsername] = useState("");
  const [floatEmail, setFloatEmail] = useState("");

  // Input mask state
  const [phone, setPhone] = useState("");
  const [ssn, setSsn] = useState("");
  const [cc, setCc] = useState("");

  // Input Number state
  const [numDecimal, setNumDecimal] = useState<number | null>(null);
  const [numCurrency, setNumCurrency] = useState<number | null>(1234.5);
  const [numStepper, setNumStepper] = useState<number | null>(5);

  // Input OTP state
  const [otpCode, setOtpCode] = useState("");

  // Listbox state
  const [listSingle, setListSingle] = useState<string | null>(null);
  const [listMulti, setListMulti] = useState<string[]>([]);

  // Multi Select state
  const [multiComma, setMultiComma] = useState<string[]>([]);
  const [multiChips, setMultiChips] = useState<string[]>(["ny", "chi"]);

  // Radio Group state
  const [radioBasic, setRadioBasic] = useState("option-one");

  // Select state
  const [selectFruit, setSelectFruit] = useState("");
  const [selectTimezone, setSelectTimezone] = useState("");

  // Slider state
  const [sliderSingle, setSliderSingle] = useState([50]);
  const [sliderRange, setSliderRange] = useState([25, 75]);

  // Switch state
  const [switchNotif, setSwitchNotif] = useState(true);
  const [switchDark, setSwitchDark] = useState(false);

  // Textarea state
  const [textareaAuto, setTextareaAuto] = useState("");
  const [textareaBio, setTextareaBio] = useState("");

  // Password toggle
  const [showPass, setShowPass] = useState(false);

  // DoB calendar
  const currentYear = new Date().getFullYear();
  const [dobMonth, setDobMonth] = useState(() => new Date());
  const [dobDate, setDobDate] = useState<Date | undefined>(undefined);
  const handleDobSelect = useCallback((date: Date | undefined) => {
    setDobDate(date);
  }, []);

  return (
    <>
      <CategoryDivider title="Form Inputs" id="category-form-inputs" />

      {/* ── Calendar ── */}
      <PageSection title="Calendar">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single">
              <WexCalendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
              />
            </DemoCell>
            <DemoCell label="Date of Birth — Dropdown">
              <WexCalendar
                mode="single"
                captionLayout="dropdown"
                fromYear={currentYear - 120}
                toYear={currentYear}
                month={dobMonth}
                onMonthChange={setDobMonth}
                selected={dobDate}
                onSelect={handleDobSelect}
                disabled={(date) => date > new Date()}
              />
            </DemoCell>
            <DemoCell label="With Footer">
              <WexCalendar
                mode="single"
                selected={singleDate}
                onSelect={setSingleDate}
                disabled={(date) => date < new Date()}
                footer={
                  <p className="text-sm text-muted-foreground pt-3 border-t border-border mt-3">
                    {singleDate ? `Selected: ${singleDate.toDateString()}` : "Pick a future date"}
                  </p>
                }
              />
            </DemoCell>
          </DemoRow>
        </DemoCard>

        <div className="mt-4">
          <DemoCard title="Range">
            <DemoRow>
              <DemoCell label="Range (2 months)">
                <WexCalendar
                  mode="range"
                  selected={rangeDate}
                  onSelect={setRangeDate}
                  numberOfMonths={2}
                />
              </DemoCell>
            </DemoRow>
          </DemoCard>
        </div>
      </PageSection>

      {/* ── Checkbox ── */}
      <PageSection title="Checkbox">
        <DemoCard>
          <DemoRow>
            <DemoCell label="States">
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <WexCheckbox id="cb-unchecked" checked={check1} onCheckedChange={(v) => setCheck1(v === true)} />
                  Unchecked
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <WexCheckbox id="cb-checked" checked={check2} onCheckedChange={(v) => setCheck2(v === true)} />
                  Checked
                </label>
                <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                  <WexCheckbox id="cb-indeterminate" checked="indeterminate" />
                  Indeterminate
                </label>
              </div>
            </DemoCell>

            <DemoCell label="Disabled">
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <WexCheckbox disabled />
                  Disabled unchecked
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <WexCheckbox checked disabled />
                  Disabled checked
                </label>
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <WexCheckbox checked="indeterminate" disabled />
                  Disabled indeterminate
                </label>
              </div>
            </DemoCell>

            <DemoCell label="Select All Pattern">
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground cursor-pointer">
                  <WexCheckbox
                    checked={allChecked ? true : someChecked ? "indeterminate" : false}
                    onCheckedChange={(v) => setItems(items.map(() => v === true))}
                  />
                  Select all
                </label>
                <div className="pl-4 flex flex-col gap-2">
                  {["Option A", "Option B", "Option C"].map((opt, i) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <WexCheckbox
                        checked={items[i]}
                        onCheckedChange={(v) => {
                          const next = [...items];
                          next[i] = v === true;
                          setItems(next);
                        }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </DemoCell>

            <DemoCell label="With WexField">
              <WexField>
                <WexField.Label>Preferences</WexField.Label>
                <div className="flex flex-col gap-2 mt-1">
                  <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                    <WexCheckbox defaultChecked />
                    Email notifications
                  </label>
                  <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                    <WexCheckbox />
                    SMS alerts
                  </label>
                </div>
                <WexField.Description>You can change these at any time.</WexField.Description>
              </WexField>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Combobox ── */}
      <PageSection title="Combobox">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Basic">
              <div className="w-64">
                <WexCombobox
                  options={frameworkOptions}
                  value={framework}
                  onValueChange={setFramework}
                  placeholder="Select framework"
                  searchPlaceholder="Search frameworks..."
                  emptyText="No framework found."
                />
              </div>
            </DemoCell>

            <DemoCell label="With Label">
              <div className="w-64 space-y-2">
                <WexLabel htmlFor="country-combo">Country</WexLabel>
                <WexCombobox
                  options={countryOptions}
                  value={country}
                  onValueChange={setCountry}
                  placeholder="Select a country"
                  searchPlaceholder="Search countries..."
                />
              </div>
            </DemoCell>

            <DemoCell label="Disabled">
              <div className="w-56">
                <WexCombobox options={frameworkOptions} disabled placeholder="Disabled combobox" />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Date Picker ── */}
      <PageSection title="Date Picker">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Button Trigger">
              <div className="flex flex-col gap-3 w-56">
                <WexDatePicker date={dpDate} onDateChange={setDpDate} />
                <WexDatePicker size="lg" date={dpDate} onDateChange={setDpDate} placeholder="Large size" />
                <WexDatePicker size="xl" date={dpDate} onDateChange={setDpDate} placeholder="Extra large" />
              </div>
            </DemoCell>

            <DemoCell label="With Input">
              <div className="w-64">
                <WexDatePicker.WithInput
                  date={dpInputDate}
                  onDateChange={setDpInputDate}
                  label="Select date"
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </DemoCell>
          </DemoRow>
          <div className="border-t border-border">
            <DemoRow>
              <DemoCell label="Range">
                <div className="w-72">
                  <WexDatePicker.Range
                    date={dpRange}
                    onDateChange={setDpRange}
                    placeholder="Select date range"
                  />
                </div>
              </DemoCell>

              <DemoCell label="Disabled / Restricted">
                <div className="flex flex-col gap-3 w-56">
                  <WexDatePicker disabled placeholder="Disabled" />
                  <WexDatePicker
                    date={dpDate}
                    onDateChange={setDpDate}
                    placeholder="Future only"
                    calendarProps={{ disabled: (d) => d < new Date() }}
                  />
                </div>
              </DemoCell>
            </DemoRow>
          </div>
        </DemoCard>
      </PageSection>

      {/* ── Float Label ── */}
      <PageSection title="Float Label">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Compound (WexFloatLabel)">
              <div className="flex flex-col gap-4 w-64">
                <WexFloatLabel>
                  <WexFloatLabel.Input>
                    <WexInput
                      id="fl-username"
                      value={floatUsername}
                      onChange={(e) => setFloatUsername(e.target.value)}
                    />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-username">Username</WexFloatLabel.Label>
                </WexFloatLabel>

                <WexFloatLabel>
                  <WexFloatLabel.Input>
                    <WexInput
                      id="fl-email"
                      type="email"
                      value={floatEmail}
                      onChange={(e) => setFloatEmail(e.target.value)}
                    />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-email">Email address</WexFloatLabel.Label>
                </WexFloatLabel>
              </div>
            </DemoCell>

            <DemoCell label="With InputMask">
              <div className="flex flex-col gap-4 w-64">
                <WexFloatLabel>
                  <WexFloatLabel.Input>
                    <WexInputMask id="fl-phone" mask="(999) 999-9999" floatLabel />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-phone">Phone number</WexFloatLabel.Label>
                </WexFloatLabel>
              </div>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex flex-col gap-4 w-64">
                <WexFloatLabel size="md">
                  <WexFloatLabel.Input>
                    <WexInput id="fl-md" />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-md">Medium (default)</WexFloatLabel.Label>
                </WexFloatLabel>
                <WexFloatLabel size="lg">
                  <WexFloatLabel.Input>
                    <WexInput id="fl-lg" />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-lg">Large</WexFloatLabel.Label>
                </WexFloatLabel>
                <WexFloatLabel size="xl">
                  <WexFloatLabel.Input>
                    <WexInput id="fl-xl" />
                  </WexFloatLabel.Input>
                  <WexFloatLabel.Label htmlFor="fl-xl">Extra large</WexFloatLabel.Label>
                </WexFloatLabel>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Input ── */}
      <PageSection title="Input">
        <DemoCard title="Variants &amp; Sizes">
          <DemoRow>
            <DemoCell label="Default / Filled">
              <div className="flex flex-col gap-3 w-64">
                <WexInput variant="default" placeholder="Default variant" />
                <WexInput variant="filled" placeholder="Filled variant" />
              </div>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex flex-col gap-3 w-64">
                <WexInput size="md" placeholder="Medium (default, h-10)" />
                <WexInput size="lg" placeholder="Large (h-12)" />
                <WexInput size="xl" placeholder="Extra large (h-14)" />
              </div>
            </DemoCell>

            <DemoCell label="With Icons">
              <div className="flex flex-col gap-3 w-64">
                <WexInput leftIcon={<Search className="size-4" aria-hidden="true" />} placeholder="Search..." />
                <WexInput rightIcon={<Mail className="size-4" aria-hidden="true" />} placeholder="Email" />
                <WexInput
                  leftIcon={<Lock className="size-4" aria-hidden="true" />}
                  rightIcon={<Mail className="size-4" aria-hidden="true" />}
                  placeholder="With both icons"
                />
              </div>
            </DemoCell>

            <DemoCell label="States">
              <div className="flex flex-col gap-3 w-64">
                <WexInput placeholder="Normal" />
                <WexInput invalid placeholder="Invalid / error" />
                <WexInput disabled placeholder="Disabled" />
                <WexInput disabled value="Read-only value" readOnly />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>

        <div className="mt-4">
          <DemoCard title="With WexField">
            <DemoRow>
              <DemoCell label="Label + Description">
                <WexField className="w-64">
                  <WexField.Label htmlFor="email-field">Email</WexField.Label>
                  <WexInput id="email-field" type="email" placeholder="you@example.com" />
                  <WexField.Description>We'll never share your email.</WexField.Description>
                </WexField>
              </DemoCell>

              <DemoCell label="Validation Error">
                <WexField data-invalid="true" className="w-64">
                  <WexField.Label htmlFor="user-field">Username</WexField.Label>
                  <WexInput id="user-field" aria-invalid="true" defaultValue="ab" />
                  <WexField.Error>Must be at least 3 characters.</WexField.Error>
                </WexField>
              </DemoCell>

              <DemoCell label="Horizontal">
                <WexField orientation="horizontal" className="w-72">
                  <WexField.Label htmlFor="h-input">Name</WexField.Label>
                  <WexInput id="h-input" placeholder="Full name" />
                </WexField>
              </DemoCell>
            </DemoRow>
          </DemoCard>
        </div>
      </PageSection>

      {/* ── Input Group ── */}
      <PageSection title="Input Group">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Icon Addons">
              <div className="flex flex-col gap-3 w-64">
                <WexInputGroup>
                  <WexInputGroup.Addon align="inline-start">
                    <Search className="size-4" aria-hidden="true" />
                  </WexInputGroup.Addon>
                  <WexInputGroup.Input placeholder="Search..." aria-label="Search" />
                </WexInputGroup>

                <WexInputGroup>
                  <WexInputGroup.Input placeholder="Email" aria-label="Email" />
                  <WexInputGroup.Addon align="inline-end">
                    <Mail className="size-4" aria-hidden="true" />
                  </WexInputGroup.Addon>
                </WexInputGroup>
              </div>
            </DemoCell>

            <DemoCell label="Text Prefix / Suffix">
              <div className="flex flex-col gap-3 w-64">
                <WexInputGroup>
                  <WexInputGroup.Addon>
                    <WexInputGroup.Text>https://</WexInputGroup.Text>
                  </WexInputGroup.Addon>
                  <WexInputGroup.Input placeholder="example.com" aria-label="Website URL" />
                </WexInputGroup>

                <WexInputGroup>
                  <WexInputGroup.Input placeholder="0.00" aria-label="Price" />
                  <WexInputGroup.Addon align="inline-end">
                    <WexInputGroup.Text>USD</WexInputGroup.Text>
                  </WexInputGroup.Addon>
                </WexInputGroup>
              </div>
            </DemoCell>

            <DemoCell label="Button Actions">
              <div className="flex flex-col gap-3 w-64">
                <WexInputGroup>
                  <WexInputGroup.Input placeholder="Search..." aria-label="Search query" />
                  <WexInputGroup.Addon align="inline-end">
                    <WexInputGroup.Button>Search</WexInputGroup.Button>
                  </WexInputGroup.Addon>
                </WexInputGroup>

                <PasswordInputGroup />
              </div>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex flex-col gap-3 w-64">
                <WexInputGroup size="md">
                  <WexInputGroup.Addon>
                    <Globe className="size-4" aria-hidden="true" />
                  </WexInputGroup.Addon>
                  <WexInputGroup.Input placeholder="Medium" aria-label="Medium size" />
                </WexInputGroup>
                <WexInputGroup size="lg">
                  <WexInputGroup.Addon>
                    <Globe className="size-4" aria-hidden="true" />
                  </WexInputGroup.Addon>
                  <WexInputGroup.Input placeholder="Large" aria-label="Large size" />
                </WexInputGroup>
                <WexInputGroup size="xl">
                  <WexInputGroup.Addon>
                    <Globe className="size-4" aria-hidden="true" />
                  </WexInputGroup.Addon>
                  <WexInputGroup.Input placeholder="Extra large" aria-label="Extra large size" />
                </WexInputGroup>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Input Mask ── */}
      <PageSection title="Input Mask">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Common Patterns">
              <div className="flex flex-col gap-3 w-64">
                <div className="space-y-1">
                  <WexLabel htmlFor="im-phone">Phone</WexLabel>
                  <WexInputMask
                    id="im-phone"
                    mask="(999) 999-9999"
                    placeholder="(___) ___-____"
                    value={phone}
                    onValueChange={(v) => setPhone(v)}
                  />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="im-date">Date</WexLabel>
                  <WexInputMask id="im-date" mask="99/99/9999" placeholder="MM/DD/YYYY" />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="im-zip">ZIP+4</WexLabel>
                  <WexInputMask id="im-zip" mask="99999-9999" placeholder="_____-____" />
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Sensitive Data">
              <div className="flex flex-col gap-3 w-64">
                <div className="space-y-1">
                  <WexLabel htmlFor="im-ssn">SSN</WexLabel>
                  <WexInputMask
                    id="im-ssn"
                    mask="999-99-9999"
                    placeholder="___-__-____"
                    value={ssn}
                    onValueChange={(v) => setSsn(v)}
                  />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="im-cc">Credit Card</WexLabel>
                  <WexInputMask
                    id="im-cc"
                    mask="9999 9999 9999 9999"
                    placeholder="____ ____ ____ ____"
                    value={cc}
                    onValueChange={(v) => setCc(v)}
                  />
                </div>
                <div className="space-y-1">
                  <WexLabel htmlFor="im-time">Time</WexLabel>
                  <WexInputMask id="im-time" mask="99:99" placeholder="HH:MM" />
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex flex-col gap-3 w-64">
                <WexInputMask size="md" mask="(999) 999-9999" placeholder="Medium (___) ___-____" />
                <WexInputMask size="lg" mask="(999) 999-9999" placeholder="Large (___) ___-____" />
                <WexInputMask size="xl" mask="(999) 999-9999" placeholder="XL (___) ___-____" />
              </div>
            </DemoCell>

            <DemoCell label="States">
              <div className="flex flex-col gap-3 w-64">
                <WexInputMask mask="(999) 999-9999" placeholder="Normal (___) ___-____" />
                <WexInputMask mask="(999) 999-9999" invalid placeholder="Invalid (___) ___-____" />
                <WexInputMask mask="(999) 999-9999" disabled placeholder="Disabled (___) ___-____" />
                <WexInputMask
                  mask="(999) 999-9999"
                  placeholder="Auto-clear on blur"
                  autoClear
                />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>
      {/* ── Input Number ── */}
      <PageSection title="Input Number">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Decimal">
              <div className="w-56">
                <WexInputNumber
                  value={numDecimal}
                  onValueChange={setNumDecimal}
                  mode="decimal"
                  placeholder="0.00"
                  minFractionDigits={2}
                  maxFractionDigits={2}
                  min={0}
                />
              </div>
            </DemoCell>

            <DemoCell label="Currency">
              <div className="w-56">
                <WexInputNumber
                  value={numCurrency}
                  onValueChange={setNumCurrency}
                  mode="currency"
                  currency="USD"
                  placeholder="$0.00"
                />
              </div>
            </DemoCell>

            <DemoCell label="With Stacked Buttons">
              <div className="w-56">
                <WexInputNumber
                  value={numStepper}
                  onValueChange={setNumStepper}
                  showButtons
                  buttonLayout="stacked"
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
            </DemoCell>

            <DemoCell label="Horizontal Buttons">
              <div className="w-56">
                <WexInputNumber
                  defaultValue={10}
                  showButtons
                  buttonLayout="horizontal"
                  min={0}
                  max={50}
                  step={5}
                />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Input OTP ── */}
      <PageSection title="Input OTP">
        <DemoCard>
          <DemoRow>
            <DemoCell label="6-Digit Code">
              <WexInputOTP
                maxLength={6}
                value={otpCode}
                onChange={setOtpCode}
                autoComplete="one-time-code"
                aria-label="One-time password"
              >
                <WexInputOTP.Group>
                  <WexInputOTP.Slot index={0} />
                  <WexInputOTP.Slot index={1} />
                  <WexInputOTP.Slot index={2} />
                  <WexInputOTP.Slot index={3} />
                  <WexInputOTP.Slot index={4} />
                  <WexInputOTP.Slot index={5} />
                </WexInputOTP.Group>
              </WexInputOTP>
            </DemoCell>

            <DemoCell label="With Separator">
              <WexInputOTP maxLength={6} aria-label="Verification code with separator">
                <WexInputOTP.Group>
                  <WexInputOTP.Slot index={0} />
                  <WexInputOTP.Slot index={1} />
                  <WexInputOTP.Slot index={2} />
                </WexInputOTP.Group>
                <WexInputOTP.Separator />
                <WexInputOTP.Group>
                  <WexInputOTP.Slot index={3} />
                  <WexInputOTP.Slot index={4} />
                  <WexInputOTP.Slot index={5} />
                </WexInputOTP.Group>
              </WexInputOTP>
            </DemoCell>

            <DemoCell label="Disabled">
              <WexInputOTP maxLength={6} disabled defaultValue="123" aria-label="Disabled OTP">
                <WexInputOTP.Group>
                  <WexInputOTP.Slot index={0} />
                  <WexInputOTP.Slot index={1} />
                  <WexInputOTP.Slot index={2} />
                  <WexInputOTP.Slot index={3} />
                  <WexInputOTP.Slot index={4} />
                  <WexInputOTP.Slot index={5} />
                </WexInputOTP.Group>
              </WexInputOTP>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Listbox ── */}
      <PageSection title="Listbox">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single Selection">
              <WexListbox
                options={cityOptions}
                value={listSingle}
                onValueChange={(v) => setListSingle(v as string | null)}
                checkmark
                aria-label="Select a city"
              >
                <WexListbox.Options />
              </WexListbox>
            </DemoCell>

            <DemoCell label="Multiple with Checkboxes">
              <WexListbox
                options={cityOptions}
                value={listMulti}
                onValueChange={(v) => setListMulti(v as string[])}
                multiple
                checkbox
                aria-label="Select cities"
              >
                <WexListbox.SelectAll />
                <WexListbox.Options />
              </WexListbox>
            </DemoCell>

            <DemoCell label="With Filter">
              <WexListbox
                options={cityOptions}
                value={listSingle}
                onValueChange={(v) => setListSingle(v as string | null)}
                checkmark
                aria-label="Search and select city"
              >
                <WexListbox.Header>
                  <WexListbox.Filter placeholder="Search cities..." />
                </WexListbox.Header>
                <WexListbox.Options />
                <WexListbox.Empty>No cities found</WexListbox.Empty>
              </WexListbox>
            </DemoCell>

            <DemoCell label="Grouped">
              <WexListbox
                options={cityOptions}
                value={listSingle}
                onValueChange={(v) => setListSingle(v as string | null)}
                checkmark
                aria-label="Select city by region"
              >
                <WexListbox.Options />
              </WexListbox>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Multi Select ── */}
      <PageSection title="Multi Select">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Comma Display">
              <div className="w-64">
                <WexMultiSelect
                  options={multiOptions}
                  value={multiComma}
                  onValueChange={setMultiComma}
                  placeholder="Select cities..."
                />
              </div>
            </DemoCell>

            <DemoCell label="Chips Display">
              <div className="w-64">
                <WexMultiSelect
                  options={multiOptions}
                  value={multiChips}
                  onValueChange={setMultiChips}
                  display="chips"
                  placeholder="Select cities..."
                />
              </div>
            </DemoCell>

            <DemoCell label="With Filter + Select All">
              <div className="w-64">
                <WexMultiSelect
                  options={multiOptions}
                  value={multiComma}
                  onValueChange={setMultiComma}
                  filter
                  showSelectAll
                  placeholder="Select cities..."
                />
              </div>
            </DemoCell>

            <DemoCell label="Disabled">
              <div className="w-64">
                <WexMultiSelect
                  options={multiOptions}
                  value={["ny", "la"]}
                  onValueChange={() => {}}
                  disabled
                  placeholder="Select cities..."
                />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Radio Group ── */}
      <PageSection title="Radio Group">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Vertical (default)">
              <WexRadioGroup value={radioBasic} onValueChange={setRadioBasic}>
                {["option-one", "option-two", "option-three"].map((val) => (
                  <div key={val} className="flex items-center space-x-2">
                    <WexRadioGroup.Item value={val} id={`rg-${val}`} />
                    <WexLabel htmlFor={`rg-${val}`} className="capitalize">{val.replace("-", " ")}</WexLabel>
                  </div>
                ))}
              </WexRadioGroup>
            </DemoCell>

            <DemoCell label="Horizontal">
              <WexRadioGroup defaultValue="sm" className="flex gap-6">
                {["sm", "md", "lg", "xl"].map((val) => (
                  <div key={val} className="flex items-center space-x-2">
                    <WexRadioGroup.Item value={val} id={`rh-${val}`} />
                    <WexLabel htmlFor={`rh-${val}`} className="uppercase">{val}</WexLabel>
                  </div>
                ))}
              </WexRadioGroup>
            </DemoCell>

            <DemoCell label="With Disabled Option">
              <WexRadioGroup defaultValue="enabled">
                <div className="flex items-center space-x-2">
                  <WexRadioGroup.Item value="enabled" id="rd-enabled" />
                  <WexLabel htmlFor="rd-enabled">Available</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexRadioGroup.Item value="disabled" id="rd-disabled" disabled />
                  <WexLabel htmlFor="rd-disabled" className="text-muted-foreground">Unavailable</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexRadioGroup.Item value="other" id="rd-other" />
                  <WexLabel htmlFor="rd-other">Other option</WexLabel>
                </div>
              </WexRadioGroup>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Select ── */}
      <PageSection title="Select">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Basic">
              <div className="w-full space-y-2">
                <WexLabel id="fruit-label">Favorite Fruit</WexLabel>
                <WexSelect value={selectFruit} onValueChange={setSelectFruit}>
                  <WexSelect.Trigger aria-labelledby="fruit-label" className="w-full">
                    <WexSelect.Value placeholder="Select a fruit" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="apple">Apple</WexSelect.Item>
                    <WexSelect.Item value="banana">Banana</WexSelect.Item>
                    <WexSelect.Item value="orange">Orange</WexSelect.Item>
                    <WexSelect.Item value="mango">Mango</WexSelect.Item>
                    <WexSelect.Item value="grape">Grape</WexSelect.Item>
                    <WexSelect.Item value="pineapple">Pineapple</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
              </div>
            </DemoCell>

            <DemoCell label="Grouped Options">
              <div className="w-full space-y-2">
                <WexLabel id="tz-label">Timezone</WexLabel>
                <WexSelect value={selectTimezone} onValueChange={setSelectTimezone}>
                  <WexSelect.Trigger aria-labelledby="tz-label" className="w-full">
                    <WexSelect.Value placeholder="Select timezone" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Group>
                      <WexSelect.Label>North America</WexSelect.Label>
                      <WexSelect.Item value="pst">Pacific (PST)</WexSelect.Item>
                      <WexSelect.Item value="mst">Mountain (MST)</WexSelect.Item>
                      <WexSelect.Item value="cst">Central (CST)</WexSelect.Item>
                      <WexSelect.Item value="est">Eastern (EST)</WexSelect.Item>
                    </WexSelect.Group>
                    <WexSelect.Separator />
                    <WexSelect.Group>
                      <WexSelect.Label>Europe</WexSelect.Label>
                      <WexSelect.Item value="gmt">GMT</WexSelect.Item>
                      <WexSelect.Item value="cet">Central European (CET)</WexSelect.Item>
                      <WexSelect.Item value="eet">Eastern European (EET)</WexSelect.Item>
                    </WexSelect.Group>
                    <WexSelect.Separator />
                    <WexSelect.Group>
                      <WexSelect.Label>Asia Pacific</WexSelect.Label>
                      <WexSelect.Item value="ist">India (IST)</WexSelect.Item>
                      <WexSelect.Item value="jst">Japan (JST)</WexSelect.Item>
                      <WexSelect.Item value="aest">Australia Eastern (AEST)</WexSelect.Item>
                    </WexSelect.Group>
                  </WexSelect.Content>
                </WexSelect>
              </div>
            </DemoCell>

            <DemoCell label="Sizes">
              <div className="flex flex-col gap-3 w-full">
                <WexSelect defaultValue="md">
                  <WexSelect.Trigger size="md" className="w-full">
                    <WexSelect.Value placeholder="Medium" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="md">Medium (default)</WexSelect.Item>
                    <WexSelect.Item value="md-2">Option Two</WexSelect.Item>
                    <WexSelect.Item value="md-3">Option Three</WexSelect.Item>
                    <WexSelect.Item value="md-4">Option Four</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
                <WexSelect defaultValue="lg">
                  <WexSelect.Trigger size="lg" className="w-full">
                    <WexSelect.Value placeholder="Large" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="lg">Large</WexSelect.Item>
                    <WexSelect.Item value="lg-2">Option Two</WexSelect.Item>
                    <WexSelect.Item value="lg-3">Option Three</WexSelect.Item>
                    <WexSelect.Item value="lg-4">Option Four</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
                <WexSelect defaultValue="xl">
                  <WexSelect.Trigger size="xl" className="w-full">
                    <WexSelect.Value placeholder="Extra large" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="xl">Extra large</WexSelect.Item>
                    <WexSelect.Item value="xl-2">Option Two</WexSelect.Item>
                    <WexSelect.Item value="xl-3">Option Three</WexSelect.Item>
                    <WexSelect.Item value="xl-4">Option Four</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
              </div>
            </DemoCell>

            <DemoCell label="States">
              <div className="flex flex-col gap-3 w-full">
                <WexSelect>
                  <WexSelect.Trigger invalid={!selectFruit} className="w-full">
                    <WexSelect.Value placeholder="Invalid (required)" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="a">Alpha</WexSelect.Item>
                    <WexSelect.Item value="b">Beta</WexSelect.Item>
                    <WexSelect.Item value="c">Gamma</WexSelect.Item>
                    <WexSelect.Item value="d">Delta</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
                <WexSelect disabled>
                  <WexSelect.Trigger className="w-full">
                    <WexSelect.Value placeholder="Disabled" />
                  </WexSelect.Trigger>
                  <WexSelect.Content>
                    <WexSelect.Item value="a">Alpha</WexSelect.Item>
                    <WexSelect.Item value="b">Beta</WexSelect.Item>
                    <WexSelect.Item value="c">Gamma</WexSelect.Item>
                    <WexSelect.Item value="d">Delta</WexSelect.Item>
                  </WexSelect.Content>
                </WexSelect>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Slider ── */}
      <PageSection title="Slider">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Single Thumb">
              <div className="w-64 space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Value</span>
                  <span>{sliderSingle[0]}</span>
                </div>
                <WexSlider
                  value={sliderSingle}
                  onValueChange={setSliderSingle}
                  max={100}
                  step={1}
                  aria-label="Single slider"
                />
              </div>
            </DemoCell>

            <DemoCell label="Range (Two Thumbs)">
              <div className="w-64 space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Range</span>
                  <span>{sliderRange[0]} – {sliderRange[1]}</span>
                </div>
                <WexSlider
                  value={sliderRange}
                  onValueChange={setSliderRange}
                  max={100}
                  step={5}
                  minStepsBetweenThumbs={1}
                  aria-label="Price range slider"
                />
              </div>
            </DemoCell>

            <DemoCell label="Custom Step">
              <div className="w-64 space-y-3">
                <p className="text-sm text-muted-foreground">Step: 25</p>
                <WexSlider defaultValue={[50]} max={100} step={25} aria-label="Step slider" />
              </div>
            </DemoCell>

            <DemoCell label="Disabled">
              <div className="w-64 space-y-3">
                <WexSlider defaultValue={[40]} max={100} disabled aria-label="Disabled slider" />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Switch ── */}
      <PageSection title="Switch">
        <DemoCard>
          <DemoRow>
            <DemoCell label="States">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-off" />
                  <WexLabel htmlFor="sw-off">Off (default)</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-on" defaultChecked />
                  <WexLabel htmlFor="sw-on">On</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-dis-off" disabled />
                  <WexLabel htmlFor="sw-dis-off" className="text-muted-foreground">Disabled off</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-dis-on" disabled defaultChecked />
                  <WexLabel htmlFor="sw-dis-on" className="text-muted-foreground">Disabled on</WexLabel>
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Controlled">
              <div className="flex flex-col gap-4">
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-notif" checked={switchNotif} onCheckedChange={setSwitchNotif} />
                  <WexLabel htmlFor="sw-notif">Notifications {switchNotif ? "on" : "off"}</WexLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <WexSwitch id="sw-dark" checked={switchDark} onCheckedChange={setSwitchDark} />
                  <WexLabel htmlFor="sw-dark">Dark mode {switchDark ? "on" : "off"}</WexLabel>
                </div>
              </div>
            </DemoCell>

            <DemoCell label="Settings Pattern">
              <div className="flex flex-col gap-4 w-72">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <WexLabel htmlFor="sw-push">Push Notifications</WexLabel>
                    <p className="text-sm text-muted-foreground">Receive alerts on your device.</p>
                  </div>
                  <WexSwitch id="sw-push" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <WexLabel htmlFor="sw-email">Email Digest</WexLabel>
                    <p className="text-sm text-muted-foreground">Weekly summary emails.</p>
                  </div>
                  <WexSwitch id="sw-email" />
                </div>
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

      {/* ── Textarea ── */}
      <PageSection title="Textarea">
        <DemoCard>
          <DemoRow>
            <DemoCell label="Basic">
              <div className="w-64 space-y-2">
                <WexLabel htmlFor="ta-basic">Message</WexLabel>
                <WexTextarea id="ta-basic" placeholder="Type your message here..." rows={4} />
              </div>
            </DemoCell>

            <DemoCell label="Auto Resize">
              <div className="w-64 space-y-2">
                <WexLabel htmlFor="ta-auto">Auto resize</WexLabel>
                <WexTextarea
                  id="ta-auto"
                  autoResize
                  placeholder="Start typing — grows with content..."
                  value={textareaAuto}
                  onChange={(e) => setTextareaAuto(e.target.value)}
                />
              </div>
            </DemoCell>

            <DemoCell label="With Character Count">
              <div className="w-64 space-y-1">
                <WexLabel htmlFor="ta-bio">Bio</WexLabel>
                <WexTextarea
                  id="ta-bio"
                  placeholder="Write a brief bio..."
                  maxLength={200}
                  rows={3}
                  value={textareaBio}
                  onChange={(e) => setTextareaBio(e.target.value)}
                />
                <p className="text-xs text-muted-foreground text-right">{textareaBio.length} / 200</p>
              </div>
            </DemoCell>

            <DemoCell label="States">
              <div className="flex flex-col gap-3 w-64">
                <WexTextarea placeholder="Normal" rows={2} />
                <WexTextarea invalid placeholder="Invalid / error" rows={2} />
                <WexTextarea disabled placeholder="Disabled" rows={2} />
                <WexTextarea readOnly defaultValue="Read-only content." rows={2} />
              </div>
            </DemoCell>
          </DemoRow>
        </DemoCard>
      </PageSection>

    </>
  );
}

function PasswordInputGroup() {
  const [show, setShow] = useState(false);
  return (
    <WexInputGroup>
      <WexInputGroup.Input
        type={show ? "text" : "password"}
        placeholder="Password"
        aria-label="Password"
      />
      <WexInputGroup.Addon align="inline-end">
        <WexInputGroup.Button
          iconOnly
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          onClick={() => setShow((s) => !s)}
        >
          {show
            ? <EyeOff className="size-4" aria-hidden="true" />
            : <Eye className="size-4" aria-hidden="true" />}
        </WexInputGroup.Button>
      </WexInputGroup.Addon>
    </WexInputGroup>
  );
}
