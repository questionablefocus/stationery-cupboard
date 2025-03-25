
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meetingExamples = [
  { 
    slug: "basic", 
    title: "Basic Minutes", 
    description: "Simple meeting minutes format for general use",
    features: ["Attendee list", "Agenda items", "Discussion summary"]
  },
  { 
    slug: "corporate", 
    title: "Corporate Minutes", 
    description: "Formal meeting minutes for corporate governance",
    features: ["Board members present", "Motions and voting results", "Legal compliance format"]
  },
  { 
    slug: "action-items", 
    title: "Action Items", 
    description: "Focused on tracking decisions and next steps",
    features: ["Action item tracking", "Responsibility assignment", "Due dates"]
  }
];

const MeetingMinutes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meeting Minutes Templates</h1>
        <p className="text-muted-foreground">
          Efficient templates for documenting meetings and tracking action items.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {meetingExamples.map((example) => (
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
                <Link to={`/meeting-minutes/${example.slug}`}>View Template</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MeetingMinutes;
