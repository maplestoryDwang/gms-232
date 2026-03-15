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
  } else if (status === V++) {
    if (cm.isQuestActive(41106)) {
      if (cm.haveItem(4033819, 5)) {
        cm.sendOk("（已经拿了足够多干草了，喂奶牛吧。）");
      } else {
        cm.sendNormalTalk("在干草堆里拿了一捆干草。", 0, 2430017, false, true);
        cm.gainItem(4033819, 1);
      }
    } else {
      cm.sendOk('（一大堆干草）');
      cm.dispose();
    }
  } else {
    if (cm.getItemQuantity(4033819) < 2) {
      cm.sendNormalTalk("不过，奶牛那个块头这么点草应该不够吧。还是多拿点吧。", 2, 2430017, true, true);
    }
    cm.dispose();
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
    cm.sendNormalTalk("分支1。", 0, 9400965, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}