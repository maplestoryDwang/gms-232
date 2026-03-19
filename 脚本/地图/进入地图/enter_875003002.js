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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401366, "oid=366928", -450, 330, 24, -500, -400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=366928", "summon", 0, 0);
      cm.npc_ChangeController(9401303, "oid=366929", -400, 330, 24, -450, -350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=366929", "summon", 0, 0);
      cm.npc_ChangeController(9401366, "oid=366930", -330, 330, 24, -380, -280, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=366930', "summon", 0, 0);
      cm.npc_ChangeController(9401304, "oid=366931", -280, 330, 24, -330, -230, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=366931", "summon", 0, 0);
      cm.npc_ChangeController(9401366, "oid=366932", -210, 330, 24, -260, -160, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=366932", "summon", 0, 0);
      cm.npc_ChangeController(9401305, 'oid=366933', -160, 330, 24, -210, -110, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=366933", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -450, 370]);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！我一直在等你！", 37, 9401306, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1##b那就先让我看一下实力吧？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1##b按[Ctrl]键，攻击木人桩试试。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.playerMessage(5, "可通过基本快捷键[Ctrl]进行攻击。");
                    cm.getTopMsgFont("可通过基本快捷键[Ctrl]进行攻击。", 3, 20, 20, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/shout", 100);
                      cm.npc_SetSpecialAction("oid=366929", "attack", -1, 0);
                      cm.npc_SetSpecialAction("oid=366931", "attack", -1, 0);
                      cm.npc_SetSpecialAction("oid=366933", "attack", -1, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601664/Damage", 80);
                            cm.forceCompleteQuest(65922);
                            cm.gainExp(642);
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(14, [0, 2000, 1000]);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(19, [0]);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField('oid=366928');
                                cm.npc_LeaveField("oid=366929");
                                cm.npc_LeaveField('oid=366930');
                                cm.npc_LeaveField("oid=366931");
                                cm.npc_LeaveField("oid=366932");
                                cm.npc_LeaveField("oid=366933");
                                cm.dispose();
                                cm.warp(875000000, 2, true);
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
}