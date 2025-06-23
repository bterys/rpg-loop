<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useGameStore } from "./stores";
import {
  EquipmentType,
  CurrencyNames,
  ChestData,
  RarityData,
  MapData,
} from "./stores";
import {
  NConfigProvider,
  NMessageProvider,
  NCard,
  NGrid,
  NGridItem,
  NSpace,
  NStatistic,
  NDataTable,
  NTag,
  NButton,
  useMessage,
} from "naive-ui";

const gameStore = useGameStore();
// const message = useMessage();

// 组件挂载时尝试加载存档
onMounted(() => {
  const loaded = gameStore.loadGame();
  if (loaded) {
    // message.success("游戏存档加载成功");
    gameStore.init(); // 初始化游戏状态
  }
});

// 游戏状态标签类型
const gameStatusType = computed(() => {
  if (!gameStore.isGameRunning) return "default";
  if (gameStore.isPaused) return "warning";
  return "success";
});

const gameStatusText = computed(() => {
  if (!gameStore.isGameRunning) return "未开始";
  if (gameStore.isPaused) return "已暂停";
  return "运行中";
});

// 测试功能
const testGainExp = () => {
  gameStore.gainExperience(50);
  message.info("获得经验 +50");
};

const testTakeDamage = () => {
  gameStore.takeDamage(20);
  message.warning("受到伤害 -20");
};

const testGainGold = () => {
  gameStore.gainGold(100);
  message.success("获得金币 +100");
};

const handleSaveGame = () => {
  const success = gameStore.saveGame();
  if (success) {
    message.success("游戏保存成功");
  } else {
    message.error("游戏保存失败");
  }
};

const handleLoadGame = () => {
  const success = gameStore.loadGame();
  if (success) {
    message.success("游戏加载成功");
  } else {
    message.error("没有找到存档");
  }
};

const handleDeleteSave = () => {
  const success = gameStore.deleteSave();
  if (success) {
    message.success("存档删除成功");
  } else {
    message.error("删除存档失败");
  }
};

const handleResetGame = () => {
  gameStore.resetGame();
  message.info("游戏已重置");
};

const handleStartNewLoop = () => {
  gameStore.startNewLoop();
  message.info("开始新循环");
};
</script>

