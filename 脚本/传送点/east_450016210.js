function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.isQuestFinished(37918)) {
        cm.warp(450016220, 0, false);
        cm.dispose();
      } else if (cm.isQuestActive(37918)) {
        cm.askYesNo_Bottom("要继续追吗？", 56, 0, 1);
      } else {
        cm.sendNormalTalk_Bottom("现在还不能走。", 56, 0, false, true, 1);
        cm.dispose();
      }
    } else {
      if (status === R++) {
        cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;16=h1;07=h0;25=h1;08=h1;17=h0;09=h0;w2=open;w3=open");
        cm.forceStartQuest(37918, '');
        cm.sendNormalTalk_Bottom("(有闪闪发亮的东西掉在地上)", 56, 0, false, true, 1);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("这个……是身份牌……？", 56, 0, true, true, 1);
        } else if (status === R++) {
          cm.getTopMsgFont("你必须消灭区域内的所有怪物，才能进入下一个关卡。", 3, 20, 20, 0, 0);
          cm.forceJoinEvent("塞拉斯_清怪1");
          cm.dispose();
        }
      }
    }
  }
}