// 💾 进度保存与加载模块
// 使用localStorage持久化用户进度

const StorageManager = {
    STORAGE_KEY: 'hangul-adventure-progress',

    // 保存进度
    saveProgress(data) {
        try {
            const progress = {
                version: '0.1',
                lastUpdated: new Date().toISOString(),
                ...data
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
            console.log('[Storage] 进度已保存:', progress);
            return true;
        } catch (error) {
            console.error('[Storage] 保存失败:', error);
            return false;
        }
    },

    // 加载进度
    loadProgress() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (!data) return null;
            const progress = JSON.parse(data);
            console.log('[Storage] 进度已加载:', progress);
            return progress;
        } catch (error) {
            console.error('[Storage] 加载失败:', error);
            return null;
        }
    },

    // 清除进度
    clearProgress() {
        localStorage.removeItem(this.STORAGE_KEY);
        console.log('[Storage] 进度已清除');
    },

    // 检查是否有存档
    hasSave() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }
};

// 导出
if (typeof window !== 'undefined') {
    window.StorageManager = StorageManager;
}