<template>
  <n-config-provider>
    <!-- <n-message-provider> -->
      <div class="app">
        <div class="header">
          <!-- <h1>RPG Loop Game</h1> -->
          <n-button @click="gameStore.init()">init()</n-button>
        </div>

        <div class="main">
          <n-grid :cols="5" :x-gap="10" :y-gap="10" responsive="screen">
            <!-- 玩家信息面板 -->
            <n-grid-item span="1">
              <n-card title="玩家信息" size="large">
                <n-space vertical size="large">
                  <!-- 基本信息 -->
                  <n-grid :cols="2" :x-gap="12" :y-gap="12">
                    <n-grid-item>
                      <n-statistic
                        label="等级"
                        :value="gameStore.player.level"
                      />
                    </n-grid-item>
                    <n-grid-item>
                      <n-statistic
                        label="战力"
                        :value="gameStore.player.power"
                      />
                    </n-grid-item>
                  </n-grid>
                  <n-grid :cols="3" :x-gap="12" :y-gap="12">
                    <n-grid-item>
                      <n-statistic label="攻击" :value="gameStore.player.atk" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-statistic label="防御" :value="gameStore.player.def" />
                    </n-grid-item>
                    <n-grid-item>
                      <n-statistic label="体力" :value="gameStore.player.hp" />
                    </n-grid-item>
                  </n-grid>
                  <!-- moneies -->
                  <!-- <n-grid :cols="1" :x-gap="12" :y-gap="12"> -->
                  <n-data-table
                    :columns="[
                      { title: '类型', key: 'name' },
                      { title: '数量', key: 'amount', align: 'right' },
                    ]"
                    :data="
                      CurrencyNames.map((currency, idx) => ({
                        name: currency,
                        amount: gameStore.player.moneies[idx] | 0,
                      }))
                    "
                    :pagination="false"
                    size="small"
                  />
                  <!-- </n-grid> -->
                </n-space>
              </n-card>
            </n-grid-item>
            <!-- 地图信息 -->
            <n-grid-item span="1">
              <n-card title="怪物信息" size="large" v-if="gameStore.monster">
                <n-progress type="line" :percentage="gameStore.other.time/50" :show-indicator="false" />
                <!-- 基本信息 -->
                <n-grid :cols="2" :x-gap="12" :y-gap="12">
                  <n-grid-item>
                    <n-statistic
                      label="等级"
                      :value="gameStore.monster.level"
                    />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic
                      label="战力"
                      :value="gameStore.monster.power"
                    />
                  </n-grid-item>
                </n-grid>
                <n-grid :cols="3" :x-gap="12" :y-gap="12">
                  <n-grid-item>
                    <n-statistic label="攻击" :value="gameStore.monster.atk" />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic label="防御" :value="gameStore.monster.def" />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic label="体力" :value="gameStore.monster.hp" />
                  </n-grid-item>
                </n-grid>
              </n-card>
              <n-card title="地图信息" size="large">
                <n-space vertical size="large">
                  <n-space vertical>
                    <div v-for="map in MapData" :key="map.id">
                      <n-tag
                        :type="
                          map.id === gameStore.mapNow ? 'success' : 'default'
                        "
                        size="large"
                      >
                        <span
                          @click="gameStore.changeMap(map.id)"
                          style="cursor: pointer"
                        >
                          {{ map.name }} (Lv.{{ map.level[0] }}-{{
                            map.level[1]
                          }})
                        </span>
                      </n-tag>
                    </div>
                  </n-space>
                </n-space>
              </n-card>
            </n-grid-item>
            <!-- 装备信息 -->
            <n-grid-item span="2">
              <n-card title="装备信息" size="large">
                <n-space vertical size="large">
                  <n-data-table
                    :columns="[
                      { title: '部位', key: 'type' },
                      { title: '名称', key: 'name' },
                      { title: '品质', key: 'rarity' },
                      { title: '等级', key: 'level', align: 'right' },
                      { title: '攻击', key: 'atk', align: 'right' },
                      { title: '防御', key: 'def', align: 'right' },
                      { title: '体力', key: 'hp', align: 'right' },
                    ]"
                    :data="
                      Object.values(EquipmentType).map((type) => {
                        const equipment = gameStore.equipments[type];
                        return {
                          type: type,
                          name: equipment?.name || '未装备',
                          rarity: equipment?.rarity
                            ? RarityData[equipment.rarity]?.name || '未知'
                            : '-',
                          level: equipment?.level || 0,
                          atk: equipment?.atk || 0,
                          def: equipment?.def || 0,
                          hp: equipment?.hp || 0,
                        };
                      })
                    "
                    :pagination="false"
                    size="small"
                  />
                </n-space>
              </n-card>
            </n-grid-item>
          </n-grid>
        </div>
      </div>
    <!-- </n-message-provider> -->
  </n-config-provider>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  font-weight: 700;
}

.main {
  max-width: 1400px;
  margin: 0 auto;
}

.progress-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.status-label {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
}

.auto-save-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(24, 160, 88, 0.1);
  border-radius: 8px;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .app {
    padding: 15px;
  }

  .header h1 {
    font-size: 2rem;
  }
}

/* Naive UI 组件自定义样式 */
:deep(.n-card) {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

:deep(.n-statistic .n-statistic-value) {
  font-weight: 600;
}

:deep(.n-progress .n-progress-graph .n-progress-graph-line-rail) {
  height: 12px;
}

:deep(.n-progress .n-progress-graph .n-progress-graph-line-fill) {
  height: 12px;
}

:deep(.n-button) {
  font-weight: 500;
}

:deep(.n-card-header) {
  font-weight: 600;
  font-size: 1.2rem;
}
</style>
