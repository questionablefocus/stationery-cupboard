export { BaseDocument } from "./BaseDocument";
export type { BaseDocumentProps } from "./BaseDocument";

// Invoice Document
export { InvoiceDocument } from "./invoice/template";
export type {
  InvoiceDocumentProps,
  InvoiceData,
  InvoiceItem,
} from "./invoice/types";

// Meeting Minutes Document
export { MeetingMinutesDocument } from "./meeting-minutes/template";
export type {
  MeetingMinutesDocumentProps,
  MeetingMinutesData,
  Participant,
  Agenda,
  ActionItem,
} from "./meeting-minutes/types";
