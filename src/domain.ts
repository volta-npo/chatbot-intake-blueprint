export const domain = {
  "kind": "chatbot-blueprint",
  "title": "Chatbot Intake Blueprint",
  "purpose": "A purpose-built chatbot blueprint interface for a safe blueprint for building small-business chatbots that answer faqs without pretending to be human experts.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "FAQ/source map",
  "metricLabels": [
    "Source Coverage",
    "Escalation Safety",
    "Launch Readiness"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "BrightPath Tutoring Studio",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "bot answers covered by approved knowledge sources",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Bot purpose defined",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Bot spec",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Bot purpose defined",
    "Approved sources inventoried",
    "FAQ answers mapped",
    "Prohibited topics defined",
    "Escalation triggers set",
    "Fallback message written",
    "Disclosure included",
    "QA scenarios passed",
    "FAQ source matrix completed",
    "Escalation simulator passed",
    "Prohibited-topic harness passed",
    "Launch risk rubric scored"
  ],
  "artifacts": [
    "Bot spec",
    "Test script",
    "Knowledge map JSON"
  ],
  "checks": [
    "Every answer maps to source or escalation",
    "Medical/legal/financial trigger escalates",
    "Disclosure required"
  ],
  "sampleClient": "BrightPath Tutoring Studio",
  "modules": [
    { "name": "FAQ source matrix", "description": "Question, approved answer, source owner, last-reviewed date, and confidence by intake topic." },
    { "name": "Escalation simulator", "description": "Scenario-based routing tests for urgent, ambiguous, prohibited, and handoff-required messages." },
    { "name": "Prohibited topic harness", "description": "Safety test cases, expected refusal/escalation behavior, disclosure, and audit outcome." },
    { "name": "Launch risk rubric", "description": "Privacy, disclosure, coverage, owner review, failure modes, and human handoff readiness." }
  ],
  "saas": {
    "playbooks": [
      "FAQ source coverage review",
      "Escalation simulation runbook",
      "Prohibited-topic regression test",
      "Client launch disclosure handoff"
    ],
    "automations": [
      "Coverage gap scoring",
      "Escalation path validation",
      "Prohibited-topic test generation",
      "Launch risk rubric export"
    ],
    "revenueModel": "Bot readiness workspace with paid launch QA, policy packs, and source-matrix seats",
    "integrationTargets": [
      "Intercom/Zendesk handoff docs",
      "Website chatbot specs",
      "Google Docs FAQ sources",
      "CSV test script exports"
    ]
  }
};
