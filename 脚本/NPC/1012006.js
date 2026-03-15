var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("找我有什么事？\r\n#b#L0#请告诉我关于这里。#l\r\n#L1##p1032102#介绍我到这里来的…#l", 0, 1012006);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.askYesNo("这条路是你和宠物一起锻炼的地方。你可以在这里只散散步，但也可以利用这里的障碍物训练宠物。如果你和宠物还不够亲密的话，它可能会不听你的话。你想在这里训练你的宠物吗？", 0, 1012006);
        } else {
          cm.sendNormalTalk("喂~ 你真的见过#b#p1032102##k吗？你没有撒谎吧？我是不会上当的！", 0, 1012006, false, false);
          cm.dispose();
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk("好！这里有封信件。你没有这封信，恐怕我弟弟不知道是我让你上去的。跟宠物一起绕过障碍物到最上面。在那里跟#p1012007#说话，然后转交我的信。你通过障碍物的时候要多注意你的宠物。加油！", 0, 1012006, false, true);
        } else if (status === V++) {
          if (cm.getItemQuantity(4031035) < 1) {
            cm.gainItem(4031035, 1);
            cm.playerMessage(-1, "获取其他物品(巴特斯的信件)");
            cm.playerMessage(1, "任务提示：爬到最顶上吧！");
          }
          cm.dispose();
        }
      }
    }
  }
}