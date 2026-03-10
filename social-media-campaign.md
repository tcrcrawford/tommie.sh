# Social Media Campaign — Tommie Crawford
## Freelance Cloud & DevOps Engineer | Utrecht, Netherlands
### Prepared: March 2026

---

## 1. PLATFORM STRATEGY

### Priority Order and Rationale

**Priority 1 — LinkedIn**
LinkedIn is the primary platform. Dutch CTOs, tech leads, and IT procurement managers actively use it to source and vet freelance engineers. The B2B buying cycle for freelance tech talent starts here. Tommie's 13+ year career, certifications, and niche at the software-development/infrastructure intersection are exactly what positions well on LinkedIn's algorithm, which rewards expertise, consistency, and native long-form content. This is where decisions happen.

**Priority 2 — GitHub**
GitHub is a passive but critical trust signal. Potential clients and hiring managers will Google Tommie's name and check his GitHub before reaching out. A visible profile with pinned repositories demonstrating IaC, Terraform modules, CI/CD pipeline configurations, or Kubernetes manifests converts credibility into contact. It does not require regular posting — only deliberate curation.

**Priority 3 — Twitter/X**
Twitter/X is valuable for visibility in the European DevOps and cloud engineering community. The Dutch tech scene has an active presence there (developers, founders, tech event organizers). It is not a lead-generation platform in the same way LinkedIn is, but it builds reputation, drives profile visits, and creates inbound interest from technical decision-makers who are researchers before they are buyers. Threads perform well for DevOps technical content.

**Priority 4 — Dutch Tech Communities (Secondary)**
Platforms like Tweakers.net (Gathering), D  utch-language Slack workspaces (e.g., DevOps NL, Kubernetes NL), and communities within Slack/Discord around AWS Netherlands User Group should receive modest but consistent engagement. These are not posting platforms but conversation platforms — participation here generates referrals and direct enquiries from the right audience.

**Why not Instagram or TikTok**
The audience Tommie needs — Dutch technical decision-makers with budget and active freelance needs — is not reachable there at a meaningful conversion rate. Effort spent on those platforms is effort not spent on LinkedIn.

**Platform Effort Distribution (weekly)**
- LinkedIn: 60% of total social effort
- GitHub profile curation: 15% (mostly one-time setup, then occasional)
- Twitter/X: 20% of total social effort
- Community engagement (Slack, AWS UG NL, etc.): 5%

---

## 2. LINKEDIN CAMPAIGN — 5 READY-TO-POST POSTS

All posts are written in English. Dutch-language posts are noted where they would perform better. LinkedIn's algorithm in the Netherlands performs well for English-language technical content because it reaches both Dutch companies and international firms with Dutch offices. If Tommie wants to pursue only Dutch SME clients, switching posts 1 and 4 to Dutch is recommended.

---

### Post 1 — Personal Brand / Availability Announcement

**Recommended timing:** Post this first, in week 1. Pin it or add it to Featured.

---

After 13+ years working at the intersection of software development and cloud infrastructure, I am now fully available for freelance assignments in the Netherlands.

I am Tommie Crawford — Cloud & DevOps Engineer based in Utrecht.

What I do:

- Design and implement cloud infrastructure on AWS
- Build and maintain Kubernetes clusters and container platforms
- Automate deployments with Terraform, GitOps, and CI/CD pipelines
- Modernize legacy systems and reduce technical debt — measurably
- Bridge the gap between development teams and operations

I hold an AWS Certified Solutions Architect certification and the HashiCorp Terraform Associate certification. My background is unusual: I started as a PHP/Symfony/Drupal developer and moved deliberately into cloud and DevOps. That means I understand what developers actually need from infrastructure, and I build accordingly.

If your team is scaling, migrating to cloud, struggling with deployment reliability, or carrying a platform that has grown beyond what it was designed for — let's talk.

Available for project-based or longer-term engagements. Based in Utrecht, open to hybrid and on-site in the Netherlands.

Send me a message or visit tommie.sh

#FreelanceDevOps #CloudEngineer #AWS #Terraform #Kubernetes #Utrecht #DevOps #FreelanceNederland #Infrastructure

---

### Post 2 — Thought Leadership (Cloud/DevOps Topic)

**Topic:** The hidden cost of not treating infrastructure as code from day one.

---

Most infrastructure problems I walk into were not caused by bad engineers.

They were caused by good engineers making reasonable short-term decisions under deadline pressure — and then never going back.

The pattern is almost always the same:

- Cloud resources created manually in the console "just to test it"
- The test became production
- Six months later nobody knows what that instance does or why it exists
- Deleting it feels too risky
- So it stays, and grows more expensive, and becomes load-bearing

I call this infrastructure archaeology. You spend more time figuring out what exists than building what you need.

Infrastructure as Code is not primarily a DevOps best practice. It is a documentation system that happens to be executable.

When everything is in Terraform:
- Every resource has a reason (it is in a commit)
- Every change is reviewable before it happens
- Destruction and recreation become low-risk
- Onboarding a new team member takes hours, not weeks

The upfront cost of doing IaC properly is real. The cost of not doing it compounds silently until it is suddenly someone's emergency.

I have helped teams get existing environments under Terraform control mid-project. It is harder than starting clean, but it is always worth it.

What is the messiest infrastructure situation you have inherited? I am curious what others have walked into.

#InfrastructureAsCode #Terraform #DevOps #CloudEngineering #AWS #PlatformEngineering #SRE #TechDebt

---

### Post 3 — Case Study / Project Result (Anonymous)

**Format:** Situation → Problem → What was done → Result. Keep the client anonymous.

---

A client came to me with a deployment process that took four hours and required two engineers to babysit it.

The system was not broken. Deployments succeeded. But every release was a scheduled event with a runbook, a Slack thread, and two people watching dashboards.

The underlying stack was solid — PHP/Symfony application on AWS — but the deployment pipeline had been bolted together over several years with manual steps, environment-specific scripts, and institutional knowledge that lived in people's heads, not in version control.

Here is what we changed:

1. Moved all infrastructure into Terraform. Every environment became reproducible.
2. Rewrote the deployment pipeline in GitHub Actions. No more manual steps, no more runbooks.
3. Containerized the application with Docker and moved to Kubernetes on EKS.
4. Implemented proper secret management so environment-specific config was no longer a reason to touch deployments manually.
5. Added automated smoke tests as a pipeline gate — deployments either pass and go live, or they stop and alert.

Result: deployments went from four hours with two people to twelve minutes, fully automated. The team could ship on a Friday without anxiety.

The engineers who used to babysit deployments now use that time to build features.

That is what good infrastructure is supposed to do — disappear into the background and stop being a conversation.

If your team is having too many conversations about deployments, that is the signal.

#DevOps #CICD #Kubernetes #AWS #Terraform #CloudEngineering #DeploymentAutomation #FreelanceDevOps

---

### Post 4 — Certification Showcase

**Note:** This post works well in Dutch to appeal directly to Dutch hiring managers. Both versions provided.

**English version:**

---

I recently completed the AWS Certified Solutions Architect — Associate certification.

I already held the AWS Certified Cloud Practitioner and the HashiCorp Certified Terraform Associate, but the Solutions Architect certification required something different: demonstrating that I can design distributed systems on AWS at the architectural level, not just implement them.

The exam tests real trade-offs: when to use RDS Multi-AZ versus read replicas, how to design for resilience when a full availability zone fails, where the cost boundaries are between different storage and compute options, and how to architect for compliance requirements on AWS.

What I found useful about preparing for it was being forced to articulate decisions I usually make by instinct. After 13 years of building on cloud platforms, a lot of the reasoning becomes automatic. The certification process is a good way to verify that the instincts are grounded.

For anyone hiring cloud engineers: certifications are not a substitute for experience, but they are a reliable signal that the engineer has done the work to understand the platform systematically, not just the parts they have encountered on projects.

If you are evaluating cloud engineers for a project, feel free to ask me technical questions. I prefer to earn trust through specifics.

tommie.sh

#AWSCertified #SolutionsArchitect #AWS #CloudEngineering #DevOps #FreelanceNederland #Terraform #Kubernetes

