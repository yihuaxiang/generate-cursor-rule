#!/usr/bin/env node

/**
 * 命令行工具：手动触发生成 Cursor 规则文件
 * 使用方式: generate-cursor-rule
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// 获取模板文件路径
const templatePath = path.join(__dirname, '..', 'templates', 'generate-cursor-rule.md');

// 读取模板文件内容
let ruleContent;
try {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`模板文件不存在: ${templatePath}`);
  }
  ruleContent = fs.readFileSync(templatePath, 'utf8');
} catch (error) {
  console.error('✗ 错误: 无法读取模板文件');
  console.error(`  错误信息: ${error.message}`);
  process.exit(1);
}

const homeDir = os.homedir();
const cursorCommandsDir = path.join(homeDir, '.cursor', 'commands');
const ruleFilePath = path.join(cursorCommandsDir, 'generate-cursor-rule.md');

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

