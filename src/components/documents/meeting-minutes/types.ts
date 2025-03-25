import { BaseDocumentProps } from "../BaseDocument";

export interface Participant {
  name: string;
  role?: string;
  organization?: string;
  email?: string;
}

export interface Agenda {
  title: string;
  description?: string;
}

export interface ActionItem {
  id: string;
  task: string;
  assignee: string;
  dueDate?: string;
  status?: "pending" | "completed" | "in-progress" | "deferred";
}

export interface MeetingMinutesData {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location?: string;
  organizationLogo?: string;
  organizationName?: string;
  participants: Participant[];
  absentees?: Participant[];
  agendaItems: Agenda[];
  minutesMarkdown: string;
  actionItems?: ActionItem[];
  followUpMeeting?: {
    date?: string;
    time?: string;
    location?: string;
  };
}

export interface MeetingMinutesProps extends BaseDocumentProps {
  data: MeetingMinutesData;
}
