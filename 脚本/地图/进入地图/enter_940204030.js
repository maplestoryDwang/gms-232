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
    cm.setInGameDirectionMode(false, true, false);
    cm.setNumberForQuestInfo(34266, "book", 1);
    cm.forceCompleteQuest(34266);
    cm.Hidden_background("thana_jail", 1, 0, 0, 0);
    cm.updateInfoQuest(34271, "20=h1;30=h0;21=h0;31=h0;32=h0;23=h0;33=h2;34=h0;52=h0;53=h0;35=h0;54=h0;18=h0;36=h0;28=h0;29=h0");
    cm.spawnMobMultipler(8644420, 1, 100, 90, 45);
    cm.spawnMobMultipler(8644420, 1, 100, 800, 45);
    cm.spawnMobMultipler(8644420, 1, 100, 1500, 45);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;