---

**Dutch version (alternative):**

---

Ik heb onlangs de AWS Certified Solutions Architect — Associate behaald.

Ik had al de AWS Certified Cloud Practitioner en de HashiCorp Certified Terraform Associate op zak, maar de Solutions Architect gaat een stap verder: het gaat over het ontwerpen van gedistribueerde systemen op architectuurniveau.

Na 13 jaar bouwen op cloudplatforms neem ik veel beslissingen op gevoel. Een certificeringstraject dwingt je om dat gevoel te onderbouwen — en te toetsen.

Voor bedrijven die freelance cloud engineers evalueren: certificeringen vervangen geen ervaring, maar ze zijn een betrouwbaar signaal dat iemand het platform systematisch begrijpt.

Ik sta open voor technische vragen. Vertrouwen verdien je met inhoud, niet met titels.

Meer over mij: tommie.sh

#AWSCertified #CloudEngineer #Terraform #DevOps #FreelanceNederland #Utrecht #Kubernetes

---

### Post 5 — Engagement Post (Question / Poll)

**Format:** A genuine question that invites DevOps engineers and tech leads to respond. Engagement posts should feel like the start of a conversation, not a survey.

---

I keep seeing the same debate in teams I work with, and I am curious where people actually land.

When a company is starting greenfield cloud infrastructure today in 2026 — what is the right default?

A) Kubernetes from the start, even if the team is small
B) Managed container services (ECS, Cloud Run, App Runner) until you genuinely need K8s
C) Start serverless and containerize later if needed
D) PaaS (Railway, Render, Fly.io) until you are large enough to care

My default advice is B — Kubernetes is the right answer for a lot of problems, but it is frequently the answer to a problem you do not have yet. The operational overhead is real, and it scales with team size.

But I have also seen teams paint themselves into a corner with managed services when they needed the flexibility of Kubernetes sooner than expected.

What is your default recommendation, and what usually changes your mind?

(Bonus: if you have a strong opinion about a specific stack size or team composition where the answer flips, I want to hear it.)

#Kubernetes #DevOps #CloudEngineering #AWS #PlatformEngineering #ECS #Serverless #InfrastructureStrategy

---

## 3. TWITTER/X CAMPAIGN — 5 READY-TO-POST TWEETS / THREADS

Twitter/X posts are in English. Keep them technical and direct. Threads perform significantly better than single tweets for technical content.

---

### Tweet 1 — Availability / Personal Brand (Single Tweet)

---

Freelance Cloud & DevOps Engineer. Based in Utrecht, available in the Netherlands.

13+ years at the intersection of PHP/Symfony development and cloud infrastructure. AWS Certified Solutions Architect. HashiCorp Terraform Associate.

AWS / Kubernetes / Terraform / Docker / CI/CD / GitOps

DMs open. tommie.sh

#DevOps #Kubernetes #Terraform #AWS #FreelanceDevOps

---

### Tweet 2 — Thread: Terraform Tip (Thought Leadership)

**Format:** 6-tweet thread. Use 1/ notation.

---

**Tweet 2/1:**
Terraform state is the part nobody warns you about until it bites you.

Here are 5 things I wish I had understood before I managed production state files. Thread.

**Tweet 2/2:**
1. State is ground truth — not your code.

If someone creates a resource manually in the console, Terraform does not know. Next apply will either ignore it or destroy it depending on your config. Always import manually created resources immediately, or accept that your state is lying to you.

**Tweet 2/3:**
2. State locking is not optional in teams.

Two engineers running apply simultaneously without locking = corrupted state. Use S3 + DynamoDB locking (or Terraform Cloud). This is one of those "it will be fine until it is catastrophically not fine" settings.

**Tweet 2/4:**
3. terraform.tfstate is a secret file.

It contains plaintext values including passwords, keys, and connection strings. Never commit it to git. Use remote state with encryption. This mistake is embarrassingly common and shows up in breach reports.

**Tweet 2/5:**
4. State drift happens even if you are disciplined.

Schedule regular `terraform plan` runs in CI with no changes expected. Alert on drift. Treat drift as a bug, not a background condition. Systems that tolerate drift accumulate risk silently.

**Tweet 2/6:**
5. Refactoring state is possible — but plan it like a migration.

`terraform state mv` and `moved` blocks exist. Use them. Never just delete resources from config and hope the cloud resources disappear. They will not. You will orphan infrastructure and pay for it.

What state mistake cost you the most time to fix? Genuinely curious.

#Terraform #DevOps #InfrastructureAsCode #AWS #IaC

---

### Tweet 3 — Single Technical Observation

---

The most expensive AWS bill I have ever audited was not caused by over-provisioning.

It was caused by NAT Gateway data processing charges nobody had noticed for 14 months.

Always check: NAT Gateway, data transfer between AZs, and CloudWatch log ingestion. These three lines are responsible for more surprise bills than oversized instances.

#AWS #CloudCosts #FinOps #DevOps

---

### Tweet 4 — Thread: GitOps Explained Simply (Thought Leadership)

**Format:** 5-tweet thread.

---

**Tweet 4/1:**
GitOps is not a tool. It is a principle.

But most explanations make it sound more complicated than it is. Here is the short version. Thread.

**Tweet 4/2:**
The core idea: Git is the single source of truth for what your infrastructure and applications should look like.

You never change a running system directly. You change the Git repo. An automated process notices the change and reconciles the real system to match.

**Tweet 4/3:**
The practical consequence: everything is auditable, everything is reversible, and "what changed" is always answerable with `git log`.

No more "someone updated the config in the console on Tuesday and now nobody knows what it said before."

**Tweet 4/4:**
The tools most commonly used for GitOps on Kubernetes: ArgoCD and Flux.

Both watch a Git repo. Both reconcile the cluster to the desired state. Both will alert you when the actual state drifts from what Git says it should be.

**Tweet 4/5:**
GitOps does not eliminate complexity. It makes complexity visible and reviewable.

That is the whole value proposition: turning invisible operational changes into pull requests that can be discussed, reviewed, and rolled back.

If your team has ever asked "who changed that and when" — GitOps is the answer.

#GitOps #Kubernetes #ArgoCD #DevOps #CloudEngineering #IaC

---

### Tweet 5 — Engagement / Opinion

---

Unpopular opinion: "we use Kubernetes" is not a signal of engineering maturity.

Running K8s well, at a scale that justifies it, with proper observability, RBAC, and upgrade hygiene — that is.

Half the clusters I have seen in the wild would be better off as ECS or even a few EC2 instances.

Complexity is not a flex. Appropriate complexity is.

#Kubernetes #DevOps #CloudEngineering #PlatformEngineering

---

## 4. CONTENT CALENDAR — 4-WEEK POSTING SCHEDULE

### Principles
- LinkedIn: 2 posts per week, Tuesday and Thursday, published between 07:30 and 09:00 CET. This window catches Dutch professionals before their morning stand-up.
- Twitter/X: 3–4 posts per week. Mix of original tweets and replies to trending DevOps/cloud discussions.
- Engagement (commenting, replying): daily, 15 minutes, highest-leverage activity on LinkedIn is commenting on other people's posts in the first 30 minutes after they publish.

---

### Week 1 — Launch Week

| Day | Platform | Content |
|---|---|---|
| Monday | LinkedIn | Prepare and finalize Profile (see Section 5 optimization tips before posting anything) |
| Tuesday | LinkedIn | Post 1 — Availability Announcement (pin to Featured immediately after posting) |
| Tuesday | Twitter/X | Tweet 1 — Availability / personal brand |
| Wednesday | Twitter/X | Tweet 3 — NAT Gateway cost observation |
| Thursday | LinkedIn | Post 2 — Thought leadership: IaC / infrastructure archaeology |
| Thursday | Twitter/X | Tweet 5 — Unpopular opinion: Kubernetes maturity |
| Friday | Twitter/X | Reply to 3–5 DevOps or AWS-related tweets from engineers you respect. Add something specific. |
| Daily | LinkedIn | Spend 15 minutes commenting on posts from Dutch tech CTOs, engineering managers, and cloud engineers. |

---

