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
      cm.dispose();
      if (cm.getQuestStatus(100446) == 1) {
        cm.OnStartNavigation(993175500, 0, "pt_go993175520", 0);
      } else {
        if (cm.getQuestStatus(100448) == 1) {
          cm.OnStartNavigation(993175500, 0, "pt_go993175530", 0);
        } else if (cm.getQuestStatus(100457) == 1) {
          cm.OnStartNavigation(993175500, 0, "pt_go993175600", 0);
        }
      }
    }
  }
}