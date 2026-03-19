var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.killAllMobNoExp();
      cm.npc_ChangeController(3003241, 'oid=48470', 105, 78, 39, 56, 155, 1, false, 0, false);
      cm.npc_ChangeController(3003242, "oid=48471", 920, 78, 47, 870, 970, 0, false, 0, false);
      cm.npc_ChangeController(3003243, "oid=48472", 678, 78, 46, 628, 728, 1, false, 0, false);
      cm.npc_ChangeController(3003244, "oid=48473", 1121, 33, 29, 1071, 1171, 0, false, 0, false);
      cm.npc_ChangeController(3003246, "oid=48474", 1231, 33, 29, 1181, 1281, 1, false, 0, false);
      cm.npc_ChangeController(3003248, "oid=48475", 1732, 78, 49, 1682, 1782, 1, false, 0, false);
      cm.npc_ChangeController(3003218, 'oid=48476', 1047, 78, 47, 997, 1071, 1, false, 0, false);
      cm.npc_ChangeController(3003205, "oid=48477", -48, 78, 37, -98, 2, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003259, "oid=1756413", 1410, -11, 29, 1360, 1460, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1756413", "summon", 0, 0);
      cm.npc_ChangeController(3003251, "oid=1756414", 1300, 66, 51, 1250, 1350, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1756414", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呃呃呃…心情好奇怪……", 37, 3003259, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("难道这就是幸福吗？我…………曾感觉幸福吗？我不知道，不知道……", 37, 3003259, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=1756413", 'remove', 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
              cm.sendNormalTalk_Bottom("#face0#原来她是音乐盒啊。在清道夫出现之前…………", 37, 3003251, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3003257, "oid=1756415", 1780, -50, 35, 1730, 1830, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=1756415", 'summon', 0, 0);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1780, 70, 1, 0, 1, 1, 0]);
                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(200);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3003257, "oid=1756416", 1880, -50, 35, 1830, 1930, 1, true, 0, false);
                    cm.npc_SetSpecialAction("oid=1756416", "summon", 0, 0);
                    cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1880, 70, 1, 0, 1, 1, 0]);
                    cm.fieldEffect_PlayFieldSound('summon/0', 100);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3003257, "oid=1756417", 1980, -50, 35, 1930, 2030, 1, true, 0, false);
                      cm.npc_SetSpecialAction("oid=1756417", "summon", 0, 0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 1980, 70, 1, 0, 1, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(200);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003257, "oid=1756418", 2080, -50, 52, 2030, 2130, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=1756418", "summon", 0, 0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 2080, 70, 1, 0, 1, 1, 0]);
                        cm.fieldEffect_PlayFieldSound("summon/0", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(200);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3003257, "oid=1756419", 2180, -50, 55, 2130, 2230, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1756419", "summon", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 2180, 70, 1, 0, 1, 1, 0]);
                          cm.fieldEffect_PlayFieldSound('summon/0', 100);
                          cm.inGameDirectionEvent_AskAnswerTime(200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#该死，太晚了。", 37, 3003251, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#请快点摧毁音乐盒，#ho#！", 37, 3003251, true, true);
                            } else if (status === V++) {
                              cm.npc_LeaveField("oid=1756413");
                              cm.npc_LeaveField("oid=1756415");
                              cm.npc_LeaveField("oid=1756416");
                              cm.npc_LeaveField("oid=1756417");
                              cm.npc_LeaveField("oid=1756418");
                              cm.npc_LeaveField("oid=1756419");
                              cm.updateInfoQuest(34340, "enter=5");
                              cm.npc_LeaveField("oid=1756414");
                              cm.dispose();
                              cm.killAllMobNoExp();
                              cm.setInGameDirectionMode(false, true, false);
                              cm.spawnMobLimit(8643012, 1, 1780, 32, 100);
                              cm.spawnMobLimit(8643012, 1, 1880, 32, 100);
                              cm.spawnMobLimit(8643012, 1, 1980, 32, 100);
                              cm.spawnMobLimit(8643012, 1, 2080, 78, 100);
                              cm.spawnMobLimit(8643012, 1, 2180, 78, 100);
                              cm.spawnMobLimit(8643013, 1, 1410, 33, 100);
                              cm.scheduleWarpTask(15, 450003430);
                              cm.addPopupSay(0, 5000, "打败这些清道夫！");
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
}