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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1950, 280);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3005102, "oid=620295", -1770, 315, 10, -1820, -1720, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=620295", "summon", 0, 0);
        cm.npc_ChangeController(3005108, "oid=620296", -2095, 315, 11, -2145, -2045, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620296", 'summon', 0, 0);
        cm.npc_ChangeController(3005120, "oid=620297", -2220, 315, 14, -2270, -2170, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620297", "summon", 0, 0);
        cm.npc_ChangeController(3005121, 'oid=620298', -2290, 315, 14, -2340, -2240, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620298", "summon", 0, 0);
        cm.npc_ChangeController(3005117, "oid=620299", -2095, 315, 11, -2145, -2045, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620299", "summon", 0, 0);
        cm.npcMove(3005117, 0, -90, 0);
        cm.Npc_Fadeout("oid=620299", 0, 0);
        cm.Npc_Fadeout("oid=620296", 0, 0);
        cm.Npc_Fadeout("oid=620297", 0, 0);
        cm.Npc_Fadeout("oid=620298", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1700, 315);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=620295", -1, 150, 150);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
            cm.inGameDirectionEvent_同时移动镜头和人(1, 150, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/6/Female/1", 100);
              cm.sendNormalTalk_Bottom("#face0#这个臭流氓，钱都不好好还，到底上哪儿瞎转悠去了！", 37, 3005108, false, true, 1);
            } else {
              if (status === V++) {
                cm.Npc_Fadeout('oid=620296', 255, 800);
                cm.Npc_Fadeout("oid=620297", 255, 800);
                cm.Npc_Fadeout('oid=620298', 255, 800);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/6/Female/2", 100);
                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（糟了……）", 37, 3005102, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/6/Female/3", 100);
                    cm.sendNormalTalk_Bottom("#face0#我还需要点时间，今天之前是绝对……", 37, 3005102, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(1, 120, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/6/Female/4", 100);
                        cm.sendNormalTalk_Bottom("#face0#这位可不是什么流氓，他是格里。", 37, 3005100, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/6/Female/5", 100);
                          cm.sendNormalTalk_Bottom("#face0#嗯？你是谁？是个生面孔嘛？", 37, 3005108, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/6/Female/6", 100);
                            cm.sendNormalTalk_Bottom("#face0#我叫啦啦，是格里的新朋友。", 37, 3005100, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/6/Female/7", 100);
                              cm.sendNormalTalk_Bottom("#face0#唔……", 37, 3005102, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/6/Female/8", 100);
                                cm.sendNormalTalk_Bottom("#face0#你说和这个家伙做朋友？可笑至极。", 37, 3005108, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/6/Female/9", 100);
                                  cm.sendNormalTalk_Bottom("#face0#你该不会忘了我们的契约书吧？", 37, 3005108, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/6/Female/10", 100);
                                    cm.sendNormalTalk_Bottom("#face0#若是每个月交不出利息，就要再加上对应的利息！", 37, 3005108, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/6/Female/11", 100);
                                      cm.sendNormalTalk_Bottom("#face0#打从一开始，那份契约书就很荒唐……", 37, 3005102, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.Npc_Fadeout("oid=620299", 255, 1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice6.img/lara/6/Female/12", 100);
                                          cm.sendNormalTalk_Bottom("#face3#……诶？", 37, 3005100, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/6/Female/13", 100);
                                            cm.sendNormalTalk_Bottom("#face0#什、什么？", 37, 3005102, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/6/Female/21", 100);
                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3005117, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/water", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/6", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice6.img/lara/6/Female/14", 100);
                                                      cm.sendNormalTalk_Bottom("#face2#契……契约书……这是破坏公文！", 37, 3005108, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/6/Female/20", 100);
                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3005117, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice6.img/lara/6/Female/15", 100);
                                                          cm.sendNormalTalk_Bottom("#face2#所有人去抓住那帮家伙！", 37, 3005108, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#还、还是先逃再说吧！", 37, 3005102, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_屏幕渐入插图消失A(['00'], [2000]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_LeaveField("oid=620295");
                                                                cm.npc_LeaveField("oid=620296");
                                                                cm.npc_LeaveField("oid=620297");
                                                                cm.npc_LeaveField("oid=620298");
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -970, 280);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(3005102, "oid=620320", -1250, 315, 8, -1300, -1200, 0, true, 0, false);
                                                                  cm.npc_SetSpecialAction("oid=620320", "summon", 0, 0);
                                                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), -1150, 315);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(3005120, "oid=620321", -1430, 315, 9, -1480, -1380, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=620321", "summon", 0, 0);
                                                                    cm.npc_ChangeController(3005121, "oid=620322", -1345, 315, 9, -1395, -1295, 0, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=620322", 'summon', 0, 0);
                                                                    cm.Npc_Fadeout("oid=620321", 0, 0);
                                                                    cm.Npc_Fadeout("oid=620322", 0, 0);
                                                                    cm.npc_SetForceMove("oid=620320", 1, 150, 150);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 150, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_setForceFlip("oid=620320", -1);
                                                                        cm.sendNormalTalk_Bottom("#face2#怎么又突然冒出元素灵来了！！", 37, 3005102, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice6.img/lara/6/Female/17", 100);
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.sendNormalTalk_Bottom("#face0#嘿嘿，是啊，可能这群小河灵觉得玩肥皂泡很有意思吧。", 37, 3005100, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice6.img/lara/6/Female/18", 100);
                                                                            cm.sendNormalTalk_Bottom("#face2#都这样了，你笑什么啊！", 37, 3005102, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice6.img/lara/6/Female/19", 100);
                                                                                cm.sendNormalTalk_Bottom("#face0#各位，快过来这里！", 37, 3005103, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#切……眼下情况不太妙，还是先躲进这里吧。", 37, 3005102, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#在哪儿呢？找到踪迹了吗？", 37, 3005120, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#先从这里开始搜吧！", 37, 3005121, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove('oid=620321', 1, 500, 200);
                                                                                          cm.npc_SetForceMove("oid=620322", 1, 500, 200);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else if (status === V++) {
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.npc_LeaveField("oid=620299");
                                                                                            cm.npc_LeaveField("oid=620320");
                                                                                            cm.npc_LeaveField('oid=620321');
                                                                                            cm.npc_LeaveField("oid=620322");
                                                                                            cm.dispose();
                                                                                            cm.warp(993165511, 0, true);
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