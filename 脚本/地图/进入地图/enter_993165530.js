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
      cm.npc_ChangeController(3005120, 'oid=619854', 394, 268, 4, 344, 444, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=619854", "summon", 0, 0);
      cm.npc_ChangeController(3005121, 'oid=619855', 680, 277, 5, 630, 730, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=619855", "summon", 0, 0);
      cm.npc_ChangeController(3005102, 'oid=619856', 1520, 299, 13, 1470, 1570, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=619856", "summon", 0, 0);
      cm.npc_ChangeController(3005102, "oid=619857", 800, 299, 5, 750, 850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=619857", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 539, 283);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.Npc_Fadeout('oid=619857', 0, 10);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 617, 272);
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
            cm.sendNormalTalk_Bottom("#face0#不是的，我那个说要回来的朋友来晚了，我一直在等呢。", 36, 3005100, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哪个朋友？", 36, 3005120, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#是格里！", 36, 3005100, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……格里？该不会是后巷那头狼吧？", 36, 3005120, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#噗嗤，你朋友居然是那种家伙，你是不是搞错了？", 36, 3005121, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#为什么？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#一看就是被那家伙洗劫了贵重物品。", 36, 3005120, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#看来要禀报领主大人，罪加一等才是，\r\n我就说嘛，那家伙哪儿有办法还债啊。", 36, 3005120, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1506, 272);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=619856"], [0, 0, -20, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005102, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#果然对那些警卫员……", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#不会的，格里一定会来的。", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 517, 272);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.Npc_Fadeout("oid=619856", 0, 10);
                                            cm.sendNormalTalk_Bottom("#face0#最好趁早举报那个流氓。", 36, 3005120, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#谢谢你提出要帮忙！\r\n不过，格里不是什么流氓，他是我的朋友。", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#再说珍贵的东西也是可以托付给朋友的！", 36, 3005100, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#可是那个家伙……", 36, 3005120, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#行了，看来是不撞南墙不回头啊。我们还是去吃饭吧。", 36, 3005121, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.Npc_Fadeout("oid=619854", 0, 1000);
                                                      cm.Npc_Fadeout("oid=619855", 0, 1000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 806, 272);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Npc_Fadeout("oid=619857", 255, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……喂。", 36, 3005102, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice6.img/lara/5/Female/0", 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#诶？格里！", 36, 3005100, false, true, 1);
                                                                } else if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.setStandAloneMode(false);
                                                                  cm.forceCompleteQuest(36210);
                                                                  cm.gainExp(893);
                                                                  cm.gainExp(2706);
                                                                  cm.updateInfoQuest(36200, "50=h0;51=h0;52=h1;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                                                                  cm.OnStartNavigation(410004000, 1, '3005152', 36210);
                                                                  cm.npc_LeaveField("oid=619854");
                                                                  cm.npc_LeaveField('oid=619855');
                                                                  cm.npc_LeaveField("oid=619856");
                                                                  cm.npc_LeaveField("oid=619857");
                                                                  cm.dispose();
                                                                  cm.warp(410004000, 0, true);
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