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
  if (!cm.isQuestFinished(63055)) {
    cm.sendOk("孩子们珍藏的零食。还是别乱拿比较好。");
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
      cm.askMenu("这是孩子们省下的零食。要是我吃了孩子们会生气的。\r\n#b#L0#虽然对孩子们很抱歉，我还是要抢来吃！#l\r\n#L1#我不能把孩子们弄哭，别动零食#l", 0, 9400252);
    } else {
      cm.dispose();
      if (U == 1) {
        return;
      }
      cm.setNumberForQuestInfo(63090, "raining", 1);
      cm.setQuestCustomData(63092, '');
      cm.setQuestCustomData(63096, "sad");
      cm.setQuestCustomData(63252, "destroy");
      cm.updateInfoQuest(63089, "green=0;red=0;blue=0");
      var w = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
      var N = cm.getNumberFromQuestInfo(63090, 'lightning') == 1;
      if (!N) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
        cm.updateInfoQuest(63095, "angle=" + (w ? 0 : -90));
        cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, w ? -90 : 90, 100, 1);
      }
      cm.afterlandUpdateEnvironment();
      cm.sendNormalTalk("#b(真对不起孩子们，以后再给他们收集更好吃的零食吧。)", 2, 0, false, false);
    }
  }
}