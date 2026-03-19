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
      cm.npc_ChangeController(2142921, "oid=221168", -295, 16, 40, -345, -245, 0, false, 0, false);
      cm.npc_ChangeController(2142920, "oid=221169", 11, 192, 6, -39, 61, 1, false, 0, false);
      cm.npc_ChangeController(2142922, 'oid=221170', -114, 190, 5, -164, -64, 1, false, 0, false);
      cm.npc_ChangeController(2142923, "oid=221171", 150, 201, 8, 100, 200, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_ScreenMsg("twilightPerion/text8");
      cm.inGameDirectionEvent_AskAnswerTime(2500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好几天都做相同的梦……", 1, 2142921, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这一定是敌人的邪恶阴谋！想让我们相互猜忌。", 1, 2142922, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("但是村民们都很不安。外面流传着奇怪的传闻……", 1, 2142923, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这是不祥的征兆吗？", 1, 2142920, true, true);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(913051007, 0, false);
            }
          }
        }
      }
    }
  }
}