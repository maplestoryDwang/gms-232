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
    cm.askMenu("我是豫园的发型设~计师#p9310548#。想要凹一下造型不啦？来，给你换个新潮的发型。\r\n#b#L0#更换发型（使用高级会员卡）#l\r\n#L1#更换发型（使用普通理发券）#l\r\n#L2#染色（使用高级会员卡）#l\r\n#L3#染色（使用普通染色卡）#l\r\n#k", 0, 9310548);
  } else {
    cm.dispose();
  }
}