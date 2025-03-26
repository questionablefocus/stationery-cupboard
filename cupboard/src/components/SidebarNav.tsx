import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  FileText,
  ClipboardList,
  ChevronRight,
  ChevronDown,
  Home,
} from "lucide-react";

const invoiceExamples = [
  { slug: "simple", title: "Simple Invoice" },
  { slug: "detailed", title: "Detailed Invoice" },
];

const meetingExamples = [
  { slug: "basic", title: "Basic Minutes" },
  { slug: "corporate", title: "Corporate Minutes" },
  { slug: "action-items", title: "Action Items" },
];

const SidebarNav: React.FC = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({
    invoices: true,
    meetings: true,
  });

  const toggleSection = (section: "invoices" | "meetings") => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="py-10 space-y-4">
      <div>
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2 w-full rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
            isActive("/") && "bg-accent text-accent-foreground font-medium"
          )}
        >
          <Home size={16} />
          <span>Introduction</span>
        </Link>
      </div>

      <div className="space-y-1">
        <div
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium cursor-pointer hover:text-primary transition-colors"
          onClick={() => toggleSection("invoices")}
        >
          <div className="flex items-center gap-2">
            <FileText size={16} />
            <span>Invoices</span>
          </div>
          {openSections.invoices ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </div>

        {openSections.invoices && (
          <div className="pl-4 space-y-1">
            {invoiceExamples.map((example) => (
              <Link
                key={example.slug}
                to={`/invoices/${example.slug}`}
                className={cn(
                  "flex items-center gap-2 w-full rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                  isActive(`/invoices/${example.slug}`) &&
                    "bg-accent text-accent-foreground font-medium"
                )}
              >
                <span>{example.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium cursor-pointer hover:text-primary transition-colors"
          onClick={() => toggleSection("meetings")}
        >
          <div className="flex items-center gap-2">
            <ClipboardList size={16} />
            <span>Meeting Minutes</span>
          </div>
          {openSections.meetings ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
        </div>

        {openSections.meetings && (
          <div className="pl-4 space-y-1">
            {meetingExamples.map((example) => (
              <Link
                key={example.slug}
                to={`/meeting-minutes/${example.slug}`}
                className={cn(
                  "flex items-center gap-2 w-full rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                  isActive(`/meeting-minutes/${example.slug}`) &&
                    "bg-accent text-accent-foreground font-medium"
                )}
              >
                <span>{example.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarNav;
