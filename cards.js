const CARD_CATEGORIES = [
  { id: 'sgx', label: 'SGX & role' },
  { id: 'stories', label: 'Your stories' },
  { id: 'tools', label: 'Linux & tools' },
  { id: 'cloud', label: 'Cloud, IaC & IAM' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
  { id: 'questions', label: 'Ask the team' }
];

const FLASHCARDS = [
  { id: 'sgx-01', category: 'sgx', essential: true, question: 'What does SGX Group do?', answer: [
    'Market infrastructure for equities, fixed income, currencies and commodities.',
    'Services: listing, trading, clearing, settlement, depository and market data.',
    'Cloud relevance: dependable technology underpins those services.'
  ] },
  { id: 'sgx-02', category: 'sgx', essential: true, question: 'Why does resilience matter at an exchange?', answer: [
    'Market participants need systems that are available, correct and secure.',
    'Disruptions can affect trading and confidence.',
    'Test and monitor changes; plan recovery and assign clear ownership.'
  ] },
  { id: 'sgx-03', category: 'sgx', essential: false, question: 'What does SGX’s Cloud Engineering team do?', answer: [
    'Design, deploy and maintain resilient, scalable, secure cloud infrastructure.',
    'Use IaC, governance and security standards.',
    'Support day-to-day platform operations.'
  ] },
  { id: 'sgx-04', category: 'sgx', essential: false, question: 'What work might this intern do?', answer: [
    'Develop and document reusable IaC modules.',
    'Help with policy guardrails, mandatory tags, provisioning and audits.',
    'Investigate configuration issues, write runbooks and explore suitable AI automation.'
  ] },
  { id: 'sgx-05', category: 'sgx', essential: false, question: 'Which skills does the posting call essential?', answer: [
    'Problem solving, learning and clear communication.',
    'Python or Bash, Git and basic Linux command-line navigation.',
    'Cloud hands-on work, CI/CD and Docker are advantages.'
  ] },
  { id: 'sgx-06', category: 'sgx', essential: false, question: 'Why this SGX Cloud Engineering role?', answer: [
    'I want to learn how engineers keep important market infrastructure reliable and secure.',
    'I can bring backend, Docker and automation experience.',
    'I hope to grow in cloud operations, IaC and governance.'
  ] },

  { id: 'story-01', category: 'stories', essential: true, question: 'Give a 45-second introduction.', answer: [
    'I’m an NUS Computer Science undergraduate focused on backend and automation work.',
    'At MyCLNQ I built chatbot backend components using Docker; at Jam & Raph I built safer document automation.',
    'Those projects sparked my interest in reliable deployment and operations, leading me to SGX Cloud Engineering.'
  ] },
  { id: 'story-02', category: 'stories', essential: true, question: 'Tell the MyCLNQ story in STAR form.', answer: [
    'S/T: A healthcare chatbot MVP needed secure, stateful multi-user conversations.',
    'A: Built FastAPI, MongoDB and Docker backend components, with JWT auth, Redis session memory and streaming.',
    'R: The MVP supported those conversations; I learned to consider services, access and state together.'
  ] },
  { id: 'story-03', category: 'stories', essential: true, question: 'Tell the Jam & Raph automation story.', answer: [
    'S/T: Automate legal-document edits without changing originals.',
    'A: Built an editing pipeline with ten document tools and copy-on-write safeguards.',
    'R: Automated edits preserved original files; I would apply the same safety mindset to infrastructure.'
  ] },
  { id: 'story-04', category: 'stories', essential: false, question: 'Tell the Agile Counsel automation story.', answer: [
    'S/T: Turn structured wizard input into incorporation documents.',
    'A: Built a React/FastAPI flow with frontend and backend validation and semantic template placeholders.',
    'R: Produced ready-to-sign DOCX packages and easier-to-maintain templates.'
  ] },
  { id: 'story-05', category: 'stories', essential: false, question: 'How do you describe your cloud experience honestly?', answer: [
    'Hands-on: Docker and local application deployment.',
    'I have not provisioned resources on AWS, Azure or Google Cloud.',
    'I know the core concepts and want to apply them with team guidance.'
  ] },
  { id: 'story-06', category: 'stories', essential: false, question: 'Can coursework support a Linux answer?', answer: [
    'If true for you, cite CS2030/CS2100 terminal tasks: file navigation, editing, compiling, running or debugging.',
    'Call it Unix-style command-line work unless you know the machine ran Linux.',
    'Do not claim Linux server administration.'
  ] },
  { id: 'story-07', category: 'stories', essential: false, question: 'How do you handle an unfamiliar tool?', answer: [
    'Clarify the goal and safety constraints; read team documentation.',
    'Try a small reproducible example and ask for review before important changes.',
    'Record the working steps in a short runbook.'
  ] },
  { id: 'story-08', category: 'stories', essential: false, question: 'How should you answer a teamwork question?', answer: [
    'Choose a collaboration from MyCLNQ, Jam & Raph or Agile Counsel that you actually remember.',
    'Explain the shared goal, your contribution and communication, then the observable result.',
    'Keep conflicts and outcomes truthful.'
  ] },

  { id: 'tools-01', category: 'tools', essential: true, question: 'Which commands navigate and inspect files?', answer: [
    'pwd: current directory; cd: change directory.',
    'ls -la: files, hidden entries and permissions.',
    'Confirm your location before changing files.'
  ] },
  { id: 'tools-02', category: 'tools', essential: true, question: 'How do you inspect logs and find text?', answer: [
    'less or cat: read a file; tail -n 100: recent lines; grep: matching text.',
    'docker logs: container output.',
    'Avoid printing or sharing secrets in logs.'
  ] },
  { id: 'tools-03', category: 'tools', essential: false, question: 'How do you check whether a process is running?', answer: [
    'ps lists processes; top shows live resource use.',
    'On systemd hosts: systemctl status checks a service; journalctl -u reads its journal.',
    'Check the host environment first; not every system uses systemd.'
  ] },
  { id: 'tools-04', category: 'tools', essential: false, question: 'What do r, w and x mean in Unix permissions?', answer: [
    'r = read, w = write, x = execute; each applies to owner, group and others.',
    'For access failures, check the process identity plus file and directory permissions.',
    'Fix the specific access need rather than opening permissions to everyone.'
  ] },
  { id: 'tools-05', category: 'tools', essential: false, question: 'How would you test an endpoint from a shell?', answer: [
    'Use curl on the URL; inspect status and response. curl -I requests headers.',
    'If it fails, check DNS, port, network path and application logs.',
    'A local success does not prove access from every network.'
  ] },
  { id: 'tools-06', category: 'tools', essential: false, question: 'What are environment variables used for?', answer: [
    'Supply configuration such as endpoint or runtime mode without hard-coding it.',
    'Store secrets with appropriate access controls.',
    'Never print secrets to logs or commit them to Git.'
  ] },
  { id: 'tools-07', category: 'tools', essential: false, question: 'What is a safe Git change workflow?', answer: [
    'Use a focused branch and make a small change.',
    'Review the diff, run checks, commit and request review before merging.',
    'Keep changes traceable.'
  ] },
  { id: 'tools-08', category: 'tools', essential: false, question: 'Why might git revert be safer than reset on shared history?', answer: [
    'git revert adds a new commit that undoes a change and preserves history.',
    'git reset moves the branch pointer; rewriting shared history can disrupt others.'
  ] },
  { id: 'tools-09', category: 'tools', essential: false, question: 'Docker image versus container?', answer: [
    'Image: packaged application and dependencies.',
    'Container: running instance of an image.',
    'Docker improves consistency; cloud provisioning, monitoring and high availability need more.'
  ] },
  { id: 'tools-10', category: 'tools', essential: false, question: 'A container will not start. What do you inspect?', answer: [
    'Check docker ps -a, then docker logs for the failed container.',
    'Inspect command, environment, port mapping and dependencies.',
    'Change one cause at a time; verify startup and response.'
  ] },

  { id: 'cloud-01', category: 'cloud', essential: true, question: 'What are compute, storage and networking?', answer: [
    'Compute runs code; storage holds data.',
    'Networking connects components and controls traffic paths.',
    'Cloud apps also need identity and monitoring.'
  ] },
  { id: 'cloud-02', category: 'cloud', essential: false, question: 'How is a VM different from a container?', answer: [
    'A VM has its own guest operating system.',
    'A container packages an app and dependencies while sharing the host kernel.',
    'Both need secure configuration and monitoring.'
  ] },
  { id: 'cloud-03', category: 'cloud', essential: false, question: 'What makes a service highly available?', answer: [
    'Reduce single points of failure with suitable redundancy across instances or zones.',
    'Use health checks, failover, monitoring and tested recovery.',
    'Choose the design for the service requirements and budget.'
  ] },
  { id: 'cloud-04', category: 'cloud', essential: true, question: 'What is IAM?', answer: [
    'Identity and Access Management controls who or what can access a resource.',
    'It defines allowed actions for people, applications and automated jobs.'
  ] },
  { id: 'cloud-05', category: 'cloud', essential: false, question: 'Authentication versus authorisation?', answer: [
    'Authentication: verify identity — “Who are you?”',
    'Authorisation: check permission for an action on a resource.',
    'A valid login does not grant every action.'
  ] },
  { id: 'cloud-06', category: 'cloud', essential: false, question: 'What does an IAM policy describe?', answer: [
    'Which principal can perform which action on which resource, often with conditions.',
    'Example: one app may read objects from one bucket instead of getting administrator access.'
  ] },
  { id: 'cloud-07', category: 'cloud', essential: true, question: 'What is least privilege?', answer: [
    'Grant only the permissions needed for the task, time and resource scope.',
    'Start narrow, verify required actions and review access as responsibilities change.'
  ] },
  { id: 'cloud-08', category: 'cloud', essential: false, question: 'Why use a workload role or service identity?', answer: [
    'Give an app permissions for its job without embedding a personal credential in code.',
    'Prefer short-lived credentials and keep secrets out of source control.'
  ] },
  { id: 'cloud-09', category: 'cloud', essential: true, question: 'What is Infrastructure as Code?', answer: [
    'Describe compute, network, storage and access in versioned files.',
    'Review, test and provision infrastructure consistently.',
    'Reduce manual changes and configuration drift.'
  ] },
  { id: 'cloud-10', category: 'cloud', essential: false, question: 'Declarative versus imperative infrastructure?', answer: [
    'Declarative: state the desired result; the tool determines changes.',
    'Imperative: specify the steps to perform.',
    'Terraform is a declarative IaC tool.'
  ] },
  { id: 'cloud-11', category: 'cloud', essential: true, question: 'What is the basic Terraform workflow?', answer: [
    'Write configuration, run plan, review proposed changes, then apply approved changes.',
    'Plans can update or delete resources, so inspect them carefully.',
    'I know this workflow conceptually; I have not used it on a cloud provider.'
  ] },
  { id: 'cloud-12', category: 'cloud', essential: false, question: 'What are Terraform state and drift?', answer: [
    'State tracks the infrastructure Terraform manages.',
    'Drift: real resources differ from declared configuration, often after manual changes.',
    'Review the plan before reconciling differences.'
  ] },
  { id: 'cloud-13', category: 'cloud', essential: false, question: 'Why create reusable IaC modules?', answer: [
    'Package resources and inputs into a reviewed, repeatable pattern.',
    'Use sensible defaults, reduce duplication and ease auditing.'
  ] },
  { id: 'cloud-14', category: 'cloud', essential: false, question: 'What are policy as code and mandatory tags?', answer: [
    'Policy as code automatically checks changes, such as blocking public storage.',
    'Required tags identify owner, environment and cost or operational context.'
  ] },

  { id: 'trouble-01', category: 'troubleshooting', essential: true, question: 'An app cannot reach its storage service. What is your approach?', answer: [
    'Confirm impact and exact error; inspect recent changes and logs.',
    'Check endpoint/DNS, network rules, credentials and IAM permissions.',
    'Test one hypothesis at a time; involve the owner before changing production access.'
  ] },
  { id: 'trouble-02', category: 'troubleshooting', essential: true, question: 'A deployment fails. What do you check first?', answer: [
    'Locate the failing stage and read its error; compare with the last working version.',
    'Check build/tests, configuration, credentials and resource limits.',
    'Fix or roll back through the team process; verify health afterward.'
  ] },
  { id: 'trouble-03', category: 'troubleshooting', essential: false, question: 'You see “permission denied.” What next?', answer: [
    'Identify the caller, attempted action and resource.',
    'Check policy, explicit denies and conditions.',
    'Request the smallest justified change; avoid administrator access as a shortcut.'
  ] },
  { id: 'trouble-04', category: 'troubleshooting', essential: false, question: 'A service is unreachable. What layers might fail?', answer: [
    'Check process health and listening port.',
    'Check DNS, route/firewall, proxy and load balancer.',
    'A 503 may mean the upstream failed even if the front door responds.'
  ] },
  { id: 'trouble-05', category: 'troubleshooting', essential: false, question: 'A service becomes slow. How do you investigate?', answer: [
    'Establish when it began and who is affected.',
    'Compare latency, errors, resource use and dependency health with baseline.',
    'Correlate with deployments; test the likeliest bottleneck.'
  ] },
  { id: 'trouble-06', category: 'troubleshooting', essential: true, question: 'How do you make an infrastructure change safely?', answer: [
    'Put the change in version control; review IaC plan and policy checks.',
    'Test in a lower-risk environment and obtain team approval.',
    'Know the rollback path; monitor after rollout.'
  ] },
  { id: 'trouble-07', category: 'troubleshooting', essential: false, question: 'Logs, metrics and traces: how do they differ?', answer: [
    'Logs: events and errors.',
    'Metrics: measurements over time, such as latency or CPU.',
    'Traces: a request’s path across components.'
  ] },
  { id: 'trouble-08', category: 'troubleshooting', essential: false, question: 'What belongs in a useful runbook?', answer: [
    'Service purpose/owner, symptoms and safe diagnostic checks.',
    'Escalation path, recovery steps and success verification.',
    'For AI-assisted operations: narrow permissions and human review of consequential changes.'
  ] },

  { id: 'ask-01', category: 'questions', essential: true, question: 'What could you ask about the internship’s first contribution?', answer: [
    'Ask: “Which first contribution would be most useful from this intern?”',
    'Examples: reusable IaC modules, policy guardrails or day-to-day troubleshooting.'
  ] },
  { id: 'ask-02', category: 'questions', essential: false, question: 'What could you ask about the team’s operating practices?', answer: [
    'Ask: “How does the team review and roll out cloud changes safely?”',
    'Listen for how resilience and auditability shape that process.'
  ] }
];
