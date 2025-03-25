
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer, Download } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MeetingData {
  id: string;
  title: string;
  template: string;
  data: any;
}

const MeetingMinutesTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [meetingData, setMeetingData] = useState<MeetingData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating fetch from API - in a real app, this would be actual data
    const fetchData = async () => {
      setLoading(true);
      try {
        // Instead of actually fetching, we're using dummy data based on the slug
        // This simulates loading data from JSON files
        setTimeout(() => {
          // Simple example data for demo purposes
          if (slug === "basic") {
            setMeetingData({
              id: "basic",
              title: "Basic Meeting Minutes",
              template: "basic",
              data: {
                meetingTitle: "Weekly Team Check-in",
                date: "May 10, 2023",
                time: "10:00 AM - 11:30 AM",
                location: "Conference Room A",
                facilitator: "Jane Smith",
                attendees: [
                  "John Doe (Marketing)",
                  "Sarah Johnson (Product)",
                  "Michael Brown (Engineering)",
                  "Emma Wilson (Design)",
                  "Robert Garcia (Sales)"
                ],
                absentees: [
                  "Lisa Chen (Finance)"
                ],
                agenda: [
                  "Project status updates",
                  "Upcoming deadlines",
                  "Resource allocation",
                  "Any other business"
                ],
                discussionItems: [
                  {
                    topic: "Project status updates",
                    notes: "Marketing campaign is on track. Product feature development is delayed by 2 days. Engineering team completed the backend API ahead of schedule. Design team needs additional resources for the UI revamp.",
                    decisions: "Reallocate one designer from the mobile app project to help with the UI revamp."
                  },
                  {
                    topic: "Upcoming deadlines",
                    notes: "Product launch scheduled for June 15. All teams need to finalize their contributions by June 1 for final review.",
                    decisions: "Each team lead will submit a detailed timeline by end of week."
                  },
                  {
                    topic: "Resource allocation",
                    notes: "Engineering team requests additional server resources for the new deployment. Sales team needs updated marketing materials for the Q3 sales push.",
                    decisions: "IT will provision new servers by May 15. Marketing to prioritize sales materials for completion by May 20."
                  },
                  {
                    topic: "Any other business",
                    notes: "Office move planned for July discussed briefly. More details to follow in dedicated meeting next week.",
                    decisions: "HR to send office move details and schedule follow-up meeting."
                  }
                ],
                actionItems: [
                  {
                    action: "Submit detailed project timelines",
                    assignedTo: "All Team Leads",
                    dueDate: "May 17, 2023"
                  },
                  {
                    action: "Provision new servers for deployment",
                    assignedTo: "IT Team",
                    dueDate: "May 15, 2023"
                  },
                  {
                    action: "Complete sales materials for Q3",
                    assignedTo: "Marketing Team",
                    dueDate: "May 20, 2023"
                  },
                  {
                    action: "Send office move details",
                    assignedTo: "HR Department",
                    dueDate: "May 12, 2023"
                  }
                ],
                nextMeeting: {
                  date: "May 17, 2023",
                  time: "10:00 AM",
                  location: "Conference Room A"
                },
                notes: "Minutes recorded by: Emma Wilson"
              }
            });
          } else if (slug === "corporate") {
            setMeetingData({
              id: "corporate",
              title: "Corporate Meeting Minutes",
              template: "corporate",
              data: {
                companyName: "Acme Corporation",
                meetingType: "Board of Directors Meeting",
                meetingNumber: "Q2-2023-BOD-004",
                fiscalYear: "2023",
                date: "April 15, 2023",
                time: {
                  start: "9:00 AM",
                  end: "12:30 PM"
                },
                location: "Corporate Headquarters, Boardroom 5",
                chairperson: "Jonathan Reynolds",
                secretary: "Victoria Chen",
                directors: {
                  present: [
                    "Jonathan Reynolds, Chairperson",
                    "Maria Garcia, Vice Chair",
                    "David Kim, Treasurer",
                    "Alexandra Singh, Secretary",
                    "Robert Johnson, Director",
                    "Helen Martinez, Director"
                  ],
                  absent: [
                    "Thomas Nelson, Director (excused)"
                  ]
                },
                attendees: {
                  officers: [
                    "Elizabeth Wong, CEO",
                    "Michael Davis, CFO",
                    "James Rodriguez, CTO",
                    "Victoria Chen, Corporate Secretary"
                  ],
                  guests: [
                    "Sarah Peterson, Legal Counsel",
                    "Brian Matthews, External Auditor (KPMG, for Agenda Item 3 only)"
                  ]
                },
                quorum: {
                  required: 5,
                  present: 6,
                  achieved: true
                },
                callToOrder: {
                  time: "9:05 AM",
                  statement: "The regular meeting of the Board of Directors of Acme Corporation was called to order at 9:05 AM on April 15, 2023, at the Corporate Headquarters, Jonathan Reynolds presiding, and Victoria Chen as secretary."
                },
                approvalOfMinutes: {
                  date: "January 28, 2023",
                  motion: {
                    proposed: "Robert Johnson",
                    seconded: "Maria Garcia"
                  },
                  amendments: "Correction to the attendance record: Helen Martinez was present at the previous meeting.",
                  voteResult: "Approved unanimously with noted amendment."
                },
                agendaItems: [
                  {
                    title: "1. Financial Performance Review - Q1 2023",
                    presenter: "Michael Davis, CFO",
                    discussion: "Mr. Davis presented the financial results for Q1 2023. Revenue increased by 12% compared to the same period last year, with a profit margin of 18.5%. The company's cash reserves stand at $45 million, and all debt covenants are being met. The European division exceeded targets by 7%, while the Asian division fell short by 3% due to supply chain disruptions.",
                    questions: [
                      "Mr. Johnson inquired about the plan to address the supply chain issues in Asia.",
                      "Ms. Martinez asked about the impact of recent currency fluctuations on the European results."
                    ],
                    responses: [
                      "Mr. Davis explained that alternative suppliers have been identified and should be onboarded by end of Q2.",
                      "Currency hedging strategies implemented in Q4 2022 mitigated most of the impact, resulting in only a 1.2% negative effect."
                    ],
                    motion: {
                      text: "Motion to accept the Q1 2023 Financial Report as presented.",
                      proposed: "David Kim",
                      seconded: "Robert Johnson",
                      vote: {
                        infavor: 6,
                        against: 0,
                        abstained: 0,
                        result: "Approved unanimously."
                      }
                    }
                  },
                  {
                    title: "2. Strategic Expansion Plan",
                    presenter: "Elizabeth Wong, CEO",
                    discussion: "Ms. Wong presented the five-year strategic expansion plan, focusing on market penetration in South America and expansion of product lines in the renewable energy sector. The plan requires a capital investment of $75 million over three years, with expected ROI of 22% by year five. Key risks identified include regulatory changes in target markets and competition from established local businesses.",
                    questions: [
                      "Ms. Singh questioned the timeline for the South American market entry.",
                      "Mr. Reynolds asked about the contingency plans if regulatory approval is delayed."
                    ],
                    responses: [
                      "Ms. Wong indicated that Brazil and Colombia would be targeted in Q1 2024, with Chile and Argentina following in Q3 2024.",
                      "A phased approach allows for redirection of resources if any single market presents unexpected challenges. A 6-month buffer is built into the timeline."
                    ],
                    motion: {
                      text: "Motion to approve the Strategic Expansion Plan with quarterly progress reports to the Board.",
                      proposed: "Maria Garcia",
                      seconded: "Helen Martinez",
                      vote: {
                        infavor: 5,
                        against: 0,
                        abstained: 1,
                        abstainers: "Robert Johnson",
                        result: "Motion approved."
                      }
                    }
                  },
                  {
                    title: "3. External Audit Planning",
                    presenter: "Brian Matthews, KPMG",
                    discussion: "Mr. Matthews presented the audit plan for the 2023 fiscal year, including scope, timeline, and key focus areas. The audit will commence in November 2023 with expected completion by February 2024. Significant attention will be given to the new ERP system implementation and revenue recognition policies for the subscription-based products launched in Q2.",
                    questions: [
                      "Mr. Kim inquired about any changes to the audit approach based on the new accounting standards.",
                      "Ms. Garcia asked about the audit fee structure compared to previous years."
                    ],
                    responses: [
                      "The new lease accounting standard implementation will require additional procedures, which have been incorporated into the plan.",
                      "The proposed fee represents a 5% increase from the previous year, reflecting additional work required for the ERP system audit and new accounting standards."
                    ],
                    motion: {
                      text: "Motion to approve the 2023 audit plan and engagement of KPMG as external auditors with the proposed fee structure.",
                      proposed: "David Kim",
                      seconded: "Alexandra Singh",
                      vote: {
                        infavor: 6,
                        against: 0,
                        abstained: 0,
                        result: "Approved unanimously."
                      }
                    }
                  }
                ],
                executiveSession: {
                  held: true,
                  startTime: "11:45 AM",
                  endTime: "12:15 PM",
                  attendees: "Directors only",
                  notes: "Minutes of the executive session are maintained separately in confidential records."
                },
                newBusiness: "Ms. Singh raised the need for a board governance review in the coming quarter. The Chair directed the Governance Committee to prepare recommendations for the next meeting.",
                announcements: "The annual shareholder meeting is scheduled for May 20, 2023, at 10:00 AM at the Grand Hotel Conference Center.",
                adjournment: {
                  time: "12:30 PM",
                  motion: {
                    proposed: "Robert Johnson",
                    seconded: "Maria Garcia",
                    vote: "Unanimous"
                  }
                },
                nextMeeting: {
                  date: "July 15, 2023",
                  time: "9:00 AM",
                  location: "Corporate Headquarters, Boardroom 5"
                },
                certification: {
                  secretary: "Victoria Chen, Corporate Secretary",
                  chair: "Jonathan Reynolds, Chairperson",
                  approvalDate: "July 15, 2023"
                }
              }
            });
          } else if (slug === "action-items") {
            setMeetingData({
              id: "action-items",
              title: "Action Items Template",
              template: "action-items",
              data: {
                projectName: "Website Redesign Project",
                meetingTitle: "Sprint Planning Meeting",
                date: "June 5, 2023",
                facilitator: "Alex Rodriguez",
                recorder: "Jamie Taylor",
                attendees: [
                  "Alex Rodriguez (Project Manager)",
                  "Jamie Taylor (Product Owner)",
                  "Casey Kim (Lead Developer)",
                  "Morgan Smith (UX Designer)",
                  "Jordan Williams (QA Lead)",
                  "Taylor Johnson (Content Strategist)"
                ],
                meetingGoals: [
                  "Review sprint backlog",
                  "Assign tasks for upcoming sprint",
                  "Identify dependencies and risks",
                  "Set clear deliverables and acceptance criteria"
                ],
                decisions: [
                  "Sprint 3 will focus on the homepage redesign and user authentication system",
                  "User testing will be conducted in the final week of the sprint",
                  "Content migration will be postponed to Sprint 4",
                  "Additional resources will be requested for performance optimization"
                ],
                actionItems: [
                  {
                    id: "AI-001",
                    action: "Create wireframes for the new homepage design",
                    owner: "Morgan Smith",
                    dueDate: "June 10, 2023",
                    priority: "High",
                    status: "In Progress",
                    notes: "Incorporate feedback from stakeholder review on June 3"
                  },
                  {
                    id: "AI-002",
                    action: "Develop API endpoints for user authentication",
                    owner: "Casey Kim",
                    dueDate: "June 15, 2023",
                    priority: "Critical",
                    status: "Not Started",
                    dependencies: "Database schema design (AI-005)",
                    notes: "Follow OAuth 2.0 protocols as specified in technical requirements"
                  },
                  {
                    id: "AI-003",
                    action: "Create test cases for user authentication",
                    owner: "Jordan Williams",
                    dueDate: "June 12, 2023",
                    priority: "Medium",
                    status: "Not Started",
                    dependencies: "API specification document (AI-006)"
                  },
                  {
                    id: "AI-004",
                    action: "Write content for homepage sections",
                    owner: "Taylor Johnson",
                    dueDate: "June 14, 2023",
                    priority: "High",
                    status: "Not Started",
                    dependencies: "Approved wireframes (AI-001)",
                    notes: "Content should align with the new brand guidelines"
                  },
                  {
                    id: "AI-005",
                    action: "Finalize database schema for user profiles",
                    owner: "Casey Kim",
                    dueDate: "June 8, 2023",
                    priority: "High",
                    status: "In Progress"
                  },
                  {
                    id: "AI-006",
                    action: "Document API specifications for authentication",
                    owner: "Casey Kim",
                    dueDate: "June 9, 2023",
                    priority: "Medium",
                    status: "Not Started",
                    dependencies: "Database schema (AI-005)"
                  },
                  {
                    id: "AI-007",
                    action: "Request additional server resources for development",
                    owner: "Alex Rodriguez",
                    dueDate: "June 7, 2023",
                    priority: "Medium",
                    status: "Completed",
                    notes: "Request approved by IT department on June 5"
                  },
                  {
                    id: "AI-008",
                    action: "Schedule user testing sessions for homepage prototype",
                    owner: "Morgan Smith",
                    dueDate: "June 20, 2023",
                    priority: "Medium",
                    status: "Not Started",
                    dependencies: "Completed homepage prototype (AI-009)"
                  },
                  {
                    id: "AI-009",
                    action: "Develop interactive prototype of homepage",
                    owner: "Morgan Smith",
                    dueDate: "June 17, 2023",
                    priority: "High",
                    status: "Not Started",
                    dependencies: "Approved wireframes (AI-001)"
                  },
                  {
                    id: "AI-010",
                    action: "Prepare sprint demo for stakeholders",
                    owner: "Jamie Taylor",
                    dueDate: "June 30, 2023",
                    priority: "Medium",
                    status: "Not Started",
                    dependencies: "Completion of sprint deliverables"
                  }
                ],
                risks: [
                  {
                    description: "Potential delay in homepage design approval from executive team",
                    impact: "Could push back development timeline",
                    mitigation: "Schedule design review meeting with executives for June 12"
                  },
                  {
                    description: "Limited experience with the new authentication system",
                    impact: "May require additional development time",
                    mitigation: "Arrange knowledge transfer session with enterprise security team"
                  },
                  {
                    description: "User testing participants not yet confirmed",
                    impact: "Could delay feedback on homepage design",
                    mitigation: "Send out recruitment emails by June 7 with incentives for participation"
                  }
                ],
                nextSteps: [
                  "Daily stand-up meetings at 9:30 AM",
                  "Mid-sprint review on June 15",
                  "Sprint retrospective scheduled for July 1"
                ],
                attachments: [
                  "Sprint Backlog Document (sprint_backlog_3.pdf)",
                  "Initial Wireframe Concepts (homepage_concepts_v1.pdf)",
                  "Technical Requirements Document (auth_requirements.docx)"
                ]
              }
            });
          } else {
            setError(`No template found for slug: ${slug}`);
          }
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (err) {
        console.error("Error fetching meeting data:", err);
        setError("Failed to load meeting template. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const renderMeetingTemplate = () => {
    if (!meetingData) return null;

    // In a real app, this would render the actual template
    // For this demo, we'll render based on the template type
    switch (meetingData.template) {
      case "basic":
        return renderBasicMeeting(meetingData.data);
      case "corporate":
        return renderCorporateMeeting(meetingData.data);
      case "action-items":
        return renderActionItemsMeeting(meetingData.data);
      default:
        return (
          <div className="p-6 bg-muted rounded-md">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(meetingData.data, null, 2)}
            </pre>
          </div>
        );
    }
  };

  const renderBasicMeeting = (data: any) => {
    return (
      <div className="template-container">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold uppercase mb-1">Meeting Minutes</h1>
          <h2 className="text-xl">{data.meetingTitle}</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p><span className="font-semibold">Date:</span> {data.date}</p>
            <p><span className="font-semibold">Time:</span> {data.time}</p>
            <p><span className="font-semibold">Location:</span> {data.location}</p>
          </div>
          <div>
            <p><span className="font-semibold">Facilitator:</span> {data.facilitator}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Attendees</h3>
          <ul className="list-disc pl-5">
            {data.attendees.map((attendee: string, index: number) => (
              <li key={index}>{attendee}</li>
            ))}
          </ul>
          
          {data.absentees && data.absentees.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Absent</h3>
              <ul className="list-disc pl-5">
                {data.absentees.map((absentee: string, index: number) => (
                  <li key={index}>{absentee}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Agenda</h3>
          <ol className="list-decimal pl-5">
            {data.agenda.map((item: string, index: number) => (
              <li key={index} className="mb-1">{item}</li>
            ))}
          </ol>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Discussion Items</h3>
          {data.discussionItems.map((item: any, index: number) => (
            <div key={index} className="mb-4 border-b pb-4">
              <h4 className="font-semibold">{item.topic}</h4>
              <p className="mb-2"><span className="font-medium">Discussion:</span> {item.notes}</p>
              <p><span className="font-medium">Decision:</span> {item.decisions}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Action Items</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 border">Action Item</th>
                <th className="text-left p-2 border">Assigned To</th>
                <th className="text-left p-2 border">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {data.actionItems.map((item: any, index: number) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-2 border">{item.action}</td>
                  <td className="p-2 border">{item.assignedTo}</td>
                  <td className="p-2 border">{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Next Meeting</h3>
          <p><span className="font-medium">Date:</span> {data.nextMeeting.date}</p>
          <p><span className="font-medium">Time:</span> {data.nextMeeting.time}</p>
          <p><span className="font-medium">Location:</span> {data.nextMeeting.location}</p>
        </div>
        
        <div className="text-sm text-gray-600 mt-8 pt-4 border-t">
          <p>{data.notes}</p>
        </div>
      </div>
    );
  };

  const renderCorporateMeeting = (data: any) => {
    return (
      <div className="template-container">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold uppercase mb-1">{data.companyName}</h1>
          <h2 className="text-lg font-semibold">{data.meetingType}</h2>
          <p className="text-sm">Meeting No. {data.meetingNumber} | Fiscal Year {data.fiscalYear}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p><span className="font-semibold">Date:</span> {data.date}</p>
            <p><span className="font-semibold">Time:</span> {data.time.start} - {data.time.end}</p>
            <p><span className="font-semibold">Location:</span> {data.location}</p>
          </div>
          <div>
            <p><span className="font-semibold">Chairperson:</span> {data.chairperson}</p>
            <p><span className="font-semibold">Secretary:</span> {data.secretary}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Directors Present</h3>
          <ul className="list-disc pl-5">
            {data.directors.present.map((director: string, index: number) => (
              <li key={index}>{director}</li>
            ))}
          </ul>
          
          {data.directors.absent && data.directors.absent.length > 0 && (
            <>
              <h3 className="text-md font-semibold mt-4 mb-2 uppercase bg-gray-100 p-2">Directors Absent</h3>
              <ul className="list-disc pl-5">
                {data.directors.absent.map((director: string, index: number) => (
                  <li key={index}>{director}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Also Present</h3>
          <h4 className="font-medium mt-2 mb-1">Officers:</h4>
          <ul className="list-disc pl-5 mb-2">
            {data.attendees.officers.map((officer: string, index: number) => (
              <li key={index}>{officer}</li>
            ))}
          </ul>
          
          {data.attendees.guests && data.attendees.guests.length > 0 && (
            <>
              <h4 className="font-medium mt-2 mb-1">Guests:</h4>
              <ul className="list-disc pl-5">
                {data.attendees.guests.map((guest: string, index: number) => (
                  <li key={index}>{guest}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        
        <div className="mb-6 p-3 bg-gray-50 border rounded-md">
          <p><span className="font-semibold">Quorum:</span> {data.quorum.required} directors required. {data.quorum.present} directors present. {data.quorum.achieved ? "Quorum achieved." : "Quorum not achieved."}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">1. Call to Order</h3>
          <p>{data.callToOrder.statement}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">2. Approval of Previous Minutes</h3>
          <p><span className="font-medium">Previous meeting date:</span> {data.approvalOfMinutes.date}</p>
          <p><span className="font-medium">Motion proposed by:</span> {data.approvalOfMinutes.motion.proposed}</p>
          <p><span className="font-medium">Motion seconded by:</span> {data.approvalOfMinutes.motion.seconded}</p>
          {data.approvalOfMinutes.amendments && (
            <p><span className="font-medium">Amendments:</span> {data.approvalOfMinutes.amendments}</p>
          )}
          <p><span className="font-medium">Vote result:</span> {data.approvalOfMinutes.voteResult}</p>
        </div>
        
        {data.agendaItems.map((item: any, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">{item.title}</h3>
            <p><span className="font-medium">Presenter:</span> {item.presenter}</p>
            <p className="mt-2 mb-2">{item.discussion}</p>
            
            {(item.questions && item.questions.length > 0) && (
              <div className="mt-2">
                <h4 className="font-medium mb-1">Questions & Responses:</h4>
                {item.questions.map((question: string, qIndex: number) => (
                  <div key={qIndex} className="mb-2 pl-3 border-l-2 border-gray-300">
                    <p className="italic">{question}</p>
                    {item.responses && item.responses[qIndex] && (
                      <p className="pl-3">{item.responses[qIndex]}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {item.motion && (
              <div className="mt-3 p-3 bg-gray-50 border rounded-md">
                <p><span className="font-medium">Motion:</span> {item.motion.text}</p>
                <p><span className="font-medium">Proposed by:</span> {item.motion.proposed}</p>
                <p><span className="font-medium">Seconded by:</span> {item.motion.seconded}</p>
                <p><span className="font-medium">Vote:</span> {item.motion.vote.infavor} in favor, {item.motion.vote.against} against, {item.motion.vote.abstained} abstained.</p>
                {item.motion.vote.abstainers && (
                  <p><span className="font-medium">Abstained:</span> {item.motion.vote.abstainers}</p>
                )}
                <p><span className="font-medium">Result:</span> {item.motion.vote.result}</p>
              </div>
            )}
          </div>
        ))}
        
        {data.executiveSession && data.executiveSession.held && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Executive Session</h3>
            <p><span className="font-medium">Time:</span> {data.executiveSession.startTime} - {data.executiveSession.endTime}</p>
            <p><span className="font-medium">Attendees:</span> {data.executiveSession.attendees}</p>
            <p><span className="font-medium">Notes:</span> {data.executiveSession.notes}</p>
          </div>
        )}
        
        {data.newBusiness && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">New Business</h3>
            <p>{data.newBusiness}</p>
          </div>
        )}
        
        {data.announcements && (
          <div className="mb-6">
            <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Announcements</h3>
            <p>{data.announcements}</p>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Adjournment</h3>
          <p><span className="font-medium">Time:</span> {data.adjournment.time}</p>
          <p><span className="font-medium">Motion proposed by:</span> {data.adjournment.motion.proposed}</p>
          <p><span className="font-medium">Motion seconded by:</span> {data.adjournment.motion.seconded}</p>
          <p><span className="font-medium">Vote:</span> {data.adjournment.motion.vote}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-2 uppercase bg-gray-100 p-2">Next Meeting</h3>
          <p><span className="font-medium">Date:</span> {data.nextMeeting.date}</p>
          <p><span className="font-medium">Time:</span> {data.nextMeeting.time}</p>
          <p><span className="font-medium">Location:</span> {data.nextMeeting.location}</p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-300">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="mb-8">____________________________</p>
              <p>{data.certification.secretary}</p>
            </div>
            <div className="text-center">
              <p className="mb-8">____________________________</p>
              <p>{data.certification.chair}</p>
            </div>
          </div>
          <p className="text-center mt-6 text-sm">Minutes approved on: {data.certification.approvalDate}</p>
        </div>
      </div>
    );
  };

  const renderActionItemsMeeting = (data: any) => {
    // Helper function to get status badge color
    const getStatusBadge = (status: string) => {
      switch (status.toLowerCase()) {
        case "completed":
          return "bg-green-100 text-green-800 border-green-200";
        case "in progress":
          return "bg-blue-100 text-blue-800 border-blue-200";
        case "not started":
          return "bg-gray-100 text-gray-800 border-gray-200";
        default:
          return "bg-gray-100 text-gray-800 border-gray-200";
      }
    };

    // Helper function to get priority badge color
    const getPriorityBadge = (priority: string) => {
      switch (priority.toLowerCase()) {
        case "critical":
          return "bg-red-100 text-red-800 border-red-200";
        case "high":
          return "bg-orange-100 text-orange-800 border-orange-200";
        case "medium":
          return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "low":
          return "bg-green-100 text-green-800 border-green-200";
        default:
          return "bg-gray-100 text-gray-800 border-gray-200";
      }
    };

    return (
      <div className="template-container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{data.projectName}</h1>
          <h2 className="text-xl mt-1">{data.meetingTitle}</h2>
          <div className="flex flex-wrap justify-between items-center mt-3">
            <p><span className="font-medium">Date:</span> {data.date}</p>
            <p><span className="font-medium">Facilitator:</span> {data.facilitator}</p>
            <p><span className="font-medium">Recorder:</span> {data.recorder}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">Attendees</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.attendees.map((attendee: string, index: number) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-sm">
                {attendee}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Meeting Goals</h3>
            <ul className="list-disc pl-5">
              {data.meetingGoals.map((goal: string, index: number) => (
                <li key={index} className="mb-1">{goal}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Decisions Made</h3>
            <ul className="list-disc pl-5">
              {data.decisions.map((decision: string, index: number) => (
                <li key={index} className="mb-1">{decision}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3 border-b pb-1">Action Items</h3>
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-2 border">ID</th>
                  <th className="text-left p-2 border">Action Item</th>
                  <th className="text-left p-2 border">Owner</th>
                  <th className="text-left p-2 border">Due Date</th>
                  <th className="text-left p-2 border">Priority</th>
                  <th className="text-left p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.actionItems.map((item: any, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-2 border text-sm font-mono">{item.id}</td>
                    <td className="p-2 border">
                      <div className="font-medium">{item.action}</div>
                      {item.notes && (
                        <div className="text-sm text-gray-600 mt-1">{item.notes}</div>
                      )}
                      {item.dependencies && (
                        <div className="text-xs text-gray-500 mt-1">
                          <span className="font-medium">Dependencies:</span> {item.dependencies}
                        </div>
                      )}
                    </td>
                    <td className="p-2 border">{item.owner}</td>
                    <td className="p-2 border">{item.dueDate}</td>
                    <td className="p-2 border">
                      <span className={`px-2 py-1 rounded text-xs border ${getPriorityBadge(item.priority)}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="p-2 border">
                      <span className={`px-2 py-1 rounded text-xs border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 border-b pb-1">Risks & Mitigation</h3>
          {data.risks.map((risk: any, index: number) => (
            <div key={index} className="mb-3 p-3 bg-gray-50 rounded-md">
              <p className="font-medium">{risk.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                <div>
                  <span className="font-medium">Impact:</span> {risk.impact}
                </div>
                <div>
                  <span className="font-medium">Mitigation:</span> {risk.mitigation}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Next Steps</h3>
            <ul className="list-disc pl-5">
              {data.nextSteps.map((step: string, index: number) => (
                <li key={index} className="mb-1">{step}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 border-b pb-1">Attachments</h3>
            <ul className="list-disc pl-5">
              {data.attachments.map((attachment: string, index: number) => (
                <li key={index} className="mb-1">
                  <a href="#" className="text-blue-600 hover:underline">{attachment}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Skeleton className="h-8 w-40" />
        </div>
        <Skeleton className="h-[60vh] w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="p-6 bg-destructive/10 text-destructive rounded-md">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-semibold">
            {meetingData?.title}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      
      {renderMeetingTemplate()}
    </div>
  );
};

export default MeetingMinutesTemplate;
