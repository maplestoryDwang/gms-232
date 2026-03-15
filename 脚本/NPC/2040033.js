function start() {
  if (cm.getLevel() < 180) {
    cm.sendOk("需要180级才能领取奖励。");
    cm.dispose();
    return;
  }
  if (cm.getPlayerLog("玩具跳跳") <= 0) {
    cm.gainItem(4310129, 30);
    cm.getPlayer().modifyCSPoints(1, 5000);
    cm.sendOk("恭喜你获得了30个#v4310129##b#t4310129##k以及#r5000#k点卷");
    cm.addPlayerLog("玩具跳跳");
    cm.worldSpouseMessage(23, "[玩具跳跳] : 【" + cm.getPlayer().getName() + "】成功通关，获得大量奖励！ ");
    cm.dispose();
  } else {
    cm.sendOk("你今天已经领取过奖励了哦~每天只有一次领奖机会，可不要太贪心呢！");
    cm.dispose();
  }
}
var status = -1;