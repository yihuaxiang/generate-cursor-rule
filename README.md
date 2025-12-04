<div align="center">

# 🚀 generate-cursor-rule

**一键为 Cursor 编辑器添加 `/generate-cursor-rule` 命令**

[![npm version](https://img.shields.io/npm/v/generate-cursor-rule.svg?style=flat-square)](https://www.npmjs.com/package/generate-cursor-rule)
[![npm downloads](https://img.shields.io/npm/dm/generate-cursor-rule.svg?style=flat-square)](https://www.npmjs.com/package/generate-cursor-rule)
[![License](https://img.shields.io/npm/l/generate-cursor-rule.svg?style=flat-square)](LICENSE)
[![Node.js Version](https://img.shields.io/node/v/generate-cursor-rule.svg?style=flat-square)](https://nodejs.org/)

> ✨ 让 Cursor 规则生成变得简单而优雅

[English](#) | [中文](#)

</div>

---

## 📖 简介

`generate-cursor-rule` 是一个轻量级的 npm 包，它会在安装时自动在 Cursor 编辑器中创建一个自定义命令 `/generate-cursor-rule`。这个命令可以帮助你快速生成适合当前项目的 Cursor 规则文件（`.cursorrules`）。

### ✨ 特性

- 🎯 **零配置** - 安装即用，无需任何配置
- 🔄 **自动安装** - 使用 npm postinstall 脚本自动设置
- 🌍 **跨平台** - 完美支持 Windows、macOS 和 Linux
- ⚡ **轻量级** - 极小的包体积，不影响性能
- 🛠️ **命令行工具** - 提供 CLI 工具支持手动触发
- 📝 **智能提示** - 内置规则生成提示模板

---

## 🚀 快速开始

### 安装

**全局安装（推荐）**

```bash
npm install -g generate-cursor-rule
```

> 💡 **提示**：如果安装时没有看到"安装成功"的提示信息，可能是因为 npm 的日志级别设置。不用担心，功能已经正常安装！你可以运行 `generate-cursor-rule` 命令来查看提示信息。

**作为项目依赖安装**

```bash
npm install generate-cursor-rule
```

### 使用

1. **安装完成后**，重启 Cursor 编辑器
2. **在 Cursor 中**，打开命令面板（`Cmd/Ctrl + Shift + P`）
3. **输入命令**：`/generate-cursor-rule`
4. **按照提示**，让 AI 帮你生成适合项目的 Cursor 规则

### 命令行工具

你也可以使用命令行工具手动触发生成：

```bash
generate-cursor-rule
```

---

## 📋 工作原理

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

---

## 🎯 使用场景

- 🆕 **新项目初始化** - 快速为新项目生成 Cursor 规则
- 🔄 **项目迁移** - 为现有项目添加 Cursor 规则支持
- 📚 **团队协作** - 统一团队的代码生成规则
- 🎨 **代码规范** - 根据项目特点定制代码风格规则

---

## 📁 文件结构

安装后，会在以下位置创建文件：

```
~/.cursor/commands/
└── generate-cursor-rule.mdc
```

---

## 🔧 高级用法

### 自定义规则模板

如果你想自定义生成的规则模板，可以：

1. 找到 `~/.cursor/commands/generate-cursor-rule.mdc` 文件
2. 编辑文件内容，修改提示模板
3. 保存文件，重启 Cursor 编辑器

### 卸载

**卸载 npm 包**

```bash
npm uninstall -g generate-cursor-rule
```

**清理生成的文件**

```bash
# macOS/Linux
rm ~/.cursor/commands/generate-cursor-rule.mdc

# Windows
del %USERPROFILE%\.cursor\commands\generate-cursor-rule.mdc
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

---

## 📝 更新日志

### v1.0.0

- ✨ 初始版本发布
- 🎯 支持自动生成 Cursor 命令文件
- 🌍 跨平台支持
- 📚 完整的文档和示例

---

## ❓ 常见问题

**Q: 安装后命令不生效？**  
A: 请确保重启了 Cursor 编辑器，命令文件需要重启后才能被识别。

**Q: 支持哪些操作系统？**  
A: 支持所有 Node.js 支持的操作系统，包括 Windows、macOS 和 Linux。

**Q: 可以自定义命令名称吗？**  
A: 目前不支持，但你可以手动修改生成的文件名和内容。

**Q: 卸载后文件还在吗？**  
A: 卸载 npm 包不会自动删除生成的文件，需要手动清理。

---

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

---

## 🙏 致谢

感谢所有使用和贡献这个项目的开发者！

---

<div align="center">

**如果这个项目对你有帮助，请给个 ⭐ Star！**

Made with ❤️ by the community

</div>
