// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [1, "always"],
    "header-max-length": [2, "always", 108],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-case": [0],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        "wip",
        "workflow",
        "types",
        "release"
      ]
    ]
  },
  prompt: {
    messages: {
      type: '选择一种你的提交类型:',
      customScope: '请输入修改范围(可选):',
      subject: '短说明:',
      body: '长说明，使用"|"换行(可选)：',
      footer: '关联关闭的issue，例如：#31, #34(可选):',
      confirmCommit: '确定提交说明?',
    },
    types: [
      { value: "feat", name: "特性:   🚀  新增功能", emoji: "🚀" },
      { value: "fix", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
      { value: "docs", name: "文档:   📚  文档变更", emoji: "📚" },
      { value: "style", name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: "🎨" },
      { value: "refactor", name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: "♻️" },
      { value: "perf", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
      { value: "test", name: "测试:   ✅  添加疏漏测试或已有测试改动", emoji: "✅" },
      { value: "build", name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: "📦️" },
      { value: "ci", name: "集成:   🎡  修改 CI 配置、脚本", emoji: "🎡" },
      { value: "revert", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
      { value: "chore", name: "其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: "🔨" }
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: ['scope', 'customScope', 'breaking', 'footer'],
    upperCaseSubject: false,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}
