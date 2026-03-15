var status = -1;
function start() {
  cm.sendNext("啊，又……你好。你想离开圣地，前往其他地区吗？那你就找对人了。这里有开往#金银岛#k的#b六岔路口#k的船。");
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == -1) {
    cm.sendNext("看来你在圣地还有事要办，等你想去金银岛了再来找我吧。");
    cm.dispose();
  } else {
    if (status == 0) {
      cm.askYesNo("到达金银岛#b六岔路口#k所需的时间大约是#b30秒#k，费用是#b1000#k金币。你想支付1000金币坐船吗？", 0, 1100003);
    } else if (status == 1) {
      if (cm.getMeso() < 1000) {
        cm.sendNormalTalk("喂，等等。你的钱好像不够……费用是#b1000#k金币……请确认库存中是否有足够的钱。", 0, 1100003, false, true);
      } else {
        cm.warp(200090031, 0);
        cm.scheduleWarpTask(30, 104020120);
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}