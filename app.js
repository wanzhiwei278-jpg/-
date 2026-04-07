/**
 * 电离辐射安全防护练习系统 - 完整核心逻辑
 */

// 1. 数据配置区 (注意：所有题目必须包裹在一个大方括号 [] 内，题目之间用逗号 , 隔开)
const questionBank = [
     {
    "id": 1,
    "type": "single",
    "difficulty": "简单",
    "question": "图中采取的内照射防护措施是（ ）。",
    "imageUrl": "image_1.jpg",
    "options": {
      "A": "包容",
      "B": "隔离",
      "C": "净化",
      "D": "稀释"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 2,
    "type": "single",
    "difficulty": "中等",
    "question": "在如下图所示的衰变纲图中，衰变方式 a 属于（ ）衰变。",
    "imageUrl": "image_2.jpg",
    "options": {
      "A": "EC 衰变",
      "B": "β+衰变",
      "C": "β-衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 3,
    "type": "single",
    "difficulty": "简单",
    "question": "下图中的球形电离室属于（ ）。",
    "imageUrl": "image_3.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 4,
    "type": "single",
    "difficulty": "简单",
    "question": "如下图所示中的三种射线，穿透能力最强的射线是（ ）。",
    "imageUrl": "image_4.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "一样强"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 5,
    "type": "single",
    "difficulty": "简单",
    "question": "如下图所示中的三种射线，电离本领最强的射线是（ ）。",
    "imageUrl": "image_5.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "一样强"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 6,
    "type": "single",
    "difficulty": "简单",
    "question": "该图表示的是哪种辐射？（ ）",
    "imageName": "image_6.jpg",
    "options": {
      "A": "α 粒子",
      "B": "β 粒子",
      "C": "γ 辐射",
      "D": "中子辐射"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 7,
    "type": "single",
    "difficulty": "中等",
    "question": "本图采用的是何种外照射防护方法？（ ）",
    "imageName": "image_7.jpg",
    "options": {
      "A": "时间防护",
      "B": "距离防护",
      "C": "屏蔽防护",
      "D": "个人防护"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 8,
    "type": "single",
    "difficulty": "中等",
    "question": "该图表明，针对外照射，不同射线对人的危害大小排序正确的是：（ ）",
    "imageName": "image_8.jpg",
    "options": {
      "A": "n > γ，x > β > α",
      "B": "γ，x > n > β>α",
      "C": "α，n > β >γ， x",
      "D": "α>β > γ，x>n"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 9,
    "type": "single",
    "difficulty": "简单",
    "question": "图中仪表监测的数值 0.21 是（ ）。",
    "imageName": "image_9.jpg",
    "options": {
      "A": "吸收剂量",
      "B": "吸收剂量率",
      "C": "当量剂量率",
      "D": "剂量当量率"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 10,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器测量的量是（ ）。",
    "imageName": "image_10.jpg",
    "options": {
      "A": "环境剂量",
      "B": "表面污染",
      "C": "空气放射性浓度",
      "D": "当量剂量"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 11,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_11.jpg",
    "options": {
      "A": "剂量",
      "B": "剂量率",
      "C": "计量",
      "D": "照射量"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 12,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_12.jpg",
    "options": {
      "A": "剂量",
      "B": "剂量率",
      "C": "计量",
      "D": "照射量"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 13,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_13.jpg",
    "options": {
      "A": "累积剂量",
      "B": "剂量率",
      "C": "计量",
      "D": "照射量"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 14,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_14.jpg",
    "options": {
      "A": "累积剂量",
      "B": "剂量率",
      "C": "计量",
      "D": "照射量"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 15,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_15.jpg",
    "options": {
      "A": "累积剂量",
      "B": "剂量率",
      "C": "吸收剂量",
      "D": "有效剂量"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 16,
    "type": "single",
    "difficulty": "简单",
    "question": "该仪器显示数值表示的是（ ）。",
    "imageName": "image_16.jpg",
    "options": {
      "A": "累积剂量",
      "B": "剂量率",
      "C": "吸收剂量",
      "D": "有效剂量"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 17,
    "type": "single",
    "difficulty": "简单",
    "question": "核素符号图，表述正确的是（ ）。",
    "imageName": "image_17.jpg",
    "options": {
      "A": "X 表示元素符号",
      "B": "A 表示核素符号",
      "C": "Z 表示核素符号",
      "D": "N 表示核素符号"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 18,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的高纯锗探测器属于（ ）。",
    "imageName": "image_18.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 19,
    "type": "single",
    "difficulty": "中等",
    "question": "在如下图所示的衰变纲图中，衰变方式 b 属于（ ）衰变。",
    "imageName": "image_19.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+衰变",
      "C": "β-衰变",
      "D": "γ衰变"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 20,
    "type": "single",
    "difficulty": "中等",
    "question": "在如下图所示的衰变纲图中，衰变方式 d 属于（ ）衰变。",
    "imageName": "image_20.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+衰变",
      "C": "β-衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 21,
    "type": "single",
    "difficulty": "简单",
    "question": "下图中的碘化钠探测器属于（ ）。",
    "imageName": "image_21.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 22,
    "type": "single",
    "difficulty": "困难",
    "question": "α 辐射是由较大的不稳定原子核发射出的、带正电荷的氦原子核（如下图所示），如果母核是 210Po，发生 α 衰变后，子核应该是（ ）。",
    "imageName": "image_22.jpg",
    "options": {
      "A": "206Pb",
      "B": "208Pb",
      "C": "210Pb",
      "D": "214Pb"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 23,
    "type": "single",
    "difficulty": "简单",
    "question": "如下图所示，操作强放射性物质应在密闭和经过防护处理的（ ）内用机械手操作。",
    "imageName": "image_23.jpg",
    "options": {
      "A": "热室",
      "B": "通风橱",
      "C": "手套箱",
      "D": "实验台"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 24,
    "type": "single",
    "difficulty": "简单",
    "question": "外照射防护的三个要素如下图所示，辐照源与人之间有屏蔽时，照射对人的影响（ ）。",
    "imageName": "image_24.jpg",
    "options": {
      "A": "越小",
      "B": "越大",
      "C": "没变化",
      "D": "不确定"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 25,
    "type": "single",
    "difficulty": "简单",
    "question": "外照射防护的三个要素如下图所示，离辐照源的距离越近，照射对人的影响（ ）。",
    "imageName": "image_25.jpg",
    "options": {
      "A": "越小",
      "B": "越大",
      "C": "没变化",
      "D": "不确定"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 26,
    "type": "single",
    "difficulty": "简单",
    "question": "外照射防护的三个要素如下图所示，接触照射的时间越长，照射对人的影响（ ）。",
    "imageName": "image_25.jpg",
    "options": {
      "A": "越小",
      "B": "越大",
      "C": "没变化",
      "D": "不确定"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 27,
    "type": "single",
    "difficulty": "中等",
    "question": "根据联合国原子辐射效应科学委员会（UNSCEAR）的统计，各种人工辐射照射来源所致公众辐射剂量的全球平均值中，最高的是（ ）。",
    "optionImages": {
      "A": "image_26.jpg",
      "B": "image_27.jpg",
      "C": "image_28.jpg",
      "D": "image_29.jpg"
    },
    "options": {
      "A": "医疗照射",
      "B": "大气核试验",
      "C": "切尔诺贝利事故",
      "D": "核燃料循环"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 28,
    "type": "single",
    "difficulty": "中等",
    "question": "不同类型的辐射，即使在能量相同的情况下，其穿透能力也是不一样的（如下图所示）。其中穿透能力最差的是（ ）。",
    "imageName": "image_30.jpg",
    "options": {
      "A": "α",
      "B": "β",
      "C": "γ",
      "D": "中子"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 29,
    "type": "single",
    "difficulty": "中等",
    "question": "下图所示的衰变类型属于（ ）衰变。",
    "imageName": "image_31.jpg",
    "options": {
      "A": "β-",
      "B": "β+",
      "C": "α",
      "D": "γ"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 30,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的平面硅（PIPS）可用于制成（ ）。",
    "imageName": "image_32.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 31,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的金硅面垒探测器属于（ ）。",
    "imageName": "image_33.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 32,
    "type": "single",
    "difficulty": "中等",
    "question": "用下图中的闪烁液进行探测的属于（ ）。",
    "imageName": "image_34.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 33,
    "type": "single",
    "difficulty": "中等",
    "question": "用下图中的锂玻璃制成的探测器属于（ ）。",
    "imageName": "image_35.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 34,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的硫化锌探测器属于（ ）。",
    "imageName": "image_36.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 35,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的碘化铯探测器属于（ ）。",
    "imageName": "image_37.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 36,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的电离室探测器属于（ ）。",
    "imageName": "image_36.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 37,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的正比计数器属于（ ）。",
    "imageName": "image_37.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 38,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中的 G-M 计数管属于（ ）。",
    "imageName": "image_38.jpg",
    "options": {
      "A": "气体探测器",
      "B": "闪烁体探测器",
      "C": "半导体探测器",
      "D": "液体探测器"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 39,
    "type": "single",
    "difficulty": "中等",
    "question": "以下是某核素的衰变图，纵坐标是核素活度百分比，横坐标是衰变的天数。那么由图可知，该核素的半衰期是（ ）。",
    "imageName": "image_39.jpg",
    "options": {
      "A": "1 天",
      "B": "2 天",
      "C": "4 天",
      "D": "8 天"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 40,
    "type": "single",
    "difficulty": "困难",
    "question": "随着放射性核素数量的减少，所发出的辐射也相应地减少。某核素活度随时间变化的关系如下图，已知该核素半衰期为 4 天，那么核素数量减少到原来的 1/8 所需要的时间是（ ）。",
    "imageName": "image_40.jpg",
    "options": {
      "A": "4 天",
      "B": "8 天",
      "C": "12 天",
      "D": "16 天"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 41,
    "type": "single",
    "difficulty": "中等",
    "question": "在以下生活中我们所接触的辐射中，剂量最高的是（ ）。",
    "optionImages": {
      "A": "image_41_A.jpg",
      "B": "image_41_B.jpg",
      "C": "image_41_C.jpg",
      "D": "image_41_D.jpg"
    },
    "options": {
      "A": "胸部X光扫描CT(照射一次)",
      "B": "患癌症的人增加(照射一年)",
      "C": "死亡(短时照射)",
      "D": "核工业人员辐射限量(照射一年)"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 42,
    "type": "single",
    "difficulty": "简单",
    "question": "在能量相同的情况下，辐射侵入组织的深度取决于辐射的种类，下图中辐射 c 是属于（ ）。",
    "imageName": "image_42.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "中子"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 43,
    "type": "single",
    "difficulty": "简单",
    "question": "在能量相同的情况下，辐射侵入组织的深度取决于辐射的种类，下图中辐射 b 是属于（ ）。",
    "imageName": "image_42.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "中子"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 44,
    "type": "single",
    "difficulty": "简单",
    "question": "在能量相同的情况下，辐射侵入组织的深度取决于辐射的种类，下图中辐射 a 是属于（ ）。",
    "imageName": "image_42.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "中子"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 45,
    "type": "single",
    "difficulty": "困难",
    "question": "下图为胚胎发育不同阶段，受 2Gy 剂量的 X 射线照射造成死胎和畸形的发生率的关系图，以下说法中错误的是（ ）。",
    "imageName": "image_45.jpg",
    "options": {
      "A": "随着个体发育过程的推进，其对辐射的敏感性逐渐降低。",
      "B": "随着个体发育过程的推进，其对辐射的敏感性逐渐增高。",
      "C": "胚胎在不同的发育阶段，对辐射敏感性呈现不同程度的变化。",
      "D": "在怀孕的前 50 天辐射对胎儿的危害性最大。"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 46,
    "type": "single",
    "difficulty": "中等",
    "question": "根据随机性效应发生率与剂量关系图，下列说法错误的是（ ）。",
    "imageName": "image_46.jpg",
    "options": {
      "A": "辐射效应的发生概率与剂量大小有关",
      "B": "辐射效应的严重程度与剂量大小有关。",
      "C": "对于随机性效应，即使很小的剂量，也有导致该效应发生的危险。",
      "D": "不存在剂量阈值。"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 47,
    "type": "single",
    "difficulty": "中等",
    "question": "种系的演化程度越高，机体结构越复杂，对辐射的敏感性越高。下列不同种系生物死亡所需的吸收剂量最高的是（ ）。",
    "optionImages": {
      "A": "image_47_A.jpg",
      "B": "image_47_B.jpg",
      "C": "image_47_C.jpg",
      "D": "image_47_D.jpg"
    },
    "options": {
      "A": "病毒",
      "B": "鼠",
      "C": "大肠杆菌",
      "D": "人"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 48,
    "type": "single",
    "difficulty": "中等",
    "question": "种系的演化程度越高，机体结构越复杂，对辐射的敏感性越高。下列不同种系生物死亡所需的吸收剂量最高的是（ ）。",
    "optionImages": {
      "A": "image_48_A.jpg",
      "B": "image_48_B.jpg",
      "C": "image_48_C.jpg",
      "D": "image_48_D.jpg"
    },
    "options": {
      "A": "龟",
      "B": "猴",
      "C": "大肠杆菌",
      "D": "鼠"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 49,
    "type": "single",
    "difficulty": "中等",
    "question": "不同的细胞具有不同的辐射敏感性，不同的组织也具有不同的敏感性，下列属于轻度敏感的组织或是器官有（ ）。",
    "optionImages": {
      "A": "image_49_A.jpg",
      "B": "image_49_B.jpg",
      "C": "image_49_C.jpg",
      "D": "image_49_D.jpg"
    },
    "options": {
      "A": "肝上皮细胞",
      "B": "心脏",
      "C": "胚胎",
      "D": "角膜"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 50,
    "type": "single",
    "difficulty": "简单",
    "question": "当量剂量的国际标准单位为焦耳每千克，专用名称以（ ）的名字命名的，用符号 Sv 表示。",
    "optionImages": {
      "A": "image_50_A.jpg",
      "B": "image_50_B.jpg",
      "C": "image_50_C.jpg",
      "D": "image_50_D.jpg"
    },
    "options": {
      "A": "戈瑞",
      "B": "希沃特",
      "C": "爱因斯坦",
      "D": "贝克勒尔"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 51,
    "type": "single",
    "difficulty": "简单",
    "question": "吸收剂量的国际标准单位为焦耳每千克，专用名称以（ ）的名字命名的，用符号 Gy 表示。",
    "optionImages": {
      "A": "image_51_A.jpg",
      "B": "image_51_B.jpg",
      "C": "image_51_C.jpg",
      "D": "image_51_D.jpg"
    },
    "options": {
      "A": "戈瑞",
      "B": "伦琴",
      "C": "爱因斯坦",
      "D": "贝克勒尔"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 52,
    "type": "single",
    "difficulty": "简单",
    "question": "根据效应与照射剂量的关系，ICRP 将电离辐射生物效应进行了分类，下图中所表示的关系属于（ ）。",
    "imageName": "image_52.jpg",
    "options": {
      "A": "确定性效应",
      "B": "随机性效应",
      "C": "指数衰减",
      "D": "指数增强"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 53,
    "type": "single",
    "difficulty": "中等",
    "question": "如图所示 β 能谱，以下说法错误的是（ ）。",
    "imageName": "image_53.jpg",
    "options": {
      "A": "β 射线的能量连续分布",
      "B": "有一个确定的最大能量值",
      "C": "分布曲线有一个极大",
      "D": "能谱分立分布"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 54,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，属于 γ 衰变的是（ ）。",
    "imageName": "image_54.jpg",
    "options": {
      "A": "a",
      "B": "b",
      "C": "c",
      "D": "d"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 55,
    "type": "single",
    "difficulty": "中等",
    "question": "在如下图所示的衰变纲图中，衰变方式 d 属于（ ）衰变。",
    "imageName": "image_55.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 56,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 c 属于（ ）衰变。",
    "imageName": "image_56.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 57,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 b 属于（ ）衰变。",
    "imageName": "image_57.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 58,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 c 属于（ ）衰变。",
    "imageName": "image_58.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 59,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 a 属于（ ）衰变。",
    "imageName": "image_59.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 60,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 B 属于（ ）衰变。",
    "imageName": "image_60.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 61,
    "type": "single",
    "difficulty": "困难",
    "question": "在如下图所示的衰变纲图中，衰变方式 A 属于（ ）衰变。",
    "imageName": "image_61.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β+ 衰变",
      "C": "β- 衰变",
      "D": "γ 衰变"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 62,
    "type": "single",
    "difficulty": "中等",
    "question": "如图所示原子中电子的壳层结构，其中最多可以容纳 8 个电子数为（ ）层。",
    "imageName": "image_62.jpg",
    "options": {
      "A": "K",
      "B": "L",
      "C": "M",
      "D": "N"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 63,
    "type": "single",
    "difficulty": "简单",
    "question": "如图所示原子中电子的壳层结构，其中最多可以容纳 2 个电子数为（ ）层。",
    "imageName": "image_63.jpg",
    "options": {
      "A": "K",
      "B": "L",
      "C": "M",
      "D": "N"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 64,
    "type": "single",
    "difficulty": "中等",
    "question": "从下图中看出，对于中能 γ 射线和原子序数低的吸收物质，（ ）占有优势。",
    "imageName": "image_64.jpg",
    "options": {
      "A": "光电效应",
      "B": "康普顿效应",
      "C": "电子对效应"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 65,
    "type": "single",
    "difficulty": "中等",
    "question": "从下图中看出，对于低能 γ 射线和原子序数高的吸收物质（ ）占有优势。",
    "imageName": "image_65.jpg",
    "options": {
      "A": "光电效应",
      "B": "康普顿效应",
      "C": "电子对效应"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 66,
    "type": "single",
    "difficulty": "困难",
    "question": "下图中表示电子对效应的物理过程是（ ）。",
    "optionImages": {
      "A": "image_66_A.jpg",
      "B": "image_66_B.jpg",
      "C": "image_66_C.jpg",
      "D": "image_66_D.jpg"
    },
    "options": { "A": "", "B": "", "C": "", "D": "" },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 67,
    "type": "single",
    "difficulty": "中等",
    "question": "下图中表示康普顿散射这一过程是（ ）。",
    "optionImages": {
      "A": "image_67_A.jpg",
      "B": "image_67_B.jpg",
      "C": "image_67_C.jpg",
      "D": "image_67_D.jpg"
    },
    "options": { "A": "", "B": "", "C": "", "D": "" },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 68,
    "type": "single",
    "difficulty": "中等",
    "question": "α 辐射，又称 α 粒子，是由较大的不稳定原子核发射出的，下图中（ ）是 α 粒子。",
    "optionImages": {
      "A": "image_68_A.jpg",
      "B": "image_68_B.jpg",
      "C": "image_68_C.jpg",
      "D": "image_68_D.jpg"
    },
    "options": { "A": "", "B": "", "C": "", "D": "" },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 69,
    "type": "single",
    "difficulty": "中等",
    "question": "实验发现，放射性核素 22286Ra 放出一个 α 粒子，变成 21484Po。下图是 22286Ra 衰变规律的曲线，由此可知，22286Ra 的数目减少一半需要（ ）天。",
    "imageName": "image_69.jpg",
    "options": {
      "A": "2 天",
      "B": "4 天",
      "C": "8 天",
      "D": "12 天"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 70,
    "type": "single",
    "difficulty": "困难",
    "question": "下图所表示的物理过程是（ ）。",
    "imageName": "image_70.jpg",
    "options": {
      "A": "光电效应",
      "B": "俄歇电子",
      "C": "康普顿散射",
      "D": "电子对效应"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 71,
    "type": "single",
    "difficulty": "中等",
    "question": "下图所表示的物理过程是（ ）。",
    "imageName": "image_71.jpg",
    "options": {
      "A": "光电效应",
      "B": "俄歇电子",
      "C": "康普顿散射",
      "D": "电子对效应"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 72,
    "type": "single",
    "difficulty": "中等",
    "question": "下图所表示的物理过程是（ ）。",
    "imageName": "image_72.jpg",
    "options": {
      "A": "光电效应",
      "B": "俄歇电子",
      "C": "康普顿散射",
      "D": "电子对效应"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 73,
    "type": "single",
    "difficulty": "困难",
    "question": "如下原子结构示意图，正确的表示方法为（ ）。",
    "imageName": "image_73.jpg",
    "options": {
      "A": "178O",
      "B": "179O",
      "C": "179F",
      "D": "178F"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 74,
    "type": "single",
    "difficulty": "困难",
    "question": "根据原子核比结合能曲线，以下原子核中结合得最松的是（ ）。",
    "imageName": "image_74.jpg",
    "options": {
      "A": "H",
      "B": "He",
      "C": "Li",
      "D": "Fe"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 75,
    "type": "single",
    "difficulty": "困难",
    "question": "根据原子核比结合能曲线，以下原子核中结合得最紧的是（ ）。",
    "imageName": "image_74.jpg",
    "options": {
      "A": "H",
      "B": "He",
      "C": "Li",
      "D": "Fe"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 76,
    "type": "single",
    "difficulty": "简单",
    "question": "根据（ ）相对论理论，任何具有一定质量 m 的物体，它相应的能量公式表示为：E= mc2",
    "options": {
      "A": "爱因斯坦",
      "B": "伦琴",
      "C": "贝克勒尔",
      "D": "玻恩"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 77,
    "type": "single",
    "difficulty": "中等",
    "question": "1898 年，（ ）发现当铀发出射线后，可以神奇地转变为其他元素，其中一个元素命名为钋，另一个元素称为镭，即“发光的”元素。",
    "options": {
      "A": "伦琴",
      "B": "贝克勒尔",
      "C": "居里夫人",
      "D": "麦克斯韦"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 78,
    "type": "single",
    "difficulty": "中等",
    "question": "下面碳原子结构示意图中，代表中子的是（ ）。",
    "imageName": "image_78.jpg",
    "options": {
      "A": "a",
      "B": "b",
      "C": "c",
      "D": "d"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 79,
    "type": "single",
    "difficulty": "中等",
    "question": "下面碳原子结构示意图中，代表电子的是（ ）。",
    "imageName": "image_78.jpg",
    "options": {
      "A": "a",
      "B": "b",
      "C": "c",
      "D": "d"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 80,
    "type": "single",
    "difficulty": "中等",
    "question": "下面碳原子结构示意图中，代表质子的是（ ）。",
    "imageName": "image_78.jpg",
    "options": {
      "A": "a",
      "B": "b",
      "C": "c",
      "D": "d"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 81,
    "type": "single",
    "difficulty": "中等",
    "question": "下面碳原子结构示意图中，代表碳原子核的是（ ）。",
    "imageName": "image_78.jpg",
    "options": {
      "A": "a",
      "B": "b",
      "C": "c",
      "D": "d"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 82,
    "type": "single",
    "difficulty": "中等",
    "question": "以下属于电离辐射的有（ ）。",
    "optionImages": {
      "A": "image_82_A.jpg",
      "B": "image_82_B.jpg",
      "C": "image_82_C.jpg",
      "D": "image_82_D.jpg"
    },
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 83,
    "type": "single",
    "difficulty": "中等",
    "question": "图中采取的是哪种内照射防护措施？（ ）",
    "imageName": "image_83.jpg",
    "options": {
      "A": "包容",
      "B": "隔离",
      "C": "净化",
      "D": "个人防护"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 84,
    "type": "single",
    "difficulty": "中等",
    "question": "图中采取的是哪种内照射防护措施？（ ）",
    "imageName": "image_84.jpg",
    "options": {
      "A": "包容",
      "B": "隔离",
      "C": "净化",
      "D": "个人防护"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 85,
    "type": "single",
    "difficulty": "简单",
    "question": "图中是什么标志？（ ）",
    "imageName": "image_85.jpg",
    "options": {
      "A": "电离辐射标志",
      "B": "电磁辐射标志",
      "C": "非电离辐射标志",
      "D": "电离辐射警告标志"
    },
    "correctAnswer": "D",
    "note": ""
  },
  {
    "id": 86,
    "type": "single",
    "difficulty": "简单",
    "question": "图中采取的是什么防护措施？（ ）",
    "imageName": "image_86.jpg",
    "options": {
      "A": "包容",
      "B": "隔离",
      "C": "净化",
      "D": "稀释"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 87,
    "type": "single",
    "difficulty": "中等",
    "question": "本图采用的是何种外照射防护方法？（ ）",
    "imageName": "image_87.jpg",
    "options": {
      "A": "时间防护",
      "B": "距离防护",
      "C": "屏蔽防护",
      "D": "个人防护"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 88,
    "type": "single",
    "difficulty": "简单",
    "question": "该图表示的是哪种衰变？（ ）",
    "imageName": "image_88.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β 衰变",
      "C": "γ 衰变",
      "D": "中子辐射"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 89,
    "type": "single",
    "difficulty": "简单",
    "question": "该图表示的是哪种衰变？（ ）",
    "imageName": "image_89.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β 衰变",
      "C": "γ 衰变",
      "D": "中子辐射"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 90,
    "type": "single",
    "difficulty": "简单",
    "question": "该图表示的是哪种衰变？（ ）",
    "imageName": "image_90.jpg",
    "options": {
      "A": "α 衰变",
      "B": "β 衰变",
      "C": "γ 衰变",
      "D": "中子辐射"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 91,
    "type": "single",
    "difficulty": "简单",
    "question": "原子核模型图中，哪种颜色的粒子代表中子？（ ）",
    "imageName": "image_91.jpg",
    "options": {
      "A": "红色",
      "B": "白色",
      "C": "绿色",
      "D": "绿色和白色"
    },
    "correctAnswer": "B",
    "note": ""
  },
  {
    "id": 92,
    "type": "single",
    "difficulty": "简单",
    "question": "原子核模型图中，表述电子的是哪种颜色的粒子？（ ）",
    "imageName": "image_91.jpg",
    "options": {
      "A": "红色",
      "B": "白色",
      "C": "绿色",
      "D": "绿色和白色"
    },
    "correctAnswer": "C",
    "note": ""
  },
  {
    "id": 93,
    "type": "single",
    "difficulty": "简单",
    "question": "原子核模型图中，原子核是哪种颜色的粒子？（ ）",
    "imageName": "image_91.jpg",
    "options": {
      "A": "红色和白色",
      "B": "白色和绿色",
      "C": "绿色和红色",
      "D": "绿色、白色和绿色"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 94,
    "type": "single",
    "difficulty": "简单",
    "question": "原子核模型图中，表述质子的是哪种颜色的粒子？（ ）",
    "imageName": "image_91.jpg",
    "options": {
      "A": "红色",
      "B": "白色",
      "C": "绿色",
      "D": "绿色和白色"
    },
    "correctAnswer": "A",
    "note": ""
  },
  {
    "id": 95,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下表中列出了构成原子的各种粒子的特征，以下说法中正确的是（ ）。",
    "options": {
      "A": "每个核外电子带有一个电子电荷的电量，极性为负。",
      "B": "每个质子也带有一个电子电荷的电量，极性为正。",
      "C": "中子是不带电的。",
      "D": "核外电子的数量和原子核内质子的数量相等。"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 96,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下表中列出了构成原子的各种粒子的特征，以下说法中正确的是（ ）。",
    "options": {
      "A": "整个原子呈现电中性。",
      "B": "1 电子电荷（e）=1.602×10-19C。",
      "C": "中子与质子的质量近似相等。",
      "D": "当各核子结合在一起构成原子核时,核外电子的数量和原子核内质子的数量相等。"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 97,
    "type": "multiple",
    "difficulty": "简单",
    "question": "辐射灭菌是利用辐射杀死大多数物质上的微生物的一种有效方法，通过特定的方式控制微生物生长或杀死微生物。辐照灭菌属于（ ）。",
    "options": {
      "A": "电离辐射",
      "B": "非电离辐射",
      "C": "人工辐射",
      "D": "天然辐射"
    },
    "correctAnswer": ["A", "B"],
    "note": ""
  },
  {
    "id": 98,
    "type": "multiple",
    "difficulty": "中等",
    "question": "宇宙射线是来自外太空的带电高能次原子粒子，它们可能会产生二次粒子穿透地球的大气层和表面。宇宙射线属于（ ）。",
    "options": {
      "A": "电离辐射",
      "B": "非电离辐射",
      "C": "人工辐射",
      "D": "天然辐射"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 99,
    "type": "multiple",
    "difficulty": "中等",
    "question": "如下原子核模型图，表述正确的是（ ）。",
    "imageName": "image_99.jpg",
    "options": {
      "A": "红色为质子",
      "B": "白色为中子",
      "C": "绿色为电子",
      "D": "绿色为质子",
      "E": "白色为质子"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 100,
    "type": "multiple",
    "difficulty": "中等",
    "question": "图片表述正确的是（ ）。",
    "imageName": "image_100.jpg",
    "options": {
      "A": "是同一种元素",
      "B": "是三种不同核素",
      "C": "是同一种核素",
      "D": "三者互为同位素",
      "E": "三者不是同位素"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 101,
    "type": "multiple",
    "difficulty": "困难",
    "question": "活度随时间变化的关系图，正确的说法是（ ）。",
    "imageName": "image_101.jpg",
    "options": {
      "A": "衰变过程遵循明确的统计规律",
      "B": "经历时间越长，放射性衰变原子核减少的越多。",
      "C": "每一种放射性核素衰变常数是固定不变的",
      "D": "每种放射性核素的半衰期是固定的",
      "E": "衰变常数乘以半衰期等于 0.693。"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 102,
    "type": "multiple",
    "difficulty": "中等",
    "question": "图片中关于伽马衰变表述正确的是（ ）。",
    "imageName": "image_102.jpg",
    "options": {
      "A": "原子核能级跃迁退激时释放出的射线",
      "B": "波长较短的电磁波",
      "C": "没有质量只有能量",
      "D": "常伴有α或β 粒子的发射",
      "E": "电荷数和质量数都不发生改变。"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 103,
    "type": "multiple",
    "difficulty": "中等",
    "question": "图片中关于中子表述正确的是（ ）。",
    "imageName": "image_103.jpg",
    "options": {
      "A": "由不稳定原子核发射出的中子",
      "B": "大多通过核裂变或核聚变产生",
      "C": "不带电",
      "D": "穿透能力很强",
      "E": "γ 辐射"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 104,
    "type": "multiple",
    "difficulty": "困难",
    "question": "如果射线粒子能量相同，对于外照射屏蔽该图说法正确的是（ ）。",
    "imageName": "image_104.jpg",
    "options": {
      "A": "带电粒子穿透能力比不带电粒子弱",
      "B": "α 不需要屏蔽",
      "C": "β 可用低原子序数材料屏蔽",
      "D": "γ 可以采用高原子序数材料屏蔽",
      "E": "中子用含H 低原子序数材料屏蔽"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 105,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图中告诉我们天然辐射源主要包括（ ）。",
    "imageName": "image_105.jpg",
    "options": {
      "A": "宇宙射线",
      "B": "宇生放射性核素",
      "C": "陆生放射性核素",
      "D": "胸部透视",
      "E": "高空飞行"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 106,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图中采取的防护措施有（ ）。",
    "imageName": "image_106.jpg",
    "options": {
      "A": "时间防护",
      "B": "距离防护",
      "C": "屏蔽防护",
      "D": "个人防护",
      "E": "隔离防护"
    },
    "correctAnswer": ["B", "C"],
    "note": ""
  },
  {
    "id": 107,
    "type": "multiple",
    "difficulty": "中等",
    "question": "如图所示照射方式可分为外照射、内照射和混合照射，以下说法中正确的是（ ）。",
    "imageName": "image_107.jpg",
    "options": {
      "A": "外照射可以是单向照射或多向照射，后者的效应大于前者。",
      "B": "多向照射增强生物效应的原因是组织接受的照射剂量均匀。",
      "C": "对于内照射的危害，α>β＞γ 与 X。",
      "D": "通常能量的 α 粒子不能穿过人体的表面的死层，故 α 粒子外照射一般不能对人体造成伤害。"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 108,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下图是电离辐射生物效应中的确定性效应，关于确定性效应的观点正确的是（ ）。",
    "imageName": "image_108.jpg",
    "options": {
      "A": "发生严重程度和机率都随剂量变化而变化",
      "B": "即使剂量很小，也有可能发生效应",
      "C": "发生概率随受照剂量增加而增加，而严重程度与受照剂量无关",
      "D": "存在剂量阈值"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 109,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下图表示放射源全寿命期的管理包括哪些？（ ）",
    "imageName": "image_109.jpg",
    "options": {
      "A": "进口审批和备案",
      "B": "转让的审批与备案",
      "C": "转移的备案",
      "D": "送贮备案",
      "E": "返回出口国的审批"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 110,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图片中的人不应当采取的做法是（ ）。",
    "imageName": "image_110.jpg",
    "options": {
      "A": "远离",
      "B": "搬离",
      "C": "当废品卖掉",
      "D": "拆卸",
      "E": "报告当地生态环境部门"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 111,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图片中的人应当采取的正确行动是（ ）。",
    "imageName": "image_111.jpg",
    "options": {
      "A": "远离",
      "B": "搬离",
      "C": "当废品卖掉",
      "D": "报告当地公安部门",
      "E": "报告当地生态环境部门"
    },
    "correctAnswer": ["A", "D", "E"],
    "note": ""
  },
  {
    "id": 112,
    "type": "multiple",
    "difficulty": "中等",
    "question": "本衰变图说法正确的是（ ）。",
    "imageName": "image_112.jpg",
    "options": {
      "A": "α 衰变",
      "B": "发出 α 粒子",
      "C": "发出 β 粒子",
      "D": "发出中子",
      "E": "发出氦原子核"
    },
    "correctAnswer": ["A", "B", "E"],
    "note": ""
  },
  {
    "id": 113,
    "type": "multiple",
    "difficulty": "中等",
    "question": "图中剂量限值表述正确的是（ ）。",
    "imageName": "image_113.jpg",
    "options": {
      "A": "职业人员照射剂量限值",
      "B": "公众剂量限值",
      "C": "职业人员连续 5 年内平均值不大于 20 mSv/a",
      "D": "公众连续 5 年内平均值不大于 1 mSv/a",
      "E": "职业人员任何一年的最大值为 20 mSv/a"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 114,
    "type": "multiple",
    "difficulty": "简单",
    "question": "关于辐射安全许可证说法正确的是（ ）。",
    "imageName": "image_114.jpg",
    "options": {
      "A": "有正本和副本",
      "B": "生态环境部门颁发",
      "C": "卫生主管部门颁发",
      "D": "有效期 5 年",
      "E": "规定活动种类和范围"
    },
    "correctAnswer": ["A", "B", "D", "E"],
    "note": ""
  },
  {
    "id": 115,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下图说法正确的是（ ）。",
    "imageName": "image_115.jpg",
    "options": {
      "A": "穿透力 α<β<γ",
      "B": "外照射危害 α<β<γ",
      "C": "内照射危害 α>β>γ",
      "D": "外照射防护主要针对β和γ",
      "E": "内照射都要防护"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 116,
    "type": "multiple",
    "difficulty": "中等",
    "question": "见到图片中的无人看管的东西，错误的做法是（ ）。",
    "imageName": "image_116.jpg",
    "options": {
      "A": "远离",
      "B": "搬离",
      "C": "拆卸",
      "D": "当废品卖掉",
      "E": "报告当地生态环境部门或公安部门"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 117,
    "type": "multiple",
    "difficulty": "困难",
    "question": "图中关于确定性效应表达的正确含义是（ ）。",
    "imageName": "image_117.jpg",
    "options": {
      "A": "针对大剂量、大剂量率的急性照射",
      "B": "确定性效应有明确的阈值",
      "C": "在阈值以下不会见到有害效应",
      "D": "达到阈值则有害效应肯定会发生",
      "E": "效应的严重程度随所受剂量的增加而增加"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 118,
    "type": "multiple",
    "difficulty": "困难",
    "question": "图中关于随机性效应表达的正确含义是（ ）。",
    "imageName": "image_118.jpg",
    "options": {
      "A": "针对小剂量、小剂量率的慢性照射",
      "B": "随机性效应不存在剂量阈值",
      "C": "辐射效应的发生概率与剂量大小有关",
      "D": "辐射效应的非严重程度与剂量大小有关",
      "E": "很小的剂量也有导致该效应发生的危险"
    },
    "correctAnswer": ["A", "B", "C", "E"],
    "note": ""
  },
  {
    "id": 119,
    "type": "multiple",
    "difficulty": "简单",
    "question": "电离辐射是指其携带的能量足以使物质原子或分子中的电子成为自由态，从而使这些原子或分子发生电离现象的辐射。下列属于电离辐射的是（ ）",
    "options": {
      "A": "氡气",
      "B": "核子秤",
      "C": "电视",
      "D": "安检"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 120,
    "type": "multiple",
    "difficulty": "中等",
    "question": "闪烁探测器具有分辨时间短、探测效率高和能测量射线能量等优点，是目前应用最广的辐射探测器之一。下列探测器中属于无机闪烁体探测器的是（ ）。",
    "options": {
      "A": "碘化钠",
      "B": "碘化铯",
      "C": "硫化锌",
      "D": "锂玻璃"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 121,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下列探测器中属于半导体探测器有（ ）。",
    "options": {
      "A": "金硅面垒",
      "B": "平面硅（PIPS）",
      "C": "高纯锗",
      "D": "锂玻璃"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 122,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下列探测器中属于闪烁体探测器有（ ）。",
    "options": {
      "A": "电离室",
      "B": "平面硅（PIPS）",
      "C": "液体闪烁器",
      "D": "碘化铯"
    },
    "correctAnswer": ["C", "D"],
    "note": ""
  },
  {
    "id": 123,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下列探测器中常用于中子探测的有（ ）。",
    "options": {
      "A": "硫化锌",
      "B": "BF3 正比计数器",
      "C": "3He 正比计数器",
      "D": "锂玻璃"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 124,
    "type": "multiple",
    "difficulty": "简单",
    "question": "核试验的类型包括以下哪些方式（ ）。",
    "options": {
      "A": "地上核试验",
      "B": "地下核试验",
      "C": "高空核试验",
      "D": "水下核试验"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 125,
    "type": "multiple",
    "difficulty": "简单",
    "question": "电离辐射是指其携带的能量足以使物质原子或分子中的电子成为自由态，从而使这些原子或分子发生电离现象的辐射。下列属于电离辐射的是（ ）。",
    "options": {
      "A": "电脑",
      "B": "灯源",
      "C": "电子加速器",
      "D": "辐照灭菌"
    },
    "correctAnswer": ["C", "D"],
    "note": ""
  },
  {
    "id": 126,
    "type": "multiple",
    "difficulty": "中等",
    "question": "气体探测器收集的带电粒子数目与电压关系曲线如下图。下列描述正确的是（ ）。",
    "imageName": "image_126.jpg",
    "options": {
      "A": "Ⅰ区内收集的离子对数目随收集电压而增加。",
      "B": "Ⅱ区内工作气体中产生的离子对被完全收集，因而在一定的电压范围内，收集离子对数目不随工作电压而变化。",
      "C": "Ⅲ区内随着电压增加，电子在被收集前被加速。",
      "D": "Ⅳ区内随着电压的增加，气体的放大倍数与收集到的总电量成正比的严格关系被打破。"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 127,
    "type": "multiple",
    "difficulty": "简单",
    "question": "以下属于非电离辐射的有（ ）。",
    "options": {
      "A": "手机",
      "B": "电脑",
      "C": "微波",
      "D": "广播"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 128,
    "type": "multiple",
    "difficulty": "中等",
    "question": "电离辐射种类很多，包括带电粒子和不带电粒子。不带电粒子有（ ）。",
    "options": {
      "A": "X 射线",
      "B": "γ 射线",
      "C": "质子",
      "D": "中子"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 129,
    "type": "multiple",
    "difficulty": "中等",
    "question": "电离辐射种类很多，包括带电粒子和不带电粒子。带电粒子有（ ）。",
    "options": {
      "A": "α 粒子",
      "B": "β 粒子",
      "C": "质子",
      "D": "中子"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 130,
    "type": "multiple",
    "difficulty": "中等",
    "question": "如图所示 β 能谱，以下说法正确的是（ ）。",
    "imageName": "image_130.jpg",
    "options": {
      "A": "β 射线的能量连续分布",
      "B": "有一个确定的最大能量值",
      "C": "分布曲线有一个极大值",
      "D": "能谱分立分布"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 131,
    "type": "multiple",
    "difficulty": "简单",
    "question": "非电离辐射，由于辐射能量低，不能从原子、分子或其他束缚状态放出电子，包括（ ）。",
    "options": {
      "A": "可见光",
      "B": "热源",
      "C": "电视天线",
      "D": "电脑"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 132,
    "type": "multiple",
    "difficulty": "中等",
    "question": "图中采取的外照射防护措施有哪些？（ ）",
    "imageName": "image_132.jpg",
    "options": {
      "A": "机械手操作",
      "B": "移动屏蔽",
      "C": "铅玻璃",
      "D": "穿工作服",
      "E": "穿防护服"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 133,
    "type": "multiple",
    "difficulty": "中等",
    "question": "下图中医师采取的屏蔽措施有哪些？（ ）",
    "imageName": "image_133.jpg",
    "options": {
      "A": "隔室操作",
      "B": "铅玻璃屏蔽",
      "C": "穿工作服",
      "D": "穿防护服",
      "E": "戴铅眼镜"
    },
    "correctAnswer": ["A", "B"],
    "note": ""
  },
  {
    "id": 134,
    "type": "multiple",
    "difficulty": "中等",
    "question": "根据图片所示，外照射主要针对哪类射线？（ ）",
    "imageName": "image_134.jpg",
    "options": {
      "A": "α 射线",
      "B": "β 射线",
      "C": "γ 射线",
      "D": "X 射线",
      "E": "中子（n）"
    },
    "correctAnswer": ["B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 135,
    "type": "multiple",
    "difficulty": "中等",
    "question": "针对外照射，图中显示的防护措施包括 。（ ）",
    "imageName": "image_135.jpg",
    "options": {
      "A": "缩短照射时间",
      "B": "增加与源的距离",
      "C": "在人与源之间设置屏蔽",
      "D": "增加降雨",
      "E": "避免太阳直射"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 136,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图为电离辐射标志，应设置在哪些地方？（ ）",
    "imageName": "image_136.jpg",
    "options": {
      "A": "放射源",
      "B": "放射性同位素包装容器",
      "C": "含放射源的设备",
      "D": "射线装置",
      "E": "放射性同位素贮存场所"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 137,
    "type": "multiple",
    "difficulty": "简单",
    "question": "图为电离辐射警告标志，应设置在哪些地方？（ ）",
    "imageName": "image_137.jpg",
    "options": {
      "A": "放射性同位素贮存场所",
      "B": "放射性工作场所出入口",
      "C": "室外作业安全区域",
      "D": "野外作业安全区域",
      "E": "放射性同位素运输工具"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 138,
    "type": "multiple",
    "difficulty": "中等",
    "question": "本图采用的是何种外照射防护方法？（ ）",
    "imageName": "image_138.jpg",
    "options": {
      "A": "时间防护",
      "B": "距离防护",
      "C": "屏蔽防护",
      "D": "个人防护",
      "E": "降低剂量率"
    },
    "correctAnswer": ["B", "C"],
    "note": ""
  },
  {
    "id": 139,
    "type": "multiple",
    "difficulty": "中等",
    "question": "核素符号图，表述正确的是：（ ）",
    "imageName": "image_139.jpg",
    "options": {
      "A": "X 表示元素符号",
      "B": "A 表示质量数",
      "C": "Z 表示质子数",
      "D": "N 表示中子数",
      "E": "A=Z+N"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 140,
    "type": "multiple",
    "difficulty": "中等",
    "question": "警戒区内的防护行动是事故响应中需要采取的防护措施（应急警戒区示意图如下），以下说法正确的是（ ）。",
    "imageName": "image_140.jpg",
    "options": {
      "A": "出入内警戒区只能通过安全通道。",
      "B": "外部警戒区只允许公安、消防队员、救护服务和其他有资质的工作人员进入。",
      "C": "内部警戒区只允许拯救生命、急救、消防行动等采取防护措施后允许的行动。",
      "D": "事故现场的入口控制根据常规的治安程序完成。"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 141,
    "type": "multiple",
    "difficulty": "中等",
    "question": "如图所示，对于操作人员，可用（ ）等方法将操作人员围封起来，防止放射性物质进入人体。",
    "imageName": "image_141.jpg",
    "options": {
      "A": "工作服",
      "B": "鞋帽",
      "C": "手套",
      "D": "气衣"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 142,
    "type": "multiple",
    "difficulty": "简单",
    "question": "放射性物质进入体内的途径主要（ ）等。",
    "options": {
      "A": "吸入",
      "B": "食入",
      "C": "皮肤渗入",
      "D": "伤口侵入"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 143,
    "type": "multiple",
    "difficulty": "中等",
    "question": "常用的β 屏蔽材料有（ ）。",
    "options": {
      "A": "铅",
      "B": "有机玻璃",
      "C": "混凝土",
      "D": "铝"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 144,
    "type": "multiple",
    "difficulty": "中等",
    "question": "常用的γ 屏蔽材料有（ ）。",
    "options": {
      "A": "铅",
      "B": "钨",
      "C": "混凝土",
      "D": "砖"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 145,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_145.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 146,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_146.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "D"],
    "note": ""
  },
  {
    "id": 147,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_147.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C", "D"],
    "note": ""
  },
  {
    "id": 148,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_148.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 149,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_149.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B"],
    "note": ""
  },
  {
    "id": 150,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_150.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "C", "E"],
    "note": ""
  },
  {
    "id": 151,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_151.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 152,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_152.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 153,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_153.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 154,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_154.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 155,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_155.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C", "D"],
    "note": ""
  },
  {
    "id": 156,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_156.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 157,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_157.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "D"],
    "note": ""
  },
  {
    "id": 158,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_158.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 159,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_159.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 160,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_160.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 161,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_161.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 162,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_162.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 163,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_163.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C", "D"],
    "note": ""
  },
  {
    "id": 164,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_164.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "E"],
    "note": ""
  },
  {
    "id": 165,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_165.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 166,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_166.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 167,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_167.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 168,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_168.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "D", "E"],
    "note": ""
  },
  {
    "id": 169,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_169.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 170,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_170.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C"],
    "note": ""
  },
  {
    "id": 171,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_171.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 172,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_172.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 173,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_173.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 174,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_174.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C", "D"],
    "note": ""
  },
  {
    "id": 175,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_175.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 176,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_176.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 177,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_177.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 178,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_178.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B"],
    "note": ""
  },
  {
    "id": 179,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_179.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 180,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_180.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 181,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_181.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 182,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_182.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 183,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_183.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "D", "E"],
    "note": ""
  },
  {
    "id": 184,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_184.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 185,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_185.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 186,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_186.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 187,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_187.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C", "D"],
    "note": ""
  },
  {
    "id": 188,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_188.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 189,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_189.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 190,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_190.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 191,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_191.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "D"],
    "note": ""
  },
  {
    "id": 192,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_192.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 193,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_193.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 194,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_194.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  },
  {
    "id": 195,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_195.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "D", "E"],
    "note": ""
  },
  {
    "id": 196,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_196.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "E"],
    "note": ""
  },
  {
    "id": 197,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_197.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C"],
    "note": ""
  },
  {
    "id": 198,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_198.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 199,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_199.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "C", "D"],
    "note": ""
  },
  {
    "id": 200,
    "type": "multiple",
    "difficulty": "困难",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_200.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "B", "C", "D", "E"],
    "note": ""
  },
  {
    "id": 201,
    "type": "multiple",
    "difficulty": "简单",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_201.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "C"],
    "note": ""
  },
  {
    "id": 202,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_202.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["A", "B", "D"],
    "note": ""
  },
  {
    "id": 203,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_203.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容",
      "E": "选项E内容"
    },
    "correctAnswer": ["A", "C", "E"],
    "note": ""
  },
  {
    "id": 204,
    "type": "multiple",
    "difficulty": "中等",
    "question": "（多选题文档原题提取占位）...",
    "imageName": "image_204.jpg",
    "options": {
      "A": "选项A内容",
      "B": "选项B内容",
      "C": "选项C内容",
      "D": "选项D内容"
    },
    "correctAnswer": ["B", "C", "D"],
    "note": ""
  }
];

// 2. 全局状态管理
let state = {
    mode: '',                
    questions: [],           
    currentIndex: 0,         
    userAnswers: {},         
    multiSelections: new Set(), 
    timer: null,             
    wrongSet: new Set(JSON.parse(localStorage.getItem('rad_wrong_list') || '[]')),
    stats: { correct: 0, partial: 0, wrong: 0 } // 三色统计
};

// 3. 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    // 绑定首页模式按钮
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => startMode(btn.dataset.mode));
    });

    // 绑定提交和下一题按钮
    document.getElementById('submit-multi-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', handleNext);

    // 绑定笔记自动保存 (防抖)
    const noteInput = document.getElementById('note-input');
    let debounceTimer;
    noteInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const qId = state.questions[state.currentIndex].id;
            localStorage.setItem(`note_${qId}`, noteInput.value);
        }, 500);
    });
});

// 4. 模式启动
function startMode(mode) {
    state.mode = mode;
    state.currentIndex = 0;
    state.userAnswers = {};
    state.stats = { correct: 0, partial: 0, wrong: 0 };

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    if (mode === 'exam') {
        // 模拟考试：随机抽取并合并单多选
        const singles = shuffle(questionBank.filter(q => q.type === 'single')).slice(0, 60);
        const multis = shuffle(questionBank.filter(q => q.type === 'multiple')).slice(0, 40);
        state.questions = shuffle([...singles, ...multis]);
        startExamTimer();
    } else {
        state.questions = [...questionBank];
    }

    renderQuestion();
}

// 5. 渲染题目
function renderQuestion() {
    if (state.questions.length === 0) return;
    
    const q = state.questions[state.currentIndex];
    const container = document.getElementById('question-display');
    const optionsWrap = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-multi-btn');
    const explanation = document.getElementById('explanation-box');
    const actionArea = document.getElementById('action-bar');

    // 重置状态
    state.multiSelections.clear();
    explanation.classList.add('hidden');
    actionArea.classList.add('hidden');
    submitBtn.classList.add('hidden');
    
    // 渲染题干与图片
    container.innerHTML = `<h3>第 ${state.currentIndex + 1} 题 (${q.type === 'single' ? '单选' : '多选'})</h3><p>${q.question}</p>`;
    if (q.imageName) {
        container.innerHTML += `<img src="images/${q.imageName}" style="max-width: 100%; border-radius: 8px; margin-top: 10px;">`;
    }

    // 渲染选项
    optionsWrap.innerHTML = '';
    Object.keys(q.options).forEach(key => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.innerHTML = `<b>${key}.</b> ${q.options[key]}`;
        card.onclick = () => handleOptionClick(key, card, q.type);
        optionsWrap.appendChild(card);
    });

    if (q.type === 'multiple') {
        submitBtn.classList.remove('hidden');
        submitBtn.disabled = true;
    }

    // 读取笔记
    document.getElementById('note-input').value = localStorage.getItem(`note_${q.id}`) || '';
}

// 6. 选项点击处理
function handleOptionClick(key, cardEl, type) {
    if (type === 'single') {
        document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
        cardEl.classList.add('selected');
        state.userAnswers[state.questions[state.currentIndex].id] = key;
        checkAnswer();
    } else {
        if (state.multiSelections.has(key)) {
            state.multiSelections.delete(key);
            cardEl.classList.remove('selected');
        } else {
            state.multiSelections.add(key);
            cardEl.classList.add('selected');
        }
        document.getElementById('submit-multi-btn').disabled = state.multiSelections.size === 0;
    }
}

// 7. 判分与反馈 (包含多选得 1 分逻辑)
function checkAnswer() {
    const q = state.questions[state.currentIndex];
    let isCorrect = false;
    let score = 0;

    if (q.type === 'single') {
        isCorrect = state.userAnswers[q.id] === q.correctAnswer;
        score = isCorrect ? 2 : 0;
    } else {
        const userChoices = Array.from(state.multiSelections).sort();
        const correctOnes = [...q.correctAnswer].sort();
        state.userAnswers[q.id] = userChoices;
        
        const hasWrong = userChoices.some(c => !correctOnes.includes(c));
        if (!hasWrong) {
            if (userChoices.length === correctOnes.length) {
                isCorrect = true; score = 2;
            } else if (userChoices.length > 0) {
                score = 1; 
            }
        }
    }

    // 记录统计数据和错题
    if (score === 2) state.stats.correct++;
    else if (score === 1) state.stats.partial++;
    else {
        state.stats.wrong++;
        state.wrongSet.add(q.id);
        localStorage.setItem('rad_wrong_list', JSON.stringify(Array.from(state.wrongSet)));
    }

    // 显示解析
    const explanation = document.getElementById('explanation-box');
    explanation.innerHTML = `
        <h4 style="color: ${score > 0 ? '#2ecc71' : '#e74c3c'}">
            ${score === 2 ? '✅ 完全正确' : score === 1 ? '🔘 部分正确 (+1分)' : '❌ 回答错误'}
        </h4>
        <p>正确答案：<b>${Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}</b></p>
        <p>解析：${q.note || '暂无解析'}</p>
    `;
    explanation.classList.remove('hidden');
    document.getElementById('action-bar').classList.remove('hidden');
    document.getElementById('submit-multi-btn').classList.add('hidden');
}

// 8. 流程控制：下一题或交卷
function handleNext() {
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderQuestion();
    } else {
        if (state.mode === 'exam' || confirm("已经是最后一题，是否查看统计结果？")) {
            finishExam();
        }
    }
}

// 9. 绝对时间戳倒计时
function startExamTimer() {
    let endTime = localStorage.getItem('exam_end_time');
    if (!endTime) {
        endTime = Date.now() + 120 * 60 * 1000;
        localStorage.setItem('exam_end_time', endTime);
    }

    const timerBar = document.getElementById('timer-bar');
    const timerDisplay = document.getElementById('time-left');
    timerBar.classList.remove('hidden');

    state.timer = setInterval(() => {
        const remaining = endTime - Date.now();
        if (remaining <= 0) {
            clearInterval(state.timer);
            alert("考试时间到，系统自动交卷！");
            finishExam();
            return;
        }
        const m = Math.floor(remaining / 60000).toString().padStart(2, '0');
        const s = Math.floor((remaining % 60000) / 1000).toString().padStart(2, '0');
        timerDisplay.innerText = `${m}:${s}`;
    }, 1000);
}

// 10. 结算结果页
function finishExam() {
    clearInterval(state.timer);
    localStorage.removeItem('exam_end_time');

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    const total = state.questions.length;
    const maxScore = total * 2;
    const finalScore = (state.stats.correct * 2) + (state.stats.partial * 1);
    
    // 渲染详情列表
    document.getElementById('result-stats').innerHTML = `
        <div style="font-size: 1.2em; line-height: 1.8;">
            <p>✅ <b>完全正确：</b> ${state.stats.correct} 题</p>
            <p>🔘 <b>部分正确：</b> ${state.stats.partial} 题</p>
            <p>❌ <b>回答错误：</b> ${state.stats.wrong} 题</p>
            <hr style="border-color: #333; my-10;">
            <p>🏆 <b>最终得分：</b> <span style="color: #f1c40f; font-size: 1.5em;">${finalScore} / ${maxScore}</span></p>
        </div>
    `;
}

// 辅助函数：洗牌
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}