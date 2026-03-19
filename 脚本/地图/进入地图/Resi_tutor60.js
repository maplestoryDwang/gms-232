var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2159007, "oid=248472", 134, 28, 6, 84, 184, 0, false, 0, false);
      cm.npc_ChangeController(2159008, "oid=248473", -370, 28, 10, -420, -320, 0, false, 0, false);
      cm.sendNormalTalk("好，好久没到实验室外面来了……这是什么地方？", 0, 2159007, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这是通往我们的村子埃德尔斯坦的路！在刚才那些奇怪的黑色之翼跟来之前，我们快走吧。", 2, 2159007, true, true);
      } else if (status === V++) {
        cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=2;vel01=3");
        cm.effect_OnUserEff("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
        cm.dispose();
      }
    }
  }
}