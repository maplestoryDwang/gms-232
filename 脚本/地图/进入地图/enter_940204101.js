var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(3002114, "oid=258438", -950, -89, 192, -1000, -900, 0, false, false);
      cm.npc_ChangeController(3002123, "oid=258439", -596, -102, 193, -646, -546, 1, false, false);
      cm.npc_ChangeController(3002116, "oid=258440", -704, -106, 193, -754, -654, 1, false, false);
      cm.npc_ChangeController(3002115, "oid=258441", -846, -110, 193, -896, -796, 0, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -1480, -495);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3002110, "oid=35257016", -757, -400, 87, -807, -707, 1, true, false);
        cm.npc_SetSpecialAction("oid=35257016", "summon", 0, 0);
        cm.Npc_Fadeout("oid=35257016", 0, 0);
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.inGameDirectionEvent_AskAnswerTime(100);
        cm.effect_Text(["#fn黑体##fs18#不久前，尖耳狐狸村"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5500, 1000, 5500, -745, -105);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#阿琅最近总是躲在屋里吗？", 37, 3002114, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是的……一定是遇到了什么烦心事……嗯？", 37, 3002123, true, true);
                    } else {
                      if (status === V++) {
                        cm.Npc_Fadeout("oid=35257016", 255, 100);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/npc_doldol", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=35257016", "appear", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#是玛鲁！你好？", 37, 3002123, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#玛鲁！跟我们一起玩吧！\r\n一起玩过家家怎么样？", 37, 3002116, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7##r一起玩？#k", 37, 3002110, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -745, -160);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face11#不，不行！我现在没时间玩过家家！", 37, 3002110, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5#大家听着！你们愿意和我一起，成为#b尖耳守备队的一员#k吗！？", 37, 3002110, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#什么嘛？又来了？", 37, 3002115, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face7#跟我一起到狐狸村外面去修炼吧！", 37, 3002110, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#但是那样会被大人骂的……", 37, 3002123, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#听说村外有很多可怕的怪物……", 37, 3002114, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#别去做那种危险的事，跟我们一起玩吧！", 37, 3002116, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face11#哼！全都是胆小鬼！", 37, 3002110, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face15#也对！在得到#b狐神宠爱#k的玛鲁大人的勇气面前，大家都变得胆小了！", 37, 3002110, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face15#别担心！尖耳守备队有我一个人就够了！哈哈哈！", 37, 3002110, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#哈哈哈哈哈！！", 37, 3002110, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3002114, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.dispose();
                                                                  cm.warp(940204102, 0);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;