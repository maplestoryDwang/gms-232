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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background('unmu', 1, 0, 0, 0);
      cm.npc_ChangeController(9401280, "oid=2756604", -30, 400, 9, -80, 20, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756604", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2756604", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401278, "oid=2756605", -520, 400, 8, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756605", "summon", 0, 0);
      cm.npc_ChangeController(9401293, "oid=2756606", 350, 345, 3, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756606", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2756606", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, -200, 480]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [2000, 350, 480]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip(-1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.sendNormalTalk_Bottom("#face3##b院子……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#……嘘。", 37, 9401278, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                      cm.npc_SetForceMove("oid=2756605", 1, 100, 100);
                      cm.Hidden_background("unmu", 1, 1, 1, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(12, [500, -50, 480]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.Npc_Fadeout("oid=2756604", 255, 0);
                            cm.Hidden_background("unmu", 1, 0, 0, 0);
                            cm.sendNormalTalk_Bottom("#face3##b……云雾？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#咦，那个人怎么会在这里？！", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                cm.sendNormalTalk_Bottom("#face6##b云雾！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                    cm.sendNormalTalk_Bottom("#face0#哼……我不是让你别追我吗？", 37, 9401280, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                        cm.sendNormalTalk_Bottom("#face0#……是的，你就是那样的孩子。今后一定还会继续妨碍我，所以这次我不能轻易放你走。", 37, 9401280, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=2756604", "attack1", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Mukhyun/1"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111005/special"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), -310, 410);
                                              cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#你成长得太慢了。那些追随你的师兄弟真可怜。", 37, 9401280, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                                  cm.sendNormalTalk_Bottom("#face1#这次让我再教你一手。", 37, 9401280, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/12", 100);
                                                    cm.sendNormalTalk_Bottom("#face3#切，这次我也不能袖手旁观！", 37, 9401278, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout("oid=2756606", 255, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=2756606", -1, 30, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("我也还能动。", 37, 9401293, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2756604", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2756604", -1);
                                                              cm.sendNormalTalk_Bottom("#face1#是的，正派的人也一样。\r\n看似光明磊落的正义感，其实不过是好整以暇的傲慢。", 37, 9401280, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#一起上吧。省得我一个个对付。", 37, 9401280, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNewEffects(19, [0]);
                                                                    } else if (status === V++) {
                                                                      cm.forceStartQuest(65981, '');
                                                                      cm.npc_LeaveField("oid=2756604");
                                                                      cm.npc_LeaveField("oid=2756605");
                                                                      cm.npc_LeaveField("oid=2756606");
                                                                      cm.dispose();
                                                                      cm.openNpc(9110002, "墨玄_存放武神记录的寺院");
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