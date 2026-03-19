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
      cm.updateInfoQuest(61333, "act1=610061510");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201546, "oid=2864960", 2102, 96, 37, 2052, 2152, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2864960", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2864960", "dead", -1, 0);
      cm.userSetFieldFloating(610061510, 4, 4, 4);
      cm.inGameDirectionEvent_AskAnswerTime(2200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("他成功了！\r\n苏巴尼把纳瑞坎封印在雕像里了！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(610061510, 50, 40, 40);
            cm.addPopupSay(9201537, 2000, '好棒哦！好厉害哦！', '', 0);
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.addPopupSay(9201537, 2000, "那是时候给我赶紧离开那里了！", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
            } else if (status === V++) {
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.npc_LeaveField("oid=2864960");
              cm.dispose();
            }
          }
        }
      }
    }
  }
}