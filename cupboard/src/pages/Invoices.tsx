
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const invoiceExamples = [
  { 
    slug: "simple", 
    title: "Simple Invoice", 
    description: "A clean, basic invoice template for everyday use",
    features: ["Item list", "Tax calculation", "Payment terms"]
  },
  { 
    slug: "detailed", 
    title: "Detailed Invoice", 
    description: "Comprehensive invoice with additional fields and details",
    features: ["Detailed line items", "Multiple tax rates", "Custom fields", "Notes section"]
  },
  { 
    slug: "freelance", 
    title: "Freelance Invoice", 
    description: "Perfect for independent contractors and freelancers",
    features: ["Project-based billing", "Payment options", "Professional header"]
  }
];

const Invoices: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Invoice Templates</h1>
        <p className="text-muted-foreground">
          Browse our collection of professional invoice templates.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {invoiceExamples.map((example) => (
          <Card key={example.slug} className="overflow-hidden transition-all duration-200 hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle>{example.title}</CardTitle>
              <CardDescription>{example.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-1.5">
                <div className="text-sm font-medium">Features:</div>
                <ul className="text-sm list-disc pl-5 text-muted-foreground">
                  {example.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to={`/invoices/${example.slug}`}>View Template</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
