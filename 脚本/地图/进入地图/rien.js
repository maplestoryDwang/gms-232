function start() {
  if (cm.getQuestStatus(21101) == 2 && cm.getInfoQuest(21019) === "miss=o;arr=o;helper=clear") {
    cm.updateInfoQuest(21019, "miss=o;arr=o;ck=1;helper=clear");
  }
  cm.dispose();
}
var status = -1;