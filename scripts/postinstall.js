#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

// 确保输出不被抑制，并刷新缓冲区
const output = (message) => {
  process.stdout.write(message + '\n');
  // 确保输出立即刷新
  if (process.stdout.isTTY) {
    process.stdout.flush();
  }
};

/**
 * 生成 Cursor 规则文件的 postinstall 脚本
 */
function generateCursorRule() {
  try {
    // 获取用户主目录（跨平台兼容）
    const homeDir = os.homedir();
    const cursorCommandsDir = path.join(homeDir, '.cursor', 'commands');
    const ruleFilePath = path.join(cursorCommandsDir, 'generate-cursor-rule.mdc');

    // 确保 .cursor/commands 目录存在
    if (!fs.existsSync(cursorCommandsDir)) {
      fs.mkdirSync(cursorCommandsDir, { recursive: true });
      output(`✓ 已创建目录: ${cursorCommandsDir}`);
    }

    // 检查文件是否已存在
    const fileExists = fs.existsSync(ruleFilePath);
    
    if (fileExists) {
      output(`ℹ️  文件已存在: ${ruleFilePath}`);
      output(`   跳过创建，保留现有文件内容`);
      output(`   如需重新生成，请先删除该文件或使用命令行工具`);
    } else {
      // .mdc 文件内容模板
      const ruleContent = `---
description: Generate Cursor Rules - 生成 Cursor 规则文件
globs:
alwaysApply: false
---

请帮我生成一个 Cursor 规则文件（.cursorrules）。

请按照以下步骤操作：

1. **分析当前项目**：
   - 识别项目类型（前端/后端/全栈等）
   - 识别使用的技术栈和框架
   - 识别代码风格和约定

2. **生成规则内容**：
   - 根据项目特点生成合适的规则
   - 包含代码风格指南
   - 包含最佳实践建议
   - 包含项目特定的约定

3. **输出格式**：
   - 生成 .cursorrules 文件内容
   - 使用清晰的 Markdown 格式
   - 包含必要的注释和说明

请开始分析当前项目并生成规则文件。
`;

      // 写入规则文件
      fs.writeFileSync(ruleFilePath, ruleContent, 'utf8');
      output(`✓ 已成功创建: ${ruleFilePath}`);
    }

    // 显示安装成功提示和使用引导
    output('');
    output('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    output('  🎉 generate-cursor-rule 安装成功！');
    output('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    output('');
    output('📝 下一步操作：');
    output('');
    output('  1️⃣  重启 Cursor 编辑器（重要！）');
    output('     - 关闭并重新打开 Cursor');
    output('     - 这样才能识别新创建的命令');
    output('');
    output('  2️⃣  在 Cursor 中使用命令：');
    output('     - 打开命令面板：Cmd/Ctrl + Shift + P');
    output('     - 输入：/generate-cursor-rule');
    output('     - 或者直接在聊天中输入：/generate-cursor-rule');
    output('');
    output('  3️⃣  开始生成规则：');
    output('     - AI 会自动分析你的项目');
    output('     - 生成适合的 .cursorrules 文件');
    output('');
    output('💡 提示：');
    output('   - 文件位置：' + ruleFilePath);
    output('   - 如需重新生成，运行：generate-cursor-rule');
    output('');
    output('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    output('');
    
  } catch (error) {
    process.stderr.write('✗ 错误: 无法创建 Cursor 规则文件\n');
    process.stderr.write(`  错误信息: ${error.message}\n`);
    process.stderr.write(`  请手动创建文件: ~/.cursor/commands/generate-cursor-rule.mdc\n`);
    process.exit(1);
  }
}

// 执行脚本
generateCursorRule();

