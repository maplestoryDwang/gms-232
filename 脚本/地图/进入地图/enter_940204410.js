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
    cm.addPopupSay(0, 2500, "#face0#特鲁埃博正在蒸发成艾尔达！", '', 0);
    cm.addPopupSay(3003480, 2500, "#face1#必须尽快让蒸发的艾尔达平静下来！", '', 0);
    cm.addPopupSay(3003480, 2500, "#face1#再这样下去，整个特鲁埃博都会消失！", '', 0);
    cm.updateInfoQuest(34271, "02=h0;20=h1;30=h0;21=h0;31=h0;32=h1;23=h0;33=h0;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
    cm.updateInfoQuest(34245, "71=h0;73=h0;75=h0;69=h1");
    cm.forceStartQuest(34242, '');
    cm.forceCompleteQuest(34242);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;