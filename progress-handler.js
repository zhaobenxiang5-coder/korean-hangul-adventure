// 💾 进度管理封装
// 提供save/load/reset功能

const ProgressHandler = {
  STORAGE_KEY: 'hangul-adventure-progress',
  
  /**
   * 保存进度
   * @param {Object} data - 进度数据
   * @returns {boolean}
   */
  save(data) {
    try {
      const progress = {
        version: '0.1',
        lastUpdated: new Date().toISOString(),
        ...data
      };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
      console.log('[Progress] 保存成功:', progress);
      return true;
    } catch (error) {
      console.error('[Progress] 保存失败:', error);
      return false;
    }
  },
  
  /**
   * 加载进度
   * @returns {Object|null}
   */
  load() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return null;
      const progress = JSON.parse(data);
      console.log('[Progress] 加载成功:', progress);
      return progress;
    } catch (error) {
      console.error('[Progress] 加载失败:', error);
      return null;
    }
  },
  
  /**
   * 清除进度
   */
  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    console.log('[Progress] 已清除');
  },
  
  /**
   * 检查是否有存档
   * @returns {boolean}
   */
  hasSave() {
    return localStorage.getItem(this.STORAGE_KEY) !== null;
  },
  
  /**
   * 记录关卡完成
   * @param {number} level - 关卡号
   * @param {number} stars - 获得的星级
   */
  completeLevel(level, stars) {
    const progress = this.load() || { levels: {} };
    progress.levels[level] = {
      completed: true,
      stars: stars,
      completedAt: new Date().toISOString()
    };
    return this.save(progress);
  },
  
  /**
   * 获取关卡状态
   * @param {number} level 
   * @returns {Object|null}
   */
  getLevelStatus(level) {
    const progress = this.load();
    return progress?.levels?.[level] || null;
  }
};

// 导出
if (typeof window !== 'undefined') {
  window.ProgressHandler = ProgressHandler;
}

console.log('✅ progress-handler.js 已加载');
