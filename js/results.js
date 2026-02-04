/* ================================================
   LinkedIn AEO Strategy Generator - Results Engine
   Advanced AI Personalization & Psychology-Based Analysis
   ================================================ */

// Generate comprehensive personalized results
function generateResults() {
    const answers = quizState.answers;
    const userName = quizState.userData.name.split(' ')[0]; // First name
    
    // Analyze psychological profile
    const psychProfile = analyzePsychologicalProfile(answers);
    
    // Generate custom AI prompts
    const customPrompts = generateCustomPrompts(answers, psychProfile);
    
    // Generate niche-specific strategy
    const nicheStrategy = generateNicheStrategy(answers, psychProfile);
    
    // Generate tool recommendations
    const toolRecommendations = generateToolRecommendations(answers);
    
    // Generate optimization plan
    const optimizationPlan = generateOptimizationPlan(answers);
    
    // Generate custom prompt for specific post
    const specificPostPrompt = generateSpecificPostPrompt(answers);
    
    // Generate psychology insights
    const psychologyInsights = generatePsychologyInsights(answers, psychProfile);
    
    // Build results HTML
    const resultsHTML = `
        <div class="result-section">
            <h2><i class="fas fa-user-circle"></i> Your Psychological Profile</h2>
            <div class="highlight-box">
                <p><strong>Motivation Type:</strong> ${psychProfile.motivationType}</p>
                <p><strong>Content Style:</strong> ${psychProfile.contentStyle}</p>
                <p><strong>Audience Psychology Match:</strong> ${psychProfile.audienceMatch}</p>
            </div>
            <h3>Competitive Positioning Strategy</h3>
            <p>${psychProfile.positioning}</p>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-magic"></i> Your 3 Custom AI Prompts</h2>
            <p>Each prompt is designed based on psychological principles proven to drive engagement in your niche.</p>
            
            ${customPrompts.map((prompt, index) => `
                <div class="prompt-card">
                    <h4>${index + 1}. ${prompt.title}</h4>
                    <div class="prompt-text">${prompt.text}</div>
                    <div class="prompt-meta">
                        <div class="prompt-meta-item">
                            <i class="fas fa-brain"></i>
                            <span><strong>Psychology:</strong> ${prompt.psychology}</span>
                        </div>
                        <div class="prompt-meta-item">
                            <i class="fas fa-file-alt"></i>
                            <span><strong>Format:</strong> ${prompt.format}</span>
                        </div>
                        <div class="prompt-meta-item">
                            <i class="fas fa-align-left"></i>
                            <span><strong>Text Placement:</strong> ${prompt.textPlacement}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="result-section">
            <h2><i class="fas fa-target"></i> Niche-Specific Strategy for ${answers.niche}</h2>
            <h3>Content Writing Rules</h3>
            <ul>
                ${nicheStrategy.writingRules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
            
            <h3>Visual Strategy</h3>
            <p>${nicheStrategy.visualStrategy}</p>
            
            <h3>LinkedIn Algorithm Optimization</h3>
            <ul>
                ${nicheStrategy.algorithmTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-tools"></i> Personalized Tool Recommendations</h2>
            <p>Based on your challenge: <strong>${formatChallengeName(answers.challenge)}</strong></p>
            <ul>
                ${toolRecommendations.map(tool => `
                    <li><strong>${tool.name}:</strong> ${tool.description}</li>
                `).join('')}
            </ul>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-chart-line"></i> Data-Driven Optimization Plan</h2>
            <h3>Priority A/B Tests (Start Here)</h3>
            <ul>
                ${optimizationPlan.abTests.map(test => `<li>${test}</li>`).join('')}
            </ul>
            
            <h3>Success Metrics to Track</h3>
            <ul>
                ${optimizationPlan.metrics.map(metric => `<li>${metric}</li>`).join('')}
            </ul>
            
            <h3>When to Pivot</h3>
            <p>${optimizationPlan.pivotStrategy}</p>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-rocket"></i> Custom Prompt for Your Specific Post</h2>
            <p><strong>Your Topic:</strong> ${answers.postTopic}</p>
            <div class="prompt-card">
                <div class="prompt-text">${specificPostPrompt.prompt}</div>
                <h4 style="margin-top: 20px;">AEO Optimization Strategy</h4>
                <p>${specificPostPrompt.aeoStrategy}</p>
            </div>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-lightbulb"></i> Why This Strategy Works</h2>
            <div class="highlight-box">
                ${psychologyInsights}
            </div>
        </div>

        <div class="result-section">
            <h2><i class="fas fa-calendar-check"></i> Your 30-Day Action Plan</h2>
            <p>Follow this roadmap to implement your strategy effectively:</p>
            <ul>
                <li><strong>Week 1:</strong> Implement Prompt #1 and track baseline engagement metrics</li>
                <li><strong>Week 2:</strong> Test Prompt #2 and compare performance with Week 1</li>
                <li><strong>Week 3:</strong> Roll out Prompt #3 and analyze which psychology hook performs best</li>
                <li><strong>Week 4:</strong> Run your first A/B test and refine based on data</li>
            </ul>
        </div>
    `;
    
    // Insert results into DOM
    document.getElementById('resultsContent').innerHTML = resultsHTML;
}

// Analyze psychological profile
function analyzePsychologicalProfile(answers) {
    const { niche, goal, challenge, engagementRate } = answers;
    
    // Determine motivation type based on goals (now an array)
    let motivationType = '';
    let contentStyle = '';
    let audienceMatch = '';
    let positioning = '';
    
    // Check if goal is array or string (for backward compatibility)
    const goals = Array.isArray(goal) ? goal : [goal];
    
    if (goals.includes('Customers') || goals.includes('Leads')) {
        motivationType = 'Income-Driven: You focus on monetization and lead generation';
        contentStyle = 'Direct, value-focused, ROI-oriented';
    } else if (goals.includes('Authority') || goals.includes('Professional')) {
        motivationType = 'Authority-Building: You aim to establish thought leadership';
        contentStyle = 'Insightful, educational, expert-positioning';
    } else {
        motivationType = 'Growth-Focused: You prioritize building reach and influence';
        contentStyle = 'Engaging, shareable, community-focused';
    }
    
    // Audience psychology match
    const audienceProfiles = {
        'IT': 'Your IT audience values technical depth, practical solutions, and staying ahead of trends. They appreciate data-driven content and real-world problem solving.',
        'Business': 'Business professionals seek strategic insights, leadership wisdom, and actionable frameworks. They respond to authority and proven results.',
        'Marketing': 'Marketers are creative, trend-aware, and results-obsessed. They engage with visual content, case studies, and tactical advice.',
        'Finance': 'Finance audiences trust numbers, conservative expertise, and risk-aware strategies. They value credibility and proven track records.',
        'HR': 'HR professionals care about people, culture, and organizational development. They respond to empathy, stories, and human-centric approaches.',
        'Healthcare': 'Healthcare audiences prioritize evidence-based information, patient outcomes, and ethical considerations. Credibility is paramount.',
        'E-commerce': 'E-commerce entrepreneurs are action-oriented, data-driven, and conversion-focused. They want tactical, implementable strategies.',
        'Coaching': 'Coaching audiences seek transformation, inspiration, and personal connection. They respond to authenticity and vulnerability.',
        'RealEstate': 'Real estate professionals value market insights, investment strategies, and relationship-building. They trust proven success stories.',
        'SaaS': 'SaaS audiences are tech-savvy, growth-minded, and product-focused. They appreciate innovation, user experience, and scalability.',
        'Consulting': 'Consultants value expertise, frameworks, and strategic thinking. They engage with thought leadership and unique perspectives.',
        'Creative': 'Creative professionals appreciate aesthetics, originality, and inspiration. They respond to visual storytelling and innovative ideas.'
    };
    
    audienceMatch = audienceProfiles[niche] || 'Your audience values authentic, valuable content that solves real problems.';
    
    // Positioning strategy
    if (engagementRate < 2) {
        positioning = 'POSITIONING OPPORTUNITY: With current low engagement, focus on pattern interrupts and curiosity gaps. Your audience needs to be "stopped mid-scroll" with unexpected angles and bold statements.';
    } else if (engagementRate < 4) {
        positioning = 'POSITIONING STRATEGY: You\'re at the industry average. To break through, develop a unique point of view and consistent content pillars that make you recognizable.';
    } else {
        positioning = 'POSITIONING STRENGTH: Your high engagement shows you\'ve found your voice. Now scale your authority by creating more content series and leveraging your engaged community.';
    }
    
    return {
        motivationType,
        contentStyle,
        audienceMatch,
        positioning
    };
}

// Generate custom AI prompts based on psychology
function generateCustomPrompts(answers, psychProfile) {
    const { niche, goal, challenge, postTopic } = answers;
    
    const prompts = [];
    
    // Prompt 1: Curiosity-Driven (for discovery)
    prompts.push({
        title: 'Curiosity-Driven Discovery Prompt',
        text: `Create a LinkedIn post about ${niche.toLowerCase()} that opens with a surprising statistic or contrarian statement that challenges conventional wisdom in the industry. Use the pattern: "Most people think [common belief], but data shows [surprising truth]." Include a personal story or case study that proves this point. End with an open-ended question that invites debate. Target length: 150-200 words.`,
        psychology: 'Uses cognitive dissonance and curiosity gap to stop scrolling. Controversial angles drive 3x more comments than agreement posts.',
        format: 'Text post with line breaks',
        textPlacement: 'Hook in first line, story in middle, question at end'
    });
    
    // Prompt 2: Authority-Based (for credibility)
    prompts.push({
        title: 'Authority-Building Credibility Prompt',
        text: `Write a LinkedIn post positioning yourself as a ${niche} expert by sharing a "lessons learned" framework. Start with: "After [X years/projects/clients] in ${niche.toLowerCase()}, here are the [3-5] principles that separate top performers from everyone else." List each principle with a 1-2 sentence explanation. Include specific metrics or results where possible. Sign off with your unique perspective on the industry.`,
        psychology: 'Frameworks and numbered lists signal expertise and create perceived value. Social proof through experience builds trust.',
        format: 'Listicle with clear structure',
        textPlacement: 'Personal credibility intro, numbered list body, signature insight conclusion'
    });
    
    // Prompt 3: Emotion-Focused (for engagement)
    prompts.push({
        title: 'Emotion-Driven Engagement Prompt',
        text: `Create a LinkedIn post that tells a vulnerable story about a failure, challenge, or transformation in your ${niche.toLowerCase()} journey. Follow this structure: 1) Set the scene with where you were, 2) Describe the problem/mistake, 3) Show the turning point, 4) Share the lesson learned, 5) End with how this changed your approach. Use "I" statements and sensory details. Keep it authentic and relatable.`,
        psychology: 'Vulnerability triggers mirror neurons and emotional connection. Personal stories drive 5x more engagement than tips.',
        format: 'Story-based narrative post',
        textPlacement: 'Emotional hook, story arc, universal lesson, call-to-relate'
    });
    
    return prompts;
}

// Generate niche-specific strategy
function generateNicheStrategy(answers, psychProfile) {
    const { niche, goal, engagementRate } = answers;
    
    const strategies = {
        'IT': {
            writingRules: [
                'Balance technical depth with accessibility - explain complex concepts with analogies',
                'Include code snippets or technical diagrams when relevant',
                'Reference current tech trends and emerging technologies',
                'Avoid jargon unless you explain it - your audience includes decision-makers',
                'Use specific version numbers, tools, and technologies to establish credibility'
            ],
            visualStrategy: 'For IT content, technical diagrams, architecture charts, and code screenshots perform well. Use dark mode aesthetics and clean, minimal designs. Text-heavy posts work if they solve specific problems.',
            algorithmTips: [
                'Post during work hours (9am-11am and 2pm-4pm) when developers take breaks',
                'Use hashtags: #SoftwareDevelopment #TechInnovation #DevCommunity',
                'Engage with tech influencers and comment on trending tech news',
                'Share GitHub repos and technical resources to boost value perception'
            ]
        },
        'Business': {
            writingRules: [
                'Lead with business impact and ROI - executives care about outcomes',
                'Use power words: strategy, growth, transformation, innovation, scale',
                'Include data points and metrics to support claims',
                'Reference industry reports and credible sources',
                'Keep tone professional but conversational - avoid being too stiff'
            ],
            visualStrategy: 'Clean, professional aesthetics work best. Use charts, graphs, and infographics. Corporate colors and minimal design. Professional headshots boost trust.',
            algorithmTips: [
                'Post early morning (7am-9am) when executives check LinkedIn',
                'Use hashtags: #BusinessStrategy #Leadership #Entrepreneurship',
                'Engage with C-suite content and Fortune 500 company pages',
                'Share thought leadership articles from Harvard Business Review, McKinsey, etc.'
            ]
        },
        'Marketing': {
            writingRules: [
                'Be creative and trend-aware - marketers appreciate clever hooks',
                'Include campaign examples and case studies with specific results',
                'Use marketing frameworks (AIDA, 4Ps, etc.) that the audience knows',
                'Break down successful campaigns from major brands',
                'Keep it actionable - "Here\'s how to replicate this" approach works'
            ],
            visualStrategy: 'Eye-catching, colorful, creative designs. Use memes, trending formats, and bold typography. Video content and carousel posts perform exceptionally well.',
            algorithmTips: [
                'Post mid-morning (10am-12pm) and early evening (5pm-7pm)',
                'Use hashtags: #DigitalMarketing #ContentMarketing #MarketingStrategy',
                'Engage with marketing agency content and CMO posts',
                'Share creative campaign examples and marketing news'
            ]
        },
        'Finance': {
            writingRules: [
                'Establish credibility immediately - cite credentials and experience',
                'Use conservative, data-backed language - avoid hype',
                'Include specific numbers, percentages, and financial metrics',
                'Reference market conditions and economic indicators',
                'Avoid get-rich-quick language - focus on sustainable strategies'
            ],
            visualStrategy: 'Professional, minimal design with charts and graphs. Blue and green color schemes signal trust. Financial data visualizations work well.',
            algorithmTips: [
                'Post early morning (6am-8am) or evening (6pm-8pm) when investors are active',
                'Use hashtags: #Finance #Investing #WealthManagement',
                'Engage with financial news outlets and market analysts',
                'Share market insights and economic analysis'
            ]
        },
        'HR': {
            writingRules: [
                'Focus on people-centric language and empathy',
                'Include stories about company culture and employee experiences',
                'Reference HR trends: remote work, DEI, employee wellness',
                'Use inclusive language and consider diverse perspectives',
                'Balance professional advice with human touch'
            ],
            visualStrategy: 'Warm, approachable aesthetics. Use people photos and diverse representation. Infographics about workplace stats work well.',
            algorithmTips: [
                'Post during work hours (9am-5pm) when HR professionals are active',
                'Use hashtags: #HumanResources #Recruiting #EmployeeEngagement',
                'Engage with workplace culture content and HR tech companies',
                'Share employee stories and workplace best practices'
            ]
        },
        'Healthcare': {
            writingRules: [
                'Prioritize evidence-based information and cite credible sources',
                'Use patient-centric language that balances expertise with empathy',
                'Address current healthcare challenges and innovations',
                'Be mindful of medical ethics and patient privacy',
                'Avoid medical jargon unless your audience is clinical professionals'
            ],
            visualStrategy: 'Clean, trustworthy design with medical imagery. Use blue and white color schemes. Include infographics about health data.',
            algorithmTips: [
                'Post early morning (7am-9am) or evening (7pm-9pm)',
                'Use hashtags: #Healthcare #HealthTech #MedicalInnovation',
                'Engage with healthcare organizations and medical journals',
                'Share patient outcomes and healthcare innovation news'
            ]
        },
        'E-commerce': {
            writingRules: [
                'Focus on conversion tactics and revenue growth strategies',
                'Include specific metrics: conversion rates, AOV, ROAS',
                'Reference successful e-commerce brands and their strategies',
                'Share tactical, implementable advice - "do this today" approach',
                'Address common pain points: logistics, marketing, customer service'
            ],
            visualStrategy: 'Product-focused imagery and conversion-oriented design. Use before/after comparisons and results screenshots.',
            algorithmTips: [
                'Post mid-day (11am-1pm) and evening (5pm-7pm)',
                'Use hashtags: #Ecommerce #OnlineBusiness #Shopify',
                'Engage with e-commerce platform pages and successful stores',
                'Share case studies and revenue screenshots'
            ]
        },
        'Coaching': {
            writingRules: [
                'Lead with transformation stories and client results',
                'Use inspiring, motivational language without being cheesy',
                'Share personal vulnerability and authentic experiences',
                'Focus on mindset, behavior change, and personal growth',
                'Include actionable exercises or reflection questions'
            ],
            visualStrategy: 'Inspirational imagery with motivational quotes. Use warm, inviting colors. Personal photos and transformation stories work well.',
            algorithmTips: [
                'Post early morning (6am-8am) for morning motivation',
                'Use hashtags: #Coaching #PersonalDevelopment #Transformation',
                'Engage with personal development content and coaches',
                'Share testimonials and client success stories'
            ]
        },
        'RealEstate': {
            writingRules: [
                'Lead with local market insights and data',
                'Include property stories and investment case studies',
                'Reference market trends, interest rates, and economic factors',
                'Balance educational content with subtle promotion',
                'Use neighborhood spotlights and community content'
            ],
            visualStrategy: 'High-quality property photos and local area imagery. Use before/after renovation content. Virtual tours work well.',
            algorithmTips: [
                'Post early evening (5pm-7pm) when people browse homes',
                'Use hashtags: #RealEstate #PropertyInvesting #RealEstateInvesting',
                'Engage with local business content and community pages',
                'Share market reports and open house announcements'
            ]
        },
        'SaaS': {
            writingRules: [
                'Focus on product value, features, and user benefits',
                'Include growth metrics, user stats, and product updates',
                'Share behind-the-scenes product development stories',
                'Address common SaaS challenges: churn, onboarding, pricing',
                'Use product-led growth language and PLG strategies'
            ],
            visualStrategy: 'Product screenshots, UI demos, and feature highlights. Use modern, tech-forward design aesthetics.',
            algorithmTips: [
                'Post mid-day (11am-1pm) when SaaS professionals take breaks',
                'Use hashtags: #SaaS #ProductManagement #StartupLife',
                'Engage with SaaS founders and product managers',
                'Share product updates and user testimonials'
            ]
        },
        'Consulting': {
            writingRules: [
                'Establish expertise with frameworks and methodologies',
                'Share client success stories (with permission)',
                'Use strategic language and business consulting terminology',
                'Focus on problem-solving and transformation',
                'Include industry-specific insights and trend analysis'
            ],
            visualStrategy: 'Professional, framework-focused design. Use diagrams, matrices, and strategic visuals.',
            algorithmTips: [
                'Post early morning (7am-9am) when consultants plan their day',
                'Use hashtags: #Consulting #BusinessConsulting #Strategy',
                'Engage with consulting firm content and industry leaders',
                'Share thought leadership and strategic insights'
            ]
        },
        'Creative': {
            writingRules: [
                'Lead with visual storytelling and creative process insights',
                'Share portfolio pieces and creative project breakdowns',
                'Use descriptive, sensory language that paints pictures',
                'Reference design trends and creative tools',
                'Include inspiration sources and creative journey stories'
            ],
            visualStrategy: 'Showcase your best creative work. Use vibrant, eye-catching designs. Before/after content and portfolio pieces work well.',
            algorithmTips: [
                'Post throughout the day - creative audiences browse frequently',
                'Use hashtags: #Design #CreativeProcess #BrandDesign',
                'Engage with design inspiration pages and creative communities',
                'Share work-in-progress and creative process content'
            ]
        }
    };
    
    return strategies[niche] || strategies['Business'];
}

// Generate personalized tool recommendations
function generateToolRecommendations(answers) {
    const { challenge, niche, goal } = answers;
    
    // Handle challenge as array or string
    const primaryChallenge = Array.isArray(challenge) ? challenge[0] : challenge;
    
    const toolsByChallenge = {
        'TopicIdeas': [
            { name: 'AnswerThePublic', description: 'Discover what questions your audience is asking about your niche' },
            { name: 'LinkedIn Search + Hashtags', description: 'Search trending hashtags in your niche to find hot topics' },
            { name: 'Google Trends', description: 'Identify rising topics and seasonal trends in your industry' },
            { name: 'BuzzSumo', description: 'Find the most shared content in your niche for inspiration' }
        ],
        'ContentFormats': [
            { name: 'Canva', description: 'Create carousel posts and visual content easily' },
            { name: 'Loom', description: 'Record quick video explainers to add authentic value' },
            { name: 'ChatGPT/Claude', description: 'Generate content frameworks and overcome writer\'s block' },
            { name: 'Notion', description: 'Build a content calendar and idea swipe file' }
        ],
        'FindingTrends': [
            { name: 'Taplio/Shield', description: 'Track viral LinkedIn posts and trending content' },
            { name: 'LinkedIn Newsletter Feature', description: 'Follow top creators in your niche for trend insights' },
            { name: 'Feedly', description: 'Aggregate industry news and be first to comment on trends' },
            { name: 'Twitter/X', description: 'Catch trends early as they often start on Twitter first' }
        ],
        'LowVisibility': [
            { name: 'Engagement Pods (carefully)', description: 'Join relevant groups for initial engagement boost' },
            { name: 'LinkedIn Analytics', description: 'Identify your best-performing content and double down' },
            { name: 'Taplio/Expandi', description: 'Schedule posts for optimal times based on audience activity' },
            { name: 'Comment Strategy', description: 'Spend 30min daily commenting on 10-20 relevant posts' }
        ],
        'PoorKnowledge': [
            { name: 'LinkedIn Learning', description: 'Free courses on LinkedIn platform features and best practices' },
            { name: 'LinkedIn Help Center', description: 'Official guides on all LinkedIn functions and tools' },
            { name: 'YouTube Tutorials', description: 'Video guides on LinkedIn features and strategies' },
            { name: 'Practice Schedule', description: 'Spend 15min daily exploring one LinkedIn feature' }
        ],
        'FindingFocusGroups': [
            { name: 'LinkedIn Sales Navigator', description: 'Use advanced search to find your ideal audience' },
            { name: 'Audience Polls', description: 'Run LinkedIn polls to understand your audience better' },
            { name: 'LinkedIn Analytics', description: 'Check who engages most with your content' },
            { name: 'Direct Outreach', description: 'Ask your top engagers what content they want to see' }
        ]
    };
    
    return toolsByChallenge[primaryChallenge] || toolsByChallenge['TopicIdeas'];
}

// Generate data-driven optimization plan
function generateOptimizationPlan(answers) {
    const { goal, engagementRate, niche, challenge } = answers;
    
    // Handle goal as array or string
    const primaryGoal = Array.isArray(goal) ? goal[0] : goal;
    
    let abTests = [];
    let metrics = [];
    let pivotStrategy = '';
    
    // A/B Tests based on engagement rate
    if (engagementRate < 2) {
        abTests = [
            'Test controversial/contrarian statements vs safe opinions - bold takes drive engagement',
            'Test posts with vs without your face - personal branding matters',
            'Test different post lengths: 100 words vs 300 words vs 500+ words',
            'Test asking questions vs making statements in your closing',
            'Test posting times: morning (7-9am) vs midday (12-2pm) vs evening (5-7pm)'
        ];
    } else if (engagementRate < 4) {
        abTests = [
            'Test different content formats: text-only vs carousel vs video',
            'Test vulnerability/personal stories vs educational frameworks',
            'Test list formats (numbered) vs narrative storytelling',
            'Test hashtag strategies: 3-5 relevant tags vs 10+ broad tags',
            'Test call-to-action types: questions vs "share if you agree" vs no CTA'
        ];
    } else {
        abTests = [
            'Test content series vs standalone posts for deeper engagement',
            'Test collaborations with other creators in your niche',
            'Test LinkedIn Articles vs regular posts for long-form content',
            'Test newsletter launches to convert engaged audience',
            'Test different monetization CTAs to move from engagement to conversion'
        ];
    }
    
    // Metrics based on goal
    const metricsByGoal = {
        'SSI': [
            'Social Selling Index score (check weekly in LinkedIn Sales Navigator)',
            'Connection request acceptance rate',
            'Profile views per week',
            'InMail response rate'
        ],
        'Authority': [
            'Follower growth rate (week over week)',
            'Share rate (shares per 100 impressions)',
            'Comment quality (thoughtful comments vs generic reactions)',
            'Mentions by other thought leaders in your niche'
        ],
        'Engagement': [
            'Engagement rate (likes + comments + shares / impressions)',
            'Comment rate specifically (aim for 2%+)',
            'Share rate (most valuable - aim for 0.5%+)',
            'Dwell time / saves (check LinkedIn analytics)'
        ],
        'Customers': [
            'Profile clicks from posts',
            'DMs received after posts',
            'Connection requests from ideal customers',
            'Conversion from LinkedIn to sales calls/demos'
        ],
        'Professional': [
            'Profile completeness score',
            'Endorsements and recommendations received',
            'Profile views from target industry',
            'Perceived authority (surveys/feedback from network)'
        ],
        'Leads': [
            'Lead magnet clicks in posts',
            'Email list growth from LinkedIn',
            'Demo/consultation requests',
            'Cost per lead (time invested / leads generated)'
        ]
    };
    
    metrics = metricsByGoal[primaryGoal] || metricsByGoal['Engagement'];
    
    // Pivot strategy
    if (engagementRate < 2) {
        pivotStrategy = 'If you don\'t see a 50% improvement in engagement after 20 posts (about 1 month), pivot to a different content pillar. Your current angle isn\'t resonating. Try more controversial takes, personal stories, or a different content format entirely.';
    } else if (engagementRate < 4) {
        pivotStrategy = 'If your engagement plateaus after 30 days, you\'ve found your baseline but need to level up. Pivot by: 1) Increasing post frequency, 2) Adding video content, or 3) Collaborating with bigger accounts in your niche.';
    } else {
        pivotStrategy = 'You\'re performing well. Pivot when: 1) Engagement drops 30% for 2+ weeks (audience fatigue), 2) Your goal changes from engagement to conversion, or 3) You want to monetize and need to adjust content strategy for sales.';
    }
    
    return {
        abTests,
        metrics,
        pivotStrategy
    };
}

// Generate specific post prompt based on user's topic
function generateSpecificPostPrompt(answers) {
    const { postTopic, niche, goal } = answers;
    
    // Handle goal as array or string
    const primaryGoal = Array.isArray(goal) ? goal[0] : goal;
    
    const prompt = `
