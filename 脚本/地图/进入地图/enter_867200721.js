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
      cm.npc_ChangeController(9400582, "oid=4241661", 450, 355, 2, 400, 500, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241661", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=4241662", 620, 355, 2, 570, 670, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241662", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241663", 0, 355, 2, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241663", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241664", 60, 355, 2, 10, 110, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241664", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241665", 110, 355, 2, 60, 160, 0, true, false);
      cm.npc_SetSpecialAction("oid=4241665", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241666", 700, 355, 2, 650, 750, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241666", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=4241667", 770, 355, 3, 720, 820, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241667", 'summon', 0, 0);
      cm.npc_ChangeController(9400672, "oid=4241668", 500, 355, 2, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=4241668", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 550, 420);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#凯恩特技2- 突围斩刺！", 37, 9400582, false, true);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=4241661", "attack1", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=4241668", "die1", 0, 1);
              cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/finishAttack");
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=4241668");
                cm.npc_LeaveField("oid=4241668");
                cm.fieldEffect_PlayFieldSound("PL_3min/CubeBreak", 100);
                cm.sendNormalTalk_Bottom("呜哇啊啊啊啊！！！！！！！", 37, 9400585, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#凯恩……他为什么那样喊……？", 37, 9400580, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#他是想营造气氛！凸显自己又帅又有文采……", 37, 9400583, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=4241662"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face0#我真羡慕你啊，艾丽卡学者！", 37, 9400583, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1440);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=4241661");
                          cm.npc_LeaveField("oid=4241661");
                          cm.npc_LeaveField("oid=4241662");
                          cm.npc_LeaveField("oid=4241662");
                          cm.npc_LeaveField("oid=4241663");
                          cm.npc_LeaveField("oid=4241663");
                          cm.npc_LeaveField("oid=4241664");
                          cm.npc_LeaveField("oid=4241664");
                          cm.npc_LeaveField("oid=4241665");
                          cm.npc_LeaveField("oid=4241665");
                          cm.npc_LeaveField("oid=4241666");
                          cm.npc_LeaveField("oid=4241666");
                          cm.npc_LeaveField("oid=4241667");
                          cm.npc_LeaveField("oid=4241667");
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else if (status === V++) {
                          cm.setNumberForQuestInfo(64006, 'Ec', 14);
                          cm.dispose();
                          cm.warp(867200500, 13);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;