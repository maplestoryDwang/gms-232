var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, E, e) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (cm.getMapId() == 993063022) {
      action0(f, E, e);
    }
  }
}
function action0(f, E, e) {
  if (status == 0) {
    cm.updateInfoQuest(35757, "enter=993063022;do=ing");
    cm.setPartner(1, 3003770, 80002582, 0);
    cm.addPopupSay(3003770, 2500, "#face0#哎呀真是的，你可真是个路痴。", '', 0);
    cm.dispose();
  }
}
function action1(f, E, e) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}
function action2(f, E, e) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}