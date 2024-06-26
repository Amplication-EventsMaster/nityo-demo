import { Agents as TAgents } from "../api/agents/Agents";

export const AGENTS_TITLE_FIELD = "firstName";

export const AgentsTitle = (record: TAgents): string => {
  return record.firstName?.toString() || String(record.id);
};
