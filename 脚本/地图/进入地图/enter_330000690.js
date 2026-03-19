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
    cm.npc_ChangeController(1530716, "oid=28621", 192, 35, 13, 142, 242, 1, false, false);
    cm.userSetFieldFloating(330000690, 1, 1, 20);
    cm.updateInfoQuest(33524, "enter=3");
    cm.effect_Text(["#r#fn黑体##fs26#自尊心的闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0]);
    cm.effect_Text(["#fn黑体##fs16#绝不愿因实力而输的闹事者。"], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0]);
    cm.forceForfeitQuest(33526);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;