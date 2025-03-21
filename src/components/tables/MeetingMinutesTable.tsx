import React from "react";
import { Theme, mergeTheme } from "../../themes";
import { MeetingMinutesData } from "../documents/MeetingMinutesDocument";

export interface MeetingMinutesTableProps {
  meetings: MeetingMinutesData[];
  theme?: Partial<Theme>;
  onRowClick?: (meeting: MeetingMinutesData) => void;
}

export const MeetingMinutesTable: React.FC<MeetingMinutesTableProps> = ({
  meetings,
  theme = {},
  onRowClick,
}) => {
  const mergedTheme = mergeTheme(theme);

  // Helper function to count action items
  const countActionItems = (
    meeting: MeetingMinutesData
  ): { total: number; completed: number } => {
    if (!meeting.actionItems || meeting.actionItems.length === 0) {
      return { total: 0, completed: 0 };
    }

    const total = meeting.actionItems.length;
    const completed = meeting.actionItems.filter(
      (item) => item.status === "completed"
    ).length;

    return { total, completed };
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead
          style={{
            backgroundColor: mergedTheme.documents.table.headerBackground,
          }}
        >
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Meeting
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Participants
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Action Items
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Next Meeting
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {meetings.map((meeting, index) => {
            const actionItemCounts = countActionItems(meeting);

            return (
              <tr
                key={index}
                className={onRowClick ? "cursor-pointer hover:bg-gray-50" : ""}
                onClick={() => onRowClick && onRowClick(meeting)}
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? mergedTheme.documents.table.rowBackground
                      : mergedTheme.documents.table.alternateRowBackground,
                }}
              >
                <td className="px-6 py-4 text-sm">
                  <div className="font-medium">{meeting.title}</div>
                  {meeting.location && (
                    <div className="text-xs text-gray-500">
                      {meeting.location}
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {meeting.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {meeting.startTime} - {meeting.endTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {meeting.participants.length} participants
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {actionItemCounts.total > 0 ? (
                    <div>
                      <span
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${mergedTheme.colors.primary}20`,
                          color: mergedTheme.colors.primary,
                        }}
                      >
                        {actionItemCounts.completed}/{actionItemCounts.total}{" "}
                        completed
                      </span>
                    </div>
                  ) : (
                    <span className="text-gray-500">No action items</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {meeting.followUpMeeting?.date ? (
                    <div>
                      <div>{meeting.followUpMeeting.date}</div>
                      {meeting.followUpMeeting.time && (
                        <div className="text-xs text-gray-500">
                          {meeting.followUpMeeting.time}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-500">Not scheduled</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