ULTRA-DETAILED LINKEDIN POST PROMPT FOR YOUR TOPIC:

Topic: "${postTopic}"

STRUCTURE:
1. HOOK (First 1-2 lines - must stop the scroll):
   - Start with a surprising statistic, bold question, or contrarian statement related to: "${postTopic}"
   - Make it controversial or curiosity-inducing
   - Example formats: "Most people get [topic] completely wrong. Here's why..." OR "[Surprising stat] about ${postTopic} that nobody talks about"

2. CONTEXT (Lines 3-5):
   - Explain why this topic matters NOW in ${niche}
   - Reference a current trend, problem, or opportunity
   - Make it personal: "I've noticed..." or "After working with [X clients]..."

3. MAIN CONTENT (Middle section):
   - For ${primaryGoal} goal: ${getGoalSpecificContent(primaryGoal, postTopic)}
   - Use specific examples, data points, or case studies
   - Break into digestible chunks with line breaks every 2-3 lines
   - Include 3-5 key points or steps

4. PROOF/CREDIBILITY:
   - Add a mini case study: "When I/my client did this, [specific result]"
   - Use numbers: percentages, dollar amounts, time saved
   - Reference your experience in ${niche}

5. CALL-TO-ACTION:
   - Ask a specific question related to "${postTopic}"
   - Invite discussion: "What's your experience with [specific aspect]?"
   - OR make a bold statement and ask if they agree/disagree

