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
    cm.spawnMobLimit(2400262, 1, -55, -448, 100);
    cm.spawnMobLimit(2400262, 1, 119, -448, 100);
    cm.spawnMobLimit(2400262, 1, 235, -448, 100);
    cm.spawnMobLimit(2400262, 1, -234, -448, 100);
    cm.spawnMobLimit(2400262, 1, -959, -463, 100);
    cm.spawnMobLimit(2400262, 1, -1096, -463, 100);
    cm.spawnMobLimit(2400262, 1, -1232, -463, 100);
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, false, true);
    cm.inGameDirectionEvent_ChangeEquipment([1103064]);
    cm.setInGameDirectionMode(false, true, false);
    cm.addPopupSay(3002110, 2500, "#face14#我必须马上去见狐神！", '', 0);
    cm.addPopupSay(3002119, 2500, "#face0#快点乖乖回去！这里不是你们随便能来的地方！", '', 0);
    cm.addPopupSay(3002110, 2500, "#face14#守护神，抱歉。但是我必须见到狐神！", '', 0);
    cm.spawnMobLimit(2400262, 1, 295, -784, 100);
    cm.spawnMobLimit(2400262, 1, 520, -784, 100);
    cm.spawnMobLimit(2400262, 1, 174, -612, 100);
    cm.spawnMobLimit(2400262, 1, 215, -612, 100);
    cm.spawnMobLimit(2400262, 1, -526, -623, 100);
    cm.spawnMobLimit(2400262, 1, -349, -796, 100);
    cm.spawnMobLimit(2400262, 1, -355, -796, 100);
    cm.spawnMobLimit(2400262, 1, -492, -623, 100);
    cm.spawnMobLimit(2400262, 1, -307, -623, 100);
    cm.spawnMobLimit(2400262, 1, -237, -796, 100);
    cm.spawnMobLimit(2400262, 1, -1134, -625, 100);
    cm.spawnMobLimit(2400262, 1, -875, -625, 100);
    cm.spawnMobLimit(2400262, 1, -1081, -625, 100);
    cm.spawnMobLimit(2400262, 1, -953, -797, 100);
    cm.spawnMobLimit(2400262, 1, -805, -797, 100);
    cm.spawnMobLimit(2400262, 1, -782, -797, 100);
    cm.spawnMobLimit(2400262, 1, 335, -784, 100);
    cm.spawnMobLimit(2400262, 1, 865, -660, 100);
    cm.spawnMobLimit(2400262, 1, 806, -660, 100);
    cm.spawnMobLimit(2400262, 1, 431, -784, 100);
    cm.spawnMobLimit(2400262, 1, 777, -660, 100);
    cm.spawnMobLimit(2400262, 1, 945, -816, 100);
    cm.spawnMobLimit(2400262, 1, 980, -816, 100);
    cm.spawnMobLimit(2400262, 1, 957, -816, 100);
    cm.spawnMobLimit(2400262, 1, 313, -784, 100);
    cm.spawnMobLimit(2400262, 1, 217, -784, 100);
    cm.spawnMobLimit(2400262, 1, 121, -612, 100);
    cm.spawnMobLimit(2400262, 1, 412, -612, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;