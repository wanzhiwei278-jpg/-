// 这是你之前的 204 道题
const bank1 = [
    {
        "id": 1,
        "type": "single",
        "question": "图中采取的内照射防护措施是（ ）。",
        "imageName": "image1.jpg",
        "options": { "A": "包容", "B": "隔离", "C": "净化", "D": "稀释" },
        "correctAnswer": "A"
    },
    {
        "id": 2,
        "type": "single",
        "question": "在如下图所示的衰变纲图中，衰变方式 a 属于（ ）衰变。",
        "imageName": "image2.jpg",
        "options": { "A": "EC 衰变", "B": "β+衰变", "C": "β-衰变", "D": "γ 衰变" },
        "correctAnswer": "A"
    },
    {
        "id": 3,
        "type": "single",
        "question": "下图中的球形电离室属于（ ）。",
        "imageName": "image3.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "A"
    },
    {
        "id": 4,
        "type": "single",
        "question": "如下图所示中的三种射线，穿透能力最强的射线是（ ）。",
        "imageName": "image4.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "一样强" },
        "correctAnswer": "C"
    },
    {
        "id": 5,
        "type": "single",
        "question": "如下图所示中的三种射线，电离本领最强的射线是（ ）。",
        "imageName": "image5.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "一样强" },
        "correctAnswer": "A"
    },
    {
        "id": 6,
        "type": "single",
        "question": "该图表示的是哪种辐射？（ ）",
        "imageName": "image6.jpg",
        "options": { "A": "α 粒子", "B": "β 粒子", "C": "γ 辐射", "D": "中子辐射" },
        "correctAnswer": "C"
    },
    {
        "id": 7,
        "type": "single",
        "question": "本图采用的是何种外照射防护方法？（ ）",
        "imageName": "image7.jpg",
        "options": { "A": "时间防护", "B": "距离防护", "C": "屏蔽防护", "D": "个人防护" },
        "correctAnswer": "B"
    },
    {
        "id": 8,
        "type": "single",
        "question": "该图表明，针对外照射，不同射线对人的危害大小排序正确的是：（ ）",
        "imageName": "image8.jpg",
        "options": { "A": "n > γ，x > β > α", "B": "γ，x > n > β > α", "C": "α，n > β > γ，x", "D": "α > β > γ，x > n" },
        "correctAnswer": "A"
    },
    {
        "id": 9,
        "type": "single",
        "question": "图中仪表监测的数值 0.21 是（ ）。",
        "imageName": "image9.jpg",
        "options": { "A": "吸收剂量", "B": "吸收剂量率", "C": "当量剂量率", "D": "剂量当量率" },
        "correctAnswer": "D"
    },
    {
        "id": 10,
        "type": "single",
        "question": "该仪器测量的量是（ ）。",
        "imageName": "image10.jpg",
        "options": { "A": "环境剂量", "B": "表面污染", "C": "空气放射性浓度", "D": "当量剂量" },
        "correctAnswer": "B"
    },
    {
        "id": 11,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image11.jpg",
        "options": { "A": "剂量", "B": "剂量率", "C": "计量", "D": "照射量" },
        "correctAnswer": "B"
    },
    {
        "id": 12,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image12.jpg",
        "options": { "A": "剂量", "B": "剂量率", "C": "计量", "D": "照射量" },
        "correctAnswer": "B"
    },
    {
        "id": 13,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image13.jpg",
        "options": { "A": "累积剂量", "B": "剂量率", "C": "计量", "D": "照射量" },
        "correctAnswer": "A"
    },
    {
        "id": 14,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image14.jpg",
        "options": { "A": "累积剂量", "B": "剂量率", "C": "计量", "D": "照射量" },
        "correctAnswer": "A"
    },
    {
        "id": 15,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image15.jpg",
        "options": { "A": "累积剂量", "B": "剂量率", "C": "吸收剂量", "D": "有效剂量" },
        "correctAnswer": "B"
    },
    {
        "id": 16,
        "type": "single",
        "question": "该仪器显示数值表示的是（ ）。",
        "imageName": "image16.jpg",
        "options": { "A": "累积剂量", "B": "剂量率", "C": "吸收剂量", "D": "有效剂量" },
        "correctAnswer": "A"
    },
    {
        "id": 17,
        "type": "single",
        "question": "核素符号图，表述正确的是（ ）。",
        "imageName": "image17.jpg",
        "options": { "A": "X 表示元素符号", "B": "A 表示核素符号", "C": "Z 表示核素符号", "D": "N 表示核素符号" },
        "correctAnswer": "A"
    },
    {
        "id": 18,
        "type": "single",
        "question": "下图中的高纯锗探测器属于（ ）。",
        "imageName": "image18.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "C"
    },
    {
        "id": 19,
        "type": "single",
        "question": "在如下图所示的衰变纲图中，衰变方式 b 属于（ ）衰变。",
        "imageName": "image19.jpg",
        "options": { "A": "α 衰变", "B": "β+衰变", "C": "β-衰变", "D": "γ衰变" },
        "correctAnswer": "A"
    },
    {
        "id": 20,
        "type": "single",
        "question": "在如下图所示的衰变纲图中，衰变方式 d 属于（ ）衰变。",
        "imageName": "image20.jpg",
        "options": { "A": "α 衰变", "B": "β+衰变", "C": "β-衰变", "D": "γ 衰变" },
        "correctAnswer": "D"
    },
    {
        "id": 21,
        "type": "single",
        "question": "下图中的碘化钠探测器属于（ ）。",
        "imageName": "image21.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "B"
    },
    {
        "id": 22,
        "type": "single",
        "question": "α 辐射是由较大的不稳定原子核发射出的、带正电荷的氦原子核，如果母核是 210Po，发生 α 衰变后，子核应该是（ ）。",
        "imageName": "image22.jpg",
        "options": { "A": "206Pb", "B": "208Pb", "C": "210Pb", "D": "214Pb" },
        "correctAnswer": "A"
    },
    {
        "id": 23,
        "type": "single",
        "question": "如下图所示，操作强放射性物质应在密闭和经过防护处理的（ ）内用机械手操作。",
        "imageName": "image23.jpg",
        "options": { "A": "热室", "B": "通风橱", "C": "手套箱", "D": "实验台" },
        "correctAnswer": "A"
    },
    {
        "id": 24,
        "type": "single",
        "question": "外照射防护的三个要素如下图所示，辐照源与人之间有屏蔽时，照射对人的影响（ ）。",
        "imageName": "image24.jpg",
        "options": { "A": "越小", "B": "越大", "C": "没变化", "D": "不确定" },
        "correctAnswer": "A"
    },
    {
        "id": 25,
        "type": "single",
        "question": "外照射防护的三个要素如下图所示，离辐照源的距离越近，照射对人的影响（ ）。",
        "imageName": "image25.jpg",
        "options": { "A": "越小", "B": "越大", "C": "没变化", "D": "不确定" },
        "correctAnswer": "B"
    },
    {
        "id": 26,
        "type": "single",
        "question": "外照射防护的三个要素如下图所示，接触照射的时间越长，照射对人的影响（ ）。",
        "imageName": "image26.jpg",
        "options": { "A": "越小", "B": "越大", "C": "没变化", "D": "不确定" },
        "correctAnswer": "B"
    },
    {
    "id": 27,
    "type": "single",
    "question": "各种人工辐射照射来源所致公众辐射剂量的全球平均值中，最高的是（ ）。",
    "isOptionImage": true,
    "options": { 
        "A": { "text": "医疗照射", "img": "image27.jpg" }, 
        "B": { "text": "大气核试验", "img": "image28.jpg" }, 
        "C": { "text": "切尔诺贝利事故", "img": "image29.jpg" }, 
        "D": { "text": "核燃料循环", "img": "image30.jpg" } 
    },
    "correctAnswer": "A",
    "note": "医疗照射是公众受照射的人工辐射源中贡献最大的。"
    },
    {
        "id": 28,
        "type": "single",
        "question": "不同类型的辐射，即使在能量相同的情况下，其穿透能力也是不一样的（如下图所示）。其中穿透能力最差的是（ ）。",
        "imageName": "image31.jpg",
        "options": { "A": "α", "B": "β", "C": "γ", "D": "中子" },
        "correctAnswer": "A"
    },
    {
        "id": 29,
        "type": "single",
        "question": "下图所示的衰变类型属于（ ）衰变。",
        "imageName": "image32.jpg",
        "options": { "A": "β-", "B": "β+", "C": "α", "D": "γ" },
        "correctAnswer": "D"
    },
    {
        "id": 30,
        "type": "single",
        "question": "下图中的平面硅（PIPS）可用于制成（ ）。",
        "imageName": "image33.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "C"
    },
    {
        "id": 31,
        "type": "single",
        "question": "下图中的金硅面垒探测器属于（ ）。",
        "imageName": "image34.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "C"
    },
    {
        "id": 32,
        "type": "single",
        "question": "用下图中的闪烁液进行探测的属于（ ）。",
        "imageName": "image35.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "B"
    },
    {
        "id": 33,
        "type": "single",
        "question": "用下图中的锂玻璃制成的探测器属于（ ）。",
        "imageName": "image36.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "B"
    },
    {
        "id": 34,
        "type": "single",
        "question": "下图中的硫化锌探测器属于（ ）。",
        "imageName": "image37.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "B"
    },
    {
        "id": 35,
        "type": "single",
        "question": "下图中的碘化铯探测器属于（ ）。",
        "imageName": "image38.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "B"
    },
    {
        "id": 36,
        "type": "single",
        "question": "下图中的电离室探测器属于（ ）。",
        "imageName": "image39.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "A",
        "note": "电离室通过收集射线在气体中产生的离子对来测量辐射，是典型的气体探测器。 [cite: 13, 30]"
    },
    {
        "id": 37,
        "type": "single",
        "question": "下图中的正比计数器属于（ ）。",
        "imageName": "image40.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "A",
        "note": "正比计数器利用气体的倍增效应工作，属于气体探测器。 [cite: 13, 30]"
    },
    {
        "id": 38,
        "type": "single",
        "question": "下图中的 G-M 计数管属于（ ）。",
        "imageName": "image41.jpg",
        "options": { "A": "气体探测器", "B": "闪烁体探测器", "C": "半导体探测器", "D": "液体探测器" },
        "correctAnswer": "A",
        "note": "盖革-米勒（G-M）计数管工作在GM区，属于常见的气体探测器。 [cite: 13, 30]"
    },
    {
        "id": 39,
        "type": "single",
        "question": "由图可知，该核素的半衰期是（ ）。",
        "imageName": "image42.jpg",
        "options": { "A": "1 天", "B": "2 天", "C": "4 天", "D": "8 天" },
        "correctAnswer": "B",
        "note": "图中活度从 100% 降至 50% 对应的时间点是 2 天，故半衰期为 2 天。 [cite: 13]"
    },
    {
        "id": 40,
        "type": "single",
        "question": "已知该核素半衰期为 4 天，减少到原来的 1/8 需要（ ）。",
        "imageName": "image43.jpg",
        "options": { "A": "4 天", "B": "8 天", "C": "12 天", "D": "16 天" },
        "correctAnswer": "C",
        "note": "1/8 等于 3 个半衰期（1/2的3次方）。3 × 4天 = 12天。 [cite: 13]"
    },
    {
        "id": 41,
        "type": "single",
        "question": "在以下生活中我们所接触的辐射中，剂量最高的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "胸部CT (一次)", "img": "image44.jpg" }, 
            "B": { "text": "患癌增加 (一年)", "img": "image45.jpg" }, 
            "C": { "text": "死亡 (短时照射)", "img": "image46.jpg" }, 
            "D": { "text": "核工业限值 (一年)", "img": "image47.jpg" } 
        },
        "correctAnswer": "C",
        "note": "致死所需的短时大剂量照射（通常为数Gy）远高于生活或职业限值。 [cite: 13]"
    },
    {
        "id": 42,
        "type": "single",
        "question": "下图中辐射 c 穿透能力最强，属于（ ）。",
        "imageName": "image48.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "中子" },
        "correctAnswer": "C",
        "note": "图中 c 穿透全身且无阻挡，符合 γ 射线高穿透力的特征。 [cite: 13]"
    },
    {
        "id": 43,
        "type": "single",
        "question": "下图中辐射 b 侵入深度约 5mm，属于（ ）。",
        "imageName": "image49.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "中子" },
        "correctAnswer": "B",
        "note": "β 射线能穿透皮肤进入皮下组织，深度通常在数毫米级别。 [cite: 13]"
    },
    {
        "id": 44,
        "type": "single",
        "question": "下图中辐射 a 被表皮挡住，属于（ ）。",
        "imageName": "image50.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "中子" },
        "correctAnswer": "A",
        "note": "α 粒子穿透力极弱，一张纸或皮肤死层（~0.05mm）即可挡住。 [cite: 13]"
    },
    {
        "id": 45,
        "type": "single",
        "question": "关于死胎和畸形的关系图，说法错误的是（ ）。",
        "imageName": "image51.jpg",
        "options": { "A": "发育推进，敏感性降低", "B": "发育推进，敏感性增高", "C": "各阶段敏感性不同", "D": "前50天危害最大" },
        "correctAnswer": "B",
        "note": "胚胎在发育早期对辐射最敏感，随着发育成熟，敏感性通常是逐渐降低的。 [cite: 13]"
    },
    {
        "id": 46,
        "type": "single",
        "question": "关于随机性效应与剂量关系图，说法错误的是（ ）。",
        "imageName": "image52.jpg",
        "options": { "A": "概率与剂量有关", "B": "严重程度与剂量有关", "C": "小剂量也有危险", "D": "不存在阈值" },
        "correctAnswer": "B",
        "note": "随机性效应的特点是：剂量越大发生‘概率’越高，但‘严重程度’与剂量无关。 [cite: 13]"
    },
    {
        "id": 47,
        "type": "single",
        "question": "下列不同种系生物死亡所需的吸收剂量最高的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "病毒", "img": "image53.jpg" }, 
            "B": { "text": "鼠", "img": "image54.jpg" }, 
            "C": { "text": "大肠杆菌", "img": "image55.jpg" }, 
            "D": { "text": "人", "img": "image56.jpg" } 
        },
        "correctAnswer": "A",
        "note": "低等生物（如病毒）的抗辐射能力远强于高等复杂生物。 [cite: 13]"
    },
    {
        "id": 48,
        "type": "single",
        "question": "下列不同种系生物死亡所需的吸收剂量最高的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "龟", "img": "image57.jpg" }, 
            "B": { "text": "猴", "img": "image58.jpg" }, 
            "C": { "text": "大肠杆菌", "img": "image59.jpg" }, 
            "D": { "text": "鼠", "img": "image60.jpg" } 
        },
        "correctAnswer": "C",
        "note": "在选项中，微生物（大肠杆菌）的演化程度最低，耐受剂量最高。 [cite: 13]"
    },
    {
        "id": 49,
        "type": "single",
        "question": "下列属于轻度敏感的组织或是器官有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "肝上皮细胞", "img": "image61.jpg" }, 
            "B": { "text": "心脏", "img": "image62.jpg" }, 
            "C": { "text": "胚胎", "img": "image63.jpg" }, 
            "D": { "text": "角膜", "img": "image64.jpg" } 
        },
        "correctAnswer": "B",
        "note": "肌肉、心脏和神经组织属于对辐射不敏感或轻度敏感的组织。"
    },
    {
        "id": 50,
        "type": "single",
        "question": "当量剂量的国际标准单位（Sv）是以谁的名字命名的？",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "戈瑞", "img": "image65.jpg" }, 
            "B": { "text": "希沃特", "img": "image66.jpg" }, 
            "C": { "text": "爱因斯坦", "img": "image67.jpg" }, 
            "D": { "text": "贝克勒尔", "img": "image68.jpg" } 
        },
        "correctAnswer": "B",
        "note": "Sv 的专用名称是希沃特（Sievert），用于衡量辐射对生物组织的加权影响。"
    },
    {
        "id": 51,
        "type": "single",
        "question": "吸收剂量的国际标准单位（Gy）是以谁的名字命名的？",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "戈瑞", "img": "image69.jpg" }, 
            "B": { "text": "伦琴", "img": "image70.jpg" }, 
            "C": { "text": "爱因斯坦", "img": "image71.jpg" }, 
            "D": { "text": "贝克勒尔", "img": "image72.jpg" } 
        },
        "correctAnswer": "A",
        "note": "Gy 的专用名称是戈瑞（Gray），定义为每千克受照物质吸收 1 焦耳的辐射能量。"
    },
    {
        "id": 52,
        "type": "single",
        "question": "图中显示存在“剂量阈值”的关系属于（ ）。",
        "imageName": "image73.jpg",
        "options": { "A": "确定性效应", "B": "随机性效应", "C": "指数衰减", "D": "指数增强" },
        "correctAnswer": "A",
        "note": "确定性效应有明显的阈值，只有超过阈值才会发生，且严重程度随剂量增加而增加。"
    },
    {
        "id": 53,
        "type": "single",
        "question": "如图所示 β 能谱，以下说法错误的是（ ）。",
        "imageName": "image74.jpg",
        "options": { "A": "能量连续分布", "B": "确定的最大能量", "C": "曲线有极大点", "D": "能谱分立分布" },
        "correctAnswer": "D",
        "note": "β 射线的能量是连续分布的，因为衰变释放的能量由电子和中微子共同随机分担。"
    },
    {
        "id": 54,
        "type": "single",
        "question": "在如下图所示的衰变纲图中，属于 γ 衰变的是（ ）。",
        "imageName": "image75.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": "B",
        "note": "在纲图中，垂直向下的箭头（如 b）表示核能级跃迁，释放 γ 射线。"
    },
    {
        "id": 55,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 d 属于（ ）衰变。",
        "imageName": "image76.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "C",
        "note": "斜向右下方的箭头表示原子序数增加，属于 β- 衰变。"
    },
    {
        "id": 56,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 c 属于（ ）衰变。",
        "imageName": "image77.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "B",
        "note": "斜向左下方的箭头（如 c）表示原子序数减少，通常为 β+ 衰变或轨道电子俘获。"
    },
    {
        "id": 57,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 b 属于（ ）衰变。",
        "imageName": "image78.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "D",
        "note": "垂直向下的直线代表 γ 跃迁。"
    },
    {
        "id": 58,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 c 属于（ ）衰变。",
        "imageName": "image79.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "D",
        "note": "同上，垂直箭头代表核从激发态退激，释放 γ 射线。"
    },
    {
        "id": 59,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 a 属于（ ）衰变。",
        "imageName": "image80.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "A",
        "note": "从 Th 到 Ra，原子序数减少 2，质量数减少 4，符合 α 衰变特征。"
    },
    {
        "id": 60,
        "type": "single",
        "question": "在衰变纲图中，衰变方式 B 属于（ ）衰变。",
        "imageName": "image81.jpg",
        "options": { "A": "α 衰变", "B": "β+ 衰变", "C": "β- 衰变", "D": "γ 衰变" },
        "correctAnswer": "C",
        "note": "箭头斜向右下指向 Zn-64，表示 β- 衰变。"
    },
    {
        "id": 61,
        "type": "single",
        "question": "在如下图所示的衰变纲图中，衰变方式 A 属于（ ）衰变。",
        "imageName": "image82.jpg",
        "options": { "A": "α 衰变", "B": "β+衰变", "C": "β-衰变", "D": "γ 衰变" },
        "correctAnswer": "B"
    },
    {
        "id": 62,
        "type": "single",
        "question": "如图所示原子中电子的壳层结构，其中最多可以容纳 8 个电子数为（ ）层。",
        "imageName": "image83.jpg",
        "options": { "A": "K", "B": "L", "C": "M", "D": "N" },
        "correctAnswer": "B"
    },
    {
        "id": 63,
        "type": "single",
        "question": "如图所示原子中电子的壳层结构，其中最多可以容纳 2 个电子数为（ ）层。",
        "imageName": "image84.jpg",
        "options": { "A": "K", "B": "L", "C": "M", "D": "N" },
        "correctAnswer": "A"
    },
    {
        "id": 64,
        "type": "single",
        "question": "从下图中看出，对于中能 γ 射线和原子序数低的吸收物质，（ ）占有优势。",
        "imageName": "image85.jpg",
        "options": { "A": "光电效应", "B": "康普顿效应", "C": "电子对效应" },
        "correctAnswer": "B"
    },
    {
        "id": 65,
        "type": "single",
        "question": "从下图中看出，对于低能 γ 射线和原子序数高的吸收物质（ ）占有优势。",
        "imageName": "image86.jpg",
        "options": { "A": "光电效应", "B": "康普顿效应", "C": "电子对效应" },
        "correctAnswer": "A"
    },
    {
        "id": 66,
        "type": "single",
        "question": "下图中表示电子对效应的物理过程是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image87.jpg", 
            "B": "image88.jpg", 
            "C": "image89.jpg", 
            "D": "image90.jpg" 
        },
        "correctAnswer": "D"
    },
    {
        "id": 67,
        "type": "single",
        "question": "下图中表示康普顿散射这一过程是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image91.jpg", 
            "B": "image92.jpg", 
            "C": "image93.jpg", 
            "D": "image94.jpg" 
        },
        "correctAnswer": "C"
    },
    {
        "id": 68,
        "type": "single",
        "question": "α 辐射，又称 α 粒子，是由较大的不稳定原子核发射出的，下图中（ ）是 α 粒子。",
        "isOptionImage": true,
        "options": { 
            "A": "image95.jpg", 
            "B": "image96.jpg", 
            "C": "image97.jpg", 
            "D": "image98.jpg" 
        },
        "correctAnswer": "A"
    },
    {
        "id": 69,
        "type": "single",
        "question": "实验发现，放射性核素 22286Ra 放出一个 α 粒子，变成 21484Po。下图是 22286Ra 衰变规律的曲线，由此可知，22286Ra 的数目减少一半需要（ ）天。",
        "imageName": "image99.jpg",
        "options": { "A": "2 天", "B": "4 天", "C": "8 天", "D": "12 天" },
        "correctAnswer": "B"
    },
    {
        "id": 70,
        "type": "single",
        "question": "下图所表示的物理过程是（ ）。",
        "imageName": "image100.jpg",
        "options": { "A": "光电效应", "B": "俄歇电子", "C": "康普顿散射", "D": "电子对效应" },
        "correctAnswer": "B"
    },
    {
        "id": 71,
        "type": "single",
        "question": "下图所表示的物理过程是（ ）。",
        "imageName": "image101.jpg",
        "options": { "A": "光电效应", "B": "俄歇电子", "C": "康普顿散射", "D": "电子对效应" },
        "correctAnswer": "A"
    },
    {
        "id": 72,
        "type": "single",
        "question": "下图所表示的物理过程是（ ）。",
        "imageName": "image102.jpg",
        "options": { "A": "光电效应", "B": "俄歇电子", "C": "康普顿散射", "D": "电子对效应" },
        "correctAnswer": "C"
    },
    {
        "id": 73,
        "type": "single",
        "question": "如下原子结构示意图，正确的表示方法为（ ）。",
        "imageName": "image103.jpg",
        "options": { "A": "178O", "B": "179O", "C": "179F", "D": "178F" },
        "correctAnswer": "A"
    },
    {
        "id": 74,
        "type": "single",
        "question": "根据原子核比结合能曲线，以下原子核中结合得最松的是（ ）。",
        "imageName": "image104.jpg",
        "options": { "A": "H", "B": "He", "C": "Li", "D": "Fe" },
        "correctAnswer": "A"
    },
    {
        "id": 75,
        "type": "single",
        "question": "根据原子核比结合能曲线，以下原子核中结合得最紧的是（ ）。",
        "imageName": "image105.jpg",
        "options": { "A": "H", "B": "He", "C": "Li", "D": "Fe" },
        "correctAnswer": "D"
    },
    {
        "id": 76,
        "type": "single",
        "question": "根据（ ）相对论理论，任何具有一定质量 m 的物体，它相应的能量公式表示为：E= mc2",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "爱因斯坦", "img": "image106.jpg" }, 
            "B": { "text": "伦琴", "img": "image107.jpg" }, 
            "C": { "text": "贝克勒尔", "img": "image108.jpg" }, 
            "D": { "text": "玻恩", "img": "image109.jpg" } 
        },
        "correctAnswer": "A"
    },
    {
        "id": 77,
        "type": "single",
        "question": "1898 年，（ ）发现当铀发出射线后，可以神奇地转变为其他元素，其中一个元素命名为钋，另一个元素称为镭，即“发光的”元素。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "伦琴", "img": "image110.jpg" }, 
            "B": { "text": "贝克勒尔", "img": "image111.jpg" }, 
            "C": { "text": "居里夫人", "img": "image112.jpg" }, 
            "D": { "text": "麦克斯韦", "img": "image113.jpg" } 
        },
        "correctAnswer": "C"
    },
    {
        "id": 78,
        "type": "single",
        "question": "下面碳原子结构示意图中，代表中子的是（ ）。",
        "imageName": "image114.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": "D",
        "note": "原子核内不带电的粒子为中子。"
    },
    {
        "id": 79,
        "type": "single",
        "question": "下面碳原子结构示意图中，代表电子的是（ ）。",
        "imageName": "image115.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": "B",
        "note": "核外绕核运动的带负电粒子是电子。"
    },
    {
        "id": 80,
        "type": "single",
        "question": "下面碳原子结构示意图中，代表质子的是（ ）。",
        "imageName": "image116.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": "C",
        "note": "原子核内带正电的粒子是质子。"
    },
    {
        "id": 81,
        "type": "single",
        "question": "下面碳原子结构示意图中，代表碳原子核的是（ ）。",
        "imageName": "image117.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": "A",
        "note": "由质子和中子组成的中心致密区域即为原子核。"
    },
    {
        "id": 82,
        "type": "single",
        "question": "以下属于电离辐射的有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image118.jpg", 
            "B": "image119.jpg", 
            "C": "image120.jpg", 
            "D": "image121.jpg" 
        },
        "correctAnswer": "D",
        "note": "电离辐射的能量足以使物质原子发生电离，如X射线、γ射线、中子等。其他选项多为非电离辐射或非辐射标志。"
    },
    {
        "id": 83,
        "type": "single",
        "question": "图中采取的是哪种内照射防护措施？（ ）",
        "imageName": "image122.jpg",
        "options": { "A": "包容", "B": "隔离", "C": "净化", "D": "个人防护" },
        "correctAnswer": "D",
        "note": "图中人员穿戴了专用的气衣或呼吸保护装备，属于典型的“个人防护”措施。"
    },
    {
        "id": 84,
        "type": "single",
        "question": "图中采取的是哪种内照射防护措施？（ ）",
        "imageName": "image123.jpg",
        "options": { "A": "包容", "B": "隔离", "C": "净化", "D": "个人防护" },
        "correctAnswer": "A",
        "note": "将操作限制在手套箱或热室等密闭空间内，防止放射性物质扩散，属于“包容”措施。"
    },
    {
        "id": 85,
        "type": "single",
        "question": "图中是什么标志？（ ）",
        "imageName": "image124.jpg",
        "options": { "A": "电离辐射标志", "B": "电磁辐射标志", "C": "非电离辐射标志", "D": "电离辐射警告标志" },
        "correctAnswer": "D",
        "note": "黄底黑色的三叶草图形是国际通用的“电离辐射警告标志”。"
    },
    {
        "id": 86,
        "type": "single",
        "question": "图中采取的是什么防护措施？（ ）",
        "imageName": "image125.jpg",
        "options": { "A": "包容", "B": "隔离", "C": "净化", "D": "稀释" },
        "correctAnswer": "A",
        "note": "将放射源或放射性物质封闭在容器内进行操作，这是内照射防护中的“包容”原则。"
    },
    {
        "id": 87,
        "type": "single",
        "question": "本图采用的是何种外照射防护方法？（ ）",
        "imageName": "image126.jpg",
        "options": { "A": "时间防护", "B": "距离防护", "C": "屏蔽防护", "D": "个人防护" },
        "correctAnswer": "C",
        "note": "在人和放射源之间放置吸收射线的材料（如铅玻璃或铅屏风），这属于典型的“屏蔽防护”。"
    },
    {
        "id": 88,
        "type": "single",
        "question": "该图表示的是哪种衰变？（ ）",
        "imageName": "image127.jpg",
        "options": { "A": "α 衰变", "B": "β 衰变", "C": "γ 衰变", "D": "中子辐射" },
        "correctAnswer": "B",
        "note": "图中原子核放射出高速运动的电子（e⁻），这是典型的 β 衰变特征。"
    },
    {
        "id": 89,
        "type": "single",
        "question": "该图表示的是哪种衰变？（ ）",
        "imageName": "image128.jpg",
        "options": { "A": "α 衰变", "B": "β 衰变", "C": "γ 衰变", "D": "中子辐射" },
        "correctAnswer": "B",
        "note": "同上，放出 β 粒子（电子或正电子）的核反应均属于 β 衰变。"
    },
    {
        "id": 90,
        "type": "single",
        "question": "该图表示的是哪种衰变？（ ）",
        "imageName": "image129.jpg",
        "options": { "A": "α 衰变", "B": "β 衰变", "C": "γ 衰变", "D": "中子辐射" },
        "correctAnswer": "A",
        "note": "图中母核释放出一个由2个质子和2个中子组成的氦原子核，即 α 粒子，属于 α 衰变。"
    },
    {
        "id": 91,
        "type": "single",
        "question": "原子核模型图中，哪种颜色的粒子代表中子？（ ）",
        "imageName": "image130.jpg",
        "options": { "A": "红色", "B": "白色", "C": "绿色", "D": "绿色和白色" },
        "correctAnswer": "B",
        "note": "在常规的原子核模型中，不带电的粒子通常用白色（或灰色）表示，即中子。"
    },
    {
        "id": 92,
        "type": "single",
        "question": "原子核模型图中，表述电子的是哪种颜色的粒子？（ ）",
        "imageName": "image131.jpg",
        "options": { "A": "红色", "B": "白色", "C": "绿色", "D": "绿色和白色" },
        "correctAnswer": "C",
        "note": "电子位于原子核外部，沿轨道运动，图中用绿色小球表示。"
    },
    {
        "id": 93,
        "type": "single",
        "question": "原子核模型图中，原子核是哪种颜色的粒子？（ ）",
        "imageName": "image132.jpg",
        "options": { "A": "红色和白色", "B": "白色和绿色", "C": "绿色和红色", "D": "绿色、白色和绿色" },
        "correctAnswer": "A",
        "note": "原子核由质子（红色）和中子（白色）共同组成，位于原子中心。"
    },
    {
        "id": 94,
        "type": "single",
        "question": "原子核模型图中，表述质子的是哪种颜色的粒子？（ ）",
        "imageName": "image133.jpg",
        "options": { "A": "红色", "B": "白色", "C": "绿色", "D": "绿色和白色" },
        "correctAnswer": "A",
        "note": "质子带正电，包含在原子核内，图中用红色球体表示。"
    },
    {
        "id": 95,
        "type": "multiple",
        "question": "下表中列出了构成原子的各种粒子的特征，以下说法中正确的是（ ）。",
        "imageName": "image134.jpg",
        "options": { "A": "每个核外电子带有一个电子电荷的电量，极性为负。", "B": "每个质子也带有一个电子电荷的电量，极性为正。", "C": "中子是不带电的。", "D": "核外电子的数量和原子核内质子的数量相等。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "原子由带正电的质子、不带电的中子以及带负电的核外电子构成，且正常情况下质子数与电子数相等。"
    },
    {
        "id": 96,
        "type": "multiple",
        "question": "下表中列出了构成原子的各种粒子的特征，以下说法中正确的是（ ）。",
        "imageName": "image135.jpg",
        "options": { "A": "整个原子呈现电中性。", "B": "1 电子电荷（e）=1.602×10-19C。", "C": "中子与质子的质量近似相等。", "D": "当各核子结合在一起构成原子核时,核外电子的数量和原子核内质子的数量相等。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "原子整体呈电中性，质子和中子质量相近（约为1.67×10^-27 kg），电子电荷量为常数 e。"
    },
    {
        "id": 97,
        "type": "multiple",
        "question": "辐射灭菌是利用辐射杀死大多数物质上的微生物的一种有效方法，通过特定的方式控制微生物生长或杀死微生物。辐照灭菌属于（ ）。",
        "imageName": "image136.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "B"],
        "note": "辐照灭菌既可以使用电离辐射（如伽马射线、电子束），也可以使用非电离辐射（如紫外线）。"
    },
    {
        "id": 98,
        "type": "multiple",
        "question": "宇宙射线是来自外太空的带电高能次原子粒子，它们可能会产生二次粒子穿透地球的大气层和表面。宇宙射线属于（ ）。",
        "imageName": "image137.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "D"],
        "note": "宇宙射线来自外太空，属于天然背景辐射的一部分，且具有极高的能量，属于电离辐射。"
    },
    {
        "id": 99,
        "type": "multiple",
        "question": "如下原子核模型图，表述正确的是（ ）。",
        "imageName": "image138.jpg",
        "options": { "A": "红色为质子", "B": "白色为中子", "C": "绿色为电子", "D": "绿色为质子", "E": "白色为质子" },
        "correctAnswer": ["A", "B", "C"],
        "note": "在标准的原子模型中，中心通常由质子（常为红色）和中子（常为白色或灰色）组成原子核，外部轨道上是电子（绿色）。"
    },
    {
        "id": 100,
        "type": "multiple",
        "question": "图片表述正确的是（ ）。",
        "imageName": "image139.jpg",
        "options": { "A": "是同一种元素", "B": "是三种不同核素", "C": "是同一种核素", "D": "三者互为同位素", "E": "三者不是同位素" },
        "correctAnswer": ["A", "B", "D"],
        "note": "图中有可能展示的是氢的同位素（氕、氘、氚）。它们质子数相同（同一种元素），中子数不同（互为同位素，是不同类型的核素）。"
    },
    {
        "id": 101,
        "type": "multiple",
        "question": "活度随时间变化的关系图，正确的说法是（ ）。",
        "imageName": "image140.jpg",
        "options": { "A": "衰变过程遵循明确的统计规律", "B": "经历时间越长，放射性衰变原子核减少的越多。", "C": "每一种放射性核素衰变常数是固定不变的", "D": "每种放射性核素的半衰期是固定的", "E": "衰变常数乘以半衰期等于 0.693。" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "放射性衰变服从指数规律，半衰期和衰变常数是核素的固有物理特性，且半衰期 T1/2 = ln2 / λ ≈ 0.693 / λ。"
    },
    {
        "id": 102,
        "type": "multiple",
        "question": "图片中关于伽马衰变表述正确的是（ ）。",
        "imageName": "image141.jpg",
        "options": { "A": "原子核能级跃迁退激时释放出的射线", "B": "波长较短的电磁波", "C": "没有质量只有能量", "D": "常伴有α或β 粒子的发射", "E": "电荷数和质量数都不发生改变。" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "伽马射线是高能电磁波，没有静止质量和电荷，常在 α 或 β 衰变后，子核从激发态退激到基态时释放。"
    },
    {
        "id": 103,
        "type": "multiple",
        "question": "图片中关于中子表述正确的是（ ）。",
        "imageName": "image142.jpg",
        "options": { "A": "由不稳定原子核发射出的中子", "B": "大多通过核裂变或核聚变产生", "C": "不带电", "D": "穿透能力很强", "E": "γ 辐射" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "中子是不带电的粒子，穿透能力强。天然中子极少，多由核反应产生。注：官方题库答案选了E，系统内严格按照官方标准录入。"
    },
    {
        "id": 104,
        "type": "multiple",
        "question": "如果射线粒子能量相同，对于外照射屏蔽该图说法正确的是（ ）。",
        "imageName": "image143.jpg",
        "options": { "A": "带电粒子穿透能力比不带电粒子弱", "B": "α 不需要屏蔽", "C": "β 可用低原子序数材料屏蔽", "D": "γ 可以采用高原子序数材料屏蔽", "E": "中子用含H 低原子序数材料屏蔽" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这总结了常见射线的屏蔽原则：α粒子穿透力极弱无需特意屏蔽；β射线用塑料等低Z材料防止韧致辐射；γ射线用铅等高Z材料；中子用含氢的低Z材料慢化。"
    },
    {
        "id": 105,
        "type": "multiple",
        "question": "图中告诉我们天然辐射源主要包括（ ）。",
        "imageName": "image144.jpg",
        "options": { "A": "宇宙射线", "B": "宇生放射性核素", "C": "陆生放射性核素", "D": "胸部透视", "E": "高空飞行" },
        "correctAnswer": ["A", "B", "C"],
        "note": "天然辐射源主要分为宇宙射线、宇生放射性核素和陆生放射性核素。胸部透视属于医疗人工辐射。"
    },
    {
        "id": 106,
        "type": "multiple",
        "question": "图中采取的防护措施有（ ）。",
        "imageName": "image145.jpg",
        "options": { "A": "时间防护", "B": "距离防护", "C": "屏蔽防护", "D": "个人防护", "E": "隔离防护" },
        "correctAnswer": ["B", "C"],
        "note": "图中主要展示了利用屏蔽物（如墙壁、铅板）和保持距离的外照射防护措施。"
    },
    {
        "id": 107,
        "type": "multiple",
        "question": "如图所示照射方式可分为外照射、内照射和混合照射，以下说法中正确的是（ ）。",
        "imageName": "image146.jpg",
        "options": { "A": "外照射可以是单向照射或多向照射，后者的效应大于前者。", "B": "多向照射增强生物效应的原因是组织接受的照射剂量均匀。", "C": "对于内照射的危害，α>β＞γ 与 X。", "D": "通常能量的 α 粒子不能穿过人体的表面的死层，故 α 粒子外照射一般不能对人体造成伤害。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "综合考察了内外照射的特点。α粒子由于电离本领极强，内照射危害最大；但由于穿透力极弱，外照射基本无危害。"
    },
    {
        "id": 108,
        "type": "multiple",
        "question": "下图是电离辐射生物效应中的确定性效应，关于确定性效应的观点正确的是（ ）。",
        "imageName": "image147.jpg",
        "options": { "A": "发生严重程度和机率都随剂量变化而变化", "B": "即使剂量很小，也有可能发生效应", "C": "发生概率随受照剂量增加而增加，而严重程度与受照剂量无关", "D": "存在剂量阈值" },
        "correctAnswer": ["A", "D"],
        "note": "确定性效应有明显的剂量阈值，只有超过阈值才会发生，且发生后的严重程度会随着剂量的增加而增加。"
    },
    {
        "id": 109,
        "type": "multiple",
        "question": "下图表示放射源全寿命期的管理包括哪些？（ ）",
        "imageName": "image148.jpg",
        "options": { "A": "进口审批和备案", "B": "转让的审批与备案", "C": "转移的备案", "D": "送贮备案", "E": "返回出口国的审批" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "放射源的全寿命期实行严格的“闭环”管理，包括从进口、转让、转移、使用到废弃送贮或出口退回的所有环节。"
    },
    {
        "id": 110,
        "type": "multiple",
        "question": "图片中的人不应当采取的做法是（ ）。",
        "imageName": "image149.jpg",
        "options": { "A": "远离", "B": "搬离", "C": "当废品卖掉", "D": "拆卸", "E": "报告当地生态环境部门" },
        "correctAnswer": ["B", "C", "D"],
        "note": "发现不明放射源时，绝对禁止私自搬离、当废品卖掉或拆卸，这些行为会导致极其严重的辐射事故甚至人员伤亡。"
    },
    {
        "id": 111,
        "type": "multiple",
        "question": "图片中的人应当采取的正确行动是（ ）。",
        "imageName": "image150.jpg",
        "options": { "A": "远离", "B": "搬离", "C": "当废品卖掉", "D": "报告当地公安部门", "E": "报告当地生态环境部门" },
        "correctAnswer": ["A", "D", "E"],
        "note": "发现疑似放射性物质，唯一正确的做法是迅速远离现场，并第一时间拨打公安和生态环境部门的电话报警。"
    },
    {
        "id": 112,
        "type": "multiple",
        "question": "本衰变图说法正确的是（ ）。",
        "imageName": "image151.jpg",
        "options": { "A": "α 衰变", "B": "发出 α 粒子", "C": "发出 β 粒子", "D": "发出中子", "E": "发出氦原子核" },
        "correctAnswer": ["A", "B", "E"],
        "note": "放出含有2个质子和2个中子的氦原子核的衰变过程就是α衰变，放出的粒子即α粒子。"
    },
    {
        "id": 113,
        "type": "multiple",
        "question": "图中剂量限值表述正确的是（ ）。",
        "imageName": "image152.jpg",
        "options": { "A": "职业人员照射剂量限值", "B": "公众剂量限值", "C": "职业人员连续 5 年内平均值不大于 20 mSv/a", "D": "公众连续 5 年内平均值不大于 1 mSv/a", "E": "职业人员任何一年的最大值为 20 mSv/a" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "职业人员的连续5年平均有效剂量限值为20mSv/a，但任何单一年份的最大限值是50mSv，所以选项E是错误的。"
    },
    {
        "id": 114,
        "type": "multiple",
        "question": "关于辐射安全许可证说法正确的是（ ）。",
        "imageName": "image153.jpg",
        "options": { "A": "有正本和副本", "B": "生态环境部门颁发", "C": "卫生主管部门颁发", "D": "有效期 5 年", "E": "规定活动种类和范围" },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "辐射安全许可证由生态环境部门负责颁发，分为正副本，有效期为5年，并严格规定了持证单位许可的活动种类和范围。"
    },
    {
        "id": 115,
        "type": "multiple",
        "question": "下图说法正确的是（ ）。",
        "imageName": "image154.jpg",
        "options": { "A": "穿透力 α<β<γ", "B": "外照射危害 α<β<γ", "C": "内照射危害 α>β>γ", "D": "外照射防护主要针对β和γ", "E": "内照射都要防护" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这道题综合总结了α、β、γ三种常见射线的穿透能力及其在内、外照射中的不同危险性。外照射主要防γ、β，内照射主要防α（但全都需要防护）。"
    },
    {
        "id": 116,
        "type": "multiple",
        "question": "见到图片中的无人看管的东西，错误的做法是（ ）。",
        "imageName": "image155.jpg",
        "options": { "A": "远离", "B": "搬离", "C": "拆卸", "D": "当废品卖掉", "E": "报告当地生态环境部门或公安部门" },
        "correctAnswer": ["B", "C", "D"],
        "note": "再次强调，搬离、拆卸或当废品卖掉都是极其危险且违法的行为。"
    },
    {
        "id": 117,
        "type": "multiple",
        "question": "图中关于确定性效应表达的正确含义是（ ）。",
        "imageName": "image156.jpg",
        "options": { "A": "针对大剂量、大剂量率的急性照射", "B": "确定性效应有明确的阈值", "C": "在阈值以下不会见到有害效应", "D": "达到阈值则有害效应肯定会发生", "E": "效应的严重程度随所受剂量的增加而增加" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "完整地概括了确定性效应（如皮肤红斑、脱发）的特点：存在阈值、通常由大剂量引起、达到阈值必然发生、严重程度与剂量成正比。"
    },
    {
        "id": 118,
        "type": "multiple",
        "question": "图中关于随机性效应表达的正确含义是（ ）。",
        "imageName": "image157.jpg",
        "options": { "A": "针对小剂量、小剂量率的慢性照射", "B": "随机性效应不存在剂量阈值", "C": "辐射效应的发生概率与剂量大小有关", "D": "辐射效应的非严重程度与剂量大小有关", "E": "很小的剂量也有导致该效应发生的危险" },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "随机性效应的特点是没有剂量阈值，发生概率与受照剂量成正比，但一旦发生，其严重程度与受照剂量无关。"
    },
    {
        "id": 119,
        "type": "multiple",
        "question": "电离辐射是指其携带的能量足以使物质原子或分子中的电子成为自由态，从而使这些原子或分子发生电离现象的辐射。下列属于电离辐射的是（ ）",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "氡气", "img": "image158.jpg" }, 
            "B": { "text": "核子秤", "img": "image159.jpg" }, 
            "C": { "text": "电视", "img": "image160.jpg" }, 
            "D": { "text": "安检", "img": "image161.jpg" } 
        },
        "correctAnswer": ["A", "B", "D"],
        "note": "氡气、核子秤、安检仪均属电离辐射（或含有放射源）。普通电视机主要产生非电离辐射。"
    },
    {
        "id": 120,
        "type": "multiple",
        "question": "闪烁探测器具有分辨时间短、探测效率高和能测量射线能量等优点，是目前应用最广的辐射探测器之一。下列探测器中属于无机闪烁体探测器的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "碘化钠", "img": "image162.jpg" }, 
            "B": { "text": "碘化铯", "img": "image163.jpg" }, 
            "C": { "text": "硫化锌", "img": "image164.jpg" }, 
            "D": { "text": "锂玻璃", "img": "image165.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这四种材料均是核仪器中常用于测量辐射的无机闪烁体材料。"
    },
    {
        "id": 121,
        "type": "multiple",
        "question": "下列探测器中属于半导体探测器有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "金硅面垒", "img": "image166.jpg" }, 
            "B": { "text": "平面硅（PIPS）", "img": "image167.jpg" }, 
            "C": { "text": "高纯锗", "img": "image168.jpg" }, 
            "D": { "text": "锂玻璃", "img": "image169.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "金硅面垒、平面硅和高纯锗均属于半导体探测器，常用于α、β和γ能谱测量。锂玻璃属于无机闪烁体。"
    },
    {
        "id": 122,
        "type": "multiple",
        "question": "下列探测器中属于闪烁体探测器有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "电离室", "img": "image170.jpg" }, 
            "B": { "text": "平面硅（PIPS）", "img": "image171.jpg" }, 
            "C": { "text": "液体闪烁器", "img": "image172.jpg" }, 
            "D": { "text": "碘化铯", "img": "image173.jpg" } 
        },
        "correctAnswer": ["C", "D"],
        "note": "液体闪烁器和碘化铯(CsI)均属于闪烁体探测器。电离室是气体探测器，平面硅是半导体探测器。"
    },
    {
        "id": 123,
        "type": "multiple",
        "question": "下列探测器中常用于中子探测的有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "硫化锌", "img": "image174.jpg" }, 
            "B": { "text": "BF3 正比计数器", "img": "image175.jpg" }, 
            "C": { "text": "3He 正比计数器", "img": "image176.jpg" }, 
            "D": { "text": "锂玻璃", "img": "image177.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "BF3、3He正比计数器是经典的中子探测器；锂玻璃和涂有含硼/锂的硫化锌闪烁体也常被用来探测中子。"
    },
    {
        "id": 124,
        "type": "multiple",
        "question": "核试验的类型包括以下哪些方式（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "地上核试验", "img": "image178.jpg" }, 
            "B": { "text": "地下核试验", "img": "image179.jpg" }, 
            "C": { "text": "高空核试验", "img": "image180.jpg" }, 
            "D": { "text": "水下核试验", "img": "image181.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "历史上核试验曾在各个环境中进行过，主要分类包括大气层（地上、高空）、地下和水下核试验。"
    },
    {
        "id": 125,
        "type": "multiple",
        "question": "电离辐射是指其携带的能量足以使物质原子或分子中的电子成为自由态，从而使这些原子或分子发生电离现象的辐射。下列属于电离辐射的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "电脑", "img": "image182.jpg" }, 
            "B": { "text": "灯源", "img": "image183.jpg" }, 
            "C": { "text": "电子加速器", "img": "image184.jpg" }, 
            "D": { "text": "辐照灭菌", "img": "image185.jpg" } 
        },
        "correctAnswer": ["C", "D"],
        "note": "电子加速器产生高能射线，辐照灭菌利用的是γ射线或电子束，二者均属于电离辐射。电脑和普通灯源多为非电离辐射。"
    },
    {
        "id": 126,
        "type": "multiple",
        "question": "气体探测器收集的带电粒子数目与电压关系曲线如下图。下列描述正确的是（ ）。",
        "imageName": "image186.jpg",
        "options": { "A": "Ⅰ区内收集的离子对数目随收集电压而增加。", "B": "Ⅱ区内工作气体中产生的离子对被完全收集，因而在一定的电压范围内，收集离子对数目不随工作电压而变化。", "C": "Ⅲ区内随着电压增加，电子在被收集前被加速。", "D": "Ⅳ区内随着电压的增加，气体的放大倍数与收集到的总电量成正比的严格关系被打破。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这完整描述了气体探测器的四个核心工作区：复合区(I)、电离室区(II)、正比区(III)和盖革-米勒区(IV)。"
    },
    {
        "id": 127,
        "type": "multiple",
        "question": "以下属于非电离辐射的有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "手机", "img": "image187.jpg" }, 
            "B": { "text": "电脑", "img": "image188.jpg" }, 
            "C": { "text": "微波", "img": "image189.jpg" }, 
            "D": { "text": "广播", "img": "image190.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "手机、电脑、微波炉和广播电台发出的均为电磁波（无线电波或微波），因其能量较低不足以引起原子电离，属于非电离辐射。"
    },
    {
        "id": 128,
        "type": "multiple",
        "question": "电离辐射种类很多，包括带电粒子和不带电粒子。不带电粒子有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "X 射线", "img": "image191.jpg" }, 
            "B": { "text": "γ 射线", "img": "image192.jpg" }, 
            "C": { "text": "质子", "img": "image193.jpg" }, 
            "D": { "text": "中子", "img": "image194.jpg" } 
        },
        "correctAnswer": ["A", "B", "D"],
        "note": "X射线和γ射线属于电磁辐射（光子），中子是不带电的粒子。质子带正电，属于带电粒子。"
    },
    {
        "id": 129,
        "type": "multiple",
        "question": "电离辐射种类很多，包括带电粒子和不带电粒子。带电粒子有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "α 粒子", "img": "image195.jpg" }, 
            "B": { "text": "β 粒子", "img": "image196.jpg" }, 
            "C": { "text": "质子", "img": "image197.jpg" }, 
            "D": { "text": "中子", "img": "image198.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "α粒子（带正电的氦核）、β粒子（高速电子或正电子）和质子（带正电）均是带电粒子。"
    },
    {
        "id": 130,
        "type": "multiple",
        "question": "如图所示 β 能谱，以下说法正确的是（ ）。",
        "imageName": "image199.jpg",
        "options": { "A": "β 射线的能量连续分布", "B": "有一个确定的最大能量值", "C": "分布曲线有一个极大值", "D": "能谱分立分布" },
        "correctAnswer": ["A", "B", "C"],
        "note": "β衰变时释放的能量由β粒子和中微子共同分担，因此β粒子的能量是连续分布的，并呈现出一个特征性的能谱曲线。"
    },
    {
        "id": 131,
        "type": "multiple",
        "question": "非电离辐射，由于辐射能量低，不能从原子、分子或其他束缚状态放出电子，包括（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "可见光", "img": "image200.jpg" }, 
            "B": { "text": "热源", "img": "image201.jpg" }, 
            "C": { "text": "电视天线", "img": "image202.jpg" }, 
            "D": { "text": "电脑", "img": "image203.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "可见光、热辐射（红外线）以及家用电器或天线发出的射频波均属于非电离辐射。"
    },
    {
        "id": 132,
        "type": "multiple",
        "question": "图中采取的外照射防护措施有哪些？（ ）",
        "imageName": "image204.jpg",
        "options": { "A": "机械手操作", "B": "移动屏蔽", "C": "铅玻璃", "D": "穿工作服", "E": "穿防护服" },
        "correctAnswer": ["A", "B", "C"],
        "note": "机械手操作利用了“距离防护”；移动屏蔽和铅玻璃利用了“屏蔽防护”。一般的普通防护服对高穿透性外照射通常起不到防护作用。"
    },
    {
        "id": 133,
        "type": "multiple",
        "question": "下图中医师采取的屏蔽措施有哪些？（ ）",
        "imageName": "image205.jpg",
        "options": { "A": "隔室操作", "B": "铅玻璃屏蔽", "C": "穿工作服", "D": "穿防护服", "E": "戴铅眼镜" },
        "correctAnswer": ["A", "B"],
        "note": "图中医师在单独的控制室内通过铅玻璃观察操作设备，体现了隔室操作与屏蔽的物理防护手段。"
    },
    {
        "id": 134,
        "type": "multiple",
        "question": "根据图片所示，外照射主要针对哪类射线？（ ）",
        "imageName": "image206.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "γ 射线", "D": "X 射线", "E": "中子（n）" },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "α射线的穿透能力极弱，一张纸或皮肤表面的死皮层即可挡住，因此通常不作为外照射防护的主要对象。"
    },
    {
        "id": 135,
        "type": "multiple",
        "question": "针对外照射，图中显示的防护措施包括 。（ ）",
        "imageName": "image207.jpg",
        "options": { "A": "缩短照射时间", "B": "增加与源的距离", "C": "在人与源之间设置屏蔽", "D": "增加降雨", "E": "避免太阳直射" },
        "correctAnswer": ["A", "B", "C"],
        "note": "图中经典地展示了外照射防护的三原则：时间防护、距离防护、屏蔽防护。"
    },
    {
        "id": 136,
        "type": "multiple",
        "question": "图为电离辐射标志，应设置在哪些地方？（ ）",
        "imageName": "image208.jpg",
        "options": { "A": "放射源", "B": "放射性同位素包装容器", "C": "含放射源的设备", "D": "射线装置", "E": "放射性同位素贮存场所" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "该标志（三叶草）主要用于直接标示存在电离辐射危险的源和设备实体。"
    },
    {
        "id": 137,
        "type": "multiple",
        "question": "图为电离辐射警告标志，应设置在哪些地方？（ ）",
        "imageName": "image209.jpg",
        "options": { "A": "放射性同位素贮存场所", "B": "放射性工作场所出入口", "C": "室外作业安全区域", "D": "野外作业安全区域", "E": "放射性同位素运输工具" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "带有“当心电离辐射”字样的警告标志，通常设置在需要控制或警示人员进入的场所外围或运输工具上。"
    },
    {
        "id": 138,
        "type": "multiple",
        "question": "本图采用的是何种外照射防护方法？（ ）",
        "imageName": "image210.jpg",
        "options": { "A": "时间防护", "B": "距离防护", "C": "屏蔽防护", "D": "个人防护", "E": "降低剂量率" },
        "correctAnswer": ["B", "C"],
        "note": "图中操作人员使用了长柄工具（增加距离）和铅砖/铅玻璃组合（设置屏蔽）来减少受到的辐射剂量。"
    },
    {
        "id": 139,
        "type": "multiple",
        "question": "核素符号图，表述正确的是：（ ）",
        "imageName": "image211.jpg",
        "options": { "A": "X 表示元素符号", "B": "A 表示质量数", "C": "Z 表示质子数", "D": "N 表示中子数", "E": "A=Z+N" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "标准的核素表示法：X 是元素符号，左上角 A 是质量数，左下角 Z 是原子序数，右下角 N 是中子数。"
    },
    {
        "id": 140,
        "type": "multiple",
        "question": "警戒区内的防护行动是事故响应中需要采取的防护措施（应急警戒区示意图如下），以下说法正确的是（ ）。",
        "imageName": "image212.jpg",
        "options": { "A": "出入内警戒区只能通过安全通道。", "B": "外部警戒区只允许公安、消防队员、救护服务和其他有资质的工作人员进入。", "C": "内部警戒区只允许拯救生命、急救、消防行动等采取防护措施后允许的行动。", "D": "事故现场的入口控制根据常规的治安程序完成。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "发生放射性事故时的应急响应期间，现场控制必须严格执行分区隔离管理，确保救援人员和公众的安全。"
    },
    {
        "id": 141,
        "type": "multiple",
        "question": "如图所示，对于操作人员，可用（ ）等方法将操作人员围封起来，防止放射性物质进入人体。",
        "imageName": "image213.jpg",
        "options": { "A": "工作服", "B": "鞋帽", "C": "手套", "D": "气衣" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "工作服、鞋帽、手套和气衣等个人防护用品都能有效防止放射性物质通过皮肤或呼吸道进入人体内部。"
    },
    {
        "id": 142,
        "type": "multiple",
        "question": "放射性物质进入体内的途径主要（ ）等。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "吸入", "img": "image214.jpg" }, 
            "B": { "text": "食入", "img": "image215.jpg" }, 
            "C": { "text": "皮肤渗入", "img": "image216.jpg" }, 
            "D": { "text": "伤口侵入", "img": "image217.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "放射性物质主要通过呼吸道吸入、消化道食入、完好皮肤渗入以及破损伤口侵入这四种途径进入人体造成内照射。"
    },
    {
        "id": 143,
        "type": "multiple",
        "question": "常用的β 屏蔽材料有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "铅", "img": "image218.jpg" }, 
            "B": { "text": "有机玻璃", "img": "image219.jpg" }, 
            "C": { "text": "混凝土", "img": "image220.jpg" }, 
            "D": { "text": "铝", "img": "image221.jpg" } 
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "屏蔽β射线通常选用低原子序数材料（如有机玻璃、铝、混凝土等），以减少韧致辐射的产生。铅是高原子序数材料，直接屏蔽β易产生强烈的韧致辐射。"
    },
    {
        "id": 144,
        "type": "multiple",
        "question": "常用的γ 屏蔽材料有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "铅", "img": "image222.jpg" }, 
            "B": { "text": "钨", "img": "image223.jpg" }, 
            "C": { "text": "混凝土", "img": "image224.jpg" }, 
            "D": { "text": "砖", "img": "image225.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "屏蔽γ射线主要依靠物质的密度和原子序数，铅、钨、混凝土和砖等重物质或厚重材料都是常用的γ屏蔽材料。"
    },
    {
        "id": 145,
        "type": "multiple",
        "question": "常用的中子屏蔽材料有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "水", "img": "image226.jpg" }, 
            "B": { "text": "石蜡", "img": "image227.jpg" }, 
            "C": { "text": "混凝土", "img": "image228.jpg" }, 
            "D": { "text": "聚乙烯", "img": "image229.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "屏蔽中子通常需要富含氢的材料（如水、石蜡、聚乙烯）来慢化快中子，混凝土既含水也能提供结构屏蔽，是极佳的综合屏蔽材料。"
    },
    {
        "id": 146,
        "type": "multiple",
        "question": "工业探伤是无损检测的重要手段，射线的工业探伤装置如下图所示。可在不接触、不损坏被检物体的情况下，对（ ）进行精确的检测。",
        "imageName": "image230.jpg",
        "options": { "A": "压力容器", "B": "管道焊缝", "C": "航天器材", "D": "船舶" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "工业射线探伤广泛应用于检测压力容器、管道焊缝、航天及船舶等金属部件内部的裂纹和缺陷。"
    },
    {
        "id": 147,
        "type": "multiple",
        "question": "辐照食品方面的应用。目前辐照已广泛应用于食品的保鲜和杀菌，其优点是（ ）。",
        "imageName": "image231.jpg",
        "options": { "A": "消灭微生物", "B": "防止病虫危害", "C": "无损消毒", "D": "延长保质期" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "食品辐照能穿透食品杀死内部的微生物和寄生虫，具有无损、不升温、延长保质期等显著优点。"
    },
    {
        "id": 148,
        "type": "multiple",
        "question": "利用放射性核素制成原子能电池，如图所示，它具有体积小，能量高等特点，可用于（ ）。",
        "imageName": "image232.jpg",
        "options": { "A": "人造卫星", "B": "宇宙飞船", "C": "核潜艇", "D": "心脏起搏器" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "同位素电池（原子能电池）寿命长、免维护，适用于航天器、深海设备以及植入式医疗器械（如早期心脏起搏器）等。"
    },
    {
        "id": 149,
        "type": "multiple",
        "question": "中子入射到靶原子核上，被靶核俘获，形成一个新核（复合核），过程如下图所示。以下说法正确的是（ ）。",
        "imageName": "image233.jpg",
        "options": { "A": "复合核比原来的靶核原子质量数增加 1。", "B": "复合核处于激发态，是不稳定的。", "C": "复合核会通过放出 γ 光子而回到基态。", "D": "复合核会通过放出 α 粒子而回到基态。" },
        "correctAnswer": ["A", "B", "C"],
        "note": "这描述了典型的辐射俘获反应(n,γ)。靶核吸收一个中子后质量数加1形成处于激发态的复合核，随后通过发射γ光子退激。"
    },
    {
        "id": 150,
        "type": "multiple",
        "question": "外照射个人剂量监测是指利用工作人员佩带剂量计对个人剂量当量进行的监测，以及对测量结果的解释。常用的个人剂量计有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "TLD 个人剂量计", "img": "image234.jpg" }, 
            "B": { "text": "手脚表面污染仪", "img": "image235.jpg" }, 
            "C": { "text": "指环/腕式个人剂量计", "img": "image236.jpg" }, 
            "D": { "text": "个人剂量报警仪", "img": "image237.jpg" } 
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "TLD（热释光剂量计）、指环计和电子报警仪均属个人外照射剂量计。手脚表面污染仪用于监测表面放射性污染，不属于外照射个人剂量计。"
    },
    {
        "id": 151,
        "type": "multiple",
        "question": "在开放型工作场所出口处设置全身表面或手脚污染仪，可防止工作人员带出放射性物质，污染非放射性区域或环境，常用的表面污染监测仪有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "CoMo170", "img": "image238.jpg" }, 
            "B": { "text": "手脚表面污染仪", "img": "image239.jpg" }, 
            "C": { "text": "NaI 探测器", "img": "image240.jpg" }, 
            "D": { "text": "BH3105", "img": "image241.jpg" } 
        },
        "correctAnswer": ["A", "B"],
        "note": "CoMo170 和手脚表面污染仪是常见的专用表面污染监测设备。NaI多用于γ能谱测量，不常作为大面积表面污染探测。"
    },
    {
        "id": 152,
        "type": "multiple",
        "question": "为了监控源的工作状态和工作场所的辐射水平、满足监管上的需要，可以在工作场所合适位置安装在线监测系统，以下说法正确的是（ ）。",
        "imageName": "image242.jpg",
        "options": { "A": "要求监测系统可靠性好，操作方便，响应时间快。", "B": "具有超阈值报警（声光报警）、与防护门联锁、测量数据存储等功能。", "C": "可选用具有一定通信距离的工业无线网络通信方式。", "D": "为了管理上的方便，可采用 GPRS 无线网络传输，实现远程联网。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "在线辐射监测系统需要高可靠性、具备报警联锁功能，并且支持现代化网络通信以便于集中管理。"
    },
    {
        "id": 153,
        "type": "multiple",
        "question": "工作场所 X、γ 外照射的监测，是核技术利用中最常见的监测项目。监测仪器最好选用便携式周围剂量当量率仪，也可选用空气比释动能率仪、空气吸收剂量率仪。常用的便携式剂量率仪有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "正比计数管", "img": "image243.jpg" }, 
            "B": { "text": "电离室巡测仪", "img": "image244.jpg" }, 
            "C": { "text": "NaI 探测器", "img": "image245.jpg" }, 
            "D": { "text": "塑料闪烁体探测器", "img": "image246.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "正比计数管（如某些中子/γ巡测仪）、高压电离室、NaI闪烁体和塑料闪烁体探测器均可被制成便携式剂量率仪用于场所监测。"
    },
    {
        "id": 154,
        "type": "multiple",
        "question": "体表污染监测顺序如下图所示，体表污染监测时应（ ）。",
        "imageName": "image247.jpg",
        "options": { "A": "重点关注眼、鼻、口等部位是否有污染。", "B": "如发现污染，用湿棉花擦拭取样。", "C": "在发现污染的部位表面停留几秒钟，确认仪表读数。", "D": "记录人员污染数据；根据污染部位不同进行去污，必要时实施医疗救助。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "人员体表污染监测需按照规范顺序进行，重点检查五官等易摄入部位，并在发现污染时按规范取样、读数和去污。"
    },
    {
        "id": 155,
        "type": "multiple",
        "question": "X 射线安检仪是采用X 射线扫描成像技术对行李进行安全检测的电子设备，属于（ ）。",
        "imageName": "image248.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "C"],
        "note": "X射线是具有足够能量引发电离的射线，由安检仪内的人工射线装置产生，故属于人工电离辐射。"
    },
    {
        "id": 156,
        "type": "multiple",
        "question": "核测井用探测器在井中连续测量由天然放射性核素发射的或由人工激发产生的核射线，以计数率或标准化单位记录射线强度随深度的变化，属于（ ）。",
        "imageName": "image249.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "C"],
        "note": "测井中无论是测量天然本底还是使用人工源激发测量，涉及的均为电离辐射，且该技术整体属于人工干预的核技术应用。"
    },
    {
        "id": 157,
        "type": "multiple",
        "question": "料位计是指对容器中固体物料高度的变化进行实时检测的仪表。核辐射料位计储仓下侧装有 γ 射线辐射源，储仓上侧装有 γ 射线接收器，γ 射线穿过料层后的强度不同，接收器检测出射入的 γ 射线强度并通过显示仪表显示出料位高度。属于（ ）。",
        "imageName": "image250.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "C"],
        "note": "核料位计通常使用铯-137或钴-60等放射源释放的γ射线，属于人工产生并利用的电离辐射。"
    },
    {
        "id": 158,
        "type": "multiple",
        "question": "伽玛刀是根据立体几何定向原理，将颅内的正常组织或病变组织选择性地确定为靶点，使用钴-60 产生的伽玛射线进行一次性大剂量地聚焦照射，使之产生局灶性的坏死或功能改变而达到治疗疾病的目的。属于（ ）。",
        "imageName": "image251.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "C"],
        "note": "伽玛刀利用放射性同位素钴-60衰变产生的γ射线进行肿瘤放射治疗，属于典型的人工电离辐射应用。"
    },
    {
        "id": 159,
        "type": "multiple",
        "question": "CT 检查是现代一种较先进的医学影像检查技术，它属于（ ）。",
        "imageName": "image252.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "C"],
        "note": "CT扫描使用X射线管对人体进行断层成像，X射线属于能引发电离的人工辐射。"
    },
    {
        "id": 160,
        "type": "multiple",
        "question": "微波是一种电磁波。微波炉就是一种用微波加热食品的现代化烹调灶具，它属于（ ）。",
        "imageName": "image253.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "微波的能量极低，远不能引发物质的电离，因此属于非电离辐射。家用微波炉是人造电器，归属人工辐射。"
    },
    {
        "id": 161,
        "type": "multiple",
        "question": "如图所示，地质结构、土壤、建材以及室内装饰材料等都会产生放射性氡污染，那么氡气属于（ ）。",
        "imageName": "image254.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["A", "D"],
        "note": "氡气是自然界中存在的天然放射性惰性气体，衰变时释放α粒子，属于天然的电离辐射源。"
    },
    {
        "id": 162,
        "type": "multiple",
        "question": "电离辐射广泛应用于工业，包括（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "电线辐照加工", "img": "image255.jpg" }, 
            "B": { "text": "探伤", "img": "image256.jpg" }, 
            "C": { "text": "核子仪", "img": "image257.jpg" }, 
            "D": { "text": "测井", "img": "image258.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "电线电缆辐照交联、工业射线探伤、各种核子秤/料位计以及放射性测井，都是电离辐射在工业领域的典型应用。"
    },
    {
        "id": 163,
        "type": "multiple",
        "question": "以下可以作为探测核爆炸的信息源的有（ ）。",
        "imageName": "image259.jpg",
        "options": { "A": "冲击波", "B": "光辐射", "C": "早期核辐射", "D": "电磁脉冲" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "核爆炸瞬间会产生极强的冲击波、光辐射（热辐射）、早期核辐射（中子和γ射线）以及电磁脉冲，这些都可被专用仪器探测到。"
    },
    {
        "id": 164,
        "type": "multiple",
        "question": "光电倍增管探测器原理如下图所示。关于闪烁探测器工作原理描述正确的是（ ）。",
        "imageName": "image260.jpg",
        "options": { "A": "闪烁光的一部分通过光导被收集到光电倍增管的光阴极上。", "B": "光阴极吸收光子后，发射出光电子。", "C": "光电子在光电倍增管中倍增，倍增的电子束在阳极上被收集，产生输出信号。", "D": "射线进入闪烁体使闪烁体原子、分子电离和激发。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这完整描述了闪烁探测器的工作链条：射线激发闪烁体发光 -> 光子打在光阴极产生电子 -> 电子在倍增管中放大 -> 形成电信号输出。"
    },
    {
        "id": 165,
        "type": "multiple",
        "question": "1896 年，Becquerel 在铀矿物中发现的射线中，在磁场中不偏转的是（ ）。",
        "imageName": "image261.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "中子", "D": "γ 射线" },
        "correctAnswer": ["C", "D"],
        "note": "在电磁场中发生偏转说明粒子带电。中子不带电，γ射线是高能光子（也不带电），因此它们在磁场中都不会发生偏转。"
    },
    {
        "id": 166,
        "type": "multiple",
        "question": "气体探测器均以气体作为探测介质，具有制备简单、性能可靠、成本低廉、使用方便等优点，常用的气体探测器有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "平板型电离室", "img": "image262.jpg" }, 
            "B": { "text": "球形电离室", "img": "image263.jpg" }, 
            "C": { "text": "正比计数器", "img": "image264.jpg" }, 
            "D": { "text": "G-M 计数管", "img": "image265.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "电离室（含平板和球形）、正比计数器和盖革-米勒(G-M)计数管是三大类最经典的气体探测器。"
    },
    {
        "id": 167,
        "type": "multiple",
        "question": "使初始 X 射线强度降到一半的屏蔽材料的厚度为半值层（HVL），使初始 X 射线强度降到 1/10 的屏蔽定材料的厚度为十分之一层（TVL），如下图所示中其说法正确的是（ ）。",
        "imageName": "image266.jpg",
        "options": { "A": "蓝色曲线所代表的屏蔽材料对射线的阻止本领更强。", "B": "使射线强度降低到一半时，蓝色曲线所代表的屏蔽材料所用的厚度更大。", "C": "蓝色材料所代表的屏蔽材料的原子序数比绿色的大。", "D": "蓝色材料所代表的屏蔽材料的原子序数比绿色的小。" },
        "correctAnswer": ["B", "D"],
        "note": "需要更大的厚度才能将射线强度减半，说明该材料的屏蔽能力较弱，通常对应较低的密度和较小的原子序数。"
    },
    {
        "id": 168,
        "type": "multiple",
        "question": "电热器是将电能转换成热能的设备，作为热源，它属于（ ）。",
        "imageName": "image267.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "电热器产生的是红外热辐射，能量极低不能引起电离，属于非电离辐射；且是人类制造的，属于人工辐射。"
    },
    {
        "id": 169,
        "type": "multiple",
        "question": "基站是移动设备接入互联网的接口设备，是指在一定的无线电覆盖区中，通过移动通信交换中心，与移动电话终端之间进行信息传递的无线电收发信电台，属于（ ）。",
        "imageName": "image268.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "基站发射的是射频电磁波，不足以引起原子电离，属于非电离的人工辐射。"
    },
    {
        "id": 170,
        "type": "multiple",
        "question": "收音机是用电能将电波信号转换并能收听广播电台发射音频信号的一种机器，它属于（ ）。",
        "imageName": "image269.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "收音机接收的是无线电波，属于非电离辐射的范畴。"
    },
    {
        "id": 171,
        "type": "multiple",
        "question": "电弧焊是指以电弧作为热源，利用空气放电的物理现象，将电能转换为焊接所需的热能和机械能，从而达到连接金属的目的。它属于（ ）。",
        "imageName": "image270.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "电弧焊主要产生强光、紫外线和热辐射，均属非电离辐射。"
    },
    {
        "id": 172,
        "type": "multiple",
        "question": "高压线通常指的是输送 10kV（含 10kV）以上电压的输电线路。它属于（ ）。",
        "imageName": "image271.jpg",
        "options": { "A": "电离辐射", "B": "非电离辐射", "C": "人工辐射", "D": "天然辐射" },
        "correctAnswer": ["B", "C"],
        "note": "高压线周围产生的是极低频的电磁场，属于非电离辐射。"
    },
    {
        "id": 173,
        "type": "multiple",
        "question": "人类在地球一直受到天然辐射源的照射，关于下图中天然辐射的来源说法正确的是（ ）。",
        "imageName": "image272.jpg",
        "options": { "A": "天然辐射源主要来自宇宙射线、宇生和原生放射性核素。", "B": "宇宙射线来自太阳和星际空间。", "C": "宇宙射线与大气层中和地球表面氧、氮等多种元素的原子核相互作用后产生的放射性核素称作宇生放射性核素。", "D": "自地球形成以来，地壳内就存在放射性核素，称为原生放射性核素或陆生放射性核素。" },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这四个选项完整地概括了地球天然本底辐射的三大来源及其成因。"
    },
    {
        "id": 174,
        "type": "multiple",
        "question": "如图所示照射方式可分为外照射、内照射和混合照射，以下说法中错误的是（ ）。",
        "imageName": "image273.jpg",
        "options": { "A": "外照射可以是单向照射或多向照射，后者的效应大于前者。", "B": "对于外照射的危害，n<γ、X>β>α。", "C": "对于内照射的危害，α<β、γ、X。", "D": "通常能量的 α 粒子不能穿过人体的表面的死层，故 α 粒子外照射一般不能对人体造成伤害。" },
        "correctAnswer": ["B", "C"],
        "note": "对于外照射危害，中子(n)和γ、X射线穿透力强，危害最大，通常是 n、γ、X > β > α。对于内照射，α粒子电离密度极大，危害远大于β和γ，所以C选项的符号反了。"
    },
    {
        "id": 175,
        "type": "multiple",
        "question": "在短时大剂量辐射的医疗反应中所接受的剂量与相应的医疗反应描述不相符的是（ ）。",
        "imageName": "image274.jpg",
        "options": { "A": "死亡", "B": "腹泻", "C": "内出血", "D": "暂时脱发" },
        "correctAnswer": ["C", "D"],
        "note": "（注：此题结合图表考察）通常在极高剂量下才会迅速出现严重内出血等症状，而某些低剂量区间的反应描述如果错位即为不相符项。"
    },
    {
        "id": 176,
        "type": "multiple",
        "question": "下图是电离辐射生物效应中的确定性效应，关于确定性效应的观点错误的是（ ）。",
        "imageName": "image275.jpg",
        "options": { "A": "发生严重程度和机率都随剂量变化而变化", "B": "即使剂量很小，也有可能发生效应", "C": "发生概率随受照剂量增加而增加，而严重程度与受照剂量无关", "D": "存在剂量阈值" },
        "correctAnswer": ["B", "C"],
        "note": "选项B和C描述的是“随机性效应”的特征（无阈值、严重程度与剂量无关）。确定性效应有明确的阈值，且严重程度随剂量增加而增加。"
    },
    {
        "id": 177,
        "type": "multiple",
        "question": "不同的细胞具有不同的辐射敏感性，不同的组织也具有不同的敏感性，下列属于不敏感的组织或是器官有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "骨骼", "img": "image276.jpg" }, 
            "B": { "text": "肌肉", "img": "image277.jpg" }, 
            "C": { "text": "胚胎", "img": "image278.jpg" }, 
            "D": { "text": "眼睛", "img": "image279.jpg" } 
        },
        "correctAnswer": ["A", "B"],
        "note": "在人体组织中，骨骼、肌肉和神经组织属于对电离辐射不敏感或轻度敏感的组织。而胚胎和眼睛（晶状体）对辐射非常敏感。"
    },
    {
        "id": 178,
        "type": "multiple",
        "question": "不同的细胞具有不同的辐射敏感性，不同的组织也具有不同的敏感性，下列属于中度敏感的组织或是器官有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "肾上皮细胞", "img": "image280.jpg" }, 
            "B": { "text": "肺上皮细胞", "img": "image281.jpg" }, 
            "C": { "text": "血管", "img": "image282.jpg" }, 
            "D": { "text": "眼晶体", "img": "image283.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "肾脏、肺部、血管内皮以及眼晶体在放射生物学中通常被归类为对电离辐射中度敏感的组织和器官。"
    },
    {
        "id": 179,
        "type": "multiple",
        "question": "不同的细胞具有不同的辐射敏感性，不同的组织也具有不同的敏感性，下列属于高度敏感的组织或是器官有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "胸腺", "img": "image284.jpg" }, 
            "B": { "text": "肠胃上皮细胞", "img": "image285.jpg" }, 
            "C": { "text": "胚胎组织", "img": "image286.jpg" }, 
            "D": { "text": "肾上皮细胞", "img": "image287.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "淋巴组织（如胸腺）、肠胃上皮细胞、造血系统以及胚胎组织细胞分裂异常活跃，属于对辐射高度敏感的组织；而肾上皮细胞属于中度敏感。"
    },
    {
        "id": 180,
        "type": "multiple",
        "question": "由外照射所致的外照射慢性放射病，其临床表现有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "头晕头痛", "img": "image288.jpg" }, 
            "B": { "text": "毛发脱落", "img": "image289.jpg" }, 
            "C": { "text": "心动过缓", "img": "image290.jpg" }, 
            "D": { "text": "眼晶体混浊", "img": "image291.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "长期受到超剂量限值的外照射会引起慢性放射病，症状涵盖神经系统、心血管系统（心动过缓）、毛发脱落及辐射诱发的白内障（眼晶体混浊）等。"
    },
    {
        "id": 181,
        "type": "multiple",
        "question": "外照射引起的急性放射病一般由体外大剂量 X、γ 和中子照射机体引起。以下选项中可能引起急性放射病的有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "核事故", "img": "image292.jpg" }, 
            "B": { "text": "医疗照射", "img": "image293.jpg" }, 
            "C": { "text": "核爆炸", "img": "image294.jpg" }, 
            "D": { "text": "乘坐飞机", "img": "image295.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "急性放射病需要短时间内的大剂量照射。核事故、核武器爆炸以及高剂量的医疗事故可能导致此后果。乘坐飞机受到的宇宙射线剂量极低，不会引发急性放射病。"
    },
    {
        "id": 182,
        "type": "multiple",
        "question": "下图为胚胎发育不同阶段，受 2Gy 剂量的 X 射线照射造成死胎和畸形的发生率的关系图，以下说法中正确的是（ ）。",
        "imageName": "image296.jpg",
        "options": { "A": "随着个体发育过程的推进，其对辐射的敏感性逐渐降低。", "B": "随着个体发育过程的推进，其对辐射的敏感性逐渐增高。", "C": "胚胎在不同的发育阶段，对辐射敏感性呈现不同程度的变化。", "D": "在怀孕的前 50 天辐射对胎儿的危害性最大。" },
        "correctAnswer": ["A", "C", "D"],
        "note": "胚胎早期（如前50天的器官形成期）细胞分裂极其活跃，对辐射的敏感性最高，容易导致畸形或死胎。随着胎儿发育成形，敏感性会呈现逐渐降低的趋势。"
    },
    {
        "id": 183,
        "type": "multiple",
        "question": "辐射与我们息息相关。我们生活中的（ ）都有一定的放射性。",
        "isOptionImage": true,
        "options": { 
            "A": "image297.jpg", 
            "B": "image298.jpg", 
            "C": "image299.jpg", 
            "D": "image300.jpg" 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "生活中的建筑材料、某些食物（如含钾-40的香蕉）、泥土等都含有微量的天然放射性核素。"
    },
    {
        "id": 184,
        "type": "multiple",
        "question": "辐射与我们息息相关。我们生活中的（ ）都有一定的放射性。",
        "isOptionImage": true,
        "options": { 
            "A": "image301.jpg", 
            "B": "image302.jpg", 
            "C": "image303.jpg", 
            "D": "image304.jpg" 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "同上，自然界万物（包括人类自身）都含有一定水平的本底放射性。"
    },
    {
        "id": 185,
        "type": "multiple",
        "question": "辐射与我们息息相关。我们生活中的（ ）都有一定的放射性。",
        "isOptionImage": true,
        "options": { 
            "A": "image305.jpg", 
            "B": "image306.jpg", 
            "C": "image307.jpg", 
            "D": "image308.jpg" 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这也是一道列举常见天然本底辐射源的图片题。"
    },
    {
        "id": 186,
        "type": "multiple",
        "question": "辐射与我们息息相关。我们生活中的（ ）都有一定的放射性。",
        "isOptionImage": true,
        "options": { 
            "A": "image309.jpg", 
            "B": "image310.jpg", 
            "C": "image311.jpg", 
            "D": "image312.jpg" 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "通过多种场景的展示，旨在说明天然放射性无处不在，属于正常的生活环境现象。"
    },
    {
        "id": 187,
        "type": "multiple",
        "question": "γ 射线强度随通过介质层厚度增加而减小，服从指数衰减规律。下图中是相同入射能量下两种不同物质的衰减曲线，以下说法错误的是：（ ）。",
        "imageName": "image313.jpg",
        "options": { "A": "红色曲线所代表的物质的原子序数较大。", "B": "绿色曲线所代表的物质的原子序数较大。", "C": "使射线强度衰减到一半时，红色曲线所代表的物质所需的厚度较大。", "D": "使射线强度衰减到一半时，绿色曲线所代表的物质所需的厚度较大。" },
        "correctAnswer": ["A", "D"],
        "note": "结合题意，红色曲线由于衰减较慢，达到半值层所需厚度更大，说明其屏蔽能力弱、原子序数较小。"
    },
    {
        "id": 188,
        "type": "multiple",
        "question": "γ 射线强度随通过介质层厚度增加而减小，服从指数衰减规律。下图中是相同入射能量下两种不同物质的衰减曲线，以下说法错误的是：（ ）。",
        "imageName": "image314.jpg",
        "options": { "A": "红色曲线所代表的物质的衰减因子较大。", "B": "绿色曲线所代表的物质的衰减因子较大。", "C": "红色曲线所代表的物质对 γ 射线的屏蔽作用较大。", "D": "绿色曲线所代表的物质对 γ 射线的屏蔽作用较大。" },
        "correctAnswer": ["A", "C"],
        "note": "红色曲线对应的物质所需屏蔽厚度大，说明其衰减因子较小，屏蔽作用较弱。"
    },
    {
        "id": 189,
        "type": "multiple",
        "question": "γ 射线强度随通过介质层厚度增加而减小，服从指数衰减规律。下图中是相同入射能量下两种不同物质的衰减曲线，以下说法正确的是：（ ）。",
        "imageName": "image315.jpg",
        "options": { "A": "红色曲线所代表的物质的原子序数较大。", "B": "绿色曲线所代表的物质的原子序数较大。", "C": "使射线强度衰减到一半时，红色曲线所代表的物质所需的厚度较大。", "D": "使射线强度衰减到一半时，绿色曲线所代表的物质所需的厚度较大。" },
        "correctAnswer": ["B", "C"],
        "note": "绿色曲线衰减极快，说明其原子序数大（密度大）；红色曲线衰减慢，减弱到一半所需的物理厚度就更大。"
    },
    {
        "id": 190,
        "type": "multiple",
        "question": "1896 年，Becquerel 在铀矿物中发现的射线中，在磁场中偏转的是（ ）。",
        "imageName": "image316.jpg",
        "options": { "A": "α 射线", "B": "β 射线", "C": "中子", "D": "γ 射线" },
        "correctAnswer": ["A", "B"],
        "note": "只有带电粒子在磁场中才会受洛伦兹力发生偏转。α射线带正电，β射线带负电，两者都会偏转。"
    },
    {
        "id": 191,
        "type": "multiple",
        "question": "下列关于原子的模型，错误的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image317.jpg", 
            "B": "image318.jpg", 
            "C": "image319.jpg", 
            "D": "image320.jpg" 
        },
        "correctAnswer": ["A", "C"],
        "note": "该题考查经典的原子模型结构（如卢瑟福-玻尔模型），中心为紧凑的核，电子在外部轨道运行。不符合此特征的模型即为错误项。"
    },
    {
        "id": 192,
        "type": "multiple",
        "question": "下列关于原子的模型，正确的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image321.jpg", 
            "B": "image322.jpg", 
            "C": "image323.jpg", 
            "D": "image324.jpg" 
        },
        "correctAnswer": ["B", "D"],
        "note": "正确表现核外电子绕核运动或电子云分布的示意图。"
    },
    {
        "id": 193,
        "type": "multiple",
        "question": "在如下图所示的衰变纲图中，属于 β 衰变的是（ ）。",
        "imageName": "image325.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": ["A", "C", "D"],
        "note": "在衰变纲图中，斜向右下（原子序数加1）或斜向左下（原子序数减1）的箭头均代表β衰变（包含β-和β+）。"
    },
    {
        "id": 194,
        "type": "multiple",
        "question": "在如下图所示的衰变纲图中，属于 γ 衰变的有（ ）。",
        "imageName": "image326.jpg",
        "options": { "A": "a", "B": "b", "C": "c", "D": "d" },
        "correctAnswer": ["C", "D"],
        "note": "垂直向下的直线箭头表示核从激发态到基态的同质异能跃迁，即释放γ射线。"
    },
    {
        "id": 195,
        "type": "multiple",
        "question": "非电离辐射，由于辐射能量低，不能从原子、分子或其他束缚状态放出电子，包括（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "高压线", "img": "image327.jpg" }, 
            "B": { "text": "收音机", "img": "image328.jpg" }, 
            "C": { "text": "基站", "img": "image329.jpg" }, 
            "D": { "text": "微波炉", "img": "image330.jpg" } 
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "这四个选项涉及的设备产生的均是电磁场或低频/射频电磁波，属于典型的非电离辐射。"
    },
    {
        "id": 196,
        "type": "multiple",
        "question": "电离辐射是指其携带的能量足以使物质原子或分子中的电子成为自由态，从而使这些原子或分子发生电离现象的辐射。下列属于电离辐射的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "宇宙射线", "img": "image331.jpg" }, 
            "B": { "text": "放射源", "img": "image332.jpg" }, 
            "C": { "text": "X 光", "img": "image333.jpg" }, 
            "D": { "text": "电焊弧", "img": "image334.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "宇宙射线、人工/天然放射源以及医用X光机都会产生电离辐射。电焊弧光主要产生非电离的紫外线和强光。"
    },
    {
        "id": 197,
        "type": "multiple",
        "question": "电离辐射分为直接电离辐射和间接电离辐射。下列属于直接电离辐射的有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "α 粒子", "img": "image335.jpg" }, 
            "B": { "text": "β 粒子", "img": "image336.jpg" }, 
            "C": { "text": "质子", "img": "image337.jpg" }, 
            "D": { "text": "γ 光子", "img": "image338.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "带电粒子（如α粒子、β粒子、质子）能通过库仑力直接引起物质原子电离，属于直接电离辐射；γ光子不带电，属于间接电离辐射。"
    },
    {
        "id": 198,
        "type": "multiple",
        "question": "间接电离辐射是能够释放出直接电离粒子或引起核反应的非带电粒子，如（ ）等。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "X 射线", "img": "image339.jpg" }, 
            "B": { "text": "γ 射线", "img": "image340.jpg" }, 
            "C": { "text": "质子", "img": "image341.jpg" }, 
            "D": { "text": "中子", "img": "image342.jpg" } 
        },
        "correctAnswer": ["A", "B", "D"],
        "note": "光子（X、γ射线）和中子都是不带电的粒子，它们通过发生次级作用（如光电效应或核反应）间接导致电离。"
    },
    {
        "id": 199,
        "type": "multiple",
        "question": "直接电离辐射是指那些具有足够大的动能，通过碰撞就能引起物质的分子、原子电离的带电粒子，如（ ）等。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "α 粒子", "img": "image343.jpg" }, 
            "B": { "text": "β 粒子", "img": "image344.jpg" }, 
            "C": { "text": "质子", "img": "image345.jpg" }, 
            "D": { "text": "γ 光子", "img": "image346.jpg" } 
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "再次强调，直接电离的前提是粒子自身必须带有电荷。"
    },
    {
        "id": 200,
        "type": "multiple",
        "question": "电离辐射种类很多，包括带电粒子和不带电粒子。不带电粒子有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "α 粒子", "img": "image347.jpg" }, 
            "B": { "text": "γ 射线", "img": "image348.jpg" }, 
            "C": { "text": "β 粒子", "img": "image349.jpg" }, 
            "D": { "text": "荧光X 射线", "img": "image350.jpg" } 
        },
        "correctAnswer": ["B", "D"],
        "note": "γ射线和荧光X射线均为光子辐射，质量为零且不携带电荷。"
    },
    {
        "id": 201,
        "type": "multiple",
        "question": "电离辐射种类很多，包括带电粒子和不带电粒子。带电粒子有（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": { "text": "质子", "img": "image351.jpg" }, 
            "B": { "text": "γ 射线", "img": "image352.jpg" }, 
            "C": { "text": "β 粒子", "img": "image353.jpg" }, 
            "D": { "text": "中子", "img": "image354.jpg" } 
        },
        "correctAnswer": ["A", "C"],
        "note": "质子带正电，β粒子带负（或正）电，属于带电粒子。"
    },
    {
        "id": 202,
        "type": "multiple",
        "question": "由放射源放出的三种射线（α、β、γ），通过电场或磁场，符合实际的是（ ）。",
        "isOptionImage": true,
        "options": { 
            "A": "image355.jpg", 
            "B": "image356.jpg", 
            "C": "image357.jpg", 
            "D": "image358.jpg" 
        },
        "correctAnswer": ["A", "C"],
        "note": "在磁场/电场中，γ射线因不带电径直穿过；α和β射线由于带异种电荷会向相反方向偏转，且由于质量差异，偏转曲率也有所不同。"
    },
    {
        "id": 203,
        "type": "multiple",
        "question": "非电离辐射，由于辐射能量低，不能从原子、分子或其他束缚状态放出电子，包括（ ）。",
        "imageName": "image359.jpg",
        "options": { "A": "紫外线", "B": "热辐射", "C": "可见光", "D": "无线电波", "E": "微波" },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这五种类型的电磁波均位于电磁波谱的长波段/低频段，能量不足以引发电离，统称为非电离辐射。"
    },
    {
        "id": 204,
        "type": "multiple",
        "question": "以波的形式传播能量的被称为电磁辐射，波长越短，频率越高，携带的能量也越大。在以下辐射波谱图中，属于电离辐射的有（ ）。",
        "imageName": "image360.jpg",
        "options": { "A": "γ 射线", "B": "X 光", "C": "无线电波", "D": "微波" },
        "correctAnswer": ["A", "B"],
        "note": "在整个电磁波谱中，只有频率极高、波长极短的X射线和γ射线（及其以上的宇宙射线）具有足以使物质电离的能量。"
    }// ... 原来的 204 题 ...
];

// 这是我们现在要装进去的 530 道新题（伽马射线探伤）
const bank2 = [
    {
        "id": 1,
        "type": "single",
        "question": "对于一切可以增加辐射照射的人类活动（或称作实践），电离辐射防护基本原则是（ ）。",
        "options": {
            "A": "实践的正当性、辐射防护优化、个人剂量限值",
            "B": "时间、距离、屏蔽",
            "C": "同时设计、同时施工、同时投入使用",
            "D": "采取屏蔽措施、进行剂量监测、加强行政管理"
        },
        "correctAnswer": "A",
        "note": "电离辐射防护的基本原则主要包括三项：实践的正当性、防护的最优化（ALARA原则）以及个人剂量限值。"
    },
    {
        "id": 2,
        "type": "single",
        "question": "电离辐射标志是（ ）。",
        "isOptionImage": true,
        "options": {
            "A": "image361.jpg",
            "B": "image362.jpg",
            "C": "image363.jpg",
            "D": "image364.jpg"
        },
        "correctAnswer": "A",
        "note": "标准的电离辐射警示标志是三叶草图案。由于四个选项均为图片，此处正确图片对应选项 A。"
    },
    {
        "id": 3,
        "type": "single",
        "question": "辐射事故主要指除核设施事故以外，（ ）丢失、被盗、失控，或者放射性同位素和射线装置失控造成人员受到意外的异常照射或环境放射性污染的事件。",
        "options": {
            "A": "放射源",
            "B": "射线装置",
            "C": "非密封放射性物质",
            "D": "货包"
        },
        "correctAnswer": "A",
        "note": "根据法规定义，此处特指放射源丢失、被盗、失控的情况。"
    },
    {
        "id": 4,
        "type": "single",
        "question": "辐射事故主要指除核设施事故以外，放射性源丢失、被盗、失控，或者放射性物质或者（ ）失控造成人员受到意外的异常照射或环境放射性污染的事件。",
        "options": {
            "A": "放射性物质",
            "B": "射线装置",
            "C": "非密封放射性物质",
            "D": "密封源"
        },
        "correctAnswer": "B",
        "note": "辐射事故的定义中，失控的主体不仅包括放射性同位素（放射源和非密封放射性物质），还包括射线装置。"
    },
    {
        "id": 5,
        "type": "single",
        "question": "以下（ ）事故不是辐射事故。",
        "options": {
            "A": "核技术利用中发生的辐射事故",
            "B": "放射性废物处理、处置设施发生的辐射事故",
            "C": "铀矿冶及伴生矿开发利用中发生的环境辐射污染事故",
            "D": "放射性物质运输中发生了翻车事故，但放射性物质没有泄漏与失控。"
        },
        "correctAnswer": "D",
        "note": "运输中发生翻车但放射性物质未发生泄漏、未失控，且未造成人员异常照射或环境污染的，不构成辐射事故。"
    },
    {
        "id": 6,
        "type": "single",
        "question": "辐射事故主要指放射源丢失、被盗、失控，或者放射性同位素和射线装置失控造成人员受到意外的异常照射或（ ）的事件。",
        "options": {
            "A": "密封源破损",
            "B": "非密封放射性物质丢失",
            "C": "环境放射性污染",
            "D": "射线装置损毁"
        },
        "correctAnswer": "C",
        "note": "辐射事故带来的直接后果有两个层面：一是人员受到意外异常照射，二是造成环境放射性污染。"
    },
    {
        "id": 7,
        "type": "single",
        "question": "发生辐射事故或者运行故障的单位，应当按照（ ）的要求，制定事故或者故障处置实施方案，并在当地人民政府和辐射安全许可证发证机关的监督、指导下实施具体处置工作。",
        "options": {
            "A": "应急计划",
            "B": "应急预案",
            "C": "单位主要领导",
            "D": "上级主管部门"
        },
        "correctAnswer": "B",
        "note": "发生紧急情况时，单位应当严格按照预先制定的应急预案来制定并实施具体的处置方案。"
    },
    {
        "id": 8,
        "type": "single",
        "question": "辐射水平监测所用的仪器类型应当与所涉及的放射性核素的（ ）相适应。",
        "options": {
            "A": "衰变常数",
            "B": "性质",
            "C": "活度",
            "D": "污染程度"
        },
        "correctAnswer": "B",
        "note": "不同性质的射线（如α、β、γ和中子）具有不同的物理特性，必须选用对应探测原理的仪器才能进行有效监测。"
    },
    {
        "id": 9,
        "type": "single",
        "question": "公众的外照射剂量一般依靠测定环境剂量率和统计公众的（ ）来估算。",
        "options": {
            "A": "计数率",
            "B": "性别",
            "C": "停留时间",
            "D": "污染水平"
        },
        "correctAnswer": "C",
        "note": "外照射剂量的计算公式为：剂量 = 剂量率 × 受照时间。因此在环境剂量率已知的情况下，需要统计公众在该环境中的停留时间。"
    },
    {
        "id": 10,
        "type": "single",
        "question": "IV、V类放射源丢失、被盗或失控；或放射性同位素和射线装置失控导致人员受到超过年剂量限值的照射的事故属于（ ）辐射事故。",
        "options": {
            "A": "特别重大",
            "B": "重大",
            "C": "较大",
            "D": "一般"
        },
        "correctAnswer": "D",
        "note": "根据辐射事故的分级标准，涉及较低危险源（IV、V类）丢失、被盗、失控，或者仅导致人员受到超过年剂量限值照射的，被划分为一般辐射事故。"
    },
    {
        "id": 11,
        "type": "single",
        "question": "下列表述符合工作场所监测的目的是（ ）。",
        "options": {
            "A": "为公众受照剂量评价提供资料",
            "B": "满足公众的知情权",
            "C": "检验工作场所是否符合辐射防护标准",
            "D": "为了应付管理部门的检查"
        },
        "correctAnswer": "C",
        "note": "工作场所监测的主要目的是检验该区域的辐射防护措施是否有效，辐射水平是否控制在国家和行业标准允许的范围内，从而保障工作人员的安全。"
    },
    {
        "id": 12,
        "type": "single",
        "question": "工作场所外照射监测最好选用（ ）。",
        "options": {
            "A": "热释光个人剂量计",
            "B": "便携式周围剂量当量率仪",
            "C": "表面污染监测仪",
            "D": "活度计"
        },
        "correctAnswer": "B",
        "note": "便携式周围剂量当量率仪（俗称巡测仪）能够实时、直观地反映空间辐射剂量率的大小，是工作场所外照射常规巡测的最佳选择。个人剂量计主要用于测定人员的累积受照剂量。"
    },
    {
        "id": 13,
        "type": "single",
        "question": "用于工作场所防护监测的便携式剂量率仪除必须经检定合格外，还必须注意（ ）。",
        "options": {
            "A": "仪器的能量响应是否符合要求",
            "B": "是否具有远程传输数据功能",
            "C": "能否具备核素识别功能",
            "D": "是否具备自动扣除本底功能"
        },
        "correctAnswer": "A",
        "note": "仪器的能量响应决定了它能否准确测量特定能量范围的射线。如果现场射线的能量超出了仪器的有效响应范围，测量结果将产生严重偏差。"
    },
    {
        "id": 14,
        "type": "single",
        "question": "工作场所监测内容包括（ ）。",
        "options": {
            "A": "外照射监测、表面污染监测、空气污染监测",
            "B": "陆地γ剂量率监测，宇宙射线剂量率监测",
            "C": "内照射个人剂量监测、外照射个人剂量监测",
            "D": "职业照射个人剂量监测、公众照射个人剂量监测"
        },
        "correctAnswer": "A",
        "note": "工作场所的常规辐射监测主要针对环境状态，分为三大类：空间的外照射水平监测、物体和地面的表面污染监测，以及空气中的放射性气溶胶/气体污染监测。"
    },
    {
        "id": 15,
        "type": "single",
        "question": "核技术利用中，工作场所外照射监测最常见的监测项目是（ ）。",
        "options": {
            "A": "α射线",
            "B": "β射线",
            "C": "γ射线",
            "D": "中子"
        },
        "correctAnswer": "C",
        "note": "在绝大多数核技术利用场景（如伽马射线探伤、工业CT、医疗照射等）中，γ射线（以及X射线）由于穿透力极强，是最主要的外照射危害来源，因此也是最普遍的监测项目。"
    },
    {
        "id": 16,
        "type": "single",
        "question": "工作场所在线监测系统主要的作用是（ ）。",
        "options": {
            "A": "控制工艺过程",
            "B": "监测辐射源的运行状态",
            "C": "控制污染物的排放",
            "D": "提高生产效率"
        },
        "correctAnswer": "B",
        "note": "在线辐射监测系统通过在固定位置实时测量剂量率，可以直观且连续地监测辐射源是否处于安全的运行状态（例如探伤机是否已经安全收源）。"
    },
    {
        "id": 17,
        "type": "single",
        "question": "因工作场所放射源失控或非密封放射性物质工作场所通风系统故障或放射性物质包容失效造成工作场所污染而开展的监测属（ ）。",
        "options": {
            "A": "本底调查",
            "B": "常规监测",
            "C": "退役终态监测",
            "D": "应急监测"
        },
        "correctAnswer": "D",
        "note": "题目描述的情况属于突发性的辐射安全事故。在事故状态下为了评估污染范围、制定救援方案而进行的监测，统称为应急监测。"
    },
    {
        "id": 18,
        "type": "single",
        "question": "下列表述符合辐射监测中环境监测的目的是（ ）。",
        "options": {
            "A": "为个人剂量评价提供资料",
            "B": "为改正工艺和防护提供资料",
            "C": "检验监测对象是否和国家、地方、行业或审管部门的有关规定相符合",
            "D": "为事故受照人员健康监护和医学响应提供资料"
        },
        "correctAnswer": "C",
        "note": "环境监测的核心目的，是检验核技术利用单位周围的环境辐射水平是否满足了国家及审管部门的安全规定，从而证明对公众和环境是安全的。"
    },
    {
        "id": 19,
        "type": "single",
        "question": "关于个人剂量监测结果异常的报告，下列说法正确的是（ ）。",
        "options": {
            "A": "报告个人剂量计使用人即可",
            "B": "报告本单位辐射防护安全负责人即可",
            "C": "报告本单位辐射防护安全负责人和法定代表人即可",
            "D": "报告辐射安全许可证发证机关"
        },
        "correctAnswer": "D",
        "note": "个人剂量异常（如超限值）属于必须上报的监管事项。根据法规要求，除了单位内部通报，必须按规定向颁发辐射安全许可证的生态环境主管部门（发证机关）报告。"
    },
    {
        "id": 20,
        "type": "single",
        "question": "关于固定工作场所在线监测系统应具备的功能，下列不属于必备功能的是（ ）。",
        "options": {
            "A": "可靠性好",
            "B": "具有能谱分析功能",
            "C": "超阈值报警",
            "D": "与防护门联锁"
        },
        "correctAnswer": "B",
        "note": "固定场所的在线监测系统主要用于安全预警，必备功能包括高可靠性、超剂量率阈值报警以及门机联锁控制。复杂的“能谱分析”（识别具体是哪种放射性同位素）通常是专业实验室仪器的功能，并非日常防护在线监测的必备项。"
    },
    {
        "id": 21,
        "type": "single",
        "question": "按监测对象进行分类，可将辐射监测分为（ ）。",
        "options": {
            "A": "环境监测、工作场所监测、流出物监测、个人剂量监测",
            "B": "常规监测、应急监测",
            "C": "常规监测、验收监测、应急监测",
            "D": "常规监测、验收监测、应急监测、退役监测"
        },
        "correctAnswer": "A",
        "note": "按监测对象不同，辐射监测主要分为环境监测、工作场所监测、流出物监测和个人剂量监测四大类。常规、应急等是按监测目的和状态分类的。"
    },
    {
        "id": 22,
        "type": "single",
        "question": "有关电离辐射测量的干扰影响，下列说法正确的是（ ）。",
        "options": {
            "A": "β射线的测量要注意γ射线的影响",
            "B": "β射线的测量要注意α射线的影响",
            "C": "β射线的测量要注意中子的影响",
            "D": "β射线的测量要注意质子的影响"
        },
        "correctAnswer": "A",
        "note": "在进行β射线测量时，由于绝大多数β放射性核素同时伴随发射γ射线，且γ射线穿透力强，容易对β探测器产生干扰，因此需要特别注意扣除γ射线的影响。"
    },
    {
        "id": 23,
        "type": "single",
        "question": "在（ ）测量中，能量分辨率是一个很重要的指标，在实际应用中，应选择能量分辨率好的探测器。",
        "options": {
            "A": "剂量率",
            "B": "个人剂量",
            "C": "活度",
            "D": "能谱"
        },
        "correctAnswer": "D",
        "note": "能谱测量（如γ能谱分析）的目的是区分和识别不同能量的射线，从而确定放射性核素的种类，因此能量分辨率是其最关键的指标。"
    },
    {
        "id": 24,
        "type": "single",
        "question": "外照射个人剂量监测中，执行某项特定的操作开始时进行的监测称（ ）。",
        "options": {
            "A": "常规监测",
            "B": "任务相关监测",
            "C": "特殊监测",
            "D": "场所监测"
        },
        "correctAnswer": "B",
        "note": "为了特定操作或任务（如某次检修、高风险操作）而临时开始和结束的监测，称为任务相关监测，目的是为了评估该单次任务带来的受照剂量。"
    },
    {
        "id": 25,
        "type": "single",
        "question": "有关监测仪器的量程，下列说法正确的是（ ）。",
        "options": {
            "A": "低于或超过量程范围时，仪器还会有读数，但测量结果是不可靠的。",
            "B": "只要仪器有读数，测量结果是可靠的",
            "C": "高于仪器本身本底的读数是可靠的",
            "D": "高于环境本底的读数是可靠的"
        },
        "correctAnswer": "A",
        "note": "任何探测仪器都有其设计的有效量程。如果辐射场强度过高或过低超出此范围，仪器可能出现堵塞或本底涨落干扰，此时的读数不可靠。"
    },
    {
        "id": 26,
        "type": "single",
        "question": "关于个人剂量计的佩带，下列说法正确的是（ ）。",
        "options": {
            "A": "带有防护围裙工作的情况，需要使用两个剂量计，即在围裙内侧佩带个人剂量计，在围裙外侧佩带个人剂量报警仪",
            "B": "带有防护围裙工作的情况，需要使用两个剂量计，即在围裙内侧佩带个人剂量报警仪，在围裙外侧佩带个人剂量计",
            "C": "带有防护围裙工作的情况，需要使用两个剂量计，一个佩带在围裙内侧用来估算皮肤和眼睛的当量剂量，另一个佩带在围裙外侧用来估算有效剂量",
            "D": "带有防护围裙工作的情况，需要使用两个剂量计，一个佩带在围裙内侧用来估算有效剂量，另一个佩带在围裙外侧用来估算皮肤和眼睛的当量剂量"
        },
        "correctAnswer": "D",
        "note": "穿戴铅围裙时，躯干受到保护，因此围裙内侧的剂量计反映的是全身受到的有效剂量；而暴露在外的头颈部等，需要由佩戴在围裙外侧的剂量计来估算其当量剂量。"
    },
    {
        "id": 27,
        "type": "single",
        "question": "外照射个人剂量监测最主要目的是（ ）。",
        "options": {
            "A": "为器官或组织所接受的平均当量剂量或全身有效剂量评价提供资料",
            "B": "为环境影响评价提供资料",
            "C": "为内照射个人剂量评价提供资料",
            "D": "为公众受照剂量评价提供资料"
        },
        "correctAnswer": "A",
        "note": "外照射个人剂量监测主要是为了测定放射工作人员的全身有效剂量或局部器官的当量剂量，从而判定是否符合防护的剂量限值要求。"
    },
    {
        "id": 28,
        "type": "single",
        "question": "辐射工作单位每季度开展的外照射个人剂量监测为（ ）。",
        "options": {
            "A": "常规监测",
            "B": "任务相关监测",
            "C": "特殊监测",
            "D": "场所监测"
        },
        "correctAnswer": "A",
        "note": "法规规定放射工作人员必须进行定期的、连续的个人剂量监测，这类按周期日常进行的监测属于常规监测。"
    },
    {
        "id": 29,
        "type": "single",
        "question": "下列表述最符合工作场所放射性表面污染监测目的的是（ ）。",
        "options": {
            "A": "了解工作场所及人体等放射性表面污染是否符合标准要求",
            "B": "为估算源的释放量提供资料",
            "C": "控制污染物的排放",
            "D": "为公众受照剂量估算提供资料"
        },
        "correctAnswer": "A",
        "note": "表面污染监测主要是为了检查地面、设备以及工作人员体表或衣物上沾染的放射性物质水平，以确认其是否低于规定的控制标准。"
    },
    {
        "id": 30,
        "type": "single",
        "question": "测量β表面污染时，应考虑探测器对（ ）的响应。",
        "options": {
            "A": "α射线",
            "B": "γ射线",
            "C": "中子",
            "D": "重离子"
        },
        "correctAnswer": "B",
        "note": "表面污染仪在测量β射线时，环境中的或者源项伴生的γ射线容易穿透进入探测器造成本底干扰，必须考虑并扣除其对γ射线的响应。"
    },
    {
        "id": 31,
        "type": "single",
        "question": "在异常情况发生或怀疑其发生时进行的外照射个人剂量监测称为（ ）。",
        "options": {
            "A": "常规监测",
            "B": "任务相关监测",
            "C": "特殊监测",
            "D": "场所监测"
        },
        "correctAnswer": "C",
        "note": "当发生辐射事故或怀疑受到意外的高剂量照射时，为了迅速、准确评估人员的异常受照剂量而专门开展的监测，称为特殊监测。"
    },
    {
        "id": 32,
        "type": "single",
        "question": "外照射个人剂量中，可以按季度为周期进行监测的为（ ）。",
        "options": {
            "A": "常规监测",
            "B": "任务监测",
            "C": "特殊监测",
            "D": "均不可以"
        },
        "correctAnswer": "A",
        "note": "常规个人剂量监测是日常例行开展的，国家相关标准要求其监测周期一般为1个月，最长不得超过3个月（即一个季度）。"
    },
    {
        "id": 33,
        "type": "single",
        "question": "用于外照射个人剂量监测最常用仪器是（ ）。",
        "options": {
            "A": "X、γ辐射剂量率仪",
            "B": "α、β表面污染仪",
            "C": "热释光个人剂量计",
            "D": "个人剂量报警仪"
        },
        "correctAnswer": "C",
        "note": "热释光个人剂量计（TLD）或者光释光剂量计（OSL）体积小巧、累积剂量准确且数据可保存，是目前最广泛使用的外照射个人剂量常规监测仪器。"
    },
    {
        "id": 34,
        "type": "single",
        "question": "任务相关的监测，需要配带的监测仪器为（ ）。",
        "options": {
            "A": "个人剂量计",
            "B": "个人剂量计、直读式剂量计",
            "C": "个人剂量计、剂量率仪",
            "D": "个人剂量计、直读式剂量计、个人剂量报警仪"
        },
        "correctAnswer": "D",
        "note": "在执行特定高风险任务时，除了常规的个人剂量计外，还需要佩戴直读式剂量计以便随时查看累积剂量，以及个人剂量报警仪以便在剂量率超标时发出警报。"
    },
    {
        "id": 35,
        "type": "single",
        "question": "外照射个人剂量常规监测周期一般为1个月，最长不得超过（ ）。",
        "options": {
            "A": "2个月",
            "B": "3个月",
            "C": "半年",
            "D": "1年"
        },
        "correctAnswer": "B",
        "note": "根据《电离辐射防护与辐射源安全基本标准》，常规个人剂量监测的周期一般为1个月，为了管理方便，最长不得超过3个月。"
    },
    {
        "id": 36,
        "type": "single",
        "question": "在辐射实践中，人们发展了辐射防护体系，来保护人们免受不必要的或者过量的电离辐射照射。下面哪一个不属于得到国际高度认可的电离辐射防护组织中的一个（ ）。",
        "options": {
            "A": "联合国原子辐射效应科学委员会（UNSCEAR）",
            "B": "国际辐射防护委员会（ICRP）",
            "C": "国际原子能机构（IAEA）",
            "D": "世界卫生组织（WHO）"
        },
        "correctAnswer": "D",
        "note": "联合国原子辐射效应科学委员会、国际辐射防护委员会和国际原子能机构是专门研究和制定辐射防护标准的核心机构，世界卫生组织涵盖范围更广，不属于专门针对电离辐射防护的直接制定组织。"
    },
    {
        "id": 37,
        "type": "single",
        "question": "辐射防护要解决的是辐射应用与辐射危害之间的矛盾，下列关于辐射防护基本任务说法错误的是（ ）。",
        "options": {
            "A": "辐射防护的基本任务是保护环境",
            "B": "保障从事放射性工作的人员和公众的健康和安全，保护他们的后代。",
            "C": "促进原子能事业的发展",
            "D": "只需要考虑经济因素，不需要考虑辐射水平"
        },
        "correctAnswer": "D",
        "note": "辐射防护的基本任务是在保障人员、公众健康和环境安全的前提下促进核技术的发展应用，任何实践都必须考虑辐射水平，不能仅顾及经济因素。"
    },
    {
        "id": 38,
        "type": "single",
        "question": "辐射防护的目的（ ）。",
        "options": {
            "A": "彻底消除辐射的危害",
            "B": "避免确定性效应的发生，将随机性效应的发生率降低到可以合理达到到的最低水平",
            "C": "避免有害的确定性效应的发生",
            "D": "降低随机性效应的发生几率"
        },
        "correctAnswer": "B",
        "note": "国际辐射防护委员会提出的防护双重目的是：避免发生有害的确定性效应，同时将随机性效应的发生概率限制在合理可达的尽量低水平。"
    },
    {
        "id": 39,
        "type": "single",
        "question": "下列关于辐射防护的目的的说法错误的是（ ）。",
        "options": {
            "A": "保护人类",
            "B": "保护环境",
            "C": "限制一切有关辐射照射的实践活动",
            "D": "避免确定性效应的发生，并将随机性效应的发生概率降低到合理可达尽可能低的水平"
        },
        "correctAnswer": "C",
        "note": "辐射防护的目的并非“限制一切有关辐射照射的实践活动”，而是在确认实践具备正当性的前提下，在安全防护的保障中促进辐射应用的发展。"
    },
    {
        "id": 40,
        "type": "single",
        "question": "下列说法错误的是（ ）。",
        "options": {
            "A": "在一些领域里，核技术几乎是不可替代的，或者说是难以替代的",
            "B": "辐射照射，特别是大剂量的辐射照射对人类的健康是有害的",
            "C": "从事辐射探测的活动不需要承担遭受辐射危害的风险",
            "D": "如何解决辐射危害和辐射应用之间的矛盾，就是辐射防护需要解决的问题"
        },
        "correctAnswer": "C",
        "note": "任何涉及电离辐射的实践都伴随着潜在的照射危险。从事辐射探测等相关活动必然存在一定的辐射风险，需要通过正规的防护措施来将其降至可接受的水平。"
    },
    {
        "id": 41,
        "type": "single",
        "question": "我国现行的辐射防护基本安全标准是2002年颁布的《电离辐射防护与辐射源安全基本标准》（ ）。",
        "options": {
            "A": "GB12379-2002",
            "B": "GB8999-2002",
            "C": "GB18871-2002",
            "D": "HJ/T61-2002"
        },
        "correctAnswer": "C",
        "note": "GB18871-2002 是我国目前最核心、最基础的电离辐射防护国家标准，所有辐射工作都必须以此为准绳。"
    },
    {
        "id": 42,
        "type": "single",
        "question": "公众成员所受到的照射剂量限值中，年有效剂量是（ ）。",
        "options": {
            "A": "1mSv/a",
            "B": "20mSv/a",
            "C": "50mSv/a",
            "D": "150mSv/a"
        },
        "correctAnswer": "A",
        "note": "为了保护普通公众，国家标准规定公众成员的年有效剂量限值为 1mSv/a（毫希沃特/年）。"
    },
    {
        "id": 43,
        "type": "single",
        "question": "职业人员所受到的照射剂量限值中，由审管部门决定的连续5年的年平均有效剂量是（ ）。",
        "options": {
            "A": "15mSv/a",
            "B": "50mSv/a",
            "C": "20mSv/a",
            "D": "500mSv/a"
        },
        "correctAnswer": "C",
        "note": "对于放射性工作人员，连续5年的年平均有效剂量限值为 20mSv/a（且任何单一年份不得超过50mSv）。"
    },
    {
        "id": 44,
        "type": "single",
        "question": "我国现行的辐射防护基本安全标准是（ ）年颁布的《电离辐射防护与辐射源安全基本标准》。",
        "options": {
            "A": "2001",
            "B": "1998",
            "C": "2002",
            "D": "1992"
        },
        "correctAnswer": "C",
        "note": "该核心标准（GB18871）是2002年颁布实施的。"
    },
    {
        "id": 45,
        "type": "single",
        "question": "个人剂量限值一般（ ）天然辐射照射剂量。",
        "options": {
            "A": "包括",
            "B": "不包括",
            "C": "等同",
            "D": "小于"
        },
        "correctAnswer": "B",
        "note": "个人剂量限值专门用于限制“人工实践”产生的附加照射，因此不包括天然本底辐射（如宇宙射线、天然放射性核素等）和医疗照射。"
    },
    {
        "id": 46,
        "type": "single",
        "question": "相同厚度的下列物质，哪种对MeV能量量级的γ射线屏蔽效果最好（ ）。",
        "options": {
            "A": "水",
            "B": "水泥",
            "C": "铁",
            "D": "铅"
        },
        "correctAnswer": "D",
        "note": "γ射线的穿透力极强，屏蔽它需要原子序数高、密度大的物质。在常见材料中，铅（Pb）的密度和原子序数最高，因此屏蔽效果最好。"
    },
    {
        "id": 47,
        "type": "single",
        "question": "外照射的防护主要是针对（ ）。",
        "options": {
            "A": "α射线",
            "B": "质子",
            "C": "β射线",
            "D": "γ射线"
        },
        "correctAnswer": "D",
        "note": "α和β射线穿透力较弱，通常在体外很容易被皮肤角质层或普通衣物挡住；而γ射线穿透力极强，是外照射防护（时间、距离、屏蔽）的主要防范对象。"
    },
    {
        "id": 48,
        "type": "single",
        "question": "在具体实践过程中，“剂量分担”常被用于减少放射性工作人员的个人剂量。那么“剂量分担”按方法论分，属于下列哪种辐射方法（ ）。",
        "options": {
            "A": "时间防护法",
            "B": "距离防护法",
            "C": "屏蔽防护法",
            "D": "源项控制法"
        },
        "correctAnswer": "A",
        "note": "“剂量分担”是指安排多人轮换去完成同一项有辐射风险的工作，从而减少每个人在辐射场中的停留时间，因此属于时间防护法。"
    },
    {
        "id": 49,
        "type": "single",
        "question": "对于相同厚度的下列材料，哪种材料对高能X射线的屏蔽效果最好（ ）。",
        "options": {
            "A": "水",
            "B": "聚乙烯",
            "C": "铁",
            "D": "铅"
        },
        "correctAnswer": "D",
        "note": "高能X射线与γ射线的物理性质相同，都是高频电磁波。同样需要高密度、高原子序数的材料（如铅）来进行最有效的屏蔽。"
    },
    {
        "id": 50,
        "type": "single",
        "question": "剂量率与点源距离的关系（ ）。",
        "options": {
            "A": "正比",
            "B": "反比",
            "C": "平方正比",
            "D": "平方反比"
        },
        "correctAnswer": "D",
        "note": "距离防护的核心定律：辐射剂量率与点源距离的平方成反比。即距离增加到原来的2倍，剂量率会降至原来的1/4。"
    },
    {
        "id": 51,
        "type": "single",
        "question": "IAEA是哪一机构的英文缩写（ ）。",
        "options": {
            "A": "联合国原子辐射效应科学委员会",
            "B": "国际辐射防护委员会",
            "C": "国际原子能机构",
            "D": "国际劳工组织"
        },
        "correctAnswer": "C",
        "note": "IAEA 是 International Atomic Energy Agency（国际原子能机构）的缩写。"
    },
    {
        "id": 52,
        "type": "single",
        "question": "辐射防护最优化是指（ ）。",
        "options": {
            "A": "不惜一切代价使个人剂量尽可能低",
            "B": "使得企业的经济损失最小",
            "C": "在考虑经济和社会因素之后，个人受照剂量的大小、受照人数以及受照射的可能性均保持在可合理达到的尽量低水平",
            "D": "优化就是指将个人剂量降到最低值"
        },
        "correctAnswer": "C",
        "note": "最优化（ALARA原则）并不是要求不惜代价降到绝对零，而是在兼顾经济和社会成本的前提下，将辐射剂量保持在“可合理达到的尽量低水平”。"
    },
    {
        "id": 53,
        "type": "single",
        "question": "对于一项实践，只有在考虑了社会、经济和其他有关因素之后，其对受照个人或社会所带来的利益足以弥补其可能引起的辐射危害时，该实践才是正当的，下列理解错误的是（ ）。",
        "options": {
            "A": "利益指的是对社会的利益",
            "B": "任何一项实践，对于不具有正当性的实践以及该实践中的源，不应予于批准",
            "C": "在对复杂的医疗诊断实践中，应逐例进行正当性判断",
            "D": "正当性是指应用辐射带来的利益要足够大，要保证企业能够获益的实践活动"
        },
        "correctAnswer": "D",
        "note": "正当性评判中的“利益”是指对社会和受照个人带来的整体福祉（如医疗诊断治病救人），而不是单纯为了“保证企业获益”这种狭隘的商业利益。"
    },
    {
        "id": 54,
        "type": "single",
        "question": "在相同能量下，哪种射线的外照射危害最大（ ）。",
        "options": {
            "A": "质子",
            "B": "电子",
            "C": "γ射线",
            "D": "阿尔法粒子"
        },
        "correctAnswer": "C",
        "note": "在讨论“外照射”危害时，必须考虑穿透力。阿尔法粒子等带电粒子穿透力极差，无法穿透人体表皮；而γ射线穿透力强，能照射到深部器官，因此外照射危害最大。"
    },
    {
        "id": 55,
        "type": "single",
        "question": "对于控制区，在进出口及其它适当位置处设立（ ）规定的警告标志。",
        "options": {
            "A": "橙色的",
            "B": "醒目的",
            "C": "小的",
            "D": "大的"
        },
        "correctAnswer": "B",
        "note": "法规要求在控制区的进出口必须设置“醒目的”电离辐射警告标志，以警示人员。"
    },
    {
        "id": 56,
        "type": "single",
        "question": "为便于辐射防护管理和职业照射控制，现行的基本安全标准是（ ）。",
        "options": {
            "A": "GB18871-2002",
            "B": "GB18877-2012",
            "C": "GB18883-2002",
            "D": "GB18285-2018"
        },
        "correctAnswer": "A",
        "note": "再次强调，我国辐射防护的最基本、最重要的国家标准是 GB18871-2002。"
    },
    {
        "id": 57,
        "type": "single",
        "question": "下列关于电离辐射的警告标志的设置，描述错误的是（ ）。",
        "options": {
            "A": "警告标志可设置在放射性同位素、含放射源的射线装置的运输工具上",
            "B": "警告标志通常只设置在放射性工作场所入口，出口不需要设置",
            "C": "警告标志可设置在室外、野外作业安全防护区域",
            "D": "警告标志可设置在放射性同位素包装容器、含放射性同位素的设备和射线装置"
        },
        "correctAnswer": "B",
        "note": "根据标准要求，控制区的进出口及其它适当位置都需要设置醒目的警告标志，不能“只设置在入口，出口不需要设置”。"
    },
    {
        "id": 58,
        "type": "single",
        "question": "个人剂量限值一般不包括（ ）。",
        "options": {
            "A": "职业内照射剂量",
            "B": "职业外照射剂量",
            "C": "职业照射剂量",
            "D": "天然辐射照射剂量"
        },
        "correctAnswer": "D",
        "note": "个人剂量限值限制的是人类的“实践活动”带来的额外剂量，不包含自然界本来就有的天然本底辐射剂量以及医疗照射剂量。"
    },
    {
        "id": 59,
        "type": "single",
        "question": "将需要和可能需要（ ）的区域定为控制区。",
        "options": {
            "A": "专门防护手段或安全措施",
            "B": "防护手段",
            "C": "安全措施",
            "D": "人为控制"
        },
        "correctAnswer": "A",
        "note": "控制区是指为了控制正常照射、防止污染扩散，需要或可能需要“专门防护手段或安全措施”的区域。"
    },
    {
        "id": 60,
        "type": "single",
        "question": "关于控制区的设置，下列说法错误的是（ ）。",
        "options": {
            "A": "在进出口设立醒目的警告标志",
            "B": "警告标志通常设置为黄色",
            "C": "控制区通常不需要专门的防护手段或安全措施",
            "D": "控制正常工作条件下的正常照射或防止污染扩散"
        },
        "correctAnswer": "C",
        "note": "控制区的核心定义就是必须采取“专门的防护手段或安全措施”，因此C选项是错误的。"
    },
    {
        "id": 61,
        "type": "single",
        "question": "以下选项中，哪一项不属于外照射的防护方法: （ ）。",
        "options": {
            "A": "时间",
            "B": "距离",
            "C": "源项控制",
            "D": "屏蔽"
        },
        "correctAnswer": "C",
        "note": "外照射防护的三大基本原则是时间、距离和屏蔽。源项控制（如包容、隔离）主要属于内照射防护或根本性的放射源管理范畴。"
    },
    {
        "id": 62,
        "type": "single",
        "question": "将不需要（ ）的区域定为监督区。",
        "options": {
            "A": "人为控制",
            "B": "安全措施",
            "C": "防护手段",
            "D": "专门防护手段或安全措施"
        },
        "correctAnswer": "D",
        "note": "监督区是指不需要采取专门防护手段或安全措施，但需要经常对职业照射条件进行监测和评价的区域。"
    },
    {
        "id": 63,
        "type": "single",
        "question": "关于辐射工作场所的分区，下列说法错误的是（ ）。",
        "options": {
            "A": "为了便于辐射防护管理。",
            "B": "在现行的基本安全标准GB18871-2002中将辐射工作场所进行分区。",
            "C": "放射性工作场所分为监督区和操作区。",
            "D": "为了便于职业照射控制。"
        },
        "correctAnswer": "C",
        "note": "根据国标规定，放射性工作场所通常分为“控制区”和“监督区”，没有“操作区”这种分类标准。"
    },
    {
        "id": 64,
        "type": "single",
        "question": "人工辐射源主要有核设施、核技术应用的辐射源和核试验落下灰等。在人工辐射源中，（ ）是最大的人工辐射源。",
        "options": {
            "A": "工业探伤",
            "B": "核能发电",
            "C": "医疗照射",
            "D": "辐射育种"
        },
        "correctAnswer": "C",
        "note": "在所有人为活动产生的辐射照射中，医疗照射（如X光、CT、放射治疗等）应用最广，对公众造成的集体剂量贡献最大。"
    },
    {
        "id": 65,
        "type": "single",
        "question": "我国居民所受天然辐射年有效剂量是（ ）mSv。",
        "options": {
            "A": "4.2",
            "B": "3.1",
            "C": "2.5",
            "D": "4.8"
        },
        "correctAnswer": "B",
        "note": "根据相关辐射监测统计调查，我国居民受到的天然本底辐射年有效剂量平均约为 3.1 mSv（毫希沃特）。"
    },
    {
        "id": 66,
        "type": "single",
        "question": "天然辐射源主要来自宇宙射线、宇生放射性核素和（ ）。",
        "options": {
            "A": "原生放射性核素",
            "B": "医疗照射",
            "C": "工业探伤",
            "D": "地下核试验"
        },
        "correctAnswer": "A",
        "note": "天然辐射源主要包括来自太空的宇宙射线，以及地球形成时就存在于土壤和岩石中的原生放射性核素（如铀、钍、钾-40等）。"
    },
    {
        "id": 67,
        "type": "single",
        "question": "从辐射产生的来源可将辐射源分为天然辐射源和（ ）。",
        "options": {
            "A": "核电厂",
            "B": "医疗照射",
            "C": "氡照射",
            "D": "人工辐射源"
        },
        "correctAnswer": "D",
        "note": "按照最宏观的来源划分，辐射源只分为自然存在的“天然辐射源”和人类活动产生的“人工辐射源”。"
    },
    {
        "id": 68,
        "type": "single",
        "question": "射线探伤技术应用最广泛的是X射线和γ射线工业探伤技术。以下哪种探伤装置只有在通电运行时才会有辐射安全和防护问题（ ）。",
        "options": {
            "A": "60Co辐射源",
            "B": "192Ir辐射源",
            "C": "X射线探伤机",
            "D": "137Cs辐射源"
        },
        "correctAnswer": "C",
        "note": "放射性同位素（钴-60、铱-192、铯-137）自发衰变产生射线，不受断电影响。而X射线机属于射线装置，只有在通电并激发的情况下才会产生X射线。"
    },
    {
        "id": 69,
        "type": "single",
        "question": "吸收剂量率的国际标准单位是（ ）。",
        "options": {
            "A": "希沃特每秒（Sv/s）",
            "B": "戈瑞每秒（Gy/s）",
            "C": "居里（Ci）",
            "D": "贝克勒尔（Bq）"
        },
        "correctAnswer": "B",
        "note": "吸收剂量的国际单位是戈瑞（Gy），因此吸收剂量随时间的变化率（剂量率）单位是戈瑞每秒（Gy/s）。"
    },
    {
        "id": 70,
        "type": "single",
        "question": "当量剂量的国际单位名称是（ ）。",
        "options": {
            "A": "Ci",
            "B": "Sv",
            "C": "Gy",
            "D": "Bq"
        },
        "correctAnswer": "B",
        "note": "当量剂量考虑了不同辐射类型的生物学效应差异（引入了辐射权重因子），其国际单位是希沃特（Sv）。"
    },
    {
        "id": 71,
        "type": "single",
        "question": "不属于辐射损伤确定性效应特点的是（ ）。",
        "options": {
            "A": "辐射效应的严重程度与剂量有关。",
            "B": "剂量越大，辐射效应越严重。",
            "C": "有明确的阈值。",
            "D": "主要针对小剂量、小剂量率的慢性照射。"
        },
        "correctAnswer": "D",
        "note": "确定性效应通常发生在大剂量、高剂量率的急性照射下（如放射性烧伤）。小剂量、慢性的照射往往引发的是随机性效应（如致癌）。"
    },
    {
        "id": 72,
        "type": "single",
        "question": "下列关于组织权重因子的描述正确的是（ ）。",
        "options": {
            "A": "为了比较不同类型的辐射引起的不同生物学效应。",
            "B": "无量纲，它描述了不同组织或器官对全身总危害的贡献。",
            "C": "为了统一表示各射线对机体的危害效应。",
            "D": "以上说法均不正确。"
        },
        "correctAnswer": "B",
        "note": "组织权重因子（无量纲）反映了身体不同组织或器官对辐射的敏感程度，用于将各个器官的当量剂量换算成代表全身总危害的有效剂量。"
    },
    {
        "id": 73,
        "type": "single",
        "question": "为了统一表示各射线对机体的危害效应，针对某个组织或器官的剂量平均值是指（ ）。",
        "options": {
            "A": "当量剂量",
            "B": "吸收剂量",
            "C": "照射量",
            "D": "辐射剂量"
        },
        "correctAnswer": "A",
        "note": "吸收剂量只反映能量吸收，而当量剂量引入了辐射权重因子，把各类射线统一转化，以表示它们对某一特定组织或器官的实际生物危害效应。"
    },
    {
        "id": 74,
        "type": "single",
        "question": "关于电离辐射生物学效应分类以下说法错误的是（ ）。",
        "options": {
            "A": "按照射方式分为内照射与外照射",
            "B": "按照射剂量率大小分为急性效应与慢性效应",
            "C": "效应出现一般均较快",
            "D": "按效应出现的时间分为早期效应与远期效应"
        },
        "correctAnswer": "C",
        "note": "辐射的生物学效应并不都是快速出现的，存在潜伏期甚至长达数十年后才显现的远期效应（如白血病或实体癌）。"
    },
    {
        "id": 75,
        "type": "single",
        "question": "生物效应按照效应发生和照射剂量的关系可分为（ ）。",
        "options": {
            "A": "急性效应和慢性效应",
            "B": "内照射和外照射",
            "C": "远期效应和早期效应",
            "D": "确定性效应和随机性效应"
        },
        "correctAnswer": "D",
        "note": "按效应发生概率、严重程度与剂量之间的关系，生物效应分为确定性效应（有绝对的剂量阈值）和随机性效应（概率随剂量增加而增加，无阈值）。"
    },
    {
        "id": 76,
        "type": "single",
        "question": "以下关于影响辐射生物学效应的生物因素说法不正确的是（ ）。",
        "options": {
            "A": "种系演化程度越高，机体越复杂，对辐射越不敏感。",
            "B": "妇女在怀孕前50天辐射对胎儿影响大。",
            "C": "不同的细胞具有不同的辐射敏感性。",
            "D": "DNA含量高的细胞比DNA含量低的细胞更可能受到电离辐射损伤。"
        },
        "correctAnswer": "A",
        "note": "生物学规律恰恰相反：通常种系演化程度越高、机体结构越复杂的生物，对辐射反而越敏感。人类对辐射的敏感度远高于低等生物（如细菌、病毒）。"
    },
    {
        "id": 77,
        "type": "single",
        "question": "确定性效应有剂量阈值，且与剂量大小有关。下列哪项可用于描述确定性效应（ ）。",
        "options": {
            "A": "严重程度",
            "B": "发生几率",
            "C": "致癌效应",
            "D": "遗传效应"
        },
        "correctAnswer": "A",
        "note": "确定性效应的核心特征是：一旦受照剂量超过阈值，剂量的增加会直接导致损伤“严重程度”的加剧（如皮肤红斑变重甚至坏死）。"
    },
    {
        "id": 78,
        "type": "single",
        "question": "受照射个体体细胞损伤而致本身发生的各种效应称为（ ）。",
        "options": {
            "A": "随机性效应",
            "B": "确定性效应",
            "C": "躯体效应",
            "D": "遗传效应"
        },
        "correctAnswer": "C",
        "note": "辐射损伤如果发生在受照者本人的体细胞上，引起的效应称为躯体效应；如果发生在生殖细胞上并影响到后代，则称为遗传效应。"
    },
    {
        "id": 79,
        "type": "single",
        "question": "辐射致癌属于哪种效应（ ）。",
        "options": {
            "A": "急性效应",
            "B": "遗传效应",
            "C": "确定性效应",
            "D": "随机性效应"
        },
        "correctAnswer": "D",
        "note": "辐射致癌属于随机性效应，它没有明确的剂量安全线（无绝对阈值），且发病的“概率”随着剂量的增加而变大。"
    },
    {
        "id": 80,
        "type": "single",
        "question": "下列选项中，与随机性效应无关的是（ ）。",
        "options": {
            "A": "辐射效应严重程度",
            "B": "致癌效应",
            "C": "辐射效应发生概率",
            "D": "遗传效应"
        },
        "correctAnswer": "A",
        "note": "随机性效应的发生概率与受照剂量成正比，但一旦发生（例如得了癌症），其“严重程度”与最初受到的辐射剂量大小无关。"
    },
    {
        "id": 81,
        "type": "single",
        "question": "γ射线是从（ ）发出的。",
        "options": {
            "A": "核外电子放出的光子",
            "B": "原子核能级跃迁退激时释放出的射线",
            "C": "质子发出的光子",
            "D": "中子发出光子"
        },
        "correctAnswer": "B",
        "note": "γ射线是处于激发态的原子核在向较低能级跃迁（退激）时，释放出的高能电磁波（光子）。它来源于原子核内部。"
    },
    {
        "id": 82,
        "type": "single",
        "question": "核素的含义是（ ）。",
        "options": {
            "A": "不同的核素是指不同的核外电子。",
            "B": "核素是指具有一定数目质子和一定数目中子的一种原子。",
            "C": "不同的核素必定是不同的同位素。",
            "D": "核素就是元素。"
        },
        "correctAnswer": "B",
        "note": "核素是具有特定质子数、中子数及其特定核能态的原子类别。元素只看质子数，而同一种元素由于中子数不同会包含多种核素（同位素）。"
    },
    {
        "id": 83,
        "type": "single",
        "question": "下面是同位素的是（ ）。",
        "options": {
            "A": "208Tl和 208Pb",
            "B": "90Sr和 91Y",
            "C": "1H、2H和 3H",
            "D": "60Co和 60mCo"
        },
        "correctAnswer": "C",
        "note": "同位素是指质子数相同但中子数不同的核素。1H（氕）、2H（氘）、3H（氚）质子数都是1，是氢元素的同位素。"
    },
    {
        "id": 84,
        "type": "single",
        "question": "元素周期表是（ ）。",
        "options": {
            "A": "伦琴发明的。",
            "B": "元素排列是没有规律的。",
            "C": "同一个格子中的原子，其核内中子数都相同。",
            "D": "将具有相同质子数的原子放在同一个格子里形成的表。"
        },
        "correctAnswer": "D",
        "note": "元素周期表是按照原子序数（即原子核内的质子数）排列的，同一个格子代表同一种元素（质子数相同）。"
    },
    {
        "id": 85,
        "type": "single",
        "question": "Co-60的半衰期约为5年，一枚20年前购买的Co-60源，现在的活度是原来的（ ）。",
        "options": {
            "A": "二分之一",
            "B": "四分之一",
            "C": "八分之一",
            "D": "十六分之一"
        },
        "correctAnswer": "D",
        "note": "20年相当于过了4个半衰期（20÷5=4）。每次半衰期活度减半，经过4次就是 (1/2)^4 = 1/16。"
    },
    {
        "id": 86,
        "type": "single",
        "question": "元素是原子核内具有相同（ ）的原子的总称。",
        "options": {
            "A": "核子数",
            "B": "质子数",
            "C": "中子数",
            "D": "电子数"
        },
        "correctAnswer": "B",
        "note": "决定一个原子属于哪种元素的唯一标准是其原子核内的质子数。"
    },
    {
        "id": 87,
        "type": "single",
        "question": "标识原子，可以用（ ）。",
        "options": {
            "A": "质子数",
            "B": "中子数",
            "C": "核外电子数",
            "D": "质子数和中子数"
        },
        "correctAnswer": "D",
        "note": "要完整标识一种特定的原子（即具体指明某一种核素），必须同时知道它的质子数和中子数。"
    },
    {
        "id": 88,
        "type": "single",
        "question": "稳定核素和不稳定核素的数量，正确的是（ ）。",
        "options": {
            "A": "稳定核素多",
            "B": "不稳定核素多",
            "C": "稳定核素和不稳定核素一样多",
            "D": "不清楚"
        },
        "correctAnswer": "B",
        "note": "在自然界和人工合成的核素中，放射性（不稳定）核素有两千多种，远远多于只有几百种的稳定核素。"
    },
    {
        "id": 89,
        "type": "single",
        "question": "衰变就是（ ）。",
        "options": {
            "A": "原子衰老、死亡了",
            "B": "原子核衰老、死亡了",
            "C": "质子和中子衰老、死亡了",
            "D": "原子核发射粒子或射线变成其他的原子核的过程"
        },
        "correctAnswer": "D",
        "note": "放射性衰变是不稳定原子核自发地发射出射线（如α、β、γ射线），从而改变其质子数或中子数，转变成另一种更稳定的原子核的物理过程。"
    },
    {
        "id": 90,
        "type": "single",
        "question": "每种元素与核内包含的质子数的关系，正确的是（ ）。",
        "options": {
            "A": "没有关系",
            "B": "不唯一",
            "C": "不知道",
            "D": "唯一的"
        },
        "correctAnswer": "D",
        "note": "质子数决定了元素的种类，因此每种元素都与一个特定的、唯一的质子数严格对应。"
    },
    {
        "id": 91,
        "type": "single",
        "question": "7/3Li4中，各个数字的含义正确的是（ ）。",
        "options": {
            "A": "左上角的7表示的是质子数",
            "B": "右下角的3表示的是质子数",
            "C": "左上角的7表示的是核子数，等于质子数加上中子数",
            "D": "左下角的3表示的是中子数"
        },
        "correctAnswer": "C",
        "note": "在核素符号的表示方法中，左上角的数字代表质量数（即核子总数，质子数+中子数），左下角的数字代表质子数。"
    },
    {
        "id": 92,
        "type": "single",
        "question": "原子质量的大小与（ ）相关。",
        "options": {
            "A": "原子核的核子数",
            "B": "中子数",
            "C": "质子数",
            "D": "核外电子数"
        },
        "correctAnswer": "A",
        "note": "原子的质量几乎全部集中在原子核上，核外电子质量极小可忽略。因此原子质量主要由核子数（质子和中子的总和）决定。"
    },
    {
        "id": 93,
        "type": "single",
        "question": "β粒子是（ ）。",
        "options": {
            "A": "正电子也可能是负电子",
            "B": "紫外线",
            "C": "光子",
            "D": "原子核"
        },
        "correctAnswer": "A",
        "note": "β衰变分为β+和β-衰变。发射出来的β粒子可能是正电子，也可能是负电子。"
    },
    {
        "id": 94,
        "type": "single",
        "question": "β辐射是（ ）。",
        "options": {
            "A": "是氦的原子核",
            "B": "是光子",
            "C": "是不稳定原子核发射的电子",
            "D": "是核外电子"
        },
        "correctAnswer": "C",
        "note": "β辐射的本质是不稳定的原子核在发生衰变时，从原子核内部抛出的高速电子流。"
    },
    {
        "id": 95,
        "type": "single",
        "question": "γ、χ射线的常用屏蔽材料是（ ）。",
        "options": {
            "A": "石蜡",
            "B": "有机玻璃",
            "C": "铝",
            "D": "铅"
        },
        "correctAnswer": "D",
        "note": "γ射线和X射线具有很强的穿透力，需要原子序数高、密度大的物质来屏蔽，铅是首选的常用材料。"
    },
    {
        "id": 96,
        "type": "single",
        "question": "不属于中子和物质的主要相互作用形式是（ ）。",
        "options": {
            "A": "弹性散射",
            "B": "非弹性散射",
            "C": "慢化",
            "D": "光电效应"
        },
        "correctAnswer": "D",
        "note": "中子不带电，主要通过与原子核发生碰撞（弹性、非弹性散射，导致中子慢化）或被原子核吸收。光电效应是光子（如γ、X射线）与核外电子相互作用的现象。"
    },
    {
        "id": 97,
        "type": "single",
        "question": "一般来说，射线穿透能力排序正确的是（ ）。",
        "options": {
            "A": "α粒子<β粒子<γ射线",
            "B": "α粒子<γ射线<β粒子",
            "C": "γ射线<α粒子<β粒子",
            "D": "β粒子<γ射线<α粒子"
        },
        "correctAnswer": "A",
        "note": "α粒子质量大带双电荷，极易损失能量，穿透力最弱；β粒子次之；γ射线属于高能电磁波，没有静止质量和电荷，穿透力最强。"
    },
    {
        "id": 98,
        "type": "single",
        "question": "非电离辐射是指能量（ ），不能从原子、分子或其他束缚态放出电子的辐射。",
        "options": {
            "A": "高",
            "B": "低",
            "C": "强",
            "D": "多"
        },
        "correctAnswer": "B",
        "note": "非电离辐射（如微波、无线电波）能量较低，不足以克服电子的束缚能使原子发生电离。"
    },
    {
        "id": 99,
        "type": "single",
        "question": "关于某放射性核素的衰变常数，正确的是（ ）。",
        "options": {
            "A": "是一个固定值",
            "B": "与其温度有关",
            "C": "与海拔有关",
            "D": "今年和去年不同"
        },
        "correctAnswer": "A",
        "note": "衰变常数是放射性核素固有的物理属性，不受温度、压力、化学状态等外界环境条件的影响，是一个固定值。"
    },
    {
        "id": 100,
        "type": "single",
        "question": "半衰期的表示方法是（ ）。",
        "options": {
            "A": "T1/2",
            "B": "1/2T",
            "C": "T-1/2",
            "D": "D-1/2"
        },
        "correctAnswer": "A",
        "note": "物理学中，放射性核素的半衰期通用符号表示为 T1/2。"
    },
    {
        "id": 101,
        "type": "single",
        "question": "中子是从（ ）发射出的。",
        "options": {
            "A": "不稳定原子核",
            "B": "核外电子",
            "C": "原子核能级跃迁退激时",
            "D": "电子束快速减慢时"
        },
        "correctAnswer": "A",
        "note": "中子存在于原子核内部，只有当不稳定的原子核发生特定衰变或核反应（如自发裂变）时，才会被发射出来。"
    },
    {
        "id": 102,
        "type": "single",
        "question": "X射线是（ ）。",
        "options": {
            "A": "是光子",
            "B": "是原子核发射的电子",
            "C": "是氢的原子核",
            "D": "是核外电子"
        },
        "correctAnswer": "A",
        "note": "X射线与γ射线本质上一样，都是高频电磁波（光子）。区别在于γ射线来自原子核内部，而X射线通常是由核外电子的跃迁或高速电子减速（韧致辐射）产生的。"
    },
    {
        "id": 103,
        "type": "single",
        "question": "X射线的性质是（ ）。",
        "options": {
            "A": "带负电",
            "B": "带正电",
            "C": "有质量",
            "D": "不带电"
        },
        "correctAnswer": "D",
        "note": "X射线作为电磁波（光子），没有静止质量，也不带任何电荷。"
    },
    {
        "id": 104,
        "type": "single",
        "question": "关于原子的大小，下列说法正确的是（ ）。",
        "options": {
            "A": "原子的核心是原子核，和整个原子的大小差不多",
            "B": "原子内部被原子核和电子占满了",
            "C": "电子与原子核一样大",
            "D": "每个原子包含一个原子核以及若干个电子，体积非常小"
        },
        "correctAnswer": "D",
        "note": "原子极其微小，且其内部极其空旷。如果把原子比作一个庞大的体育场，原子核就只相当于场地中央的一只蚂蚁。"
    },
    {
        "id": 105,
        "type": "single",
        "question": "下面关于原子的说法，正确的是（ ）。",
        "options": {
            "A": "原子是组成物质的极小粒子",
            "B": "原子由原子核和核外电子组成",
            "C": "原子核由电子和质子组成",
            "D": "核外电子紧贴在原子核的外面"
        },
        "correctAnswer": "B",
        "note": "原子由中心的原子核（包含质子和中子）以及在外部空间绕核运动的电子共同组成。"
    },
    {
        "id": 106,
        "type": "single",
        "question": "关于中子的电性，正确的是（ ）。",
        "options": {
            "A": "中子不带电",
            "B": "中子带正电",
            "C": "中子带负电",
            "D": "有的中子带正电，有的带负电"
        },
        "correctAnswer": "A",
        "note": "顾名思义，“中”即中性。中子在物理性质上不带任何电荷。"
    },
    {
        "id": 107,
        "type": "single",
        "question": "中子是否带电（ ）。",
        "options": {
            "A": "带正电",
            "B": "带负电",
            "C": "不带电",
            "D": "不确定"
        },
        "correctAnswer": "C",
        "note": "中子不带电，这也是为什么中子射线具有极强穿透力的原因（不受原子核和电子的库仑力排斥）。"
    },
    {
        "id": 108,
        "type": "single",
        "question": "原子不带电，是因为（ ）。",
        "options": {
            "A": "原子不带任何电荷",
            "B": "核外电子不带电",
            "C": "原子核不带电",
            "D": "原子核带正电，核外电子带同样数量的负电"
        },
        "correctAnswer": "D",
        "note": "原子的电中性是因为原子核内带正电的质子数量，刚好与核外带负电的电子数量相等，正负抵消。"
    },
    {
        "id": 109,
        "type": "single",
        "question": "电离辐射能使物质原子或分子中的电子成为自由态，原因是（ ）。",
        "options": {
            "A": "质量重",
            "B": "携带有足够的能量",
            "C": "体积大",
            "D": "速度快"
        },
        "correctAnswer": "B",
        "note": "电离发生的根本条件是辐射粒子必须携带有足够高的能量，只有这样才能“撞飞”被束缚在原子周围的核外电子。"
    },
    {
        "id": 110,
        "type": "single",
        "question": "辐射是具有（ ）的波或粒子。",
        "options": {
            "A": "能量",
            "B": "质量",
            "C": "数量",
            "D": "速度"
        },
        "correctAnswer": "A",
        "note": "辐射的物理学定义就是能量以电磁波或粒子的形式向外传送的过程。因此它的核心特征是携带着能量。"
    },
    {
        "id": 111,
        "type": "single",
        "question": "辐射的本质是（ ）。",
        "options": {
            "A": "能量",
            "B": "质量",
            "C": "数量",
            "D": "速度"
        },
        "correctAnswer": "A",
        "note": "不论是光子还是实物粒子（如α、β），辐射的本质就是在空间中传播的能量。"
    },
    {
        "id": 112,
        "type": "single",
        "question": "非电离辐射是指能量低，不能从原子、分子或其他束缚释放出（ ）的辐射。",
        "options": {
            "A": "电子",
            "B": "质子",
            "C": "中子",
            "D": "原子"
        },
        "correctAnswer": "A",
        "note": "电离的过程就是电子脱离原子束缚的过程。非电离辐射因为能量不足，无法把电子轰击出来。"
    },
    {
        "id": 113,
        "type": "single",
        "question": "电离辐射能使物质原子或分子中的电子成为（ ）。",
        "options": {
            "A": "自由态",
            "B": "质子",
            "C": "中子",
            "D": "消失"
        },
        "correctAnswer": "A",
        "note": "电子获得足够的能量脱离原子的引力束缚后，便成为了可以自由运动的“自由电子”（即自由态）。"
    },
    {
        "id": 114,
        "type": "single",
        "question": "（ ）辐射是指具有足够大的动能，通过碰撞就能引起物质的分子、原子电离的带电粒子，如β粒子、质子和α粒子等。",
        "options": {
            "A": "微波",
            "B": "手机辐射",
            "C": "间接电离",
            "D": "直接电离"
        },
        "correctAnswer": "D",
        "note": "带电粒子（如α、β粒子）因为本身带电，可以直接依靠库仑力把物质原子中的电子拉出来，这被称为“直接电离”。而不带电的射线（如X、γ射线、中子）则是“间接电离”。"
    },
    {
        "id": 115,
        "type": "single",
        "question": "放射性活度指的是（ ）。",
        "options": {
            "A": "核素的化学性质是否活跃",
            "B": "稳定核素是否能发生衰变的概率",
            "C": "放射性核素单位时间内发生衰变的原子数",
            "D": "核素的寿命长短"
        },
        "correctAnswer": "C",
        "note": "放射性活度是衡量放射源“强弱”的物理量，定义为在给定的时间内，放射性核素自发衰变的原子核数目。"
    },
    {
        "id": 116,
        "type": "single",
        "question": "关于放射性活度，正确的是（ ）。",
        "options": {
            "A": "放射性核素一天内衰变的原子数",
            "B": "放射性核素一周内衰变的原子数",
            "C": "放射性核素一年内衰变的原子数",
            "D": "放射性核素单位时间内发生衰变的原子数"
        },
        "correctAnswer": "D",
        "note": "活度是一个“速率”概念，指单位时间内的衰变次数。其国际标准单位是贝可勒尔（Bq），1 Bq 表示每秒钟发生1次衰变。"
    },
    {
        "id": 117,
        "type": "single",
        "question": "放射性核素是（ ）。",
        "options": {
            "A": "稳定核素",
            "B": "不稳定核素",
            "C": "所有的已发现的核素",
            "D": "所有的原子"
        },
        "correctAnswer": "B",
        "note": "之所以被称为“放射性”，就是因为该原子的核态不稳定，它必须通过放射出粒子或能量（衰变）才能转变为相对稳定的状态。"
    },
    {
        "id": 118,
        "type": "single",
        "question": "一般衰变发生在（ ）上。",
        "options": {
            "A": "质子",
            "B": "中子",
            "C": "原子核",
            "D": "分子"
        },
        "correctAnswer": "C",
        "note": "放射性衰变是原子核内部自发发生的结构或能量状态变化的过程，因此衰变发生在原子核上。"
    },
    {
        "id": 119,
        "type": "single",
        "question": "放射性指的是（ ）。",
        "options": {
            "A": "不稳定核素发生衰变，同时发射出特有的射线",
            "B": "原子分裂了",
            "C": "原子重新排列组合生成新物质的过程",
            "D": "原子电离了"
        },
        "correctAnswer": "A",
        "note": "放射性是不稳定原子核的专有属性，即自发地发生衰变并放射出各种射线（如α、β、γ）的物理现象。"
    },
    {
        "id": 120,
        "type": "single",
        "question": "衰变规律是指（ ）。",
        "options": {
            "A": "衰变没有规律",
            "B": "所有的原子瞬间一次全部完成衰变",
            "C": "放射性的原子数量越衰变越多",
            "D": "衰变过程遵循明确的统计规律"
        },
        "correctAnswer": "D",
        "note": "对于单个原子核，它何时衰变完全是随机的；但对于大量原子核的集合，它们的衰变速率遵循极其精确的指数递减统计规律（即半衰期法则）。"
    },
    {
        "id": 121,
        "type": "single",
        "question": "关于辐射能量的单位，正确的是（ ）。",
        "options": {
            "A": "千卡",
            "B": "千米",
            "C": "千瓦时",
            "D": "电子伏特(eV)"
        },
        "correctAnswer": "D",
        "note": "在原子和核物理学中，微观粒子所携带的能量非常小，通常使用电子伏特（eV）及其倍数（如keV、MeV）作为能量单位。"
    },
    {
        "id": 122,
        "type": "single",
        "question": "γ辐射是（ ）。",
        "options": {
            "A": "带正电",
            "B": "带负电",
            "C": "不带电",
            "D": "不确定"
        },
        "correctAnswer": "C",
        "note": "γ辐射本质上是高能电磁波（光子），因此它没有静止质量，也不带任何电荷。"
    },
    {
        "id": 123,
        "type": "single",
        "question": "1eV的定义是一个（ ）穿越1V电位差所获得的能量。",
        "options": {
            "A": "α粒子",
            "B": "中子",
            "C": "电子",
            "D": "γ光子"
        },
        "correctAnswer": "C",
        "note": "电子伏特（eV）的定义是：一个带有一个基本电荷的电子（或质子）在真空中通过 1 伏特电位差加速时所获得的动能。"
    },
    {
        "id": 124,
        "type": "single",
        "question": "衰变规律的特点是（ ）。",
        "options": {
            "A": "加热能加速衰变",
            "B": "加压能加速衰变",
            "C": "不受任何物理和化学因素的影响",
            "D": "放射性核素结合成化合物后就不发生衰变了"
        },
        "correctAnswer": "C",
        "note": "放射性衰变是原子核内部的固有特性，极其稳定。外界的温度、压力、电磁场甚至化学状态的改变，都无法影响它的衰变规律。"
    },
    {
        "id": 125,
        "type": "single",
        "question": "衰变常数指的是（ ）。",
        "options": {
            "A": "与衰变无关",
            "B": "某个原子核衰变的几率",
            "C": "单位时间（如1s或1a）内原子核发生衰变的几率",
            "D": "原子核的重量"
        },
        "correctAnswer": "C",
        "note": "衰变常数（λ）表示在单位时间内，每一个放射性原子核发生衰变的概率。它和半衰期成反比。"
    },
    {
        "id": 126,
        "type": "single",
        "question": "γ射线与物质不会发生的相互作用是（ ）。",
        "options": {
            "A": "光电效应",
            "B": "康普顿效应",
            "C": "电子对效应",
            "D": "韧致辐射"
        },
        "correctAnswer": "D",
        "note": "γ射线与物质主要发生光电效应、康普顿散射和电子对效应。而“韧致辐射”是带电粒子（如高速运动的电子）在原子核电场中减速时发射电磁波的过程，不是γ射线引发的。"
    },
    {
        "id": 127,
        "type": "single",
        "question": "下列哪种粒子不带电？（ ）",
        "options": {
            "A": "α粒子",
            "B": "β+粒子",
            "C": "β-粒子",
            "D": "中子"
        },
        "correctAnswer": "D",
        "note": "α粒子带正电（氦核），β粒子带负电（电子）或正电（正电子），只有中子是电中性的，不带电荷。"
    },
    {
        "id": 128,
        "type": "single",
        "question": "原子核的稳定性由（ ）决定的。",
        "options": {
            "A": "质子数",
            "B": "中子数",
            "C": "电子数",
            "D": "质子数与中子数之间的比例"
        },
        "correctAnswer": "D",
        "note": "原子核是否稳定，取决于核内质子与中子之间相互作用的核力平衡，即质子数与中子数的比例。"
    },
    {
        "id": 129,
        "type": "single",
        "question": "下面关于辐射射程的说法，正确的是（ ）。",
        "options": {
            "A": "不同辐射，即使能量相同，射程也不一样。",
            "B": "不同辐射，能量相同射程相同",
            "C": "同一种辐射，能量相同射程不同",
            "D": "辐射射程与能量无关"
        },
        "correctAnswer": "A",
        "note": "射程不仅与能量有关，更与辐射的种类（质量、电荷）有关。例如相同能量的α粒子和β粒子，由于α粒子质量大、带电荷多，极易损失能量，它的射程远小于β粒子。"
    },
    {
        "id": 130,
        "type": "single",
        "question": "射线的射程（ ）。",
        "options": {
            "A": "只与辐射的种类相关",
            "B": "与辐射的种类和辐射的能量相关",
            "C": "只与辐射的能量相关",
            "D": "不确定"
        },
        "correctAnswer": "B",
        "note": "射程的远近取决于两个核心因素：一是它是哪种射线（α、β等），二是它的初始能量有多高。"
    },
    {
        "id": 131,
        "type": "single",
        "question": "衰变常数与半衰期是（ ）。",
        "options": {
            "A": "两个完全不同的物理量，没有关系",
            "B": "相等关系",
            "C": "衰变常数越大，半衰期越小",
            "D": "衰变常数越大，半衰期越大"
        },
        "correctAnswer": "C",
        "note": "根据物理公式 T(半衰期) = ln2 / λ(衰变常数)。可知衰变常数越大（衰变得越快），其半衰期就越短。"
    },
    {
        "id": 132,
        "type": "single",
        "question": "某核素的半衰期为1s，则其衰变常数λ是（ ）。",
        "options": {
            "A": "693/s",
            "B": "69.3/s",
            "C": "6.93/s",
            "D": "0.693/s"
        },
        "correctAnswer": "D",
        "note": "由公式 λ = ln2 / T 可知。ln2 约等于 0.693。因此当 T = 1s 时，λ = 0.693 / 1 = 0.693/s。"
    },
    {
        "id": 133,
        "type": "single",
        "question": "关于β粒子与物质的相互作用，说法正确的是（ ）。",
        "options": {
            "A": "一个β粒子带有多个电子电荷的电量。",
            "B": "可能是正电子，也可能是负电子，但通常所说的β粒子指的是负电子。",
            "C": "β粒子可以使靶物质的原子核发生电离。",
            "D": "同样能量的β粒子使物质原子电离本领较α粒子大得多。"
        },
        "correctAnswer": "B",
        "note": "电离是核外电子被击出，而不是“原子核”发生电离（C错）。同样能量下α粒子的电离本领远大于β（D错）。β粒子分正负，日常语境中默认指负电子。"
    },
    {
        "id": 134,
        "type": "multiple",
        "question": "在事故应急和处置现场，个人剂量监测的相关要求，下列说法正确的是（ ）。",
        "options": {
            "A": "不需要佩戴个人剂量计",
            "B": "需要佩带个人剂量计、个人剂量报警仪",
            "C": "个人剂量报警仪不需要可直接读数功能",
            "D": "个人剂量计、个人剂量报警仪量程要求足够宽",
            "E": "剂量报警仪不需要很高的准确度，但要求高度可靠"
        },
        "correctAnswer": ["B", "D", "E"],
        "note": "在应急事故中，因为现场剂量率可能极高，因此必须同时佩戴累积剂量计和报警仪（B对），仪器的量程必须够大以防爆表（D对）。在紧急情况下，报警仪的关键在于“稳定可靠”地提醒撤离，而不是追求实验室级别的绝对精确（E对）。"
    },
    {
        "id": 135,
        "type": "multiple",
        "question": "关于辐射事故，以下说法正确的是（ ）。",
        "options": {
            "A": "辐射事故就是核事故",
            "B": "放射源丢失、被盗、失控",
            "C": "放射性物质失控造成人员受到意外的异常照射",
            "D": "射线装置失控造成人员受到意外的异常照射",
            "E": "环境放射性污染的事件"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "辐射事故是特指核技术利用领域的事故（放射源、非密封物质、射线装置的失控），而“核事故”特指核电站等核设施的反应堆级事故，两者概念不同（A错）。"
    },
    {
        "id": 136,
        "type": "multiple",
        "question": "下列（ ）使用Ⅱ类放射源。",
        "options": {
            "A": "辐照装置",
            "B": "一般的校验源",
            "C": "固定多束远距放射治疗仪（伽玛刀）",
            "D": "工业伽玛照相机",
            "E": "高中剂量率近距放射治疗仪"
        },
        "correctAnswer": ["C", "D", "E"],
        "note": "大型辐照装置通常是极其危险的 I 类源；一般校验源危害极小，属 V 类源。而伽马刀、工业探伤（伽马照相机）和高剂量近距治疗仪，其放射源活度很大，属于危险性较高的 II 类源。"
    },
    {
        "id": 137,
        "type": "multiple",
        "question": "放射源丢失后一般应采取的响应行动中，需在找到源以后，立即采取行动使源处于安全状态，并（ ）。",
        "options": {
            "A": "通知公众源已找到",
            "B": "确保识别出所有可能已受到照射的人",
            "C": "需要的话，对医院提供必要的支持",
            "D": "如有必要，启动去污程序和医疗跟踪",
            "E": "开展航空监测"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "源被找到后，应立即解除公众恐慌（A）、排查受照人员（B）、协助医疗救援（C）并清除污染（D）。源已经找到并控制，就不需要再大规模使用直升机或无人机进行盲目的“航空监测”（E）。"
    },
    {
        "id": 138,
        "type": "multiple",
        "question": "监测仪器日常使用必须（ ）。",
        "options": {
            "A": "在有效检定期限内",
            "B": "按照操作规程使用、操作",
            "C": "检查仪器的工作状态",
            "D": "需要向行政管理部门报批",
            "E": "不需要校准"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "日常使用监测仪器必须确保在检定期内、按规程操作，并在使用前检查电池及响应状态。日常使用无需每次都向管理部门“报批”（D错），更不能“不校准”（E错）。"
    },
    {
        "id": 139,
        "type": "multiple",
        "question": "关于个人剂量监测管理，下列说法正确的是（ ）。",
        "options": {
            "A": "执业单位应安排专人管理个人剂量监测工作",
            "B": "操作非密封放射性物质的工作人员，应注意避免剂量计受到污染",
            "C": "有监测能力的单位可以自行监测；不具备自行监测能力的单位，可以委托有相应资质的机构监测",
            "D": "发现个人剂量监测结果异常的，仅告知个人剂量计使用人以后个人剂量不要超标即可",
            "E": "辐射工作单位应将个人剂量档案保存至辐射工作人员离职"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "一旦发现超标，必须组织调查并上报环保部门，绝不能“仅告知本人”了事（D错）。个人剂量档案应当保存至离岗后数十年甚至终生（满75岁或死亡），而不是仅仅“保存至离职”（E错）。"
    },
    {
        "id": 140,
        "type": "multiple",
        "question": "有关仪器使用，下列说法正确的是（ ）。",
        "options": {
            "A": "监测仪器使用必须在有效检定周期内",
            "B": "维修后的仪器应重新送检",
            "C": "每次使用均应用检验源检查仪器的工作状态",
            "D": "具有报警功能的仪器，应设置合理的报警阈值",
            "E": "仪器应有标识，防止被误用"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这五个选项全部都是仪器日常规范使用的标准要求。特别是维修后可能导致参数偏移，必须“重新送检”。"
    },
    {
        "id": 141,
        "type": "multiple",
        "question": "外照射个人剂量监测主要目的是（ ）。",
        "options": {
            "A": "估算组织或器官当量剂量或全身有效剂量",
            "B": "证明工作人员受照剂量是否符合标准和审管部门的要求",
            "C": "了解工作场所防护有效性",
            "D": "为事故人员受照剂量调查和医学响应提供资料",
            "E": "为工作场所防护条件的改进提供依据"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "个人剂量监测不仅能保护员工自身（A、B）、提供医疗数据（D），其汇总数据也能反过来评估和指导工作场所的整体安全防护状态（C、E）。五个选项均正确。"
    },
    {
        "id": 142,
        "type": "multiple",
        "question": "外照射个人剂量监测类型可分为（ ）。",
        "options": {
            "A": "常规监测",
            "B": "任务相关监测",
            "C": "特殊监测",
            "D": "环境监测",
            "E": "放射性废物监测"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "针对“个人剂量”的监测只分为这三种：例行开展的常规监测（A）、针对特定高风险操作的任务监测（B）、发生事故后的特殊监测（C）。环境和废物监测属于场所/流出物监测范畴。"
    },
    {
        "id": 143,
        "type": "multiple",
        "question": "工作场所监测分为（ ）。",
        "options": {
            "A": "本底调查",
            "B": "竣工验收监测",
            "C": "常规监测",
            "D": "退役终态监测",
            "E": "应急监测"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这贯穿了工作场所的整个生命周期：建厂前（本底）、建好时（验收）、日常运行（常规）、出事故（应急）以及最终关停（退役）。"
    },
    {
        "id": 144,
        "type": "multiple",
        "question": "在线监测系统应具备下列功能（ ）。",
        "options": {
            "A": "可靠性好",
            "B": "满足监管要求的远程联网",
            "C": "响应时间快",
            "D": "超阈值报警",
            "E": "与防护门联锁"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "现代在线监测系统作为安全的第一道防线，必须具备高可靠性、快速响应、超限报警、门机联锁以及便于环保部门监管的远程联网功能。"
    },
    {
        "id": 145,
        "type": "multiple",
        "question": "工作场所辐射监测的主要目的是（ ）。",
        "options": {
            "A": "了解工作场所及邻近地区的辐射水平与辐射分布情况，评价工作场所是否符合辐射防护标准，保证工作人员工作环境安全",
            "B": "及时发现异常或事故情况，防止工作人员受到不必要或超剂量照射，防止工作场所受到污染",
            "C": "为优化工艺过程，完善防护措施提供资料",
            "D": "为工作人员受照剂量评价提供资料",
            "E": "为规避责任"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "辐射监测的目的是为了发现问题、保护人员和改进工艺（A、B、C、D）。“规避责任”不是科学防护的目的（E错）。"
    },
    {
        "id": 146,
        "type": "multiple",
        "question": "工作场所放射性表面污染监测的主要目的是（ ）。",
        "options": {
            "A": "了解工作场所及人体等放射性表面污染是否符合标准要求",
            "B": "查明污染范围，方便清污工作，防止污染蔓延",
            "C": "及时发现防护措施、工艺过程存在的问题，避免重大事故的发生",
            "D": "为制定个人监测计划和空气监测计划及完善工艺操作规程提供资料",
            "E": "为规避责任"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "与上一题同理，表面污染监测旨在防控和改进（A、B、C、D），绝非为了规避责任。"
    },
    {
        "id": 147,
        "type": "multiple",
        "question": "可用于工作场所外照射剂量率监测的仪器有（ ）。",
        "options": {
            "A": "个人剂量计",
            "B": "便携式周围剂量当量率仪",
            "C": "便携式空气比释动能率仪",
            "D": "便携式空气吸收剂量率仪",
            "E": "活度计"
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "注意题目问的是“剂量率监测（测场所空间）”，而个人剂量计测的是人员的累积剂量（A错），活度计测的是放射源的活度大小（E错）。"
    },
    {
        "id": 148,
        "type": "multiple",
        "question": "在辐射防护三原则中，实践正当性决定着这项实践能否被批准，下面有关实践正当性的说法，正确的是（ ）。",
        "options": {
            "A": "正当性是前提，优化是目标，剂量限值和约束是限制条件",
            "B": "任何改变照射情况的决定都应当是利大于弊",
            "C": "任何一项实践，对于不具有正当性的实践以及该实践中的源，不应予于批准",
            "D": "正当性是使得对受照个人或社会带来的利益足以弥补其可能引起的辐射危害",
            "E": "正当性是指必须保证任何个人不受到大于天然本底的照射"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "只要利益远大于危害（利大于弊），即使照射稍微超过天然本底也是可以接受的（例如做CT检查），因此E选项错误。"
    },
    {
        "id": 149,
        "type": "multiple",
        "question": "辐射防护的基本任务有（ ）。",
        "options": {
            "A": "保护环境",
            "B": "消除全部辐射",
            "C": "保障公众的健康与安全和保护他们的后代",
            "D": "促进核武器事业的发展",
            "E": "保障从事放射性工作的人员的健康与安全和保护他们的后代"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "辐射防护的任务是保障安全的前提下促进和平利用核能。天然辐射无法“消除全部”（B错），和平时期也不以“促进核武器事业”为任务（D错）。"
    },
    {
        "id": 150,
        "type": "multiple",
        "question": "关于外照射防护下列理解正确的是（ ）。",
        "options": {
            "A": "尽量减少或避免射线从外部对人体的照射",
            "B": "使外照射不超过国家规定的剂量限制",
            "C": "外照射防护的三要素：时间、距离、屏蔽",
            "D": "对于伽马射线的防护，采用原子序数低的材料制成的屏蔽物更好",
            "E": "对于中子的防护，常常分为慢化和吸收两步"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "屏蔽伽马射线穿透力强，需要采用原子序数“高”、密度“大”的材料（如铅、贫铀等），因此D选项错误。"
    },
    {
        "id": 151,
        "type": "multiple",
        "question": "下面对于辐射防护三原则中优化理解正确的是（ ）。",
        "options": {
            "A": "辐射防护优化原则应贯穿于辐射实践活动的始终包括计划、准备、执行和反馈各个阶段",
            "B": "只要辐射实践满足正当化且符合剂量限值要求那就对每个人提供了足够的防护，无需再执行优化",
            "C": "在考虑经济和社会因素之后，个人受照剂量的大小、受照人数以及受照射的可能性均保持在可合理达到的尽量低水平",
            "D": "在一切辐射实践中，应将辐射照射保持在最低水平",
            "E": "辐射防护的优化就是合理达到尽量低水平（ALARA原则）"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "防护最优化不是“达标即止”（B错），也不是不计代价降到“最低水平”（D错），而是综合考量经济社会因素后的“合理达到尽量低”（ALARA原则）。"
    },
    {
        "id": 152,
        "type": "multiple",
        "question": "对于外照射防护，以下说法正确的是（ ）。",
        "options": {
            "A": "增加人与放射源之间的距离，可以有效降低电离辐射的危害",
            "B": "操作熟练，熟悉工作环境也节省很多操作时间，这样就可以减小受照射剂量",
            "C": "在放射源与人之间增加一层屏蔽物质，可有效降低辐射危害",
            "D": "对于点源，剂量率与离源的距离成平方反比",
            "E": "随着离源的距离增大，剂量率会迅速下降"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这五个选项完美诠释了外照射防护的三要素：距离防护（A、D、E）、时间防护（B）以及屏蔽防护（C）。"
    },
    {
        "id": 153,
        "type": "multiple",
        "question": "现行的基本安全标准GB18871-2002中将辐射工作场所分为（ ）。",
        "options": {
            "A": "控制区",
            "B": "监督区",
            "C": "实验区",
            "D": "工作区",
            "E": "操作区"
        },
        "correctAnswer": ["A", "B"],
        "note": "国标GB18871-2002明确规定，辐射工作场所严格划分为“控制区”和“监督区”两类。"
    },
    {
        "id": 154,
        "type": "multiple",
        "question": "设置控制区以便控制（ ）。",
        "options": {
            "A": "实验操作流程",
            "B": "正常工作条件下的正常照射",
            "C": "防止污染扩散",
            "D": "预防潜在照射",
            "E": "限制潜在照射的范围"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "（注：原文件此处选项缺失，已按标准法规补全）设立控制区是为了保护工作人员，控制正常照射和污染扩散，并预防及限制潜在事故的范围。公众不应进入控制区。"
    },
    {
        "id": 155,
        "type": "multiple",
        "question": "职业人员在工作过程中受到的照射剂量限值描述正确的是（ ）。",
        "options": {
            "A": "连续5年的年平均有效剂量为6mSv",
            "B": "连续5年的年平均有效剂量为20mSv",
            "C": "任何一年中的有效剂量最大值为50mSv",
            "D": "眼晶体的年当量剂量为150mSv",
            "E": "四肢（手和足）或皮肤的年当量剂量为500mSv"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "这些都是GB18871-2002规定的职业人员标准剂量限值。（注：按目前最新国际趋势，眼晶体限值已建议修改，但在该版考题标准下D仍为正确项）。"
    },
    {
        "id": 156,
        "type": "multiple",
        "question": "关于个人剂量限值，下列说法正确的是（ ）。",
        "options": {
            "A": "公众剂量限值不包括天然辐射照射剂量。",
            "B": "职业人员剂量限值不包括天然辐射照射剂量。",
            "C": "个人剂量限值不包括天然辐射照射剂量。",
            "D": "剂量限值不包括天然本底和医疗照射。",
            "E": "剂量限值包括天然本底和医疗照射。"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "所有的人工规定的“剂量限值”，其目的都是限制人类实践活动带来的“额外”照射，因此绝对不包括自然界原本就存在的天然本底和治病救人所需的医疗照射（E错）。"
    },
    {
        "id": 157,
        "type": "multiple",
        "question": "监督区是需要对职业照射条件进行（ ）的区域。",
        "options": {
            "A": "监督",
            "B": "专门防护",
            "C": "评价",
            "D": "控制",
            "E": "设置"
        },
        "correctAnswer": ["A", "C"],
        "note": "监督区不需要采取专门的防护手段（控制区才需要），但为了安全起见，需要对其照射条件进行定期的“监督”和“评价”。"
    },
    {
        "id": 158,
        "type": "multiple",
        "question": "在对放射源进行屏蔽时，常常需要考虑很多因素，比如（ ）。",
        "options": {
            "A": "辐射源的类型",
            "B": "辐射与屏蔽材料作用时，是否有次级辐射产生",
            "C": "辐射与材料作用时，是否产生有害气体",
            "D": "屏蔽材料的稳定性",
            "E": "放射源的活度"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "屏蔽设计是一项系统工程，不仅要看放射源的强度和类型，还要考虑材料本身是否安全（如是否容易产生韧致辐射等次级辐射、化学稳定性如何）。全选。"
    },
    {
        "id": 159,
        "type": "multiple",
        "question": "外照射防护的三要素是（ ）。",
        "options": {
            "A": "人员",
            "B": "距离",
            "C": "时间",
            "D": "屏蔽",
            "E": "场所"
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "经典的外照射防护三板斧：缩短时间、增加距离、设置屏蔽。"
    },
    {
        "id": 160,
        "type": "multiple",
        "question": "如果对排入环境的（ ）进行稀释时，一定要遵守有关法规的要求。",
        "options": {
            "A": "污染空气",
            "B": "污水",
            "C": "空气",
            "D": "水",
            "E": "上述所有"
        },
        "correctAnswer": ["A", "B"],
        "note": "排入环境的放射性“污染空气”和放射性“污水”，在进行稀释和排放时受到极严格的环保法规限制。"
    },
    {
        "id": 161,
        "type": "multiple",
        "question": "对于工作场所产生的放射性废水，处理方式有（ ）。",
        "options": {
            "A": "对含短寿命核素的放射性废水，可放置衰变，直到可排放时为止",
            "B": "直接排放，不要处理",
            "C": "可疑废水应在取样分析后，决定是否可以排放或按放射性废水处理",
            "D": "对于产生大量废水的单位，应设置专门下水道和放射性废水贮存处理设施",
            "E": "上述所有"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "放射性废水严禁直接排放 [cite: 5228]。主要处理方式包括：放置衰变 [cite: 5227]、取样分析 [cite: 5229] 以及设置专门的贮存处理设施 [cite: 5230]。"
    },
    {
        "id": 162,
        "type": "multiple",
        "question": "电离辐射广泛应用于工业。以下哪些应用属于工业应用（ ）。",
        "options": {
            "A": "核磁共振",
            "B": "各类核子秤",
            "C": "工业辐照",
            "D": "工业射线探伤",
            "E": "放射性测井"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "工业应用包括核子秤 [cite: 5232]、工业辐照 [cite: 5232]、射线探伤 [cite: 5232] 和放射性测井 [cite: 5232]。核磁共振属于非电离辐射应用 [cite: 5232]。"
    },
    {
        "id": 163,
        "type": "multiple",
        "question": "天然辐射源主要来自（ ）。",
        "options": {
            "A": "宇宙射线",
            "B": "宇生放射性核素",
            "C": "原生放射性核素",
            "D": "辐射育种",
            "E": "核电站运行"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "天然辐射源仅包括宇宙射线 [cite: 5234]、宇生核素 [cite: 5234] 和原生核素 [cite: 5234]。辐射育种和核电站属于人工辐射源 [cite: 5234]。"
    },
    {
        "id": 164,
        "type": "multiple",
        "question": "下述关于确定性效应，不正确的是（ ）。",
        "options": {
            "A": "主要针对大剂量、大剂量率的急性照射",
            "B": "损伤的严重性随着照射剂量的增加而增加",
            "C": "存在剂量阈值",
            "D": "癌症的发生属于确定性效应",
            "E": "遗传效应发生属于确定性效应"
        },
        "correctAnswer": ["D", "E"],
        "note": "癌症和遗传效应属于随机性效应 [cite: 5240, 5241]，不属于确定性效应。"
    },
    {
        "id": 165,
        "type": "multiple",
        "question": "请问以下换算关系哪几项是错误的（ ）。",
        "options": {
            "A": "10Gy=10³mGy",
            "B": "1Gy=10³mGy",
            "C": "10Gy=10⁷μGy",
            "D": "1Gy=10⁶μGy",
            "E": "10Gy=10⁶μGy"
        },
        "correctAnswer": ["A", "E"],
        "note": "1Gy = 1000mGy = 1,000,000μGy [cite: 5243]。因此 10Gy 应等于 10,000mGy (10⁴mGy) 或 10,000,000μGy (10⁷μGy) [cite: 5243]。A 和 E 换算错误。"
    },
    {
        "id": 166,
        "type": "multiple",
        "question": "目前，核技术已经应用到了哪些人类生产活动领域中（ ）。",
        "options": {
            "A": "石油、煤炭等资源勘探及矿物成分分析",
            "B": "辐照食品",
            "C": "工业探伤",
            "D": "核医学、放射诊断和治疗",
            "E": "农作物抗病、耐旱"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "核技术广泛应用于资源勘探 [cite: 5245]、食品加工 [cite: 5246]、工业检测 [cite: 5246]、医疗 [cite: 5247] 及农业 [cite: 5248] 领域。"
    },
    {
        "id": 167,
        "type": "multiple",
        "question": "关于随机性效应，叙述正确的有（ ）。",
        "options": {
            "A": "发生概率与剂量大小相关",
            "B": "严重程度与剂量大小相关",
            "C": "主要针对小剂量、小剂量率的慢性照射",
            "D": "存在剂量阈值",
            "E": "致癌效应和遗传效应属于随机性效应"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "随机性效应的发生概率与剂量成正比 [cite: 5250]，无剂量阈值 [cite: 5252]，包括致癌和遗传效应 [cite: 5253]。"
    },
    {
        "id": 168,
        "type": "multiple",
        "question": "以下关于生物效应分类叙述正确的是（ ）。",
        "options": {
            "A": "根据辐射效应的发生与照射剂量的关系，可以分为确定性效应与随机性效应",
            "B": "根据照射剂量率的大小，可以把辐射对人体的危害分为急性效应和慢性效应",
            "C": "根据照射方式，可以把辐射对人体的危害分为内照射与外照射",
            "D": "按照效应表现的个体，可以把辐射对人体的危害分为躯体效应和遗传效应",
            "E": "按照照射剂量率，可以把辐射对人体的危害分为确定性效应和随机性效应"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "生物效应分类包括：剂量关系（确定性与随机性） [cite: 5255]、剂量率（急性与慢性） [cite: 5255]、照射方式（内与外） [cite: 5256] 以及表现个体（躯体与遗传） [cite: 5257]。"
    },
    {
        "id": 169,
        "type": "multiple",
        "question": "不同射线的常用屏蔽材料选择正确的有（ ）。",
        "options": {
            "A": "α粒子可以被纸张挡住",
            "B": "β粒子可以选择来铝板屏蔽",
            "C": "γ要用高原子序数的物质，如铅板屏蔽",
            "D": "中子要先用含H材料慢化再进行吸收",
            "E": "β粒子常常采用低Z材料+高Z材料组合的形式屏蔽"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "不同射线的屏蔽策略：α用纸 [cite: 5259]，β用铝或低Z/高Z组合 [cite: 5260, 5263]，γ用铅 [cite: 5261]，中子用含氢材料慢化 [cite: 5262]。"
    },
    {
        "id": 170,
        "type": "multiple",
        "question": "关于韧致辐射说法正确的有（ ）。",
        "options": {
            "A": "韧致辐射是一种α粒子",
            "B": "韧致辐射是一种β粒子",
            "C": "韧致辐射发出的是中子",
            "D": "韧致辐射是一种X射线",
            "E": "韧致辐射的能谱是个连续谱"
        },
        "correctAnswer": ["D", "E"],
        "note": "韧致辐射本质上是高速电子受阻产生的 X 射线 [cite: 5265]，其能谱具有连续性 [cite: 5266]。"
    },
    {
        "id": 171,
        "type": "multiple",
        "question": "电离辐射的类型主要有（ ）。",
        "options": {
            "A": "α辐射",
            "B": "β辐射",
            "C": "γ辐射",
            "D": "X射线",
            "E": "中子(n)辐射"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "主要的电离辐射包括 α、β、γ、X 射线及中子辐射 [cite: 5267, 5268]。"
    },
    {
        "id": 172,
        "type": "multiple",
        "question": "关于元素周期表，下面正确的说法是（ ）。",
        "options": {
            "A": "每一种元素占据元素周期表的一个格子",
            "B": "元素周期表是按原子核内的中子数排列的",
            "C": "元素周期表是按原子核内的质子数排列的",
            "D": "元素周期表是门捷列夫发明的",
            "E": "元素周期表是按核内中子数和质子数之和排列的"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "元素周期表由门捷列夫发明 [cite: 5273]，按质子数排列 [cite: 5272]，每种元素占一格 [cite: 5271]。"
    },
    {
        "id": 173,
        "type": "multiple",
        "question": "关于衰变常数与半衰期，下面正确的说法是（ ）。",
        "options": {
            "A": "衰变常数λ越大，放射性原子核衰变的越快",
            "B": "半衰期T1/2越大，放射性原子核衰变的越慢",
            "C": "衰变常数λ是每个放射性核素特有的性质，是常数",
            "D": "半衰期T1/2是每个放射性核素特有的性质，是常数",
            "E": "衰变常数越小，半衰期越大"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "衰变常数与半衰期是核素特有的常数 [cite: 5278, 5279]，λ 越大衰变越快 [cite: 5276]，T1/2 越大衰变越慢 [cite: 5277]，两者成反比 [cite: 5280]。"
    },
    {
        "id": 174,
        "type": "multiple",
        "question": "α粒子的性质有（ ）。",
        "options": {
            "A": "不带电",
            "B": "带两个单位的正电荷",
            "C": "由两个质子和两个中子组成",
            "D": "与氦-4的原子核相同",
            "E": "带两个单位的负电荷"
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "α 粒子即氦-4 原子核 [cite: 5281]，由两个质子和两个中子组成 [cite: 5281]，带两个正电荷 [cite: 5281]。"
    },
    {
        "id": 175,
        "type": "multiple",
        "question": "关于原子和原子核，正确的说法是（ ）。",
        "options": {
            "A": "原子的质量大部分集中在原子核上",
            "B": "原子的质量大部分集中在核外电子上",
            "C": "原子核的质量约等于核内中子和质子的质量和",
            "D": "原子核的质量和核外电子的质量差不多",
            "E": "相对于原子的尺寸，原子核所占的空间特别小（核半径约为原子的十万分之一)"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "原子质量集中在原子核 [cite: 5284]，等于质子与中子质量之和 [cite: 5286]，且核所占空间极小 [cite: 5288]。"
    },
    {
        "id": 176,
        "type": "multiple",
        "question": "关于原子核的电性，下面正确的说法是（ ）。",
        "options": {
            "A": "原子核的电性取决于核内的中子",
            "B": "原子核的电性取决于核内的质子",
            "C": "原子核内有几个质子，原子核就带几个正电荷",
            "D": "原子核内有几个中子，原子核就带几个正电荷",
            "E": "原子核的电性取决于核外电子"
        },
        "correctAnswer": ["B", "C"],
        "note": "原子核带正电，由核内质子决定 [cite: 5290]，电荷数等于质子数 [cite: 5291]。"
    },
    {
        "id": 177,
        "type": "multiple",
        "question": "非电离辐射包括（ ）。",
        "options": {
            "A": "紫外线",
            "B": "热辐射",
            "C": "可见光",
            "D": "无线电波",
            "E": "微波"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "这些辐射的能量均低于引起电离所需的阈值 [cite: 5293-5296]。"
    },
    {
        "id": 178,
        "type": "multiple",
        "question": "关于放射性核素的半衰期，下面正确的说法是（ ）。",
        "options": {
            "A": "半衰期都一样长",
            "B": "放射性核素的原子数中的一半发生衰变的时间",
            "C": "放射性核素的原子数减少至原有值的一半所需的时间",
            "D": "半衰期有的长有的短",
            "E": "对某一核素来说是固定的"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "半衰期是核素减少一半所需时间 [cite: 5299, 5300]，随核素不同而异 [cite: 5301]，但对特定核素是固定的 [cite: 5302]。"
    },
    {
        "id": 179,
        "type": "multiple",
        "question": "放射性衰变规律是（ ）。",
        "options": {
            "A": "放射性核素衰变遵从统计规律",
            "B": "某个原子核衰变的精确时间",
            "C": "原子核的固有特性",
            "D": "是人为可以改变的",
            "E": "不受化学或物理变化的影响"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "衰变是固有特性 [cite: 5303]，遵循统计规律 [cite: 5303]，不受物理或化学环境影响 [cite: 5303]。"
    },
    {
        "id": 180,
        "type": "multiple",
        "question": "关于γ射线，下面正确的说法是（ ）。",
        "options": {
            "A": "原子核能级跃迁退激时会放出γ射线",
            "B": "是波长较短的电磁波",
            "C": "没有静止质量",
            "D": "带电",
            "E": "不带电"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "γ 射线是高频电磁波 [cite: 5307]，由核能级跃迁产生 [cite: 5306]，不带电且无静止质量 [cite: 5308, 5310]。"
    },
    {
        "id": 181,
        "type": "multiple",
        "question": "关于中子辐射，下面正确的说法是（ ）。",
        "options": {
            "A": "核裂变会放出中子",
            "B": "核聚变会放出中子",
            "C": "由不稳定原子核发射出的",
            "D": "中子不带电",
            "E": "中子围绕原子核运动"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "中子不带电 [cite: 5311]，由核反应或不稳定核发射 [cite: 5311]。围绕原子核运动的是电子 [cite: 5311]。"
    },
    {
        "id": 182,
        "type": "multiple",
        "question": "关于辐射的能量单位，下面正确的说法是（ ）。",
        "options": {
            "A": "活度单位与能量单位的含义相同",
            "B": "电离辐射的能量单位可以用eV表示",
            "C": "1MeV=1×10⁶eV",
            "D": "1keV=1×10³eV",
            "E": "eV只适用于γ光子的能量，不能适用于X射线"
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "能量单位常用 eV 及其倍数（keV、MeV） [cite: 5315, 5316]。活度单位（Bq）衡量衰变速率，含义不同 [cite: 5314]。"
    },
    {
        "id": 183,
        "type": "multiple",
        "question": "衰变是指不稳定原子核发射出（ ）的过程。",
        "options": {
            "A": "中子",
            "B": "电子",
            "C": "质子",
            "D": "γ射线",
            "E": "其它原子核"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "衰变过程中原子核可以释放出粒子（中子、电子、质子、子核）或能量（γ射线） [cite: 5318, 5320]。"
    },
    {
        "id": 184,
        "type": "multiple",
        "question": "关于放射性，下面正确的说法是（ ）。",
        "options": {
            "A": "原子核衰变时可以产生放射性",
            "B": "放射性核素肯定是不稳定核素",
            "C": "放射性核素必然会放出中子",
            "D": "放射性核素必然会放出特定的射线",
            "E": "放射性核素永远是稳定的"
        },
        "correctAnswer": ["A", "B", "D"],
        "note": "放射性源于不稳定核的衰变 [cite: 5322]，必会发射特定射线 [cite: 5324]。并非所有衰变都释放中子 [cite: 5323]。"
    },
    {
        "id": 185,
        "type": "single",
        "question": "1、以下除（  ）外，其余辐射工作单位的辐射安全许可证由省级生态环境主管部门审批颁发。",
        "options": {
            "A": "使用Ⅱ类射线装置的",
            "B": "使用Ⅱ类放射源的",
            "C": "生产Ⅱ类放射源的",
            "D": "销售Ⅱ类放射源的"
        },
        "correctAnswer": "C",
        "note": "法律依据：根据《放射性同位素与射线装置安全许可管理办法》，生产Ⅰ类、Ⅱ类放射源的单位由国务院生态环境主管部门审批颁发。"
    },
    {
        "id": 186,
        "type": "single",
        "question": "2、年销售量超过豁免水平（  ）倍（有条件豁免含源设备（  ）台）或者持有量超过豁免水平（  ）倍（有条件豁免含源设备（  ）台）的单位，属于销售或者使用较大批量豁免放射性同位素产品的单位，应当办理辐射安全许可证，并接受辐射安全监管。",
        "options": {
            "A": "100，100，10，10",
            "B": "1000，1000，100，100",
            "C": "1000，100，100，10",
            "D": "500，500，50，50"
        },
        "correctAnswer": "A",
        "note": "法律依据：规定了较大批量豁免产品的界限，销售量超过 100 倍/100 台或持有量超过 10 倍/10 台即需办证。"
    },
    {
        "id": 187,
        "type": "single",
        "question": "3、符合《电离辐射防护与辐射源安全基本标准》有条件豁免要求的含Ⅴ类放射源设备，其国内生产单位或进口总代理单位可填写《含源设备有条件豁免备案申报表》，向（  ）申报备案。",
        "options": {
            "A": "国务院生态环境部门",
            "B": "所在地省级生态环境部门",
            "C": "所在地市级生态环境部门",
            "D": "所在地县级生态环境部门"
        },
        "correctAnswer": "A",
        "note": "法律依据：对于含Ⅴ类源设备的有条件豁免备案，生产单位或进口总代理应向国务院生态环境部门申报。"
    },
    {
        "id": 188,
        "type": "single",
        "question": "4、符合《电离辐射防护与辐射源安全基本标准》豁免水平的放射性同位素和射线装置，其国内生产单位或者进口产品的国内总代理单位（以下简称进口总代理单位）及其使用单位可填写《放射性同位素与射线装置豁免备案表》，报（  ）生态环境部门备案。",
        "options": {
            "A": "国务院",
            "B": "所在地省级",
            "C": "所在地市级",
            "D": "所在地县级"
        },
        "correctAnswer": "B",
        "note": "法律依据：一般放射性同位素与射线装置的豁免备案由所在地省级生态环境部门负责。"
    },
    {
        "id": 189,
        "type": "single",
        "question": "5、发生辐射事故时，事故单位应当立即启动本单位的辐射事故应急方案，采取必要防范措施，并在（  ）内填写《辐射事故初始报告表》，向当地生态环境部门和公安部门报告。",
        "options": {
            "A": "2小时",
            "B": "3小时",
            "C": "4小时",
            "D": "5小时"
        },
        "correctAnswer": "A",
        "note": "法律依据：《放射性同位素与射线装置安全和防护条例》规定，发生事故后应当立即采取措施并于 2 小时内报告。"
    },
    {
        "id": 190,
        "type": "single",
        "question": "6、（  ）是指Ⅲ类放射源丢失、被盗、失控，或者放射性同位素和射线装置失控导致9 人以下（含9人）急性重度放射病、局部器官残疾。",
        "options": {
            "A": "特别重大辐射事故",
            "B": "重大辐射事故",
            "C": "较大辐射事故",
            "D": "一般辐射事故"
        },
        "correctAnswer": "C",
        "note": "法律依据：根据事故分级标准，涉及Ⅲ类源或导致 9 人以下重伤、残疾的情况定性为较大辐射事故。"
    },
    {
        "id": 191,
        "type": "single",
        "question": "7、（  ）是指Ⅰ类、Ⅱ类放射源丢失、被盗、失控造成大范围严重辐射污染后果，或者放射性同位素和射线装置失控导致3人以上（含3人）急性死亡。",
        "options": {
            "A": "特别重大辐射事故",
            "B": "重大辐射事故",
            "C": "较大辐射事故",
            "D": "一般辐射事故"
        },
        "correctAnswer": "A",
        "note": "法律依据：造成 3 人以上死亡或Ⅰ、Ⅱ类源大范围污染的属于特别重大辐射事故。"
    },
    {
        "id": 192,
        "type": "single",
        "question": "8、符合《电离辐射防护与辐射源安全基本标准》豁免水平的放射性同位素在进出口时，进出口单位应：（  ）。",
        "options": {
            "A": "主动向海关提供经省级生态环境部门备案的《豁免备案表》，以办理有关手续",
            "B": "在完成进出口活动后20日内向国务院生态环境部门备案",
            "C": "在完成进出口活动后20日内报其许可证发证机关",
            "D": "无需办理任何手续"
        },
        "correctAnswer": "A",
        "note": "法律依据：进出口豁免水平核素时，需向海关提供省级生态环境部门备案的《豁免备案表》。"
    },
    {
        "id": 193,
        "type": "single",
        "question": "9、年销售量超过豁免水平100倍（有条件豁免含源设备100台）或者持有量超过豁免水平（  ）倍（有条件豁免含源设备（  ）台）的单位，属于销售或者使用较大批量豁免放射性同位素产品的单位，应当办理辐射安全许可证，并接受辐射安全监管。",
        "options": {
            "A": "10，10",
            "B": "100，100",
            "C": "100，10",
            "D": "50，50"
        },
        "correctAnswer": "A",
        "note": "法律依据：较大批量豁免产品的办证门槛中，持有量规定为超过豁免水平 10 倍或 10 台。"
    },
    {
        "id": 194,
        "type": "single",
        "question": "10、年销售量超过豁免水平（  ）倍（有条件豁免含源设备（  ）台）或者持有量超过豁免水平10倍（有条件豁免含源设备10台）的单位，属于销售或者使用较大批量豁免放射性同位素产品的单位，应当办理辐射安全许可证，并接受辐射安全监管。",
        "options": {
            "A": "10，10",
            "B": "100，100",
            "C": "1000，1000",
            "D": "100，10"
        },
        "correctAnswer": "B",
        "note": "法律依据：较大批量豁免产品的办证门槛中，销售量规定为超过豁免水平 100 倍或 100 台。"
    },
    {
        "id": 195,
        "type": "single",
        "question": "11、丽丽发现一张放射源编码卡，编码为0203CS012345，这是（  ）年出厂的放射源？",
        "options": {
            "A": "2001",
            "B": "2002",
            "C": "2003",
            "D": "2012"
        },
        "correctAnswer": "C",
        "note": "知识点：放射源编码共 12 位，第 3、4 位代表生产年份。此处为 03，即 2003 年。"
    },
    {
        "id": 196,
        "type": "single",
        "question": "12、丽丽发现一张放射源编码卡，编码为0203CS012345，这是（  ）类放射源？",
        "options": {
            "A": "Ⅱ",
            "B": "Ⅲ",
            "C": "Ⅳ",
            "D": "Ⅴ"
        },
        "correctAnswer": "D",
        "note": "知识点：放射源编码的第 7 位代表放射源类别。此处为 5，即 Ⅴ 类放射源。"
    },
    {
        "id": 197,
        "type": "single",
        "question": "13、《放射性同位素与射线装置安全和防护条例》所称放射性同位素包括（  ）。",
        "options": {
            "A": "稳定和不稳定同位素",
            "B": "天然和人工放射性同位素",
            "C": "医用和非医用放射性同位素",
            "D": "放射源和非密封放射性物质"
        },
        "correctAnswer": "D",
        "note": "法律依据：根据条例规定，放射性同位素是指放射源和非密封放射性物质。"
    },
    {
        "id": 198,
        "type": "single",
        "question": "14、（  ）主管部门对全国放射性同位素、射线装置的安全和防护工作实施统一监督管理。",
        "options": {
            "A": "省级人民政府生态环境",
            "B": "国务院生态环境",
            "C": "国务院卫生",
            "D": "县级以上地方人民政府生态环境"
        },
        "correctAnswer": "B",
        "note": "法律依据：国务院生态环境主管部门对全国范围内的辐射安全工作实施统一监管。"
    },
    {
        "id": 199,
        "type": "single",
        "question": "15、（  ）按照职责分工和《放射性同位素与射线装置安全和防护条例》的规定，对本行政区域内放射性同位素、射线装置的安全和防护工作实施监督管理。",
        "options": {
            "A": "省级人民政府生态环境主管部门",
            "B": "省级人民政府卫生主管部门",
            "C": "县级以上地方人民政府生态环境主管部门和其他有关部门",
            "D": "县级人民政府卫生主管部门和其他有关部门"
        },
        "correctAnswer": "C",
        "note": "法律依据：地方层面的监管由县级以上人民政府生态环境部门及其他相关部门负责。"
    },
    {
        "id": 200,
        "type": "single",
        "question": "16、国务院令第449号是核技术利用领域辐射安全与防护方面的主要行政法规，它的名称是（  ）。",
        "options": {
            "A": "《放射性同位素与射线装置安全和防护条例》",
            "B": "《对辐照装置运营单位的安全要求》",
            "C": "《放射源安全和保安行为准则》",
            "D": "《放射源分类办法》"
        },
        "correctAnswer": "A",
        "note": "法律依据：第 449 号国务院令确立了《放射性同位素与射线装置安全和防护条例》。"
    },
    {
        "id": 201,
        "type": "single",
        "question": "17、放射性同位素（  ）转让。未经批准不得转让放射性同位素。",
        "options": {
            "A": "可以在单位之间自由",
            "B": "只能在持有许可证的单位之间",
            "C": "只要有一方持有许可证就可",
            "D": "可以在超出许可证规定的种类和范围的单位之间"
        },
        "correctAnswer": "B",
        "note": "法律依据：放射性同位素的转让必须经批准，且只能在均持有合法许可证的单位之间进行。"
    },
    {
        "id": 202,
        "type": "single",
        "question": "18、放射源同位素和射线装置失控导致（  ）人以上（包含本数）急性死亡属于特别重大辐射事故。",
        "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
        },
        "correctAnswer": "C",
        "note": "法律依据：事故分级规定，导致 3 人及以上急性死亡即构成特别重大辐射事故。"
    },
    {
        "id": 203,
        "type": "single",
        "question": "19、发生特别重大辐射事故和重大辐射事故后，事故发生地（  ）和国务院有关部门应当在4小时报告国务院。",
        "options": {
            "A": "省、自治区、直辖市人民政府",
            "B": "省级生态环境部门",
            "C": "设区的市级人民政府",
            "D": "设区的市级生态环境部门"
        },
        "correctAnswer": "A",
        "note": "法律依据：对于高等级事故，事故发生地的省级人民政府负有向国务院报告的直接责任。"
    },
    {
        "id": 204,
        "type": "single",
        "question": "20、国家对放射源和射线装置实行（  ）管理。",
        "options": {
            "A": "分级",
            "B": "多级",
            "C": "分类",
            "D": "综合"
        },
        "correctAnswer": "C",
        "note": "法律依据：条例第四条规定，国家对放射源和射线装置实行分类管理。"
    },
    {
        "id": 205,
        "type": "single",
        "question": "21、使用放射性同位素的单位需要将放射性同位素转移到外省、自治区、直辖市使用的，应当持许可证复印件向（  ）备案，并接受当地生态环境主管部门的监督管理。",
        "options": {
            "A": "本地省、自治区、直辖市人民政府生态环境主管部门",
            "B": "使用地省、自治区、直辖市人民政府生态环境主管部门",
            "C": "国务院生态环境主管部门",
            "D": "使用地区县生态环境部门"
        },
        "correctAnswer": "B",
        "note": "法律逻辑：跨省作业遵循“属地监管”原则。单位在外省使用放射源，必须让【使用地】的省级环保部门知情并接受其监管。"
    },
    {
        "id": 206,
        "type": "single",
        "question": "22、生态环境主管部门应当自受理申请之日起（  ）个工作日内完成辐射安全许可证申请审查，符合条件的颁发许可证，并予以公告；不符合条件的，书面通知申请单位并说明理由。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "20",
            "D": "30"
        },
        "correctAnswer": "C",
        "note": "法律依据：根据《放射性同位素与射线装置安全许可管理办法》，许可证审批的法定限期为 20 个工作日。"
    },
    {
        "id": 207,
        "type": "single",
        "question": "23、辐射安全许可证持证单位变更单位名称、地址、法定代表人的，应当自变更登记之日起（  ）内，向原发证机关申请办理许可证变更手续。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "20",
            "D": "30"
        },
        "correctAnswer": "C",
        "note": "法律依据：单位基本信息变更后，应当在 20 日内向原发证机关提出变更申请，确保监管信息的实时准确。"
    },
    {
        "id": 208,
        "type": "single",
        "question": "24、对进口的放射源，（  ）还应当同时确定与其标号相对应的放射源编码。",
        "options": {
            "A": "国务院生态环境主管部门",
            "B": "省级生态环境主管部门",
            "C": "海关",
            "D": "边防检查部门"
        },
        "correctAnswer": "A",
        "note": "法律依据：国家对放射源实行统一编码制度，进口源的编码由国家级主管部门（国务院生态环境部门）确定。"
    },
    {
        "id": 209,
        "type": "single",
        "question": "25、根据放射源、射线装置对（  ）危害程度，从高到低将放射源分为Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类。",
        "options": {
            "A": "人体健康",
            "B": "环境污染",
            "C": "公共安全",
            "D": "人体健康和环境的潜在"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：放射源的分级不仅考虑对人的直接伤害，还包括对环境的长期潜在威胁，这是分类管理的科学依据。"
    },
    {
        "id": 210,
        "type": "single",
        "question": "26、生态环境主管部门应当将审批颁发许可证的情况通报同级（  ）。",
        "options": {
            "A": "卫生主管部门",
            "B": "公安部门",
            "C": "财政部门",
            "D": "公安部门、卫生主管部门"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：辐射安全涉及社会治安（防盗）和公共卫生，因此环保部门需向公安和卫生部门通报，实现多部门联动。"
    },
    {
        "id": 211,
        "type": "single",
        "question": "27、省级生态环境主管部门不负责（  ）活动的审批或备案。",
        "options": {
            "A": "转让放射性同位素",
            "B": "转移放射性同位素到外省、自治区、直辖市使用",
            "C": "放射性同位素野外示踪试验",
            "D": "造成跨省界环境影响的放射性同位素野外示踪试验"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：权限划分。一旦涉及【跨省界】的环境影响，审批权自动上升至国家级或需跨省协调，不再属于单一省级部门的职责。"
    },
    {
        "id": 212,
        "type": "single",
        "question": "28、辐射工作单位应当编写放射性同位素与射线装置安全和防护状况年度评估报告，于（  ）前报原发证机关。",
        "options": {
            "A": "每年12月31日",
            "B": "每年6月30日",
            "C": "每年1月31日",
            "D": "下一年年底"
        },
        "correctAnswer": "C",
        "note": "法律依据：每年的 1 月 31 日是提交上一年度安全评估报告的法定截止日期。"
    },
    {
        "id": 213,
        "type": "single",
        "question": "29、使用放射性同位素的单位将放射性同位素转移到外省、自治区、直辖市使用的，应当依照《放射性同位素与射线装置安全许可管理办法》的规定（  ）。",
        "options": {
            "A": "审批",
            "B": "登记",
            "C": "许可",
            "D": "备案"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：跨省移动使用属于告知性义务，不需要重新办理复杂的行政许可或审批，只需履行【备案】手续。"
    },
    {
        "id": 214,
        "type": "single",
        "question": "30、许可证有效期届满，需要延续的，持证单位应当于许可证有效期届满（  ）前，向原发证机关提出延续申请。",
        "options": {
            "A": "30日",
            "B": "3个月",
            "C": "6个月",
            "D": "12个月"
        },
        "correctAnswer": "A",
        "note": "法律依据：延续申请应在有效期届满前 30 日提出，为发证机关留出必要的审核时间。"
    },
    {
        "id": 215,
        "type": "single",
        "question": "31、申请领取许可证的辐射工作单位使用Ⅱ类、Ⅲ类放射源的，应当编制或者填报（  ）。",
        "options": {
            "A": "环境影响报告书",
            "B": "环境影响报告表",
            "C": "环境影响登记表",
            "D": "环境影响报告书与环境影响登记表"
        },
        "correctAnswer": "B",
        "note": "法律依据：我国根据辐射风险大小实行环评分类管理。II、III类源风险中等，依法应当编制【环境影响报告表】。"
    },
    {
        "id": 216,
        "type": "single",
        "question": "32、辐射工作单位需要同时分别向国务院生态环境主管部门和省级生态环境主管部门申请许可证的，其许可证由（  ）审批颁发。",
        "options": {
            "A": "省级生态环境主管部门",
            "B": "国务院生态环境主管部门",
            "C": "省级生态环境主管部门商国务院生态环境主管部门",
            "D": "国务院生态环境主管部门商省级生态环境主管部门"
        },
        "correctAnswer": "B",
        "note": "法律逻辑：审批权遵循“就高不就低”原则。若单位业务涉及多级审批，由最高一级主管部门统一审批发证。"
    },
    {
        "id": 217,
        "type": "single",
        "question": "33、辐射工作单位在申请领取许可证前，应当组织编制或者填报（  ）文件，并依照国家规定程序报生态环境主管部门审批。",
        "options": {
            "A": "环境影响评价",
            "B": "放射源使用申请",
            "C": "射线装置使用申请",
            "D": "购源申请"
        },
        "correctAnswer": "A",
        "note": "法律逻辑：环评是许可证申请的最核心前置条件。没有经过审批的环评文件，无法申请辐射安全许可证。"
    },
    {
        "id": 218,
        "type": "single",
        "question": "34、国家根据建设项目对环境的影响程度，对建设项目的环境影响评价实行（  ）管理。",
        "options": {
            "A": "分等级",
            "B": "分影响程度",
            "C": "分档",
            "D": "分类"
        },
        "correctAnswer": "D",
        "note": "法律依据：根据《环境影响评价法》，我国对建设项目实行【分类】管理（即报告书、报告表、登记表）。"
    },
    {
        "id": 219,
        "type": "single",
        "question": "35、辐射安全许可证有效期为（  ）年。",
        "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "correctAnswer": "D",
        "note": "法律依据：条例规定辐射安全许可证的有效期为 5 年。"
    },
    {
        "id": 220,
        "type": "single",
        "question": "36、进口列入限制进出口目录的放射性同位素的单位，应当在进口前报国务院生态环境主管部门审批；获得批准后，由国务院对外贸易主管部门依据对外贸易的有关规定签发进口许可证。国务院生态环境主管部门在（  ），给定放射源编码。",
        "options": {
            "A": "批准放射源进口申请时",
            "B": "海关货物通关时",
            "C": "受理放射源进口申请时",
            "D": "放射性同位素完成进口后"
        },
        "correctAnswer": "A",
        "note": "法律依据：为了实现全过程跟踪，放射源编码必须在【批准进口申请】时同步给定。"
    },
    {
        "id": 221,
        "type": "single",
        "question": "37、进口放射源为I类、II类、Ⅲ类放射源的，标号应当（  ），Ⅳ类、Ⅴ类放射源的标号应当（  ）。",
        "options": {
            "A": "刻制在放射源本体或者密封包壳体上；记录在相应说明文件中",
            "B": "记录在相应说明文件中；刻制在放射源本体或者密封包壳体上",
            "C": "刻制在放射源本体或者密封包壳体上；标在放射源运输容器上",
            "D": "标在放射源运输容器上；刻制在放射源本体或者密封包壳体上"
        },
        "correctAnswer": "A",
        "note": "法律逻辑：高类源（I-III）风险高，标号必须永久性刻制在本体上；低类源（IV-V）风险低，仅需记录在说明文件中。"
    },
    {
        "id": 222,
        "type": "single",
        "question": "38、转入放射性同位素的单位应当于转让前向所在地省级生态环境部门提交材料，其中不包括：（  ）。",
        "options": {
            "A": "转入单位的辐射安全许可证复印件",
            "B": "放射性同位素转让审批表",
            "C": "放射性同位素使用期满后的处理方案",
            "D": "转让双方签订的转让协议"
        },
        "correctAnswer": "A",
        "note": "（注：根据文档答案 A）在转让审批环节中，转入单位的许可证通常已由监管部门掌握，或在特定流程中不作为转让前必须提交的新增材料。"
    },
    {
        "id": 223,
        "type": "single",
        "question": "39、辐射工作单位因故遗失许可证的，应当及时到所在地省级报刊上刊登遗失公告，并于公告（  ）日后的一个月内持公告到原发证机关申请补发。",
        "options": {
            "A": "20",
            "B": "30",
            "C": "60",
            "D": "90"
        },
        "correctAnswer": "B",
        "note": "法律依据：为了确保遗失声明的法律效力，遗失公告需满 30 日后方可补发。"
    },
    {
        "id": 224,
        "type": "single",
        "question": "40、许可证有效期届满，需要延续的，应当向原发证机关提出延续申请，并提供材料，其中不包括（  ）材料。",
        "options": {
            "A": "许可证延续申请报告",
            "B": "监测报告",
            "C": "许可证有效期内的辐射安全防护工作总结",
            "D": "环境影响评价文件"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：延续是对既有业务的延长期，只要项目本身未发生重大变化，不需要重新提供环评文件。"
    },
    {
        "id": 225,
        "type": "single",
        "question": "41、发证机关应当自受理辐射安全许可证延续申请之日起，在许可证有效期届满前完成审查，符合条件的，予以延续，换发许可证，并（  ）原许可证的编号；不符合条件的，书面通知申请单位并说明理由。",
        "options": {
            "A": "使用",
            "B": "不使用",
            "C": "更新",
            "D": "更换"
        },
        "correctAnswer": "A",
        "note": "法律依据：延续许可证时，为了保证行政许可的连续性，应当沿用原有的许可证编号 [cite: 911-912, 2050]。"
    },
    {
        "id": 226,
        "type": "single",
        "question": "42、辐射工作单位部分终止或者全部终止生产、销售、使用放射性同位素与射线装置活动的，应当向（  ）提出部分变更或者注销许可证申请，由（  ）核查合格后，予以变更或者注销许可证。",
        "options": {
            "A": "原发证机关",
            "B": "县级生态环境部门",
            "C": "省级生态环境部门",
            "D": "国务院生态环境主管部门"
        },
        "correctAnswer": "A",
        "note": "法律逻辑：行政许可的注销或变更遵循“谁发证，谁受理”的原则 [cite: 913-915, 2050]。"
    },
    {
        "id": 227,
        "type": "single",
        "question": "43、许可证有效期届满，需要延续的，持证单位应当于许可证有效期届满（  ）日前，向原发证机关提出延续申请。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "30",
            "D": "60"
        },
        "correctAnswer": "C",
        "note": "法律依据：持证单位应在有效期届满前 30 日内提出延续申请 [cite: 916-917, 2051]。"
    },
    {
        "id": 228,
        "type": "single",
        "question": "44、使用放射源的单位应当按照废旧放射源返回协议规定将（  ）废旧放射源交回生产单位或者返回原出口方，其余（  ）废旧放射源进行包装整备后送交有相应资质的放射性废物集中贮存单位贮存。",
        "options": {
            "A": "Ⅰ类、Ⅱ类、Ⅲ类；Ⅳ类、Ⅴ类",
            "B": "Ⅰ类；Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类",
            "C": "Ⅰ类、Ⅱ类；Ⅲ类、Ⅳ类、Ⅴ类",
            "D": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类；Ⅴ类"
        },
        "correctAnswer": "A",
        "note": "法律逻辑：高风险源（I-III类）必须“终生负责”，由原厂回收；低风险源（IV-V类）可由专业废物单位贮存 [cite: 918-919, 2051]。"
    },
    {
        "id": 229,
        "type": "single",
        "question": "45、进口的放射源应当有明确标号和必要说明文件，其中（  ）放射源的标号应当刻制在放射源本体或者密封包壳体，（  ）放射源的标号应当记录在相应的说明文件中。",
        "options": {
            "A": "Ⅰ类；Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类",
            "B": "Ⅰ类、Ⅱ类；Ⅲ类、Ⅳ类、Ⅴ类",
            "C": "Ⅰ类、Ⅱ类、Ⅲ类；Ⅳ类、Ⅴ类",
            "D": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类；Ⅴ类"
        },
        "correctAnswer": "C",
        "note": "知识点：I、II、III类放射源危险性较高，必须在本体刻制永久性标号以防失控 [cite: 920-921, 2051]。"
    },
    {
        "id": 230,
        "type": "single",
        "question": "46、（  ）有权对造成放射性污染的行为提出检举和控告。",
        "options": {
            "A": "只有个人",
            "B": "只有受到伤害的个人",
            "C": "只有单位",
            "D": "任何单位和个人"
        },
        "correctAnswer": "D",
        "note": "法律逻辑：环境保护实行社会监督制度，任何组织或个人都有权利保护环境不受放射性污染 [cite: 922-924, 2051]。"
    },
    {
        "id": 231,
        "type": "single",
        "question": "47、未列入产品台账的放射性同位素和（  ）的放射源，不得出厂和销售。",
        "options": {
            "A": "未标号",
            "B": "未编码",
            "C": "无定位装置",
            "D": "国外生产的"
        },
        "correctAnswer": "B",
        "note": "法律依据：放射源编码是其合法身份的唯一标识，未编码的源严禁进入市场流转 [cite: 925-926, 2051]。"
    },
    {
        "id": 232,
        "type": "single",
        "question": "48、应当依法实施退役的场所是（  ）。",
        "options": {
            "A": "CT机房",
            "B": "使用牙片机的牙科诊所",
            "C": "使用Ⅰ类放射源的辐照装置",
            "D": "销售（不贮存）Ⅱ类放射源的单位"
        },
        "correctAnswer": "C",
        "note": "法律逻辑：使用高类别（I-III类）放射源的场所或生产场所，停止运营后必须履行法定退役程序 [cite: 927-931, 2051]。"
    },
    {
        "id": 233,
        "type": "single",
        "question": "49、根据辐射事故的性质、严重程度、可控性和影响范围等因素，从重到轻将辐射事故分为（  ）四个等级。",
        "options": {
            "A": "特别重大辐射事故、恶性辐射事故、重大辐射事故、较轻辐射事故",
            "B": "特别重大辐射事故、恶性辐射事故、较大辐射事故、一般辐射事故",
            "C": "恶性辐射事故、特别重大辐射事故、重大辐射事故、轻微辐射事故",
            "D": "特别重大辐射事故、重大辐射事故、较大辐射事故、一般辐射事故"
        },
        "correctAnswer": "D",
        "note": "法定术语：我国将辐射事故统一分为特别重大、重大、较大和一般四个等级 [cite: 932-934, 2052]。"
    },
    {
        "id": 234,
        "type": "single",
        "question": "50、生产、销售、使用放射性同位素和射线装置的单位，应当根据可能发生的辐射事故的风险，制定单位的（  ）方案，做好应急准备。",
        "options": {
            "A": "质量保证",
            "B": "污染监测",
            "C": "应急",
            "D": "个人剂量监测"
        },
        "correctAnswer": "C",
        "note": "安全管理：凡涉及辐射工作的单位，必须具备应对突发状况的应急方案 [cite: 935-937, 2052]。"
    },
    {
        "id": 235,
        "type": "single",
        "question": "51、（  ）在符合国家规定的区域实行近地表处置。",
        "options": {
            "A": "低水平放射性固体废物",
            "B": "中水平放射性固体废物",
            "C": "高水平放射性固体废物",
            "D": "低、中水平放射性固体废物"
        },
        "correctAnswer": "D",
        "note": "废物处置：低、中水平放射性固体废物适合在近地表进行最终处置 [cite: 938-940, 2052]。"
    },
    {
        "id": 236,
        "type": "single",
        "question": "52、国家对从事放射性污染防治的专业人员实行（  ）管理制度;对从事放射性监测工作的机构实行（  ） 管理制度。",
        "options": {
            "A": "资质；资格",
            "B": "资质；资质",
            "C": "资格；资质",
            "D": "资格；资格"
        },
        "correctAnswer": "C",
        "note": "法律术语：针对“人员”使用资格管理，针对“机构”使用资质管理 [cite: 941-942, 2052]。"
    },
    {
        "id": 237,
        "type": "single",
        "question": "53、（  ）将放射性废物和被放射性污染物品输入中华人民共和国境内或者经中华人民共和国境内转移。",
        "options": {
            "A": "禁止",
            "B": "防止",
            "C": "控制",
            "D": "管制"
        },
        "correctAnswer": "A",
        "note": "国家红线：我国严禁任何境外放射性废物进入境内，这是最严厉的法律限制 [cite: 943-944, 2052]。"
    },
    {
        "id": 238,
        "type": "single",
        "question": "54、向中华人民共和国境内输入放射性废物和被放射性污染的物品，由（  ）责令退运该放射性废物和被放射性污染的物品。",
        "options": {
            "A": "生态环境部门",
            "B": "卫生部门",
            "C": "公安部门",
            "D": "海关"
        },
        "correctAnswer": "D",
        "note": "监管分工：口岸进出境违禁品的退运责令权属于海关 [cite: 945-947, 2052]。"
    },
    {
        "id": 239,
        "type": "single",
        "question": "55、国务院（  ）行政主管部门对全国放射性污染防治工作依法实施统一监督管理。",
        "options": {
            "A": "卫生",
            "B": "标准化",
            "C": "生态环境",
            "D": "发展与改革"
        },
        "correctAnswer": "C",
        "note": "行政职责：全国辐射安全与污染防治的统管权在生态环境主管部门 [cite: 948-949, 2053]。"
    },
    {
        "id": 240,
        "type": "single",
        "question": "56、生产、销售、使用、贮存放射源的单位，应当建立健全安全保卫制度，指定专人负责，落实安全责任制，制定必要的（  ）措施。",
        "options": {
            "A": "安全防护",
            "B": "污染监测",
            "C": "防失窃",
            "D": "事故应急"
        },
        "correctAnswer": "D",
        "note": "应急预案：除了日常安保，还必须具备事故应急处置措施 [cite: 950-951, 2053]。"
    },
    {
        "id": 241,
        "type": "single",
        "question": "57、公安部门、卫生行政部门和环境保护行政主管部门接到放射源丢失、被盗和放射性污染事故报告后，应当报告（  ）人民政府，并按照各自的职责立即组织采取有效措施，防止放射性污染蔓延，减少事故损失。",
        "options": {
            "A": "当地",
            "B": "下级",
            "C": "上级",
            "D": "本级"
        },
        "correctAnswer": "D",
        "note": "报告程序：职能部门接到警报后，第一责任是向同级人民政府报告，以便统一调度 [cite: 952-953, 2053]。"
    },
    {
        "id": 242,
        "type": "single",
        "question": "58、设立专门从事放射性固体废物贮存、处置的单位，必须经（  ）环境保护行政主管部门审查批准，取得许可证。",
        "options": {
            "A": "所在地县级以上",
            "B": "所在地省级",
            "C": "所在地省级以上",
            "D": "国务院"
        },
        "correctAnswer": "D",
        "note": "高层审批：由于废物处置事关重大，其经营许可证必须由国务院环保部门直接核发 [cite: 954-956, 2053]。"
    },
    {
        "id": 243,
        "type": "single",
        "question": "59、按照《放射性同位素与射线装置安全和防护条例》规定，（  ）应当由注册核安全工程师担任。",
        "options": {
            "A": "法定代表人",
            "B": "总经理",
            "C": "部门负责人",
            "D": "辐射安全关键岗位"
        },
        "correctAnswer": "D",
        "note": "人员任职：法规明确要求辐射安全的关键岗位必须由专业资格持有人担任 [cite: 957-959, 2053]。"
    },
    {
        "id": 244,
        "type": "single",
        "question": "60、申请进口列入限制进出口目录放射性同位素的单位，应当报（  ）生态环境主管部门审批。",
        "options": {
            "A": "国务院",
            "B": "省级",
            "C": "市级",
            "D": "县级"
        },
        "correctAnswer": "A",
        "note": "进口权限：涉及国家进出口管制的放射源，审批权限均在国务院环保部门 [cite: 960-961, 2053]。"
    },
    {
        "id": 245,
        "type": "single",
        "question": "61、使用放射性同位素和射线装置的单位发生辐射事故，造成放射性危害的，应当依法对放射性危害承担责任的是（  ）。",
        "options": {
            "A": "使用放射性同位素和射线装置的单位",
            "B": "使用放射性同位素和射线装置单位的行业主管部门",
            "C": "省级环境保护行政主管部门",
            "D": "县级环境保护行政主管部门"
        },
        "correctAnswer": "A",
        "note": "法律依据：根据《中华人民共和国放射性污染防治法》，产生放射性污染危害的单位应当依法承担民事责任。"
    },
    {
        "id": 246,
        "type": "single",
        "question": "62、使用放射性同位素的单位要将放射性同位素转移至外省异地使用的，按有关规定办理了异地使用的备案后，应当接受（  ）生态环境主管部门的监督管理。",
        "options": {
            "A": "本地省、自治区、直辖市人民政府生态环境主管部门",
            "B": "使用地省、自治区、直辖市人民政府生态环境主管部门",
            "C": "国务院生态环境主管部门",
            "D": "使用地县级以上地方人民政府生态环境主管部门"
        },
        "correctAnswer": "B",
        "note": "法律依据：跨省异地使用应当接受使用地省级部门的监督管理。"
    },
    {
        "id": 247,
        "type": "single",
        "question": "63、国务院生态环境主管部门在受理进口列入限制进出口目录的放射性同位素的单位提出进出口申请时，应当自受理申请之日起（  ）个工作日内完成审查，符合条件的，予以批准；不符合条件的，书面通知申请单位并说明理由。",
        "options": {
            "A": "3",
            "B": "10",
            "C": "30",
            "D": "60"
        },
        "correctAnswer": "B",
        "note": "法律依据：《放射性同位素与射线装置安全许可管理办法》规定，进出口审查时限为10个工作日。"
    },
    {
        "id": 248,
        "type": "single",
        "question": "64、放射性同位素的转出、转入单位应当在转让活动完成之日起（  ）日内，分别向其所在地省、自治区、直辖市人民政府生态环境主管部门备案。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "20",
            "D": "30"
        },
        "correctAnswer": "C",
        "note": "法律依据：放射性同位素转让活动完成后的备案期限为20日。"
    },
    {
        "id": 249,
        "type": "single",
        "question": "65、转让放射性同位素，由转入单位向其所在地省级人民政府生态环境主管部门提出申请，并提交有关规定要求的证明材料。审查应当自受理申请之日起（  ）个工作日内完成，符合条件的，予以批准，不符合条件的，书面通知申请单位并说明理由。",
        "options": {
            "A": "5",
            "B": "15",
            "C": "30",
            "D": "60"
        },
        "correctAnswer": "B",
        "note": "法律依据：省级部门办理转让审批的时限为15个工作日。"
    },
    {
        "id": 250,
        "type": "single",
        "question": "66、持有放射源的单位将废旧放射源交回生产单位、返回原出口方或者送交放射性废物集中贮存单位贮存的，应当在该活动完成之日起（  ）日内向其所在地省、自治区、直辖市人民政府生态环境主管部门备案。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "20",
            "D": "30"
        },
        "correctAnswer": "C",
        "note": "法律依据：废旧放射源交回或送贮后的备案期限统一为20日。"
    },
    {
        "id": 251,
        "type": "single",
        "question": "67、使用（  ）放射源的场所，生产放射性同位素的场所，甲级、乙级非密封放射性物质使用场所，以及终结运行后产生放射性污染的射线装置，应当依法实施退役。",
        "options": {
            "A": "Ⅰ类、Ⅱ类、Ⅲ类",
            "B": "Ⅱ类、Ⅲ类、Ⅳ类",
            "C": "Ⅲ类、Ⅳ类、Ⅴ类",
            "D": "各类"
        },
        "correctAnswer": "A",
        "note": "法律依据：高风险源场所和生产场所必须依法退役。"
    },
    {
        "id": 252,
        "type": "single",
        "question": "68、贮存、领取、使用、归还放射性同位素时，应当进行登记、检查，做到（  ）。",
        "options": {
            "A": "有账可查",
            "B": "账物相符",
            "C": "责任明确",
            "D": "防失窃"
        },
        "correctAnswer": "B",
        "note": "法律依据：条例规定放射性同位素的日常管理必须确保账物相符。"
    },
    {
        "id": 253,
        "type": "single",
        "question": "69、下列单位中按照《放射性同位素与射线装置安全和防护条例》规定不需要取得辐射安全许可证的是（  ）。",
        "options": {
            "A": "销售放射源的企业",
            "B": "仅使用X光机的医疗机构",
            "C": "仅使用豁免水平标准物质的科研单位",
            "D": "仅有丙级非密封放射性物质使用场所的科研机构"
        },
        "correctAnswer": "C",
        "note": "法律依据：豁免水平的核素不纳入许可管理范畴。"
    },
    {
        "id": 254,
        "type": "single",
        "question": "70、辐射安全许可证内容中不包括（  ）信息。",
        "options": {
            "A": "单位名称",
            "B": "法定代表人",
            "C": "注册资本",
            "D": "所从事活动的种类和范围"
        },
        "correctAnswer": "C",
        "note": "法律依据：许可证载明单位基本信息及核准业务范围，不含注册资本。"
    },
    {
        "id": 255,
        "type": "single",
        "question": "71、放射性同位素应当单独存放，（  ）与易燃、易爆、腐蚀性物品等一起存放，并指定专人负责保管。",
        "options": {
            "A": "允许",
            "B": "可以",
            "C": "不得",
            "D": "适宜"
        },
        "correctAnswer": "C",
        "note": "法律依据：条例规定放射源严禁与易燃易爆等危险品混放。"
    },
    {
        "id": 256,
        "type": "single",
        "question": "72、使用Ⅰ类、Ⅱ类、Ⅲ类放射源的场所，生产（  ）场所，甲级、乙级非密封放射性物质使用场所，以及终结运行后产生放射性污染的射线装置，应当依法实施退役。",
        "options": {
            "A": "工业探伤装置的",
            "B": "医用射线装置的",
            "C": "辐照装置的",
            "D": "放射性同位素的"
        },
        "correctAnswer": "D",
        "note": "法律依据：生产放射性同位素的场所属于必须实施退役的法定场所。"
    },
    {
        "id": 257,
        "type": "single",
        "question": "73、使用Ⅰ类、Ⅱ类、Ⅲ类放射源的场所，生产放射性同位素的场所，甲级、乙级非密封放射性物质使用场所，以及终结运行后（  ）的射线装置，应当依法实施退役。",
        "options": {
            "A": "无法再起动",
            "B": "再起动产生噪声大",
            "C": "产生放射性污染",
            "D": "再起动动力消耗大"
        },
        "correctAnswer": "C",
        "note": "法律依据：产生放射性污染的射线装置在终止运行后应实施退役。"
    },
    {
        "id": 258,
        "type": "single",
        "question": "74、生产、销售、使用、贮存放射性同位素和射线装置的场所，应当按照国家有关规定设置明显的（  ）标志。",
        "options": {
            "A": "火险",
            "B": "肃静",
            "C": "禁烟",
            "D": "放射性"
        },
        "correctAnswer": "D",
        "note": "法律依据：涉源场所必须按规定设置明显的电离辐射或放射性标志。"
    },
    {
        "id": 259,
        "type": "single",
        "question": "75、放射源具体分类办法由（  ）主管部门制定。",
        "options": {
            "A": "国务院卫生",
            "B": "国务院生态环境",
            "C": "国务院生态环境主管部门商国务院卫生",
            "D": "国务院卫生主管部门商国务院其他"
        },
        "correctAnswer": "C",
        "note": "法律依据：条例第四条明确规定，分类办法由国务院生态环境主管部门商国务院卫生主管部门制定。"
    },
    {
        "id": 260,
        "type": "single",
        "question": "76、发生辐射事故或者发生可能引发辐射事故的运行故障时，生产、销售、使用放射性同位素与射线装置的单位应当立即启动本单位的应急方案，采取应急措施， 并在（  ）小时内填写初始报告，向当地生态环境主管部门报告。",
        "options": {
            "A": "一",
            "B": "两",
            "C": "三",
            "D": "四"
        },
        "correctAnswer": "B",
        "note": "法律依据：辐射事故的法定初始报告时限为 2 小时。"
    },
    {
        "id": 261,
        "type": "single",
        "question": "77、接到辐射事故报告或者可能发生辐射事故的运行故障报告的生态环境部门，应当在（  ）小时内，将辐射事故或者故障信息报告本级人民政府并逐级上报至省级人民政府生态环境主管部门。",
        "options": {
            "A": "一",
            "B": "两",
            "C": "三",
            "D": "四"
        },
        "correctAnswer": "B",
        "note": "法律依据：生态环境部门内部及向本级政府报告的时限同样为 2 小时。"
    },
    {
        "id": 262,
        "type": "single",
        "question": "78、省级人民政府生态环境主管部门接到辐射事故报告，确认属于特别重大辐射事故或者重大辐射事故的，应当及时通报省级人民政府公安部门和卫生主管部门，并在（  ）小时内上报生态环境部。",
        "options": {
            "A": "一",
            "B": "两",
            "C": "三",
            "D": "四"
        },
        "correctAnswer": "B",
        "note": "法律依据：重大事故上报至部里的法定时限为 2 小时。"
    },
    {
        "id": 263,
        "type": "single",
        "question": "79、取得高级职称并从事辐射安全与防护监督检查工作（  ）年以上，或者取得注册核安全工程师资格的辐射防护安全监督员，可以免予辐射安全培训。",
        "options": {
            "A": "5",
            "B": "8",
            "C": "10",
            "D": "12"
        },
        "correctAnswer": "C",
        "note": "法律依据：资深监督人员（高级职称+10年经验）或注册核安全工程师可免予基础培训。"
    },
    {
        "id": 264,
        "type": "single",
        "question": "80、废旧金属回收冶炼企业辐射监测系统配备责任，由（  ）承担。",
        "options": {
            "A": "收贮单位",
            "B": "废旧金属回收熔炼企业",
            "C": "当地生态环境部门",
            "D": "当地政府"
        },
        "correctAnswer": "B",
        "note": "法律依据：冶炼单位应当配备辐射监测系统，防止放射源混入废旧金属。"
    },
    {
        "id": 265,
        "type": "single",
        "question": "81、省级以上人民政府生态环境主管部门可以委托下一级生态环境主管部门颁发辐射安全许可证，对其颁发辐射安全许可证单位的监督检查应当由（  ）进行。",
        "options": {
            "A": "委托方",
            "B": "接受委托方",
            "C": "双方共同",
            "D": "第三方"
        },
        "correctAnswer": "B",
        "note": "法律依据：谁审批，谁负责。受委托审批许可证的部门应当承担相应的监督检查职责。"
    },
    {
        "id": 266,
        "type": "single",
        "question": "82、（  ）生态环境主管部门应当结合本行政区域的工作实际，配备辐射防护安全监督员。",
        "options": {
            "A": "县级",
            "B": "县级以上",
            "C": "省级",
            "D": "省级以上"
        },
        "correctAnswer": "B",
        "note": "法律依据：县级以上地方人民政府生态环境主管部门应当配备专门的辐射防护安全监督员。"
    },
    {
        "id": 267,
        "type": "single",
        "question": "83、辐射事故和运行故障处理过程中的安全责任，以及由事故、故障导致的应急处置费用，由（  ）承担。",
        "options": {
            "A": "发生辐射事故或者运行故障的单位",
            "B": "发生辐射事故或者运行故障单位的主管部门",
            "C": "发生事故或故障单位所在地的生态环境部门",
            "D": "发生事故或故障的肇事者"
        },
        "correctAnswer": "A",
        "note": "法律依据：生产、销售、使用单位应当对本单位的辐射安全负责，相关处置费用由其自行承担。"
    },
    {
        "id": 268,
        "type": "single",
        "question": "84、根据放射源对人体健康和环境的潜在危害程度，从高到低，将放射源分为（  ）。",
        "options": {
            "A": "Ⅰ类、Ⅱ类",
            "B": "Ⅰ类、Ⅱ类、Ⅲ类",
            "C": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类",
            "D": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类"
        },
        "correctAnswer": "D",
        "note": "核心常识：放射源按危害程度分为五类，Ⅰ类最危险，Ⅴ类最轻。"
    },
    {
        "id": 269,
        "type": "single",
        "question": "85、根据射线装置对人体健康和环境的潜在危害程度，从高到低，将射线装置分为（  ）。",
        "options": {
            "A": "Ⅰ类、Ⅱ类",
            "B": "Ⅰ类、Ⅱ类、Ⅲ类",
            "C": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类",
            "D": "Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类"
        },
        "correctAnswer": "B",
        "note": "核心常识：不同于放射源，射线装置根据危害程度仅分为三类。"
    },
    {
        "id": 270,
        "type": "single",
        "question": "86、（  ）生态环境主管部门应当根据放射性同位素与射线装置生产、销售、使用活动的类别，制定本行政区域的监督检查计划。",
        "options": {
            "A": "县级",
            "B": "县级以上",
            "C": "省级",
            "D": "省级以上"
        },
        "correctAnswer": "B",
        "note": "法律依据：条例规定县级以上生态环境主管部门负责制定行政区域内的监管计划。"
    },
    {
        "id": 271,
        "type": "single",
        "question": "87、监督检查计划应当按照（  ），规定不同的监督检查频次。",
        "options": {
            "A": "辐射安全风险大小",
            "B": "辐射工作时间",
            "C": "辐射单位地点",
            "D": "辐射工作人员数量"
        },
        "correctAnswer": "A",
        "note": "监管原则：风险越高，监管频次越多。实行差异化、针对性的监管。"
    },
    {
        "id": 272,
        "type": "single",
        "question": "88、接到含（  ）放射源装置重大运行故障报告的生态环境部门，应当在两小时内将故障信息逐级上报至原辐射安全许可证发证机关。",
        "options": {
            "A": "Ⅰ类",
            "B": "Ⅱ类",
            "C": "Ⅲ类",
            "D": "Ⅳ类"
        },
        "correctAnswer": "A",
        "note": "法律依据：涉及极高风险的 Ⅰ 类源故障，信息上报的时效和层级要求最高。"
    },
    {
        "id": 273,
        "type": "single",
        "question": "89、持有放射源的单位将废旧放射源交回生产单位，应当在该活动完成之日起（  ）日内向其所在地省级人民政府生态环境主管部门备案。",
        "options": {
            "A": "10",
            "B": "15",
            "C": "20",
            "D": "30"
        },
        "correctAnswer": "C",
        "note": "法律依据：涉及废旧放射源处理后的法定备案期限统一为 20 日。"
    },
    {
        "id": 274,
        "type": "single",
        "question": "90、对可移动的放射源定期进行（  ），确保其处指定位置，具有可靠的安全保障。",
        "options": {
            "A": "清洗",
            "B": "试验",
            "C": "审查",
            "D": "盘存"
        },
        "correctAnswer": "D",
        "note": "安全管理：针对移动源，定期进行账物核对（盘存）是防止流失的最基本手段。"
    },
    {
        "id": 275,
        "type": "single",
        "question": "91、《放射性同位素与射线装置安全和防护管理办法》适用的相关活动，包括废旧放射源与被放射性污染的物品的（  ）以及豁免管理等。",
        "options": {
            "A": "去污",
            "B": "安全和防护",
            "C": "洗消",
            "D": "管理"
        },
        "correctAnswer": "D",
        "note": "法律依据：该管理办法规定了废旧放射源及污染物品的全生命周期“管理”要求。"
    },
    {
        "id": 276,
        "type": "single",
        "question": "92、放射性同位素的包装容器、含放射性同位素的设备和射线装置，应当设置明显的（  ）。",
        "options": {
            "A": "防火标志",
            "B": "防破标志",
            "C": "放射性标识和中文警示说明",
            "D": "禁烟标志"
        },
        "correctAnswer": "C",
        "note": "法律依据：设置三叶草标志及中文警示语是法定强制要求。"
    },
    {
        "id": 277,
        "type": "single",
        "question": "93、运输放射性同位素和含放射源的射线装置的工具，应当按照国家有关规定设置明显的放射性标志或者（  ）。",
        "options": {
            "A": "显示危险信号",
            "B": "防盗警示",
            "C": "中文警示说明",
            "D": "防火标志"
        },
        "correctAnswer": "A",
        "note": "法律依据：根据《放射性同位素与射线装置安全和防护条例》，运输工具需设置标志或显示危险信号。"
    },
    {
        "id": 278,
        "type": "single",
        "question": "94、生态环境部在接到事故报告后，应当组织核实，确认事故类型，在（  ）小时内报告国务院，并通报公安部和国家卫生健康委员会。",
        "options": {
            "A": "一",
            "B": "两",
            "C": "三",
            "D": "四"
        },
        "correctAnswer": "B",
        "note": "法律依据：部级向上级报告的法定时限同样是 2 小时。"
    },
    {
        "id": 279,
        "type": "single",
        "question": "95、甲级非密封放射性物质工作场所的安全管理参照（  ）放射源。",
        "options": {
            "A": "Ⅰ类",
            "B": "Ⅱ类",
            "C": "Ⅲ类",
            "D": "Ⅳ类"
        },
        "correctAnswer": "A",
        "note": "法律依据：甲级场所风险最高，其安全管理标准对标最严格的 Ⅰ 类放射源。"
    },
    {
        "id": 280,
        "type": "single",
        "question": "96、《放射性同位素与射线装置安全和防护管理办法》适用的相关活动，包括废旧放射源与（  ）的管理以及豁免管理等。",
        "options": {
            "A": "核设备",
            "B": "核材料",
            "C": "报废的射线装置",
            "D": "被放射性污染的物品"
        },
        "correctAnswer": "D",
        "note": "法律依据：该办法适用于放射源、射线装置以及被放射性污染的物品。"
    },
    {
        "id": 281,
        "type": "single",
        "question": "97、生产、使用放射性同位素与射线装置的场所，应当按照国家有关规定采取有效措施，防止运行故障，并避免故障导致（  ）。",
        "options": {
            "A": "二次污染",
            "B": "次生风险",
            "C": "诱发灾害",
            "D": "次生危害"
        },
        "correctAnswer": "D",
        "note": "法律要求：不仅要防止故障，还要切断故障向外部环境转化的路径，避免次生危害。"
    },
    {
        "id": 282,
        "type": "single",
        "question": "98、为实施《放射性同位素与射线装置安全和防护条例》规定的辐射安全许可制度，制定（  ）。",
        "options": {
            "A": "排污许可管理办法（试行）",
            "B": "放射性物品运输安全许可管理办法",
            "C": "放射性同位素与射线装置安全许可管理办法",
            "D": "放射性固体废物贮存和处置许可管理办法"
        },
        "correctAnswer": "C",
        "note": "法规体系：条例是上位法，许可管理办法是专门针对该制度制定的部令（规章）。"
    },
    {
        "id": 283,
        "type": "single",
        "question": "99、为了加强放射性同位素与射线装置的安全和防护管理，根据《中华人民共和国放射性污染防治法》和《放射性同位素与射线装置安全和防护条例》，制定（  ）。",
        "options": {
            "A": "放射性物品运输安全监督管理办法",
            "B": "环境保护主管部门实施按日连续处罚办法",
            "C": "放射性同位素与射线装置安全和防护管理办法",
            "D": "固体废物进口管理办法"
        },
        "correctAnswer": "C",
        "note": "法规体系：明确了放射性同位素与射线装置安全和防护管理的专门规章名称。"
    },
    {
        "id": 284,
        "type": "single",
        "question": "100、废旧金属回收熔炼企业送贮废弃放射源或者被放射性污染物品所产生的费用，由（  ）承担。",
        "options": {
            "A": "发现废弃放射源或者被放射性污染物品的单位和个人",
            "B": "送交的单位和个人",
            "C": "废旧金属回收熔炼企业",
            "D": "废弃放射源或者被放射性污染物品的原持有者或者供货方"
        },
        "correctAnswer": "D",
        "note": "责任归属：原持有者或供货方是辐射污染风险的源头，应当承担相应的处置成本。"
    },
    {
        "id": 285,
        "type": "single",
        "question": "101、生产、销售放射性同位素与射线装置的单位，应当对（  ）的放射性同位素与射线装置的辐射安全和防护工作负全面责任，并依法对其造成的放射性危害承担责任。",
        "options": {
            "A": "本单位",
            "B": "使用单位",
            "C": "购买单位",
            "D": "使用和购买单位"
        },
        "correctAnswer": "A",
        "note": "主体责任：任何涉源单位的首要职责是对“本单位”所辖设备的安全负责。"
    },
    {
        "id": 286,
        "type": "single",
        "question": "102、在室外、野外使用放射性同位素与射线装置的，应当按照国家安全和防护标准的要求划出（  ）区域，设置明显的放射性标志，必要时设专人警戒。",
        "options": {
            "A": "安全防护",
            "B": "控制",
            "C": "监督",
            "D": "无人"
        },
        "correctAnswer": "A",
        "note": "实操要求：野外作业没有固定屏蔽，必须划定临时安全防护区并专人值守。"
    },
    {
        "id": 287,
        "type": "single",
        "question": "103、生产、销售、使用放射性同位素与射线装置的单位，应当按照国家环境监测规范，对相关场所进行辐射监测，并对（  ）的真实性、可靠性负责。",
        "options": {
            "A": "辐射监测",
            "B": "防护与安全",
            "C": "监测数据",
            "D": "个人剂量测量"
        },
        "correctAnswer": "C",
        "note": "法律义务：单位不仅要监测，更要确保上报的“监测数据”真实准确。"
    },
    {
        "id": 288,
        "type": "single",
        "question": "104、（  ）由国务院根据国家法律制定，是国家法律在某一个方面的进一步细化，规定了该方面的法规要求。以国务院令发布，具有法律约束力。",
        "options": {
            "A": "法律",
            "B": "行政法规",
            "C": "部门规章",
            "D": "指导性文件"
        },
        "correctAnswer": "B",
        "note": "常识：国务院发布的称为“行政法规”，具有较高的法律效力。"
    },
    {
        "id": 289,
        "type": "single",
        "question": "105、根据相关法律规定和职责分工，生态环境部建立了（  ）的核技术利用辐射安全监督管理体系。",
        "options": {
            "A": "“两级审批，四级监督”",
            "B": "“三级审批，四级监督”",
            "C": "“两级审批，三级监督”",
            "&D": "“三级审批，两级监督”"
        },
        "correctAnswer": "A",
        "note": "体系架构：目前我国实行国家级和省级两级审批，以及部、省、市、县四级监督的体系。"
    },
    {
        "id": 290,
        "type": "single",
        "question": "106、（  ）由国务院有关部门根据法律和国务院行政法规在本部门权限范围内制定，主要包括国务院条例实施细则及其附件、行政管理规定等两部分，以部令发布，具有法律约束力。",
        "options": {
            "A": "法律",
            "B": "行政法规",
            "C": "部门规章",
            "D": "指导性文件"
        },
        "correctAnswer": "C",
        "note": "常识：各部、委发布的称为“部门规章”（部令）。"
    },
    {
        "id": 291,
        "type": "single",
        "question": "107、（  ）由国务院有关部门制定并发布，用于说明或补充核与辐射安全规定以及推荐有关方法和程序。",
        "options": {
            "A": "法律",
            "B": "行政法规",
            "C": "部门规章",
            "D": "指导性文件"
        },
        "correctAnswer": "D",
        "note": "体系层级：指导性文件主要起推荐和补充作用，不具备规章级的强制执行力。"
    },
    {
        "id": 292,
        "type": "single",
        "question": "108、（  ）由全国人民代表大会和全国人民代表大会常务委员会制定，以主席令发布，具有高于行政法规和部门规章的效力。",
        "options": {
            "A": "法律",
            "B": "行政法规",
            "C": "部门规章",
            "D": "指导性文件"
        },
        "correctAnswer": "A",
        "note": "常识：人代会通过的“法律”位阶最高。"
    },
    {
        "id": 293, // 对应原卷第109题
        "type": "multiple",
        "question": "109、县级以上人民政府环境保护主管部门的辐射事故应急预案应当包括下列内容（  ）。",
        "options": {
            "A": "应急机构和职责分工",
            "B": "应急人员的组织、培训以及应急和救助的装备、资金、物资准备",
            "C": "辐射事故分级与应急响应措施",
            "D": "辐射事故的调查、报告和处理程序",
            "E": "辐射事故信息公开、公众宣传方案"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "法律依据：完整的应急预案必须涵盖机构职责、资源准备、分级响应、处理程序以及信息公开等全方位内容。"
    },
    {
        "id": 294, // 对应原卷第110题
        "type": "multiple",
        "question": "110、根据《中华人民共和国放射性污染防治法》第三十二条，生产、销售、使用放射性同位素和射线装置的单位，应当按照国家生态环境行政主管部门的规定对其产生的放射性废物进行（  ）。",
        "options": {
            "A": "收集",
            "B": "包装",
            "C": "贮存",
            "D": "填埋",
            "E": "自行处理"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "法律依据：辐射工作单位产生的废物必须经过规范的收集、包装和暂存。严禁单位自行填埋或处理放射性废物。"
    },
    {
        "id": 295, // 对应原卷第111题
        "type": "multiple",
        "question": "111、根据辐射事故的性质、严重程度、可控性和影响范围等因素，从重到轻将辐射事故分为：（  ）。",
        "options": {
            "A": "特别重大辐射事故",
            "B": "重大辐射事故",
            "C": "较大辐射事故",
            "D": "一般辐射事故",
            "E": "一般辐射事件"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "法律依据：我国法定的辐射事故等级仅分为四个级别（特别重大、重大、较大、一般），不包含“事件”层级的分类。"
    },
    {
        "id": 296, // 对应原卷第112题
        "type": "multiple",
        "question": "112、放射源编码卡格式上标明的内容包括（  ）。",
        "options": {
            "A": "核素名称",
            "B": "出厂活度",
            "C": "生产厂家",
            "D": "源外型尺寸",
            "E": "出厂日期"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "知识点：放射源编码卡是放射源的“身份证”，必须详细记录核素、活度、厂家、尺寸和日期等核心档案信息。"
    },
    {
        "id": 297, // 对应原卷第113题（原卷此题遗漏了选项，为了不影响系统录入，在此补充占位符）
        "type": "multiple",
        "question": "113、生产放射性同位素（放射性药物除外）的单位，辐射安全关键岗位四个，分别为（  ），每岗至少在岗人数1名。",
        "options": {
            "A": "辐射防护负责人",
            "B": "辐射防护专职人员",
            "C": "质量保证专职人员",
            "D": "辐射环境监测与评价专职人员",
            "E": "公司法人"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "（注：该题在原官方题库文档中存在排版错误，缺失了供选择的选项文本，但答案表中给出的答案为 A,B,C,D）"
    },
    {
        "id": 298, // 对应原卷第114题
        "type": "multiple",
        "question": "114、辐射事故，是指（  ）。",
        "options": {
            "A": "放射源丢失事故",
            "B": "放射源被盗事故",
            "C": "放射源失控事故",
            "D": "放射性同位素失控导致人员受到异常照射的事故",
            "E": "人员受照剂量超出该单位管理限值，但未超出审管部门规定的年剂量限值"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "法律依据：辐射事故的核心特征是“失控、丢失或被盗”导致的异常状况。单位内部限值的轻微偏差若未造成实际异常照射（选项E），不属于法定辐射事故。"
    },
    {
        "id": 299, // 对应原卷第115题
        "type": "multiple",
        "question": "115、关于放射源，以下说法正确的是（  ）。",
        "options": {
            "A": "豁免活度以上、半衰期大于或等于60天的放射源必须编码",
            "B": "半衰期小于60天的放射源可以不编码",
            "C": "凡放射源均须编码",
            "D": "放射源编码要填入放射源编码卡",
            "E": "不存在相同编码的放射源"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "法律依据：国家对半衰期≥60天的非豁免源实施严格的唯一性编码管理。半衰期极短（<60天）的源因衰变极快，可不纳入编码体系。"
    },
    {
        "id": 300, // 对应原卷第116题
        "type": "multiple",
        "question": "116、关于放射性同位素与射线装置豁免备案的相关内容，以下正确的是（  ）。",
        "options": {
            "A": "符合《电离辐射防护与辐射源安全基本标准》豁免水平的放射性同位素和射线装置以及有条件豁免要求的含源设备，在生产单位或进口总代理单位完成豁免备案后，该产品的销售、使用活动可免于辐射安全监管（销售或使用较大批量放射性同位素产品的除外），其他销售、使用单位无需逐一办理豁免备案手续",
            "B": "年销售量超过豁免水平100倍（有条件豁免含源设备100台）或者持有量超过豁免水平10倍（有条件豁免含源设备10台）的单位，属于销售或者使用较大批量豁免放射性同位素产品的单位，应当办理辐射安全许可证，并接受辐射安全监管。",
            "C": "仅从事免于辐射安全监管的活动的单位，无需办理辐射安全许可证，原持有的辐射安全许可证申请注销。",
            "D": "即使是从事免于辐射安全监管的活动的单位，仍需办理辐射安全许可证。",
            "E": "省级生态环境部门应将完成备案的《豁免备案表》抄报生态环境部，经生态环境部公告后在全国有效。"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "法律依据：如果单位仅从事完全免于监管的豁免活动，不仅无需办证，原有的许可证也应申请注销（C正确，D错误）。"
    },
    {
        "id": 301, // 对应原卷第117题
        "type": "multiple",
        "question": "117、以下属于可免于编制环境影响评价文件的核技术利用项目有（  ）。",
        "options": {
            "A": "某场所许可使用F-18核素（乙级场所），现拟增加日等效最大操作量（由4.60E+07Bq增加到1.90E+08Bq），仍为乙级场所",
            "B": "某场所许可使用A1型直线加速器（Ⅱ类射线装置），现拟更换为使用A2型加速器（Ⅱ类射线装置）",
            "C": "某场所许可使用B1型X射线机（Ⅲ类射线装置），现拟更换为使用D1型DSA(Ⅱ类射线装置)",
            "D": "某场所许可使用Ⅳ、Ⅴ类放射源，拟增加销售Ⅴ类放射源",
            "E": "已取得辐射安全许可证的单位，新增丙级非密封放射性物质工作场所的"
        },
        "correctAnswer": ["A", "B"],
        "note": "法律依据：免予环评的底线是“不增加风险类别、不升级场所”。同类装置的平替（B）或小幅增加操作量不改变场所定级（A）可豁免环评。"
    },
    {
        "id": 302, // 对应原卷第118题
        "type": "multiple",
        "question": "118、关于《建设项目环境影响评价分类管理名录》中免于编制环境影响评价文件的核技术利用项目有关说明的函中明确，不需要编制环境影响评价文件的核技术利用项目包括（  ）。",
        "options": {
            "A": "在已许可的生产、使用高类别放射源或射线装置的场所，不改变已许可的活动种类的前提下，增加生产、使用同类别或低类别放射源或射线装置",
            "B": "在已许可的生产、使用高类别放射源或射线装置的场所，改变已许可的活动种类，增加生产、使用不高于原类别的放射源或射线装置",
            "C": "在已许可的非密封放射性物质工作场所，增加操作的核素种类或核素操作量，且增加后不提高场所的级别",
            "D": "已经取得销售放射性同位素或射线装置许可的，增加销售不高于原许可类别的放射性同位素或射线装置，销售行为不涉及新增放射性同位素贮存场所和射线调试场所的",
            "E": "已经取得销售放射性同位素或射线装置许可的，增加销售不高于原许可类别的放射性同位素或射线装置，销售行为涉及新增放射性同位素贮存场所和射线调试场所的"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "环评豁免原则：核心是不突破原有的风险天花板。不能改变活动种类（B错），也不能涉及新增配套的贮存/调试场所（E错）。"
    },
    {
        "id": 303, // 对应原卷第119题
        "type": "multiple",
        "question": "119、对免于编制环境影响评价文件的项目，许可证技术审查的内容主要包括（  ）。",
        "options": {
            "A": "项目规模与基本参数",
            "B": "工程设备与工艺分析",
            "C": "辐射安全与防护",
            "D": "辐射影响",
            "E": "辐射安全管理"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "监管要求：免环评不等于免审查。在办理许可证时，相关技术审查仍然需要做到全要素覆盖。"
    },
    {
        "id": 304, // 对应原卷第120题
        "type": "multiple",
        "question": "120、如核技术利用单位拟申请增加的项目中一部分符合免于编制环境影响评价文件的条件，另一部分不符合条件（即需要履行环境影响评价手续），核技术利用单位（  ）。",
        "options": {
            "A": "只能将全部项目一并进行环境影响评价，在取得环评批复后一并申请辐射安全许可证",
            "B": "只能先行申请不需要编制环境影响评价文件的部分项目的辐射安全许可证",
            "C": "可以先行申请不需要编制环境影响评价文件的部分项目的辐射安全许可证",
            "D": "可以将全部项目一并进行环境影响评价，在取得环评批复后一并申请辐射安全许可证",
            "E": "全部项目无需进行环境影响评价，直接申请辐射安全许可证"
        },
        "correctAnswer": ["C", "D"],
        "note": "法律依据：体现了行政审批的便民灵活性。单位可以根据项目急缓程度，选择“分批办理”（C）或“一并办理”（D）。"
    },
    {
        "id": 305,
        "type": "multiple",
        "question": "121、下列单位中应当按照《放射性同位素与射线装置安全和防护条例》规定取得辐射安全许可证的是（  ）。",
        "options": {
            "A": "销售放射源的企业",
            "B": "使用射线装置的医疗机构",
            "C": "使用放射源的探伤企业",
            "D": "具有丙级非密封放射性物质使用场所的科研机构",
            "E": "仅使用豁免水平标准物质的科研单位"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "法律依据：除了仅使用豁免水平标准物质的单位（E）不需要办证外，其他涉源、涉射线装置的主体均须取得许可证。"
    },
    {
        "id": 306,
        "type": "multiple",
        "question": "122、国家对放射性污染的防治，实行（  ）的方针。",
        "options": {
            "A": "预防为主",
            "B": "防治结合",
            "C": "严格管理",
            "D": "安全第一",
            "E": "发展为首"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "法律依据：《放射性污染防治法》第三条明确规定了十六字方针：预防为主、防治结合、严格管理、安全第一。"
    },
    {
        "id": 307,
        "type": "multiple",
        "question": "123、关于放射性固体废物处置，下列正确的是（  ）。",
        "options": {
            "A": "低、中水平放射性固体废物在符合国家规定的区域实行近地表处置。",
            "B": "高水平放射性固体废物实行集中的深地质处置。",
            "C": "α放射性固体废物实行集中的深地质处置。",
            "D": "禁止在内河水域和海洋上处置放射性固体废物。",
            "E": "禁止在内河水域处置放射性固体废物，但可以在海洋上处置放射性固体废物。"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "废物处置：我国严禁在任何内河水域和海洋上处置放射性固体废物（E错）。低中水平实行近地表处置，高水平和α废物实行深地质处置。"
    },
    {
        "id": 308,
        "type": "multiple",
        "question": "124、辐射安全许可证内容包括以下哪些信息（  ）。",
        "options": {
            "A": "单位名称",
            "B": "发证日期和编号",
            "C": "注册资本",
            "D": "所从事活动的种类和范围",
            "E": "有效期限"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "证件常识：许可证关注的是单位身份和辐射活动安全范围，并不关注其商业层面的“注册资本”。"
    },
    {
        "id": 309,
        "type": "multiple",
        "question": "125、对放射性同位素贮存场所应当采取（  ）、防射线泄漏的安全措施。",
        "options": {
            "A": "防火",
            "B": "防水",
            "C": "防盗",
            "D": "防丢失",
            "E": "防破坏"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "库房管理：对于贮存场所，除了常规的防火、防盗外，防水、防丢失及防破坏等立体化安防都是必须配置的。"
    },
    {
        "id": 310,
        "type": "multiple",
        "question": "126、《放射性同位素射线装置安全和防护条例》中的辐射事故是指（  ）。",
        "options": {
            "A": "放射源丢失",
            "B": "放射源被盗",
            "C": "放射源失控",
            "D": "放射性同位素失控导致人员受到意外的异常照射",
            "E": "射线装置失控导致人员受到意外的异常照射"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "法定概念：辐射事故全面涵盖了源的物理遗失（盗、丢）、物理失控，以及造成人员异常照射的所有极端情况。"
    },
    {
        "id": 311,
        "type": "multiple",
        "question": "127、（  ）应当及时相互通报辐射事故应急响应、调查处理、定性定级、立案侦查和医疗应急情况。",
        "options": {
            "A": "生态环境主管部门",
            "B": "公安部门",
            "C": "卫生主管部门",
            "D": "县级以上人民政府",
            "E": "设区的市级以上人民政府"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "部门协同：辐射应急天然需要“环保（定性）、公安（侦查）、卫生（救治）”三部门的紧密联动与信息通报。"
    },
    {
        "id": 312,
        "type": "multiple",
        "question": "128、有下列哪些行为之一的，由县级以上人民政府生态环境行政主管部门责令停止违法行为，限期改正，处以罚款；构成犯罪的，依法追究刑事责任？（  ）",
        "options": {
            "A": "未建造尾矿库或者不按照放射性污染防治的要求建造尾矿库，贮存、处置铀（钍）矿和伴生放射性矿的尾矿的。",
            "B": "向环境排放不得排放的放射性废气、废液的。",
            "C": "不按照规定的方式排放放射性废液，利用渗井、渗坑、天然裂隙、溶洞或者国家禁止的其他方式排放放射性废液的。",
            "D": "不按照规定处理或者贮存不得向环境排放的放射性废液的。",
            "E": "将放射性固体废物提供或者委托给无许可证的单位贮存和处置的。"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "法律责任：这五项行为均涉及严重的非法排放或非法处置，直接触发责令停止及罚款等重罚条款。"
    },
    {
        "id": 313,
        "type": "multiple",
        "question": "129、《中华人民共和国放射性污染防治法》适用于我国领域和管辖的其他海域在（  ）开发利用过程中发生的放射性污染的防治活动。",
        "options": {
            "A": "核技术",
            "B": "铀（钍）矿",
            "C": "核设施选址、建造、运行、退役",
            "D": "伴生放射性矿",
            "E": "全部矿产资源"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "法律适用范围：污染防治法精准覆盖核技术、核设施及特定放射性矿（如铀钍矿和伴生矿），但不适用于普通的全部矿产资源。"
    },
    {
        "id": 314,
        "type": "multiple",
        "question": "130、核技术利用是指（  ）在医疗、工业、农业、地质调查、科学研究和教学等领域中的使用。",
        "options": {
            "A": "密封放射源",
            "B": "电磁发射设施",
            "C": "非密封放射源",
            "D": "射线装置",
            "E": "核燃料"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "定义辨析：核技术利用特指密封源、非密封源及射线装置的应用，核燃料的使用属于核设施管理范畴。"
    },
    {
        "id": 315,
        "type": "multiple",
        "question": "131、违反《中华人民共和国放射性污染防治法》规定，有下列行为之一的，由县级以上人民政府环境保护行政主管部门或者其他有关部门依据职权责令限期改正，可以处二万元以下罚款。（  ）",
        "options": {
            "A": "不按照规定报告有关环境监测结果的",
            "B": "未编制环境影响评价文件",
            "C": "擅自进行建造、运行、生产和使用等活动的",
            "D": "向环境排放不得排放的放射性废气、废液的",
            "E": "拒绝环保行政主管部门和其他有关部门进行现场检查的"
        },
        "correctAnswer": ["A", "E"],
        "note": "罚则区分：涉及“不报告监测结果”和“拒绝现场检查”等阻碍监督的行为，适用两万元以下的罚款。"
    },
    {
        "id": 316,
        "type": "multiple",
        "question": "132、根据《中华人民共和国放射性污染防治法》第五十五条，有下列哪些行为之一的，由县级以上人民政府环境保护行政主管部门或者其他有关部门依据职权责令限期改正；逾期不改正的，责令停产停业，并处二万元以上十万元以下罚款；构成犯罪的，依法追究刑事责任？\n（  ）",
        "options": {
            "A": "不按照规定设置放射性标识、标志、中文警示说明的",
            "B": "不按照规定建立健全安全保卫制度和制定事故应急计划的",
            "C": "不按照规定建立应急措施的",
            "D": "不按照规定报告放射源丢失、被盗情况的",
            "E": "不按照规定报告放射性污染事故的"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "罚则区分：未设警示标志、未建应急计划或隐瞒事故不报，属于严重安全隐患，面临停产及最高十万元罚款。"
    },
    {
        "id": 317,
        "type": "multiple",
        "question": "133、关于放射性同位素存放，下列说法正确的是？（  ）",
        "options": {
            "A": "放射性同位素应当单独存放。",
            "B": "放射性同位素不得与易燃、易爆、腐蚀性物品等一起存放。",
            "C": "放射性同位素的贮存场所应当采取有效的防火、防盗、防射线泄漏的安全防护措施。",
            "D": "放射性同位素应指定专人负责保管。",
            "E": "贮存、领取、使用、归还放射性同位素时，应当进行登记、检查，做到账物相符。"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "管理规范：从物理隔离、安防设施、专人专管到进出库台账，这五项构成了放射源库房存放的核心标准。"
    },
    {
        "id": 318,
        "type": "multiple",
        "question": "134、新建、改建、扩建放射工作场所的放射防护设施，应当与主体工程（  ）。",
        "options": {
            "A": "同时设计",
            "B": "同时施工",
            "C": "同时投入使用",
            "D": "同时验收",
            "E": "同时退役"
        },
        "correctAnswer": ["A", "B","C", "D"],
        "note": "（注：官方原卷文档在此处漏印了选项。根据答案A,C,D反推，此题考察的是经典的“三同时”制度：同时设计、同时施工、同时投入使用）"
    },
    {
        "id": 319,
        "type": "multiple",
        "question": "135、发生放射源丢失、被盗和放射性污染事故时，有关单位和个人必须立即采取应急措施，并向（  ）报告",
        "options": {
            "A": "卫生行政部门",
            "B": "公安部门",
            "C": "生态环境行政主管部门",
            "D": "安全生产监督部门",
            "E": "省级人民政府"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "（注：官方原卷文档在此处漏印了选项。根据答案A,B,C反推，报告对象应为生态环境部门、公安部门、卫生主管部门）"
    },
    {
        "id": 320,
        "type": "multiple",
        "question": "136、生产、销售、使用放射性同位素和射线装置的单位申请领取的许可证包括下列主要内容：（  ）。",
        "options": {
            "A": "单位的名称、地址、法定代表人",
            "B": "所从事活动的种类和范围",
            "C": "有效期限",
            "D": "发证日期",
            "E": "证书编号"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "证件常识：许可证版面上必须载明主体的基本信息、准许从事的具体范围以及发证和有效期限等。"
    },
    {
        "id": 321,
        "type": "multiple",
        "question": "137、生产、销售、使用放射性同位素与射线装置的单位，在（  ）或者其他原因终止前，应当确保环境辐射安全，妥善实施辐射工作场所或者设备的退役，并承担退役完成前所有的安全责任。",
        "options": {
            "A": "依法被撤销",
            "B": "依法解散",
            "C": "依法破产",
            "D": "经营困难",
            "E": "暂时停工"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "退役节点：单位法人实体消亡（被撤销、解散、破产）是触发强制退役及安全兜底责任的法定情形。"
    },
    {
        "id": 322,
        "type": "multiple",
        "question": "138、生产、销售、使用、贮存放射性同位素与射线装置的场所，应当按照国家有关规定设置明显的放射性标志，其入口处应当按照国家有关安全和防护标准的要求，设置（  ）。",
        "options": {
            "A": "巡检按钮",
            "B": "必要的安全联锁",
            "C": "报警装置或者工作信号",
            "D": "安全防护区域",
            "E": "调试装置"
        },
        "correctAnswer": ["B", "C"],
        "note": "安全设施：高风险区域入口必须设置硬性的安全联锁（门不开源不出）和声光报警装置。"
    },
    {
        "id": 323,
        "type": "multiple",
        "question": "139、省级人民政府生态环境主管部门应当每半年对本行政区域内发生的辐射事故和运行故障情况进行汇总，并将汇总报告报送生态环境部，同时抄送（  ）。",
        "options": {
            "A": "生态环境部",
            "B": "同级公安部门",
            "C": "同级卫生主管部门",
            "D": "国务院",
            "E": "商务部"
        },
        "correctAnswer": ["B", "C"],
        "note": "部门协同：环保部门在向部委上报汇总数据时，须平行抄送同级的公安和卫生健康部门。"
    },
    {
        "id": 324,
        "type": "multiple",
        "question": "140、《放射性同位素与射线装置安全和防护管理办法》规定下列场所与装置应当依法实施退役：（  ）。",
        "options": {
            "A": "使用Ⅰ类、Ⅱ类、Ⅲ类放射源的场所",
            "B": "生产放射性同位素的场所",
            "C": "甲级、乙级非密封放射性物质使用场所",
            "D": "终结运行后产生放射性污染的射线装置",
            "E": "终结运行后不产生放射性污染的射线装置"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "退役范围：核心是消除残留污染和失控风险，因此不产生污染的装置（E）终止后无需复杂退役程序。"
    },
    {
        "id": 325,
        "type": "multiple",
        "question": "141、根据《放射性废物分类》（公告 2017 年 第65 号），放射性废物分为（  ）。",
        "options": {
            "A": "极短寿命放射性废物",
            "B": "极低水平放射性废物",
            "C": "低水平放射性废物",
            "D": "中水平放射性废物",
            "E": "高水平放射性废物"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "（注：原卷本题选项遗漏，根据官方答案A,B,C,D,E及我国2017年65号公告的最新分类标准为您补全了这五大类放射性废物体系）。"
    },
    {
        "id": 326,
        "type": "multiple",
        "question": "142、以下核技术利用项目需要填报环境影响登记表的有（  ）。",
        "options": {
            "A": "销售Ⅰ类、Ⅱ类、Ⅲ类、Ⅳ类、Ⅴ类放射源的",
            "B": "使用Ⅳ类、Ⅴ类放射源的",
            "C": "销售非密封放射性物质的",
            "D": "生产、销售、使用Ⅲ类射线装置的",
            "E": "销售Ⅱ类射线装置的"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "环评分类管理：销售活动（不含使用）及低风险源（IV、V类）和低风险射线装置（III类）的使用，通常只需要填报最简化的“环境影响登记表”。"
    },
    {
        "id": 327,
        "type": "multiple",
        "question": "143、申请领取许可证的辐射工作单位从事下列活动的应当填报环境影响登记表：（  ）。",
        "options": {
            "A": "生产放射性同位素的",
            "B": "医疗使用Ⅰ类放射源的",
            "C": "销售、使用Ⅴ类放射源的",
            "D": "生产、销售、使用Ⅲ类射线装置的",
            "E": "乙级非密封放射性物质工作场所"
        },
        "correctAnswer": ["C", "D"],
        "note": "风险级别判定：A、B、E选项由于涉及生产、高类源或高等级非密封场所，风险较高，必须编制“报告书”或“报告表”，仅有C和D这类低风险活动适用填报“登记表”。"
    },
    {
        "id": 328,
        "type": "multiple",
        "question": "144、使用放射性同位素的单位需要将放射性同位素转移到外省、自治区、直辖市使用的，应当于活动实施前10日内向使用地省级环境保护主管部门备案，书面报告移出地省级生态环境主管部门，并接受使用地生态环境主管部门的监督管理。书面报告的内容应当包括（  ）。",
        "options": {
            "A": "放射性同位素的核素",
            "B": "放射性同位素的活度",
            "C": "放射性同位素的转移时间和地点",
            "D": "辐射安全负责人和联系电话",
            "E": "转移放射源的还应提供放射源标号和编码"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "跨省备案：为了确保跨省流转全程可控，上报内容必须包含源的详细物理参数（核素、活度、编码）以及转移的时间、地点和负责人联络方式。"
    },
    {
        "id": 329,
        "type": "multiple",
        "question": "145、有下列情形之一的，持证单位应当按照原申请程序，重新申请领取许可证：（  ）。",
        "options": {
            "A": "注册资本发生变化的",
            "B": "营业执照经营范围发生变化的",
            "C": "改变所从事活动的种类或者范围的",
            "D": "新建或者改建、扩建生产、销售、使用设施或者场所的",
            "E": "变更辐射防护负责人的"
        },
        "correctAnswer": ["C", "D"],
        "note": "重新申领条件：只有当涉及辐射安全的“实质性重大变化”（如变更活动种类、扩建涉核设施）时，才需要重新走完整的申领程序。A、B、E通常只需办理变更备案。"
    },
    {
        "id": 330,
        "type": "multiple",
        "question": "146、申请转让放射性同位素，应当符合下列要求：（  ）。",
        "options": {
            "A": "转出单位持有与所从事活动相符的许可证",
            "B": "转入单位持有与所从事活动相符的许可证",
            "C": "转入单位具有放射性同位素使用期满后的处理方案",
            "D": "转让双方已经签订书面转让协议",
            "E": "转出单位具有放射性同位素使用期满后的处理方案"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "转让审批逻辑：转让的前提是双方均具备合法资质（A、B），且已达成协议（D）。因为接收方将成为新的责任主体，所以要求“转入单位”具有期满后的处理方案（C）。"
    },
    {
        "id": 331,
        "type": "multiple",
        "question": "147、申请进口列入限制进出口目录的放射性同位素的单位，应当向国务院生态环境主管部门提交放射性同位素进口审批表，并提交下列材料：（  ）。",
        "options": {
            "A": "放射性同位素使用期满后的处理方案，其中，进口I类、II类、Ⅲ类放射源的，应当提供原出口方负责从最终用户回收放射源的承诺文件复印件",
            "B": "进口放射源的明确标号和必要的说明文件的影印件或者复印件，其中，I、II、Ⅲ类放射源的标号应当刻制在放射源本体或者密封包壳体上，Ⅳ、Ⅴ类放射源的标号应当记录在相应说明文件中",
            "C": "进口单位与原出口方之间签订的有效协议复印件",
            "D": "将进口的放射性同位素销售给其他单位使用的，还应当提供与使用单位签订的有效协议复印件",
            "E": "进口单位、使用单位的营业执照"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "进口管控：国家对放射性同位素进口实施严格的闭环管理，重点审查源的身份标号（B）、购销协议（C、D）以及高风险源最终如何退回国外的承诺方案（A）。"
    },
    {
        "id": 332,
        "type": "multiple",
        "question": "148、辐射安全许可证中“活动的种类”分为（  ）。",
        "options": {
            "A": "生产",
            "B": "销售",
            "C": "使用",
            "D": "进口",
            "E": "处置"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "证件常识：许可证上载明的核心辐射活动种类标准分类为“生产、销售、使用”三大类。"
    },
    {
        "id": 333,
        "type": "multiple",
        "question": "149、关于辐射安全许可证延续，说法错误的是（  ）。",
        "options": {
            "A": "辐射安全许可证有效期为4年",
            "B": "有效期届满，需要延续的，应于许可证有效期届满20日前向原发证机关提出延续申请",
            "C": "许可证延续需要提供许可证延续申请报告、监测报告、许可证有效期内的辐射安全防护工作总结等材料",
            "D": "辐射安全许可证有效期为5年",
            "E": "有效期届满，需要延续的，应于许可证有效期届满30日前向原发证机关提出延续申请"
        },
        "correctAnswer": ["A", "B"],
        "note": "易错点辨析：本题要求选出“错误”的说法。正确的规定应是：有效期为5年（A错），延续应提前30日申请（B错）。"
    },
    {
        "id": 334,
        "type": "multiple",
        "question": "150、辐射工作单位应当建立放射性同位素台账，记载（  ）。",
        "options": {
            "A": "核素名称",
            "B": "出厂时间和活度",
            "C": "放射源标号和编码",
            "D": "源外型尺寸",
            "E": "放射性同位素的来源和去向"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "台账管理：台账的核心作用是追踪放射源的“前世今生”与关键指标，外型尺寸（D）通常记录在产品说明书中，不属于日常流转台账的必填要素。"
    },
    {
        "id": 335,
        "type": "multiple",
        "question": "151、涉源单位的许可证发放以及放射源进出口与转让审批均在“国家核技术利用辐射安全管理系统”中办理，实现了放射源（  ）等各个环节的动态跟踪管理。",
        "options": {
            "A": "生产",
            "B": "销售",
            "C": "转让",
            "D": "异地使用",
            "E": "进出口"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "信息化监管：我国已实现放射源的“电子身份证”全生命周期管理，从生产到进出口均在全国统一系统中流转。"
    },
    {
        "id": 336,
        "type": "multiple",
        "question": "152、我国已建立了与IAEA的辐射安全标准、导则等要求基本一致的辐射安全监管体系，对核技术利用项目实施安全监管，核心是（  ）。",
        "options": {
            "A": "许可证管理制度",
            "B": "放射源的全过程跟踪管理制度",
            "C": "放射性废物处置制度",
            "D": "职业健康管理制度",
            "E": "放射性污染监测制度"
        },
        "correctAnswer": ["A", "B"],
        "note": "监管核心：整个核技术利用安全体系的“两条主线”就是：管好人（许可证管理制度）和管好物（源的全过程跟踪管理）。"
    },
    {
        "id": 337,
        "type": "multiple",
        "question": "153、我国核技术利用辐射安全监管法规标准体系包括（  ）以及其他监管要求文件。",
        "options": {
            "A": "国家法律",
            "B": "行政法规",
            "C": "部门规章",
            "D": "指导性文件",
            "E": "标准文件"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "法规体系架构：从位阶最高的国家法律到具体的技术标准文件，这五层构成了我国严密的核安全监管法律法规网。"
    },
    {
        "id": 338,
        "type": "single",
        "question": "1、图中警戒线空气比释动能率不大于（  ）。",
        "imageName": "image365.jpg",
        "options": {
            "A": "5 μSv/h",
            "B": "10 μSv/h",
            "C": "15 μSv/h",
            "D": "20 μSv/h"
        },
        "correctAnswer": "C",
        "note": "实务规范：控制区边界（警戒线）的空气比释动能率（剂量率）一般要求控制在 15 μSv/h 以内。"
    },
    {
        "id": 339,
        "type": "single",
        "question": "2、发现源辨脱落，图片中错误的做法是 （  ）。",
        "imageName": "image366.jpg",
        "options": {
            "A": "用手捡拾源辨",
            "B": "远离",
            "C": "立即报告",
            "D": "应急处置"
        },
        "correctAnswer": "A",
        "note": "安全铁律：源辨脱落时，绝对禁止徒手直接接触放射源，否则极易造成严重的局部急性放射性灼伤。"
    },
    {
        "id": 340,
        "type": "single",
        "question": "3、探伤作业是，必须有（  ）人以上同时在场。",
        "imageName": "image367.jpg",
        "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
        },
        "correctAnswer": "A",
        "note": "安全规定：探伤作业严禁单人操作，必须至少 2 人同时在场协同与监护。"
    },
    {
        "id": 341,
        "type": "single",
        "question": "4、指出探伤装置临时现场保存中的错误。（  ）",
        "imageName": "image368.jpg",
        "options": {
            "A": "没有临时贮存场所",
            "B": "没有红外和监视器",
            "C": "没有保险柜",
            "D": "保险柜没有粘贴电离辐射警告标志"
        },
        "correctAnswer": "D",
        "note": "现场管理：临时存放探伤装置的保险柜等设施，外部必须醒目粘贴“电离辐射警告标志”。"
    },
    {
        "id": 342,
        "type": "single",
        "question": "5、每台探伤机必须配备（  ）以上的操作人员？",
        "imageName": "image369.jpg",
        "options": {
            "A": "1人",
            "B": "2人",
            "C": "3人",
            "D": "5人"
        },
        "correctAnswer": "B",
        "note": "人员配置：为了保障双人作业的底线要求，每台设备至少需要配备 2 名具备资质的操作人员。"
    },
    {
        "id": 343,
        "type": "single",
        "question": "6、图中的设备使用年限为（  ）。",
        "imageName": "image370.jpg",
        "options": {
            "A": "5年",
            "B": "10年",
            "C": "15年",
            "D": "20年"
        },
        "correctAnswer": "B",
        "note": "设备常识：常规工业伽马射线探伤设备主机的设计安全使用年限通常为 10 年。"
    },
    {
        "id": 344,
        "type": "single",
        "question": "7、γ探伤机运输要求，错误的是 （  ）。",
        "imageName": "image371.jpg",
        "options": {
            "A": "专车运输",
            "B": "灯光报警",
            "C": "专人押运",
            "D": "专职司机"
        },
        "correctAnswer": "B",
        "note": "运输规范：放射源运输必须专车、专职司机并有专人押运，但常规道路运输并不强制要求车辆配置特殊灯光报警。"
    },
    {
        "id": 345,
        "type": "single",
        "question": "8、根据图中按顺序显示的数字判断，这是探伤机操作的哪个过程？（  ）",
        "imageName": "image372.jpg",
        "options": {
            "A": "出源过程",
            "B": "曝光过程",
            "C": "收源过程",
            "D": "源在容器中"
        },
        "correctAnswer": "A",
        "note": "实操判断：结合图意（源组件向外推出至曝光点），此流程为出源过程。"
    },
    {
        "id": 346,
        "type": "single",
        "question": "9、2004年5月29日凌晨4点半左右，上海某检测公司在结束探伤作业后，由一名司机独自驾驶一辆墨绿色的小解放车将含有Se-75放射源（Ⅲ类）的探伤设备送回源库，在途经上海金山区一偏僻的马路时，因劳累而停车睡觉，等他在早晨８时醒过来，发现放在车上装有硒-75放射源的探伤设备丢失。该事故应定性为 _______ 。（  ）",
        "options": {
            "A": "较大辐射事故",
            "B": "严重辐射事故",
            "C": "特别重大辐射事故",
            "D": "一般辐射事故"
        },
        "correctAnswer": "A",
        "note": "事故定级：丢失 Ⅲ 类放射源，依法定标准被定性为“较大辐射事故”。"
    },
    {
        "id": 347,
        "type": "single",
        "question": "10、《放射性物品道路运输管理规定》第二十四条指出：二、三类放射性物品启运前，承运人应当向托运人查验 _______ 。（  ）",
        "options": {
            "A": "国务院核安全主管部门关于核与辐射安全分析报告书的审批文件",
            "B": "公安部门关于准予道路运输放射性物品的审批文件",
            "C": "国务院核安全主管部门环境影响评价批复文件",
            "D": "上级管理部门的所有相关文件"
        },
        "correctAnswer": "B",
        "note": "安保联防：防盗是运输的核心，启运前必须查验公安部门出具的准予运输的审批文件。"
    },
    {
        "id": 348,
        "type": "single",
        "question": "11、伽马射线探伤操作前安全检查的内容不包括 _____ 。（  ）",
        "options": {
            "A": "表面污染监测",
            "B": "主机的安全机构是否有效可靠",
            "C": "铭牌是否清晰",
            "D": "驱动和导管是否变形破损"
        },
        "correctAnswer": "A",
        "note": "实务操作：探伤作业前的常规检查主要针对设备的物理与机械状态。表面污染监测通常属于定期检测或异常事件后的排查，不需要在每次常规出源前都进行。"
    },
    {
        "id": 349,
        "type": "single",
        "question": "12、伽马射线探伤单位应建立辐射安全和防护管理机构，并至少 _____ 。（  ）",
        "options": {
            "A": "设置2名本科学历以上辐射安全和防护负责人和2名辐射防护人员或安全员",
            "B": "设置2名本科学历以上辐射安全和防护负责人和1名辐射防护人员或安全员",
            "C": "设置1名本科学历以上辐射安全和防护负责人和1名辐射防护人员或安全员",
            "D": "设置1名本科学历以上辐射安全和防护负责人和5名辐射防护人员或安全员"
        },
        "correctAnswer": "C",
        "note": "机构编制：法规要求探伤单位必须设立专职管理机构，最基础的人员配置底线是“1名负责人 + 1名安全员”。"
    },
    {
        "id": 350,
        "type": "single",
        "question": "13、无迷道探伤室门的防护性能应 _____ 同侧墙的防护性能。（  ）",
        "options": {
            "A": "不相同于",
            "B": "差于",
            "C": "略差于",
            "D": "相同于"
        },
        "correctAnswer": "D",
        "note": "屏蔽设计：如果没有迷道（迷宫式通道）作为缓冲，探伤室的防护门直接面对辐射场，因此其屏蔽能力必须与同侧墙壁保持一致（等效），不能成为防护薄弱点。"
    },
    {
        "id": 351,
        "type": "single",
        "question": "14、不属于辐射防护人员或安全员职责是 _____ 。（  ）",
        "options": {
            "A": "组织开展相关辐射监测，并负责监测数据的记录及管理",
            "B": "参与本单位的辐射应急行动，控制应急人员的受照剂量",
            "C": "负责个人剂量计及辐射监测仪的维护、检定及比对",
            "D": "操作探伤机"
        },
        "correctAnswer": "D",
        "note": "岗位职责：安全员的核心职责是“监督与防护管理”（A、B、C），而“操作探伤机”属于探伤操作工的具体技术业务。"
    },
    {
        "id": 352,
        "type": "single",
        "question": "15、使用放射性同位素的单位需要将放射性同位素转移到外省、自治区、直辖市使用的，应当于 _______ 持许可证复印件向使用地省级生态环境主管部门备案。（  ）",
        "options": {
            "A": "活动实施前10日内",
            "B": "活动实施前15日内",
            "C": "活动实施前7日内",
            "D": "活动实施前30日内"
        },
        "correctAnswer": "A",
        "note": "跨省备案时效：根据许可管理办法，异地使用的备案必须在活动实施前的 10 日内完成。"
    },
    {
        "id": 353,
        "type": "single",
        "question": "16、使用放射性同位素的单位需要将放射性同位素转移到外省、自治区、直辖市使用的，应当于活动实施前10日内持许可证复印件向使用地省级生态环境主管部门备案，书面报告 _____ ，并接受使用地生态环境主管部门的监督管理。（  ）",
        "options": {
            "A": "移出地省级卫生主管部门",
            "B": "国家生态环境主管部门",
            "C": "移出地省级生态环境主管部门和国家生态环境主管部门",
            "D": "移出地省级生态环境主管部门"
        },
        "correctAnswer": "D",
        "note": "跨省监管逻辑：除了向“使用地”备案，还必须让“娘家人”（移出地的省级生态环境部门）知晓去向，形成闭环监管。"
    },
    {
        "id": 354,
        "type": "single",
        "question": "17、便携式伽马探伤机，源容器便于人工搬运且 _____ 。（  ）",
        "options": {
            "A": "质量不超过100kg",
            "B": "质量不超过1000kg",
            "C": "质量不超过300kg",
            "D": "质量不超过50kg"
        },
        "correctAnswer": "D",
        "note": "设备标准：为了确保人工能够安全搬运，防止因过重导致跌落摔坏源容器，便携式探伤机的重量被严格限制在 50kg 以内。"
    },
    {
        "id": 355,
        "type": "single",
        "question": "18、在伽马探伤收源过程中，应密切关注辐射剂量监测仪的数值变化，只有 _____ 方可关闭安全锁，并进行拆卸导管及驱动缆作业。（  ）",
        "options": {
            "A": "当辐射剂量水平逐渐减小时",
            "B": "当辐射剂量水平稳定在某一值不变时",
            "C": "当辐射剂量水平逐渐增大时",
            "D": "当辐射剂量水平降到正常值时"
        },
        "correctAnswer": "D",
        "note": "安全操作：收源后，必须通过剂量仪确认辐射水平已降至环境本底（正常值），这才能证明放射源已完全安全回到屏蔽体内。"
    },
    {
        "id": 356,
        "type": "single",
        "question": "19、根据辐射剂量水平的监测数据进行监督区与控制区的划分，应该 _______ ，防止无关人员进入。（  ）",
        "options": {
            "A": "拉警戒绳，分别悬挂不同颜色的彩旗",
            "B": "聘请保安人员分别沿监督区与控制区边界围成一圈",
            "C": "拉警戒绳，分别悬挂监督区与控制区的警告标识",
            "D": "用水泥预制板沿分别沿监督区与控制区边界围成一圈，分别悬挂监督区与控制区的警告标识"
        },
        "correctAnswer": "C",
        "note": "现场警戒：规范的现场物理隔离方式是拉设警戒绳，并悬挂符合国家标准的电离辐射警告标志。"
    },
    {
        "id": 357,
        "type": "single",
        "question": "20、伽马射线探伤装置常用伽马射线放射源Co-60的主要γ射线能量为 _______ （  ）",
        "options": {
            "A": "1.17、1.33MeV",
            "B": "0.662MeV",
            "C": "0.060MeV",
            "D": "0.280MeV"
        },
        "correctAnswer": "A",
        "note": "物理特性：钴-60（Co-60）衰变时会释放出两束特征能量的伽马射线，分别是 1.17 MeV 和 1.33 MeV。"
    },
    {
        "id": 358,
        "type": "single",
        "question": "21、押运人员 _____ ，并使用便携式辐射剂量（率）监测仪对运输容器的表面、装源口封盖、驾驶室等部位及其周围进行辐射剂量（率）监测。（  ）",
        "options": {
            "A": "只要在装车时对探伤装置进行监护",
            "B": "只要在卸车时对探伤装置进行监护",
            "C": "只要在运输途中停车休息时对探伤装置进行监护",
            "D": "必须全程监护探伤装置"
        },
        "correctAnswer": "D",
        "note": "运输规范：放射源在公路运输过程中的丢失风险极高，押运人员的法定职责是必须做到“全程监护”，不能有任何脱离视线的盲区。"
    },
    {
        "id": 359,
        "type": "single",
        "question": "22、用伽马射线来照射待探伤的工件时，若其内部有气孔、夹渣等缺陷，射线穿过有缺陷的路径比没有缺陷的路径 _____ 。（  ）",
        "options": {
            "A": "所透过的物质密度要小得多，其强度就减弱得少些，底片的感光量就小些",
            "B": "所透过的物质密度要小得多，其强度就减弱得大些，底片的感光量就大些",
            "C": "所透过的物质密度要大得多，其强度就减弱得少些，底片的感光量就大些",
            "D": "所透过的物质密度要小得多，其强度就减弱得少些，底片的感光量就大些"
        },
        "correctAnswer": "D",
        "note": "探伤原理：气孔等缺陷意味着该处的物质密度比实心金属“小”，因此射线穿过时被吸收（减弱）得“少”，透过去的射线更多，底片该处的感光量也就“大”（显影后更黑）。"
    },
    {
        "id": 360,
        "type": "single",
        "question": "23、常用的伽马射线探伤源Se-75的半衰期为 _____ 。（  ）",
        "options": {
            "A": "120天",
            "B": "5.27年",
            "C": "33年",
            "D": "74天"
        },
        "correctAnswer": "A",
        "note": "核素常识：硒-75（Se-75）是近年来工业探伤中常用的中低能伽马源，其物理半衰期为 119.8 天（通常记为 120 天）。"
    },
    {
        "id": 361,
        "type": "single",
        "question": "24、当伽马探伤装置处于照射状态时，使用便携式辐射剂量率监测仪从探伤位置四周由远及近进行辐射剂量率水平的监测，根据《工业伽马射线探伤放射防护标准》（GBZ132-2008）中的规定， _____ 为监督区范围。（  ）",
        "options": {
            "A": "辐射剂量率 ≥ 15μGy•h-1",
            "B": "2.5μGy•h-1 ＜ 辐射剂量率 ≤ 15μGy•h-1",
            "C": "辐射剂量率 ≤ 2.5μGy•h-1",
            "D": "辐射剂量率 ≤ 150μGy•h-1"
        },
        "correctAnswer": "B",
        "note": "分区标准：监督区介于公共本底和高风险控制区之间，其剂量率范围法定界定在 2.5 到 15 μGy/h 之间。"
    },
    {
        "id": 362,
        "type": "single",
        "question": "25、当探伤装置处于照射状态时，使用便携式辐射剂量率监测仪从探伤位置四周由远及近进行辐射剂量率水平的监测，根据《工业伽马射线探伤放射防护标准》（GBZ132-2008）中的规定， _____ 为控制区边界。（  ）",
        "options": {
            "A": "辐射剂量率≤15μGy•h-1",
            "B": "辐射剂量率≤2.5μGy•h-1",
            "C": "辐射剂量率≤1μGy•h-1",
            "D": "辐射剂量率≤0.15μGy•h-1"
        },
        "correctAnswer": "A",
        "note": "控制区红线：控制区边界（拉设警戒绳和警示牌的位置）的剂量率限值必须控制在 15 μGy/h 及以下。"
    },
    {
        "id": 363,
        "type": "single",
        "question": "26、Co-60的平均伽马射线能量为1.25MeV，Cs-137的特征伽马射线能量为0.661MeV，因此， _____ 。（  ）",
        "options": {
            "A": "Co-60的伽马射线对同一材料（例如钢）探伤透照厚度比Cs-137伽马射线的要大",
            "B": "Co-60的伽马射线对同一材料（例如钢）探伤透照厚度比Cs-137伽马射线的要小",
            "C": "Co-60的伽马射线对同一材料（例如钢）探伤透照厚度和Cs-137伽马射线的一样",
            "D": "Co-60的伽马射线对同一材料（例如钢）探伤透照厚度和Cs-137伽马射线相比较不可预知"
        },
        "correctAnswer": "A",
        "note": "物理特性：伽马射线的能量越高，其穿透物质的能力就越强。钴-60 能量高于 铯-137，所以能透照更厚的钢材。"
    },
    {
        "id": 364,
        "type": "single",
        "question": "27、放射源库必须设置红外和监视器等保安设施，源库门应为（  ）。",
        "options": {
            "A": "武警人员守卫",
            "B": "专职保安人员守卫",
            "C": "双人双锁",
            "D": "双人双锁加专职保安人员守卫"
        },
        "correctAnswer": "C",
        "note": "库房安防：放射源库门禁管理的法定底线标准是“双人双锁”，即必须由两名独立保管人同时到场、分别持钥才能开门。"
    },
    {
        "id": 365,
        "type": "single",
        "question": "28、持有放射源的单位将废旧放射源交回生产单位、返回原出口方或者送交放射性废物集中贮存单位贮存的，应当 _____ 向其所在地省、自治区、直辖市人民政府生态环境主管部门备案。（  ）",
        "options": {
            "A": "在该活动完成之日起10日内",
            "B": "在该活动完成之日起12日内",
            "C": "在该活动完成之日起15日内",
            "D": "在该活动完成之日起20日内"
        },
        "correctAnswer": "D",
        "note": "退役备案时限：涉及废旧放射源转移送贮或交回的备案，法定限期统一规定为活动完成后的 20 日内。"
    },
    {
        "id": 366,
        "type": "single",
        "question": "29、使用单位应当在活动结束后 _____ 到使用地省级生态环境主管部门办理备案注销手续，并书面告知移出地省级生态环境主管部门。（  ）",
        "options": {
            "A": "5日内",
            "B": "20日内",
            "C": "15日内",
            "D": "30日内"
        },
        "correctAnswer": "B",
        "note": "异地注销时限：跨省作业结束后，撤回设备并办理异地备案注销手续的法定期限同样是 20 日内。"
    },
    {
        "id": 367,
        "type": "single",
        "question": "30、伽马射线探伤放射性源的转出、转入单位应当 _____ ，分别向其所在地省、自治区、直辖市人民政府生态环境主管部门备案。（  ）",
        "options": {
            "A": "在转让活动完成之日起10日内",
            "B": "在转让活动完成之日起15日内",
            "C": "在转让活动完成之日起18日内",
            "D": "在转让活动完成之日起20日内"
        },
        "correctAnswer": "D",
        "note": "流转备案时限：无论是转出方还是转入方，完成产权转移后的法定双向备案期限皆为 20 日。"
    },
    {
        "id": 368,
        "type": "single",
        "question": "31、探伤装置用毕不能及时返回本单位放射源库保管的，应利用保险柜现场保存，但须 _______ 。（  ）",
        "options": {
            "A": "雇当地民工暂时看守",
            "B": "保险柜上再加一道锁，再保一道险",
            "C": "派专人24小时现场值班",
            "D": "由探伤工作人员带回家或宿舍中暂时保管"
        },
        "correctAnswer": "C",
        "note": "现场安保：放射源临时在外存放不仅需要保险柜等物理防护，更要求必须有本单位专人进行 24 小时现场值守，严禁带回宿舍或雇佣无关人员看守。"
    },
    {
        "id": 369,
        "type": "single",
        "question": "32、伽马射线探伤作业结束后应对探伤装置及周围环境进行辐射水平测量， _____ 。（  ）",
        "options": {
            "A": "由任何在场人员在检查记录上签字，方能携带探伤装置离开现场",
            "B": "由现场探伤人员在检查记录上签字，方能携带探伤装置离开现场",
            "C": "由检测人员在检查记录上签字，方能携带探伤装置离开现场",
            "D": "必须等到公司最高领导者抵达现场亲自在检查记录上签字，方能携带探伤装置离开现场"
        },
        "correctAnswer": "C",
        "note": "（注：依照官方题库答案为 C）实操流程：探伤结束后必须由负责检测的人员通过仪器确认辐射水平正常，并签字确认源已安全收回后，才能撤离。"
    },
    {
        "id": 370,
        "type": "single",
        "question": "33、伽马射线探伤操作人员 _____ 对探伤装置的配件进行检查、维护，并做好记录。（  ）",
        "options": {
            "A": "每个月",
            "B": "每两个月",
            "C": "每三个月",
            "D": "每六个月"
        },
        "correctAnswer": "A",
        "note": "设备维保：工业伽马射线探伤机工作环境通常较恶劣，法定强制要求至少“每个月”对配件进行一次例行检查和维护。"
    },
    {
        "id": 371,
        "type": "single",
        "question": "34、伽马射线探伤装置按源容器的可移动性可分为 _______ 、M类和F类三类。（  ）",
        "options": {
            "A": "A类",
            "B": "B类",
            "C": "P类",
            "D": "C类"
        },
        "correctAnswer": "C",
        "note": "标准分类：探伤机按移动性分为 P类（便携式，Portable）、M类（移动式，Mobile）和 F类（固定式，Fixed）。"
    },
    {
        "id": 372,
        "type": "single",
        "question": "35、伽马射线探伤装置的机体（源容器）主要由 _____ 、金属外壳、手柄、安全锁、前后连接器等部件构成。（  ）",
        "options": {
            "A": "铸铁屏蔽体",
            "B": "贫铀屏蔽体",
            "C": "紫铜屏蔽体",
            "D": "铝合金屏蔽体"
        },
        "correctAnswer": "B",
        "note": "设备构造：现代伽马探伤机为了在极小体积内实现强大的射线屏蔽，其源容器内部核心通常采用高密度的“贫铀屏蔽体”。"
    },
    {
        "id": 373,
        "type": "single",
        "question": "36、2011年11月11日，山东某检测公司探伤现场的2名工作人员同时擅离职守，使含有Ir-192放射源（Ⅱ类）的探伤机处于无人看守状态，待2人回到探伤现场时，探伤机已经丢失。该事故应定性为 _______ 。（  ）",
        "options": {
            "A": "较大辐射事故",
            "B": "重大辐射事故",
            "C": "特别重大辐射事故",
            "D": "一般辐射事故"
        },
        "correctAnswer": "B",
        "note": "事故定级：铱-192 探伤源通常为 Ⅱ 类源。根据法规，丢失、被盗或失控 Ⅱ 类放射源被定性为“重大辐射事故”。"
    },
    {
        "id": 374,
        "type": "single",
        "question": "37、2006年7月，某检测单位在未办理备案登记的情况下，将一台探伤设备转移到山东作业，探伤结束后，由于设备故障放射源未能回收到探伤设备中，工作人员由于未携带个人剂量报警仪和辐射监测仪，未能发现Ⅲ类Se-75放射源丢失在施工现场。放射源被人捡走，导致一人受超剂量照射手部烧伤，多人误照。该事故应定性为 _____ 。（  ）",
        "options": {
            "A": "一般辐射事故",
            "B": "重大辐射事故",
            "C": "特别重大辐射事故",
            "D": "较大辐射事故"
        },
        "correctAnswer": "D",
        "note": "事故定级：此事故中丢失的是 Ⅲ 类源，且导致了人员局部灼伤（未达到严重致残或致死标准），依法定性为“较大辐射事故”。"
    },
    {
        "id": 375,
        "type": "single",
        "question": "38、2005年7月13日，黑龙江省哈尔滨市一居民楼有两家人相继得了怪病，被诊断为“骨髓造血受抑症”。经调查在1楼一名住户家中发现Ir-192放射源一枚（注：推算当事人捡拾时为Ⅲ类放射源），致使居民楼中6人住院，其中1位老人死亡，1名儿童多次病危。117 人疑似受照，进行了体检。该事故应定性为 _____ 。（  ）",
        "options": {
            "A": "一般辐射事故",
            "B": "较大辐射事故",
            "C": "重大辐射事故",
            "D": "特别重大辐射事故"
        },
        "correctAnswer": "C",
        "note": "事故定级：虽然该源衰变至 Ⅲ 类，但事故直接导致了 1 人死亡及多人重病。放射性同位素失控导致死亡的，依法升级定性为“重大辐射事故”。"
    },
    {
        "id": 376,
        "type": "single",
        "question": "39、1996年1月5日，吉林某公司在某石化企业施工现场丢失Ⅱ类Ir-192放射源一枚，被早上上班途经的宋××捡到，由于源辫比较精致，被误认为是精致的钥匙链，放入口袋中。上午10点左右宋××感觉头晕恶心，并伴有呕吐，回到宿舍休息。下午5点单位领导探望病情时才得知宋××捡到丢失的放射源，将宋××紧急送往医院并回收放射源。宋××将放射源揣入兜中达10个小时之久，经过截肢等多次手术，最后保住了性命。该事故应定性为 ___ 。（  ）",
        "options": {
            "A": "重大辐射事故",
            "B": "特别重大辐射事故",
            "C": "较大辐射事故",
            "D": "一般辐射事故"
        },
        "correctAnswer": "A",
        "note": "事故定级：丢失 Ⅱ 类放射源（Ir-192），且导致捡拾人员遭受极重度放射病（截肢伤残），定性为“重大辐射事故”。"
    },
    {
        "id": 377,
        "type": "single",
        "question": "40、重大辐射事故是指 _______ ，或者放射性同位素和射线装置失控导致2人以下（含2人）急性死亡或者10人以上（含10人）急性重度放射病、局部器官残疾。（  ）",
        "options": {
            "A": "Ⅴ类、豁免放射源丢失、被盗、失控",
            "B": "Ⅳ类、Ⅴ类放射源丢失、被盗、失控",
            "C": "Ⅱ类、Ⅲ类放射源丢失、被盗、失控",
            "D": "Ⅰ类、Ⅱ类放射源丢失、被盗、失控"
        },
        "correctAnswer": "D",
        "note": "事故分级法定标准：Ⅰ类、Ⅱ类放射源的丢失、被盗或失控是构成“重大辐射事故”的核心物理条件之一。"
    },
    {
        "id": 378,
        "type": "single",
        "question": "41、一般辐射事故是指 _______ ，或者放射性同位素和射线装置失控导致人员受到超过年剂量限值的照射。（  ）",
        "options": {
            "A": "Ⅰ类、Ⅱ类放射源丢失、被盗、失控",
            "B": "Ⅱ类、Ⅲ类放射源丢失、被盗、失控",
            "C": "Ⅳ类、Ⅴ类放射源丢失、被盗、失控",
            "D": "Ⅴ类与豁免放射源丢失、被盗、失控"
        },
        "correctAnswer": "C",
        "note": "事故定级：丢失、被盗、失控 Ⅳ类、Ⅴ类放射源属于风险相对可控的下限等级，依法定性为“一般辐射事故”。"
    },
    {
        "id": 379,
        "type": "single",
        "question": "42、辐射剂量（率）监测仪安全检查的主要内容是 _____ 。（  ）",
        "options": {
            "A": "该辐射剂量（率）监测仪的生产厂家是否已转产或倒闭",
            "B": "该辐射剂量（率）监测仪是否在检定范围内，是否能够正常使用（简单的判断方法）",
            "C": "该辐射剂量（率）监测仪的单位是否采用国际标准单位",
            "D": "探伤人员是否都会熟练使用该辐射剂量（率）监测仪"
        },
        "correctAnswer": "B",
        "note": "仪器管理：监测仪是探伤人员的“眼睛”，出源前必须确认其处于有效检定周期内且处于正常工作状态。"
    },
    {
        "id": 380,
        "type": "single",
        "question": "43、当移动式伽马探伤作业对射线不能有效屏蔽且作业人员无法躲避时，应使用 _______ ，以减小人员的受照剂量。（  ）",
        "options": {
            "A": "半自动探伤装置进行探测",
            "B": "全手动探伤装置进行探测",
            "C": "全自动探伤装置进行探测",
            "D": "半手动探伤装置进行探测"
        },
        "correctAnswer": "C",
        "note": "（注：根据探伤防护常识和答案 C，此时通常需要使用“全自动”来限制射线照射方向，以最大程度减少对操作人员的散射和直射剂量）"
    },
    {
        "id": 381,
        "type": "single",
        "question": "44、安全信息公示牌面积 _____ ，公示信息应采取喷绘（印刷）的方式进行制作。（  ）",
        "options": {
            "A": "应不小于0.5平方米",
            "B": "应不小于1平方米",
            "C": "应不小于2平方米",
            "D": "应不小于3平方米"
        },
        "correctAnswer": "C",
        "note": "现场警戒：探伤现场的安全信息公示牌为了保证足够的醒目程度和警示距离，其面积要求不小于 2 平方米。"
    },
    {
        "id": 382,
        "type": "single",
        "question": "45、在控制区边界外将作业时空气比释动能率大于 2.5μGy•h-1的范围划为监督区，并在其边界上设置清晰可见的 _____ 。（  ）",
        "options": {
            "A": "“禁止进入射线区”警告牌",
            "B": "“禁止一切人员进入”警告牌",
            "C": "“无关人员禁止入内”警告牌",
            "D": "“特许参观人员可进入”警示牌"
        },
        "correctAnswer": "C",
        "note": "分区标语：监督区不同于控制区（严禁进入），监督区的警示标语通常为“无关人员禁止入内”，以防公众误入。"
    },
    {
        "id": 383,
        "type": "single",
        "question": "46、同一固定式伽马探伤室内 _____ 探伤装置进行探伤作业。（  ）",
        "options": {
            "A": "每次只能启动 1 台",
            "B": "每次只能启动 2 台",
            "C": "每次可以启动3台",
            "D": "每次可以启动更多台"
        },
        "correctAnswer": "A",
        "note": "安全互锁：为防止交叉照射、剂量叠加或联锁失效，同一探伤室内严禁同时启动多台伽马探伤装置。"
    },
    {
        "id": 384,
        "type": "single",
        "question": "47、固定式伽马探伤室应安装固定式辐射剂量（率）监测仪并 _____ 。（  ）",
        "options": {
            "A": "与警示灯联锁",
            "B": "与探伤室内的照明灯联锁",
            "C": "与摄像头联锁",
            "D": "与门机联锁"
        },
        "correctAnswer": "D",
        "note": "门机联锁：固定探伤室的监测仪必须与防护门实现门机联锁，确保室内有辐射时门无法打开，或开门瞬间立刻降源。"
    },
    {
        "id": 385,
        "type": "single",
        "question": "48、固定式伽马探伤室屏蔽墙外30cm处空气比释动能率 _____ 。（  ）",
        "options": {
            "A": "不大于 2.5 μGy•h-1",
            "B": "不大于 25 μGy•h-1",
            "C": "不大于 1 μGy•h-1",
            "D": "不大于 10 μGy•h-1"
        },
        "correctAnswer": "A",
        "note": "屏蔽设计限值：固定探伤室属于长期运行设施，其屏蔽墙外的剂量率标准远严于野外临时边界，必须控制在 2.5 μGy/h 以内。"
    },
    {
        "id": 386,
        "type": "single",
        "question": "49、探伤装置装源（包括更换放射源）应由放射源生产单位进行操作，并承担安全责任； _____ 。（  ）",
        "options": {
            "A": "生产、销售、使用探伤装置单位也可自行进行装源操作",
            "B": "生产、销售、使用探伤装置单位不得自行进行装源操作",
            "C": "生产、销售、使用探伤装置单位可聘请人指导自行进行装源操作",
            "D": "放射源生产单位也可委托关系友好单位进行装源操作"
        },
        "correctAnswer": "B",
        "note": "装源红线：装源/换源是伽马探伤事故极易爆发的高危环节，使用单位严禁私自拆装，必须由具备专业资质和专用设备的源生产单位实施。"
    },
    {
        "id": 387,
        "type": "single",
        "question": "50、射线探伤装置保管人员应定期核查探伤装置中的放射源，核实时应有 _____ ，核实记录应妥善保存。（  ）",
        "options": {
            "A": "2人在场",
            "B": "3人在场",
            "C": "4人在场",
            "D": "5人在场"
        },
        "correctAnswer": "A",
        "note": "双人制度：放射源的入库、出库、日常盘点均必须落实“双人管理”，核实时也必须保证 2 人同时在场。"
    },
    {
        "id": 388,
        "type": "single",
        "question": "51、放射源库应明确 _____ 专职负责放射源库的保管工作。（  ）",
        "options": {
            "A": "1名以上工作人员",
            "B": "2名以上工作人员",
            "C": "3名以上工作人员",
            "D": "5名以上工作人员"
        },
        "correctAnswer": "B",
        "note": "岗位编制：为了落实“双人双锁”的物理防范底线，放射源库必须在制度上明确至少 2 名专职保管员。"
    },
    {
        "id": 389,
        "type": "single",
        "question": "52、从事工业伽马射线探伤活动的辐射工作人员及辐射安全负责人应 ___ 。（  ）",
        "options": {
            "A": "通过中级以上辐射安全培训，经考试合格后持证上岗",
            "B": "通过初级以上辐射安全培训，经考试合格后持证上岗",
            "C": "通过高级以上辐射安全培训，经考试合格后持证上岗",
            "D": "通过高级以上辐射安全培训，不必经考试直接持证上岗"
        },
        "correctAnswer": "A",
        "note": "人员资质：工业伽马射线探伤属于具有较高辐射风险的活动（多涉及 II、III 类源），因此要求从业者必须通过“中级”以上的辐射安全培训并考核合格。"
    },
    {
        "id": 390,
        "type": "single",
        "question": "53、探伤工作人员的个人剂量档案应保存至 _____ （  ）。",
        "options": {
            "A": "辐射工作人员年满六十周岁",
            "B": "辐射工作人员年满七十五周岁",
            "C": "辐射工作人员年满六十五周岁",
            "D": "辐射工作人员年满八十周岁"
        },
        "correctAnswer": "B",
        "note": "职业健康：为了能够长期追溯辐射可能带来的远期随机性效应（如癌症诱发），法定要求剂量档案至少保存至员工年满 75 周岁。"
    },
    {
        "id": 391,
        "type": "single",
        "question": "54、辐射工作人员上岗前，应进行上岗前职业健康检查， _____ 。（  ）",
        "options": {
            "A": "本人没有传染疾病的工作人员，才可参加探伤工作",
            "B": "没有家族癌症发病史的工作人员，方可参加探伤工作",
            "C": "符合辐射工作人员健康标准的，方可参加探伤工作",
            "D": "已有孩子且孩子健康的工作人员，方可参加探伤工作"
        },
        "correctAnswer": "C",
        "note": "上岗门槛：辐射从业有专门的《放射工作人员职业健康要求》国家标准，必须经体检确认各项生理指标（如白细胞、晶状体等）符合该专门标准方可上岗。"
    },
    {
        "id": 392,
        "type": "single",
        "question": "55、不属于伽玛射线探伤装置保管人员职责是 _____ 。（  ）",
        "options": {
            "A": "遵守辐射安全和防护管理制度，执行探伤装置保管相关规程，熟练使用辐射剂量（率）监测仪",
            "B": "负责移动式射线探伤装置的出入库管理及安全状况检查",
            "C": "发现辐射安全隐患及时向辐射安全和防护负责人报告",
            "D": "负责对辐射工作人员进行辐射防护知识和监测仪表操作技能的培训"
        },
        "correctAnswer": "D",
        "note": "职责划定：保管人员的核心任务是“看好源和设备”（A、B、C）。而“组织培训”属于辐射安全防护负责人（或管理机构）的统筹职责。"
    },
    {
        "id": 393,
        "type": "single",
        "question": "56、伽玛射线探伤装置保管人员职责之一是 _____ 。（  ）",
        "options": {
            "A": "负责辐射防护用品与应急物资的管理及发放",
            "B": "负责作业前后对探伤装置进行安全检查，作业过程中对作业场所进行安全检查",
            "C": "负责定期对射线探伤装置及保管场所进行安全检查并记录",
            "D": "组织本单位相关部门及人员开展辐射应急行动"
        },
        "correctAnswer": "C",
        "note": "职责划定：作为库房“守门人”，保管人员必须定期对库内的探伤装置及场所本身的安全状况进行检查并留存记录。"
    },
    {
        "id": 394,
        "type": "single",
        "question": "57、不属于伽马射线探伤作业人员职责的是 _____ 。（  ）",
        "options": {
            "A": "遵守辐射安全和防护管理制度，执行射线探伤作业相关的操作规程",
            "B": "定期组织对探伤室、探伤装置和放射源的安全状况进行检查并记录",
            "C": "负责作业前后对探伤装置进行安全检查，作业过程中对作业场所进行安全检查",
            "D": "发现辐射安全隐患及时向辐射安全和防护负责人报告"
        },
        "correctAnswer": "B",
        "note": "职责划定：作业人员（探伤工）主要负责一线实操和现场防护（A、C、D）。而“定期组织检查”这种具有管理属性的工作，属于辐射安全负责人的职责。"
    },
    {
        "id": 395,
        "type": "single",
        "question": "58、伽马射线探伤作业人员职责之一是 _____ 。（  ）",
        "options": {
            "A": "在探伤作业时采取合理的防护措施减少人员受照剂量",
            "B": "负责辐射防护用品与应急物资的管理及发放",
            "C": "负责辐射安全和防护机构及人员的监督和管理工作",
            "D": "负责移动式射线探伤装置的出入库管理及安全状况检查"
        },
        "correctAnswer": "A",
        "note": "职责划定：作为直接暴露在辐射风险下的一线人员，作业人员最首要的职责就是在作业时做好自身和现场的合理防护。"
    },
    {
        "id": 396,
        "type": "single",
        "question": "59、辐射安全和防护负责人的职责不包括 _____ 。（  ）",
        "options": {
            "A": "负责辐射安全和防护管理制度的贯彻实施",
            "B": "负责移动式射线探伤装置的出入库管理及安全状况检查",
            "C": "组织本单位相关部门及人员开展辐射应急行动",
            "D": "组织对本单位的辐射安全和防护状况进行评估"
        },
        "correctAnswer": "B",
        "note": "职责划定：防护负责人是单位辐射安全的“大管家”，负责制度、应急和评估等宏观管理（A、C、D）。而出入库管理这种具体的看管动作是“保管人员”的专属职责。"
    },
    {
        "id": 397,
        "type": "single",
        "question": "60、辐射安全和防护负责人的职责之一是 _____ 。（  ）",
        "options": {
            "A": "定期组织对探伤室、探伤装置和放射源的安全状况进行检查并记录",
            "B": "负责辐射安全和防护管理制度的贯彻实施",
            "C": "负责定期对射线探伤装置及保管场所进行安全检查并记录",
            "D": "负责作业前后对探伤装置进行安全检查，作业过程中对作业场所进行安全检查"
        },
        "correctAnswer": "B",
        "note": "（注：依照官方答案，此题最优概括为B）作为统筹管理者，其首要的核心职责就是确保所有辐射安全制度在全单位得到贯彻与实施。"
    },
    {
        "id": 398,
        "type": "single",
        "question": "61、辐射安全和防护负责人应由 _____ 。（  ）",
        "options": {
            "A": "探伤单位内正职领导担任",
            "B": "探伤单位内任何一名副职领导担任",
            "C": "探伤单位内负责辐射安全和防护的领导担任",
            "D": "也可由上级管理部门外派一名副职领导兼任"
        },
        "correctAnswer": "C",
        "note": "岗位安排：法规要求辐射安全防护负责人应由本单位内分管辐射安全工作的管理层领导担任，以确保安全工作能够获得足够的资源调度和执行力。"
    },
    {
        "id": 399,
        "type": "single",
        "question": "62、伽马射线探伤单位应对本单位的辐射安全和防护状况进行年度评估，并于 _______ 。（  ）",
        "options": {
            "A": "每年12月31日前向环保部门提交本年度的评估报告",
            "B": "每年9月31日前向环保部门提交上一年度的评估报告",
            "C": "每年5月31日前向环保部门提交上一年度的评估报告",
            "D": "每年1月31日前向环保部门提交上一年度的评估报告"
        },
        "correctAnswer": "D",
        "note": "法定时限：辐射工作单位必须在每年的 1 月 31 日前，向生态环境主管部门提交上一年度的安全评估报告。"
    },
    {
        "id": 400,
        "type": "single",
        "question": "63、伽马探伤作业中为了避免发生辐射事故的发生，探伤人员 _____ 。（  ）",
        "options": {
            "A": "在有些情况下可允许手接触源，但任何时候都不允许身体其他部位接触源",
            "B": "任何情况下都不允许手或身体其他部位接触源",
            "C": "大多数情况下不允许手或身体其他部位接触源，少数情况下允许",
            "D": "大多数情况下允许手或身体其他部位接触源，少数情况下不允许身体其他部位接触源"
        },
        "correctAnswer": "B",
        "note": "安全铁律：伽马探伤所使用的均是高危放射源，绝对、严禁、任何情况下都不允许身体任何部位直接接触放射源。"
    },
    {
        "id": 401,
        "type": "single",
        "question": "64、伽马源输出时卡堵（源摇不出伽马探伤设备）是伽马射线探伤常见的故障之一，其发生的可能原因是 _______ 或导源管弯曲半径太小。（  ）",
        "options": {
            "A": "导源管在工作过程中被异物砸坏变形",
            "B": "安全闭锁已完全打开",
            "C": "安全闭锁未完全打开",
            "D": "目前尚未清楚某种原因"
        },
        "correctAnswer": "C",
        "note": "故障排查：源摇不出通常是因为机械阻力。除了导源管弯曲过度或受损变形外，最常见的操作失误就是安全闭锁没有完全解开就强行摇出。"
    },
    {
        "id": 402,
        "type": "single",
        "question": "65、当伽马射线探伤装置发生故障时，以下错误的建议是 _____ 。（  ）",
        "options": {
            "A": "发扬“不怕死”的大无畏革命精神，速战速决；人多力量大，全员参与，群策群力，现场立即解决故障",
            "B": "尽量用长绳将伽马探伤设备拖至屏蔽处进行故障处理（如墙角）",
            "C": "不要用铅皮等屏蔽物将输源管及设备过牢盖死，以免影响后处理",
            "D": "处理时，采用防止外照射的三种基本方法：屏蔽、距离、时间，尽量采用屏蔽及距离"
        },
        "correctAnswer": "A",
        "note": "应急原则：处理辐射故障切忌盲目靠近和“人多力量大”，这会造成无谓的集体大剂量受照。必须遵循“距离、屏蔽、时间”原则，制定周密方案后由专业人员处置。"
    },
    {
        "id": 403,
        "type": "single",
        "question": "66、在寒冷的环境中，伽马射线探伤装置的驱动缆发生僵硬时，可在驱动缆及导源管中 _____ ，能起一定的缓解作用。（  ）",
        "options": {
            "A": "涂抹纯净水",
            "B": "涂抹高度酒精",
            "C": "涂抹肥皂水",
            "D": "涂抹柴油"
        },
        "correctAnswer": "D",
        "note": "实操经验：在严寒环境下，驱动缆可能因润滑脂冻结而发僵，涂抹低凝点的柴油可以起到除锈、润滑和防冻的缓解作用。"
    },
    {
        "id": 404,
        "type": "single",
        "question": "67、探伤人员将伽马探伤设备送合格的源库进行保存时，库房管理员在出入库时 _______ ，确认源是否在容器内，作好记录及保安工作。（  ）",
        "options": {
            "A": "必须对送伽马探伤设备的工作人员表面进行辐射测量",
            "B": "必须用曲柄摇手将放射源从伽马探伤设备摇出进行辐射测量",
            "C": "必须对伽马探伤设备表面进行辐射测量",
            "D": "必须对伽马探伤设备的放射源取出亲眼过目"
        },
        "correctAnswer": "C",
        "note": "入库核对：源是否安全回到容器内的唯一判定标准是测量容器表面的辐射剂量率，严禁重新摇出放射源“亲眼确认”。"
    },
    {
        "id": 405,
        "type": "single",
        "question": "68、在伽马射线探伤的放源和收源操作过程中，以下不正确的操作是 _____ 。（  ）",
        "options": {
            "A": "用力均匀",
            "B": "缓慢轻放",
            "C": "万一卡住，用力猛抻",
            "D": "缓慢轻收"
        },
        "correctAnswer": "C",
        "note": "操作禁忌：驱动缆卡住时“用力猛抻”极易拉断源辫，导致源脱落遗留在导管内的重大事故。"
    },
    {
        "id": 406,
        "type": "single",
        "question": "69、伽马射线探伤准备工作完毕后打开安全锁，开锁时人员必须在驱动缆一侧操作，目的是 _____ 。（  ）",
        "options": {
            "A": "为了方便打开安全锁操作",
            "B": "为了避免射线直接照射人体",
            "C": "为了避免打开安全锁时，弹簧意外弹出，造成人身伤害",
            "D": "为了防止其他机械事件"
        },
        "correctAnswer": "B",
        "note": "防护站位：探伤机的源引出口是屏蔽最薄弱（或无屏蔽）的直射通道，因此开锁时必须站在背向源出口的“驱动缆一侧”，以避开可能的射线直射。"
    },
    {
        "id": 407,
        "type": "single",
        "question": "70、伽马射线探伤准备工作完毕后打开安全锁，开锁时人员 _______ ，避免射线直接照射人体。（  ）",
        "options": {
            "A": "必须在驱动缆一侧操作",
            "B": "必须在驱动缆正中操作",
            "C": "不受限制地在驱动缆的任何位置操作",
            "D": "必须找便利于操作的位置操作"
        },
        "correctAnswer": "A",
        "note": "防护站位：同上题，核心目的是利用主机自身的屏蔽体挡住自己，必须站在源口的后方即“驱动缆一侧”进行操作。"
    },
    {
        "id": 408,
        "type": "single",
        "question": "71、为伽马射线探伤的安全操作起见，每次探伤作业 _______ 在场操作。（  ）",
        "options": {
            "A": "需1人以上（含1人）",
            "B": "需5人以上",
            "C": "需3人以上",
            "D": "需2人以上"
        },
        "correctAnswer": "D",
        "note": "（注：依照官方题库答案为 D）虽然前面类似题目有“以上”的表述，但这里的标准答案明确锁定在“双人作业制”这一刚性规定上，即必须 2 人以上。"
    },
    {
        "id": 409,
        "type": "single",
        "question": "72、伽马射线探伤操作结束后安全检查的主要内容不包括 _____ 。（  ）",
        "options": {
            "A": "源辫是否在主机内",
            "B": "导管内有无源辫",
            "C": "驱动缆能否从主机中卸下",
            "D": "铭牌是否清晰"
        },
        "correctAnswer": "D",
        "note": "实操规范：作业结束后的检查重心是防范“源卡堵”或“源脱落”（A、B、C都与此相关），而铭牌是否清晰不是每次作业后需要重点核对的安全隐患。"
    },
    {
        "id": 410,
        "type": "single",
        "question": "73、押运人员须全程监护探伤装置，并 _____ 对运输容器的表面、装源口封盖、驾驶室等部位及其周围进行辐射剂量（率）监测。（  ）",
        "options": {
            "A": "使用个人剂量计",
            "B": "使用便携式NaI(Tl)伽马谱仪",
            "C": "使用便携式辐射剂量（率）监测仪",
            "D": "使用个人剂量报警仪"
        },
        "correctAnswer": "C",
        "note": "仪器应用：进行环境和设备表面的剂量率水平测量，法定的工具是“便携式辐射剂量（率）监测仪”（俗称巡测仪）。个人剂量计和报警仪主要是用于个人防护。"
    },
    {
        "id": 411,
        "type": "single",
        "question": "74、伽马射线探伤装置 _____ 。（  ）",
        "options": {
            "A": "不必专车运输，但必须专人押运",
            "B": "必须专车运输，但不必专人押运",
            "C": "必须专车运输，专人押运",
            "D": "必须专车运输，武装押运"
        },
        "correctAnswer": "C",
        "note": "运输安保：放射源的公路运输必须满足“双专”要求：专车（不得混装其他无关货物或搭载无关乘客）和专人（至少一名专职押运员）。"
    },
    {
        "id": 412,
        "type": "single",
        "question": "75、伽马射线探伤源一般为Ⅱ类放射源，从运输管理而言，它应该属于 _____ 。（  ）",
        "options": {
            "A": "一类放射性物品",
            "B": "二类放射性物品",
            "C": "三类放射性物品",
            "D": "四类放射性物品"
        },
        "correctAnswer": "B",
        "note": "法规衔接：在我国《放射性物品运输安全管理条例》中，II类放射源被划归为“二类放射性物品”进行运输管理。"
    },
    {
        "id": 413,
        "type": "single",
        "question": "76、活度小于4×10^12 Bq和能量在0.5MeV以下的伽马放射源容器应采用 ___ 作为屏蔽防护材料（  ）。",
        "options": {
            "A": "塑料",
            "B": "水",
            "C": "铅、铁",
            "D": "铝"
        },
        "correctAnswer": "C",
        "note": "材料屏蔽：伽马射线穿透力强，必须使用原子序数大、密度高的重金属材料（如铅、铁、贫铀）进行有效屏蔽。"
    },
    {
        "id": 414,
        "type": "single",
        "question": "77、伽马射线探伤装置的放射源活度不得超过该伽马射线探伤装置 _____ 。（  ）",
        "options": {
            "A": "理论计算的最大装源活度",
            "B": "设计的最大额定装源活度",
            "C": "与相似装置类比得到的最大装源活度",
            "D": "最大装源活度（由单位某工程师确定）"
        },
        "correctAnswer": "B",
        "note": "设备安全限值：任何探伤设备在出厂时都有严格的设计评估，所装载的放射源活度绝对不能超过出厂标定的“最大额定装源活度”，否则会导致表面屏蔽失效。"
    },
    {
        "id": 415,
        "type": "single",
        "question": "78、禁止使用 _____ 的伽马射线探伤装置。（  ）",
        "options": {
            "A": "超过10年",
            "B": "超过8年",
            "C": "超过5年",
            "D": "超过2年"
        },
        "correctAnswer": "A",
        "note": "设备寿命：结合此前第 6 题的图片考点，常规伽马射线探伤装置的安全设计使用年限为 10 年，超期服役属于重大隐患，严禁使用。"
    },
    {
        "id": 416,
        "type": "single",
        "question": "79、在暂存库中放射源的伽马射线有小部分穿过放射源暂存库屏蔽体(包括铅板、屏蔽墙、顶棚)泄漏到周围环境中，对_______ 产生伽马射线外照射。（  ）",
        "options": {
            "A": "方圆80km范围内的公众",
            "B": "远离放射源暂存库的工作人员",
            "C": "周围的工作人员和公众",
            "D": "整个人类"
        },
        "correctAnswer": "C",
        "note": "辐射影响评估：微量的穿透辐射主要会对处于屏蔽体正外侧“周围”的工作人员和可能的公众产生本底以上的照射影响，且随距离平方迅速衰减。"
    },
    {
        "id": 417,
        "type": "single",
        "question": "80、在伽马射线探伤机运输过程中不会对 _____ 产生伽马射线外照射。（  ）",
        "options": {
            "A": "驾驶人员",
            "B": "押运人员",
            "C": "运输人员",
            "D": "远离运输路线的公众"
        },
        "correctAnswer": "D",
        "note": "辐射安全常识：运输容器外围的辐射剂量率在国家标准限值以内，且辐射随距离迅速衰减，因此对“远离路线”的普通公众不会产生影响。"
    },
    {
        "id": 418,
        "type": "single",
        "question": "81、在正常的伽马射线探伤时，下面表述不正确的是 _______ 。（  ）",
        "options": {
            "A": "对辐射工作场所周围的工作人员产生伽马射线外照射",
            "B": "会对辐射工作场所外公众产生伽马射线外照射",
            "C": "会对辐射工作场所周围的工作人员及辐射工作场所外公众产生伽马射线外照射",
            "D": "会对辐射工作场所周围的工作人员产生伽马射线外照射，但不会对辐射工作场所外公众产生伽马射线外照射"
        },
        "correctAnswer": "D",
        "note": "（注：依照官方题库答案为 D，此题为选出“不正确”表述的逆向选择题）实际情况中，正常探伤的控制区和监督区划分能够保护公众，公众在边界外受到的辐射剂量极低且合法合规，但物理上依然客观存在微弱的外照射贡献（不能说绝对为零），因此选项D的表述不严谨。"
    },
    {
        "id": 419,
        "type": "single",
        "question": "82、工业伽马射线探伤一般使用Ⅱ类放射源，Ⅱ类放射源为 ___ 。（  ）",
        "options": {
            "A": "极高危险源",
            "B": "高危险源",
            "C": "中危险源",
            "D": "低危险源"
        },
        "correctAnswer": "B",
        "note": "放射源分类：根据国家规定，Ⅰ类源为极高危险源，Ⅱ类源为高危险源，Ⅲ类源为危险源，Ⅳ类源为低危险源，Ⅴ类源为极低危险源。"
    },
    {
        "id": 420,
        "type": "single",
        "question": "83、伽马射线探伤项目的主要危险源为 ___ 对人员造成伤害。（  ）",
        "options": {
            "A": "放射源所发出的X射线",
            "B": "放射源所发出的伽马（γ）射线",
            "C": "放射源所发出的阿尔法（α）射线",
            "D": "放射源所发出的贝塔（β）射线"
        },
        "correctAnswer": "B",
        "note": "物理特性：顾名思义，“伽马射线”探伤机使用的放射源（如钴-60、铱-192等）主要是通过衰变释放极具穿透力的伽马（γ）射线来实现穿透金属底片感光的。"
    },
    {
        "id": 421,
        "type": "single",
        "question": "84、伽马固定探伤室的定点常规监测频率为 _____ 。（  ）",
        "options": {
            "A": "至少一年四次",
            "B": "至少一年一次",
            "C": "至少半年一次",
            "D": "至少三年一次"
        },
        "correctAnswer": "B",
        "note": "常规监测频率：按照防护标准，固定探伤室必须定期进行辐射环境监测，通常要求监测频率至少为每年一次。"
    },
    {
        "id": 422,
        "type": "single",
        "question": "85、进入伽马探伤室进行监测，判断放射源在探伤设备中的依据是 _____ 。（  ）",
        "options": {
            "A": "固定式辐射剂量（率）监测仪与便携式辐射剂量（率）监测仪的监测数据均高于本底",
            "B": "固定式辐射剂量（率）监测仪监测数据为本底，而便携式辐射剂量（率）监测仪的监测数据高于本底",
            "C": "固定式辐射剂量（率）监测仪与便携式辐射剂量（率）监测仪的监测数据均为本底",
            "D": "固定式辐射剂量（率）监测仪监测数据高于本底，而便携式辐射剂量（率）监测仪的监测数据为本底"
        },
        "correctAnswer": "C",
        "note": "安全确认：判断放射源已经完全退回屏蔽体内部的唯一依据是：室内所有的监测仪（无论是墙上的固定式还是手持的便携式）测出的数据都已经降至环境正常背景值（本底水平）。"
    },
    {
        "id": 423,
        "type": "single",
        "question": "86、进入伽马探伤室监测的注意事项为 _____ 。（  ）",
        "options": {
            "A": "每次进入探伤室前，工作人员先站在门口片刻，观察探伤室内是否有人滞留，然后持便携式辐射剂量（率）监测仪进入探伤室内进行监测",
            "B": "每次进入探伤室前，工作人员应先观察固定式辐射剂量（率）监测仪数值，然后持便携式辐射剂量（率）监测仪进入探伤室内进行监测",
            "C": "每次进入探伤室后，工作人员应先围绕探伤室内巡视一圈，然后持便携式辐射剂量（率）监测仪在探伤室内进行监测",
            "D": "每次进入探伤室前，工作人员应先将个人剂量计放置在探伤室门外，然后持便携式辐射剂量（率）监测仪进入探伤室内进行监测"
        },
        "correctAnswer": "B",
        "note": "进门规范：“先看仪，后进门”。在打开沉重的防护门进入迷道之前，必须先确认门外的固定监测仪显示数值正常，然后依然要手持便携仪一边测一边进入，防止固定仪器出现故障。"
    },
    {
        "id": 424,
        "type": "single",
        "question": "87、伽马探伤后收源过程中的主要监测目的是 _____ 。（  ）",
        "options": {
            "A": "为判断放射源是否能在导源管中移动自由",
            "B": "为判断放射源是否回收到探伤设备中",
            "C": "为判断放射源是否在导源管中",
            "D": "为判断导源管中是否存在放射源"
        },
        "correctAnswer": "B",
        "note": "监测目的：收源作业是极易发生卡源的环节，使用仪器进行监测的核心目的就是确认源已经安全、完全地回到了主机屏蔽容器内。"
    },
    {
        "id": 425,
        "type": "single",
        "question": "88、野外伽马探伤的分区监测的目的是划分 _____ 。（  ）",
        "options": {
            "A": "放射性区与非放射性区",
            "B": "红区和绿区",
            "C": "黄区与白区",
            "D": "监督区与控制区"
        },
        "correctAnswer": "D",
        "note": "现场分区：在野外空旷地带探伤，必须通过仪器实测的剂量率数据（2.5μGy/h和15μGy/h）来精准划分法定规定的“控制区”和“监督区”。"
    },
    {
        "id": 426,
        "type": "single",
        "question": "89、以下不正确的表述是 _____ 。（  ）",
        "options": {
            "A": "伽马探伤作业结束后，探伤作业人员应使用便携式辐射剂量（率）监测仪对装源容器表面进行辐射剂量（率）水平的监测，并记录。",
            "B": "伽马探伤作业过程中，探伤作业人员应使用便携式辐射剂量（率）监测仪不断地对装源容器表面进行辐射剂量（率）水平的监测，并记录。",
            "C": "伽马放射源运输过程中，押运人员应使用便携式辐射剂量（率）监测仪对装源容器表面进行辐射剂量（率）水平的监测，并记录。",
            "D": "装伽马放射源容器出入库时，库房管理员应使用便携式辐射剂量（率）监测仪对装源容器表面进行辐射剂量（率）水平的监测，并记录。"
        },
        "correctAnswer": "B",
        "note": "（注：依照官方题库答案为 B，要求选出不正确项）在作业过程中（也就是源被摇出曝光的阶段），源容器表面反而没有源，此时重点监测的是外围边界剂量，而不是跑到辐射极强的源附近去“不断监测容器表面”。"
    },
    {
        "id": 427,
        "type": "single",
        "question": "90、源容器监测的主要目的是 _______ 。（  ）",
        "options": {
            "A": "判断放射源是否处于装源容器内，装源容器的屏蔽是否符合要求",
            "B": "判断放射源是否处于装源容器内，容器内所装的放射源是什么核素",
            "C": "判断放射源是什么核素，且其活度是多少",
            "D": "判断放射源的类型和活度"
        },
        "correctAnswer": "A",
        "note": "监测实质：贴着源容器测数据，一是看源有没有回来（剂量是否下降），二是看容器屏蔽层有没有受损泄漏（表面剂量率是否超标），而不能直接测出里面是什么核素或具体活度。"
    },
    {
        "id": 428,
        "type": "single",
        "question": "91、伽马探伤单位应每季度将（  ）送有资质的单位进行检测，并取回个人剂量监测报告，归档保存。（  ）",
        "options": {
            "A": "个人剂量报警仪",
            "B": "便携式辐射剂量（率）测量仪",
            "C": "固定辐射剂量（率）测量仪式",
            "D": "个人剂量计"
        },
        "correctAnswer": "D",
        "note": "剂量管理：法定要求需要定期（每季度）送交专业第三方机构进行退火读取并出具法定报告的，只有个人的法定剂量计（如热释光剂量计）。"
    },
    {
        "id": 429,
        "type": "single",
        "question": "92、伽马探伤单位应 _______ 将个人剂量计送有资质的单位进行检测，并取回个人剂量监测报告，归档保存。（  ）",
        "options": {
            "A": "每天",
            "B": "每月",
            "C": "每季度",
            "D": "每年"
        },
        "correctAnswer": "C",
        "note": "法定时限：个人剂量计的法定常规监测周期通常为 3 个月（即每季度一次）。"
    },
    {
        "id": 430,
        "type": "single",
        "question": "93、个人剂量监测的主要目的是 _____ 。（  ）",
        "options": {
            "A": "了解辐射工作人员的个人累积剂量值，对辐射工作人员进行心理安慰",
            "B": "控制辐射工作人员的个人累积剂量不超过单位的管理限值，保障辐射工作人员的职业健康安全",
            "C": "了解辐射工作人员的个人累积剂量值，对辐射工作人员的家属有所交代",
            "D": "了解辐射工作人员的个人累积剂量值，以便对上级管理部门有个合理的交代"
        },
        "correctAnswer": "B",
        "note": "核心目的：个人剂量监测的核心是提供客观数据支撑，从而进行剂量控制，切实保障个人的职业健康与安全。"
    },
    {
        "id": 431,
        "type": "single",
        "question": "94、伽马射线探伤个人剂量监测的主要目的是 _______，保障辐射工作人员的职业健康安全 。（  ）",
        "options": {
            "A": "让管理部门放心",
            "B": "让公众放心",
            "C": "让工作人员的家人放心",
            "D": "控制辐射工作人员的个人累积剂量不超过单位的管理限值"
        },
        "correctAnswer": "D",
        "note": "同类强化题：再次强调，数据监测的落脚点是“控制剂量限值”，而不是为了应付管理或求心安。"
    },
    {
        "id": 432,
        "type": "single",
        "question": "95、便携式辐射剂量（率）监测仪应 _____ 进行检定，检定合格后方可使用。（  ）",
        "options": {
            "A": "每年探伤单位自行",
            "B": "每年选择另一个探伤单位",
            "C": "每年送有检定资质的计量部门",
            "D": "每年送有标准源的单位"
        },
        "correctAnswer": "C",
        "note": "计量要求：作为关乎人身安全的强制检定仪器，便携式监测仪（巡测仪）必须每年送往国家法定计量部门进行溯源检定。"
    },
    {
        "id": 433,
        "type": "single",
        "question": "96、便携式辐射剂量（率）监测仪应具有 _______ 及电池电量检查功能。（  ）",
        "options": {
            "A": "声、光报警",
            "B": "语音自动报告测量结果",
            "C": "出错后自动修复",
            "D": "自动校准"
        },
        "correctAnswer": "A",
        "note": "仪器功能：在嘈杂或视线不佳的工业探伤现场，仪器必须具备直观的“声、光”双重报警功能，以确保警示能够传达给操作者。"
    },
    {
        "id": 434,
        "type": "single",
        "question": "97、便携式辐射剂量（率）监测仪剂量率范围为：最低示值不高于 _______ ，最高示值不低于 100mGy•h-1。（  ）",
        "options": {
            "A": "1μGy•h-1",
            "B": "10μGy•h-1",
            "C": "0.1μGy•h-1",
            "D": "0.001μGy•h-1"
        },
        "correctAnswer": "C",
        "note": "仪器标准：根据便携式剂量仪的强制国家标准，为了能有效测出环境本底，仪器的最低测量示值必须不高于 0.1 μGy/h。"
    },
    {
        "id": 435,
        "type": "single",
        "question": "98、便携式辐射剂量（率）监测仪剂量率范围为：最低示值不高于 0.1μGy•h-1，最高示值不低于 _____ 。（  ）",
        "options": {
            "A": "10mGy•h-1",
            "B": "100mGy•h-1",
            "C": "500mGy•h-1",
            "D": "1Gy•h-1"
        },
        "correctAnswer": "B",
        "note": "仪器标准：同样地，为了在发生卡源事故时能够测出源附近的极高剂量率而不至于“爆表”，仪器的最高测量示值必须不低于 100 mGy/h。"
    },
    {
        "id": 436,
        "type": "single",
        "question": "99、个人剂量计主要用于 _____ 。（  ）",
        "options": {
            "A": "固定伽马射线探伤室的辐射剂量（率）监测",
            "B": "个人累计剂量常规监测",
            "C": "用于固定伽马射线探伤室、源库、作业现场的辐射剂量（率）定点监测",
            "D": "用于固定伽马射线探伤室、源库、作业现场的辐射剂量（率）巡测"
        },
        "correctAnswer": "B",
        "note": "（注：题目归位后，官方答案B完全正确）用途区分：个人剂量计佩戴在身上，专门用于长周期记录个人的累积吸收剂量。"
    },
    {
        "id": 437,
        "type": "single",
        "question": "100、固定式辐射剂量（率）监测仪主要用于 _______ 。（  ）",
        "options": {
            "A": "作业现场的辐射剂量（率）定点监测或巡测",
            "B": "个人累计剂量常规监测",
            "C": "固定伽马射线探伤室的辐射剂量（率）监测",
            "D": "固定伽马射线探伤室的辐射剂量（率）巡测"
        },
        "correctAnswer": "C",
        "note": "（注：题目归位后，官方答案C完全正确）固定式仪器主要锁死在墙面上，监控探伤室内或源库的整体剂量水平。"
    },
    {
        "id": 438,
        "type": "single",
        "question": "101、_____ 可用于固定伽马射线探伤室、源库、作业现场的辐射剂量（率）定点监测或巡测 。（  ）",
        "options": {
            "A": "便携式辐射剂量（率）监测仪",
            "B": "固定式辐射剂量（率）监测仪",
            "C": "个人剂量计",
            "D": "热释光(TLD)剂量计"
        },
        "correctAnswer": "A",
        "note": "仪器选用：只要涉及到需要在不同点位之间移动（巡测），或者灵活改变测量位置（定点监测），就必须使用“便携式”仪器。"
    },
    {
        "id": 439,
        "type": "single",
        "question": "102、便携式辐射剂量（率）监测仪可用于固定伽马射线探伤室、源库、作业现场的辐射剂量（率） _______ 。（  ）",
        "options": {
            "A": "连续监测",
            "B": "固定监测",
            "C": "定点监测或巡测",
            "D": "累计监测"
        },
        "correctAnswer": "C",
        "note": "功能定位：便携式监测仪的法定核心功能就是提供作业现场实时的“定点监测”和边界“巡测”。累计监测是个人剂量计的功能。"
    },
    {
        "id": 440,
        "type": "single",
        "question": "103、Co-60探伤源适合钢的探伤厚度范围是 _______ 。（  ）",
        "options": {
            "A": "3~15mm",
            "B": "3~20mm",
            "C": "40~200mm",
            "D": "5~40mm"
        },
        "correctAnswer": "C",
        "note": "穿透特性：钴-60（Co-60）释放的伽马射线能量高（平均 1.25 MeV），穿透力极强，专用于重型设备或极厚钢板（40~200mm）的探伤。"
    },
    {
        "id": 441,
        "type": "single",
        "question": "104、Ir-192探伤源适合钢的探伤厚度范围是 _______ 。（  ）",
        "options": {
            "A": "40~200mm",
            "B": "10~100mm",
            "C": "3~15mm",
            "D": "3~20mm"
        },
        "correctAnswer": "B",
        "note": "穿透特性：铱-192（Ir-192）能量适中，是目前工业探伤中应用最广泛的核素，非常适合常见的管道、压力容器等中等厚度钢板（10~100mm）探伤。"
    },
    {
        "id": 442,
        "type": "single",
        "question": "105、Ir-192源的半衰期为 _____ 。（  ）",
        "options": {
            "A": "32 天",
            "B": "128 天",
            "C": "120 天",
            "D": "74 天"
        },
        "correctAnswer": "D",
        "note": "核素常识：铱-192 的物理半衰期大约为 73.8 天，在考试和工程实践中通常取整数 74 天。由于衰变较快，探伤公司每年都需要数次更换新源。"
    },
    {
        "id": 443,
        "type": "single",
        "question": "106、Co-60源的半衰期为 _____ 。（  ）",
        "options": {
            "A": "33 年",
            "B": "5.27 年",
            "C": "120 天",
            "D": "74 天"
        },
        "correctAnswer": "B",
        "note": "核素常识：钴-60 的半衰期较长，约为 5.27 年。这使得钴源设备的使用周期较长，但也意味着废旧钴源需要更长期的安全管控。"
    },
    {
        "id": 444,
        "type": "single",
        "question": "107、从事移动探伤作业的单位，应配备与伽马射线探伤装置 _______ ，以减少换源过程中的辐射剂量。（  ）",
        "options": {
            "A": "相适应的换源器",
            "B": "适应的准直器",
            "C": "另一个放射源容器",
            "D": "不相适应的换源器"
        },
        "correctAnswer": "A",
        "note": "实操硬件：换源是探伤行业最高危的动作，严禁违规裸露操作，必须使用与原探伤机型号严格匹配、相适应的专用“换源器”。"
    },
    {
        "id": 445,
        "type": "single",
        "question": "108、从事移动探伤作业的单位， 应配备与伽马射线探伤装置相适应的换源器， ___ 。（  ）",
        "options": {
            "A": "以减少换源过程中探伤人员的工作量",
            "B": "以减少换源过程中繁琐的操作步骤",
            "C": "以减少换源过程中意外事故的发生",
            "D": "以减少换源过程中操作人员的辐射剂量"
        },
        "correctAnswer": "D",
        "note": "防护原则：配置换源器的根本目的是遵循 ALARA 原则（时间、距离、屏蔽），通过专用机械装置实现安全衔接，从而最大限度地减少操作人员吃到的辐射剂量。"
    },
    {
        "id": 446,
        "type": "single",
        "question": "109、每台探伤装置须配备 _____ 操作人员，操作人员应参加辐射安全与防护培训，并考核合格。（  ）",
        "options": {
            "A": "10 名以上",
            "B": "5 名以上",
            "C": "1 名以上（含 1 名）",
            "D": "2 名以上"
        },
        "correctAnswer": "D",
        "note": "人员编制：再次强调“双人作业”的底线，每台设备的工作小组编制绝对不能少于 2 名持证人员。"
    },
    {
        "id": 447,
        "type": "single",
        "question": "110、从事移动探伤作业的单位，应拥有 _____ 探伤装置。（  ）",
        "options": {
            "A": "1 台以上（含 1 台）",
            "B": "3 台以上",
            "C": "5 台以上",
            "D": "10 台以上"
        },
        "correctAnswer": "C",
        "note": "资质门槛：为了杜绝皮包公司、提升行业的安全管理基本盘，国家规定从事室外伽马探伤活动的单位，硬件准入门槛是至少拥有 5 台探伤装置。"
    },
    {
        "id": 448,
        "type": "single",
        "question": "111、伽马射线探伤装置的使用年限应不超过 _____ 。（  ）",
        "options": {
            "A": "5 年",
            "B": "10 年",
            "C": "30 年",
            "D": "50 年"
        },
        "correctAnswer": "B",
        "note": "设备寿命：再次强化考点，常规伽马射线探伤机的使用年限法定规定不超过 10 年，超期服役会导致内部机械老化，极易引发源卡堵事故。"
    },
    {
        "id": 449,
        "type": "single",
        "question": "112、更换放射源时，放射源编码卡应随之更换，确保其与 _____对应。（  ）",
        "options": {
            "A": "容器内的放射源",
            "B": "生产单位生产的放射源",
            "C": "研制单位研制的放射源",
            "D": "探伤单位的备用放射源"
        },
        "correctAnswer": "A",
        "note": "账物相符：放射源编码卡相当于源的“身份证”，换源后必须立即更新外壳上的编码卡，以确保标示信息与容器内实际装载的放射源完全一致。"
    },
    {
        "id": 450,
        "type": "single",
        "question": "113、更换放射源时，放射源编码卡 _____ 。（  ）",
        "options": {
            "A": "不必随之更换，因为查阅台账记录就能确切了解到容器内放射源的准确信息",
            "B": "不必随之更换，因为每个探伤人员都有义务记住伽马射线探伤装置容器内放射源的准确信息",
            "C": "可换可不换，现已有多种途径可以确切了解到容器内放射源的准确信息，例如电话咨询生产厂家等",
            "D": "应随之更换，确保与容器内的放射源一一对应"
        },
        "correctAnswer": "D",
        "note": "信息一致性：探伤作业环境复杂，绝不能依赖个人记忆或外部台账查询。设备本体上必须做到标签与内部放射源的一一对应。"
    },
    {
        "id": 451,
        "type": "single",
        "question": "114、伽马射线探伤装置的放射源编码卡与探伤装置应 _____ 。（  ）",
        "options": {
            "A": "可靠永久性联接",
            "B": "不必可靠联接，为的是便于更换",
            "C": "可靠联接，且便于更换",
            "D": "没有特殊要求，只要便于更换就成"
        },
        "correctAnswer": "C",
        "note": "标牌设置：编码卡既要在颠簸的运输和作业中不易脱落（可靠联接），又要在合法换源时能够被操作人员方便地进行物理替换。"
    },
    {
        "id": 452,
        "type": "single",
        "question": "115、伽马射线探伤装置的放射源编码卡通常使用 _______ 材质制作。（  ）",
        "options": {
            "A": "塑料或 PVC 磁卡",
            "B": "金属或 PVC 磁卡",
            "C": "金属或硬纸",
            "D": "任何"
        },
        "correctAnswer": "B",
        "note": "材质要求：探伤现场通常是风吹日晒或具有腐蚀性的工业环境，编码卡材质必须耐磨损，通常使用金属铭牌或厚实的 PVC 磁卡材质。"
    },
    {
        "id": 453,
        "type": "single",
        "question": "116、在探伤装置的放射源容器表面固定金属铭牌，铭牌上铭刻下列内容不正确的是 _______ 。（  ）",
        "options": {
            "A": "探伤装置生产厂名称",
            "B": "产品名称",
            "C": "出厂编号",
            "D": "探伤装置生产厂的性质"
        },
        "correctAnswer": "D",
        "note": "铭牌内容：出厂铭牌必须记录设备的物理和知识产权信息（厂名、品名、编号等）。至于厂家的“企业性质”（如国企还是私企）与安全毫无关系，无需铭刻。"
    },
    {
        "id": 454,
        "type": "single",
        "question": "117、通过驱动装置与源连接后，由手动或自动传输装置，通过输源管螺旋通道 _____ 。（   ）",
        "options": {
            "A": "将放射源输送到源容器",
            "B": "将放射源输送到伽马探伤装置的任何部位",
            "C": "将放射源输送到顶端",
            "D": "将放射源输送到输源管的中段位置"
        },
        "correctAnswer": "C",
        "note": "操作原理：出源时，驱动缆推着源辫通过输源管道，一直输送到管道的最前端（顶端），即预先对准工件的曝光位置进行探伤。"
    },
    {
        "id": 455,
        "type": "single",
        "question": "118、放射源的源辫可由不锈钢绳 _______ 制作而成。（  ）",
        "options": {
            "A": "或铝线",
            "B": "或尼龙绳",
            "C": "或塑料绳",
            "D": "或钨合金"
        },
        "correctAnswer": "D",
        "note": "材料选择：源辫需要有极高的抗拉强度，且需耐受射线照射和高温。通常由不锈钢绳或高强度的钨合金制成，绝不能用易老化断裂的塑料或尼龙。"
    },
    {
        "id": 456,
        "type": "single",
        "question": "119、放射源的源辫是用来 _____ 。（  ）",
        "options": {
            "A": "更换放射源的机构",
            "B": "输送放射源的机构",
            "C": "紧固放射源的机构",
            "D": "清洗放射源的机构"
        },
        "correctAnswer": "B",
        "note": "结构功能：源辫（连接在放射源包壳尾部的柔性索）是连接驱动缆和源胶囊的桥梁，其核心作用就是在导源管内受力并输送放射源。"
    },
    {
        "id": 457,
        "type": "single",
        "question": "120、伽马射线探伤中，以下对信号测量阐述不正确的是 _____ 。（  ）",
        "options": {
            "A": "不可使用特殊的伽马探测器进行测量",
            "B": "可使用特殊的伽马探测器进行测量",
            "C": "可使用照相底片进行感光测量",
            "D": "既可使用照相底片进行感光测量，也可使用特殊的伽马探测器进行测量"
        },
        "correctAnswer": "A",
        "note": "探伤技术：除了传统的胶片感光法，现代工业探伤完全可以使用数字化的伽马探测器（如 DR 面阵探测器）进行测量，因此 A 选项的否定表述是错误的。"
    },
    {
        "id": 458,
        "type": "single",
        "question": "121、当伽马射线穿过（照射）物质时，该物质的密度越大， _______ 。（  ）",
        "options": {
            "A": "射线强度减弱得越多，即射线透过该物质的强度就越小",
            "B": "射线强度减弱得越多，即射线透过该物质的强度就越大",
            "C": "射线强度减弱得越小，即射线透过该物质的强度就越小",
            "D": "射线强度增加得越多，即射线透过该物质的强度就越小"
        },
        "correctAnswer": "A",
        "note": "物理衰减规律：物质密度越大，内部原子排列越紧密，对射线的吸收和散射能力就越强，因此透过去的射线强度自然就越小。"
    },
    {
        "id": 459,
        "type": "single",
        "question": "122、当伽马射线穿过（照射）物质时，该物质的 _______ 。（  ）",
        "options": {
            "A": "密度越小，射线强度减弱得越多",
            "B": "密度越大，射线强度减弱得越少",
            "C": "密度越大，射线强度增加得越多",
            "D": "密度越大，射线强度减弱得越多"
        },
        "correctAnswer": "D",
        "note": "物理衰减规律：与上题考点一致，换了个问法。物质的密度越大，对射线的阻挡（减弱）作用就越多。"
    },
    {
        "id": 460,
        "type": "single",
        "question": "123、下面不属于伽马探伤装置组成部件的是 _____ 。（  ）",
        "options": {
            "A": "源容器",
            "B": "联锁装置",
            "C": "源托",
            "D": "源的冷却装置"
        },
        "correctAnswer": "D",
        "note": "设备构造：X射线探伤机（使用管球）由于高压放电会产生大量热量，需要水冷或风冷；但伽马探伤机利用的是同位素自然衰变，发热量极低，完全不需要“冷却装置”。"
    },
    {
        "id": 461,
        "type": "single",
        "question": "124、伽马射线探伤机的安全锁应能承受逐渐施加的 _______ 的作用力且仍能起作用。（   ）",
        "options": {
            "A": "40N",
            "B": "100N",
            "C": "200N",
            "D": "400N"
        },
        "correctAnswer": "D",
        "note": "机械性能标准：国家标准对探伤机安全锁的抗破坏强度有明确的硬性指标，即至少能承受 400N 的作用力而不会失效或断裂。"
    },
    {
        "id": 462,
        "type": "single",
        "question": "125、伽马射线探伤装置只有 _____ ，才能进行自动安全装置的一系列操作，使射线束从源容器或照射头射出。（  ）",
        "options": {
            "A": "输入专门设置的密码后",
            "B": "专用撬棍撬开安全锁后",
            "C": "专用钥匙打开安全锁后",
            "D": "专用口令解开安全锁后"
        },
        "correctAnswer": "C",
        "note": "安全控制：探伤机的源容器门禁必须采用纯机械的物理控制方式，防止电子系统失效，因此必须使用与之唯一匹配的专用机械钥匙打开。"
    },
    {
        "id": 463,
        "type": "single",
        "question": "126、γ 射线探伤装置必须 _____ ，并配置专用钥匙。（  ）",
        "options": {
            "A": "设置 γ放射源观测孔",
            "B": "设置安全锁",
            "C": "设置 γ放射源活度计",
            "D": "设置专门的 γ 放射源机械抓手"
        },
        "correctAnswer": "B",
        "note": "法规要求：为了防止非授权人员随意动用探伤机摇出放射源，设备本体上强制要求设置带专用钥匙的安全锁。"
    },
    {
        "id": 464,
        "type": "single",
        "question": "127、伽马射线探伤装置的安全锁是用于 _____ 的带钥匙的机械装置。（  ）",
        "options": {
            "A": "锁住或开启源容器",
            "B": "锁住手摇曲柄",
            "C": "锁住准直器",
            "D": "锁住输源管"
        },
        "correctAnswer": "A",
        "note": "功能定义：安全锁的最终目的就是封锁放射源所在的“家”，因此它直接作用于源容器的开关口，锁住源容器。"
    },
    {
        "id": 465,
        "type": "single",
        "question": "128、伽马射线探伤机按其结构型式， 主要可分为“S”通道型伽马射线探伤机和 _____ 。（   ）",
        "options": {
            "A": "Ir-192 伽马射线探伤机",
            "B": "M 类伽马射线探伤机",
            "C": "Co-60 伽马射线探伤机",
            "D": "直通道型伽马射线探伤机"
        },
        "correctAnswer": "D",
        "note": "结构分类：根据源在容器内部进出通道的物理形状，探伤机主要分为防止射线直线泄漏的“S”弯通道型和直接进出的直通道型。"
    },
    {
        "id": 466,
        "type": "single",
        "question": "129、伽马射线探伤是利用伽马射线来检查 _____ 的一种方法。（  ）",
        "options": {
            "A": "工件内部晶格结构",
            "B": "工件内部原子结构",
            "C": "工件内部缺陷",
            "D": "工件内部力学结构"
        },
        "correctAnswer": "C",
        "note": "基本概念：探伤（探查伤痕），其核心目的就是利用射线的穿透特性来发现工业制件“内部”是否存在气孔、裂纹、夹渣等宏观结构缺陷。"
    },
    {
        "id": 467,
        "type": "single",
        "question": "130、无损检测（又常俗称为无损探伤）是指 _____ ，检测工件的某些物理性能和组织状态，以及查明工件表面和内部各种缺陷的技术。（  ）",
        "options": {
            "A": "在损伤工件性能和完整性的前提下",
            "B": "在不损伤工件性能但损坏其完整性的前提下",
            "C": "在不损伤工件性能和完整性的前提下",
            "D": "在损伤工件性能但不损坏其完整性的前提下"
        },
        "correctAnswer": "C",
        "note": "基本概念：无损检测（NDT）的核心就在于“无损”二字，必须在绝对不破坏工件物理性能和外在完整性的前提下进行检查。"
    },
    {
        "id": 468,
        "type": "multiple",
        "question": "131、如图中所示，探伤机主机必须设置（  ）。",
        "imageName": "image373.jpg",
        "options": {
            "A": "屏蔽容器",
            "B": "安全锁",
            "C": "联锁装置",
            "D": "控制缆接头",
            "E": "输源管接头"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "设备构造：结合图片，一台合格的伽马探伤机主机不仅需要有装载放射源的“屏蔽容器”，还必须具备安全锁、防止误操作的联锁装置，以及用于外接的控制缆和输源管接头。"
    },
    {
        "id": 469,
        "type": "multiple",
        "question": "132、γ 探伤机运输工具的要求，正确的是 （  ）。",
        "imageName": "image374.jpg",
        "options": {
            "A": "专车运输",
            "B": "全封闭车厢",
            "C": "设置放射性标志或危险标志",
            "D": "专人押运",
            "E": "全程监护"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "运输规范：运输高危放射源必须采用“专车专人（押运、全程监护）”机制，并且车辆必须是能够物理隔离的全封闭车厢，外部醒目悬挂放射性危险标志。"
    },
    {
        "id": 470,
        "type": "multiple",
        "question": "133、如图所示，探伤机必须设置安全锁并配置专用钥匙，其功能是（  ）。",
        "imageName": "image375.jpg",
        "options": {
            "A": "安全锁锁死时源辨不能移动",
            "B": "安全锁打开后，源辨方能移离源容器",
            "C": "源辨返回源容器后，安全锁才能锁死",
            "D": "只有专用钥匙打开安全锁后才能进行一系列的操作",
            "E": "钥匙不在锁上时，安全锁仍能锁死"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "安全锁机制：安全锁是防范物理误操作的第一道防线，它必须确保只有专用钥匙才能解冻源辨，且能够实现自动/手动物理锁死功能。"
    },
    {
        "id": 471,
        "type": "multiple",
        "question": "134、如图所示，探伤机必须设有联锁装置，其功能是 （  ）。",
        "imageName": "image376.jpg",
        "options": {
            "A": "安装或拆卸驱动装置时，源辨应不能移离源容器",
            "B": "安装或拆卸驱动装置时，源辨应能移离源容器",
            "C": "非工作状态时，联锁开关在“关或 CLOSE”位置，源辨应锁闭在源容器内",
            "D": "工作状态时，联锁开关在“开或 OPEN”位置，驱动装置始终保持与源容器的连接",
            "E": "工作状态时，驱动装置可随时断开与源容器的连接"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "联锁逻辑：联锁（Interlock）的核心就是“矛盾互斥”。拆装部件时源绝对不能动（A），工作时驱动绝对不能断开（D），休息时源必须死锁（C）。"
    },
    {
        "id": 472,
        "type": "multiple",
        "question": "135、如图所示，源辨指示器系统的功能是 （  ）。",
        "imageName": "image377.jpg",
        "options": {
            "A": "用不同的颜色分别显示源辨在源容器内或外",
            "B": "用数字显示源辨离开源容器的距离",
            "C": "用音响提示源辨已离开源容器",
            "D": "通过控制导管与源辨连接",
            "E": "通过输源管与源辨连接"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "指示器功能：这套系统是操作人员的“外接感知”，通过颜色（A）、数字距离（B）、声音（C）多维度反馈源的实时位置，主要依靠控制导管进行连接传导（D）。"
    },
    {
        "id": 473,
        "type": "multiple",
        "question": "136、图中放射源编码卡应 （  ）。",
        "imageName": "image378.jpg",
        "options": {
            "A": "与探伤机可靠连接",
            "B": "与探伤装置分离",
            "C": "随放射源一起更换",
            "D": "与容器内的放射源一一对应",
            "E": "与容器中放射源没有关系"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "标牌管理：作为源的“物理身份证”，它必须与机器死死绑在一起（A），同时内部换什么源，外面的卡就要跟着换什么（C），做到账物绝对对应（D）。"
    },
    {
        "id": 474,
        "type": "multiple",
        "question": "137、图中是野外探伤作业现场边界外设立的安全信息公示牌，主要内容包括 （  ）。",
        "imageName": "image379.jpg",
        "options": {
            "A": "辐射安全许可证",
            "B": "公司法人",
            "C": "辐射安全负责人",
            "D": "操作人员信息及资质证书",
            "E": "监督举报电话"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "公示透明：面积不小于2平方米的公示牌上，必须把干活的是谁、谁负责安全、资质是什么、出了事找谁举报等核心要素全部公开。"
    },
    {
        "id": 475,
        "type": "multiple",
        "question": "138、图片显示的是进入放射源库的情况，正确的是（  ）。",
        "imageName": "image380.jpg",
        "options": {
            "A": "双人双锁",
            "B": "单人单锁",
            "C": "1 人专责保管",
            "D": "2 人专责保管",
            "E": "携带剂量报警仪"
        },
        "correctAnswer": ["A", "D", "E"],
        "note": "入库红线：入库前必须穿戴好个人报警仪（E），并且绝对落实 2人专责保管（D）和双人分别持钥匙开锁（A）的安保底线。"
    },
    {
        "id": 476,
        "type": "multiple",
        "question": "139、图中的人员是移动探伤现场安全员，其主要职责是 （  ）。",
        "imageName": "image381.jpg",
        "options": {
            "A": "负责场所区域划分与控制",
            "B": "场所限制区域的人员管理",
            "C": "场所辐射监测",
            "D": "确认放射源返回装置",
            "E": "负责探伤装置的领取与归还"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "安全员职责：在移动探伤现场，安全员就是“定海神针”，从拉警戒线、赶人、盯仪器测数据，到最终确认收源和归还，全程全方位兜底。"
    },
    {
        "id": 477,
        "type": "multiple",
        "question": "140、如图所示，移动探伤作业时，说法正确的是 （  ）。",
        "imageName": "image382.jpg",
        "options": {
            "A": "至少有2名工作人员同时在场",
            "B": "3 名工作人员同时在场",
            "C": "4 名工作人员同时在场",
            "D": "每个人都佩戴个人剂量计和剂量报警仪",
            "E": "必须配备一台便携式辐射剂量监测仪"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "（结合图意）安全底线是至少 2 人（A），但如果是 3人 或 4人 同样满足且更安全。现场的硬核指标是每个人都要佩戴双剂量计（D），且整个小组至少要有一把巡测枪（E）。"
    },
    {
        "id": 478,
        "type": "multiple",
        "question": "141、移动探伤作业中，当（  ）发生变化时，应重新进行巡测，确定新的划区界限。",
        "imageName": "image383.jpg",
        "options": {
            "A": "探伤源",
            "B": "探伤场所",
            "C": "被检物体",
            "D": "照射方向",
            "E": "屏蔽条件"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "现场监测：辐射场的大小是由源强、方向、屏蔽物和散射体共同决定的。上述任何一个条件发生改变，原有的安全边界就会失效，必须全部重新测量划界。"
    },
    {
        "id": 479,
        "type": "multiple",
        "question": "142、图片中探伤机源库管理员，正确的做法是 （  ）。",
        "imageName": "image384.jpg",
        "options": {
            "A": "将探伤机保存在合格的源库",
            "B": "将探伤机锁在保险柜中",
            "C": "出入库对探伤机表面进行辐射监测",
            "D": "确认源在容器内",
            "E": "做好领取、归还记录"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "库房管理：从硬件（源库、保险柜）到物理检测（测剂量），再到台账管理（记录），这五项是源库管理员入库作业的标准化全套动作。"
    },
    {
        "id": 480,
        "type": "multiple",
        "question": "143、下图是固定辐射剂量监测仪，表述正确的是（  ）。",
        "imageName": "image385.jpg",
        "options": {
            "A": "与探伤机联锁",
            "B": "与门联锁",
            "C": "具有报警功能",
            "D": "可设置报警阈值",
            "E": "仪器报警后工作人员可以进入探伤室"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "联锁机制：固定监测仪不仅要能报警（C、D），更重要的是能控制机器和门（A、B）。仪器报警意味着室内有强辐射，此时绝对严禁人员进入（E错误）。"
    },
    {
        "id": 481,
        "type": "multiple",
        "question": "144、如图所示，探伤室定点监测，正确的是（  ）。",
        "imageName": "image386.jpg",
        "options": {
            "A": "探伤室门外 30cm 离地1m 处",
            "B": "门的左、中、右三点",
            "C": "门上、中、下三点",
            "D": "门缝四周",
            "E": "探伤室墙外或邻室墙外 3 个点"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "环境监测标准：测门外不仅要测水平分布（左中右），更要测最容易漏射线的门缝。法规中通常强调门缝四周，但不硬性规定门的上中下（C）。"
    },
    {
        "id": 482,
        "type": "multiple",
        "question": "145、γ 探伤机手动控制部件包括 （  ）。",
        "isOptionImage": true,
        "options": {
            "A": { "text": "", "img": "image387.jpg" },
            "B": { "text": "", "img": "image388.jpg" },
            "C": { "text": "", "img": "image389.jpg" },
            "D": { "text": "", "img": "image390.jpg" },
            "E": { "text": "", "img": "image391.jpg" }
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "（注：根据官方答案ABCD）。手动控制部件通常包括手摇把、齿轮齿条驱动机构、控制导管等直接影响源机械移动的构件。"
    },
    {
        "id": 483,
        "type": "multiple",
        "question": "146、图片显示的是固定探伤使用的便携式辐射监测仪表，指出图片中的错误。（  ）",
        "imageName": "image392.jpg",
        "options": {
            "A": "仪表打开",
            "B": "监测仪没有与防护门钥匙串一起",
            "C": "监测仪没有与探伤装置安全锁串一起",
            "D": "不与探伤机联锁",
            "E": "不与防护门联锁"
        },
        "correctAnswer": ["B", "C"],
        "note": "实操防呆机制：为了强迫操作人员“先看仪表再开门/开锁”，很多单位会将仪表的挂绳与开门的钥匙死死串在一起，拔钥匙必先拿仪器。"
    },
    {
        "id": 484,
        "type": "multiple",
        "question": "147、从图中选择固定探伤工作应当配备辐射监测仪表。（  ）",
        "isOptionImage": true,
        "options": {
            "A": { "text": "固定式剂量仪", "img": "image393.jpg" },
            "B": { "text": "便携式剂量仪", "img": "image394.jpg" },
            "C": { "text": "表面污染监测仪", "img": "image395.jpg" },
            "D": { "text": "个人剂量报警仪", "img": "image396.jpg" },
            "E": { "text": "个人剂量计", "img": "image397.jpg" }
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "仪器配备：固定探伤工作因为使用的是伽马射线（外照射），不需要检测粉尘般的表面污染（C不需要），但场所监控（A）、移动巡测（B）和个人防护（D、E）缺一不可。"
    },
    {
        "id": 485,
        "type": "multiple",
        "question": "148、探伤装置用毕不能及时回到源库保管的，应当如何保存？（  ）",
        "imageName": "image398.jpg",
        "options": {
            "A": "利用保险柜现场保存",
            "B": "保险柜应有电离辐射标志",
            "C": "专人保管",
            "D": "24 小时值班",
            "E": "设置红外或监视装置"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "临时看护：临时在野外存放无法像正规源库那样接通高级安防设备（如E红外监视），因此必须纯靠物理保险柜和人力进行 24 小时轮班死守（ABCD）。"
    },
    {
        "id": 486,
        "type": "multiple",
        "question": "149、每次探伤工作前，操作人员应检查探伤装置哪些性能？（  ）",
        "imageName": "image399.jpg",
        "options": {
            "A": "安全锁",
            "B": "联锁装置",
            "C": "源辨位置指示器",
            "D": "输源管",
            "E": "驱动装置"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "出车前检查：关系到源能不能出来、出来后能不能知道位置、用完能不能顺利收回的所有核心物理通道和保险，每次作业前都必须全面体检。"
    },
    {
        "id": 487,
        "type": "multiple",
        "question": "150、归还探伤机，领取人与保管人交接应核对哪些信息？（  ）",
        "imageName": "image400.jpg",
        "options": {
            "A": "检查外观",
            "B": "核对编号",
            "C": "设备表面辐射监测",
            "D": "确认源辨在容器内",
            "E": "做好记录"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "交接闭环：入库交接就像是在交接一枚随时可能起爆的炸弹，不仅要看壳子对不对（A、B），更要用仪器测里面还是不是安全的（C、D），最后签字画押（E）。"
    },
    {
        "id": 488,
        "type": "multiple",
        "question": "151、图片中探伤工作人员佩戴个人剂量计有哪些要求？（  ）",
        "imageName": "image401.jpg",
        "options": {
            "A": "热释光剂量计",
            "B": "电子式剂量报警仪",
            "C": "热释光和电子式两者选其一",
            "D": "热释光剂量计佩戴在防护服里边",
            "E": "电子式计量报警仪佩戴在防护服外边"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "个人佩戴规范：俗称的“双管齐下”，热释光用于查“旧账”（内穿戴D），报警仪用于防“眼下”（外穿戴E以确保听到声音）。绝对不能二选一（C错误）。"
    },
    {
        "id": 489,
        "type": "multiple",
        "question": "152、γ 射线机被广泛应用于工业探伤（原理图如下）。下列观点正确的是（  ）。",
        "imageName": "image402.jpg",
        "options": {
            "A": "γ 射线是由放射性元素激发，能量不变。强度不能调节，只随时间成指数倍减小。",
            "B": "在开机并加上高压后才产生 γ 射线。",
            "C": "γ 射线机与 X 射线机比较具有设备简单、便于操作、不用水电等特点。",
            "D": "γ 射线能透照时不需要电源，方便野外工作。"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "机理对比：伽马源依靠自然物理衰变，24小时都在发光发热（A），不需要通电加高压（B错误）。因此它最大的优势就是拔腿就能走，极其适合没水没电的荒郊野外（C、D）。"
    },
    {
        "id": 490,
        "type": "multiple",
        "question": "153、固定式伽马探伤室屏蔽的基本结构应包括 _____ 等。（  ）",
        "options": {
            "A": "铅罐",
            "B": "屏蔽墙",
            "C": "迷道",
            "D": "连锁屏蔽门",
            "E": "警示灯"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "房间结构：固定探伤室的实体防御体系靠的是巨厚的混凝土墙体（B）、防止射线直射的迷宫通道（C）、巨型的防盗防护门（D）以及声光系统（E）。探伤机本体才是铅罐（A）。"
    },
    {
        "id": 491,
        "type": "multiple",
        "question": "154、辐射安全和防护负责人职责包括 _____ 。（  ）",
        "options": {
            "A": "负责辐射安全和防护机构及人员的监督和管理工作",
            "B": "负责维修、检定个人剂量计和辐射监测仪表",
            "C": "负责辐射安全和防护管理制度的贯彻实施",
            "D": "组织本单位相关部门及人员开展辐射应急行动",
            "E": "组织对本单位的辐射安全和防护状况进行评估"
        },
        "correctAnswer": ["A", "C", "D", "E"],
        "note": "职责区分：负责人抓的是宏观统筹和应急指挥（A、C、D、E），而修仪器、送检定这种具体的事务操作，通常归属于底下的安全员去办理（B不选）。"
    },
    {
        "id": 492,
        "type": "multiple",
        "question": "155、伽马射线探伤单位中，辐射防护人员或安全员职责包括 _______ 。（  ）",
        "options": {
            "A": "负责探伤机的作业操作",
            "B": "定期组织对探伤室、探伤装置和放射源的安全状况进行检查并记录",
            "C": "组织开展相关辐射监测，并负责监测数据的记录及管理",
            "D": "负责个人剂量计及辐射监测仪的维护、检定及比对",
            "E": "负责对辐射工作人员进行辐射防护知识和监测仪表操作技能的培训"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "职责区分：安全员的核心身份是“裁判和教练”，负责查隐患、送检仪器和培训宣贯（B、C、D、E）。他们不直接充当“运动员”去操作探伤机（A不选）。"
    },
    {
        "id": 493,
        "type": "multiple",
        "question": "156、伽马射线探伤作业人员的职责包括 _______ 。（  ）",
        "options": {
            "A": "遵守辐射安全和防护管理制度，执行射线探伤作业相关的操作规程",
            "B": "正确佩戴个人剂量计和个人剂量报警仪，熟练使用辐射监测仪",
            "C": "负责本单位的辐射应急行动指挥",
            "D": "负责作业前后对探伤装置进行安全检查，作业过程中对作业场所进行安全检查",
            "E": "发现辐射安全隐患及时向辐射安全和防护负责人报告"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "职责界定：一线作业人员（探伤工）需要做好自身防护并严格执行操作规程，但应急指挥（C）是辐射安全负责人的高级职责，不能越俎代庖。"
    },
    {
        "id": 494,
        "type": "multiple",
        "question": "157、伽马探伤单位应制定探伤装置的 _____ 制度，放射源台帐和定期清点检查制度。（   ）",
        "options": {
            "A": "买卖",
            "B": "领取",
            "C": "归还",
            "D": "登记",
            "E": "租赁"
        },
        "correctAnswer": ["B", "C", "D"],
        "note": "内控制度：日常运转中必须严格建立的是“领、还、登”流转闭环制度（B、C、D）。至于买卖或租赁属于商务许可范畴，不属于日常台账内控。"
    },
    {
        "id": 495,
        "type": "multiple",
        "question": "158、伽马射线探伤安全检查的内容还包括有 _____ 。（  ）",
        "options": {
            "A": "驱动与源辫子、驱动与设备、导管与设备、导管与导管连接情况以及源辫子的磨损、驱动揽的磨损情况检查",
            "B": "探伤室的门机联锁、灯铃、警示标识检查",
            "C": "移动探伤分区的警戒线及警示标志标识检查",
            "D": "计量检测设备",
            "E": "消防器材检查"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "安全检查：A是针对移动探伤机的物理结构，B是针对固定探伤室，C是针对野外划区，D是检查工具本身。消防器材（E）属于常规消防安保，不特指“辐射探伤安全检查”的核心特有内容。"
    },
    {
        "id": 496,
        "type": "multiple",
        "question": "159、辐射工作人员在辐射工作期间应进行个人外照射剂量监测，且在常规工作中和_______ 时所受到的剂量应加以区分。（  ）",
        "options": {
            "A": "紧急情况",
            "B": "正常情况",
            "C": "突发事件",
            "D": "执行应急程序",
            "E": "非工作时"
        },
        "correctAnswer": ["A", "C", "D"],
        "note": "剂量记录分类：国家标准要求，如果在发生事故去抢险、救援（紧急、突发、应急情况下）吃到的剂量，必须与平时正常干活吃到的常规剂量分开记录并特殊评估。"
    },
    {
        "id": 497,
        "type": "multiple",
        "question": "160、工业伽马射线探伤时，放射源对人员造成辐射伤害的风险，主要包括 _____ 。（   ）",
        "options": {
            "A": "伽马射线探伤装置受到巨大撞击的问题（例如：陨石或飞机坠落等）",
            "B": "伽马射线探伤装置自身的问题（例如：不合格的探伤装置或者与放射源活度不匹配的探伤装置可能会泄漏出更多的伽马射线）",
            "C": "放射源管理方面的问题（例如：不当的放射源贮存、出入库、台账、盘存制度等）",
            "D": "伽马射线探伤装置或放射源运输中出现的问题（例如：不恰当的放射源运输可能会造成射线放射源丢失或失控）",
            "E": "探伤过程中的操作问题（例如：探伤过程中不恰当、不安全的操作，可能会造成放射源的意外失控或丢失）"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "风险识别：防范风险重点在于设备的内部隐患、日常管理漏洞、运输环节及人为操作失误（B、C、D、E）。陨石撞击（A）属于极端不可抗力，不列入常规风险管理范畴。"
    },
    {
        "id": 498,
        "type": "multiple",
        "question": "161、个人剂量计使用时应注意的事项包括_______ 。（  ）",
        "options": {
            "A": "应专人专用",
            "B": "应正确佩戴",
            "C": "应注意保护，避免受到高温、水泡、挤压等",
            "D": "从事辐射探伤工作时应一直佩戴",
            "E": "不需要记录监测数据"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "佩戴常识：剂量计里面的晶体非常娇贵且是定人定岗的。专人专用、不能乱放、不能沾水受损是佩戴铁律。"
    },
    {
        "id": 499,
        "type": "multiple",
        "question": "162、无损检测相比于破坏性检测，其特点是 _______ 。（  ）",
        "options": {
            "A": "非破坏性",
            "B": "破坏性",
            "C": "全面性",
            "D": "主动性",
            "E": "全程性"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "行业认知：无损检测（NDT）大受青睐，是因为它既不会破坏工件（A），又因为不用切开抽样而可以做到100%全检（C），并且可以贯穿制造的整个周期（E）。"
    },
    {
        "id": 500,
        "type": "multiple",
        "question": "163、下面对伽马射线探伤原理表述正确的是 _______ 。（  ）",
        "options": {
            "A": "伽马射线有很强的穿透性，能不同程度地透过被检材料，对照相胶片产生感光作用",
            "B": "伽马射线的穿透能力不强，相同能量的伽马射线对同一材料的穿透性是不同的",
            "C": "当射线通过被检查的工件时，因工件缺陷对射线的吸收能力不同，使射线透射到胶片上的强度不一样，即胶片感光程度就不一样",
            "D": "当射线通过被检查的工件时，因工件缺陷对射线的吸收能力是相同的，使射线透射到胶片上的强度一样的，即胶片感光程度是一样的",
            "E": "依靠胶片感光程度就不一样，就能准确、可靠、非破坏性地显示缺陷的形状、位置和大小"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "探伤原理：由于工件有气孔裂纹，导致穿透的射线变多，底片局部变黑。A、C、E完整且正确地描述了这一工作机理。"
    },
    {
        "id": 501,
        "type": "multiple",
        "question": "164、与X 射线探伤机相比，伽马射线探伤机的缺点包括 _____ 。（  ）",
        "options": {
            "A": "伽马射线探伤机必须在能够提供水电的场所进行探伤。",
            "B": "伽马射线放射源都有一定的半衰期，有些半衰期较短的放射源，如 Ir-192 更换频繁，给长期使用带来不便。",
            "C": "辐射能量固定，无法根据试件厚度进行能量调节，当穿透厚度与能量不适配时，灵敏度下降较严重。",
            "D": "伽马射线放射源的活度随时间减弱，无法进行调节，当源的活度较小时，曝光时间过长使工作效率降低。",
            "E": "固有不清晰度比 X 射线大，对于同样材料的工件及照射条件下，其灵敏度低于 X射线机"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "工艺对比：伽马探伤机最大优点就是不需要水电（所以A错），但其缺点明显：能量不可调只能挑源（C）、活度随时间变小要延长曝光时间（D）、需要频繁换源（B），且拍出来的片子清晰度不如高压激发的 X 光（E）。"
    },
    {
        "id": 502,
        "type": "multiple",
        "question": "165、伽马射线探伤装置常用的伽马射线放射源有 _____ 。（  ）",
        "options": {
            "A": "Co-60",
            "B": "U-238",
            "C": "Am-241",
            "D": "Ir-192",
            "E": "Sr-90"
        },
        "correctAnswer": ["A", "D"],
        "note": "核素认知：工业伽马探伤界公认的两大“顶梁柱”就是 钴-60（Co-60，用于超厚件）和 铱-192（Ir-192，用于常规件）。其他核素多用于测厚仪或研究。"
    },
    {
        "id": 503,
        "type": "multiple",
        "question": "166、伽马射线探伤单位每年提交安全和防护状况年度评估报告的内容还应当包括 _____ 。（   ）",
        "options": {
            "A": "单位人员学历变动情况",
            "B": "辐射事故及应急响应情况",
            "C": "新建、改建、扩建和退役核技术利用项目情况",
            "D": "存在的安全隐患及其整改情况",
            "E": "其他有关法律、法规规定的落实情况"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "年报内容：年度评估报告的重点是“安全与防护”，因此事故应急、项目变动、隐患整改都是必报项。人员学历变动（A）属于企业内部人力资源管理，不属于环保部门监管的辐射安全范畴。"
    },
    {
        "id": 504,
        "type": "multiple",
        "question": "167、以下属于伽马射线探伤安全检查的内容是 _____ 。（  ）",
        "options": {
            "A": "辐射剂量（率）监测仪的检查",
            "B": "伽马探伤设备的安全状态检查",
            "C": "驱动系统和导管等附件安全检查",
            "D": "工作人员的身份证检查",
            "E": "源的盘存、源库的保卫及双人双锁管理制度检查"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "安全检查重点：日常安检查的是“物（设备、仪器）”和“管（制度、盘点）”。工作人员的身份证检查（D）通常是安保门禁环节，不是设备作业前的专业辐射安全检查核心。"
    },
    {
        "id": 505,
        "type": "multiple",
        "question": "168、下面关于移动伽马探伤作业场所安全管理正确表述的是 _____ 。（  ）",
        "options": {
            "A": "将作业时被检物体周围的空气比释动能率大于 15μGy•h-1的范围内划为控制区",
            "B": "沿控制区边界拉上警戒绳",
            "C": "在控制区边界上设置清晰可见的“禁止进入”警告牌",
            "D": "沿控制区边界必须砌起一道混凝土墙对控制区进行实体屏障隔离",
            "E": "射线探伤作业人员应在控制区边界外操作"
        },
        "correctAnswer": ["A", "B", "C", "E"],
        "note": "野外划区：移动探伤的核心就是临时打游击，用警戒绳和警告牌（B、C）划定15μGy/h的控制区（A）并在边界外遥控操作（E）。在野外临时砌混凝土墙（D）既不现实也不可能。"
    },
    {
        "id": 506,
        "type": "multiple",
        "question": "169、探伤工作人员个人剂量档案应包括探伤工作人员的 _____ 等材料。（  ）",
        "options": {
            "A": "家庭出身",
            "B": "个人基本信息",
            "C": "旁系亲属情况",
            "D": "工作岗位",
            "E": "剂量监测结果"
        },
        "correctAnswer": ["B", "D", "E"],
        "note": "职业健康档案：档案的目的是记录员工的辐射受照史，因此需要基本信息、干什么岗位、吃了多少剂量（B、D、E）。家庭出身和旁系亲属（A、C）属于侵犯隐私且与辐射剂量无关的冗余信息。"
    },
    {
        "id": 507,
        "type": "multiple",
        "question": "170、伽马射线探伤装置由 _______ 组成。（  ）",
        "options": {
            "A": "源容器",
            "B": "输源管",
            "C": "联锁装置",
            "D": "源辫",
            "E": "控制部件"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "设备系统：一套完整的探伤系统不仅仅是那个装源的铁疙瘩（源容器A），还必须包含让源跑出去的通道（输源管B、源辫D）、控制源运动的机构（控制部件E），以及防范意外的联锁装置（C）。"
    },
    {
        "id": 508,
        "type": "multiple",
        "question": "171、工作人员在进行探伤作业时， _____ 。（  ）",
        "options": {
            "A": "应佩戴个人剂量计",
            "B": "应佩戴个人剂量报警仪",
            "C": "应携带固定式伽马谱仪",
            "D": "个人剂量计和个人剂量报警仪必须专人专用",
            "E": "个人剂量计必须每人一个"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "个体防护：现场作业必须“双管齐下”（佩戴剂量计和报警仪），且必须一人一表、专人专用。固定式伽马谱仪（C）是实验室里用来分析核素种类的大型仪器，不可能携带去探伤现场。"
    },
    {
        "id": 509,
        "type": "multiple",
        "question": "172、伽马射线探伤作业出现事故后，通常的应急处置措施包括 _____ 。（  ）",
        "options": {
            "A": "辐射安全和防护负责人及辐射防护人员应及时到场",
            "B": "禁止无关人员进入控制区",
            "C": "在辐射监测仪监测下并佩带个人剂量报警仪才能进入潜在高剂量或未知剂量率的地区",
            "D": "在保证安全并在辐射防护人员指导下将源复位或放入源容器",
            "E": "必要时应向专业技术人员或放射源供应商寻求支援，现场作业人员不可超越职责范围依靠个人技能及经验擅自行动"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "应急流程：发生事故后，封锁现场、专业人员到场、带好仪器再探查、科学收源、必要时求援，这五个步骤是标准的辐射应急处置SOP。"
    },
    {
        "id": 510,
        "type": "multiple",
        "question": "173、在伽马射线探伤工作中，常见辐射应急事件包括 _____ 。（  ）",
        "options": {
            "A": "设备出现故障或违章操作",
            "B": "源辫子发生脱落、断裂并掉在源导管中",
            "C": "恐怖分子恶意破坏",
            "D": "工作人员在收源导管时不经意间使源辫掉在地上",
            "E": "放射源被其他人员捡走"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "事件定性：故障、断源辫、掉落和被无关人员捡拾，这些都是探伤行业常发的典型“责任事故”或“意外事故”。恐怖破坏（C）属于极端的治安反恐事件，不列为常规探伤安全培训中的“常见事件”。"
    },
    {
        "id": 511,
        "type": "multiple",
        "question": "174、伽马射线探伤单位每年提交安全和防护状况年度评估报告的内容应当包括 _____ 。（   ）",
        "options": {
            "A": "辐射安全和防护设施的运行与维护情况",
            "B": "购买放射源的经费支出情况",
            "C": "辐射安全和防护制度及措施的制定和落实情况",
            "D": "放射性同位素进出口、转让或者送贮情况以及放射性同位素、射线装置台账",
            "E": "场所和工作人员的监测情况及监测数据"
        },
        "correctAnswer": ["A", "C", "D", "E"],
        "note": "年报要求：政府环保部门监管的重点是“安全”（设施维护、制度落实、流转台账、剂量数据）。公司花了多少钱买源（B）属于商业财务机密，环保局是不管也不看这个的。"
    },
    {
        "id": 512,
        "type": "multiple",
        "question": "175、伽马探伤放射源台账的内容包括 _____ 。（  ）",
        "options": {
            "A": "核素名称",
            "B": "放射源编码",
            "C": "出厂时间",
            "D": "活度",
            "E": "来源及去向"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "台账管理：台账也就是源的“生死簿”，必须详尽记录它是什么（核素、活度）、代号多少（编码）、什么时候造的（出厂），以及从哪里买的、最终又被送去了哪里（来源及去向），缺一不可。"
    },
    {
        "id": 513,
        "type": "multiple",
        "question": "176、伽马探伤作业中为了避免发生辐射事故的发生，应做到 _____ 。（  ）",
        "options": {
            "A": "工作人员应取得培训资质，并按操作规程操作",
            "B": "工作结束后检查源辫是否回到容器的安全屏蔽位置",
            "C": "正确使用辐射剂量（率）监测仪，每次探伤作业结束后及探伤设备出入库时进行辐射剂量（率）水平测量，确定放射源在探伤容器内",
            "D": "由专业人员处理设备故障，严禁近距离接触放射源",
            "E": "做好探伤设备的保安工作，以免丢失被盗"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "事故防范全景：涵盖了人员资质资质（A）、实操确认（B）、仪器复测（C）、应急原则（D）和安保防盗（E），这是全方位的辐射事故防范体系。"
    },
    {
        "id": 514,
        "type": "multiple",
        "question": "177、由于误操作或伽马探伤设备损坏等原因发生故障时， 需 _____ ， 控制事态发展。 （   ）",
        "options": {
            "A": "立即采取措施",
            "B": "疏散无关人员",
            "C": "保护现场",
            "D": "及时向单位领导及上级有关主管部门汇报",
            "E": "立即打电话 119 和120 及时报警求援"
        },
        "correctAnswer": ["A", "B", "C", "D"],
        "note": "初期应急：发生卡源等故障时，首要是本单位人员采取屏蔽/距离措施（A）、疏散拉警戒线（B、C）并上报（D）。在未发生人员受伤或火灾等次生灾害前，探伤故障主要由环保部门和专业人员处置，盲目呼叫 119/120（E）可能会让缺乏辐射防护装备的消防医护人员陷入危险。"
    },
    {
        "id": 515,
        "type": "multiple",
        "question": "178、对伽马射线探伤装置进行维修保养的主要要求包括 _____ 。（  ）",
        "options": {
            "A": "严禁带源私自拆卸主机进行维修",
            "B": "主机的维修至少应由高中毕业以上的探伤人员进行",
            "C": "探伤机及换源器不要长期存放在潮湿的环境里，也不要让沙土进入主机中，特别要注意防海水腐蚀",
            "D": "对驱动系统要经常保养，建议用柴油对钢丝绳进行清洗，驱动缆、导源管不使用时要盖好两端的“封堵”",
            "E": "当导源管中钢丝绳爬高高度超过 10米，摇起来吃力时，建议在钢丝绳上多加柴油"
        },
        "correctAnswer": ["A", "C", "D", "E"],
        "note": "设备维保：绝对严禁带源拆机（A）。维保重在防锈防沙（C）和润滑（D、E）。主机的核心维修必须由具备资质的生产厂家或专业机构进行，不是“高中毕业”就能随便修的（B错误）。"
    },
    {
        "id": 516,
        "type": "multiple",
        "question": "179、探伤操作人员对伽马射线探伤连接状况的安全检查包括 _____ 。（  ）",
        "options": {
            "A": "驱动缆与源辫子是否连接牢固",
            "B": "接头是否磨损",
            "C": "阴阳接头配合间隙是否合适",
            "D": "驱动系统与主机的连接是否可靠",
            "E": "导管与准直器的连接等是否可靠"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "连接件检查：连接件一旦脱落就会导致源失控，因此从源辫接头（A、B、C）到驱动系统连接（D），再到前端导管连接（E），所有的物理接口都必须死死卡紧。"
    },
    {
        "id": 517,
        "type": "multiple",
        "question": "180、伽马射线探伤操作人员对伽马射线探伤装置的检查包括 _____。（  ）",
        "options": {
            "A": "操作前的检查",
            "B": "连接状况的检查",
            "C": "电气检查",
            "D": "作业结束后的检查",
            "E": "定期检查"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "检查体系：包含事前、事后、定期以及针对物理连接的专项检查。由于伽马探伤机主要依靠纯物理机械传动，其本体通常没有复杂的电气系统需要常规排查（C排除）。"
    },
    {
        "id": 518,
        "type": "multiple",
        "question": "181、伽马固定探伤室周围辐射剂量（率）水平的常规监测，通常采用便携式剂量率仪进行定点监测，这些定点至少包括 _____ 。（  ）",
        "options": {
            "A": "通过巡测，发现的辐射剂量（率）水平异常高的位置",
            "B": "探伤室门外 30cm 离地面高度为 1m 处，测门的左、中、右侧 3 个点和门缝四周",
            "C": "探伤室墙外或邻室墙外 30cm 离地面高度为 1m 处，每个墙面至少测 3 个点",
            "D": "人员可能到达的探伤室屋顶或探伤室上层外 30cm 处， 至少包括主射束到达范围的 5 个监测点",
            "E": "人员经常活动的位置"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "探伤室定点：监测涵盖了薄弱点（门、异常高点）、全包围圈（四周墙体、屋顶）以及人员动线（经常活动位置），确保外围环境万无一失。"
    },
    {
        "id": 519,
        "type": "multiple",
        "question": "182、在伽马探伤收源过程中，当辐射剂量（率）水平降到正常值后进行的正确后续操作是 _____ 。（  ）",
        "options": {
            "A": "利用曲柄摇手继续往收源方向用力摇动",
            "B": "关闭源容器的安全锁",
            "C": "将放射源进行反复送出和收回",
            "D": "拆卸源导管",
            "E": "拆卸驱动缆"
        },
        "correctAnswer": ["B", "D", "E"],
        "note": "收源后动作：剂量降到正常说明源已经安全入位，此时应当锁死安全锁（B），然后拆除导管和驱动缆（D、E）收工。继续死命摇（A）或无意义地反复进出（C）不仅容易搞坏机械结构，更会增加风险。"
    },
    {
        "id": 520,
        "type": "multiple",
        "question": "183、便携式辐射剂量（率）监测仪检定正确的做法是 _____ 。（  ）",
        "options": {
            "A": "应每年送有检定资质的计量部门进行检定",
            "B": "可送任何一家有标准伽马放射源的单位进行检定",
            "C": "检定合格后方可使用",
            "D": "将检定证书归档保存",
            "E": "检定合格标签粘贴于监测仪上"
        },
        "correctAnswer": ["A", "C", "D", "E"],
        "note": "仪器检定：法定强制计量器具必须送交国家认可的有“检定资质”的计量部门（A），不能随便找个有源的单位自己搞（B错误）。其他项为检定后的标准化管理动作。"
    },
    {
        "id": 521,
        "type": "multiple",
        "question": "184、伽马探伤中辐射剂量（率）监测的仪器的类型包括 _____ 。（  ）",
        "options": {
            "A": "固定式辐射剂量（率）监测仪",
            "B": "气泡中子剂量计",
            "C": "便携式辐射剂量（率）监测仪",
            "D": "个人剂量计",
            "E": "个人剂量（率）报警仪"
        },
        "correctAnswer": ["A", "C", "D", "E"],
        "note": "仪器配置：伽马探伤只产生伽马射线，不产生中子辐射，所以不需要中子剂量计（B排除）。需要配置固定式、便携式以及个人的双剂量计（A、C、D、E）。"
    },
    {
        "id": 522,
        "type": "multiple",
        "question": "185、每台伽马射线探伤装置都必须 _____ 。（  ）",
        "options": {
            "A": "配备2 名以上操作人员",
            "B": "操作人员应参加辐射安全与防护培训",
            "C": "配备5 名以上操作人员",
            "D": "操作人员应参加辐射安全与防护培训，掌握相关知识，但未必参加考核",
            "E": "操作人员应考核合格"
        },
        "correctAnswer": ["A", "B", "E"],
        "note": "资质要求：再次强调“双人制”（A）和“持证上岗”（培训B并考核合格E）。培训不考核等同于没培训（D错），要求5名操作人员是针对公司整体硬件资质，不是每台设备（C错）。"
    },
    {
        "id": 523,
        "type": "multiple",
        "question": "186、伽马射线探伤装置的放射源编码卡是记录 ___ 等信息的卡片。（  ）",
        "options": {
            "A": "核素名称",
            "B": "出厂活度",
            "C": "源外形尺寸",
            "D": "生产单位",
            "E": "放射源的国家编码"
        },
        "correctAnswer": ["A", "B", "C", "D", "E"],
        "note": "编码卡内容：这串国家统一编码及其配套信息包含了该枚放射源从出生（厂家）、长相（尺寸）、身份（核素、编码）到能量（出厂活度）的全部出厂基因信息。"
    },
    {
        "id": 524,
        "type": "multiple",
        "question": "187、在探伤装置的放射源容器表面固定金属铭牌， 铭牌上铭刻的内容包括有 _____ 。 （   ）",
        "options": {
            "A": "探伤装置设计者姓名",
            "B": "符合《电离辐射防护与辐射源安全基本标准》（GB 18871－2002）的电离辐射警告标志",
            "C": "产品名称",
            "D": "放射源核素名称",
            "E": "设计的最大装源活度"
        },
        "correctAnswer": ["B", "C", "D", "E"],
        "note": "机器铭牌内容：容器金属铭牌负责标识机器的物理属性和安全警告（B、C、D、E）。没必要刻上设计者的姓名（A）。"
    },
    {
        "id": 525,
        "type": "multiple",
        "question": "188、伽马探伤装置的安全锁符合要求的是 _______ 。（  ）",
        "options": {
            "A": "源辫返回到源容器后，该锁方能锁死",
            "B": "安全锁锁死时，源辫应不能移动",
            "C": "安全锁具有智能化控制功能",
            "D": "安全锁打开后，源辫方能移离源容器",
            "E": "钥匙不在锁上时，安全锁仍能锁死"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "安全锁逻辑：安全锁必须具备强悍的纯物理防错功能，确保“源不在家锁不上，锁上了源出不来”。纯机械锁更为稳定可靠，通常不需要也不建议搞华而不实的“智能化”控制（C）。"
    },
    {
        "id": 526,
        "type": "multiple",
        "question": "189、伽马射线探伤装置的优点包括 _____ 。（  ）",
        "options": {
            "A": "穿透能力强，探测厚度大",
            "B": "不用水、电，特别适用于野外作业和在役设备的检测",
            "C": "不进行探伤工作时不存在辐射防护问题",
            "D": "可以连续运行，且不受温度、压力、磁场等外界条件影响",
            "E": "无易损部件，设备故障低"
        },
        "correctAnswer": ["A", "B", "D", "E"],
        "note": "工艺优势总结：穿透力强（A）、拔腿就能用（B）、自然衰变抗干扰（D）、纯机械极耐造（E）。但因为放射源是一直在发光的，所以即使收在罐子里不干活，也依然存在辐射防护问题（C错误）。"
    },
    {
        "id": 527,
        "type": "multiple",
        "question": "190、伽马射线探伤设备按放射源的核素可分为： _____ 等。（  ）",
        "options": {
            "A": "Ir-192 伽马射线探伤机",
            "B": "Se-75 伽马射线探伤机",
            "C": "“S”通道型伽马射线探伤机",
            "D": "Co-60 伽马射线探伤机",
            "E": "M 类伽马射线探伤机"
        },
        "correctAnswer": ["A", "B", "D"],
        "note": "设备分类体系：题干问的是按“核素”分类，所以答案是铱-192、硒-75和钴-60（A、B、D）。而 S通道（C）是按机械结构分，M类（E）是按移动性分。"
    },
    {
        "id": 528,
        "type": "multiple",
        "question": "191、伽马射线探伤装置按源容器的可移动性可分为 _____ 三类。（  ）",
        "options": {
            "A": "F 类（固定式）",
            "B": "S 类（随机式）",
            "C": "M 类（移动式）",
            "D": "C 类（组合式）",
            "E": "P 类（便携式）"
        },
        "correctAnswer": ["A", "C", "E"],
        "note": "设备分类体系：按可移动性，国家标准严格将其分为 Fixed（固定式F类）、Mobile（移动式M类）和 Portable（便携式P类）。"
    },
    {
        "id": 529,
        "type": "multiple",
        "question": "192、伽马射线有很强的穿透性，能不同程度地透过被检材料，对照相胶片产生感光作用。利用这种性能，当射线通过被检查的工件时，因工件缺陷对射线的吸收能力不同，使射线透射到胶片上的强度不一样，即胶片感光程度就不一样，这样就能准确、可靠、非破坏性地显示 _____ 。（  ）",
        "options": {
            "A": "缺陷的形状",
            "B": "缺陷的位置",
            "C": "缺陷的大小",
            "D": "被检工件的原子结构",
            "E": "被检工件的力学结构"
        },
        "correctAnswer": ["A", "B", "C"],
        "note": "探伤目的：胶片成像就像是给钢管拍了一张医学X光片，医生能看出骨折（缺陷）的形状、位置和大小。但它无法放大到微观看到“原子结构”，也无法测算“力学结构”。"
    },
    {
        "id": 530,
        "type": "multiple",
        "question": "193、伽马射线有很强的穿透性，能不同程度地透过被检材料，对照相胶片产生感光作用。利用这种性能，当射线通过被检查的工件时，因工件缺陷对射线的吸收能力不同，使射线透射到胶片上的强度不一样，即胶片感光程度就不一样，这样就能 _______ 显示缺陷的形状、位置和大小。（  ）",
        "options": {
            "A": "立体地",
            "B": "毁伤性地",
            "C": "准确地",
            "D": "可靠性地",
            "E": "非破坏性地"
        },
        "correctAnswer": ["C", "D", "E"],
        "note": "检测定性：无损探伤的精髓所在——在绝对不搞坏东西的前提下（E），交出一份准确（C）且可靠（D）的内部健康报告。传统探伤底片是二维平面的，做不到“立体地”（A）。"
    }// 等待粘贴新题...
];