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
    cm.addPopupSay(3003500, 1000, "#face2#呃呃……", '', 0);
    cm.addPopupSay(0, 1000, "休麦！沃莉倒下了！传送准备好了吗？", '', 0);
    cm.addPopupSay(3003502, 1000, "#face1#你说什么？还没准备好！再等一下。", '', 0);
    cm.addPopupSay(0, 1000, "呃……没办法了。只能自己想想办法了……", '', 0);
    cm.spawnMobMultipler(8644510, 5, 20, -600, 165);
    cm.spawnMobMultipler(8644510, 5, 20, -700, 165);
    cm.spawnMobMultipler(8644510, 5, 20, -800, 165);
    cm.spawnMobMultipler(8644510, 5, 20, -1500, 165);
    cm.spawnMobMultipler(8644510, 5, 20, -1600, 165);
    cm.spawnMobMultipler(8644510, 5, 20, -1700, 165);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;