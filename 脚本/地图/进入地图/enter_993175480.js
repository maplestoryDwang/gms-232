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
  } else {
    if (status === V++) {
      if (cm.getQuestStatus(100442) == 1) {
        cm.OnStartNavigation(993175480, 0, "pt_go993175490", 0);
      } else {
        if (cm.getQuestStatus(100444) == 1) {
          cm.OnStartNavigation(993175400, 0, "pt_go993175420", 0);
        } else if (cm.getQuestStatus(100450) == 1) {
          cm.OnStartNavigation(993175480, 0, "pt_go993175580", 0);
        } else {
          cm.OnStartNavigation(993175480, 0, "pt_go993175400", 0);
        }
      }
      cm.dispose();
    }
  }
}