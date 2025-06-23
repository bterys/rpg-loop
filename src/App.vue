<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useGameStore } from './stores'

const gameStore = useGameStore()
// const message = useMessage()

// 组件挂载时尝试加载存档
onMounted(() => {
  const loaded = gameStore.loadGame()
  if (loaded) {
    // message.success('游戏存档加载成功')
  }
})

// 游戏状态标签类型
const gameStatusType = computed(() => {
  if (!gameStore.isGameRunning) return 'default'
  if (gameStore.isPaused) return 'warning'
  return 'success'
})

const gameStatusText = computed(() => {
  if (!gameStore.isGameRunning) return '未开始'
  if (gameStore.isPaused) return '已暂停'
  return '运行中'
})

// 测试功能
const testGainExp = () => {
  gameStore.gainExperience(50)
  message.info('获得经验 +50')
}

const testTakeDamage = () => {
  gameStore.takeDamage(20)
  message.warning('受到伤害 -20')
}

const testGainGold = () => {
  gameStore.gainGold(100)
  message.success('获得金币 +100')
}

const handleSaveGame = () => {
  const success = gameStore.saveGame()
  if (success) {
    message.success('游戏保存成功')
  } else {
    message.error('游戏保存失败')
  }
}

const handleLoadGame = () => {
  const success = gameStore.loadGame()
  if (success) {
    message.success('游戏加载成功')
  } else {
    message.error('没有找到存档')
  }
}

const handleDeleteSave = () => {
  const success = gameStore.deleteSave()
  if (success) {
    message.success('存档删除成功')
  } else {
    message.error('删除存档失败')
  }
}

const handleResetGame = () => {
  gameStore.resetGame()
  message.info('游戏已重置')
}

const handleStartNewLoop = () => {
  gameStore.startNewLoop()
  message.info('开始新循环')
}
</script>

<template>
  <n-message-provider>
    <div class="app">
    <div class="header">
      <h1>RPG Loop Game</h1>
    </div>

    <div class="main">
      <n-grid :cols="2" :x-gap="20" :y-gap="20" responsive="screen">
        <!-- 玩家信息面板 -->
        <n-grid-item>
          <n-card title="玩家信息" size="large">
            <n-space vertical size="large">
              <!-- 基本信息 -->
              <n-grid :cols="2" :x-gap="12" :y-gap="12">
                <n-grid-item>
                  <n-statistic label="姓名" :value="gameStore.player.name" />
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="等级" :value="gameStore.player.level" />
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="金币" :value="gameStore.player.gold" />
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="总属性" :value="gameStore.totalStats" />
                </n-grid-item>
              </n-grid>

              <!-- 进度条 -->
              <n-space vertical>
                <div>
                  <div class="progress-label">
                    经验值: {{ gameStore.player.experience }} / {{ gameStore.player.experienceToNext }}
                  </div>
                  <n-progress 
                    type="line" 
                    :percentage="gameStore.experienceProgress" 
                    :show-indicator="false"
                    color="#18a058"
                  />
                </div>

                <div>
                  <div class="progress-label">
                    生命值: {{ gameStore.player.health }} / {{ gameStore.player.maxHealth }}
                  </div>
                  <n-progress 
                    type="line" 
                    :percentage="gameStore.healthPercentage" 
                    :show-indicator="false"
                    color="#d03050"
                  />
                </div>

                <div>
                  <div class="progress-label">
                    法力值: {{ gameStore.player.mana }} / {{ gameStore.player.maxMana }}
                  </div>
                  <n-progress 
                    type="line" 
                    :percentage="gameStore.manaPercentage" 
                    :show-indicator="false"
                    color="#2080f0"
                  />
                </div>
              </n-space>

              <!-- 属性统计 -->
              <div>
                <n-divider title-placement="left">属性点</n-divider>
                <n-grid :cols="2" :x-gap="12" :y-gap="12">
                  <n-grid-item>
                    <n-statistic label="力量" :value="gameStore.player.stats.strength" />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic label="敏捷" :value="gameStore.player.stats.agility" />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic label="智力" :value="gameStore.player.stats.intelligence" />
                  </n-grid-item>
                  <n-grid-item>
                    <n-statistic label="体质" :value="gameStore.player.stats.vitality" />
                  </n-grid-item>
                </n-grid>
              </div>
            </n-space>
          </n-card>
        </n-grid-item>

        <!-- 游戏控制面板 -->
        <n-grid-item>
          <n-card title="游戏控制" size="large">
            <n-space vertical size="large">
              <!-- 游戏状态 -->
              <n-grid :cols="2" :x-gap="12" :y-gap="12">
                <n-grid-item>
                  <n-statistic label="当前循环" :value="gameStore.currentLoop" />
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="总循环数" :value="gameStore.totalLoops" />
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="游戏速度" :value="gameStore.gameSpeed + 'x'" />
                </n-grid-item>
                <n-grid-item>
                  <div>
                    <div class="status-label">游戏状态</div>
                    <n-tag :type="gameStatusType" size="medium">
                      {{ gameStatusText }}
                    </n-tag>
                  </div>
                </n-grid-item>
              </n-grid>

              <!-- 控制按钮 -->
              <div>
                <n-divider title-placement="left">游戏控制</n-divider>
                <n-space>
                  <n-button 
                    type="primary" 
                    @click="gameStore.startGame" 
                    :disabled="gameStore.isGameRunning && !gameStore.isPaused"
                  >
                    开始游戏
                  </n-button>
                  <n-button 
                    type="warning" 
                    @click="gameStore.pauseGame" 
                    :disabled="!gameStore.isGameRunning || gameStore.isPaused"
                  >
                    暂停
                  </n-button>
                  <n-button 
                    type="info" 
                    @click="gameStore.resumeGame" 
                    :disabled="!gameStore.isPaused"
                  >
                    继续
                  </n-button>
                  <n-button 
                    @click="gameStore.stopGame" 
                    :disabled="!gameStore.isGameRunning"
                  >
                    停止
                  </n-button>
                  <n-button 
                    type="error" 
                    @click="handleResetGame"
                  >
                    重置游戏
                  </n-button>
                </n-space>
              </div>

              <!-- 测试功能 -->
              <div>
                <n-divider title-placement="left">测试功能</n-divider>
                <n-space>
                  <n-button type="success" @click="testGainExp">
                    获得经验 (+50)
                  </n-button>
                  <n-button type="error" @click="testTakeDamage">
                    受到伤害 (-20)
                  </n-button>
                  <n-button type="warning" @click="testGainGold">
                    获得金币 (+100)
                  </n-button>
                  <n-button type="info" @click="handleStartNewLoop">
                    开始新循环
                  </n-button>
                </n-space>
              </div>

              <!-- 存档管理 -->
              <div>
                <n-divider title-placement="left">存档管理</n-divider>
                <n-space vertical>
                  <n-button-group>
                    <n-button type="primary" @click="handleSaveGame">
                      保存游戏
                    </n-button>
                    <n-button @click="handleLoadGame">
                      加载游戏
                    </n-button>
                    <n-button type="error" @click="handleDeleteSave">
                      删除存档
                    </n-button>
                  </n-button-group>
                  
                  <div class="auto-save-switch">
                    <span>自动保存:</span>
                    <n-switch v-model:value="gameStore.autoSave" />
                  </div>
                </n-space>
              </div>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
  </n-message-provider>
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
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
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
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
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
