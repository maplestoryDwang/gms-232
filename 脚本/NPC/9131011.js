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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ScreenMsg("JPKanna/magicCircle1");
      cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("看来是成功了啊。结界已经被削弱了不少。", 57, 0, false, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("接下来要做的，就是破坏位于正殿地下的祭坛，彻底阻止仪式的进行……最好还是加快速度吧。", 57, 0, true, true, 1);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(807100112, 0, false);
          cm.setStandAloneMode(false);
          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
          cm.setInGameDirectionMode(false, true, false);
        }
      }
    }
  }
}