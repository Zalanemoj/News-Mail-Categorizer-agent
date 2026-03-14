# 📰 News Mail Categorizer Agent

An AI-powered **n8n workflow** that automatically monitors your inbox, identifies news-related emails, and categorizes them by topic — keeping your inbox clean and your information organized without lifting a finger.

---

## 🧠 Overview

The **News Mail Categorizer Agent** is a no-code/low-code automation built with [n8n](https://n8n.io/) and a custom JavaScript code node. It connects to your email account, scans incoming messages, uses an AI model to determine whether each email is news-related, and then sorts them into meaningful categories (e.g., Politics, Technology, Sports, Business, etc.).

Whether you're subscribed to dozens of newsletters or just want to tame a chaotic inbox, this agent handles the sorting so you can focus on reading what matters.

---

## ✨ Features

- 📥 **Automated email monitoring** — Triggers on new incoming emails
- 🤖 **AI-powered classification** — Uses an LLM to identify and categorize news content
- 🗂️ **Multi-category sorting** — Labels or moves emails into topic-based categories
- ⚡ **Built on n8n** — Fully visual, importable workflow with zero infrastructure overhead
- 🔧 **Custom JS logic** — Fine-grained control via a JavaScript code node
- 🔁 **Runs continuously** — Set-and-forget automation that works in the background

---

## 🏗️ Workflow Architecture

```
[Email Trigger]
      │
      ▼
[Fetch & Parse Email Content]
      │
      ▼
[Custom Code Node (code.js)]
  - Clean & prepare email body
  - Extract subject, sender, content
      │
      ▼
[AI / LLM Classification Node]
  - Is this a news email?
  - What category does it belong to?
      │
      ▼
[Conditional Routing]
  ├── Technology
  ├── Politics
  ├── Business
  ├── Sports
  ├── Science & Health
  └── Other / Not News
      │
      ▼
[Apply Label / Move to Folder]
```

---

## 📁 Repository Structure

```
News-Mail-Categorizer-agent/
├── News Mail System.json   # n8n workflow export (import this into n8n)
├── code.js                 # Custom JavaScript logic used inside the workflow
├── Images/                 # Screenshots and workflow diagrams
├── .gitignore
├── LICENSE                 # MIT License
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [n8n](https://n8n.io/) — self-hosted or cloud (n8n.cloud)
- An email account connected to n8n (Gmail, Outlook, IMAP, etc.)
- An AI/LLM API key — e.g., OpenAI, Google Gemini, or Groq

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Zalanemoj/News-Mail-Categorizer-agent.git
cd News-Mail-Categorizer-agent
```

**2. Import the workflow into n8n**

- Open your n8n instance
- Go to **Workflows** → **Import from file**
- Select `News Mail System.json`
- The full workflow will appear in the editor

**3. Configure your credentials**

Inside the imported workflow, connect:

| Node | Credential Needed |
|------|-------------------|
| Email Trigger | Gmail / Outlook / IMAP account |
| AI Classification | OpenAI / Gemini / Groq API key |

**4. Activate the workflow**

Toggle the workflow to **Active** in the n8n editor. The agent will now monitor your inbox automatically.

---

## ⚙️ Configuration

You can customize the behavior by editing nodes inside the workflow:

| Setting | Where to Change | Default |
|--------|----------------|---------|
| Email categories | AI prompt node | Technology, Politics, Business, Sports, Science, Other |
| Trigger frequency | Email trigger node | On new message |
| Target mailbox / label | Email action node | Per category label |
| AI model | LLM node | Configurable (OpenAI GPT / Gemini / etc.) |

The `code.js` file contains the JavaScript used in the **Code node** — you can edit it locally and paste updated logic back into n8n if needed.

---

## 🔍 How It Works

1. **Trigger** — n8n listens for new emails arriving in your connected inbox.
2. **Parse** — The email's subject, sender, and body are extracted and cleaned using the custom JavaScript code node (`code.js`).
3. **Classify** — The cleaned content is sent to an AI model with a prompt asking it to:
   - Determine if the email is news-related
   - If yes, assign it to a category (Technology, Politics, Business, Sports, Science & Health, or Other)
4. **Route** — Based on the AI's output, n8n routes the email through a conditional branch.
5. **Label/Move** — The email is labeled or moved to the appropriate folder in your email client.

---

## 📸 Screenshots

> Workflow screenshots and diagrams are available in the [`Images/`](./Images) folder.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| Workflow Automation | [n8n](https://n8n.io/) |
| Custom Logic | JavaScript (Node.js) |
| AI Classification | LLM via API (OpenAI / Gemini / Groq) |
| Email Integration | Gmail / Outlook / IMAP |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Ideas for contributions:
- Add support for more email categories
- Integrate Slack/Telegram notifications for high-priority news
- Add a dashboard to track categorization stats
- Support additional LLM providers

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

- [n8n](https://n8n.io/) — for the powerful and extensible workflow automation platform
- OpenAI / Google / Groq — for providing accessible AI APIs for classification

---
