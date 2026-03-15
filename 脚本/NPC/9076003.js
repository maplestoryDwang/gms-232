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
      cm.askMenu("你可以利用#e#r29572点数#k#n获得经验值增益，使完成组队任务的经验值提高#e#b30%#k#n。\r\n#b当前所有点数：0#k\r\n#L0#使用EXP加速器。#l\r\n#L1#听取有关EXP加速器的说明。#l", 0, 9076003);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你现有的点数不足以使用经验值加速器。请多累积一些点数。", 0, 9076003, false, false);
  } else {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你想了解经验值加速器啊。我现在就向你介绍一下吧。", 0, 9076003, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("使用通关世界综合组队任务得到的组队点数可获得经验值加速器增益。", 0, 9076003, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("在增益状态下通关组队任务，则可获得组队任务通关经验值的30%的额外经验值奖励。", 0, 9076003, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("增益时长为30分钟。通关组队任务获得奖励经验值之后，或者出现死亡，以及断开链接的情况时，增益状态会消失。请务必注意。", 0, 9076003, true, false);
      } else {
        cm.dispose();
      }
    }
  }
}