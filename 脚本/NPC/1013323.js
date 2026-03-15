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
      cm.sendOk("最近附加的怪物变得好狂暴啊。");
    } else {
      cm.dispose();
    }
  }
}
function action控制中心(f, W, U) {
  var V = "action" + cm.getNpc();
  eval(V)(f, W, U);
}
function action分支(f, W, U) {
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
      cm.askMenu("你需要我的帮助吗？\r\n\r\n#b#L0#分支0#l#k\r\n#b#L1#分支1#l#k\r\n\r\n#b#L2#分支2l#k", 0, 9400965);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk('分支1。', 0, 9400965, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}