FORMATTING:
- Keep paragraphs short (2-3 lines max)
- Use line breaks liberally for readability
- Add emojis strategically (2-3 max) for visual breaks
- Total length: 150-250 words for optimal engagement

TONE:
- Conversational but authoritative
- Personal but professional
- Confident but not arrogant
    `.trim();
    
    const aeoStrategy = generateAEOStrategy(answers);
    
    return {
        prompt,
        aeoStrategy
    };
}

// Get goal-specific content guidance
function getGoalSpecificContent(goal, topic) {
    const contentGuidance = {
        'SSI': `Focus on providing value that positions you as a helpful resource. Share tactical advice about ${topic} that demonstrates your expertise without being salesy.`,
        'Authority': `Position yourself as a thought leader by sharing unique insights or predictions about ${topic}. Reference industry trends and offer your expert perspective.`,
        'Engagement': `Make it conversational and relatable. Use storytelling about ${topic} that others will want to comment on and share with their network.`,
        'Customers': `Include a subtle value proposition. Show how understanding ${topic} solves a specific problem your ideal customers face.`,
        'Professional': `Demonstrate expertise and professionalism. Use industry terminology correctly and reference credible sources about ${topic}.`,
        'Leads': `End with a soft call-to-action. Example: "Want to dive deeper into ${topic}? I'm offering [free resource/consultation]." Make it valuable, not salesy.`
    };
    
    return contentGuidance[goal] || contentGuidance['Engagement'];
}

// Generate AEO strategy
function generateAEOStrategy(answers) {
    const { niche, goal, challenge, engagementRate } = answers;
    
    let strategy = `<p><strong>AEO (AI Engine Optimization) Strategy for Your Post:</strong></p>`;
    
    strategy += `<ul>`;
    strategy += `<li><strong>Keyword Placement:</strong> Use your main topic keywords in the first 3 lines and repeat naturally throughout. LinkedIn's algorithm prioritizes early keyword placement.</li>`;
    strategy += `<li><strong>Engagement Signals:</strong> Ask questions to drive comments. Comments signal value to LinkedIn's algorithm and boost distribution by 30-50%.</li>`;
    strategy += `<li><strong>Dwell Time:</strong> Write 150-250 words to increase dwell time (how long people spend reading). Longer read time = better algorithmic boost.</li>`;
    strategy += `<li><strong>Early Engagement:</strong> Get 5-10 comments in the first hour by engaging with recent commenters on your profile and asking a few trusted connections to comment.</li>`;
    
    if (engagementRate < 2) {
        strategy += `<li><strong>Pattern Interrupt:</strong> Since your current engagement is low, use bold formatting, emojis, and controversial angles to stop scrollers.</li>`;
    }
    
    if (niche === 'IT' || niche === 'SaaS' || niche === 'Marketing') {
        strategy += `<li><strong>Hashtag Strategy:</strong> Use 3-5 niche-specific hashtags. Research which hashtags your target audience follows in ${niche}.</li>`;
    }
    
    strategy += `<li><strong>Posting Time:</strong> ${getOptimalPostingTime(niche)}</li>`;
    strategy += `<li><strong>Profile Optimization:</strong> Ensure your profile headline and about section include keywords related to your post topic so visitors convert to followers.</li>`;
    strategy += `</ul>`;
    
    return strategy;
}

