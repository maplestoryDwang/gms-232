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
  } else if (status === V++) {
    cm.updateInfoQuest(34125, "350=2;370=2;380=2;390=2;300=2;310=2;320=2;330=2;340=2");
    cm.setAmbience("SoundEff.img/ArcaneRiver/waterfall", 150, 60);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1442277]);
    cm.setInGameDirectionMode(false, true, false);
    cm.getTopMsgFont("右边可以看见安息洞穴的出口。搀着卡奥，赶紧从洞穴里出去吧。", 3, 20, 8, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;