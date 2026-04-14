import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, MessageSquare } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AuthorNote {
  id: string;
  date: string;
  content: { zh: string; en: string };
}

const posts = {
  'ai-creation-shame': {
    title: {
      zh: '如何抵抗AI时代的创作羞耻？',
      en: 'How to Resist Creative Shame in the AI Era?',
    },
    date: '2025.02.22',
    readTime: { zh: '12 分钟阅读', en: '12 min read' },
    authorNotes: [] as AuthorNote[],
    content: {
      zh: `以下内容中前3部分创建于2024年11月4日，最后一部分创建于2025年2月22日，由claude-3.5-sonnet辅助表达优化，可能存在较多问题，敬请谅解。

今天看到Ryan（小红书号：9475481700）的文章《停止生产垃圾内容》说，不要用AI生产垃圾（发布在公共平台），不要问人工智能要让人工智能问自己，不要卖偷来的东西，不要模仿，等等表示我们不应该用AI粉饰自身创造力以及以此牟利的观点，也让我产生了一些思考（不是针对Ryan）。

**用AI辅助生成内容真的低人一等吗？**

## 01 AI辅助内容的发布价值

从社会层面看，互联网上已经充斥着海量信息，但为什么仍然有许多人感到困惑？

信息的存在并不等同于信息的可及性和可理解性。每个人的认知框架、学习方式和理解能力都是独特的，相同的信息需要通过不同的表达方式和解读角度才能触达不同的受众。

因此，信息的重组与整合本身就具有重要价值。即使是AI针对同一个问题因提问方式不同而给出的差异化回答，也能帮助不同思维模式的人更好地理解问题本质。

**这种信息的"二次创作"实际上是在为知识传播搭建更多的桥梁。**

从个人层面来看，创作的意义不仅仅在于输出，更在于通过创作过程来促进自我成长。

当我通过写作来梳理思考过程时，实际上是在进行知识的内化和重构。这个过程帮助我建立起自己的知识体系，形成独特的思考方式。

而当我将这些思考和困惑真实地分享出来时，我的经历和感悟可能恰好能够帮助那些正在经历相似困惑的人。

**这种基于真实体验的分享，即使借助了AI工具来优化表达，其核心价值依然来源于个人的真实思考和经历。**

更深层次来说，知识的传播是一个不断迭代和演化的过程。

每个人在接收信息时都会基于自身经验进行再解读，而在分享时又会赋予信息新的视角和理解。这种循环不仅能够帮助个人建立更完善的知识体系，也能为整个社会的知识传播贡献新的可能性。

AI在这个过程中扮演的是辅助工具的角色，它帮助我们更高效地整理思路、优化表达，但内容的核心价值始终来源于创作者的真实思考和独特视角。

故而，判断内容值不值得发布，重点不在是否用AI工具，而在其是否源于真思考经历、能为特定群体助益、含有独特视角理解、有利于知识传播理解。满足则有价值，值得被生产和分享。

## 02 重新定义"原创性"

在创作领域，我们需要重新思考"原创"的定义。

传统观念中，人们往往将"原创"等同于"完全独创"，认为内容必须是前所未有的才算原创。

然而，在人类漫长的文明史中，真正意义上的"完全独创"极其罕见，几乎所有的创作都是在前人积累的基础上发展而来。

前段时间我在QQ空间看到一段话：

> "每一个擦边的人其实都意识不到到底是'擦了谁的什么'这种想法，毕竟不只是他，这个世界上所有创作者都会存在'最近看了个什么很喜欢所以突然有灵感就画了'的情况，但有些人就是能意识到'我是看了xx的很喜欢才画了这个类似的，我确实是因为xx的点子才突然想做这个的'，对人家心存感激，有些人就是意识不到，觉得'我看到了，很喜欢，但是我画的这个也只是类似，就是我想并且自己画的啊，怎么会是在擦你呢'。"

创作灵感的来源往往是复杂而难以界定的，很难有一个明确的标准去"鉴"原创。

每个创作者都会有"看到了什么很喜欢所以突然有灵感就创作了"的经历，关键在于我们如何认知这种影响。有的创作者能够清晰地意识到并感激灵感来源，有的则可能忽视了这种连接。这种差异反映了创作者对原创性的不同理解。

**在AI时代，原创性更应该着重于思考过程的独特性和个人化的经历感悟。** 当我们使用AI工具时，我们的提问方式、思考角度、理解过程都是独特的。

有些内容源于个人的碎片灵感，借助AI来整合梳理逻辑，比如我把flomo中记录的memo用这种方式写成文章；有些则是从问题出发，通过AI获取答案后进行再理解和诠释，比如我公众号发布的一些内容。

这个过程中，虽然很难有一个明确的标准去界定原创，但思考的真实性和过程的独特性才是最重要的。

因此，当代的原创性更应该关注：内容是否源于真实的思考，是否融入了个人的经历和感悟，是否对已有信息进行了独特的诠释，是否提供了解决问题的新思路。当我们能够清晰地记录这个过程，诚实地分辨哪些属于自己的思考，哪些还需要提升和完善，这种创作态度本身就体现了原创的价值。

**这些思考和成长的过程是独属于每个创作者的，正是这种独特性使得内容值得被标记为原创。重要的不是完全摆脱他人的影响，而是在吸收和借鉴中发展出自己的见解，在创作中保持真实和诚意。**

## 03 内容变现的"合理性"

首先是内容的价值维度。

内容的价值不在于生产工具，而在于它能否真正满足受众的需求，能否帮助他们获得启发或解决困惑，这点第一部分已有详述。

其次是劳动付出的维度。

在使用AI进行创作时，创作者投入了大量的思考和精力：提炼问题、设计提问角度、整合信息、验证内容的准确性、优化表达方式等。

这个过程中的智力劳动和时间投入都是实实在在的。

**就像使用Word处理器写作的作者一样，工具的先进性不应该否定创作者的劳动价值。**

再次是创新和改进的维度。

通过不断创作和与受众互动，积累经验、提升能力、优化内容质量，这个过程需要持续的投入和学习。

合理的收入不仅是对已投入劳动的回报，也是支持自身继续提供更好内容的必要条件。

最后是诚信透明的维度。

只要我们对创作过程保持透明，让受众了解内容的生产方式，并持续确保内容质量，那么基于双方自愿的价值交换就是合理的。关键是要确保定价与价值相匹配，不过分夸大内容价值，保持诚实和职业操守。

因此，如果内容确实创造了价值，付出了真实的劳动，保持了创作的诚信，那么获得相应的回报是合理的。**重点不是使用了什么工具，而是我们是否真正为受众创造了价值。**

## 04 个人能力发展与AI辅助的平衡

以下是我针对AI时代AIGC创作羞耻感问题的最后一个部分，如何看待个人能力发展与AIGC辅助的关系。

在我看来，这需要从两个核心维度进行思考：首先是对于能力的界定，其次是对于AI辅助的边界。

在能力界定方面，我们需要区分创作能力（如思维、写作等）和运营能力（如信息传播、账号运作等）。而在AI辅助的边界方面，我们应该将AI定位为"能力倍增器"而非替代品，合理把握其替代程度。

具体来看，这种关系会因个人发展目标的不同而呈现两种典型场景。

**第一种是追求独创能力发展的场景。**

就像一个人看到优秀的文章会向往自己也有这样的思维能力和写作水平，这种追求源于内在热情。

在这种情况下，AI应该作为过渡和辅助工具，比如帮助拆解优秀案例的结构和逻辑，而不是直接替代内容创作。

**第二种是追求信息传播与分享的场景。**

如果一个人的重点在于有效传递信息，那么需要培养的主要是账号运营能力，AI可以承担更多的内容生产任务。

创作者的重点在于明确传播目的，只要相信自己提供的是高价值内容，就可以问心无愧。

针对第一种情况，保持创作的连续性、自我觉察和平台反馈都至关重要。

很少有人能完全靠一腔热情不需要外界反馈就能坚持，并且对所有想法都有精力打磨。因此，可以利用AI来补充碎片化的灵感，快速形成完整的内容框架，保持持续输出的习惯，甚至让输出倒逼输入。（比如我这篇主要是碎片想法让claude梳理逻辑和优化表达的，虽然可能跟自己写还是差了点"人味"）

但在这个过程中要主动记录自己的思考过程，清晰分辨"哪些属于我，哪些我还能力不足"，不被繁荣假象所欺骗，辩证地看待产出和平台反馈。

**明确自己的优势和不足，有针对性地提升能力，优化创作策略，从而形成正向的学习循环：提出问题、寻求答案、整理思路、表达观点。**

---

让deepseek对我的内容总结一下：

> "要抵抗AI时代的创作羞耻，关键在于建立对创作本质的认知：内容的核心价值不在于生产工具，而在于是否植根于真实思考、是否传递独特视角、能否为他人提供切实启发。人类独有的经历感知与问题意识是AI始终无法替代的创造力根基。当我们用AI辅助梳理思路、优化表达时，本质上是在借助工具放大自身的思维深度与传播效率——正如古人在甲骨上刻字与今人用键盘写作并无高下之分。创作羞耻源于将工具置于内容之上的误判，正视自己提问的精准度、洞察的独特性、与用户需求的匹配度，才能真正实现AI时代人机协作的价值共生。"

---

今天是2025年2月22日，我再次回顾了一下Ryan的内容，我在文章最前面的概括有些偏差，但我只是将其作为引子来讨论我自身困惑和纠结的问题，并非对其的回应，所以应该关系不大。

我非常认可Ryan原文中的意思，要对自身有标准，即使在新手期允许自己"生产垃圾"，也该不忘初心地挑战做不忘初心的、有更长久价值的内容。并且在过程中尝试让AI引导出清晰地自我表达、区别开AIGC和自己的内容进行标注、即使AI当了"口替"也该用自己的话，让AI作为审核者而非创作者。

我确信市场会为更用心的作品买单，但它的反馈周期会很长。我也知道一个人的精力是有限的，当更多的精力被分配给快速迭代的"速成品"，需要打磨和沉淀的作品就需要更长的周期产出。但我也知道study in public，不得到外界的反馈，或许永远找不准自己的定位和方向、丧失打磨内容的动力。

**这其实是一个两难的问题，需要在成长过程中不断权衡，并且阶段性地有所侧重。只能说，"路漫漫其修远兮，吾将上下而求索"。**`,
      en: `The first three sections were created on November 4, 2024, and the last section on February 22, 2025, with expression optimization assisted by claude-3.5-sonnet. There may be issues—please bear with me.

Today I saw Ryan's (Xiaohongshu ID: 9475481700) article "Stop Producing Garbage Content," which said don't use AI to produce garbage (published on public platforms), don't ask AI to ask yourself, don't sell stolen goods, don't imitate, etc., expressing views that we shouldn't use AI to embellish our creativity or profit from it. This prompted some of my own thoughts (not directed at Ryan).

**Is using AI to assist content generation really inferior?**

## 01 The Publishing Value of AI-Assisted Content

From a social perspective, the internet is already flooded with massive amounts of information, so why do many people still feel confused?

The existence of information does not equal its accessibility and comprehensibility. Everyone's cognitive framework, learning style, and understanding ability are unique—the same information needs different expressions and interpretive angles to reach different audiences.

Therefore, the reorganization and integration of information itself has significant value. Even AI's differentiated answers to the same question due to different ways of asking can help people with different thinking patterns better understand the essence of the problem.

**This "secondary creation" of information is actually building more bridges for knowledge dissemination.**

From a personal perspective, the meaning of creation lies not only in output but also in promoting self-growth through the creative process.

When I organize my thinking process through writing, I'm actually internalizing and reconstructing knowledge. This process helps me build my own knowledge system and form unique ways of thinking.

And when I genuinely share these thoughts and confusions, my experiences and insights might help those going through similar confusions.

**This sharing based on real experience, even with AI tools to optimize expression, derives its core value from personal genuine thinking and experience.**

At a deeper level, knowledge dissemination is a process of constant iteration and evolution.

Everyone reinterprets information based on their own experience when receiving it, and gives information new perspectives and understanding when sharing. This cycle not only helps individuals build more complete knowledge systems but also contributes new possibilities for knowledge dissemination across society.

AI plays the role of an auxiliary tool in this process—it helps us organize thoughts and optimize expression more efficiently, but the core value of content always comes from the creator's genuine thinking and unique perspective.

Therefore, judging whether content is worth publishing focuses not on whether AI tools were used, but on whether it stems from real thinking and experience, can benefit specific groups, contains unique perspectives, and facilitates knowledge dissemination. If so, it has value and deserves to be produced and shared.

## 02 Redefining "Originality"

In the creative field, we need to rethink the definition of "original."

In traditional views, people often equate "original" with "completely unique," believing content must be unprecedented to be original.

However, in humanity's long history of civilization, true "complete originality" is extremely rare—almost all creation develops on the foundation of predecessors' accumulation.

I recently saw this passage on QQ Space:

> "Every person who 'edges' actually doesn't realize 'whose edge they're crossing.' After all, it's not just them—all creators in this world have 'recently saw something I really liked so suddenly had inspiration and drew it' situations. But some people can realize 'I drew this similar thing because I saw xx and really liked it, I really got the idea from xx's concept,' and feel grateful, while others don't realize it, thinking 'I saw it, liked it, but what I drew is just similar, it's what I wanted and drew myself, how could I be copying you?'"

The source of creative inspiration is often complex and hard to define—there's hardly a clear standard to "authenticate" originality.

Every creator has experienced "seeing something they really liked and suddenly being inspired to create." The key is how we recognize this influence. Some creators can clearly recognize and appreciate the source of inspiration, while others might overlook this connection. This difference reflects different understandings of originality among creators.

**In the AI era, originality should focus more on the uniqueness of the thinking process and personalized experiences.** When we use AI tools, our ways of asking questions, thinking angles, and understanding processes are all unique.

Some content stems from personal fragmented inspirations, using AI to integrate and organize logic—like how I write articles from memos recorded in flomo; others start from questions, gaining answers through AI and then re-understanding and interpreting them—like some content I publish on my public account.

In this process, although it's hard to have a clear standard to define originality, the authenticity of thinking and uniqueness of the process are most important.

Therefore, contemporary originality should focus on: whether content stems from genuine thinking, whether it incorporates personal experiences and insights, whether it provides unique interpretations of existing information, whether it offers new approaches to solving problems. When we can clearly record this process and honestly distinguish what belongs to our own thinking and what still needs improvement, this creative attitude itself embodies the value of originality.

**These processes of thinking and growth belong uniquely to each creator—it's this uniqueness that makes content worth labeling as original. What matters is not completely escaping others' influence, but developing your own views while absorbing and learning, maintaining authenticity and sincerity in creation.**

## 03 The "Reasonableness" of Content Monetization

First is the value dimension of content.

The value of content lies not in production tools but in whether it truly meets audience needs, whether it helps them gain inspiration or solve confusion—as detailed in the first section.

Second is the dimension of labor investment.

When creating with AI, creators invest significant thought and energy: refining questions, designing questioning angles, integrating information, verifying content accuracy, optimizing expression, etc.

The intellectual labor and time investment in this process are very real.

**Just like authors who write using Word processors, the advancement of tools should not negate the value of creators' labor.**

Third is the dimension of innovation and improvement.

Through continuous creation and audience interaction, accumulating experience, improving abilities, and optimizing content quality—this process requires continuous investment and learning.

Reasonable income is not only a reward for invested labor but also a necessary condition for continuing to provide better content.

Finally is the dimension of integrity and transparency.

As long as we maintain transparency about the creative process, let audiences understand how content is produced, and continuously ensure content quality, value exchange based on mutual willingness is reasonable. The key is ensuring pricing matches value, not exaggerating content value, and maintaining honesty and professional ethics.

Therefore, if content truly creates value, involves genuine labor, and maintains creative integrity, then receiving corresponding rewards is reasonable. **The focus is not on what tools were used, but whether we truly created value for our audience.**

## 04 Balancing Personal Skill Development and AI Assistance

This is the final part of my discussion on creative shame in the AI era—how to view the relationship between personal skill development and AIGC assistance.

In my view, this requires thinking from two core dimensions: first, the definition of abilities; second, the boundaries of AI assistance.

In defining abilities, we need to distinguish between creative abilities (like thinking, writing, etc.) and operational abilities (like information dissemination, account management, etc.). In terms of AI assistance boundaries, we should position AI as a "capability multiplier" rather than a replacement, reasonably grasping its degree of substitution.

Specifically, this relationship presents two typical scenarios depending on personal development goals.

**The first is the scenario of pursuing independent creative ability development.**

Like someone who sees excellent articles and aspires to have such thinking ability and writing level—this pursuit stems from inner passion.

In this case, AI should serve as a transitional and auxiliary tool, such as helping to deconstruct the structure and logic of excellent cases, rather than directly replacing content creation.

**The second is the scenario of pursuing information dissemination and sharing.**

If someone's focus is on effectively conveying information, then the main ability to cultivate is account operation capability, and AI can take on more content production tasks.

The creator's focus is on clarifying the purpose of dissemination—as long as you believe you're providing high-value content, you can do so with a clear conscience.

For the first scenario, maintaining creative continuity, self-awareness, and platform feedback are all crucial.

Few people can persist purely on passion without external feedback, and have the energy to refine all ideas. Therefore, you can use AI to supplement fragmented inspirations, quickly form complete content frameworks, maintain the habit of continuous output, and even let output drive input. (For example, this article is mainly fragmented thoughts with claude organizing logic and optimizing expression, though it might lack some "human touch" compared to writing it myself.)

But in this process, you should actively record your thinking process, clearly distinguish "what belongs to me, what I still lack ability in," not be deceived by illusions of prosperity, and dialectically view output and platform feedback.

**Clarify your strengths and weaknesses, improve abilities in targeted ways, optimize creative strategies, thereby forming a positive learning cycle: raising questions, seeking answers, organizing thoughts, expressing viewpoints.**

---

Let me have deepseek summarize my content:

> "To resist creative shame in the AI era, the key lies in establishing cognition of the essence of creation: the core value of content lies not in production tools, but in whether it's rooted in genuine thinking, whether it conveys unique perspectives, whether it can provide practical inspiration for others. The experiential perception and problem consciousness unique to humans are the foundation of creativity that AI can never replace. When we use AI to assist in organizing thoughts and optimizing expression, we're essentially using tools to amplify our own depth of thinking and dissemination efficiency—just as there's no hierarchy between ancients carving on oracle bones and modern people typing on keyboards. Creative shame stems from the misjudgment of placing tools above content. Facing the precision of your questions, the uniqueness of your insights, and the match with user needs is the only way to truly achieve value symbiosis in human-machine collaboration in the AI era."

---

Today is February 22, 2025. I reviewed Ryan's content again. My summary at the beginning of the article has some deviations, but I only used it as a lead to discuss my own confusions and struggles, not as a response to it, so it shouldn't matter much.

I strongly agree with Ryan's original meaning—to have standards for yourself, even allowing yourself to "produce garbage" as a beginner, but not forgetting your original intention to challenge yourself to create content with longer-lasting value. And in the process, try to let AI guide clear self-expression, distinguish between AIGC and your own content with labels, and even if AI is your "voice substitute," use your own words, letting AI be a reviewer rather than a creator.

I'm sure the market will pay for more dedicated work, but its feedback cycle will be long. I also know that one's energy is limited—when more energy is allocated to rapidly iterating "quick products," works that need polishing and settling require longer cycles to produce. But I also know that with study in public, without getting external feedback, one may never find their positioning and direction, or lose the motivation to polish content.

**This is actually a dilemma that requires constant weighing during growth, with different emphases at different stages. All I can say is, "The road ahead is long and distant; I shall search high and low."**`,
    },
  },
  'personal-database': {
    title: {
      zh: '建议大家尽早开始搭建个人数据库',
      en: 'Start Building Your Personal Database Early',
    },
    date: '2025.02.20',
    readTime: { zh: '8 分钟阅读', en: '8 min read' },
    authorNotes: [] as AuthorNote[],
    content: {
      zh: `在这个信息爆炸的时代，每个人每天都在接收海量的信息。但是，真正能帮助我们成长的，不是我们接收了多少信息，而是我们能够从这些信息中提炼出多少对自己有价值的东西。

## 01

让我们先来思考一个问题：在AI时代，最重要的是什么？

> "找准自己的定位，让AI为己所用。技术不会淘汰所有人，只会淘汰不会用的人。"

相信大家已经看多了这样的话，但好像还是不知道怎么做。

这句话本身没有问题，但缺乏实际的行动指示，就成为了空谈，反而令人更加焦虑。

比如说，怎么找自己的定位呢？怎么样才算找准了？怎么让AI为我所用？这就能保证不被淘汰了吗？

从哪里开始，遵循什么路径，成了最大的问题。

**我的答案是：从自我分析开始，搭建属于个人的核心文档+更新记录，明确不同时空的业务场景，找到AI工具融入。**

当然，这样说可能还是有些抽象，所以我举个例子：

我是一个ENTP水瓶座（身份定位）→

在此身份的基础上，我明确了我的基础信息，比如思维模式和决策风格、核心价值观和人生理念、沟通风格和表达方式、核心优势和发展方向；

明确了我的工作画像，比如我的核心工作模式、可以提供的专业价值、适合的工作环境和团队协作模式；

明确了我的社交与人际关系模式，比如如何管理社交能量、如何应对社交冲突、在团队中的角色等等。

这一不完全展开，它们也只是作为一个可供参考的出发点而非定论。这些组成了我的核心文档。→

接着创建复盘模板和日常任务记录，记录下自己在工作中遇到的问题和解决方案、记录自己的思考和感悟、记录自己的学习心得、记录自己的决策过程和结果等等。

最重要的是，从记录中不断认识自己、明确自己的任务场景和解决流程、找到可以优化的方向并制定行动策略（尤其是如何让AI融入提升效率）。

在这一过程中，区别于"复盘"构建而成的文件合集，我称之为"数据库"。这一表述意味着它需要包括更多的内容，只要你希望它们能够在未来被复用和延续。

## 02

说明了为什么我们需要这样的记录内容后，说说为什么我们需要数据库这种外部化存储机制。

有的人可能会说："我记性很好啊，为什么还需要数据库？"

问题在于：**人类的记忆是非常不可靠的。** 当我们面临新的问题时，往往很难完整地调用起过去的经验。就像我们经常会遇到这样的情况：

"我记得我之前看过一篇很好的文章，但是现在想不起来具体内容了..."

"这个问题我之前明明解决过，但现在又忘记怎么做了..."

当然，数据库的意义对我来说更上一层。

作为ENTP的我，会回忆时倾向构建合理叙事而非提取真实片段，情景记忆碎片化、缺乏连贯的时间轴整理能力，类似于一个记忆能力较差，需要不断回溯对话记录和数据库来保证输出行动持续性的AI。

比方说，当我写简历时，要写下我过去的项目经历、工作经历，但如果没有当时的过程记录用于推理，我几乎很难直接想起具体的细节。

**数据库通过外部化存储机制，能有效降低记忆与回忆的认知负荷。**

对我而言，它不是起到"锦上添花"般点缀作用的存在，而是维持生活一致性的必选项。

## 03

或许我已经说明了，数据库很有必要，它能够帮助我们找准定位，找到方向，并且站在"过去的自己"之上往前走。

但这跟AI时代有什么关系呢？

**AI时代，个人数据库的价值会变得更加突出，而AI也能够帮助我们更高效地利用，实现价值的再创造。**

个人数据库，重点是"个人"，而非数据。个人的体验与感受、个人的经验与故事，这些都是AI无法从互联网上获取的信息，也是你的独有资产。如果说公共领域的信息差由于AI的发展被逐渐抹平，私域的积淀就是你区别于其他人的优势所在。

接着，AI结合数据库，能够帮助我们更快地检索和关联信息、发现数据中的模式和规律、基于我们的数据给出更个性化的建议，等等。这样，我们就可以把更多的精力放在创造性思维上，而不是耗费在回忆和检索上。

举例来说，我一直使用的笔记软件是obsidian，一个本地化markdown语言的双链笔记软件。但我除了创建文档-撰写内容外，基本上不会使用它的其他功能，我总是容易把它们又变得一团乱。结果就是我创建了大量的文档，但我几乎无法有效地利用。

但去年9月开始，我接触到了cursor，一个AI编程软件。可以直接创建和编辑本地文件，至此，在一众大佬都用它开发程序时，我用它记笔记、写方案、写论文，进行文档的整合和延伸，让我的笔记软件开始真正地运转起来。

也就是说，**AI相当于你的"放大器"**，它能将你从一个点扩展为一条线、形成一个网，但关键在于中心的"点"必须足够强大，否则线和网将显得薄弱且缺乏支撑力。

## 04

如何从0开始建立个人数据库？

虽然我已经开始活用笔记软件和AI工具，但我还是面临了一个最大的问题——不够聚焦。

也就是，从去年9月到我制定自己的"核心文档"前，虽然在记录，但是我的记录是发散的。我确信自己有了一些积累和提升，但它们无法转化为针对一个点的输出。

同时，我开始面临青年的最大危机，毕业求职。

或许曾经的我可以允许自己多维发展保持随性，但现在至少得确定一条主线，保证它的推进。所以，我决定重新搭建数据库，并从建立自己的坐标系和记录开始，构建主线+支线模式（找到自己需要专注的领域和感兴趣的领域），逐渐培养自己的可积累优势和核心竞争力。

**具体来说，可以按照以下步骤进行操作：**

- 选择一个笔记软件（如Notion、Obsidian、飞书、flomo等等）
- 设立简单的分类系统和标签体系（如果你需要的话。但我一开始不这么做，会让我陷入归类的混乱）
- 开始每天的记录，例如：我一天下来发生了哪些事情？遇到了哪些问题或者有哪些任务？我是如何解决的，这反映了我的什么能力或者体现了我的什么特征？下次遇到类似的问题或任务是否能够借助AI提升解决效率？我接下来可以进一步做什么？等等。
- 撰写核心文档，例如：我的性格是什么样的？我最关心的领域是什么？我想在哪些方面持续积累？我曾经有哪些高光时刻？等等。

这里我只是简要地举了一些例子，重要的是开始，而非一次性达到完美。

下一篇写写怎么利用AI+各种测试题+个人规划相关的书籍进行自我分析，搭建起核心文档的。

---

在这个信息过载的时代，建立个人数据库不再是可有可无的选择，而是必要的生存技能。

它能帮助我们更清晰地认识自己、更有效地积累经验、更快速地解决问题、更持续地实现成长。

**如果你还没有开始建立自己的个人数据库，不妨从今天开始。**`,
      en: `In this age of information explosion, everyone receives massive amounts of information every day. However, what truly helps us grow is not how much information we receive, but how much valuable insight we can extract from it.

## 01

Let's first consider a question: In the AI era, what matters most?

> "Find your positioning and let AI work for you. Technology won't eliminate everyone, only those who don't know how to use it."

I'm sure you've heard this many times, but still don't know how to act on it.

The statement itself is fine, but without practical guidance, it becomes empty talk that only increases anxiety.

For example, how do you find your positioning? How do you know when you've found it? How do you make AI work for you? Does this guarantee you won't be replaced?

Where to start and what path to follow has become the biggest question.

**My answer: Start with self-analysis, build your personal core documents + update records, clarify business scenarios across different contexts, and find where AI tools can integrate.**

This might still sound abstract, so let me give an example:

I am an ENTP Aquarius (identity positioning) →

Based on this identity, I clarified my basic information, such as thinking patterns and decision-making style, core values and life philosophy, communication style and expression methods, core strengths and development direction;

I clarified my work profile, such as my core work patterns, professional value I can provide, suitable work environment and team collaboration modes;

I clarified my social and interpersonal relationship patterns, such as how to manage social energy, how to handle social conflicts, my role in teams, etc.

These serve only as reference points rather than conclusions. They form my core documents. →

Then create review templates and daily task records, documenting problems encountered at work and solutions, thoughts and insights, learning experiences, decision processes and results, etc.

Most importantly, continuously understand yourself through records, clarify your task scenarios and solution processes, find directions for optimization and develop action strategies (especially how to integrate AI to improve efficiency).

In this process, distinct from a collection of files built through "reviews," I call it a "database." This term implies it needs to include more content, as long as you want them to be reused and continued in the future.

## 02

After explaining why we need such recorded content, let's discuss why we need databases as an externalized storage mechanism.

Some might say: "I have a good memory, why do I need a database?"

The problem is: **Human memory is very unreliable.** When facing new problems, we often struggle to fully recall past experiences. Like these common situations:

"I remember reading a great article before, but now I can't recall the specific content..."

"I definitely solved this problem before, but now I've forgotten how..."

Of course, databases hold even greater significance for me.

As an ENTP, when recalling I tend to construct reasonable narratives rather than extract real fragments, with fragmented episodic memory and lack of coherent timeline organization ability—similar to an AI with poor memory that needs to constantly trace back conversation records and databases to ensure output action continuity.

For example, when writing my resume, I need to describe past project and work experiences, but without process records from that time for reasoning, I can hardly recall specific details directly.

**Databases can effectively reduce the cognitive load of memory and recall through externalized storage mechanisms.**

For me, it's not a "nice-to-have" decoration, but a necessity for maintaining life consistency.

## 03

Perhaps I've explained that databases are necessary—they can help us find positioning, direction, and move forward standing on "our past selves."

But what does this have to do with the AI era?

**In the AI era, the value of personal databases becomes more prominent, and AI can help us use them more efficiently, achieving value recreation.**

Personal database—the emphasis is on "personal," not data. Personal experiences and feelings, personal stories and lessons—these are information AI cannot obtain from the internet, and they are your unique assets. If information gaps in the public domain are gradually leveled by AI development, your private accumulation is your advantage over others.

Furthermore, AI combined with databases can help us search and connect information faster, discover patterns in data, provide more personalized suggestions based on our data, etc. This way, we can focus more on creative thinking rather than exhausting ourselves on recall and retrieval.

For example, I've been using Obsidian, a local markdown bidirectional linking note software. But besides creating documents and writing content, I barely use its other features—I always end up making them messy again. The result is I've created lots of documents but can barely utilize them effectively.

But starting September last year, I encountered Cursor, an AI programming software. It can directly create and edit local files. While everyone else uses it for development, I use it for notes, proposals, papers, document integration and extension, making my note software truly work.

In other words, **AI is your "amplifier"**—it can expand you from a point to a line, forming a network, but the key is that the central "point" must be strong enough, otherwise the lines and network will be weak and lack support.

## 04

How to build a personal database from scratch?

Although I've started using note software and AI tools actively, I still faced the biggest problem—lack of focus.

From September last year until I created my "core documents," although I was recording, my records were scattered. I'm sure I had some accumulation and improvement, but they couldn't translate into output for a single point.

Meanwhile, I began facing the biggest crisis for young people—graduation and job hunting.

Perhaps I could allow myself multidimensional development and stay spontaneous before, but now I need to at least determine a main line and ensure its progress. So I decided to rebuild my database, starting from establishing my coordinate system and records, building a main line + sideline model (finding areas I need to focus on and areas I'm interested in), gradually cultivating my accumulable advantages and core competitiveness.

**Specifically, you can follow these steps:**

- Choose a note software (such as Notion, Obsidian, Feishu, flomo, etc.)
- Establish a simple classification system and tag system (if you need it. But I don't do this initially—it would trap me in classification confusion)
- Start daily recording: What happened today? What problems or tasks did I encounter? How did I solve them, and what abilities or characteristics does this reflect? Can I use AI to improve efficiency for similar problems next time? What can I do next? etc.
- Write core documents: What is my personality like? What areas do I care about most? What aspects do I want to continuously accumulate? What were my highlight moments? etc.

These are just brief examples. What matters is starting, not achieving perfection all at once.

Next article will discuss how to use AI + various tests + personal planning books for self-analysis and building core documents.

---

In this age of information overload, building a personal database is no longer optional—it's a necessary survival skill.

It helps us understand ourselves more clearly, accumulate experience more effectively, solve problems faster, and achieve continuous growth.

**If you haven't started building your personal database, why not start today?**`,
    },
  },
};

