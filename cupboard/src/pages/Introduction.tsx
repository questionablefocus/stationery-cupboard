import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, ClipboardList } from "lucide-react";

const Introduction: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Stationery Cupboard
        </h1>
        <p className="text-muted-foreground">
          Showcase of business document templates for your business.
        </p>
      </div>

      <div className="rounded-lg border p-6 mt-6">
        <h3 className="text-lg font-medium mb-2">
          About this Component Library
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          The Stationery Cupboard is a showcase for an npm package that provides
          business document templates. This demonstration app allows you to
          browse and preview the available templates.
        </p>
        <div className="bg-muted p-3 rounded-md text-sm font-mono">
          npm install @questionablefocus/stationery-cupboard
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <FileText className="h-8 w-8" />
            <div>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>Professional invoice templates</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Our invoice templates provide clean, professional layouts for all
              your business needs, from simple receipts to detailed billing
              documents.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-200 hover:shadow-md">
          <CardHeader className="flex flex-row items-center gap-4">
            <ClipboardList className="h-8 w-8" />
            <div>
              <CardTitle>Meeting Minutes</CardTitle>
              <CardDescription>
                Structured meeting documentation
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Capture important discussions, decisions, and action items with
              our collection of meeting minutes templates for various
              organizational needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
