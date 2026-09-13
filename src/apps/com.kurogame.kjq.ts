import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kurogame.kjq',
  name: '库街区',
  groups: [
    {
      key: 1,
      name: '鸣潮更新弹窗',
      activityIds: ['com.kurogame.kjq.MainActivity'],
      rules: [
        {
          matches: '[id="com.kurogame.kjq:id/btn_nodown"]',
          snapshotUrls: ['https://i.gkd.li/i/23838167'],
        },
      ],
    },
    // 每日签到
    {
      key: 2,
      name: '每日签到',
      desc: '自动完成签到并领取奖励',
      activityIds: ['com.kurogame.kjq.MainActivity'],
      actionMaximum: 1, // 整个规则组最多执行一次
      resetMatch: 'app', // 重新进入应用时重置次数
      rules: [
        // 步骤1：点击“签到奖励”入口
        {
          matches: '[text="签到奖励"] < View[clickable=true]',
          snapshotUrls: ['https://i.gkd.li/i/你的快照ID'],
        },
        // 步骤2：点击“领”字所在卡片
        {
          matches:
            '@View[clickable=true] > TextView[text^="第"] + TextView[width<100]',
          snapshotUrls: ['https://i.gkd.li/i/你的有效快照ID'],
        },
      ],
    },
  ],
});
