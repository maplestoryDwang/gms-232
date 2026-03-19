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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1032203, "oid=67195935", -470, -30, 8, -520, -420, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=67195935", "summon", 0, 0);
      cm.npc_ChangeController(2159359, "oid=67195936", 500, -30, 16, 450, 550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=67195936", 'summon', 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_PlayMusic("Bgm26.img/DarkWoods");
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("拉尼娅，你醒醒啊，拉尼娅！！", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.effect_PlayMusic("MiniGame.img/Open");
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice.img/DarkMage/2", 100);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/6"], [0, 0, -160, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 450, 500, -23);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3687);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=67195935");
                    cm.npc_LeaveField("oid=67195935");
                    cm.npc_LeaveField("oid=67195936");
                    cm.npc_LeaveField("oid=67195936");
                    cm.dispose();
                    cm.warp(910142120, 0, false);
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