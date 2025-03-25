
import { LucideIcon, AlertCircle, FileText, FileCheck, FileClock, FileSearch, Home, FileQuestion, ClipboardList, ClipboardCheck } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: FileText,
  home: Home,
  invoice: FileText,
  meetingMinutes: ClipboardList,
  actionItems: ClipboardCheck,
  error: AlertCircle,
  detailed: FileSearch,
  simple: FileCheck,
  freelance: FileClock,
  basic: FileCheck,
  corporate: FileText,
  question: FileQuestion
};

export default Icons;