### Week 2 — Build Credibility

| Day | Platform | Content |
|---|---|---|
| Tuesday | LinkedIn | Post 3 — Case study: 4-hour deployments to 12 minutes |
| Tuesday | Twitter/X | Tweet 2 — Terraform state thread (1/6 through 6/6) |
| Wednesday | Twitter/X | Reply to any responses on Tweet 2 thread. Threads live for days if you engage with replies. |
| Thursday | LinkedIn | Post 5 — Engagement post: Kubernetes vs ECS vs serverless greenfield question |
| Friday | Twitter/X | Share one resource you found genuinely useful this week with a one-sentence note on why. |
| Daily | LinkedIn | Comment on 2–3 posts from potential clients (CTOs, IT managers, tech leads at Dutch companies). |

---

### Week 3 — Authority Building

| Day | Platform | Content |
|---|---|---|
| Tuesday | LinkedIn | Post 4 — Certification showcase (English or Dutch version) |
| Tuesday | Twitter/X | Tweet 4 — GitOps thread (1/5 through 5/5) |
| Wednesday | Twitter/X | Write a single tweet expanding on one reply you received on the GitOps thread. |
| Thursday | LinkedIn | New post (original): Write a short post about one specific Terraform or Kubernetes pattern you use regularly. 150–250 words, practical, specific. |
| Friday | Twitter/X | Engage with AWS, HashiCorp, or CNCF official accounts when they post something in your area. Replies to large accounts get eyeballs. |
| Daily | LinkedIn | Identify 5 Dutch tech companies where you want to work. Follow their company pages. Comment on their posts when relevant. |

---

### Week 4 — Deepening & Outreach

| Day | Platform | Content |
|---|---|---|
| Tuesday | LinkedIn | New thought leadership post: pick one topic from your real project experience. Potential topics: Kubernetes upgrade strategy, PHP app containerization lessons, CI/CD for legacy codebases, multi-account AWS strategy for SMEs. |
| Wednesday | Twitter/X | Thread: "3 things I check in the first week on a new DevOps engagement" — practical, specific, yours. |
| Thursday | LinkedIn | Reshare Post 1 (availability announcement) with a short update: "Still available, currently talking to a few teams — if you have been thinking about reaching out, now is a good time." |
| Friday | LinkedIn | DM 10 second-degree connections who are CTOs, tech leads, or engineering managers at Dutch companies. Not a pitch — introduce yourself, mention what you do, ask if they are open to a quick call. Aim for 1–2 responses. |
| Daily | Twitter/X | Reply to DevOps and cloud discussions. Find your 5 most followed Dutch tech accounts and be a consistent, useful presence in their replies. |

---

### Ongoing (from Week 5 forward)

- LinkedIn: 2 posts per week minimum. Rotate through: thought leadership, case study, engagement question, tool/tip post.
- Twitter/X: 3–5 posts per week. Prioritize threads and high-signal single observations.
- Monthly: Review what performed. Double down on formats that generated DMs or profile visits.
- Quarterly: Update LinkedIn Featured section with new projects, certifications, or published articles.

---

## 5. PROFILE OPTIMIZATION TIPS

### LinkedIn Headline

**Current problem (typical for engineers):** Job title only. "Cloud & DevOps Engineer" describes a category, not a value proposition.

**Recommended headline:**
```
Freelance Cloud & DevOps Engineer | AWS · Kubernetes · Terraform | Available in the Netherlands | tommie.sh
```

**Why this works:**
- "Freelance" signals availability immediately to anyone scanning profiles
- The three core technologies (AWS, Kubernetes, Terraform) match the search terms Dutch hiring managers use
- "Available in the Netherlands" removes ambiguity without requiring them to read further
- The website URL is an unusual trust signal in a headline — it implies you have a professional presence worth linking to
- 220 character limit on LinkedIn headlines — this fits

**Alternative (more direct):**
```
Freelance Cloud & DevOps Engineer · AWS Certified · Kubernetes · Terraform · IaC · Utrecht, NL · Open to assignments
```

---

### LinkedIn About Section

The About section should answer three questions for a visitor who has 20 seconds: what do you do, who do you do it for, and why should they trust you. Write it in first person. Use short paragraphs and line breaks — LinkedIn does not render markdown, and dense text gets skipped.

**Recommended About section (English):**

---

I help Dutch tech companies build and stabilize cloud infrastructure that their development teams can actually work with.

After 13+ years at the intersection of software development and cloud engineering, I understand both sides of the wall that often exists between developers and DevOps. I started as a PHP/Symfony/Drupal developer and moved deliberately into AWS, Kubernetes, and Infrastructure as Code. That background means I design infrastructure for the teams who use it, not in isolation from them.

What I work on:

- Cloud infrastructure design and implementation on AWS
- Kubernetes cluster setup, operations, and Kubernetes upgrades
- Terraform — greenfield IaC or bringing existing environments under version control
- CI/CD pipeline design and automation (GitHub Actions, GitLab CI, and others)
- Containerization of existing applications with Docker
- Technical debt reduction and platform modernization
- GitOps implementation with ArgoCD or Flux

I am AWS Certified Solutions Architect and HashiCorp Certified Terraform Associate.

I take on project-based and longer-term freelance assignments. I work best on teams that want an engineer who will tell them what needs to change, not just execute tickets.

Based in Utrecht. Available for assignments across the Netherlands, hybrid or on-site.

Open to a conversation? Send me a message or visit tommie.sh

---

**Length note:** This is approximately 230 words. LinkedIn shows roughly 300 characters before the "see more" fold. The first two sentences are the most important — they must make someone want to click "see more."

---

### LinkedIn Featured Section

The Featured section appears directly below the About section and is prime real estate. Most engineers leave it empty or filled with random activity. Use it deliberately.

**Recommended Featured items (in order):**

1. **Website link** — Link to tommie.sh with a custom title: "Freelance Cloud & DevOps Engineer — tommie.sh" and a one-line description: "Available for cloud and DevOps assignments in the Netherlands. AWS · Kubernetes · Terraform."

2. **LinkedIn post** — Feature Post 1 (availability announcement) once it has some engagement. This keeps the availability signal visible even as it falls off the feed.

3. **Certifications** — Link directly to your AWS Certified Solutions Architect Credly badge and your HashiCorp Terraform Associate Credly badge. These are clickable, verifiable, and immediately credible to anyone evaluating you.

4. **GitHub profile** (optional but recommended) — Link to your GitHub with title "Projects and infrastructure code — GitHub" if you have public repositories worth seeing. If the profile is currently sparse, do this after you have curated it (see platform strategy, Priority 2).

---

## 6. HASHTAG STRATEGY

### LinkedIn — Primary Hashtag Set (use 4–6 per post, from this list)

These are the hashtags with meaningful follower counts in the Dutch and broader European professional cloud/DevOps audience on LinkedIn.

| Hashtag | Use case |
|---|---|
| #DevOps | All posts — highest reach hashtag in the niche |
| #AWS | Any post mentioning AWS or cloud infrastructure |
| #Kubernetes | Any post mentioning containers or orchestration |
| #Terraform | Any IaC or infrastructure post |
| #CloudEngineering | Thought leadership and availability posts |
| #FreelanceNederland | Availability posts — directly targets Dutch hiring audience |
| #InfrastructureAsCode | IaC-specific posts |
| #CICD | Deployment and pipeline posts |
| #PlatformEngineering | Thought leadership posts with platform-level scope |
| #Utrecht | Availability and local brand posts — low volume but hyper-targeted |

**LinkedIn — Secondary Hashtag Set (use 1–2 per post when relevant)**

| Hashtag | Use case |
|---|---|
| #GitOps | GitOps-specific content |
| #Docker | Containerization content |
| #SRE | Reliability and observability topics |
| #TechDebt | Legacy modernization posts |
| #FinOps | Cloud cost optimization posts |
| #FreelanceDevOps | Availability and personal brand posts |
| #PHP | Posts bridging development and infrastructure |

**LinkedIn hashtag discipline:** Do not use more than 6 hashtags per post. LinkedIn's algorithm has historically penalised posts that look like they are optimising for hashtag reach over content quality. Put hashtags at the end of the post, not in the body.

