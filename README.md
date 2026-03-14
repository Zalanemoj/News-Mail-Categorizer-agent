# 📰 AI-Powered News Intelligence Agent

> An intelligent, fully automated news curation and delivery system that collects, classifies, and delivers personalized news digests to your inbox — every single day, without lifting a finger.

---

## 🧩 The Problem

Every day, thousands of news articles flood the internet across dozens of platforms. Manually finding relevant news on topics like **Artificial Intelligence, Finance, and Politics** means bouncing between multiple websites, wasting time, and drowning in information overload.

**There had to be a better way.**

---

## 💡 The Solution

This project is an **AI-powered news intelligence agent** — a fully automated pipeline that:

1. Fetches the latest articles from external news APIs
2. Processes and structures the raw data
3. Uses an **AI model to classify** each article into relevant categories
4. Filters and selects the **Top 10 articles per category**
5. Formats everything into a clean **newsletter-style email digest**
6. **Delivers it to your inbox automatically** on a daily schedule

No manual browsing. No information overload. Just the news that matters, when you need it.

---

## ✨ Key Features

| Feature | Description |
|--------|-------------|
| 🔄 **Automated News Aggregation** | Collects articles from external News APIs on a schedule |
| 🤖 **AI-Based Classification** | LLM categorizes each article into AI, Finance, Politics, or Other |
| 🎯 **Personalized Filtering** | Only delivers news relevant to your selected topics |
| 🏆 **Top 10 Selection** | Picks the most relevant articles — not everything |
| 📧 **Daily Email Digest** | Clean, readable newsletter delivered automatically via Gmail |
| ⚙️ **Fully Scalable** | Add more categories or data sources with minimal effort |

---

## 🏗️ System Architecture

The system follows an **event-driven, workflow automation architecture** built on [n8n](https://n8n.io/), organized across 5 layers:

```
┌─────────────────────────────────────────────┐
│             1. DATA SOURCE LAYER             │
│   News APIs  •  RSS Feeds  •  News Providers │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│           2. DATA PROCESSING LAYER           │
│  Article Extraction  •  Structuring  •  Dedup│
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│           3. AI INTELLIGENCE LAYER           │
│   NLP Classification  •  Category Assignment │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│         4. WORKFLOW AUTOMATION LAYER         │
│   Scheduling  •  Routing  •  Filtering       │
└────────────────────┬────────────────────────┘
                     │
┌────────────────────▼────────────────────────┐
│              5. DELIVERY LAYER               │
│   Email Formatting  •  Gmail Dispatch        │
└─────────────────────────────────────────────┘
```

---

## 🔄 How It Works — Step by Step

### Step 1 — ⏰ Scheduled Trigger
The workflow starts automatically on a predefined schedule (e.g., every morning). No manual action required.

---

### Step 2 — 📡 News Collection
The system calls an external **News API** and retrieves the latest articles, each containing:
- Title
- Description
- URL
- Source name
- Publication date

---

### Step 3 — 🔧 Article Processing
Each article is separated into an individual item so it can be analyzed independently by the AI model downstream.

---

### Step 4 — 🤖 AI Classification
An **AI language model** reads each article's title and description and classifies it into one of the following categories:

```json
{
  "category": "AI"
}
```

Possible values: `"AI"` · `"Finance"` · `"Politics"` · `"Other"`

---

### Step 5 — 🗂️ Category Filtering
The workflow splits articles into three independent streams based on the AI's output:

```
All Articles
   ├── 🤖 AI News
   ├── 💹 Finance News
   └── 🏛️ Politics News
```

---

### Step 6 — 🏆 Top 10 Selection
Each stream limits its output to the **Top 10 most relevant articles**, preventing information overload and ensuring digest quality.

---

### Step 7 — 🔗 Aggregation
The three streams are merged into a single, unified dataset ready for formatting.

---

### Step 8 — ✉️ Email Formatting
The system formats all articles into a clean, readable newsletter using JavaScript:

```
🤖 AI NEWS
──────────────────────────────
1. [Article Title]
   Brief summary of the article.

2. [Article Title]
   Brief summary of the article.

💹 FINANCE NEWS
──────────────────────────────
1. [Article Title]
   ...

🏛️ POLITICS NEWS
──────────────────────────────
1. [Article Title]
   ...
```

---

### Step 9 — 📬 Email Delivery
The formatted digest is sent automatically via **Gmail integration**. The user receives a single daily email containing curated top stories across all three categories.

---

## 📁 Repository Structure

```
News-Mail-Categorizer-agent/
├── News Mail System.json   # n8n workflow — import this to get started
├── code.js                 # JavaScript logic for data transformation & formatting
├── Images/                 # Workflow screenshots and architecture diagrams
├── .gitignore
├── LICENSE                 # MIT License
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [n8n](https://n8n.io/) (self-hosted or [n8n.cloud](https://app.n8n.cloud/))
- A **News API** key — get one free at [newsapi.org](https://newsapi.org/)
- A **Gmail** account connected to n8n
- An **AI/LLM API key** (e.g., OpenAI, Google Gemini, or Groq)

---

### Setup

**1. Clone the repository**
```bash
git clone https://github.com/Zalanemoj/News-Mail-Categorizer-agent.git
cd News-Mail-Categorizer-agent
```

**2. Import the workflow into n8n**
- Open your n8n instance
- Navigate to **Workflows** → **Import from file**
- Select `News Mail System.json`
- The complete workflow will load in the editor

**3. Connect your credentials**

| Node | Credential Required |
|------|--------------------|
| News API node | News API key |
| AI Classification node | OpenAI / Gemini / Groq API key |
| Email Delivery node | Gmail OAuth2 account |

**4. Configure the schedule**
- Open the **Schedule Trigger** node
- Set your preferred delivery time (e.g., every day at 8:00 AM)

**5. Activate**
- Toggle the workflow to **Active**
- The agent will now run automatically at your scheduled time

---

## ⚙️ Customization

| What to Change | Where | Default |
|---------------|-------|---------|
| News categories | AI prompt inside classification node | AI, Finance, Politics |
| Articles per category | Limit node in each stream | Top 10 |
| Delivery schedule | Schedule Trigger node | Daily |
| Recipient email | Gmail node | Configured account |
| AI model | LLM node settings | GPT / Gemini |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Workflow Automation | [n8n](https://n8n.io/) |
| Custom Logic | JavaScript |
| AI Classification | LLM via API (OpenAI / Gemini / Groq) |
| News Data | News API |
| Email Delivery | Gmail API |
| Deployment (optional) | Google Cloud / VPS |

---

## 🔭 Future Improvements

- [ ] 🧠 AI article summarization (full-text summaries instead of descriptions)
- [ ] 📊 Sentiment analysis on news articles
- [ ] 🔁 Duplicate news detection across sources
- [ ] 📈 Importance ranking by trend signals
- [ ] 💬 Slack or Telegram notification support
- [ ] 🌐 Web dashboard for browsing curated news
- [ ] 📌 User preferences panel for custom category selection

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

- [n8n](https://n8n.io/) — for the powerful open-source workflow automation platform
- [NewsAPI](https://newsapi.org/) — for providing accessible, structured news data
- OpenAI / Google / Groq — for AI models that power the classification engine

---
