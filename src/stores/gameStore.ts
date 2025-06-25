import { defineStore } from "pinia";

export const EquipmentType = {
  0: "纪念品", // 纪念品
  1: "主手武器", // 主手武器
  2: "副手", // 副手
  3: "护甲", // 护甲
  4: "饰品", // 饰品
  5: "头盔", // 头盔
  6: "项链", // 项链
  7: "戒指", // 戒指
  8: "靴子", // 靴子
  9: "手套", // 手套
  10: "腰带", // 腰带
  11: "斗篷", // 斗篷
  12: "盾牌", // 盾牌
  13: "手镯", // 手镯
  14: "耳环", // 耳环
  15: "护身符", // 护身符
  16: "法典", // 法典
  17: "符咒", // 符咒
  18: "护符", // 护符
  19: "奖章", // 奖章
} as const;
export const EquipmentTypeReverse = {
  souvenir: 0, // 纪念品
  Weapon: 1, // 主手武器
  OffHand: 2, // 副手
  Armor: 3, // 护甲
  Accessory: 4, // 饰品
  Helmet: 5, // 头盔
  Necklace: 6, // 项链
  Ring: 7, // 戒指
  Boots: 8, // 靴子
  Gloves: 9, // 手套
  Belt: 10, // 腰带
  Cloak: 11, // 斗篷
  Shield: 12, // 盾牌
  Bracelet: 13, // 手镯
  Earring: 14, // 耳环
  Amulet: 15, // 护身符
  Tome: 16, // 法典
  Charm: 17, // 符咒
  Talisman: 18, // 护符
  Medallion: 19, // 奖章
} as const;
export const CurrencyNames = [
  "铜币", // 0
  "银币", // 1
  "金币", // 2
  "白金币", // 3
  "钻石币", // 4
  "翡翠币", // 5
  "紫水晶币", // 6
  "黄玉币", // 7
  "红宝石币", // 8
  "蓝宝石币", // 9
  "祖母绿币", // 10
  "月光石币", // 11
  "日耀石币", // 12
  "星辰币", // 13
  "秘银币", // 14
  "精金币", // 15
  "奥术币", // 16
  "神圣币", // 17
  "永恒币", // 18
  "传说币", // 19
  "创世币", // 20
  "混沌币", // 21
  "无限币", // 22
  "天使币", // 23
  "恶魔币", // 24
  "龙王币", // 25
  "凤凰币", // 26
  "麒麟币", // 27
  "圣灵币", // 28
  "时空币", // 29
  "虚空币", // 30
  "光明币", // 31
  "黑暗币", // 32
  "命运币", // 33
  "毁灭币", // 34
  "创造币", // 35
  "终极币", // 36
  "至尊币", // 37
  "神话币", // 38
  "万能币", // 39
] as const;
export const ChestData: Chest[] = [
  {
    id: 0,
    name: "破旧的木箱",
    price: 10,
    currency: 0,
    openTime: 1000,
    rarityWeight: [
      90, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3],
  },
  {
    id: 1,
    name: "普通宝箱",
    price: 100,
    currency: 0,
    openTime: 2000,
    rarityWeight: [
      70, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    name: "精制宝箱",
    price: 500,
    currency: 0,
    openTime: 3000,
    rarityWeight: [
      50, 35, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 3,
    name: "银色宝箱",
    price: 50,
    currency: 1,
    openTime: 4000,
    rarityWeight: [
      30, 40, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 4,
    name: "黄金宝箱",
    price: 100,
    currency: 1,
    openTime: 5000,
    rarityWeight: [
      20, 35, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    id: 5,
    name: "白金宝箱",
    price: 10,
    currency: 2,
    openTime: 6000,
    rarityWeight: [
      10, 25, 35, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  {
    id: 6,
    name: "钻石宝箱",
    price: 50,
    currency: 2,
    openTime: 7000,
    rarityWeight: [
      5, 15, 30, 35, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    id: 7,
    name: "翡翠宝箱",
    price: 100,
    currency: 2,
    openTime: 8000,
    rarityWeight: [
      0, 10, 25, 40, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    id: 8,
    name: "紫水晶宝箱",
    price: 10,
    currency: 3,
    openTime: 9000,
    rarityWeight: [
      0, 5, 20, 35, 35, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 9,
    name: "黄玉宝箱",
    price: 50,
    currency: 3,
    openTime: 10000,
    rarityWeight: [
      0, 0, 15, 30, 40, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 10,
    name: "红宝石宝箱",
    price: 100,
    currency: 3,
    openTime: 12000,
    rarityWeight: [
      0, 0, 10, 25, 35, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 11,
    name: "蓝宝石宝箱",
    price: 10,
    currency: 4,
    openTime: 15000,
    rarityWeight: [
      0, 0, 5, 20, 30, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 12,
    name: "祖母绿宝箱",
    price: 50,
    currency: 4,
    openTime: 18000,
    rarityWeight: [
      0, 0, 0, 15, 25, 35, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 13,
    name: "月光石宝箱",
    price: 100,
    currency: 4,
    openTime: 20000,
    rarityWeight: [
      0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 14,
    name: "日耀石宝箱",
    price: 10,
    currency: 5,
    openTime: 25000,
    rarityWeight: [
      0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 15,
    name: "星辰宝箱",
    price: 50,
    currency: 5,
    openTime: 30000,
    rarityWeight: [
      0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 16,
    name: "秘银宝箱",
    price: 100,
    currency: 5,
    openTime: 35000,
    rarityWeight: [
      0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 17,
    name: "精金宝箱",
    price: 10,
    currency: 6,
    openTime: 40000,
    rarityWeight: [
      0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 18,
    name: "奥术宝箱",
    price: 50,
    currency: 6,
    openTime: 45000,
    rarityWeight: [
      0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 19,
    name: "传说宝箱",
    price: 100,
    currency: 6,
    openTime: 50000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 20,
    name: "神话宝箱",
    price: 10,
    currency: 7,
    openTime: 60000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 21,
    name: "创世宝箱",
    price: 50,
    currency: 7,
    openTime: 70000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 22,
    name: "混沌宝箱",
    price: 100,
    currency: 7,
    openTime: 80000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 23,
    name: "无限宝箱",
    price: 10,
    currency: 8,
    openTime: 90000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 24,
    name: "永恒宝箱",
    price: 50,
    currency: 8,
    openTime: 100000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 25,
    name: "天使宝箱",
    price: 100,
    currency: 8,
    openTime: 120000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 26,
    name: "恶魔宝箱",
    price: 10,
    currency: 9,
    openTime: 140000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 27,
    name: "龙王宝箱",
    price: 50,
    currency: 9,
    openTime: 160000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 28,
    name: "凤凰宝箱",
    price: 100,
    currency: 9,
    openTime: 180000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 29,
    name: "麒麟宝箱",
    price: 10,
    currency: 10,
    openTime: 200000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 30,
    name: "圣灵宝箱",
    price: 50,
    currency: 10,
    openTime: 250000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 31,
    name: "时空宝箱",
    price: 100,
    currency: 10,
    openTime: 300000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 32,
    name: "虚空宝箱",
    price: 10,
    currency: 11,
    openTime: 350000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 33,
    name: "光明宝箱",
    price: 50,
    currency: 11,
    openTime: 400000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 34,
    name: "黑暗宝箱",
    price: 100,
    currency: 11,
    openTime: 450000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 35,
    name: "命运宝箱",
    price: 10,
    currency: 12,
    openTime: 500000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 36,
    name: "毁灭宝箱",
    price: 50,
    currency: 12,
    openTime: 600000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 37,
    name: "创造宝箱",
    price: 100,
    currency: 12,
    openTime: 700000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 38,
    name: "终极宝箱",
    price: 10,
    currency: 13,
    openTime: 800000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
  {
    id: 39,
    name: "至尊宝箱",
    price: 100,
    currency: 13,
    openTime: 1000000,
    rarityWeight: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40,
    ],
    equipmentTypes: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
  },
] as const;
export const RarityData = [
  { id: 0, name: "破损", color: "#8B4513", rand: [] }, // 棕色
  { id: 1, name: "普通", color: "#000000", rand: [] }, // 白色
  { id: 2, name: "优秀", color: "#00FF00", rand: [] }, // 绿色
  { id: 3, name: "精良", color: "#0080FF", rand: [] }, // 蓝色
  { id: 4, name: "稀有", color: "#8000FF", rand: [] }, // 紫色
  { id: 5, name: "史诗", color: "#FF8000", rand: [] }, // 橙色
  { id: 6, name: "传说", color: "#FF0000", rand: [] }, // 红色
  { id: 7, name: "神话", color: "#FFD700", rand: [] }, // 金色
  { id: 8, name: "不朽", color: "#FF1493", rand: [] }, // 深粉色
  { id: 9, name: "永恒", color: "#00FFFF", rand: [] }, // 青色
  { id: 10, name: "神圣", color: "#FFFF00", rand: [] }, // 亮黄色
  { id: 11, name: "混沌", color: "#800080", rand: [] }, // 深紫色
  { id: 12, name: "创世", color: "#C0C0C0", rand: [] }, // 银色
  { id: 13, name: "终极", color: "#4B0082", rand: [] }, // 靛蓝色
  { id: 14, name: "超越", color: "#FF69B4", rand: [] }, // 热粉色
  { id: 15, name: "至尊", color: "#DC143C", rand: [] }, // 深红色
  { id: 16, name: "无双", color: "#9400D3", rand: [] }, // 紫罗兰色
  { id: 17, name: "天命", color: "#FF4500", rand: [] }, // 橙红色
  { id: 18, name: "宇宙", color: "#1E90FF", rand: [] }, // 道奇蓝
  { id: 19, name: "万古", color: "#FF6347", rand: [] }, // 番茄色
] as const;
export const MapData: Map[] = [
  { 
    id: 0, 
    name: "新手村", 
    level: [1, 3],
    drop: [
      { currency: 0, amount: 3, weight: 100 },
      { currency: 0, amount: 5, weight: 50 },
      { currency: 1, amount: 1, weight: 5 }
    ]
  },
  { 
    id: 1, 
    name: "青草平原", 
    level: [3, 8],
    drop: [
      { currency: 0, amount: 5, weight: 80 },
      { currency: 1, amount: 2, weight: 30 },
      { currency: 1, amount: 3, weight: 15 }
    ]
  },
  { 
    id: 2, 
    name: "幽暗森林", 
    level: [8, 15],
    drop: [
      { currency: 0, amount: 10, weight: 70 },
      { currency: 1, amount: 3, weight: 40 },
      { currency: 1, amount: 5, weight: 25 },
      { currency: 2, amount: 1, weight: 8 }
    ]
  },
  { 
    id: 3, 
    name: "荒芜沙漠", 
    level: [15, 25],
    drop: [
      { currency: 1, amount: 5, weight: 60 },
      { currency: 1, amount: 8, weight: 40 },
      { currency: 2, amount: 2, weight: 20 },
      { currency: 2, amount: 3, weight: 10 }
    ]
  },
  { 
    id: 4, 
    name: "冰霜雪原", 
    level: [25, 40],
    drop: [
      { currency: 1, amount: 8, weight: 70 },
      { currency: 2, amount: 2, weight: 35 },
      { currency: 2, amount: 4, weight: 20 },
      { currency: 3, amount: 1, weight: 8 }
    ]
  },
  { 
    id: 5, 
    name: "火焰山脉", 
    level: [40, 60],
    drop: [
      { currency: 1, amount: 12, weight: 60 },
      { currency: 2, amount: 4, weight: 40 },
      { currency: 2, amount: 8, weight: 25 },
      { currency: 3, amount: 2, weight: 12 }
    ]
  },
  { 
    id: 6, 
    name: "深海遗迹", 
    level: [60, 90],
    drop: [
      { currency: 2, amount: 6, weight: 50 },
      { currency: 2, amount: 12, weight: 35 },
      { currency: 3, amount: 3, weight: 25 },
      { currency: 3, amount: 5, weight: 15 }
    ]
  },
  { 
    id: 7, 
    name: "天空之城", 
    level: [90, 120],
    drop: [
      { currency: 2, amount: 10, weight: 60 },
      { currency: 3, amount: 4, weight: 35 },
      { currency: 3, amount: 8, weight: 25 },
      { currency: 4, amount: 2, weight: 12 }
    ]
  },
  { 
    id: 8, 
    name: "暗影峡谷", 
    level: [120, 160],
    drop: [
      { currency: 2, amount: 15, weight: 50 },
      { currency: 3, amount: 8, weight: 40 },
      { currency: 3, amount: 15, weight: 25 },
      { currency: 4, amount: 3, weight: 15 }
    ]
  },
  { 
    id: 9, 
    name: "龙族禁地", 
    level: [160, 200],
    drop: [
      { currency: 3, amount: 15, weight: 45 },
      { currency: 3, amount: 25, weight: 35 },
      { currency: 4, amount: 5, weight: 25 },
      { currency: 4, amount: 8, weight: 18 }
    ]
  },
  { 
    id: 10, 
    name: "虚空神殿", 
    level: [200, 260],
    drop: [
      { currency: 3, amount: 20, weight: 50 },
      { currency: 4, amount: 6, weight: 35 },
      { currency: 4, amount: 12, weight: 25 },
      { currency: 5, amount: 2, weight: 12 }
    ]
  },
  { 
    id: 11, 
    name: "星陨废墟", 
    level: [260, 320],
    drop: [
      { currency: 4, amount: 10, weight: 45 },
      { currency: 4, amount: 18, weight: 35 },
      { currency: 5, amount: 4, weight: 25 },
      { currency: 5, amount: 8, weight: 18 }
    ]
  },
  { 
    id: 12, 
    name: "时间裂隙", 
    level: [320, 400],
    drop: [
      { currency: 4, amount: 15, weight: 50 },
      { currency: 5, amount: 8, weight: 35 },
      { currency: 5, amount: 15, weight: 25 },
      { currency: 6, amount: 3, weight: 15 }
    ]
  },
  { 
    id: 13, 
    name: "元素风暴", 
    level: [400, 500],
    drop: [
      { currency: 5, amount: 15, weight: 45 },
      { currency: 5, amount: 25, weight: 35 },
      { currency: 6, amount: 5, weight: 25 },
      { currency: 6, amount: 10, weight: 18 }
    ]
  },
  { 
    id: 14, 
    name: "古神陵墓", 
    level: [500, 620],
    drop: [
      { currency: 5, amount: 25, weight: 45 },
      { currency: 6, amount: 10, weight: 35 },
      { currency: 6, amount: 20, weight: 25 },
      { currency: 7, amount: 4, weight: 15 }
    ]
  },
  { 
    id: 15, 
    name: "混沌领域", 
    level: [620, 750],
    drop: [
      { currency: 6, amount: 20, weight: 45 },
      { currency: 6, amount: 35, weight: 35 },
      { currency: 7, amount: 8, weight: 25 },
      { currency: 7, amount: 15, weight: 18 }
    ]
  },
  { 
    id: 16, 
    name: "永恒战场", 
    level: [750, 900],
    drop: [
      { currency: 6, amount: 30, weight: 45 },
      { currency: 7, amount: 15, weight: 35 },
      { currency: 7, amount: 30, weight: 25 },
      { currency: 8, amount: 6, weight: 18 }
    ]
  },
  { 
    id: 17, 
    name: "创世熔炉", 
    level: [900, 1080],
    drop: [
      { currency: 7, amount: 25, weight: 45 },
      { currency: 7, amount: 45, weight: 35 },
      { currency: 8, amount: 10, weight: 25 },
      { currency: 8, amount: 20, weight: 18 }
    ]
  },
  { 
    id: 18, 
    name: "终焉深渊", 
    level: [1080, 1300],
    drop: [
      { currency: 7, amount: 40, weight: 45 },
      { currency: 8, amount: 20, weight: 35 },
      { currency: 8, amount: 40, weight: 25 },
      { currency: 9, amount: 8, weight: 18 }
    ]
  },
  { 
    id: 19, 
    name: "天界之门", 
    level: [1300, 1550],
    drop: [
      { currency: 8, amount: 30, weight: 45 },
      { currency: 8, amount: 60, weight: 35 },
      { currency: 9, amount: 15, weight: 25 },
      { currency: 9, amount: 30, weight: 18 }
    ]
  },
  { 
    id: 20, 
    name: "无尽虚空", 
    level: [1550, 1850],
    drop: [
      { currency: 8, amount: 50, weight: 45 },
      { currency: 9, amount: 25, weight: 35 },
      { currency: 9, amount: 50, weight: 25 },
      { currency: 10, amount: 10, weight: 18 }
    ]
  },
] as const;

// 定义玩家状态接口
export interface Player {
  name: string;
  level: number;
  exp: number;
  expMax: number;
  hp: number;
  atk: number;
  def: number;
  power: number;
  prestige: number;
  moneies: number[];
  fragments: number; // 可选碎片数量
  equipment: Equipment[]; // 可选装备数组
}
export interface Monster {
  level: number; // 怪物等级
  name: string; // 怪物名称
  hp: number; // 怪物生命值
  atk: number; // 怪物攻击力
  def: number;
  power: number; // 怪物战力
}
// 定义装备接口
export interface Equipment {
  id: number; // 装备ID
  type: number; // 使用 EquipmentType 枚举
  level: number;
  rarity: number; // 稀有度
  name: string;
  attr: string;
  value: number;
  fragments: number; // 碎片
}
// 定义游戏状态接口
export interface GameState {
  player: Player;
  isPaused: boolean;
  autoSave: boolean;
  lastSaveTime: number;
  equipments: Equipment[];
  mapNow: number; // 当前地图ID
  monster: Monster; // 当前怪物
  log: string[]; // 游戏日志
  other: any;
  chests: [number, number][]; // 宝箱数据
  time: number; // 游戏时间间隔
}
// 定义稀有度接口
export interface Rarity {
  id: number; // 稀有度ID
  name: string; // 稀有度名称
  color: string; // 稀有度颜色
  rand: [];
}
// 定义宝箱接口
export interface Chest {
  id: number; // 宝箱ID
  name: string; // 宝箱名称
  price: number; // 宝箱价格
  currency: number; // 使用的货币类型
  openTime: number; // 开启时间
  rarityWeight: number[]; // 稀有度权重
  equipmentTypes: number[]; // 可获得的装备类型
}
export interface Map {
  id: number; // 地图ID
  name: string; // 地图名称
  level: number[]; // 地图等级
  drop: Array<{currency: number; amount: number, weight: number}>; // 掉落物品
}

// 默认玩家数据
const defaultPlayer: Player = {
  name: "Hero",
  level: 1,
  exp: 0,
  expMax: 10,
  hp: 10,
  atk: 1,
  def: 0,
  power: 0,
  prestige: 0,
  fragments: 0,
  moneies: new Array(50).fill(10000),
  equipment: new Array(Object.keys(EquipmentType).length - 1).fill(null), // 初始没有装备
};

export const useGameStore = defineStore("game", {
  state: (): GameState => ({
    player: { ...defaultPlayer },
    isPaused: false,
    autoSave: true,
    lastSaveTime: Date.now(),
    equipments: [],
    mapNow: -1,
    log: [],
    monster: {level:0,name:'',hp:0,atk:0,def:0,power:0} as Monster, // 当前怪物
    other: {eid: 0, chestOpenTime: 5000},
    chests: [], // 宝箱数据
    time: 1000/8,
  }),

  getters: {},

  actions: {
    // 进入地图
    changeMap(mapId: number) {
      if (this.mapNow === mapId) {
        console.log("已经在该地图中");
        return true; // 已经在该地图中
      }
      // 检查地图是否存在
      const targetMap = MapData.find((map) => map.id === mapId);
      if (!targetMap) {
        console.error("地图不存在");
        return false;
      }
      // 检查玩家等级是否符合要求
      // if (this.player.level < targetMap.level[0]) {
      //   console.error(`等级不足，需要 ${targetMap.level[0]} 级才能进入 ${targetMap.name}`);
      //   return false;
      // }

      // 进入地图
      this.mapNow = mapId;
      this.log.push(`进入地图：${targetMap.name}`);
      return true;
    },
    // 根据当前所在地图，生成一个怪物
    generateMonster() {
      // 根据当前地图ID生成怪物
      const currentMap = MapData.find((map) => map.id === this.mapNow);
      if (!currentMap) {
        console.error("当前地图不存在");
        return null;
      }

      // 生成一个怪物（示例）
      const monster = {
        name: `怪物-${currentMap.name}`,
        level:
          Math.floor(
            Math.random() * (currentMap.level[1] - currentMap.level[0] + 1)
          ) + currentMap.level[0],
        hp: Math.floor(Math.random() * 20), // 随机生命值
        atk: Math.floor(Math.random() * 5) + 1, // 随机攻击力
        def: Math.floor(Math.random() * 3), // 随机防御力
        power: 0,
      } as Monster;
      // 计算怪物的战力
      monster.power = this.calculatePower(monster.atk, 0, monster.hp);
      // this.monster = {...monster}; // 设置当前怪物
      this.monster.name = monster.name; // 确保怪物名称正确
      this.monster.hp = monster.hp; // 确保怪物生命值正确
      this.monster.atk = monster.atk; // 确保怪物攻击力正确
      this.monster.def = monster.def; // 确保怪物防御力正确
      this.monster.power = monster.power; // 确保怪物战力正确
      this.monster.level = monster.level; // 确保怪物等级正确
      this.other.lastLoopTime = Date.now(); // 更新上次循环时间
      this.other.time = 5000; // 重置时间
      this.other.lastLoopTime = Date.now(); // 更新上次循环时间
      this.log.push(`生成怪物：${monster.name}（等级：${monster.level}）`);
    },
    // 战力计算
    calculatePower(atk: number, def: number, hp: number) {
      // 计算玩家的战力
      const basePower = atk + def + hp;
      return basePower;
      // const equipmentPower = this.player.equipment.reduce((total, equip) => {
      //   return total + (equip ? equip.value : 0);
      // }, 0);
      // this.player.power = basePower + equipmentPower;
    },
    // 战斗逻辑
    battle() {
      // 玩家power和怪物power比对,
      if (!this.monster) {
        console.error("没有可战斗的怪物");
        return false;
      }
      const playerPower = this.calculatePower(
        this.player.atk,
        this.player.def,
        this.player.hp
      );
      const monsterPower = this.calculatePower(
        this.monster.atk,
        this.monster.def,
        this.monster.hp
      ); // 怪物战力受等级影响
      // 根据等级差计算战力修正系数
      const levelDifference = this.monster.level - this.player.level;
      let playerPowerModified = playerPower;
      let monsterPowerModified = monsterPower;

      if (levelDifference > 0) {
        // 怪物等级高于玩家，怪物战力增强
        monsterPowerModified = monsterPower * (1 + levelDifference * 0.1);
      } else if (levelDifference < 0) {
        // 玩家等级高于怪物，怪物战力衰减
        monsterPowerModified = monsterPower * (1 + levelDifference * 0.05);
      }
      const isWin = Math.random() < (playerPowerModified/(playerPowerModified + monsterPowerModified)); // 模拟战斗结果，50%胜率
      // 战斗判定
      if (isWin) {
        // 玩家胜利
        this.gainExperience(1);
        // 增加掉落
        this.mapDrop();
        // 清除当前怪物
        this.monster.level = 0;
        return true;
      } else {
        // 战斗失败
        this.log.push(`被 ${this.monster.name} 击败了`);
        this.monster.level = 0;
        return false;
      }
    },
    // 增加经验值
    gainExperience(amount: number) {
      this.player.exp += amount;

      // 检查是否可以升级
      while (this.player.exp >= this.player.expMax) {
        // this.levelUp();
      }
    },
    mapDrop() {
      const currentMap = MapData.find((map) => map.id === this.mapNow);
      if (currentMap) {
        currentMap.drop.forEach((drop) => {
          if (Math.random() * 100 < drop.weight) {
            this.gainGold(drop.currency, drop.amount);
            this.log.push(
              `从 ${this.monster?this.monster.name:''} 身上获得了 ${drop.amount} ${CurrencyNames[drop.currency]}`
            );
          }
        });
      }
    },
    // 分解装备获得碎片
    getFragments(equipment: Equipment) {
      this.player.fragments += equipment.fragments;
      this.equipments.splice(this.equipments.indexOf(equipment), 1); // 从装备列表中移除
    },
    // 买宝箱
    buyChest(chestId: number): boolean {
      const chest = ChestData.find((c) => c.id === chestId);
      if (!chest) {
        console.error("宝箱不存在");
        return false;
      }
      // 检查玩家是否有足够的货币
      if (!this.spendGold(chest.currency, chest.price)) {
        console.error("金币不足，无法购买宝箱");
        return false;
      }
      // 记录购买的宝箱
      if (this.chests.length > 0) {
        const lastChestId = this.chests[this.chests.length - 1][0];
        if (lastChestId === chestId) {
          this.chests[this.chests.length - 1][1] += 1; // 增加购买数量
        } else {
          this.chests.push([chestId, 1]); // 新增宝箱记录
        }
      } else {
        this.chests.push([chestId, 1]); // 新增宝箱记录
        this.other.chestTime = this.other.chestOpenTime; // 记录购买时间
      }
      this.log.push(`购买了宝箱：${chest.name}`);
      return true;
    },
    // 获得金币
    gainGold(idx: number, amount: number) {
      this.player.moneies[idx] += amount;
    },
    // 消费金币
    spendGold(idx: number, amount: number): boolean {
      if (this.player.moneies[idx] >= amount) {
        this.player.moneies[idx] -= amount;
        return true;
      }
      return false;
    },
    // 开宝箱
    openChest(chestId: number): boolean {
      const chest = ChestData.find((c) => c.id === chestId);
      if (!chest) {
        console.error("宝箱不存在");
        return false;
      }
      // 模拟开启宝箱
      const equipment = this.generateEquipment(chest);
      if (equipment) {
        this.equipments.push(equipment);
        this.log.push(`开启了宝箱：${chest.name}，获得了装备：${equipment.name}`);
        return true;
      } else {
        this.log.push(`开启了宝箱：${chest.name}，但没有获得任何装备`);
        return false;
      }
    },
    // 生成装备
    generateEquipment(chest: Chest): Equipment {
      const equip: Equipment = new Object() as Equipment;
      equip.type = chest.equipmentTypes[Math.floor(Math.random() * chest.equipmentTypes.length)];
      equip.level = Math.floor(Math.random() * 10) + 1; //
      // 根据权重随机选择稀有度
      const totalWeight = chest.rarityWeight.reduce((sum, weight) => sum + weight, 0);
      let randomValue = Math.random() * totalWeight;
      let selectedRarity = 0;
      
      for (let i = 0; i < chest.rarityWeight.length; i++) {
        randomValue -= chest.rarityWeight[i];
        if (randomValue <= 0) {
          selectedRarity = i;
          break;
        }
      }
      equip.id = this.other.eid++; // 生成唯一ID
      equip.rarity = selectedRarity;
      equip.name = `装备-${equip.type}-${equip.level}`; // 生成装备名称
      equip.attr = ['atk','def','hp'][Math.floor(Math.random() * 3)]; // 生成装备属性
      equip.value = Math.floor(Math.random() * 100) + 1; //
      equip.fragments = Math.floor(Math.random() * 10); // 随机碎片数量
      // 这里可以根据稀有度和类型生成更复杂的装备属性
      // 例如：根据稀有度生成不同的属性值或附加效果
      console.log(equip)
      return equip; // 这里可以实现具体的装备生成逻辑
    },
    // 穿装备
    equipItem(equipmentId: number) {
      console.log("装备ID:", equipmentId);
      if (equipmentId === undefined || equipmentId === null) {
        return false;
      }
      const equipment = this.equipments.find((e) => e.id === equipmentId);
      if (!equipment) {
        console.error("装备不存在");
        return false;
      }
      // 检查装备类型是否已被占用
      const existingEquipment = this.player.equipment[equipment.type];
      if (existingEquipment) {
        // 如果已有装备，先脱下
        this.unequipItem(existingEquipment);
      }
      // 装备新的装备
      this.player.equipment[equipment.type] = equipment;
      switch (equipment.attr) {
        case 'atk':
          this.player.atk += equipment.value; // 增加战力
          break;
        case 'def':
          this.player.def += equipment.value; // 增加防御力
          break;
        case 'hp':
          this.player.hp += equipment.value; // 增加生命值
          break;
      }
      this.equipments.splice(this.equipments.indexOf(equipment), 1); // 从装备列表中移除
      console.log(this.player.atk, this.player.def, this.player.hp)
      return true;
    },
    // 脱装备
    unequipItem(equipment: Equipment) {
      if (!equipment) {
        console.error("装备不存在");
        return false;
      }
      switch (equipment.attr) {
        case 'atk':
          this.player.atk -= equipment.value; // 增加战力
          break;
        case 'def':
          this.player.def -= equipment.value; // 增加防御力
          break;
        case 'hp':
          this.player.hp -= equipment.value; // 增加生命值
          break;
      } 
      this.player.equipment[equipment.type] = {} as Equipment; // 设置为null表示未装备
      this.equipments.push(equipment); // 将装备放回装备列表
      this.log.push(`脱下了：${equipment.name}`);
    },
    init() {
      console.log("游戏初始化");
      if (this.other.intervalId) {
        clearInterval(this.other.intervalId);
      }
      this.other.intervalId = setInterval(this.loop, 1000 / 12);
    },
    loop() {
      if (this.chests.length > 0) {
        this.other.chestTime = Math.max(0, this.other.chestTime - this.time); // 累加宝箱开启时间
        if (this.other.chestTime <= 0) {
          const firstChest = this.chests[0];
          if (firstChest) {
            this.openChest(firstChest[0]); // 开启最后一个宝箱
            firstChest[1] -= 1; // 减少宝箱数量
            if (firstChest[1] <= 0) {
              this.chests.shift(); // 如果数量为0，则移除宝箱
            }
          }
          this.other.chestTime = this.other.chestOpenTime; // 重置宝箱开启时间
        }
      }
      if (this.mapNow > -1) {
        this.other.time = Math.max(0, this.other.time - this.time); // 累加时间
        if (this.monster.level <= 0) {
          this.generateMonster(); // 如果没有怪物，则生成一个新的怪物
          return;
        }
        if (this.other.time <= 0) {
          this.battle();
        }
      }
    },
    // 切换自动保存
    toggleAutoSave() {
      this.autoSave = !this.autoSave;
    },

    // 保存游戏状态到本地存储
    saveGame() {
      try {
        const gameData = {
          player: this.player,
          autoSave: this.autoSave,
          equipments: this.equipments,
          cheests: this.chests,
          mapNow: this.mapNow, // 保存当前地图
        };
        localStorage.setItem("rpg-loop-save", JSON.stringify(gameData));
        this.lastSaveTime = Date.now();
        return true;
      } catch (error) {
        console.error("保存游戏失败:", error);
        return false;
      }
    },

    // 从本地存储加载游戏状态
    loadGame() {
      try {
        const savedData = localStorage.getItem("rpg-loop-save");
        if (savedData) {
          const gameData = JSON.parse(savedData);

          // 验证数据完整性
          if (gameData.player && typeof gameData.currentLoop === "number") {
            this.player = { ...defaultPlayer, ...gameData.player };
            this.equipments = gameData.equipments || [];
            this.autoSave =
              gameData.autoSave !== undefined ? gameData.autoSave : true;
            this.chests = gameData.chests || [];
            this.mapNow = gameData.mapNow || -1; // 恢复当前地图
            return true;
          }
        }
        return false;
      } catch (error) {
        console.error("加载游戏失败:", error);
        return false;
      }
    },

    // 删除存档
    deleteSave() {
      try {
        localStorage.removeItem("rpg-loop-save");
        return true;
      } catch (error) {
        console.error("删除存档失败:", error);
        return false;
      }
    },
  },
});