---

### Twitter/X — Primary Hashtag Set

Twitter hashtag conventions are different — they are used more sparingly, often 1–3 per tweet, and sometimes none at all on threads where the content speaks for itself.

| Hashtag | Use case |
|---|---|
| #DevOps | General DevOps posts and threads |
| #Kubernetes | Any Kubernetes content |
| #Terraform | IaC and Terraform threads |
| #AWS | AWS-specific posts |
| #IaC | Infrastructure as Code posts |
| #GitOps | GitOps threads |

**Twitter/X — Secondary (use selectively)**

| Hashtag | Use case |
|---|---|
| #FinOps | Cloud cost content |
| #PlatformEngineering | Platform-level discussions |
| #CNCF | Cloud native content |
| #FreelanceDevOps | Availability tweets only |

**Twitter hashtag discipline:** On threads, put hashtags only on the last tweet. On single tweets, 1–2 maximum. Threads with too many hashtags look like spam and underperform organically.

---

## 7. ENGAGEMENT STRATEGY — GROWING REACH WITHOUT PAID ADS

### The Core Principle
On LinkedIn, commenting is more powerful than posting. Every comment you leave on someone else's post appears in the feeds of their followers. A specific, well-written comment on a post by a Dutch CTO with 5,000 followers reaches more of your target audience than your own post on a profile with 500 connections. This is the single highest-leverage activity in the early months.

---

### LinkedIn Engagement Tactics

**1. The 30-Minute Rule**
When you post, be available to respond to every comment within the first 30 minutes. LinkedIn's algorithm weights early engagement heavily. A post with 5 comments in the first 30 minutes will be shown to significantly more people than a post with 5 comments spread over 24 hours. Schedule posts, then be present.

**2. Comment on Decision-Maker Posts Daily**
Identify 20–30 Dutch tech decision-makers (CTOs, engineering managers, IT directors at Dutch companies in sectors likely to hire DevOps freelancers — scale-ups, fintech, public sector IT, logistics tech). Follow them. Turn on notifications for their posts. When they post something relevant, be one of the first 10 comments with something specific and useful — not "Great post!" but a genuine response that adds a point or asks a real question. Do this for 4 weeks and you will appear in their feed regularly.

**3. LinkedIn Groups (Secondary Effort)**
Active Dutch tech groups on LinkedIn worth joining and occasionally participating in:
- "IT Professionals Nederland"
- "AWS Cloud in The Netherlands"
- "DevOps & Agile Netherlands"
- "Kubernetes & Cloud Native Nederland"

Do not post availability announcements in groups. Post questions and insights. Groups penalise promotional content and reward genuine conversation.

**4. Employee Advocacy Angle**
If Tommie has any former colleagues who are now at Dutch tech companies, a LinkedIn recommendation from a CTO or tech lead carries more weight than any amount of posting. Reach out to 3–5 former collaborators and ask for a recommendation. Offer to write one for them in return. One strong recommendation from a verifiable senior technical person is worth weeks of posting.

**5. Connect Strategically, Not Broadly**
LinkedIn connection requests to decision-makers at target companies should include a short personal note. Not a pitch — a context note. Example: "Hi [Name], I noticed you're building out the platform team at [Company]. I work in cloud infrastructure and Kubernetes — following your work with interest. Open to connecting." Connection acceptance rate with a note is 3–5x higher than without.

---

### Twitter/X Engagement Tactics

**1. Reply to AWS, HashiCorp, and CNCF**
When official AWS, HashiCorp, Terraform, or Kubernetes accounts post announcements or news, replies that add technical context or a real-world perspective get significant impressions. These accounts have large audiences; your reply appears under a post they are already reading.

**2. Find the Dutch Tech Twitter Cluster**
Search for Dutch DevOps engineers, startup CTOs, and tech event organizers on Twitter. Accounts associated with events like Tweakers DevDays, AWS Summit Amsterdam, KubeCon EU alumni, and Dutch cloud meetups are a good starting point. Engaging consistently in this cluster creates recognition before outreach.

**3. Thread Reply Strategy**
When you post a thread, reply to your own thread over the following 24 hours as you receive responses. A thread that has conversation in it performs better than one with no replies. Engagement begets engagement on Twitter's algorithm.

**4. Quote Tweet with Added Value**
When a cloud or DevOps story gets traction (a major AWS outage, a Kubernetes security advisory, a Terraform feature release), a quote tweet with your specific take — not just "thoughts?" but an actual technical observation — builds authority quickly. Timeliness matters here.

---

### Community Engagement (Dutch Tech Scene)

**AWS User Group Netherlands**
- Website: awsugnl.nl
- Meetups in Amsterdam and Utrecht
- Attend in-person when possible
- Present a lightning talk — even a 5-minute "here is something unexpected I learned on a project" positions you as a practitioner, not just an attendee
- Community presence here leads directly to referrals

**HashiCorp User Group Netherlands (HUG NL)**
- HashiCorp/IBM has an active Netherlands community
- Terraform practitioners who attend are often exactly the teams that hire freelance DevOps engineers

**DevOps NL (Slack/Meetups)**
- Slack workspace for Dutch DevOps community
- Participate in channels relevant to your stack — do not lurk, but do not pitch either
- Answer questions. People remember who helped them.

**Tweakers.net Gathering / Tech Community**
- Less direct for B2B but builds Dutch tech credibility
- Technical articles on Tweakers are searchable and index well in Dutch Google results

---

### Content Amplification Without Ads

**Cross-post LinkedIn articles to personal website**
If Tommie writes LinkedIn articles (long-form, 800+ words), they should also be published on tommie.sh as blog posts. This drives organic search traffic to the website over time and builds an asset that exists outside LinkedIn's platform.

**Republish on Dev.to or Hashnode**
Technical posts about Terraform, Kubernetes, or AWS published on dev.to or hashnode.dev reach a different audience — developers who are not on LinkedIn regularly but influence technology decisions at their companies. Use canonical URL pointing back to tommie.sh.

**GitHub README as content**
Pin a repository on GitHub with a well-written README for a Terraform module, a Kubernetes deployment pattern, or a CI/CD template. Engineers search GitHub for examples before they search Google. A useful repository gets starred, forked, and cited — and the author profile leads back to LinkedIn and the website.

---

## 8. PAID ADVERTISING STRATEGY

### Honest Preamble — What Paid Ads Can and Cannot Do for a Solo Freelancer

Paid advertising for a freelance engineer is fundamentally different from paid advertising for a SaaS product or an agency. There are no economies of scale, no A/B testing budget large enough to reach statistical significance quickly, and no sales funnel with dozens of leads needed to close one deal. Tommie needs one good client at a time — perhaps three or four per year if they are project-based. That changes the logic entirely.

What paid ads can do:
- Put Tommie's name in front of Dutch CTOs and tech leads who are actively searching or passively browsing, before they have started a formal hiring process
- Retarget the small number of people who visit tommie.sh but do not make contact — keeping him visible during their consideration phase
- Compress the time it takes for organic reputation-building to generate inbound enquiries
- Test messaging quickly (which angle resonates — cost reduction, platform reliability, speed to market) without waiting months for organic signal

What paid ads cannot do:
- Replace trust. A paid ad gets a click; the profile, the content, and the conversation close the deal. Ads that run before the organic foundation (profile, posts, case studies) is solid will waste budget.
- Generate high volume. The Dutch freelance DevOps market is not a volume game. Expect tens of relevant impressions per day, not thousands.
- Work in isolation. The paid strategy below is designed to amplify an already-active organic presence, not substitute for one. Run paid campaigns from week 3 onwards, after organic posting has started and the profile is fully optimized.

The budget figures below are realistic for a solo freelancer in the Dutch B2B market, not enterprise marketing budgets dressed down. A single won project at a typical Dutch freelance DevOps day rate (€750–€950/day) returns the entire yearly paid ads budget in one week of billing.

---

### 8.1 Platform Recommendation — Where to Spend and Why

**Recommended: LinkedIn Ads — Primary paid platform**

