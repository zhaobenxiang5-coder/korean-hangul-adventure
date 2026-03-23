// 🧪 自动化测试框架
// 基于TEST_CASES.md执行测试

class TestRunner {
  constructor() {
    this.tests = [];
    this.results = [];
    this.passed = 0;
    this.failed = 0;
  }
  
  /**
   * 注册测试用例
   * @param {Object} test - {id, name, fn, expected}
   */
  register(test) {
    this.tests.push(test);
    console.log(`[Test] 注册: ${test.id} - ${test.name}`);
  }
  
  /**
   * 运行所有测试
   * @returns {Object} 测试报告
   */
  async runAll() {
    console.log('🧪 开始测试...');
    console.log(`总用例数: ${this.tests.length}`);
    
    for (const test of this.tests) {
      try {
        const result = await test.fn();
        if (result === test.expected) {
          this.passed++;
          this.results.push({
            id: test.id,
            name: test.name,
            status: 'PASS',
            duration: 0
          });
          console.log(`✅ ${test.id}: PASS`);
        } else {
          this.failed++;
          this.results.push({
            id: test.id,
            name: test.name,
            status: 'FAIL',
            actual: result,
            expected: test.expected,
            duration: 0
          });
          console.log(`❌ ${test.id}: FAIL (expected: ${test.expected}, got: ${result})`);
        }
      } catch (error) {
        this.failed++;
        this.results.push({
          id: test.id,
          name: test.name,
          status: 'ERROR',
          error: error.message,
          duration: 0
        });
        console.log(`💥 ${test.id}: ERROR - ${error.message}`);
      }
    }
    
    return this.generateReport();
  }
  
  /**
   * 生成测试报告
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      total: this.tests.length,
      passed: this.passed,
      failed: this.failed,
      passRate: Math.round(this.passed / this.tests.length * 100),
      results: this.results
    };
    
    console.log('\n📊 测试报告:');
    console.log(`通过: ${report.passed}/${report.total} (${report.passRate}%)`);
    console.log(`失败: ${report.failed}`);
    
    return report;
  }
  
  /**
   * 保存报告到文件
   */
  async saveReport() {
    const report = this.generateReport();
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // 如果是浏览器环境，触发下载
    if (typeof window !== 'undefined') {
      const a = document.createElement('a');
      a.href = url;
      a.download = `test-results-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
    
    return report;
  }
}

// ==================== 定义Level 1测试用例 ====================

function defineTests() {
  const runner = new TestRunner();
  
  // TC-01: 游戏启动
  runner.register({
    id: 'TC-01',
    name: '游戏启动',
    expected: true,
    fn: async () => {
      // 检查Phaser是否初始化
      return typeof game !== 'undefined' && game.scene !== undefined;
    }
  });
  
  // TC-02: 字母数据
  runner.register({
    id: 'TC-02',
    name: '字母数据加载',
    expected: 5,
    fn: async () => {
      return HANGUL_DATA ? HANGUL_DATA.length : 0;
    }
  });
  
  // TC-03: TTS封装
  runner.register({
    id: 'TC-03',
    name: 'sag TTS封装',
    expected: 'function',
    fn: async () => {
      return typeof window.sagIntegration?.playTTS === 'function' ? 'function' : 'undefined';
    }
  });
  
  // TC-04: 进度管理
  runner.register({
    id: 'TC-04',
    name: '进度处理器',
    expected: 'object',
    fn: async () => {
      return typeof window.ProgressHandler === 'object' ? 'object' : 'undefined';
    }
  });
  
  // TC-05: 移动端样式
  runner.register({
    id: 'TC-05',
    name: '移动端CSS加载',
    expected: true,
    fn: async () => {
      // 检查mobile.css是否注入
      const styles = document.styleSheets;
      for (let sheet of styles) {
        if (sheet.href && sheet.href.includes('mobile.css')) {
          return true;
        }
      }
      return false; // 需要手动加载
    }
  });
  
  // ... 更多测试用例基于TEST_CASES.md
  
  return runner;
}

// ==================== 执行 ====================

if (typeof window !== 'undefined') {
  // 浏览器环境：页面加载后自动运行
  window.addEventListener('load', async () => {
    console.log('🧪 测试环境就绪，等待手动触发...');
    window.testRunner = defineTests();
    
    // 提供手动触发接口
    window.runTests = async () => {
      const report = await window.testRunner.runAll();
      await window.testRunner.saveReport();
      return report;
    };
  });
}

if (require.main === module) {
  // Node环境（如果需要）
  const runner = defineTests();
  runner.runAll().then(report => {
    console.log('✅ 测试完成:', report);
    process.exit(report.failed > 0 ? 1 : 0);
  });
}

module.exports = { TestRunner, defineTests };

console.log('✅ test-runner.js 已加载');
