export type GolfCourseSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  highlights: string[];
};

export type GolfCourseDetail = {
  slug: string;
  name: string;
  zh: string;
  meta: string;
  summary: string;
  imageClass: string;
  heroImage: string;
  heroSlides: string[];
  location: string;
  slogan: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  sections: GolfCourseSection[];
};

export const golfCourses: GolfCourseDetail[] = [
  {
    slug: "legend-danang-golf-resort",
    name: "Legend Danang Golf Resort",
    zh: "岘港传奇高尔夫度假村",
    meta: "Greg Norman · Jack Nicklaus Design · 36洞度假球场",
    summary:
      "坐落于岘港五行山海岸线，Legend Danang Golf Resort 以 Dunes Course 与 Nicklaus Course 两种鲜明风格，呈现东南亚少见的双传奇设计体验。",
    imageClass: "imageLegend",
    heroImage: "/images/course-details/legend-bulkhead-water.png",
    heroSlides: [
      "/images/course-details/legend-bulkhead-water.png",
      "/images/course-details/legend-aerial-centered.png",
      "/images/course-details/legend-golfer-caddie.png",
      "/images/course-details/legend-links-fairway.png",
      "/images/course-details/legend-dunes-signature.png",
    ],
    location: "越南岘港市五行山区和海坊，连接岘港机场、会安古城与中部海岸度假带。",
    slogan: "当代两位高尔夫传奇在东南亚的交汇",
    stats: [
      { label: "球场规模", value: "36洞 · 两座18洞球场" },
      { label: "标准杆", value: "Dunes Par 72 · Nicklaus Par 73" },
      { label: "设计师", value: "Greg Norman · Nicklaus Design" },
      { label: "核心体验", value: "海岸沙丘 Links · 木桩护岸水景" },
    ],
    sections: [
      {
        id: "hero-story",
        eyebrow: "01 · 第一印象",
        title: "海风、沙丘与双球场的视觉开场",
        subtitle: "从旧称 BRG Danang Golf Resort 到今日 Legend Danang，这里始终是岘港高尔夫版图的核心地标。",
        image: "/images/course-details/legend-bulkhead-water.png",
        paragraphs: [
          "球场最适合用宽阔的航拍视角呈现：Dunes Course 的绿色球道穿过原始金色沙丘，Nicklaus Course 的木桩护岸沿水面展开，远处则是东海海风与五行山轮廓。",
          "品牌故事集中在两位当代高尔夫传奇的交汇。Greg Norman 带来经典海滨 Links 语言，Jack Nicklaus Design 则注入更现代、更具水障碍策略的 Florida bulkhead 风格。",
        ],
        highlights: ["旧称 BRG Danang Golf Resort", "双传奇设计", "适合作为岘港高尔夫旅程主视觉"],
      },
      {
        id: "about",
        eyebrow: "02 · 品牌故事",
        title: "一座度假村，两种完全不同的球场性格",
        subtitle: "Dunes Course 开放、粗犷、迎风；Nicklaus Course 精准、临水、战术感更强。",
        image: "/images/course-details/legend-links-fairway.png",
        paragraphs: [
          "The Dunes Course 由澳大利亚“白鲨”Greg Norman 设计，2010年开业，强调天然沙丘、深沙坑、原生植被与海风造成的真实 Links 节奏。",
          "The Nicklaus Course 由 Jack Nicklaus 旗下 Nicklaus Design 打造，并于2020年完整呈现18洞。木桩护岸、水道与湿地景观让每一次攻果岭都更强调落点选择。",
        ],
        highlights: ["Dunes Course · Greg Norman · 2010", "Nicklaus Course · Nicklaus Design · 2020", "距离岘港机场及市中心约15-20分钟车程"],
      },
      {
        id: "course-overview",
        eyebrow: "03 · 球场概览",
        title: "36洞国际标准配置，兼具 Links 与水岸策略",
        subtitle: "同一天可以体验两种截然不同的击球判断：风、沙、开阔球道，以及水线、木桩护岸与夜间高尔夫。",
        image: "/images/course-details/legend-dunes-signature.png",
        paragraphs: [
          "Dunes Course 为18洞 Par 72，冠军发球台约7,160码；Nicklaus Course 为18洞 Par 73，冠军发球台约7,380码，并设有多组发球台以适配不同水平球员。",
          "球场草种以耐热、速度稳定为重点，果岭使用 TifEagle Bermuda，球道及长草区使用 Wintergreen Bermuda，保证中部海岸气候下的击球质感。",
        ],
        highlights: ["Dunes Course 约7,160码", "Nicklaus Course 约7,380码", "Nicklaus Course 配备灯光，可包装夜间高尔夫体验"],
      },
      {
        id: "facilities",
        eyebrow: "04 · 服务设施",
        title: "完整的高尔夫日配套与赛后休憩",
        subtitle: "会所、练习场、Pro Shop、餐饮、Locker 与 Caddie 服务共同支撑完整的一日球局。",
        image: "/images/course-details/hoiana-clubhouse-sea.png",
        paragraphs: [
          "会所面积超过4,000平方米，现代开放式空间与大面积玻璃让球员在贵宾休息区或主大厅即可眺望球场景观。",
          "练习场长度约300码，配有带顶棚练习位、切杆及推杆区域，并提供高尔夫学院教练支持。餐饮空间覆盖越南中部特色、亚洲与欧式菜品，适合赛后交流。",
        ],
        highlights: ["4,000平方米以上会所", "300码练习场", "Pro Shop、租杆、桑拿、蒸汽浴、按摩池与专业 Caddie"],
      },
    ],
  },
  {
    slug: "hoiana-shores-golf-club",
    name: "Hoiana Shores Golf Club",
    zh: "会安南岸高尔夫俱乐部",
    meta: "Robert Trent Jones Jr. · 海滨冠军 Links · 会安南部",
    summary:
      "Hoiana Shores 位于 Hoiana Resort & Golf 内，是 Robert Trent Jones Jr. 在越南的首个作品，以纯粹海滨 Links、原生沙丘与占婆群岛海景构成高端度假球局。",
    imageClass: "imageHoiana",
    heroImage: "/images/course-details/hoiana-ocean-fairway.png",
    heroSlides: [
      "/images/course-details/hoiana-ocean-fairway.png",
      "/images/course-details/hoiana-aerial-centered.png",
      "/images/course-details/hoiana-golfer-caddie.png",
      "/images/course-details/hoiana-cham-islands.png",
      "/images/course-details/hoiana-clubhouse-sea.png",
    ],
    location: "越南广南省升平县平明乡，Hoiana Resort & Golf 内，距会安古城约8公里。",
    slogan: "大洋之畔的纯粹 Links 交响",
    stats: [
      { label: "球场规模", value: "18洞冠军球场" },
      { label: "标准杆", value: "Par 71" },
      { label: "长度", value: "约7,004码 · 5组发球台" },
      { label: "设计师", value: "Robert Trent Jones Jr." },
    ],
    sections: [
      {
        id: "hero-story",
        eyebrow: "01 · 第一印象",
        title: "原生沙丘、白色沙地与海浪构成主画面",
        subtitle: "Hoiana Shores 的视觉语言不是度假装饰，而是真正贴着海岸线生长出来的 Links 景观。",
        image: "/images/course-details/hoiana-ocean-fairway.png",
        paragraphs: [
          "最适合放在页面开场的是航拍式海岸全景：起伏沙丘、翠绿色球道、白沙坑、木麻黄树影，以及最后靠近海浪的收官洞。",
          "它的主张可以直接表达为“纯粹 Links”。球场没有大量高大树木遮风，真正的挑战来自沙丘、野生灌木与东海不稳定海风。",
        ],
        highlights: ["Hoiana Resort & Golf 旗舰球场", "2019年正式运营", "曾获“世界最佳新球场”相关荣誉"],
      },
      {
        id: "about",
        eyebrow: "02 · 品牌故事",
        title: "Robert Trent Jones Jr. 在越南的首个代表作",
        subtitle: "设计强调环保、自然地形与风向策略，让球员从内陆逐渐被带向海边。",
        image: "/images/course-details/hoiana-cham-islands.png",
        paragraphs: [
          "球场由 Robert Trent Jones Jr. 设计，他以环境友好型高尔夫设计理念闻名。Hoiana Shores 是其在越南的首个作品，也因此具有清晰的传播价值。",
          "球场位于会安南部海岸，距会安古城约15分钟车程，距岘港国际机场约45分钟车程，适合与 Hoiana 度假、会安古城夜游、餐饮及娱乐体验组合。",
        ],
        highlights: ["Robert Trent Jones Jr. 首个越南作品", "距会安古城约8公里", "适合高端度假及摄影型客人"],
      },
      {
        id: "course-overview",
        eyebrow: "03 · 球场概览",
        title: "18洞 Par 71，风、沙丘与海岸线决定策略",
        subtitle: "球场以螺旋式线路将球员从内陆带向大海，后段海边洞尤其具备记忆点。",
        image: "/images/course-details/hoiana-dunes-bunkers.png",
        paragraphs: [
          "Hoiana Shores 为18洞冠军球场，Par 71，冠军发球台约7,004码，并设置5组发球台，让职业球员与业余球员都能获得公平但刺激的体验。",
          "果岭使用 TifEagle Bermuda，推杆速度快且坡度明显；球道与发球台铺设 Zeon Zoysia，兼顾环保维护与击球支撑。15、16、17号等临海洞是页面中最值得强调的高潮段落。",
        ],
        highlights: ["约7,004码", "TifEagle Bermuda 果岭", "15-17号临海洞为核心视觉与竞技亮点"],
      },
      {
        id: "facilities",
        eyebrow: "04 · 服务设施",
        title: "东南亚级会所与 Hoiana 度假生态",
        subtitle: "从会所视野、练习学院到餐饮娱乐，Hoiana Shores 更像完整度假产品中的高价值球局。",
        image: "/images/course-details/hoiana-clubhouse-sea.png",
        paragraphs: [
          "会所规模宏大，带有殖民风格建筑气质，室内空间豪华，拥有可环视球场与东海的开阔视野。",
          "练习区、真草练习位、短杆区、挥杆分析设备、Pro Shop、精致餐饮与男女专属 Locker 共同形成高端接待能力。Caddie 团队熟悉 Links 风格，能帮助球员判断海风与沙丘果岭坡度。",
        ],
        highlights: ["豪华会所与360度景观", "练习学院及短杆区", "可与 Hoiana 住宿、餐饮、娱乐及会安夜游组合"],
      },
    ],
  },
  {
    slug: "vinpearl-golf-nam-hoi-an",
    name: "Vinpearl Golf Nam Hoi An",
    zh: "会安珍珠高尔夫球场",
    meta: "IMG Worldwide · Par 72 · 亲年度假型球场",
    summary:
      "Vinpearl Golf Nam Hoi An 位于珍珠南会安度假生态内，由 IMG Worldwide 设计，兼具海岸沙丘、宽阔球道、度假配套与家庭旅行友好属性。",
    imageClass: "imageVinpearl",
    heroImage: "/images/course-details/vinpearl-resort-fairway.png",
    heroSlides: [
      "/images/course-details/vinpearl-resort-fairway.png",
      "/images/course-details/vinpearl-aerial-centered.png",
      "/images/course-details/vinpearl-golfer-caddie.png",
      "/images/course-details/vinpearl-driving-range.png",
      "/images/course-details/hoiana-dunes-bunkers.png",
    ],
    location: "越南广南省升平县平明乡，Vinpearl Resort & Golf Nam Hoi An 度假综合体内。",
    slogan: "征服中部海岸白色沙丘的度假旅程",
    stats: [
      { label: "球场规模", value: "18洞 · 约73公顷" },
      { label: "标准杆", value: "Par 72" },
      { label: "长度", value: "约7,038码" },
      { label: "设计师", value: "IMG Worldwide" },
    ],
    sections: [
      {
        id: "hero-story",
        eyebrow: "01 · 第一印象",
        title: "宽阔球道、白色大沙坑与南会安度假背景",
        subtitle: "Vinpearl 的优势在于轻松、明亮、完整度假生态，而不只是单独一场高尔夫。",
        image: "/images/course-details/vinpearl-resort-fairway.png",
        paragraphs: [
          "页面视觉适合使用从高处俯瞰的大场景：绿色球道在白色沙坑之间延展，周围是木麻黄、椰影、湖面与南会安度假建筑。",
          "品牌信息应围绕“度假型高尔夫”展开。这里既适合球员，也适合同行家人安排度假、娱乐或 VinWonders 体验。",
        ],
        highlights: ["Vinpearl Resort & Golf Nam Hoi An 内", "2018年开业", "适合家庭、度假与轻松球局"],
      },
      {
        id: "about",
        eyebrow: "02 · 品牌故事",
        title: "IMG Worldwide 打造的海岸度假型球场",
        subtitle: "球场把海边沙丘、季节性植被与宽容度较高的球道组织成更亲和的高尔夫体验。",
        image: "/images/course-details/vinpearl-driving-range.png",
        paragraphs: [
          "球场由 IMG Worldwide 设计，位于南会安五星彩色度假综合体内，处在会安古城与美山圣地之间的旅行动线上。",
          "地形以自然沙丘和缓坡为基础，局部高差约4-11米。近海区域有木麻黄林，内陆区域则配置季节性植被与本土草丛，形成明亮、开阔而有层次的景观。",
        ],
        highlights: ["IMG Worldwide 设计", "距岘港机场约30公里", "与会安古城、美山圣地及度假综合体联动"],
      },
      {
        id: "course-overview",
        eyebrow: "03 · 球场概览",
        title: "18洞 Par 72，白沙坑与水障碍提供清晰策略",
        subtitle: "整体更友好，但并不单调，开场洞与临水 Par 3 都有强记忆点。",
        image: "/images/course-details/hoiana-dunes-bunkers.png",
        paragraphs: [
          "Vinpearl Golf Nam Hoi An 为18洞国际标准冠军球场，Par 72，占地约73公顷，长度约7,038码，并通过多组发球台适配不同水平球员。",
          "球场整体铺设 Platinum Paspalum，这种草种耐盐、常绿，适合中部海岸的阳光与海风。1号洞以巨大白沙坑打开球局，9号 Par 3 则以湖面和沙丘围合形成技术挑战。",
        ],
        highlights: ["约73公顷", "Platinum Paspalum 全场草种", "1号洞与9号洞适合重点呈现"],
      },
      {
        id: "facilities",
        eyebrow: "04 · 服务设施",
        title: "高尔夫设施与 Vinpearl 生态配套并行",
        subtitle: "练习、餐饮、租杆、Locker 与 resort 休闲服务，适合混合客群的一日安排。",
        image: "/images/course-details/vinpearl-driving-range.png",
        paragraphs: [
          "会所现代、简洁，拥有开阔接待空间和面向球场的视野。练习区提供长打、切杆、推杆等赛前热身条件。",
          "Pro Shop 提供高尔夫服饰、配件、球具与租杆服务；餐厅覆盖会安、岘港地方菜与亚洲、欧洲菜单。由于球车通常需要沿固定车道行驶，Caddie 在搬运球杆、判断距离与协助移动上尤为重要。",
        ],
        highlights: ["度假综合体配套强", "Pro Shop 与租杆服务", "适合非打球家人同步安排休闲体验"],
      },
    ],
  },
  {
    slug: "montgomerie-links-vietnam",
    name: "Montgomerie Links Vietnam",
    zh: "蒙哥马利林克斯越南",
    meta: "Colin Montgomerie · Championship Links · 岘港-会安走廊",
    summary:
      "Montgomerie Links Vietnam 由苏格兰传奇 Colin Montgomerie 设计，位于岘港与会安之间，以传统 Links 精神、深沙坑、海风与便利动线形成经典球局。",
    imageClass: "imageMontgomerie",
    heroImage: "/images/course-details/montgomerie-links-sunset.png",
    heroSlides: [
      "/images/course-details/montgomerie-links-sunset.png",
      "/images/course-details/montgomerie-aerial-centered.png",
      "/images/course-details/montgomerie-golfer-caddie.png",
      "/images/course-details/montgomerie-coastal-green.png",
      "/images/course-details/montgomerie-clubhouse-practice.png",
    ],
    location: "越南中部海岸黄金走廊，连接岘港与会安，靠近五行山与主要海滨度假区。",
    slogan: "在热带中部海岸体验苏格兰传统 Links 精神",
    stats: [
      { label: "球场规模", value: "18洞冠军球场" },
      { label: "标准杆", value: "Par 72" },
      { label: "长度", value: "约7,090码" },
      { label: "设计师", value: "Colin Montgomerie" },
    ],
    sections: [
      {
        id: "hero-story",
        eyebrow: "01 · 第一印象",
        title: "夕阳下的起伏球道与深沙坑",
        subtitle: "Montgomerie Links 的画面更克制、更经典，强调传统 Links 线条和五行山背景。",
        image: "/images/course-details/montgomerie-links-sunset.png",
        paragraphs: [
          "页面开场适合以低角度或黄昏光线呈现：起伏球道、深锅形沙坑、稀疏植被与远处五行山，形成接近苏格兰 Links 的节奏。",
          "球场品牌来自 Colin Montgomerie 的个人影响力。他曾8次赢得 European Tour Order of Merit，球场自2008年运营以来，一直是中部海岸最具代表性的冠军球场之一。",
        ],
        highlights: ["Colin Montgomerie 设计", "2008年开业", "适合作为岘港-会安第一场或中段球局"],
      },
      {
        id: "about",
        eyebrow: "02 · 品牌故事",
        title: "苏格兰 Links 哲学落在越南中部海岸",
        subtitle: "自然沙地、海风、野草、深沙坑与没有大树遮挡的开阔球道，是它的主要性格。",
        image: "/images/course-details/montgomerie-coastal-green.png",
        paragraphs: [
          "球场位于岘港与会安之间的海岸公路动线上，距岘港国际机场和会安古城都约15分钟车程，旅行组织效率很高。",
          "设计利用沙质土壤、沙丘、原生植被和厚实 rough，配合围绕果岭布置的深沙坑，要求球员既有精准落点，也要能处理海风带来的弹道变化。",
        ],
        highlights: ["岘港-会安黄金走廊", "距机场和会安均约15分钟", "传统 Links 与热带海岸景观结合"],
      },
      {
        id: "course-overview",
        eyebrow: "03 · 球场概览",
        title: "18洞 Par 72，7,090码的冠军挑战",
        subtitle: "低差点球员会被策略性沙坑考验，休闲球员也能在多组发球台中找到舒适节奏。",
        image: "/images/course-details/montgomerie-links-sunset.png",
        paragraphs: [
          "Montgomerie Links 为18洞 Championship 球场，Par 72，总长度约7,090码。线路沿自然沙带展开，充分利用东海海风增加战术层次。",
          "果岭使用 TifEagle Bermuda，球道与长草区使用 Seashore Paspalum。18号 Par 5 是标志性收官洞，逆风朝会所方向推进，沿途沙坑不断影响每一杆决策。",
        ],
        highlights: ["约7,090码", "TifEagle Bermuda 果岭", "18号 Par 5 为标志性收官洞"],
      },
      {
        id: "facilities",
        eyebrow: "04 · 服务设施",
        title: "练习学院、会所餐饮与酒店别墅配套",
        subtitle: "便利位置与成熟运营让它成为多球场行程中稳定、好排的一站。",
        image: "/images/course-details/montgomerie-clubhouse-practice.png",
        paragraphs: [
          "会所位于高处沙丘，建筑现代，视野可覆盖18号洞及周边球道。30个带顶棚练习位、短杆区和推杆果岭支持赛前热身与课程训练。",
          "Birdie Restaurant 提供亚洲、欧洲与本地特色餐饮，并有适合商务会面的 VIP 空间。Locker、淋浴、桑拿、蒸汽浴、按摩池以及经验丰富的 Caddie 团队，共同完成完整接待。",
        ],
        highlights: ["30个带顶棚练习位", "Golf Academy 与短杆练习区", "Birdie Restaurant、Locker、桑拿、蒸汽浴与酒店别墅"],
      },
    ],
  },
];

export function getGolfCourse(slug: string) {
  return golfCourses.find((course) => course.slug === slug);
}
