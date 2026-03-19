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
      cm.forceCompleteQuest(100456);
      cm.updateInfoQuest(100406, "complete=1");
      cm.npc_ChangeController(9062255, "oid=30261504", 50, 16, 6, 0, 100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=30261504", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=30261504", "special", -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -78, 20);
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
            cm.sendNormalTalk_Bottom("苏菲莉亚，#b舞会#k就要开始了。", 56, 0, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……爸爸他一直把自己关在房间里埋头做人偶。\r\n我一直在房间里等待着不会来看的父亲……", 37, 9062255, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我们#b最终连一句话都没有说#k，就这样分开了……\r\n明明我们距离是那么地近……", 37, 9062255, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("苏菲莉亚……", 56, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我知道你很难过……但是现在没多少时间了。", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我们要快点把客人们送去#b死者世界#k才行。", 56, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b#h0##k，你可不是死人。", 37, 9062255, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这份无力感，不安。活着的你是无法感同身受的。 ", 37, 9062255, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#所以你才能说得如此轻松。", 37, 9062255, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#如果 #b死者世界#k不存在呢？", 37, 9062255, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#如果死了什么都留不下呢？", 37, 9062255, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#明明距离这么近……\r\n可是父亲最终还是#b没有察觉的我的存在#k，就这样不见了。", 37, 9062255, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("苏菲莉亚……", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=30261504");
                                      cm.sendNormalTalk_Bottom("#face0#没错，爸爸都在这里的话……说不定妈妈也还在呢。", 37, 9062255, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我不会摘掉面具的……我要和假面绅士一直留在这里……", 37, 9062255, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("可是，苏菲莉亚……", 56, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#对不起。明明都走到这一步了……可是我……真的……很害怕。", 37, 9062255, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=30261504", 1, 200, 150);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.Npc_Fadeout("oid=30261504", 0, 1500);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("苏菲莉亚……", 56, 0, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.sendNormalTalk_Bottom("嗯？这是什么？", 56, 0, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这不是#b人偶#k吗？", 56, 0, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("粉色头发，红丝带，非常用心制作的衣服。", 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -111, -59);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("没错……！这是苏菲莉亚的父亲一直在做的#b苏菲莉亚人偶#k。", 56, 0, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("即便身中强大的诅咒……\r\n#b也没有忘记女儿#k……", 56, 0, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("还有……自己#b明知难逃一死#k，却还是不顾一切地袭击假面绅士……他最终保护了苏菲莉亚……", 56, 0, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -78, 20);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("这个……一定要快点把这个事实告诉苏菲莉亚才行！", 56, 0, false, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                              cm.fieldEffect_ProcessOnOffLayer("intro", "Effect/EventEffect.img/2019Halloween/finishEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.npc_LeaveField("oid=30261504");
                                                                                  cm.dispose();
                                                                                  cm.warp(993175400, 0, false);
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}