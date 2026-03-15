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
  } else if (status === V++) {
    cm.sendNormalTalk("冒险岛联盟的诞生……我们暗影双刀不能错过。我们会展现自己比任何人都善战的一面。", 0, 1105005, false, false);
  } else {
    cm.dispose();
  }
}