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
      cm.npc_ChangeController(9400597, "oid=7536826", -150, -70, 1, -200, -100, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536826", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7536827", -638, -70, 1, -688, -588, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536827", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536828", -550, -70, 1, -600, -500, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536828", "summon", 0, 0);
      cm.npc_ChangeController(9400599, "oid=7536829", -10, -70, 1, -60, 40, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536829", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=7536830", -350, -70, 1, -400, -300, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536830", 'summon', 0, 0);
      cm.npc_ChangeController(9400585, "oid=7536831", -270, -70, 1, -320, -220, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536831", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#大家看我信号！", 37, 9400583, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#相信我！", 37, 9400597, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=7536827", 'attack2', 0, 1);
              cm.addPopupSay(9400583, 0, "#face0#就是现在！", '', 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#看我的撒网！", 37, 9400597, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=7536826", "attack3", 0, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=7536829", "attack2", 0, 1);
                    cm.fieldEffect_ScreenMsg("Map/EffectPL.img/MainStream/Skuas/screenEff/svartiSkill");
                    cm.npc_SetSpecialAction("oid=7536828", 'attack2', 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#额哈哈，这就是斯巴乐缇式狩猎术！", 37, 9400597, false, true);
                    } else {
                      if (status === V++) {
                        cm.playerMessage(-1, "成为古纳德和渔夫们、吉莉的修炼对象，直到他们累垮。");
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.npc_LeaveField("oid=7536826");
                            cm.npc_LeaveField("oid=7536826");
                            cm.npc_LeaveField("oid=7536827");
                            cm.npc_LeaveField("oid=7536827");
                            cm.npc_LeaveField("oid=7536828");
                            cm.npc_LeaveField("oid=7536828");
                            cm.npc_LeaveField("oid=7536829");
                            cm.npc_LeaveField("oid=7536829");
                            cm.npc_LeaveField("oid=7536830");
                            cm.npc_LeaveField("oid=7536830");
                            cm.npc_LeaveField("oid=7536831");
                            cm.npc_LeaveField("oid=7536831");
                            cm.setInGameDirectionMode(false, true, false);
                            cm.spawnMobLimit(9402331, 1, -150, -115, 1);
                            cm.spawnMobLimit(9402333, 1, -650, -115, 1);
                            cm.spawnMobLimit(9402332, 1, -550, -115, 2);
                            cm.spawnMobLimit(9402332, 1, -10, -115, 2);
                            cm.spawnMobLimit(9402314, 1, -350, -115, 2);
                            cm.spawnMobLimit(9402314, 1, -270, -115, 2);
                            cm.dispose();
                            cm.forceJoinEvent("莫奈德_地图_Act3.5_战斗训练3");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;