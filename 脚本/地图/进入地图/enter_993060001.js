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
    cm.npc_ChangeController(3003600, 'oid=275642', 350, -414, 43, 311, 400, 1, false, 0, false);
    cm.npc_ChangeController(3003608, 'oid=275643', 550, -566, 0, 500, 600, 0, false, 0, false);
    cm.updateInfoQuest(35157, "save=993060001;return=450006130");
    cm.userSetFieldFloating(993060001, 0, 30, 1000);
    cm.dispose();
  }
}