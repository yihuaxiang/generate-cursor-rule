# generate-cursor-rule

自动在 Cursor 编辑器中创建 `/generate-cursor-rule` 命令的 npm 包。

## 安装

```bash
npm install -g generate-cursor-rule
```

或者作为项目依赖安装：

```bash
npm install generate-cursor-rule
```

## 功能

安装后，此包会自动在 `~/.cursor/commands` 目录下创建 `generate-cursor-rule.mdc` 文件，使您可以在 Cursor 编辑器中使用 `/generate-cursor-rule` 命令。

## 使用方法

1. 安装包后，重启 Cursor 编辑器
2. 在 Cursor 的命令面板中输入 `/generate-cursor-rule`
3. 按照提示生成 Cursor 规则

## 工作原理

此包使用 npm 的 `postinstall` 脚本，在安装时自动：
- 检测用户主目录
- 创建 `~/.cursor/commands` 目录（如果不存在）
- 生成 `generate-cursor-rule.mdc` 文件

## 卸载

```bash
npm uninstall -g generate-cursor-rule
```

卸载后，您可以手动删除 `~/.cursor/commands/generate-cursor-rule.mdc` 文件。

## 许可证

MIT

