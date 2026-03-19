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
    cm.effect_Text(["#fn黑体##fs20#藏经阁5-6层"], [100, 2500, 5, 80, 0, 1, 4, 0, 0, 0]);
    if (cm.isQuestActive(62037)) {
      cm.addPopupSay(9310581, 2000, "那个男子搭乘上了右侧的可通往#m701220400#的传送口，然后消失了。", '', 0);
      cm.addPopupSay(9310581, 2000, "你快追上去吧！", '', 0);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;