// Get optimal posting time by niche
function getOptimalPostingTime(niche) {
    const postingTimes = {
        'IT': 'Post at 9-11am or 2-4pm (developer break times)',
        'Business': 'Post at 7-9am (executive morning routine)',
        'Marketing': 'Post at 10am-12pm or 5-7pm (creative energy peaks)',
        'Finance': 'Post at 6-8am or 6-8pm (before/after market hours)',
        'HR': 'Post at 9am-12pm (standard work hours)',
        'Healthcare': 'Post at 7-9am or 7-9pm (before/after shifts)',
        'E-commerce': 'Post at 11am-1pm or 5-7pm (lunch and evening)',
        'Coaching': 'Post at 6-8am (morning motivation)',
        'RealEstate': 'Post at 5-7pm (evening browsing time)',
        'SaaS': 'Post at 11am-1pm (midday productivity break)',
        'Consulting': 'Post at 7-9am (morning planning time)',
        'Creative': 'Post throughout the day (creatives browse frequently)'
    };
    
    return postingTimes[niche] || 'Post at 8-10am or 12-2pm for maximum visibility';
}

// Generate psychology insights
function generatePsychologyInsights(answers, psychProfile) {
    const { niche, goal, challenge, engagementRate } = answers;
    
    let insights = `<p><strong>Why This Strategy Works for Your Audience:</strong></p>`;
    
    insights += `<p>Your ${niche} audience has specific psychological triggers that we've optimized for:</p>`;
    
    insights += `<ul>`;
    
    // Niche-specific psychology
    const nicheInsights = {
        'IT': 'IT professionals value problem-solving and technical expertise. They engage when they see practical solutions and cutting-edge trends. Credibility comes from depth of knowledge and real-world application.',
        'Business': 'Business leaders respond to strategic thinking and proven results. They\'re motivated by growth, efficiency, and competitive advantage. Authority figures who demonstrate ROI win their attention.',
        'Marketing': 'Marketers are attracted to creativity, data, and actionable tactics. They engage with content that\'s visually appealing and provides implementable strategies. They share content that makes them look smart.',
        'Finance': 'Finance audiences trust data, credentials, and conservative expertise. They\'re motivated by security, growth, and risk mitigation. They engage with evidence-based content from credible sources.',
        'HR': 'HR professionals value empathy, people-first approaches, and organizational development. They engage with content that helps them build better cultures and solve people challenges.',
        'Healthcare': 'Healthcare audiences prioritize evidence-based information and patient outcomes. They respond to credible, ethical content that advances patient care and medical knowledge.',
        'E-commerce': 'E-commerce entrepreneurs are driven by revenue growth and conversion optimization. They engage with tactical advice that directly impacts their bottom line.',
        'Coaching': 'Coaching audiences seek transformation and personal connection. They respond to vulnerability, inspiration, and authentic stories of change.',
        'RealEstate': 'Real estate professionals value market insights and relationship-building. They engage with local expertise and investment opportunities.',
        'SaaS': 'SaaS audiences are growth-minded and product-focused. They engage with innovation, user experience insights, and scalability strategies.',
        'Consulting': 'Consultants value strategic frameworks and thought leadership. They engage with unique perspectives and expert methodologies.',
        'Creative': 'Creative professionals appreciate aesthetics, originality, and inspiration. They engage with visually compelling content and creative process insights.'
    };
    
    insights += `<li><strong>Niche Psychology:</strong> ${nicheInsights[niche] || nicheInsights['Business']}</li>`;
    
    // Goal-specific psychology
    insights += `<li><strong>Goal Alignment:</strong> For ${goal} goals, we've focused on ${getGoalPsychology(goal)}</li>`;
    
    // Challenge-specific psychology
    insights += `<li><strong>Challenge Solution:</strong> Since you struggle with ${formatChallengeName(challenge)}, we've designed prompts that ${getChallengeSolution(challenge)}</li>`;
    
    // Engagement-based psychology
    if (engagementRate < 2) {
        insights += `<li><strong>Engagement Psychology:</strong> With low current engagement, we're using pattern interrupts, controversial angles, and curiosity gaps to stop the scroll and force interaction.</li>`;
    } else if (engagementRate < 4) {
        insights += `<li><strong>Engagement Psychology:</strong> At average engagement levels, we're focusing on differentiation and unique POV to help you stand out in a crowded feed.</li>`;
    } else {
        insights += `<li><strong>Engagement Psychology:</strong> With high engagement, we're leveraging your authority to create content series and deepen community connections.</li>`;
    }
    
    insights += `</ul>`;
    
    insights += `<p><strong>The Science:</strong> LinkedIn's algorithm prioritizes dwell time and early engagement. Our prompts are designed to hook readers in the first line (stops scrolling), provide value in the middle (increases dwell time), and ask questions at the end (drives comments). Comments trigger algorithmic boost within 30-60 minutes.</p>`;
    
    return insights;
}

