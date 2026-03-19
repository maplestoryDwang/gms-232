var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(32982) && !cm.isQuestFinished(32983)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(2560009, "oid=4093074", 430, -30, 0);
      cm.npc_ChangeController(2560009, "oid=4093075", 560, -30, 0);
      cm.npc_ChangeController(2560009, "oid=4093076", 690, -30, 0);
      cm.npc_ChangeController(2560009, "oid=4093077", 300, -30, 0);
      cm.npc_ChangeController(2560003, "oid=4093078", 939, -144, 1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, false, false);
        cm.sendNormalTalk_Bottom('艾特！！', 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#切，这些家伙的目标是花。做好战斗准备。", 37, 2560003, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("但是中和剂……！", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#你还不知道吗？反正那都是假的。只是对我们进行洗脑的药物而已。", 37, 2560003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("怎么会？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#好了，振作点。来了！", 37, 2560003, true, true);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=4093074");
                  cm.npc_LeaveField("oid=4093075");
                  cm.npc_LeaveField("oid=4093076");
                  cm.npc_LeaveField("oid=4093077");
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;