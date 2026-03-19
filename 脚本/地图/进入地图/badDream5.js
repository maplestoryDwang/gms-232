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
      cm.npc_ChangeController(2142910, 'oid=221156', 522, 88, 36, 472, 572, 1, false, 0, false);
      cm.npc_ChangeController(2142911, "oid=221157", 772, 88, 35, 722, 822, 1, false, 0, false);
      cm.npc_ChangeController(2142912, 'oid=221158', 361, 88, 38, 311, 411, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("twilightPerion/text6");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你们也梦到那个梦了吗？", 1, 2142910, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("奇怪。竟然所有人都做了同样的噩梦……", 1, 2142911, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("还好我们对希纳斯女皇深信不疑，其他地区怎么样了呢？", 1, 2142912, true, true);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(913051005, 0, false);
          }
        }
      }
    }
  }
}