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
      cm.askMenu("#e<组队任务：第一次同行>#n\r\n你不想和队友一起齐心协力地完成任务吗？这里面有很多障碍物，你需要和他人合作才能通过……如果你想挑战的话，请让#b你所在队伍的队长#k来和我说话。\r\n#b#L0#我想挑战组队任务。#l\r\n#L1#请详细说明一下。#l\r\n#L2#我想知道今天剩余的挑战次数。#l", 0, 9076110);
    } else {
      cm.dispose();
    }
  }
}