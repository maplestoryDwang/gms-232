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
      cm.sendNormalTalk("奇姆！你正在这里搜索吗？发现变身术士了吗？", 2, 1102204, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这个地方好像完全～完全～没有可疑的地方。最好到其他地方去找找看。", 0, 1102204, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("奇姆……？#b（好像有点奇怪……难道……）#k\r\n那件披风我一直都在用着。谢谢。", 2, 1102204, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呵呵，那就好。", 0, 1102204, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你没有给过我披风！！", 2, 1102204, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啊……被发现了吗？！那就没办法了！战斗吧！像真正的#r黑色之翼#k那样！", 0, 1102204, true, true);
              } else if (status === V++) {
                cm.npc_LeaveField("oid=1133504");
                cm.spawnMobLimit(9300743, 1, -1934, 88, 100);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}