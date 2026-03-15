var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(B, P, E) {
  if (status == 0 && B == 0) {
    cm.dispose();
    return;
  }
  if (B == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = E;
  var M = -1;
  if (status <= M++) {
    cm.dispose();
  } else {
    if (status === M++) {
      cm.askMenu("#b#e冒险岛综艺秀#n#k第二弹~！#r#e拼图大师！#l#k#n\r\n#L0#开始#r#e<拼图大师·简单>#n#l#k\r\n#L1#开始#r#e<拼图大师·普通>#n#l#k\r\n#L2#开始#r#e<拼图大师·困难>#n#l#k\r\n\r\n#L9##b听取#e<拼图大师>#n的说明#l#k\r\n\r\n#L100#我没什么其他问题了。#l", 4, 9062572);
    } else {
      var n = 'action分支' + selectionLog[1];
      eval(n)(B, P, E, M);
    }
  }
}
function action分支0(B, P, E, M) {
  if (status <= M++) {
    cm.dispose();
    cm.openNpc(0, '活动_拼图大师');
  }
}
function action分支1(B, P, E, M) {
  if (status <= M++) {
    cm.dispose();
    cm.openNpc(1, "活动_拼图大师");
  }
}
function action分支2(B, P, E, M) {
  if (status <= M++) {
    cm.dispose();
    cm.openNpc(2, '活动_拼图大师');
  }
}
function action分支9(B, P, E, M) {
  if (status <= M++) {
    cm.sendNormalTalk("分支1。", 0, 9400965, false, false);
  } else if (status === M++) {
    cm.dispose();
  }
}
function action分支100(B, P, E, M) {
  if (status <= M++) {
    cm.dispose();
  }
}