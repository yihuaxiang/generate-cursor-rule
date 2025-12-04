#!/usr/bin/env node

/**
 * 命令行工具：手动触发生成 Cursor 规则文件
 * 使用方式: generate-cursor-rule
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const homeDir = os.homedir();
const cursorCommandsDir = path.join(homeDir, '.cursor', 'commands');
const ruleFilePath = path.join(cursorCommandsDir, 'generate-cursor-rule.mdc');

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

try {
  // 确保目录存在
  if (!fs.existsSync(cursorCommandsDir)) {
    fs.mkdirSync(cursorCommandsDir, { recursive: true });
  }

  // 检查文件是否已存在
  const fileExists = fs.existsSync(ruleFilePath);
  
  if (fileExists) {
    console.log(`ℹ️  文件已存在: ${ruleFilePath}`);
    console.log(`   跳过创建，保留现有文件内容`);
    console.log(`   如需重新生成，请先删除该文件`);
    console.log('');
    console.log('💡 提示：如果文件已存在，请重启 Cursor 编辑器后使用 /generate-cursor-rule 命令');
    process.exit(0);
  }

  // 写入文件
  fs.writeFileSync(ruleFilePath, ruleContent, 'utf8');
  
  console.log(`✓ 已成功创建: ${ruleFilePath}`);
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  ✅ 文件创建成功！');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('📝 下一步操作：');
  console.log('');
  console.log('  1️⃣  重启 Cursor 编辑器（重要！）');
  console.log('     - 关闭并重新打开 Cursor');
  console.log('');
  console.log('  2️⃣  在 Cursor 中使用命令：');
  console.log('     - 打开命令面板：Cmd/Ctrl + Shift + P');
  console.log('     - 输入：/generate-cursor-rule');
  console.log('     - 或者直接在聊天中输入：/generate-cursor-rule');
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  
} catch (error) {
  console.error('✗ 错误:', error.message);
  process.exit(1);
}

