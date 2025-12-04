#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

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
      console.log(`✓ 已创建目录: ${cursorCommandsDir}`);
    }

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
    
    console.log(`✓ 已成功创建: ${ruleFilePath}`);
    console.log(`✓ 现在您可以在 Cursor 中使用 /generate-cursor-rule 命令了`);
    console.log(`  (请重启 Cursor 编辑器以使命令生效)`);
    
  } catch (error) {
    console.error('✗ 错误: 无法创建 Cursor 规则文件');
    console.error(`  错误信息: ${error.message}`);
    console.error(`  请手动创建文件: ~/.cursor/commands/generate-cursor-rule.mdc`);
    process.exit(1);
  }
}

// 执行脚本
generateCursorRule();

