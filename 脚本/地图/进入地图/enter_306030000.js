var status = -1;
var selectionLog = [];
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
      if (cm.getNumberFromQuestInfo(32689, "enter") > 0) {
        cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
        cm.setAmbience("SoundEff.img/DLep4/war2", 80, 60);
      }
      if (cm.isQuestFinished(32688)) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(32689, "enter2=1;enter=1");
      cm.forceCompleteQuest(32688);
      cm.gainExp(186336);
      cm.sendNormalTalk_Bottom("果然没那么容易啊。不过……", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("如果他们的大部队还不到来，说不定……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("只能希望海姿给点力了……", 57, 0, true, false);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;