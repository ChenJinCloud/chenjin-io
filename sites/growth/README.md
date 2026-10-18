# Global Growth OS 用户站设计

品牌为 Global Growth OS，正式地址规划为 https://growth.chenjin.io。当前目录只有设计和公开配置，应用未实现，域名未绑定。本次没有新增开发端口、云服务或预览。

## 职责与内容

主站 `/projects/global-growth-os` 提供项目介绍，记录陈今的贡献与个人复盘。独立用户站提供四层公开内容：岗位与常识、方法论与信源、Growth Toolkit、反馈与共创。

项目权威目录为 `/Users/jinchen/01-global-growth-system/projects/global-growth-os`。第一阶段沿用该项目的四层 Public Core 策略，完整 OS 内部设计保留在原项目。只有人工审核并脱敏的公开导出可以进入网站；网站构建不直接读取私有工作区。

方法和工具原稿由原项目管理，网站仅管理应用代码和公开导出。每项导出需记录稳定 ID、来源、版本与发布状态。GitHub 和飞书的同步状态分别核验。

## 应用与部署边界

后续建立独立 Next.js 应用和 compute/growth，独立构建、发布及配置 canonical、sitemap。主站只引用公开站点配置和链接，三站之间不导入业务实现。共享视觉资产可提取到无业务依赖的 packages。

第一阶段不要求账号或数据库。明确需要保存用户运行记录后，再设计该站点的认证与数据服务；主站聊天记录不共享。尚未实现反馈入口的在线核验或完整发布链路。

`global-growth-os.chenjin.io` 是可选兼容地址，目前不创建；以后启用仅跳转至 growth.chenjin.io。正式上线前验证独立构建、公开内容过滤与服务 URL，上线后才在主站项目页添加可访问的入口。

完整设计见 [架构基线](../../docs/architecture/ARCHITECTURE-V1.md)。
