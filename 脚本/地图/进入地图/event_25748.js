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
      cm.setSessionValue("kill_count", '0');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(3000119, "oid=203157118", 1300, 0, 3, 1250, 1350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=203157118", "summon", 0, 0);
      cm.npc_ChangeController(3000133, "oid=203157119", 1580, 0, 4, 1530, 1630, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=203157119", "summon", 0, 0);
      cm.sendNormalTalk("我本想偷走2个圣物，但只成功地带出了1个。现在偷来的圣物被安全地保管着。", 1, 3000119, false, true);
    } else {
      if (status === V++) {
        cm.updateInfoQuest(26011, '');
        cm.sendNormalTalk("辛苦了。已经拿掉了一个圣物，很快万神殿的保护罩就会崩溃。我马上开始着手准备进攻。", 1, 3000133, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("是。那么我们下面该做什么？", 1, 3000119, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("先去休息吧。只要没了保护罩，万神殿的守备兵力不堪一击，到时候就给你们做奖励好了。", 1, 3000133, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("是！麦格纳斯！谢谢您！", 1, 3000119, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg2/5"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/3", "oid=203157118"], [900, 0, -120, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=203157118");
                  cm.npc_LeaveField("oid=203157118");
                  cm.npc_LeaveField("oid=203157119");
                  cm.npc_LeaveField("oid=203157119");
                  cm.spawnMobLimit(9300544, 1, 1300, 29, 100);
                  cm.spawnMobLimit(9300544, 1, 1300, 29, 100);
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.gainExp(50);
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}