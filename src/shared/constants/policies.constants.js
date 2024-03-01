export const tableSettings = [
  {
    id: 1,
    title: "Self-absorption",
    caption:
      "Share samples with Nucleon-Security CTI (helps to improve detection rate)",
  },
  {
    id: 2,
    title: "Analysis sharing ",
    caption:
      "Create security rules automatically to allow triggered weak signals (only possible in alert mode)",
  },
  {
    id: 3,
    title: "User notifications",
    caption:
      "Show desktop notification when a threat is identified on an endpoint",
  },
  {
    id: 4,
    title: "Network monitoring",
    caption: "Control network connections",
  },
  {
    id: 5,
    title: "Smart scan",
    caption: "Scan local drives for suspicious files when the user is idle",
  },
  {
    id: 6,
    title: "Rollback",
    caption: "Enable system snapshots to restore data in case of compromise",
  },
  {
    id: 7,
    title: "Snapshot all disks",
    caption:
      "Create a snapshot for each local disk on the endpoint (network shares excluded)",
  },
  {
    id: 8,
    title: "Snapshot frequency",
    caption: "Delay between each volume snapshot",
  },
  {
    id: 9,
    title: "Heartbeat frequency",
    caption: "Seconds between each server communication done by an endpoint",
  },
  {
    id: 10,
    title: "Analysis limit",
    caption:
      "Maximum size (in Megabytes) of a file to send for analysis, if higher the anlaysis switch to offline condition",
  },
];

export const customApplications = [
  {
    value: "correctionformula",
    label: "Correction Forfula",
    image: "/images/policies/correction.png",
  },
];

export const defaultApplications = [
  { value: "macfee", label: "MACfee", image: "/images/policies/macfee.png" },
  { value: "adobe", label: "Adobe", image: "/images/policies/adobe.png" },
  { value: "dell", label: "Dell", image: "/images/policies/dell.png" },
  { value: "samsung", label: "Samsung", image: "/images/policies/samsung.png" },
  {
    value: "microsoft",
    label: "Microsoft",
    image: "/images/policies/microsoft-office.png",
  },
  { value: "google", label: "Google", image: "/images/policies/google.png" },
  { value: "apple", label: "Apple", image: "/images/policies/apple.png" },
  { value: "brave", label: "Brave", image: "/images/policies/Brave.png" },
  { value: "cisco", label: "Cisco", image: "/images/policies/cisco.png" },
  { value: "dropbox", label: "Dropbox", image: "/images/policies/dropbox.png" },
];
