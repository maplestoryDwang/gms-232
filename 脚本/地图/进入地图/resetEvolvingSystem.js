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
  } else {
    if (status === V++) {
      if (cm.isQuestActive(1846)) {
        cm.dispose();
        cm.warp(957020005, 0, true);
        return;
      }
      for (var V = 1820; V <= 1838; V++) {
        cm.forceForfeitQuest(V);
      }
      if (!cm.isQuestFinished(1802)) {
        cm.setQuestCustomData(1802, '完成');
        cm.updateInfoQuest(1816, "linkOpen6=0;linkOpen7=0;linkOpen8=0;linkOpen9=0;coreSlot1=0;coreSlot2=0");
        cm.updateInfoQuest(1818, "q1833=0;q1834=0;q1835=0;q1836=0;q1837=0;q1838=0");
        cm.forceStartQuest(1831, '0');
        cm.forceStartQuest(1839, '0');
        cm.forceStartQuest(1840, '0');
        cm.updateInfoQuest(1842, "visit=0;invite=0;use=0");
      }
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;