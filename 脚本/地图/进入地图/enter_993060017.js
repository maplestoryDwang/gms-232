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
      cm.npc_ChangeController(3003604, "oid=275666", -2223, 88, 11, -2273, -2173, 1, false, 0, false);
      cm.npc_ChangeController(3003608, "oid=275667", -4176, 88, 40, -4226, -4126, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060017;return=450006130");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -3959, 80);
      cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;04=h0;05=h1");
      cm.npc_ChangeController(3003651, "oid=2200636", -3700, 80, 24, -3750, -3650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200636", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3800, 150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#在神圣之光发生变化之前，我们需要勇士们的心愿之力。\r\n那是唯一可以与灾难对抗的力量……", 37, 3003651, false, true);
      } else {
        if (status === V++) {
          cm.npc_LeaveField("oid=275666");
          cm.sendNormalTalk_Bottom("#face0#神兽说完之后，就再次陷入了沉睡。", 37, 3003651, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啊，关于#b神圣之光#k和#b意念#k，到达基地后，\r\n我再详细和你说。", 37, 3003651, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2200636", 1, 280, 120);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 280);
                    cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1500, 2500, -3520, 150);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#见过神兽之后，女皇陛下马上给各地的勇士们发出了书信，\r\n宣布向神秘河发动大规模远征。", 37, 3003651, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3520, 150);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=2200636", 1, 380, 120);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 480);
                                cm.inGameDirectionEvent_PushScaleInfo(2500, 0, 1000, 2500, -3010, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我们好像到天渡了……", 37, 3003651, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayBGM("Bgm18/Injustice", 0, 0);
                                        cm.playSoundEffDirectly("Ambience.img/night");
                                        cm.inGameDirectionEvent_PushScaleInfo(300, 0, 1500, 300, -2720, 150);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -2410, 150);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                                              cm.npc_ChangeController(3003666, "oid=2200640", -2714, 80, 19, -2764, -2664, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=2200640", "summon", 0, 0);
                                              cm.npc_ChangeController(3003666, "oid=2200641", -2620, 80, 12, -2670, -2570, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=2200641", 'summon', 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3003666, "oid=2200642", -2510, 80, 8, -2560, -2460, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2200642", "summon", 0, 0);
                                                cm.npc_ChangeController(3003666, "oid=2200643", -2430, 80, 8, -2480, -2380, 1, true, 0, false);
                                                cm.npc_SetSpecialAction("oid=2200643", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(3003666, "oid=2200644", -2312, 80, 7, -2362, -2262, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2200644", "summon", 0, 0);
                                                  cm.npc_ChangeController(3003666, "oid=2200645", -2230, 80, 11, -2280, -2180, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2200645", "summon", 0, 0);
                                                  cm.npc_ChangeController(3003666, "oid=2200646", -2101, 80, 14, -2151, -2051, 1, true, 0, false);
                                                  cm.npc_SetSpecialAction("oid=2200646", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -3010, 150);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.userSetFieldFloating(993060017, 2, 2, 1000);
                                                              cm.sendNormalTalk_Bottom("#face0#哦，哎呀……好像又有不速之客。\r\n接下去的事情等离开这里之后再说。", 37, 3003651, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.updateInfoQuest(35606, "enter2=1;enter=1");
                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=2200636");
                                                                        cm.npc_LeaveField("oid=2200636");
                                                                        cm.playerMessage(5, "为了前往圣地，必须把路口挡道的怪物全部干掉！");
                                                                        cm.npc_LeaveField("oid=2200640");
                                                                        cm.npc_LeaveField("oid=2200640");
                                                                        cm.npc_LeaveField("oid=2200641");
                                                                        cm.npc_LeaveField("oid=2200641");
                                                                        cm.npc_LeaveField("oid=2200642");
                                                                        cm.npc_LeaveField("oid=2200642");
                                                                        cm.npc_LeaveField("oid=2200643");
                                                                        cm.npc_LeaveField("oid=2200643");
                                                                        cm.npc_LeaveField("oid=2200644");
                                                                        cm.npc_LeaveField("oid=2200644");
                                                                        cm.npc_LeaveField("oid=2200645");
                                                                        cm.npc_LeaveField("oid=2200645");
                                                                        cm.npc_LeaveField("oid=2200646");
                                                                        cm.npc_LeaveField("oid=2200646");
                                                                        var O = cm.getEventManager('月桥_战斗4');
                                                                        O.startInstance(cm.getPlayer(), cm.getMap());
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