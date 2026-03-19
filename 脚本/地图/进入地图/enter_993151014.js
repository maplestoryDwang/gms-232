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
      cm.npc_ChangeController(3004411, "oid=377761", -1, -147, 0, -51, 49, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3004430, "oid=63493395", -67, -69, 17, -117, -17, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=63493395", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=63493395", "special11", -1, 1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 0, -116);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face9#面对任何境遇也绝不心生猜疑。", 37, 3004430, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face9#面临任何诱惑都能够安分守己。", 37, 3004430, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face9#身为光荣的圣骑士，我再次起誓，将永远效忠于您。", 37, 3004430, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=63493395", "special12", -1, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -130);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=63493395");
                              cm.npc_LeaveField("oid=63493395");
                              cm.npc_ChangeController(3004430, "oid=63495484", -68, -140, 6, -118, -18, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=63495484", 'summon', 0, 0);
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face0#……', 37, 3004430, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##r暗红的阴霾#k正在涌来。", 37, 3004430, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#但是如果奇勒摩成为圣剑主人……那恐怕将会上演另一种形式的惨剧……", 37, 3004430, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.OverlapScreenDetail19(0, 1000, 1500, 1);
                                            cm.npc_SetSpecialAction("oid=63495484", "special19", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#所以，如果我无法亲自守护圣地……", 37, 3004430, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face5#塞伦。经历了那样的事情，你还迷信太阳神吗？", 37, 3004432, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Loland/18", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face5#你没忘记吧？\r\n电闪雷鸣的那一天，近天峰上烈火燃起，百姓们在痛苦中死去……", 37, 3004432, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Loland/19", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face5#我们亲身经历的那些事，亲眼目睹的那些惨状。", 37, 3004432, true, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Loland/20", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction23.img/illust2/7", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face5#我们的战友，直到最后一个人倒下，都没有出现什么光芒。", 37, 3004432, false, true);
                                                                    cm.effect_Voice("Voice5.img/CH2/Loland/21", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#我才想问你呢。\r\n你看着那些为一把毫无用处的废铁死去的同僚，就没有什么领悟吗？", 37, 3004432, true, true);
                                                                          cm.effect_Voice("Voice5.img/CH2/Loland/10", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                  cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.OverlapScreenDetail19(0, 1000, 1500, 1);
                                                                                    cm.setNpcSpecialActionReset("oid=63495484");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#罗兰德……", 37, 3004430, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face5#我……", 37, 3004430, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else if (status === V++) {
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.warp(993151015, 0, false);
                                                                                                    cm.npc_LeaveField("oid=63495484");
                                                                                                    cm.npc_LeaveField("oid=63495484");
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
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}