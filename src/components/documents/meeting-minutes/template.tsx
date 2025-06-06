import React from "react";
import { BaseDocument } from "../BaseDocument";
import { MarkdownRenderer } from "../../../utils";
import { mergeTheme } from "../../../themes";
import { MeetingMinutesProps } from "./types";

export const MeetingMinutes: React.FC<MeetingMinutesProps> = ({
  data,
  theme = {},
  children,
}) => {
  const mergedTheme = mergeTheme(theme);

  return (
    <BaseDocument theme={theme}>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading1,
              }}
            >
              {data.title}
            </h1>
            <div className="text-gray-600">
              <p>Date: {data.date}</p>
              <p>
                Time: {data.startTime} - {data.endTime}
              </p>
              {data.location && <p>Location: {data.location}</p>}
            </div>
          </div>
          {(data.organizationLogo || data.organizationName) && (
            <div className="text-right">
              {data.organizationLogo && (
                <img
                  src={data.organizationLogo}
                  alt="Organization Logo"
                  className="h-16 mb-2 ml-auto"
                />
              )}
              {data.organizationName && (
                <p className="font-semibold">{data.organizationName}</p>
              )}
            </div>
          )}
        </div>

        {/* Participants */}
        <div>
          <h2
            className="text-xl font-semibold mb-3"
            style={{
              fontFamily: mergedTheme.fontFamily.heading,
              fontSize: mergedTheme.fontSize.heading2,
              color: mergedTheme.colors.primary,
            }}
          >
            Participants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {data.participants.map((participant, index) => (
              <div
                key={`participants-${index}`}
                className="p-2 rounded"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? mergedTheme.documents.table.rowBackground
                      : mergedTheme.documents.table.alternateRowBackground,
                }}
              >
                <p className="font-semibold">{participant.name}</p>
                {participant.role && (
                  <p className="text-sm">{participant.role}</p>
                )}
                {participant.organization && (
                  <p className="text-sm">{participant.organization}</p>
                )}
                {participant.email && (
                  <p className="text-sm text-gray-500">{participant.email}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Absentees */}
        {data.absentees && data.absentees.length > 0 && (
          <div>
            <h2
              className="text-xl font-semibold mb-3"
              style={{
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading2,
                color: mergedTheme.colors.secondary,
              }}
            >
              Absentees
            </h2>
            <ul className="list-disc pl-5">
              {data.absentees.map((absentee, index) => (
                <li key={`absentees-${index}`}>
                  <span className="font-semibold">{absentee.name}</span>
                  {absentee.role && ` (${absentee.role})`}
                  {absentee.organization && ` - ${absentee.organization}`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Agenda */}
        <div>
          <h2
            className="text-xl font-semibold mb-3"
            style={{
              fontFamily: mergedTheme.fontFamily.heading,
              fontSize: mergedTheme.fontSize.heading2,
              color: mergedTheme.colors.primary,
            }}
          >
            Agenda
          </h2>
          <ol className="list-decimal pl-5">
            {data.agendaItems.map((item, index) => (
              <li key={`agenda-${index}`} className="mb-2">
                <span className="font-semibold">{item.title}</span>
                {item.description && (
                  <p className="text-gray-600 ml-2">{item.description}</p>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Meeting Minutes */}
        <div>
          <h2
            className="text-xl font-semibold mb-3"
            style={{
              fontFamily: mergedTheme.fontFamily.heading,
              fontSize: mergedTheme.fontSize.heading2,
              color: mergedTheme.colors.primary,
            }}
          >
            Meeting Minutes
          </h2>
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: mergedTheme.documents.table.rowBackground,
            }}
          >
            <MarkdownRenderer content={data.minutesMarkdown} theme={theme} />
          </div>
        </div>

        {/* Action Items */}
        {data.actionItems && data.actionItems.length > 0 && (
          <div>
            <h2
              className="text-xl font-semibold mb-3"
              style={{
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading2,
                color: mergedTheme.colors.primary,
              }}
            >
              Action Items
            </h2>
            <table className="min-w-full border-collapse mb-4">
              <thead>
                <tr
                  style={{
                    backgroundColor:
                      mergedTheme.documents.table.headerBackground,
                  }}
                >
                  <th className="border border-gray-300 p-2 text-left">
                    Action
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Assignee
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Due Date
                  </th>
                  <th className="border border-gray-300 p-2 text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.actionItems.map((item, index) => {
                  let statusColor;
                  switch (item.status) {
                    case "completed":
                      statusColor = mergedTheme.colors.success;
                      break;
                    case "in-progress":
                      statusColor = mergedTheme.colors.accent;
                      break;
                    case "deferred":
                      statusColor = mergedTheme.colors.secondary;
                      break;
                    default:
                      statusColor = mergedTheme.colors.error;
                  }

                  return (
                    <tr
                      key={`actions-${index}`}
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? mergedTheme.documents.table.rowBackground
                            : mergedTheme.documents.table
                                .alternateRowBackground,
                      }}
                    >
                      <td className="border border-gray-300 p-2">
                        {item.action}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.assignee}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.dueDate || "N/A"}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <span
                          className="px-2 py-1 rounded-md text-white"
                          style={{
                            backgroundColor: statusColor,
                          }}
                        >
                          {item.status || "pending"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Follow-up Meeting */}
        {data.followUpMeeting && (
          <div>
            <h2
              className="text-xl font-semibold mb-3"
              style={{
                fontFamily: mergedTheme.fontFamily.heading,
                fontSize: mergedTheme.fontSize.heading2,
                color: mergedTheme.colors.primary,
              }}
            >
              Follow-up Meeting
            </h2>
            <div
              className="p-4 rounded-md"
              style={{
                backgroundColor: mergedTheme.documents.table.rowBackground,
              }}
            >
              {data.followUpMeeting.date && (
                <p>
                  <span className="font-semibold">Date: </span>
                  {data.followUpMeeting.date}
                </p>
              )}
              {data.followUpMeeting.time && (
                <p>
                  <span className="font-semibold">Time: </span>
                  {data.followUpMeeting.time}
                </p>
              )}
              {data.followUpMeeting.location && (
                <p>
                  <span className="font-semibold">Location: </span>
                  {data.followUpMeeting.location}
                </p>
              )}
            </div>
          </div>
        )}

        {children}
      </div>
    </BaseDocument>
  );
};