// Get goal psychology explanation
function getGoalPsychology(goal) {
    const psychology = {
        'SSI': 'building your reputation as a helpful resource and expert connector. SSI rewards consistent value-giving and relationship-building behavior.',
        'Authority': 'establishing thought leadership through unique insights and expert positioning. Authority is built on consistency, credibility, and distinctive point of view.',
        'Engagement': 'creating conversation starters and shareable content. High engagement comes from emotional resonance, relatability, and open-ended questions.',
        'Customers': 'demonstrating value and solving specific problems. Customer acquisition requires positioning yourself as the solution provider without being overtly salesy.',
        'Professional': 'showcasing expertise and building credible personal brand. Professional image is built through consistent quality, industry knowledge, and polished presentation.',
        'Leads': 'providing value upfront with subtle CTAs. Lead generation works when you give freely first, then offer a clear next step for those who want more.'
    };
    
    return psychology[goal] || psychology['Engagement'];
}

// Get challenge solution explanation
function getChallengeSolution(challenge) {
    // Handle challenge as array or string
    const primaryChallenge = Array.isArray(challenge) ? challenge[0] : challenge;
    
    const solutions = {
        'TopicIdeas': 'provide specific topic frameworks and question prompts to eliminate the "what to post" paralysis. You now have endless topic angles.',
        'ContentFormats': 'give you format templates and structure so you never face a blank page. The prompts provide the skeleton - you just add your expertise.',
        'FindingTrends': 'focus on timeless psychology principles rather than chasing trends. This strategy works regardless of algorithm changes.',
        'LowVisibility': 'optimize for early engagement and shareability. Wide reach comes from creating content worth sharing and commenting on.',
        'PoorKnowledge': 'provide step-by-step guidance on LinkedIn features. You\'ll master the platform with practical learning resources.',
        'FindingFocusGroups': 'include audience psychology insights so you know exactly what resonates with your target niche. Understanding your audience makes targeting easier.'
    };
    
    return solutions[primaryChallenge] || solutions['ContentFormats'];
}

// Utility function to format challenge names
function formatChallengeName(challenge) {
    // Handle challenge as array or string
    const primaryChallenge = Array.isArray(challenge) ? challenge[0] : challenge;
    
    const names = {
        'TopicIdeas': 'Topic Ideas',
        'ContentFormats': 'Content Formats',
        'FindingTrends': 'Finding Trends',
        'LowVisibility': 'Low Visibility',
        'PoorKnowledge': 'Poor Knowledge of LinkedIn Functions',
        'FindingFocusGroups': 'Finding Focus Groups'
    };
    
    return names[primaryChallenge] || primaryChallenge;
}
