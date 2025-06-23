import { defineStore } from "pinia";

export const EquipmentType = {
  0: "souvenir", // 纪念品
  1: "Weapon",// 主手武器
  2: "OffHand", // 副手
  3: "Armor", // 护甲
  4: "Accessory", // 饰品
  5: "Helmet", // 头盔
  6: "Necklace", // 项链
  7: "Ring", // 戒指
  8: "Boots", // 靴子
  9: "Gloves", // 手套
  10: "Belt", // 腰带
  11: "Cloak", // 斗篷
  12: "Shield", // 盾牌
  13: "Bracelet", // 手镯
  14: "Earring", // 耳环
  15: "Amulet", // 护身符
  16: "Tome", // 法典
  17: "Charm", // 符咒
  18: "Talisman", // 护符
  19: "Medallion", // 奖章
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
  { id: 0, name: "破旧的木箱", price: 10, currency: 0, openTime: 1000, rarityWeight: [90, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3] },
  { id: 1, name: "普通宝箱", price: 100, currency: 0, openTime: 2000, rarityWeight: [70, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5] },
  { id: 2, name: "精制宝箱", price: 500, currency: 0, openTime: 3000, rarityWeight: [50, 35, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7] },
  { id: 3, name: "银色宝箱", price: 50, currency: 1, openTime: 4000, rarityWeight: [30, 40, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 4, name: "黄金宝箱", price: 100, currency: 1, openTime: 5000, rarityWeight: [20, 35, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { id: 5, name: "白金宝箱", price: 10, currency: 2, openTime: 6000, rarityWeight: [10, 25, 35, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
  { id: 6, name: "钻石宝箱", price: 50, currency: 2, openTime: 7000, rarityWeight: [5, 15, 30, 35, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { id: 7, name: "翡翠宝箱", price: 100, currency: 2, openTime: 8000, rarityWeight: [0, 10, 25, 40, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
  { id: 8, name: "紫水晶宝箱", price: 10, currency: 3, openTime: 9000, rarityWeight: [0, 5, 20, 35, 35, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 9, name: "黄玉宝箱", price: 50, currency: 3, openTime: 10000, rarityWeight: [0, 0, 15, 30, 40, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 10, name: "红宝石宝箱", price: 100, currency: 3, openTime: 12000, rarityWeight: [0, 0, 10, 25, 35, 25, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 11, name: "蓝宝石宝箱", price: 10, currency: 4, openTime: 15000, rarityWeight: [0, 0, 5, 20, 30, 30, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 12, name: "祖母绿宝箱", price: 50, currency: 4, openTime: 18000, rarityWeight: [0, 0, 0, 15, 25, 35, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 13, name: "月光石宝箱", price: 100, currency: 4, openTime: 20000, rarityWeight: [0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 14, name: "日耀石宝箱", price: 10, currency: 5, openTime: 25000, rarityWeight: [0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 15, name: "星辰宝箱", price: 50, currency: 5, openTime: 30000, rarityWeight: [0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 16, name: "秘银宝箱", price: 100, currency: 5, openTime: 35000, rarityWeight: [0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 17, name: "精金宝箱", price: 10, currency: 6, openTime: 40000, rarityWeight: [0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 18, name: "奥术宝箱", price: 50, currency: 6, openTime: 45000, rarityWeight: [0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 19, name: "传说宝箱", price: 100, currency: 6, openTime: 50000, rarityWeight: [0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 20, name: "神话宝箱", price: 10, currency: 7, openTime: 60000, rarityWeight: [0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 21, name: "创世宝箱", price: 50, currency: 7, openTime: 70000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 22, name: "混沌宝箱", price: 100, currency: 7, openTime: 80000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 23, name: "无限宝箱", price: 10, currency: 8, openTime: 90000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 24, name: "永恒宝箱", price: 50, currency: 8, openTime: 100000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 25, name: "天使宝箱", price: 100, currency: 8, openTime: 120000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 26, name: "恶魔宝箱", price: 10, currency: 9, openTime: 140000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 27, name: "龙王宝箱", price: 50, currency: 9, openTime: 160000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 28, name: "凤凰宝箱", price: 100, currency: 9, openTime: 180000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 29, name: "麒麟宝箱", price: 10, currency: 10, openTime: 200000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 30, name: "圣灵宝箱", price: 50, currency: 10, openTime: 250000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 31, name: "时空宝箱", price: 100, currency: 10, openTime: 300000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 32, name: "虚空宝箱", price: 10, currency: 11, openTime: 350000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 33, name: "光明宝箱", price: 50, currency: 11, openTime: 400000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 34, name: "黑暗宝箱", price: 100, currency: 11, openTime: 450000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 35, name: "命运宝箱", price: 10, currency: 12, openTime: 500000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 36, name: "毁灭宝箱", price: 50, currency: 12, openTime: 600000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20, 0], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 37, name: "创造宝箱", price: 100, currency: 12, openTime: 700000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 10], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 38, name: "终极宝箱", price: 10, currency: 13, openTime: 800000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 15, 25, 35, 20], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
  { id: 39, name: "至尊宝箱", price: 100, currency: 13, openTime: 1000000, rarityWeight: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40], equipmentTypes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19] },
] as const;
export const RarityData = [
  { id: 0, name: "破损", color: "#8B4513", rand: [] }, // 棕色
  { id: 1, name: "普通", color: "#FFFFFF", rand: [] }, // 白色
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
  equipment: Equipment[]; // 可选装备数组
}
// 定义装备接口
export interface Equipment {
  type: number; // 使用 EquipmentType 枚举
  level: number;
  rarity: number; // 稀有度
  name: string;
  attr: string;
  value: number;
}
// 定义游戏状态接口
export interface GameState {
  player: Player;
  isPaused: boolean;
  autoSave: boolean;
  lastSaveTime: number;
  equipments: Equipment[];
}
// 定义稀有度接口
export interface Rarity {
  id: number; // 稀有度ID
  name: string; // 稀有度名称
  color: string; // 稀有度颜色
  rand: []
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
  moneies: new Array(50).fill(0),
  equipment: new Array(Object.keys(EquipmentType).length - 1), // 初始没有装备
};

export const useGameStore = defineStore("game", {
  state: (): GameState => ({
    player: { ...defaultPlayer },
    currentLoop: 0,
    totalLoops: 0,
    isGameRunning: false,
    isPaused: false,
    gameSpeed: 1,
    autoSave: true,
    lastSaveTime: Date.now(),
  }),

  getters: {
    // 获取玩家当前等级进度百分比
    experienceProgress: (state) => {
      return (state.player.experience / state.player.experienceToNext) * 100;
    },

    // 计算玩家总属性值
    totalStats: (state) => {
      const { strength, agility, intelligence, vitality } = state.player.stats;
      return strength + agility + intelligence + vitality;
    },

    // 检查是否可以升级
    canLevelUp: (state) => {
      return state.player.experience >= state.player.experienceToNext;
    },
  },

  actions: {
    // 开始游戏
    startGame() {
      this.isGameRunning = true;
      this.isPaused = false;
    },

    // 暂停游戏
    pauseGame() {
      this.isPaused = true;
    },

    // 恢复游戏
    resumeGame() {
      this.isPaused = false;
    },

    // 停止游戏
    stopGame() {
      this.isGameRunning = false;
      this.isPaused = false;
    },

    // 重置游戏
    resetGame() {
      this.player = { ...defaultPlayer };
      this.currentLoop = 0;
      this.totalLoops = 0;
      this.isGameRunning = false;
      this.isPaused = false;
      this.gameSpeed = 1;
    },

    // 增加经验值
    gainExperience(amount: number) {
      this.player.experience += amount;

      // 检查是否可以升级
      while (this.player.experience >= this.player.experienceToNext) {
        this.levelUp();
      }
    },

    // 获得金币
    gainGold(amount: number) {
      this.player.gold += amount;
    },

    // 消费金币
    spendGold(amount: number): boolean {
      if (this.player.gold >= amount) {
        this.player.gold -= amount;
        return true;
      }
      return false;
    },

    // 设置游戏速度
    setGameSpeed(speed: number) {
      this.gameSpeed = Math.max(0.1, Math.min(10, speed));
    },

    // 开始新的循环
    startNewLoop() {
      this.currentLoop++;
      this.totalLoops++;
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
          currentLoop: this.currentLoop,
          totalLoops: this.totalLoops,
          gameSpeed: this.gameSpeed,
          autoSave: this.autoSave,
          lastSaveTime: Date.now(),
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
            this.currentLoop = gameData.currentLoop || 0;
            this.totalLoops = gameData.totalLoops || 0;
            this.gameSpeed = gameData.gameSpeed || 1;
            this.autoSave =
              gameData.autoSave !== undefined ? gameData.autoSave : true;
            this.lastSaveTime = gameData.lastSaveTime || Date.now();
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
