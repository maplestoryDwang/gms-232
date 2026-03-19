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
    cm.npc_ChangeController(1540446, "oid=35887", -588, -2, 88, -638, -538, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040020");
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.useItem(2023447);
    cm.useItem(2023448);
    cm.useItem(2023449);
    cm.addPopupSay(1540503, 2000, "队长, 所以说黑色天堂就如同斯乌, 是这个意思吗?", '', 0);
    cm.addPopupSay(1540502, 1000, "果然, 所以那大家伙才会察觉我们的小规模作战啊. ", '', 0);
    cm.addPopupSay(1540504, 1000, "队长, 在水晶花园发生的事情你不要太介怀. ", '', 0);
    cm.addPopupSay(1540504, 1000, "希纳斯女皇下令让我们直接帮助队长. ", '', 0);
    cm.addPopupSay(1540504, 1000, "我想她应该知道队长会继续独自进行战斗吧. ", '', 0);
    cm.addPopupSay(1540503, 1000, "没错!不过, 这正是女皇的预知能力啊?", '', 0);
    cm.addPopupSay(1540502, 1000, "不是的啦, 德皮. 这是因为#b“信任”#k. ", '', 0);
    cm.addPopupSay(1540502, 1000, "队长没有任何错. 我们应该帮助所有需要帮助的人. ", '', 0);
    cm.addPopupSay(1540502, 1000, "无论那个人是什么身份. ", '', 0);
    cm.addPopupSay(1540503, 1000, "刚刚那段漂亮的话应该让我来说才对. ", '', 0);
    cm.addPopupSay(1540502, 1000, "你安静点, 德皮. ", '', 0);
    cm.npc_LeaveField("oid=35887");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;