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
        // 步骤1：点击签到按钮
        {
          matches: '[id="com.kurogame.kjvcq:id/sign_click"]',
        },
        // 步骤2：关闭弹窗
        {
          matches: '[id="com.kurogame.kjq:id/bt_close"]',
        },
        // 步骤3：点击 ll_wiki_tab（进入签到奖励页）
        {
          matches: '@FrameLayout <3 [vid="ll_wiki_tab"]',
        },
        // 步骤4：点击“领”字所在卡片
        {
          matches:
            '@View[clickable=true] > TextView[text^="第"] + TextView[width<100]',
        },
      ],
    },
  ],
});
