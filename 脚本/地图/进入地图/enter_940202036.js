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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001307, 'oid=722517', -1200, 790, 8, -1250, -1150, 0, true, 500, false);
      cm.npc_SetSpecialAction('oid=722517', 'summon', 0, 0);
      cm.npc_ChangeController(3001308, "oid=722518", -1280, 790, 8, -1330, -1230, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=722518", "summon", 0, 0);
      cm.setPartner(true, 3001300, 80002330, 0);
      cm.setPartner(true, 3001310, 80002331, 0);
      cm.setPartner(true, 3001311, 80002332, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#还要再往右边走。继续前进。", 37, 3001354, false, true, 1);
          } else {
            if (status === V++) {
              cm.setStandAloneMode(false);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              cm.updateInfoQuest(36102, "First=1");
              cm.forceCompleteQuest(36102);
              cm.curNodeEventEnd(true);
              cm.setInGameDirectionMode(true, false, false);
              cm.setStandAloneMode(true);
              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
              cm.sendNormalTalk_Bottom("#face1#前方危险。来历不明的物体正在向这边靠近。", 37, 3001300, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#哟~这些小不点长得可真奇怪！", 37, 3001326, true, true, 1);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3001343, "oid=722533", -600, 790, 8, -650, -550, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=722533", "summon", 0, 0);
                  cm.npc_ChangeController(3001343, 'oid=722534', -520, 790, 7, -570, -470, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=722534", 'summon', 0, 0);
                  cm.npc_ChangeController(3001343, "oid=722535", -415, 790, 7, -465, -365, 1, true, 0, false);
                  cm.npc_SetSpecialAction('oid=722535', "summon", 0, 0);
                  cm.npc_ChangeController(3001343, 'oid=722536', -325, 790, 7, -375, -275, 1, true, 0, false);
                  cm.npc_SetSpecialAction('oid=722536', "summon", 0, 0);
                  cm.npc_ChangeController(3001343, 'oid=722537', -205, 790, 7, -255, -155, 1, true, 0, false);
                  cm.npc_SetSpecialAction('oid=722537', "summon", 0, 0);
                  cm.npc_ChangeController(3001343, "oid=722538", -130, 790, 7, -180, -80, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=722538", "summon", 0, 0);
                  cm.npc_ChangeController(3001343, 'oid=722539', 25, 790, 7, -25, 75, 1, true, 0, false);
                  cm.npc_SetSpecialAction('oid=722539', "summon", 0, 0);
                  cm.npc_ChangeController(3001343, "oid=722540", 120, 790, 7, 70, 170, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=722540", "summon", 0, 0);
                  cm.npc_ChangeController(3001343, "oid=722541", 225, 790, 9, 175, 275, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=722541", 'summon', 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400317/Regen", 100);
                  cm.npc_SetSpecialAction('oid=722533', "regen", 1100, 1);
                  cm.npc_SetSpecialAction("oid=722534", 'regen', 1100, 1);
                  cm.npc_SetSpecialAction("oid=722535", "regen", 1100, 1);
                  cm.npc_SetSpecialAction("oid=722536", "regen", 1100, 1);
                  cm.npc_SetSpecialAction("oid=722537", 'regen', 1100, 1);
                  cm.npc_SetSpecialAction("oid=722538", "regen", 1100, 1);
                  cm.npc_SetSpecialAction('oid=722539', 'regen', 1100, 1);
                  cm.npc_SetSpecialAction("oid=722540", "regen", 1100, 1);
                  cm.npc_SetSpecialAction("oid=722541", "regen", 1100, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.setNpcSpecialActionReset("oid=722533");
                    cm.setNpcSpecialActionReset("oid=722534");
                    cm.setNpcSpecialActionReset("oid=722535");
                    cm.setNpcSpecialActionReset('oid=722536');
                    cm.setNpcSpecialActionReset("oid=722537");
                    cm.setNpcSpecialActionReset("oid=722538");
                    cm.setNpcSpecialActionReset("oid=722539");
                    cm.setNpcSpecialActionReset("oid=722540");
                    cm.setNpcSpecialActionReset("oid=722541");
                    cm.sendNormalTalk_Bottom("#face0#你们这些家伙~~~~难道是迷路了？？嘻嘻嘻", 37, 3001326, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#什么？难道是高等翼人？最近怎么总能碰见高等翼人那些家伙？", 37, 3001326, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我最讨厌那帮家伙。傲慢无礼的种族！", 37, 3001326, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#把那些家伙抓去做奴隶，说不定能卖个好价钱~？嘻嘻", 37, 3001326, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=722517");
                            cm.npc_LeaveField("oid=722518");
                            cm.npc_LeaveField("oid=722533");
                            cm.npc_LeaveField('oid=722534');
                            cm.npc_LeaveField("oid=722535");
                            cm.npc_LeaveField('oid=722536');
                            cm.npc_LeaveField("oid=722537");
                            cm.npc_LeaveField("oid=722538");
                            cm.npc_LeaveField("oid=722539");
                            cm.npc_LeaveField("oid=722540");
                            cm.npc_LeaveField("oid=722541");
                            var O = cm.getEventManager("圣晶使徒_荒蛮终点站_击杀数2");
                            O.startInstance(cm.getPlayer(), cm.getMap());
                            cm.dispose();
                            cm.setStandAloneMode(false);
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
        }
      }
    }
  }
}