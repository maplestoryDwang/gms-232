var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32778)) {
    action1(f, E, e);
  } else if (cm.isQuestActive(32838)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1530031, "oid=28280", 729, 136, 10, 679, 779, 1, false, false);
      cm.npc_ChangeController(1530133, "oid=28281", 311, 136, 1, 261, 361, 5, true, false);
      cm.npc_ChangeController(1530151, "oid=28282", 576, 136, 12, 526, 626, 1, false, false);
      cm.npc_ChangeController(1530361, "oid=28283", -123, 136, 17, -173, -73, 0, false, false);
      cm.npc_ChangeController(1530402, "oid=28284", 195, 136, 14, 145, 245, 0, false, false);
      cm.npc_ChangeController(1530501, "oid=28285", 511, 136, 12, 461, 561, 1, false, false);
      cm.npc_ChangeController(1530063, 'oid=28286', 107, 136, 15, 57, 157, 1, false, false);
      cm.npc_ChangeController(1530552, "oid=28287", -118, -293, 40, -168, -68, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2500, 0, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 311, 6);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4081);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你怎么这么慢！我足足等了15秒！", 37, 1530130, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("可真够磨蹭的了……你不知道奥尔卡的时间比金子还珍贵吗？以后要是晚一秒就打你一个嘴巴。", 37, 1530130, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('OK', 37, 1530400, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("在奥尔卡离开之前赶快去拍照吧。\r\n#b（打开智能手机，启动照相功能吧。）#k", 57, 0, false, true);
                      } else if (status === V++) {
                        cm.getTopMsgFont("打开智能手机就可以拍照了. ", 3, 20, 20, 0);
                        cm.setInGameDirectionMode(false, true, false);
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
    }
  }
}
function action2(f, E, e) {
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
    cm.npc_ChangeController(1530031, "oid=28280", 729, 136, 10, 679, 779, 1, false, false);
    cm.npc_ChangeController(1530133, "oid=28281", 311, 136, 1, 261, 361, 5, true, false);
    cm.npc_ChangeController(1530151, "oid=28282", 576, 136, 12, 526, 626, 1, false, false);
    cm.npc_ChangeController(1530361, "oid=28283", -123, 136, 17, -173, -73, 0, false, false);
    cm.npc_ChangeController(1530402, 'oid=28284', 195, 136, 14, 145, 245, 0, false, false);
    cm.npc_ChangeController(1530501, 'oid=28285', 511, 136, 12, 461, 561, 1, false, false);
    cm.npc_ChangeController(1530063, "oid=28286", 107, 136, 15, 57, 157, 1, false, false);
    cm.npc_ChangeController(1530552, "oid=28287", -118, -293, 40, -168, -68, 0, false, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;