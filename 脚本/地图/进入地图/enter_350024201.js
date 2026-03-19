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
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(1540452, "oid=22716195", -90, 120, 12, -140, -40, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716195", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=22716196", 10, 100, 13, -40, 60, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716196", "summon", 0, 0);
      cm.npc_ChangeController(1540450, "oid=22716197", -300, 45, 10, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716197", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=22716198", -220, 45, 11, -270, -170, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716198", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 17, 144);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("发生了什么事?", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540453, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
                cm.effect_NormalSpeechBalloon('怎么回事?', 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1540452, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                  cm.effect_NormalSpeechBalloon("好像有些骚动. ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540451, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("人偶师弗朗西斯？\r\n你是说那个被称为受气包的人偶师弗朗西斯？\r\n", 37, 1540451, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那个家伙无论藏在哪里，找起来都不难。\r\n好了，我们一起找找他吧。", 37, 1540451, true, true);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350024700, 0, true);
                      cm.npc_LeaveField("oid=22716195");
                      cm.npc_LeaveField("oid=22716195");
                      cm.npc_LeaveField("oid=22716196");
                      cm.npc_LeaveField("oid=22716196");
                      cm.npc_LeaveField("oid=22716197");
                      cm.npc_LeaveField("oid=22716197");
                      cm.npc_LeaveField("oid=22716198");
                      cm.npc_LeaveField("oid=22716198");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;