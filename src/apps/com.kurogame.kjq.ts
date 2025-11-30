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
  ],
});
