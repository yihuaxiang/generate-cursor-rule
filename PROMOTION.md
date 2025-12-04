# 🚀 恢复 Cursor 缺失的功能！一键生成你的专属 AI 编程助手配置

> **generate-cursor-rule** - 完美恢复 Cursor 更新后移除的 `/Generate Cursor Rules` 命令

**⚠️ 重要提示**：Cursor 编辑器在最近的更新中移除了 `/Generate Cursor Rules` 命令。`generate-cursor-rule` 完美恢复了这个功能，甚至做得更好！

## 📖 背景故事

### ⚠️ 重要更新

**最近 Cursor 编辑器更新后，官方移除了 `/Generate Cursor Rules` 命令！**

许多用户发现，之前可以直接在 Cursor 中使用 `/Generate Cursor Rules` 命令来快速生成规则文件，但现在这个功能已经不再可用。这让很多开发者感到困扰：

- 😢 失去了快速生成规则的能力
- 🤔 不知道如何恢复这个便捷功能
- 😫 每次都要手动编写 `.cursorrules` 文件
- ⏰ 花大量时间研究如何编写完美的 Cursor 规则

### 💡 解决方案

**`generate-cursor-rule` 就是为了解决这个问题而生的！**

这个工具完美复刻了之前 Cursor 的功能，甚至做得更好：

- ✅ **恢复缺失的功能** - 重新获得 `/generate-cursor-rule` 命令
- 🚀 **更智能** - AI 自动分析项目，生成更精准的规则
- 🎯 **更便捷** - 一键安装，零配置使用
- 🔄 **持续更新** - 跟随 Cursor 更新，保持兼容性

现在，这些问题都有了完美的解决方案！

## ✨ 什么是 generate-cursor-rule？

`generate-cursor-rule` 是一个轻量级的 npm 包，它会在 Cursor 编辑器中自动创建一个智能命令 `/generate-cursor-rule`，帮助你快速生成适合当前项目的 Cursor 规则文件。

### 🎯 核心特性

- ⚡ **零配置安装** - 一条命令，自动完成所有设置
- 🤖 **AI 智能分析** - 自动识别项目类型、技术栈和代码风格
- 🔄 **自动生成** - 根据项目特点生成定制化的规则文件
- 🌍 **跨平台支持** - Windows、macOS、Linux 全平台兼容
- 📦 **轻量级** - 极小的包体积，不影响性能
- 🛡️ **安全可靠** - 不会覆盖已有的自定义配置

## 🚀 快速开始

### 安装

```bash
npm install -g generate-cursor-rule
```

就这么简单！安装完成后，你会看到友好的提示信息：

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🎉 generate-cursor-rule 安装成功！
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 下一步操作：

  1️⃣  重启 Cursor 编辑器（重要！）
  2️⃣  在 Cursor 中使用命令：/generate-cursor-rule
  3️⃣  开始生成规则！
```

### 使用

1. **重启 Cursor 编辑器**
2. **打开命令面板**（`Cmd/Ctrl + Shift + P`）
3. **输入命令**：`/generate-cursor-rule`
4. **让 AI 帮你生成规则**！

## 💡 使用场景

### 🆕 新项目初始化

当你开始一个新项目时，不再需要从零开始编写 Cursor 规则。只需运行命令，AI 会自动分析你的项目并生成合适的规则。

```bash
# 安装包
npm install -g generate-cursor-rule

# 在 Cursor 中使用
/generate-cursor-rule
```

### 🔄 项目迁移

将现有项目迁移到 Cursor？这个工具可以帮你快速生成符合项目特点的规则配置。

### 👥 团队协作

统一团队的代码生成规则，让所有成员都能享受到一致的 AI 编程体验。

### 🎨 代码规范

根据项目特点定制代码风格规则，让 AI 助手更好地理解你的编码偏好。

## 🔍 工作原理

```
安装 npm 包
    ↓
自动执行 postinstall 脚本
    ↓
检测用户主目录 (~)
    ↓
创建 ~/.cursor/commands 目录
    ↓
生成 generate-cursor-rule.mdc 文件
    ↓
重启 Cursor 编辑器
    ↓
使用 /generate-cursor-rule 命令 ✨
```

整个过程完全自动化，你只需要安装和重启编辑器即可！

## 🎁 额外功能

### 命令行工具

除了自动安装，还提供了命令行工具支持手动触发：

```bash
generate-cursor-rule
```

### 智能保护

如果文件已存在，工具会智能跳过创建，保护你的自定义配置：

```
ℹ️  文件已存在: ~/.cursor/commands/generate-cursor-rule.mdc
   跳过创建，保留现有文件内容
```

## 📊 技术细节

- **Node.js 版本要求**：>= 12.0.0
- **包大小**：极轻量
- **依赖**：零依赖，纯 Node.js 实现
- **许可证**：MIT

## 🌟 为什么选择 generate-cursor-rule？

### 🔧 恢复缺失的功能

**Cursor 更新后移除了 `/Generate Cursor Rules` 命令，`generate-cursor-rule` 完美恢复了这个功能！**

- ✅ **功能复刻** - 完全恢复之前 Cursor 的便捷功能
- 🚀 **体验升级** - 更智能的分析和生成能力
- 🔄 **持续维护** - 跟随 Cursor 更新，保持功能可用
- 💪 **社区支持** - 开源项目，持续改进

### ✅ 优势对比

| 特性 | 手动编写 | generate-cursor-rule |
|------|---------|---------------------|
| 设置时间 | 30+ 分钟 | 1 分钟 |
| 学习成本 | 需要研究文档 | 零学习成本 |
| 项目适配 | 需要手动调整 | AI 自动分析 |
| 更新维护 | 手动更新 | 一键重新生成 |
| 团队协作 | 需要共享文件 | 统一安装即可 |

### 🎯 实际效果

使用 `generate-cursor-rule` 后，你可以：

- ⏱️ **节省时间** - 从 30 分钟缩短到 1 分钟
- 🎨 **提高质量** - AI 生成的规则更全面、更专业
- 🔄 **保持更新** - 随时可以重新生成，保持规则最新
- 👥 **团队统一** - 所有成员使用相同的生成逻辑

## 📚 完整文档

更多详细信息和使用技巧，请访问：

- 📦 [npm 包页面](https://www.npmjs.com/package/generate-cursor-rule)
- 🐙 [GitHub 仓库](https://github.com/yihuaxiang/generate-cursor-rule)
- 📖 [完整文档](https://github.com/yihuaxiang/generate-cursor-rule#readme)

## 🤝 贡献与反馈

我们欢迎所有形式的贡献！

- 🐛 发现问题？[提交 Issue](https://github.com/yihuaxiang/generate-cursor-rule/issues)
- 💡 有好的想法？[提交 PR](https://github.com/yihuaxiang/generate-cursor-rule/pulls)
- ⭐ 觉得有用？给个 Star 支持一下！

## 🎉 立即开始

```bash
# 安装
npm install -g generate-cursor-rule

# 重启 Cursor 编辑器

# 使用命令
/generate-cursor-rule
```

就这么简单！开始享受 AI 辅助编程的乐趣吧！

---

## 📢 分享给朋友

如果你觉得这个工具有用，欢迎分享给其他开发者：

- 🔗 分享 npm 包链接
- 📱 转发这篇文章
- ⭐ 在 GitHub 上 Star 项目

让我们一起让编程变得更高效、更智能！

---

**Made with ❤️ by the community**

*让 AI 编程助手更好地理解你的项目，从 generate-cursor-rule 开始！*

