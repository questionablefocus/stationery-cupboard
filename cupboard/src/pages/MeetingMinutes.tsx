import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Printer } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MeetingMinutes } from "stationery-cupboard";
import { Button } from "@/components/ui/button";

interface MeetingData {
  id: string;
  title: string;
  template: string;
  data: any;
}

const MeetingMinutesPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [meetingData, setMeetingData] = useState<MeetingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchMeetingData = async (slug: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/examples/meeting-minutes/${slug}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMeetingData(data);
    } catch (error) {
      console.error(`Error fetching ${slug} meeting data:`, error);
      setError("Failed to load meeting template. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetingData(slug);
  }, [slug]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-40" />
        </div>
        <Skeleton className="h-[60vh] w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="p-6 bg-destructive/10 text-destructive rounded-md">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between no-print">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold">{meetingData?.title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
        </div>
      </div>

      <div className="template-container">
        <MeetingMinutes data={meetingData?.data} />
      </div>
    </div>
  );
};

export default MeetingMinutesPage;
