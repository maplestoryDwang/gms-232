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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -982, 728);
      cm.npc_ChangeController(3001310, 'oid=722465', -1060, 790, 2, -1110, -1010, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=722465', "summon", 0, 0);
      cm.npc_ChangeController(3001311, "oid=722466", -1005, 790, 2, -1055, -955, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=722466", "summon", 0, 0);
      cm.npc_ChangeController(3001307, 'oid=722467', -740, 790, 2, -790, -690, 1, true, 500, false);
      cm.npc_SetSpecialAction('oid=722467', "summon", 0, 0);
      cm.npc_ChangeController(3001308, "oid=722468", -670, 790, 2, -720, -620, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=722468", "summon", 0, 0);
      cm.npc_ChangeController(3001300, "oid=722469", -850, 790, 2, -900, -800, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=722469", "summon", 0, 0);
      cm.npc_ChangeController(3001346, "oid=722470", -1165, 790, 2, -1215, -1115, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=722470', "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove('oid=722465', 1, 150, 150);
        cm.npc_SetForceMove('oid=722466', 1, 150, 150);
        cm.npc_SetForceMove("oid=722467", 1, 170, 150);
        cm.npc_SetForceMove("oid=722468", 1, 170, 150);
        cm.npc_SetForceMove("oid=722469", 1, 170, 170);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 230);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=722465", -1);
              cm.npc_setForceFlip("oid=722466", -1);
              cm.npc_setForceFlip("oid=722467", -1);
              cm.npc_setForceFlip("oid=722468", -1);
              cm.npc_setForceFlip("oid=722469", -1);
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_close", 100);
                  cm.setNpcSpecialActionReset("oid=722470");
                  cm.npc_SetSpecialAction("oid=722470", "disappeared", -1, 1);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField('oid=722470');
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=722465'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=722466'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=722469"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=722467"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=722468"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                        cm.sendNormalTalk_Bottom("#face2#呃啊，水晶门……！！！", 37, 3001310, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#难道当初不该寻找返回村庄的路？", 37, 3001311, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#再也……回不去了……", 37, 3001308, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#不！我早晚会再回来的！", 37, 3001307, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.npc_setForceFlip('oid=722465', 1);
                                cm.npc_setForceFlip("oid=722466", 1);
                                cm.npc_setForceFlip("oid=722469", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#在此之前……大家要一起努力！", 37, 3001307, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#好！那跟伊利温一起寻找古代神之圣所吧！", 37, 3001310, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#可是……我很可能会连累你们。", 37, 3001354, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#那也说不定有你在，我们就能脱离危险了，不是吗？", 37, 3001308, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#平民翼人青少年探险队！如果我们联起手来，必定所向披靡！哈哈！", 37, 3001307, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#切，那好吧。", 37, 3001311, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                              cm.npc_setForceFlip("oid=722469", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=722465"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=722469"], [0, 10, -30, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", 'oid=722467'], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", 'oid=722468'], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                cm.sendNormalTalk_Bottom("#face0#我怎么可能知道返回村庄的办法！你该不会想把我一个人丢在这吧？", 37, 3001311, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
                                                  cm.sendNormalTalk_Bottom("#face0#那个看起来不怎么样的探险队，我也要加入。", 37, 3001311, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#伙伴们……", 37, 3001354, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                      cm.npc_setForceFlip('oid=722469', 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，只要我们齐心协力，一定能……找到古代神之圣所！", 37, 3001354, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#并且也不会孤单。", 37, 3001310, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face5#谢谢大家。", 37, 3001354, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#啊~~不过这是哪啊？这还是我头一次离开阿叙隆！", 37, 3001307, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我也是头一次来这里。", 37, 3001308, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=722467", 1);
                                                                    cm.npc_setForceFlip("oid=722468", 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#出口在这边。来，快走吧。", 37, 3001354, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#那家伙干嘛的，你叫来的吗？", 37, 3001311, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#感觉蛮靠谱的……快去看看吧！", 37, 3001307, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove('oid=722465', 1, 400, 130);
                                                                            cm.npc_SetForceMove("oid=722466", 1, 400, 130);
                                                                            cm.npc_SetForceMove("oid=722467", 1, 400, 150);
                                                                            cm.npc_SetForceMove("oid=722468", 1, 400, 150);
                                                                            cm.npc_SetForceMove('oid=722469', 1, 400, 150);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(10);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.setStandAloneMode(false);
                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=722465");
                                                                                cm.npc_LeaveField("oid=722466");
                                                                                cm.npc_LeaveField('oid=722467');
                                                                                cm.npc_LeaveField('oid=722468');
                                                                                cm.npc_LeaveField('oid=722469');
                                                                                cm.dispose();
                                                                                cm.warp(940202036, 0, true);
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