const BlogPostContent = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const post = id ? posts[id as keyof typeof posts] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回博客' : 'Back to Blog'}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* 文章主体 */}
            <article>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight"
              >
                {isZh ? post.title.zh : post.title.en}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 text-sm text-muted-foreground mb-12"
              >
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {isZh ? post.readTime.zh : post.readTime.en}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="article-content"
              >
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="font-serif text-2xl font-light mt-12 mb-6 text-foreground border-b border-border pb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-serif text-xl font-light mt-8 mb-4 text-foreground">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground leading-[1.8] mb-6 text-base">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-primary font-medium">
                        {children}
                      </strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-accent pl-6 my-8 italic text-muted-foreground bg-muted/30 py-4 pr-4 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-6 space-y-3 text-muted-foreground">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start gap-3 leading-relaxed">
                        <span className="text-accent mt-1.5 text-sm">•</span>
                        <span>{children}</span>
                      </li>
                    ),
                    hr: () => (
                      <hr className="my-12 border-t border-border" />
                    ),
                  }}
                >
                  {isZh ? post.content.zh : post.content.en}
                </ReactMarkdown>
              </motion.div>
            </article>

            {/* 作者批注侧边栏 */}
            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-32"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-medium text-foreground">
                    {isZh ? '作者批注' : 'Author Notes'}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {post.authorNotes && post.authorNotes.length > 0 ? (
                    post.authorNotes.map((note, index) => (
                      <motion.div
                        key={note.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="p-4 bg-card border border-border rounded-lg"
                      >
                        <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {note.date}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {isZh ? note.content.zh : note.content.en}
                        </p>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      {isZh ? '暂无批注' : 'No notes yet'}
                    </p>
                  )}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostContent;
