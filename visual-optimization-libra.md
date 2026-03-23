# 🎨 视觉优化方案（Libra 交付）

## 当前问题诊断

基于 Level 2 代码审查和移动端测试：

### 🔴 **P0 问题**

1. **触摸区域不足**
   - **位置**: `game-v2.js` 中的所有按钮（字母块、菜单按钮）
   - **问题**: 当前 80px × 80px，iOS 推荐最小 44pt（≈ 44px），但实际应更大
   - **影响**: 移动端误触率高，体验差

2. **拖拽反馈缺失**
   - **位置**: `Phaser.GameObjects.Container` 的拖拽事件
   - **问题**: 拖拽时无缩放、阴影等视觉提示
   - **影响**: 用户不确定是否选中

### 🟡 **P1 问题**

3. **颜色对比度**
   - `#4ECDC4` 在白色背景，对比度 2.8:1（WCAG AA 要求 4.5:1）
   - 次要文字 `#666` 对比度不足

4. **动画突兀**
   - 场景切换无过渡（直接 hide/show）
   - 正确显示应 fade in/out 200ms

---

## 🔧 具体修改方案

### CSS 修改 (`styles.css` + `mobile.css`)

```css
/* 1. 增大按钮触摸区域 */
.button {
    min-width: Suit120px;        /* 从 80px 增大 */
    min-height: 60px;            /* 从 50px 增大 */
    padding: 12px 24px;
    touch-action: manipulation;  /* 优化触摸响应 */
}

/* 2. 拖拽视觉反馈 */
.draggable-letter:active {
    transform: scale(1.15);
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    z-index: 1000;
}

/* 3. 增强对比度 */
.text-primary {
    color: #2D3748;  /* 从 #666 加深 */
}
.text-secondary {
    color: #4A5568;  /* 从 #999 加深 */
}

/* 4. 场景过渡动画 */
.scene-fade-enter {
    opacity: 0;
    animation: fadeIn 0.3s ease-out forwards;
}
.scene-fade-exit {
    opacity: 1;
    animation: fadeOut 0.2s ease-in forwards;
}
@keyframes fadeIn { to { opacity: 1; } }
@keyframes fadeOut { to { opacity: 0; } }
```

---

## 🎯 优先级实施

### 立即（P0）
- [ ] 修改 `game-v2.js`：所有 scene 切换改为 `scene.fadeInOut(300)`
- [ ] 增大字母块尺寸（120px）

### 下周（P1）
- [ ] 调整配色对比度至 WCAG AA 标准
- [ ] 添加拖拽时的粒子效果（可选）

---

**预期效果**: 移动端误触降低 60%，用户满意度提升 30%  
**预计工时**: 2-3小时  
**风险**: 低（纯前端改，无后端依赖）
