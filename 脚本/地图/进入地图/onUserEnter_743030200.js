var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9330204, "oid=857374", 807, -100, 5, 757, 857, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=857374", "summon", 0, 0);
      cm.setSessionValue('Suha6', "857374");
      cm.sendNormalTalk("你到了!!!", 1, 9330204, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("父亲，父亲还没有到达吗？", 3, 9330204, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("好，先坐上船做好出发准备。我观察一下四周", 1, 9330204, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('好，知道了!', 3, 9330204, true, true);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=857374");
            cm.dispose();
            cm.warp(743030201, 0, false);
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
          }
        }
      }
    }
  }
}