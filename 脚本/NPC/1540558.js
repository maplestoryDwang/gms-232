var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -104, 57);
        cm.npc_ChangeController(1540469, "oid=23645162", 70, 120, 3, 20, 120, 1, false, false);
        cm.npc_SetSpecialAction("oid=23645162", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=23645162", "down", -1, 1);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
            cm.forceCompleteQuest(33144);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
              cm.sendNormalTalk_Bottom("嗬嗬……等等！等等！\r\n我还有最后一句话要说。", 37, 1540469, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我最后要说的话是………… #fs30#变身！", 37, 1540469, true, true);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/faker/2", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                      cm.npc_LeaveField("oid=23645162");
                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/3110001/Use", 100);
                      cm.npc_ChangeController(1540460, "oid=23645268", 70, 120, 3, 20, 120, 0, true, false);
                      cm.npc_SetSpecialAction("oid=23645268", 'summon', 0, 0);
                      cm.npc_SetSpecialAction("oid=23645268", "boom", 1500, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=23645268");
                        cm.npc_ChangeController(1540450, "oid=23645291", 70, 120, 3, 20, 120, 1, true, false);
                        cm.npc_SetSpecialAction("oid=23645291", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/cyg/1", 100);
                          cm.npc_SetSpecialAction("oid=23645291", 'smile', -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.askMenu_Bottom("……你要打我吗？\r\n\r\n#L0# #b打#l#L1# #b实在下不了手#l", 37, 1540450);
                              cm.effect_Voice("Voice3.img/BlackHeaven/cyg/16", 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeaven/cygnus", 0, 1500, 0, 0, 12, 4, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.askMenu_Bottom("真的吗？你真的要打我吗？\r\n\r\n#L0# #b打！#l#L1# #b还是下不了手#l", 37, 1540450);
                                    cm.effect_Voice("Voice3.img/BlackHeaven/cyg/17", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.askMenu_Bottom("呜……真的吗？真的吗？\r\n\r\n#L0# #b打！！！！#l#L1# #b无论如何都下不了手#l", 37, 1540450);
                                      cm.effect_Voice("Voice3.img/BlackHeaven/cyg/18", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("呼呼……在你犹豫的瞬间已经来不及了。", 37, 1540450, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(1540474, "oid=23645418", -185, 120, 2, -235, -135, 0, false, false);
                                              cm.npc_SetSpecialAction("oid=23645418", "summon", 0, 0);
                                              cm.npc_SetSpecialAction("oid=23645418", "appear", 1320, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1320);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.npc_SetSpecialAction("oid=23645418", "swing", 0, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(840);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_Voice("Skill.img/0000100/Hit", 100);
                                                } else if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(0);
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(33169);
                                                  cm.npc_LeaveField("oid=23644550");
                                                  cm.npc_LeaveField("oid=23645291");
                                                  cm.npc_LeaveField("oid=23645418");
                                                  cm.dispose();
                                                  cm.warp(350022000, 0);
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