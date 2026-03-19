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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400582, "oid=3697942", 450, 330, 2, 400, 500, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697942", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=3697943", 620, 330, 2, 570, 670, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697943", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697944", 0, 330, 2, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697944", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697945", 60, 330, 2, 10, 110, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697945", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697946", 110, 330, 2, 60, 160, 0, true, false);
      cm.npc_SetSpecialAction("oid=3697946", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697947", 640, 330, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697947", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=3697948", 660, 330, 2, 610, 710, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697948", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=3697949", 500, 330, 2, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=3697949", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=3697942", "attack1", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=3697949", "die1", 0, 1);
          cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_LeaveField("oid=3697949");
            cm.npc_LeaveField("oid=3697949");
            cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
            cm.sendNormalTalk_Bottom("#b那些人有平安跟大篷车队伍会合吗？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#其他骑士去接他们力量，你放心。", 37, 9400582, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1440);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else if (status === V++) {
                  cm.addNumberForQuestInfo(64006, "man", 40);
                  cm.setNumberForQuestInfo(64006, 'Ec', 13);
                  cm.dispose();
                  cm.warp(867200550, 12);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=3697942");
                  cm.npc_LeaveField("oid=3697942");
                  cm.npc_LeaveField("oid=3697943");
                  cm.npc_LeaveField("oid=3697943");
                  cm.npc_LeaveField("oid=3697944");
                  cm.npc_LeaveField("oid=3697944");
                  cm.npc_LeaveField("oid=3697945");
                  cm.npc_LeaveField("oid=3697945");
                  cm.npc_LeaveField("oid=3697946");
                  cm.npc_LeaveField("oid=3697946");
                  cm.npc_LeaveField("oid=3697947");
                  cm.npc_LeaveField("oid=3697947");
                  cm.npc_LeaveField("oid=3697948");
                  cm.npc_LeaveField("oid=3697948");
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