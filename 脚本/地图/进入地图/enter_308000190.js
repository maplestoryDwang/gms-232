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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -639, 55);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(2570104, "oid=37938480", -475, -19, 1, -525, -425, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37938480", "summon", 0, 0);
        cm.npc_ChangeController(2570105, "oid=37938481", -620, 14, 8, -670, -570, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=37938481", "summon", 0, 0);
        cm.npc_ChangeController(2570130, "oid=37938482", -714, 30, 8, -764, -664, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37938482", "summon", 0, 0);
        cm.npc_ChangeController(2570130, "oid=37938483", -787, 30, 8, -837, -737, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=37938483", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=37938482", "down", -1, 1);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1273, 40);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#田鼠骑士团……我本以为这只是个聚集了一帮落选者的徒有其表的骑士团……", 36, 2570130, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#喂，你说话小心点。也不想想是托谁的福，才保住性命的？", 36, 2570105, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#总，总之谢谢你。多亏了你，我才能活下来。", 36, 2570130, true, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.Npc_Fadeout("oid=37938482", 0, 700);
                    cm.Npc_Fadeout("oid=37938483", 0, 700);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                      cm.inGameDirectionEvent_AskAnswerTime(4500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=37938480", -1);
                        cm.sendNormalTalk_Bottom("情况怎么样？", 56, 0, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这边好像没有余留的非战斗人员，只剩下少数的恶魔。", 36, 2570105, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Attack1", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Attack1", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37938480"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37938481"], [0, 0, -30, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("魁格，你去吧。", 56, 0, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=37938480", 0);
                                    cm.sendNormalTalk_Bottom("#face0#歼灭目标。", 36, 2570104, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=37938480", 1, 500, 120);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("亚殷怎么样？", 56, 0, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#小姐独自往中央走廊去了。正巧那边闹哄哄的。", 36, 2570105, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#我去……", 36, 2570105, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不，我去吧。\r\n你先帮助魁格，然后再过来会合。", 56, 0, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是的。", 36, 2570105, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                                    cm.sendNormalTalk_Bottom("#face5#什么？你叫我去帮助那怪物？", 36, 2570105, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face4#那家伙简直不像人类……被刺中了也不会流血……\r\n已经走掉啦。", 36, 2570105, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我得在后面给他加加油。", 36, 2570105, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=37938481", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_NormalSpeechBalloon("……。", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2570105, null, cm.getPlayer().getId());
                                                                cm.sendNormalTalk_Bottom("#face3#不管怎样，两个总比一个好……嘿哟！！！", 36, 2570105, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=37938482", "attack", -1, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction25.img/Dlep6/ilust/2", 0, 500, 0, -80, 0, 4, 1, -1, 0, 0, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/arrow0", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/sword4", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/dem_sword", 100);
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act3/lumi_attack", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8230076/Die", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#魁格，你会不会是什么魔导兵器之类的？", 36, 2570105, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#魔导兵器？那是什么？", 36, 2570104, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#宫廷魔法师们开发出一种石头人，名字好像叫胡蒙库鲁斯什么的？\r\n外表看着像人，但是……", 36, 2570105, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#是和任务有关的话吗？", 36, 2570104, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#关联嘛……没有关联……\r\n嗨呀！虽没有关联……", 36, 2570105, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#后面，敌人。", 36, 2570104, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face4#呃啊！", 36, 2570105, true, true, 1);
                                                                                        } else if (status === V++) {
                                                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                          cm.npc_LeaveField("oid=37938480");
                                                                                          cm.npc_LeaveField("oid=37938481");
                                                                                          cm.npc_LeaveField("oid=37938482");
                                                                                          cm.npc_LeaveField("oid=37938483");
                                                                                          cm.dispose();
                                                                                          cm.warp(308000200, 0, false);
                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                          cm.setStandAloneMode(false);
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