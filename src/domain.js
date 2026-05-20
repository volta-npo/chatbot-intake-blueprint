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
        { "id": "faq-count", "label": "FAQ count", "type": "number", "sample": 42, "placeholder": "Enter FAQ count" },
        { "id": "handoff-channel", "label": "Handoff channel", "type": "text", "sample": "Email + booking form", "placeholder": "Enter handoff channel" },
        { "id": "policy-review-cadence", "label": "Policy review cadence", "type": "text", "sample": "Monthly source review", "placeholder": "Enter policy review cadence" },
        { "id": "launch-surface", "label": "Launch surface", "type": "text", "sample": "Website widget", "placeholder": "Enter launch surface" },
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
        "Launch risk rubric scored",
        "Bot workspace provisioned",
        "Knowledge source owners assigned",
        "Coverage gap dashboard configured",
        "Conversation transcript review plan created",
        "Launch rollback path written",
        "Human handoff SLA set",
        "Policy update cadence scheduled",
        "Bot performance learning loop defined",
    ],
    "artifacts": [
        "Bot spec",
        "Test script",
        "Knowledge map JSON",
        "Bot launch operations plan",
        "Coverage gap dashboard",
        "Conversation QA regression pack",
    ],
    "checks": [
        "Every answer maps to source or escalation",
        "Medical/legal/financial trigger escalates",
        "Disclosure required",
        "No answer can launch without source or escalation",
        "Handoff SLA required for urgent categories",
        "Transcript review must protect private client data",
    ],
    "sampleClient": "BrightPath Tutoring Studio",
    "modules": [
        { "name": "Coverage gap dashboard", "description": "Shows uncovered intents, stale sources, low-confidence answers, and owner-review needs before launch." },
        { "name": "Conversation QA regression pack", "description": "Reusable tests for allowed, ambiguous, prohibited, urgent, and out-of-scope user messages." },
        { "name": "Human handoff SLA manager", "description": "Defines channel, owner, urgency, hours, fallback, and response expectations by scenario." },
        { "name": "Launch rollback plan", "description": "Steps to disable widget, swap fallback copy, notify owner, and preserve evidence when safety issues appear." },
        { "name": "Policy and disclosure library", "description": "Reusable disclosure text, prohibited-topic rules, data handling statements, and escalation templates." },
        { "name": "Source freshness monitor", "description": "Review cadence, source owner, stale answer alerts, and re-approval workflow for FAQ knowledge." }
    ],
    "saas": {
        "customerSegments": [
            "Student AI safety pods scoping simple FAQ bots",
            "Small businesses launching constrained intake chatbots",
            "Nonprofits needing safe service triage scripts",
            "Mentors reviewing responsible AI launch readiness"
        ],
        "pricingTiers": [
            "Free: bot blueprint and test script export",
            "Launch QA: source matrix, regression tests, and handoff SLA plan",
            "Team: source freshness, transcript review, and policy libraries",
            "Agency: multi-bot readiness dashboard and white-label launch packets"
        ],
        "onboardingChecklist": [
            "Create bot blueprint workspace",
            "Inventory approved sources and source owners",
            "Map FAQ intents to answer/escalation outcomes",
            "Configure prohibited topics and handoff SLA",
            "Run launch QA regression pack"
        ],
        "successMetrics": [
            "100% of launch answers map to source or escalation",
            "All prohibited-topic tests pass expected behavior",
            "Human handoff SLA defined for urgent categories",
            "Source review cadence scheduled before widget launch"
        ],
        "dashboards": [
            "FAQ source coverage",
            "Escalation and prohibited-topic QA",
            "Source freshness and owner approvals",
            "Launch risk and rollback readiness"
        ],
        "dataModel": [
            "BotWorkspace",
            "FAQIntent",
            "KnowledgeSource",
            "EscalationRule",
            "SafetyTest",
            "DisclosureTemplate",
            "HandoffSLA",
            "LaunchRisk"
        ],
        "permissions": [
            "Bot owner: final launch approval",
            "Knowledge steward: source updates and freshness",
            "QA reviewer: regression tests and prohibited-topic outcomes",
            "Viewer: client-safe blueprint export"
        ],
        "compliance": [
            "Disclosure required in launch packet",
            "Medical/legal/financial categories escalate",
            "Transcript review avoids private data retention",
            "Source owner approval required for every answer"
        ],
        "lifecycle": [
            "Scope",
            "Source",
            "Map",
            "Simulate",
            "Approve",
            "Launch",
            "Review",
            "Rollback"
        ],
        "retentionSignals": [
            "Source freshness review due",
            "Coverage gap count decreasing",
            "Safety test suite reused after source edits",
            "Handoff SLA acknowledged by owner"
        ],
        "exportChannels": [
            "Bot spec markdown",
            "Knowledge map JSON",
            "QA test script",
            "Launch operations plan",
            "Disclosure template pack"
        ],
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
//# sourceMappingURL=domain.js.map