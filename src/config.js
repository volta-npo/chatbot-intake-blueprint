export const config = {
    "number": 31,
    "slug": "chatbot-intake-blueprint",
    "title": "Chatbot Intake Blueprint",
    "category": "AI & Automation",
    "tagline": "A safe blueprint for building small-business chatbots that answer FAQs without pretending to be human experts.",
    "persona": "AI automation students delivering simple assistants.",
    "gap": "Chatbots are easy to overpromise and hard to scope responsibly for small organizations.",
    "niche": "Responsible AI assistants for local business websites.",
    "metric": "bot answers covered by approved knowledge sources",
    "modules": [
        "FAQ boundary map",
        "Escalation rules",
        "Knowledge source checklist",
        "Safety QA script"
    ],
    "theme": {
        "accent": "#7c3aed",
        "accent2": "#c4b5fd",
        "emoji": "\u26a1",
        "metricLabel": "Automation safety",
        "workflow": [
            "Define workflow boundary",
            "Identify data and failure risks",
            "Require human review",
            "Export safe implementation plan"
        ],
        "privacy": "No external AI calls are made. Treat customer data, credentials, payments, and public posting as high risk."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "faq-boundary-map",
            "label": "FAQ boundary map",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify faq boundary map with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "escalation-rules",
            "label": "Escalation rules",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify escalation rules with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "knowledge-source-checklist",
            "label": "Knowledge source checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify knowledge source checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "safety-qa-script",
            "label": "Safety QA script",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify safety qa script with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Chatbot Intake Blueprint and capture baseline evidence.",
            "Complete the faq boundary map workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "BrightPath Tutoring Studio",
        "chapter": "El Paso",
        "studentLead": "Volta Student Lead",
        "notes": "Responsible automation project to reduce admin time without exposing student data. Chatbot Intake Blueprint sample.",
        "evidencePrefix": "Chatbot Intake Blueprint",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map