LinkedIn is the only paid platform where Tommie can target by job title, company size, industry, and geography simultaneously. He can reach "CTOs at Dutch tech companies with 50–500 employees" as a defined audience. No other platform can do this with the same precision for a B2B audience. The CPCs are high (see below), but the audience quality justifies it. Every euro spent reaches someone who is actually capable of hiring a freelance DevOps engineer, rather than someone who tangentially might.

**Recommended: Google Search Ads — Secondary paid platform**

Google captures demand that already exists. When a Dutch IT manager types "freelance DevOps engineer Utrecht" or "AWS consultant inhuren Nederland," they are already in buying mode. That intent signal is extremely valuable. The keyword volumes are low (this is a niche), but conversion rates from search intent are significantly higher than from social advertising. Google Search Ads complement LinkedIn by catching people at the bottom of the funnel rather than the middle.

**Recommended with caveat: LinkedIn Retargeting (via Insight Tag)**

Retargeting visitors to tommie.sh is low cost and high relevance. Anyone who has already visited the website is a warm lead. Even a small retargeting budget (€30–50/month) keeps Tommie visible to people who found him once but did not reach out. This is the highest-efficiency paid spend available.

**Not recommended: Meta (Facebook/Instagram) Ads**

Meta's B2B targeting is improving but remains inferior to LinkedIn for this specific use case. Dutch CTOs and engineering managers are not browsing Facebook in a professional mindset. The interest-based targeting (rather than job-title targeting) produces significant audience pollution. The budget would reach a lot of developers who cannot hire Tommie, rather than the smaller number of decision-makers who can. Skip this entirely unless Tommie wants to experiment with a very small budget after the LinkedIn and Google campaigns are established.

**Not recommended: Twitter/X Ads**

Twitter's advertising product has deteriorated significantly since 2022. Targeting options are limited, CPMs are inconsistent, and the platform's user base decline in Europe makes it a poor investment for paid spend. Organic Twitter activity (as covered in Section 3) is worth the time investment; paid Twitter is not.

**Not recommended: Google Display Ads (as a starting point)**

Display advertising (banner ads across the Google Display Network) requires volume and frequency to build brand recall. For a solo freelancer with a small budget, display spend is diluted across too wide an audience. It can be added later as a brand awareness layer once search and LinkedIn campaigns are optimized, but it should not be in the starting budget.

**Platform priority for paid spend:**
1. LinkedIn Ads (Sponsored Content + Retargeting)
2. Google Search Ads
3. LinkedIn Message Ads (only at growth budget level)

---

### 8.2 LinkedIn Ads — Formats, Targeting, and Setup

#### Recommended Ad Formats

**Format 1 — Sponsored Content (Single Image)**
The core format. A native-looking post that appears in the LinkedIn feed of targeted users. It looks like organic content and performs well when the creative and copy feel genuine rather than promotional. This is the right starting format for a solo freelancer because it builds both impressions and credibility simultaneously — people who see the ad and do not click still see Tommie's name and positioning.

Use for: availability announcements, case study posts, certification credibility.
Objective: Website visits (to tommie.sh) or Lead Generation.

**Format 2 — Lead Gen Forms**
Instead of sending clicks to the website, Lead Gen Forms collect name, email, and job title directly within LinkedIn — the form pre-fills from the user's LinkedIn profile, so friction is minimal. Conversion rates are typically 2–4x higher than click-to-website campaigns.

The form should offer something of value in exchange for contact details. For Tommie, the most credible offer is a short, specific document: "Free 30-minute cloud infrastructure review for your team" or a downloadable PDF — for example, "AWS Cost Reduction Checklist for Dutch Tech Teams (2026)." The goal is not to collect emails for a drip campaign; it is to generate a genuine conversation starter.

Use for: direct lead generation when the profile and organic presence are already established.
Objective: Lead Generation.

**Format 3 — Message Ads (InMail) — Growth budget only**
Message Ads land directly in a LinkedIn member's inbox. They have higher visibility than feed ads but also higher friction — users know they are being messaged by an advertiser. They work best when the message is personal in tone and relevant to the recipient's role. They are expensive per send (€0.50–€1.00 per message delivered) and should not be the first LinkedIn ad format used.

If used, keep the message under 150 words, make it specific to the recipient's job title, and do not open with a pitch. Open with a relevant observation or question.

Use for: reaching a very specific list of companies or decision-maker titles when organic outreach has not broken through.
Objective: Website visits or direct message reply.

---

#### LinkedIn Ads Targeting Settings

These settings should be used as a starting template. Audience size should target 20,000–80,000 members for Sponsored Content — large enough to deliver, small enough to be relevant.

**Geography**
- Netherlands (all regions)
- Optionally add: Belgium (Flemish-speaking) if Tommie is open to cross-border assignments

**Language**
- English AND Dutch (run separate ad sets per language if budget allows; if not, English-language ads in the Netherlands perform adequately for the technical audience)

**Job Titles (target at least 3–5 from this list)**
LinkedIn job title targeting matches exact and similar titles. Use the following:
- Chief Technology Officer
- VP of Engineering
- Head of Engineering
- Engineering Manager
- IT Manager
- IT Director
- Head of Infrastructure
- Platform Engineer (to reach peer engineers who influence hiring decisions)
- Tech Lead
- Software Architect

Note: avoid targeting "DevOps Engineer" as a job title — those are peers, not buyers.

**Company Size**
- 51–200 employees (scale-ups with real infrastructure complexity but without a large in-house DevOps team)
- 201–500 employees (mid-market companies most likely to hire senior freelance engineers)
- 500–1000 employees (larger companies with project-based needs)

