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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003902, "oid=2179577", 224, -306, 4, 174, 274, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2179577", "summon", 0, 0);
      cm.npc_ChangeController(3003908, "oid=2179578", 100, -1450, 6, 50, 150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2179578", "summon", 0, 0);
      cm.npc_ChangeController(3003909, "oid=2179579", 439, -1146, 1, 389, 489, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2179579", 'summon', 0, 0);
      cm.npc_ChangeController(3003910, "oid=2179580", -231, -996, 10, -281, -181, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2179580", "summon", 0, 0);
      cm.npc_ChangeController(3003911, "oid=2179581", 468, -785, 18, 418, 518, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2179581", "summon", 0, 0);
      cm.npc_ChangeController(3003912, "oid=2179582", -153, -645, 23, -203, -103, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2179582", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2179578", 0, 0);
      cm.Npc_Fadeout("oid=2179579", 0, 0);
      cm.Npc_Fadeout("oid=2179580", 0, 0);
      cm.Npc_Fadeout("oid=2179581", 0, 0);
      cm.Npc_Fadeout("oid=2179582", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#……", 37, 3003902, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("奥尔卡？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('为什么停住了？', 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm36/RoyalGuard", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(8000, 0, 1000, 8000, 85, -1213);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2179582", 'regen', 1, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645038/Regen", 100);
                        cm.Npc_Fadeout("oid=2179582", 255, 30);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=2179581", "regen", 1, 1);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645037/Regen", 100);
                          cm.Npc_Fadeout("oid=2179581", 255, 30);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2179580", 'regen', 1, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645038/Regen", 100);
                            cm.Npc_Fadeout("oid=2179580", 255, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=2179579", 'regen', 1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645036/Regen", 100);
                              cm.Npc_Fadeout("oid=2179579", 255, 30);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=2179578", "regen", 1, 1);
                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645035/Regen", 100);
                                cm.Npc_Fadeout("oid=2179578", 255, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你们该不会以为轻轻松松就能爬上去吧？", 37, 3003908, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这帮蠢货，嘻嘻嘻嘻嘻！！！", 37, 3003909, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#发现敌人，消灭掉他们。", 37, 3003910, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#猎物只有两个，我们却有五个。\r\n嗯……决定了。两个都是我的！", 37, 3003911, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#哈哈，别这样嘛。一起玩玩好了！", 37, 3003912, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(200, 0, 1000, 200, 85, -262);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#哼，你们这些蠢货还是自己玩吧。", 37, 3003902, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=2179577", "special2", 1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaUp", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=2179577");
                                                      cm.npc_LeaveField("oid=2179577");
                                                      cm.inGameDirectionEvent_PushScaleInfo(100, 0, 1000, 100, 85, -1213);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#卑鄙的家伙！我不会让你逃跑的！！", 37, 3003908, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=2179578", 'skill', 1, 1);
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645038/Skill1", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=2179579", "skill", 1, 1);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Skill1", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(700);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=2179580", "skill", 1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Skill1", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=2179581", "skill", 1, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Skill1", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(700);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2179582", "skill", 1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8220022/Skill1", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2179578");
                                                                    cm.npc_LeaveField("oid=2179579");
                                                                    cm.npc_LeaveField("oid=2179580");
                                                                    cm.npc_LeaveField("oid=2179580");
                                                                    cm.npc_LeaveField("oid=2179581");
                                                                    cm.npc_LeaveField("oid=2179581");
                                                                    cm.npc_LeaveField("oid=2179582");
                                                                    cm.npc_LeaveField("oid=2179582");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                  } else if (status === V++) {
                                                                    cm.forceCompleteQuest(35804);
                                                                    cm.gainExp(721799016);
                                                                    cm.dispose();
                                                                    cm.warp(450012120, 0, false);
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