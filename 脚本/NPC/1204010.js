var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("嗯？怎么回事，你？", 1, 1204010, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("前不久倒是听说金银岛上的人偶师被人打倒了，难道是你……", 1, 1204010, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嘿嘿，那反倒好办了！既拿到了#b天空之城封印石#k，又能顺便打倒你的话，我就能在人偶师之上了！出招吧！", 1, 1204010, true, true);
        } else if (status === V++) {
          cm.npc_LeaveField('oid=407290');
          cm.spawnMobLimit(9300348, 1, 790, 75, 100);
          cm.spawnMobLimit(9300349, 1, 699, 83, 100);
          cm.dispose();
        }
      }
    }
  }
}