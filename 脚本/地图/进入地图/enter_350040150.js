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
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.getTopMsgFont("请消灭智能机器人, 搜集配件. ", 3, 20, 20, 0);
    cm.addPopupSay(1540502, 2000, "你们还记得吗?我们也想成为像爸爸那样的人, 所以才申请了弓兵测试. ", '', 0);
    cm.addPopupSay(1540503, 2000, "没错!爸爸还骂了我们, 说我们随便申请!嘻嘻嘻!", '', 0);
    cm.addPopupSay(1540504, 2000, "我们小时候天天拿着爸爸的弓箭玩, 所以一下就通过了测试. ", '', 0);
    cm.addPopupSay(1540503, 2000, "我想向爸爸证明, 弓兵很帅, 而且我们也能做到!", '', 0);
    cm.addPopupSay(1540504, 2000, "#face0#实际上, 测试的时候德皮哥哥差点就没过. ", '', 0);
    cm.addPopupSay(1540503, 2000, "谁?我?我的箭几乎是百发百中!", '', 0);
    cm.addPopupSay(1540502, 2000, "#face0#不过, 我们都以名列前茅的成绩合格了. 所以, 我们现在才能和队长在这里. ", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;