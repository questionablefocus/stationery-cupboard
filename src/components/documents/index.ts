export { BaseDocument } from "./BaseDocument";
export type { BaseDocumentProps } from "./BaseDocument";

// Invoice
export { Invoice } from "./invoice/template";
export type { InvoiceProps, InvoiceData, InvoiceItem } from "./invoice/types";

// Meeting Minutes
export { MeetingMinutes } from "./meeting-minutes/template";
export type {
  MeetingMinutesProps,
  MeetingMinutesData,
  Participant,
  Agenda,
  ActionItem,
} from "./meeting-minutes/types";
