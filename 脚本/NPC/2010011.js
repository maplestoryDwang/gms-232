var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.sendNext("想去英雄殿堂的话，请再来找我。");
      cm.dispose();
    }
    status--;
  }
  if (status == 0) {
    cm.askYesNo("你好。我是负责家族支援工作的蕾雅。为了工作方便，我来到了英雄殿堂，为大家提供帮助。你想到英雄殿堂去处理家族相关事务吗？", 0, 2010011);
  } else {
    if (status == 1) {
      cm.sendNext("好的，我马上把你送过去。");
    } else if (status == 2) {
      cm.saveReturnLocation("GUILD");
      cm.warp(200000301);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;