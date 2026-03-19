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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3000142, "oid=1053596", -100, 220, 4, -150, -50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053596", "summon", 0, 0);
      cm.npc_ChangeController(3000139, "oid=1053597", -150, 220, 3, -200, -100, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053597", 'summon', 0, 0);
      cm.npc_ChangeController(3000114, "oid=1053598", 70, 220, 6, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053598", "summon", 0, 0);
      cm.npc_ChangeController(3000111, "oid=1053599", 130, 220, 6, 80, 180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053599", "summon", 0, 0);
      cm.npc_ChangeController(3000115, "oid=1053600", 250, 220, 8, 200, 300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053600", 'summon', 0, 0);
      cm.sendNormalTalk("呃……怎么回事……", 1, 3000114, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("那小家伙怎么会变化？", 1, 3000111, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('看起来好危险……', 1, 3000114, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg0/2", "oid=1053596"], [1200, 0, -200, 1, 0, 1, 0, 0, 0]);
            cm.npc_SetSpecialAction("oid=1053596", "DKgigaSlasher", 0, 1);
            cm.inGameDirectionEvent_头顶图片(["Skill/6112.img/skill/61121201/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
            cm.fieldEffect_PlayFieldSound("Kaiser/61121100", 100);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=1053598", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=1053599", "die1", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=1053598");
                cm.npc_LeaveField("oid=1053599");
                cm.sendNormalTalk("这……这不可能啊……", 1, 3000115, false, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                  cm.inGameDirectionEvent_AskAnswerTime(1950);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=1053596");
                  cm.npc_LeaveField("oid=1053597");
                  cm.npc_LeaveField("oid=1053600");
                  cm.dispose();
                  cm.warp(940001240, 0, false);
                  cm.inGameDirectionEvent_SetHideEffect(0);
                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                  cm.setInGameDirectionMode(false, true, false);
                }
              }
            }
          }
        }
      }
    }
  }
}