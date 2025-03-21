import { MeetingMinutesData } from "../../src/components/documents";

export const meetingMinutesFixtures: Record<string, MeetingMinutesData> = {
  basic: {
    title: "Weekly Team Meeting",
    date: "2023-10-15",
    startTime: "10:00 AM",
    endTime: "11:30 AM",
    location: "Conference Room A",
    participants: [
      {
        name: "Jane Smith",
        role: "Project Manager",
        email: "jane@company.com",
      },
      { name: "John Doe", role: "Developer", email: "john@company.com" },
      { name: "Alice Johnson", role: "Designer", email: "alice@company.com" },
    ],
    agendaItems: [
      {
        title: "Project Status Update",
        description: "Review current project milestones",
      },
      { title: "Budget Review", description: "Quarterly budget analysis" },
    ],
    minutesMarkdown:
      "## Project Status\n\nThe team discussed current project status and timeline. All milestones are on track.\n\n## Budget Review\n\nBudget is currently within planned parameters.",
  },

  withOrganizationLogo: {
    title: "Quarterly Planning Session",
    date: "2023-11-01",
    startTime: "9:00 AM",
    endTime: "12:00 PM",
    location: "Main Conference Room",
    organizationName: "Global Enterprises",
    organizationLogo:
      "https://placehold.co/300x100/0f766e/ffffff?text=Global+Enterprises",
    participants: [
      { name: "Robert Johnson", role: "CEO", email: "robert@globalent.com" },
      { name: "Sarah Williams", role: "COO", email: "sarah@globalent.com" },
      { name: "Michael Chen", role: "CTO", email: "michael@globalent.com" },
      { name: "Emily Davis", role: "CFO", email: "emily@globalent.com" },
    ],
    agendaItems: [
      {
        title: "Q4 Objectives",
        description: "Setting objectives for the final quarter",
      },
      {
        title: "Annual Budget Planning",
        description: "Preliminary budget discussion for next year",
      },
      {
        title: "Team Restructuring",
        description: "Proposed changes to team organization",
      },
    ],
    minutesMarkdown:
      "## Q4 Objectives\n\nThe executive team established the following objectives for Q4:\n\n1. Increase revenue by 15%\n2. Launch the new product line\n3. Complete the international expansion\n\n## Annual Budget Planning\n\nCFO presented preliminary budget forecasts for next year. The team agreed to allocate additional resources to R&D.\n\n## Team Restructuring\n\nProposal to reorganize the product development teams was discussed and approved.",
  },

  withActionItems: {
    title: "Product Development Sprint Planning",
    date: "2023-09-15",
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    location: "Virtual Meeting (Zoom)",
    organizationName: "Tech Innovations Inc.",
    participants: [
      {
        name: "Alex Turner",
        role: "Product Manager",
        email: "alex@techinnovations.com",
      },
      {
        name: "Lisa Wang",
        role: "Lead Developer",
        email: "lisa@techinnovations.com",
      },
      {
        name: "Carlos Rodriguez",
        role: "UX Designer",
        email: "carlos@techinnovations.com",
      },
      {
        name: "Priya Patel",
        role: "QA Engineer",
        email: "priya@techinnovations.com",
      },
    ],
    absentees: [{ name: "David Kim", role: "Backend Developer" }],
    agendaItems: [
      {
        title: "Previous Sprint Review",
        description: "Review completed tasks and blockers",
      },
      {
        title: "Next Sprint Planning",
        description: "Task allocation for the upcoming sprint",
      },
      { title: "UI/UX Updates", description: "Review proposed design changes" },
    ],
    minutesMarkdown:
      "## Previous Sprint Review\n\nThe team completed 18 out of 20 planned story points. Two tasks were blocked due to third-party API issues.\n\n## Next Sprint Planning\n\nThe team committed to 22 story points for the upcoming sprint, focusing on the checkout process optimization.\n\n## UI/UX Updates\n\nCarlos presented the new design for the product detail page, which was approved with minor adjustments.",
    actionItems: [
      {
        id: "action1",
        task: "Follow up with API provider",
        assignee: "Lisa Wang",
        dueDate: "2023-09-18",
        status: "pending",
      },
      {
        id: "action2",
        task: "Update design specifications",
        assignee: "Carlos Rodriguez",
        dueDate: "2023-09-20",
        status: "in-progress",
      },
      {
        id: "action3",
        task: "Prepare QA test plan",
        assignee: "Priya Patel",
        dueDate: "2023-09-22",
        status: "pending",
      },
    ],
  },

  withFollowUp: {
    title: "Strategic Partnership Meeting",
    date: "2023-12-01",
    startTime: "1:00 PM",
    endTime: "3:30 PM",
    location: "Partner Headquarters",
    organizationName: "Innovative Solutions",
    participants: [
      {
        name: "Thomas Wilson",
        role: "Partnership Director",
        organization: "Innovative Solutions",
        email: "thomas@innovative.com",
      },
      {
        name: "Amanda Lee",
        role: "Account Manager",
        organization: "Innovative Solutions",
        email: "amanda@innovative.com",
      },
      {
        name: "Daniel Brown",
        role: "CEO",
        organization: "Partner Company",
        email: "daniel@partner.com",
      },
      {
        name: "Rachel Green",
        role: "CTO",
        organization: "Partner Company",
        email: "rachel@partner.com",
      },
    ],
    agendaItems: [
      { title: "Partnership Opportunity Overview" },
      { title: "Technical Integration Discussion" },
      { title: "Revenue Sharing Model" },
      { title: "Marketing Collaboration" },
    ],
    minutesMarkdown:
      "## Partnership Opportunity Overview\n\nThomas presented the benefits of strategic partnership between both companies. Daniel expressed interest in the proposed collaboration.\n\n## Technical Integration Discussion\n\nRachel and Amanda discussed the technical requirements for integrating both platforms. Initial timeline estimates suggest a 3-month development period.\n\n## Revenue Sharing Model\n\nBoth parties agreed to a 60/40 revenue split for jointly developed features, with additional considerations for ongoing maintenance costs.\n\n## Marketing Collaboration\n\nDiscussion on joint marketing efforts, including co-branded materials and joint presence at industry events.",
    actionItems: [
      {
        id: "action1",
        task: "Draft partnership agreement",
        assignee: "Thomas Wilson",
        dueDate: "2023-12-15",
        status: "pending",
      },
      {
        id: "action2",
        task: "Create technical integration document",
        assignee: "Amanda Lee",
        dueDate: "2023-12-08",
        status: "pending",
      },
      {
        id: "action3",
        task: "Prepare revenue projections",
        assignee: "Daniel Brown",
        dueDate: "2023-12-10",
        status: "pending",
      },
    ],
    followUpMeeting: {
      date: "2023-12-22",
      time: "1:00 PM",
      location: "Innovative Solutions HQ",
    },
  },
};
