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
    cm.npc_ChangeController(9390126, 102, 74, 1);
    cm.fieldEffect_Tremble(0, 5000, 30);
    cm.getMap().onSyncDynamicFoothold([], [], [], [], []);
    cm.fieldEffect_ScreenMsg("giantBoss/enter/70");
    cm.setFieldValue('clearType', '5');
    cm.贝勒德_小地图(['clearType', "863010100", '863010200', '863010300', "863010210", '863010310', '863010220', "863010410", '863010500', '863010320', "863010230", "863010600", "863010420", '863010330', "863010240", "863010430"], ['5', '0', '0', '2', '2', '2', '2', '2', '0', '2', '2', '2', '2', '2', '2', '2']);
    cm.getMap().spawnReactorIfNotExist(8630003, 0, 94, 67, 0, "rank4");
    cm.getMap().spawnReactorIfNotExist(8630002, 0, 95, 67, 0, 'rank3');
    cm.getMap().spawnReactorIfNotExist(8630001, 0, 95, 68, 0, "rank2");
    cm.getMap().spawnReactorIfNotExist(8630000, 0, 95, 68, 0, "rank1");
    cm.sendNormalTalk("好了，请你去净化贝勒德的心脏。没时间了。如果不在限定时间内完成，就会一无所获。", 4, 9390124, false, false);
    cm.dispose();
  }
}