Exclude: 1–10 employees (too small for a senior freelance engagement at Tommie's day rate) and 10,000+ employees (large enterprises typically use staffing agencies or have internal DevOps teams and a vendor procurement process that is too slow for freelance engagement).

**Industries (select relevant, exclude noise)**
Include:
- Information Technology and Services
- Software Development
- Financial Services (fintech is a strong DevOps hiring sector in the Netherlands)
- E-commerce and Retail (Dutch e-commerce companies often need DevOps help at scale)
- Logistics and Supply Chain (significant tech investment in the Netherlands — CEVA, Rhenus, etc.)
- Healthcare IT (EPIC implementations, cloud migrations are common)
- Government Administration — optional; public sector IT in the Netherlands is a real market but procurement cycles are very long

Exclude:
- Staffing and Recruiting (these are intermediaries, not clients; Tommie may choose to re-include this if he wants to work through agencies, but it is a different relationship)
- Education
- Non-profit

**Exclude audiences**
- Exclude current connections (they already know Tommie; paid spend on them is wasted)
- Exclude people who have engaged with Tommie's LinkedIn profile in the past 90 days (they are already in the organic funnel)

---

### 8.3 Google Search Ads — Keyword Strategy and Ad Copy

#### Why Search Ads Work for This Niche

Google Search Ads capture active demand. A Dutch IT manager who types "freelance Kubernetes engineer inhuren" is not passively browsing — they have a problem and are looking for a solution. The keyword volumes for freelance DevOps searches in the Netherlands are low (tens to low hundreds of searches per month, not thousands), but the intent is extremely high. A single click that converts to a conversation that converts to a project is worth hundreds of euros in ad spend.

#### Keyword Strategy

**Campaign structure: 3 tightly themed ad groups**

**Ad Group 1 — Freelance DevOps / Cloud (Dutch intent)**
Primary keywords (phrase match):
- "freelance devops engineer nederland"
- "freelance devops engineer inhuren"
- "freelance cloud engineer nederland"
- "freelance cloud engineer inhuren"
- "freelance devops engineer utrecht"
- "devops consultant inhuren"
- "cloud architect freelance nederland"

**Ad Group 2 — Technology-Specific (English and Dutch intent)**
- "freelance kubernetes engineer"
- "freelance terraform engineer"
- "freelance aws engineer nederland"
- "aws consultant freelance"
- "kubernetes consultant inhuren"
- "terraform consultant nederland"
- "infrastructure as code consultant"

**Ad Group 3 — Problem-Aware (Dutch companies searching by symptom)**
- "cicd pipeline implementeren"
- "kubernetes implementatie help"
- "aws infrastructuur opzetten"
- "cloud migratie consultant nederland"
- "devops team uitbreiden freelance"
- "aws kosten optimalisatie consultant"

**Negative keywords (critical — exclude irrelevant clicks)**
- "cursus" (training/course)
- "opleiding" (education)
- "vacature" (job vacancy — removes people looking to hire employees, not freelancers)
- "werk" / "baan" (job-seeking intent)
- "junior"
- "goedkoop" (cheap — filters out budget-sensitive searchers unlikely to match Tommie's day rate)
- "gratis" (free)
- "stage" (internship)

**Match types**
Use phrase match as the default. Broad match will bleed budget into irrelevant searches at low volume. Exact match alone misses variations in Dutch search phrasing. Phrase match is the practical balance.

**Estimated CPC for NL Market**
Dutch B2B tech keywords have moderate competition. Estimated CPCs:
- Freelance DevOps/cloud keywords: €2.00–€5.00 per click
- Technology-specific keywords (Kubernetes, Terraform): €1.50–€4.00 per click
- Problem-aware keywords: €1.00–€3.00 per click (lower competition, longer tail)

At a €200/month Google budget, expect 50–100 clicks per month. At a 5–10% enquiry conversion rate on a well-optimized landing page, that is 3–10 genuine enquiries per month from search alone. One converted enquiry pays for 3–6 months of Google Ads spend.

#### Google Search Ad Copy

**Ad Group 1 — Freelance DevOps / Cloud**

Headline 1: Freelance DevOps Engineer | Utrecht
Headline 2: 13+ jaar ervaring | AWS & Kubernetes
Headline 3: Beschikbaar in heel Nederland
Description 1: AWS Certified. Terraform, Kubernetes, CI/CD. Ik help Nederlandse techbedrijven met schaalbare cloud infrastructuur. Direct inzetbaar.
Description 2: Geen bureau, geen overhead. Neem direct contact op via tommie.sh — reactie binnen 24 uur.
Display URL: tommie.sh/freelance-devops

**Ad Group 2 — Technology-Specific**

Headline 1: Freelance Kubernetes & Terraform Expert
Headline 2: AWS Certified Solutions Architect
Headline 3: Beschikbaar | Utrecht & Remote NL
Description 1: Kubernetes clusters, Terraform IaC, CI/CD pipelines. 13+ jaar ervaring op het snijvlak van development en cloud. Bekijk tommie.sh.
Description 2: HashiCorp Terraform Associate gecertificeerd. Project-based of langer. Direct beschikbaar voor opdrachten in Nederland.
Display URL: tommie.sh/kubernetes-terraform

**Ad Group 3 — Problem-Aware**

Headline 1: Cloud Infrastructuur Problemen?
Headline 2: Freelance DevOps — Direct Beschikbaar
Headline 3: AWS · Kubernetes · Terraform | NL
Description 1: CI/CD bottlenecks, cloud migraties, Kubernetes implementaties, kostenoverschrijdingen op AWS. Ik los het op. Neem contact op.
Description 2: 13+ jaar ervaring. AWS Certified. Beschikbaar voor projecten in Nederland. Bekijk tommie.sh voor meer informatie.
Display URL: tommie.sh/cloud-consultant

**Landing page note:** All Google Ads should send traffic to tommie.sh, not to LinkedIn. The website is the owned asset. If Tommie does not have a dedicated contact or enquiry form on tommie.sh, adding one before running Google Ads is essential — a bounce to a LinkedIn profile from a Google ad breaks the user journey and loses the conversion event.

---

### 8.4 Retargeting — LinkedIn Insight Tag and Google Pixel

Retargeting is the highest-efficiency paid spend available for a solo freelancer. The audience is small (only people who have already visited tommie.sh), the relevance is high (they already looked), and the cost is low because the audience size keeps spend naturally contained.

#### LinkedIn Insight Tag Setup

The LinkedIn Insight Tag is a small JavaScript snippet installed on tommie.sh. Once installed, LinkedIn can match site visitors to LinkedIn profiles and serve them ads in the LinkedIn feed.

**Installation steps:**
1. Create a LinkedIn Campaign Manager account (free)
2. Navigate to Account Assets > Insight Tag
3. Copy the JavaScript snippet
4. Install it on tommie.sh — it goes in the `<head>` section of `index.html`, alongside the existing Open Graph and structured data tags already present in the file
5. Verify the tag is firing using LinkedIn's tag validator
6. LinkedIn requires a minimum audience of 300 matched members before retargeting campaigns can run — tommie.sh needs to accumulate that many LinkedIn-matched visitors before retargeting activates. This typically takes 4–8 weeks at organic traffic levels, faster if Google Ads are running simultaneously.

**Retargeting campaign settings:**
- Audience: Website visitors (all pages) in the past 90 days
- Exclude: Anyone who visited a "thank you" or confirmation page (they have already converted)
- Ad format: Sponsored Content (single image)
- Budget: €1.00–€2.00/day (the audience is small, so even a low daily budget will serve the full audience regularly)
- Objective: Website visits (back to tommie.sh) or Brand Awareness
- Frequency cap: 4 impressions per member per week — retargeting that shows too frequently becomes irritating

**Retargeting ad message:** These should differ from awareness ads. The person has already seen the website. The ad should acknowledge the implicit context without being intrusive.

Example retargeting ad copy:
"Still looking for a freelance DevOps engineer in the Netherlands? I am available for AWS, Kubernetes, and Terraform projects. Reach out at tommie.sh."

#### Google Pixel (Google Tag) Setup

The Google tag enables both conversion tracking for Google Ads and a retargeting audience in Google Ads.

**Installation:**
1. Create a Google Ads account and a Google Analytics 4 property for tommie.sh
2. Install the GA4 tag on tommie.sh — Google Tag Manager is the cleanest approach. Add one GTM container snippet to `index.html` and manage all tags (GA4, Google Ads conversion tag, LinkedIn Insight Tag) from the GTM interface rather than adding individual snippets directly to the HTML
3. Link GA4 to Google Ads in the Google Ads account settings
4. Define a conversion action: "Contact form submission" or "Email link click" — whichever action on tommie.sh counts as an enquiry
5. Import the GA4 conversion event into Google Ads for conversion tracking

**Google retargeting:**
Once the Google tag is installed, create a remarketing audience in Google Ads: "All website visitors, past 90 days." Run this as a Display remarketing campaign with a very low budget (€20–30/month) targeting the Google Display Network. The creative should be a simple banner with name, title, and a clear CTA. Google Display remarketing reaches previous visitors as they browse other websites — lower intent than LinkedIn retargeting but useful additional touchpoints.

Minimum audience size for Google remarketing: 100 users for Display, 1,000 for Search remarketing lists (RLSA). At organic traffic levels, Display remarketing may be the only viable Google retargeting option initially.

---

### 8.5 Budget Breakdown — Three Monthly Scenarios

All figures are monthly ad spend in euros, excluding time investment. VAT (21% Dutch BTW) applies to LinkedIn and Google ad spend for Dutch advertisers — both platforms charge BTW on invoices for Dutch-registered businesses and sole traders. Factor this into budget planning: a €300 net budget becomes approximately €363 including BTW.

---

#### Tier 1 — Starter (€150–300/month total)

**Recommended for:** First 1–3 months of paid activity, while organic presence is still building.

| Platform | Monthly Spend | Purpose |
|---|---|---|
| LinkedIn Sponsored Content | €100 | 1 campaign, 1 ad set, 1 ad. Availability or case study post. Netherlands CTO/tech lead targeting. |
| Google Search Ads | €100 | Ad Groups 1 and 2 only. Phrase match. Daily budget capped at €3.50/day. |
| LinkedIn Retargeting | €30–50 | Activate once Insight Tag has 300+ matched visitors. Low daily budget, high relevance. |
| Google Display Retargeting | €20–30 | Activate once 100+ visitors accumulated. |

**Expected results at Starter tier:**
- LinkedIn: 3,000–8,000 impressions/month among Dutch decision-makers; 30–80 profile visits; 5–15 website clicks
- Google Search: 30–60 clicks/month on high-intent keywords; 2–5 genuine enquiries per month if the website converts well
- Retargeting: keeps Tommie visible to existing visitors — immeasurable in isolation but supports conversion from other channels

**What this tier cannot do:** Generate high volume. At this spend level, the goal is to test messaging, establish baseline CPC/CPM data, and ensure the funnel (ad to website to enquiry) is working before scaling.

---

#### Tier 2 — Growth (€500–800/month total)

**Recommended for:** Months 3–6, once organic posting is consistent, the profile is fully optimized, and Tier 1 data has revealed which ad messaging works.

| Platform | Monthly Spend | Purpose |
|---|---|---|
| LinkedIn Sponsored Content | €250 | 2 campaigns: (1) awareness/thought leadership, (2) lead generation with Lead Gen Form. |
| LinkedIn Lead Gen Form campaign | Included above | Separate ad set targeting tech leads and CTOs. Offer: "30-minute infrastructure review" or downloadable checklist. |
| Google Search Ads | €200 | All 3 ad groups active. Daily budget ~€7/day. Add ad scheduling — weekdays only, 08:00–18:00 CET. |
| LinkedIn Retargeting | €80 | Increased frequency and slightly expanded creative rotation (2 ad variants). |
| Google Display Retargeting | €50 | Simple banner retargeting across GDN. |
| Buffer for testing | €50 | Reserve for testing one Message Ad campaign or an experimental ad format. |

**Expected results at Growth tier:**
- LinkedIn: 12,000–30,000 impressions/month; 100–200 profile visits; 15–40 website clicks; 3–8 Lead Gen Form submissions/month
- Google Search: 80–150 clicks/month; 5–12 enquiries/month
- Combined: realistically 2–4 qualified conversations per month from paid alone, alongside organic inbound

**Key action at this tier:** Review LinkedIn Lead Gen Form quality carefully. Quantity of form submissions matters less than whether the job titles and company sizes match Tommie's target. Tighten targeting based on who is actually submitting.

---

#### Tier 3 — Aggressive (€1,000+/month total)

**Recommended for:** When Tommie is actively between projects and wants to accelerate inbound significantly, or when he wants to build a pipeline for a specific future availability window.

| Platform | Monthly Spend | Purpose |
|---|---|---|
| LinkedIn Sponsored Content | €400 | 3 campaigns: awareness, lead gen, retargeting. Multiple creative variants per campaign. |
| LinkedIn Message Ads | €150 | Targeted InMail to a curated list of CTOs and engineering managers at 50–300 person Dutch tech companies. One campaign, tightly controlled audience. |
| Google Search Ads | €300 | All ad groups active. RLSA (remarketing lists for search ads) layered on top of standard campaigns — bid higher for users who have already visited tommie.sh. |
| Google Display Retargeting | €80 | Broader creative rotation; test different messages (availability vs. case study outcome vs. certification). |
| LinkedIn Retargeting | €120 | Segment retargeting by page visited if possible (visitors to a specific section vs. homepage only). |

**Expected results at Aggressive tier:**
- LinkedIn: 40,000–80,000+ impressions/month; 300–600 profile visits; 8–20 Lead Gen Form submissions/month
- Google Search: 150–300 clicks/month; 10–20 enquiries/month
- Message Ads: 200–400 messages delivered; 5–15% reply rate = 10–60 replies, of which 2–8 will be genuine conversations

**Honest caveat at this tier:** Doubling spend does not double results linearly. CPMs increase as audience frequency caps are reached, and the qualified audience in the Netherlands for this specific profile is not infinite. Beyond a certain point, incremental budget delivers diminishing returns. €1,000/month is approximately the ceiling of efficient spend for a solo freelancer in this niche without expanding geography or introducing new ad formats. If this tier is not generating enough enquiries, the bottleneck is more likely the website conversion rate or the offer clarity than the ad budget.

---

### 8.6 Campaign Structure — Setup, A/B Testing, and Conversion Tracking

#### LinkedIn Campaign Structure

```
LinkedIn Campaign Manager Account
|
|-- Campaign Group: "Freelance Awareness — NL"
|   |
|   |-- Campaign: "Sponsored Content — CTOs & Tech Leads"
|   |   |-- Ad Set: Netherlands | CTO + VP Eng + Engineering Manager | 51–500 employees
|   |   |-- Ad 1: Case study post (deployments from 4h to 12min)
|   |   |-- Ad 2: Thought leadership post (IaC / infrastructure archaeology)
|   |
|   |-- Campaign: "Lead Gen — Infrastructure Review Offer"
|   |   |-- Ad Set: Netherlands | IT Manager + Tech Lead + CTO | 51–500 employees
|   |   |-- Ad 1: "Free 30-min cloud infrastructure review" Lead Gen Form
|   |   |-- Ad 2: "AWS Cost Reduction Checklist" Lead Gen Form (if downloadable created)
|
|-- Campaign Group: "Retargeting — Website Visitors"
    |
    |-- Campaign: "Retargeting — All Visitors 90 days"
        |-- Audience: tommie.sh visitors (Insight Tag)
        |-- Ad 1: Availability reminder ("Still looking for a DevOps engineer?")
        |-- Ad 2: Case study variant ("We took a client from 4-hour to 12-minute deployments")
```

#### Google Ads Campaign Structure

```
Google Ads Account
|
|-- Campaign: "Freelance DevOps — Search NL" [Manual CPC or Target CPA]
|   |-- Ad Group 1: Freelance DevOps/Cloud (Dutch intent)
|   |   |-- 3 ads (RSA — Responsive Search Ads)
|   |   |-- Keywords: freelance devops engineer nederland, inhuren variants
|   |
|   |-- Ad Group 2: Technology-Specific
|   |   |-- 3 ads (RSA)
|   |   |-- Keywords: kubernetes, terraform, aws consultant
|   |
|   |-- Ad Group 3: Problem-Aware
|       |-- 3 ads (RSA)
|       |-- Keywords: cicd implementeren, cloud migratie consultant, etc.
|
|-- Campaign: "Remarketing — Display" [Target CPM]
    |-- Audience: All website visitors, past 90 days
    |-- Responsive Display Ads: 2–3 creative variants
```

#### A/B Test Recommendations

Run only one variable at a time. With small budgets and small audiences, testing too many variables simultaneously produces no statistically meaningful signal.

**Month 1–2: Test ad angle (LinkedIn)**
- Variant A: Credibility angle — certifications and years of experience as the headline
- Variant B: Outcome angle — lead with a specific result (deployments to 12 minutes, or a cost reduction figure)
- Winner: whichever drives more profile visits or Lead Gen Form completions at lower cost per result

**Month 2–3: Test CTA (LinkedIn)**
- Variant A: "Visit tommie.sh" (website click objective)
- Variant B: Lead Gen Form with "Request a free 30-minute review"
- Winner: whichever produces more qualified enquiry conversations — measure quality, not just volume

**Month 3–4: Test language (LinkedIn)**
- Variant A: English-language ad copy
- Variant B: Dutch-language ad copy (same content, translated)
- Winner: whichever produces lower CPM and higher CTR — this will also reveal whether the target audience engages more readily in English or Dutch, which informs organic content language decisions

**Google Ads ongoing: Test ad copy**
- Run 3 RSA headline options per ad group and allow Google to optimize combinations
- After 30 days with sufficient impressions, pin the top-performing headline to position 1 and test new variants in positions 2 and 3

#### Conversion Tracking Setup

This is the most important setup task before any paid spend. Without conversion tracking, it is impossible to know whether ads are generating enquiries or just clicks.

**Define conversions for tommie.sh:**
1. Contact form submission (if a form exists or is added to the site)
2. "mailto:" link click on info@tommie.sh — this can be tracked as a click event in GA4
3. LinkedIn profile link click — a softer, secondary conversion signal

**Implementation:**
- Install Google Tag Manager on tommie.sh (one container snippet in `<head>`, one in `<body>`) — adding GTM to the existing `index.html` is straightforward and keeps all tag management in one place
- Use GTM to fire a GA4 event on each conversion action without modifying the source HTML again
- Import GA4 conversions into Google Ads
- For LinkedIn: Lead Gen Form completions are tracked natively in LinkedIn Campaign Manager — no additional implementation needed

**Reporting cadence:**
- Weekly: Check Google Ads spend, clicks, and conversions. Pause any keyword with 50+ clicks and zero conversions.
- Weekly: Check LinkedIn Campaign Manager for impressions, CTR, and cost per result.
- Monthly: Review full-funnel — how many clicks became enquiries, how many enquiries became conversations, how many conversations became projects. Attribute revenue back to channel.

---

### 8.7 Paid Ad Messaging — 3 Ready-to-Use Ad Headlines and Descriptions

These are written specifically for paid placement — more direct, benefit-forward, and with explicit CTAs compared to organic posts. They are designed for LinkedIn Sponsored Content and Google Ads respectively.

---

**Ad 1 — Credibility / Availability (LinkedIn Sponsored Content)**

Introductory text (the body of the LinkedIn ad, visible above the image or card):

"Looking for a freelance Cloud & DevOps engineer in the Netherlands? I am Tommie Crawford — AWS Certified Solutions Architect, HashiCorp Terraform Associate, 13+ years of experience at the intersection of software development and cloud infrastructure. Based in Utrecht. Available for assignments now. AWS, Kubernetes, Terraform, CI/CD, GitOps. No agency — direct contact."

Headline (bold text on the link card): Freelance Cloud & DevOps Engineer | Available Now in the Netherlands
Description (sub-text on the link card): tommie.sh — AWS · Kubernetes · Terraform · Utrecht
CTA button: Learn More

When to use: Awareness campaigns targeting cold audiences. Run this first — it is a direct statement of availability and credentials, not a story or a soft pitch. It works for decision-makers who are in early-stage need recognition and are evaluating whether someone like Tommie exists in their market.

---

**Ad 2 — Outcome / Case Study (LinkedIn Sponsored Content)**

Introductory text:

"One of my clients had a deployment process that took four hours and needed two engineers present every time. After restructuring their pipeline with Terraform, GitHub Actions, and Kubernetes on EKS, deployments now run in 12 minutes — fully automated, no one watching. If your team is spending too much time on deployments and not enough time shipping features, reach out. Freelance DevOps engineer, available in the Netherlands."

Headline: From 4-Hour Deployments to 12 Minutes | Freelance DevOps NL
Description: AWS · Kubernetes · Terraform · GitHub Actions — tommie.sh
CTA button: Contact

When to use: Lead generation campaigns targeting tech leads and engineering managers who are actively experiencing deployment or infrastructure pain. This ad speaks directly to a recognizable symptom. It is also the most effective retargeting ad for previous website visitors, because it leads with a concrete result rather than a credential.

---

**Ad 3 — Google Search (Responsive Search Ad — multiple headlines and descriptions for Google to combine)**

Headlines (provide all 10, Google tests combinations):
1. Freelance DevOps Engineer Utrecht
2. AWS & Kubernetes Specialist | NL
3. Direct Beschikbaar in Nederland
4. 13 jaar Cloud & DevOps Ervaring
5. AWS Certified | Terraform Associate
6. Geen Bureau — Direct Contact
7. CI/CD, IaC, Kubernetes, Terraform
8. Cloud Infrastructuur? Neem Contact Op
9. Freelance Cloud Engineer Inhuren
10. tommie.sh — Beschikbaar Nu

Descriptions (Google tests combinations):
1. AWS Certified Solutions Architect. HashiCorp Terraform Associate. Beschikbaar voor projecten in Nederland. Bekijk tommie.sh en neem direct contact op.
2. Kubernetes, Terraform, CI/CD en AWS — 13+ jaar ervaring op het snijvlak van development en cloud. Geen bureau, geen overhead. Direct inzetbaar.
3. Freelance Cloud & DevOps engineer voor projecten in Nederland. Specialisatie: AWS, Kubernetes, Terraform, GitOps. Utrecht. Neem vandaag nog contact op.

Final URL: https://tommie.sh
Display URL path: tommie.sh/freelance-devops

When to use: All Google Search ad groups. Pin Headline 1 ("Freelance DevOps Engineer Utrecht") to position 1 to ensure local relevance always appears. Allow Google to test remaining headline combinations for positions 2 and 3 and report on which combinations earn the highest CTR.

---

### Paid Ads Launch Sequence

Do not run everything at once. Follow this sequence to avoid wasting budget before the funnel is working.

**Week 3 (first week of paid activity):**
- Install Google Tag Manager on tommie.sh and configure conversion tracking — verify it is firing correctly before spending anything
- Install LinkedIn Insight Tag via GTM
- Launch Google Search Ads, Ad Groups 1 and 2 only, daily budget €5/day
- Do not launch LinkedIn Ads yet — let organic posting run for 3 weeks first so the profile has content when ad-driven visitors arrive

**Week 4:**
- Review Google Search Ads: check the search term report, add any irrelevant terms to the negative keyword list
- Launch LinkedIn Sponsored Content, Campaign 1 (awareness): Ad 1 (credibility/availability). Budget: €5/day
- Begin accumulating the LinkedIn Insight Tag audience in the background

**Month 2:**
- Add Google Search Ad Group 3 (problem-aware keywords)
- Evaluate LinkedIn Sponsored Content CTR and cost per profile visit — adjust targeting if cost per result is above €15
- Launch LinkedIn Retargeting once the Insight Tag audience reaches 300 matched members

**Month 3:**
- Run first LinkedIn A/B test: credibility angle (Ad 1) vs. outcome angle (Ad 2)
- Consider launching the Lead Gen Form campaign if enquiry volume from the website is lower than expected
- Review full-funnel attribution: which channel is generating conversations, not just clicks

---

## APPENDIX: QUICK-REFERENCE CHECKLIST

### Before Posting Anything — One-Time Setup
- [ ] Update LinkedIn headline to recommended version
- [ ] Rewrite LinkedIn About section
- [ ] Update LinkedIn Featured section (website link, certifications)
- [ ] Ensure LinkedIn contact info includes website URL and email
- [ ] Pin Availability Post (Post 1) to featured after it goes live
- [ ] Update GitHub profile README if public GitHub activity is planned
- [ ] Add LinkedIn URL to tommie.sh website footer / contact section

### Paid Ads Setup (Before Spending Anything)
- [ ] Install Google Tag Manager on tommie.sh (one snippet in `<head>`, one in `<body>` of index.html)
- [ ] Configure GA4 via GTM and define conversion events (email click, contact form submission)
- [ ] Install LinkedIn Insight Tag via GTM
- [ ] Create LinkedIn Campaign Manager account and verify Insight Tag is firing
- [ ] Create Google Ads account and link it to GA4
- [ ] Import GA4 conversion events into Google Ads
- [ ] Verify at least one test conversion fires end-to-end before launching any paid campaigns
- [ ] Add a contact form to tommie.sh if one does not already exist (Google Ads without a form loses conversions)

### Weekly Rhythm
- [ ] 2 LinkedIn posts (Tuesday and Thursday, 07:30–09:00 CET)
- [ ] 3–5 Twitter/X posts or thread contributions
- [ ] 15 minutes daily commenting on LinkedIn (decision-maker posts)
- [ ] 10 minutes daily replying on Twitter/X
- [ ] Weekly check: which post drove the most profile visits? Write more like it.
- [ ] Weekly paid ads check: Google Ads search term report, LinkedIn Campaign Manager CTR, conversion count

### Monthly Review
- [ ] Check LinkedIn profile views vs. prior month
- [ ] Check post impressions and engagement rate
- [ ] Note which hashtags appear in top-performing posts
- [ ] Review connection request acceptance rate — adjust note approach if below 40%
- [ ] Check if any inbound DMs resulted from specific posts — trace back to source
- [ ] Review paid ads: cost per click, cost per conversion, total enquiries attributed to paid channels
- [ ] Pause any Google keyword with 50+ clicks and zero conversions
- [ ] Assess whether LinkedIn Lead Gen Form submissions are matching the target company size and job title

---

*Campaign prepared for Tommie Crawford — tommie.sh | March 2026*
