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
      cm.npc_ChangeController(9401375, "oid=2256021", 560, 440, 9, 510, 610, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256021", "summon", 0, 0);
      cm.npc_ChangeController(9401375, "oid=2256022", 480, 440, 12, 430, 530, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256022", "summon", 0, 0);
      cm.npc_ChangeController(9401376, "oid=2256023", 400, 440, 17, 350, 450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256023", "summon", 0, 0);
      cm.npc_ChangeController(9401376, "oid=2256024", 320, 440, 15, 270, 370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256024", "summon", 0, 0);
      cm.npc_ChangeController(9401280, "oid=2256025", 250, 440, 13, 200, 300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256025", "summon", 0, 0);
      cm.updateInfoQuest(65998, "move=1");
      cm.sendNewEffects(17, [0, 1000, 1500, -270, 500]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.sendNewEffects(12, [2000, 150, 520]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
              cm.sendNormalTalk_Bottom("#face3##b云雾！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2256025", -1);
                cm.npc_setForceFlip("oid=2256024", -1);
                cm.npc_setForceFlip("oid=2256023", -1);
                cm.npc_setForceFlip("oid=2256022", -1);
                cm.npc_setForceFlip("oid=2256021", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.effect_Voice("VoiceWz2.img/Mukhyun/K/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/8', 100);
                  cm.sendNormalTalk_Bottom("#face0#墨玄……原来是你！", 37, 9401280, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#哈哈，与" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + "久别重逢，真让人怀念啊。\r\n但是你怎么不叫我大师兄？", 37, 9401280, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face6##b如果还有一点良心，就不会说出那种话。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6##b和你在同一门下学艺，是我的耻辱……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#从你嘴里听到那种话，真是让人气不打一处来！", 37, 9401280, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2256025", -1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#该如何处理你这个没礼貌的" + (cm.getPlayer().getGender() == 0 ? '师弟' : '师妹') + '呢……', 37, 9401280, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#小时候我教了你不少东西。你还记得吗？", 37, 9401280, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/9", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face6##b到了现在说这些干什么！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#什么时候开始你就不再向我请教了呢……\r\n从你自认为超越了我的时候？", 37, 9401280, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face6##b云雾！从今往后，你再也不是我的师兄！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                            cm.sendNormalTalk_Bottom("#face0#我最近学了别的东西，变得更强了。", 37, 9401280, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#想不想让我指点你两招？", 37, 9401280, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2256025", "attack2", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(960);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNewEffects(13, [100, -150, 0]);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/Mukhyun/1"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -150, 440);
                                                    cm.inGameDirectionEvent_OneTimeAction(25, 1000);
                                                    cm.emotion(1, -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                                                      cm.sendNormalTalk_Bottom("#face3##b呃呃呃！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎呀哎呀……", 37, 9401280, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#这段时间一点长进都没有！", 37, 9401280, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我没说过修炼不能偷懒吗？啧啧……", 37, 9401280, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.emotion(0, -1);
                                                              cm.sendNormalTalk_Bottom("#face6##b云雾！！！！！！！！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#好像没什么可看了。", 37, 9401280, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2256025", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2256025", 1, 50, 100);
                                                                    cm.sendNewEffects(13, [1000, 100, 0]);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#……该拿你怎么办呢？", 37, 9401280, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2256025", -1);
                                                                            cm.sendNormalTalk_Bottom("#face0#看在师兄弟的情份上，这次我放你一马。", 37, 9401280, false, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#但是如果你一直追着我不放……就会亲眼看到你心爱的玄山派灰飞烟灭。", 37, 9401280, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face6##b云雾，给我站住！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=2256024", -1, 100, 150);
                                                                                      cm.npc_SetForceMove("oid=2256023", -1, 100, 150);
                                                                                      cm.npc_SetForceMove("oid=2256022", -1, 100, 150);
                                                                                      cm.npc_SetForceMove("oid=2256021", -1, 100, 150);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                            cm.npc_LeaveField("oid=2256021");
                                                                                            cm.npc_LeaveField("oid=2256022");
                                                                                            cm.npc_LeaveField("oid=2256023");
                                                                                            cm.npc_LeaveField("oid=2256024");
                                                                                            cm.npc_LeaveField("oid=2256025");
                                                                                            cm.dispose();
                                                                                            cm.openNpc(9110002, '墨玄_这次是尼哈沙漠');
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