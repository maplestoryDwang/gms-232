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
  } else if (status === V++) {
    cm.teachSkill(80001037, -1, 0);
    cm.dispelBuff(80002204);
    cm.Hidden_background("jewel_1", 1, 0, 0, 0);
    cm.Hidden_background("jewel_2", 1, 0, 0, 0);
    cm.Hidden_background("jewel_3", 1, 0, 0, 0);
    cm.monadForceMove('end', 1, 0);
    cm.monadForceMove("def", 0, 0);
    cm.Hidden_background("end", 1, 1, 0, 0);
    cm.Hidden_background('def', 1, 0, 0, 0);
    cm.dispose();
  }
}