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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3859068", 1410, -30, 19, 1360, 1460, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3859068", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3859069", 820, -40, 5, 770, 870, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3859069", "summon", 0, 0);
      cm.npc_ChangeController(9111061, "oid=3859070", 330, -40, 15, 280, 380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3859070", "summon", 0, 0);
      cm.npc_ChangeController(9111060, "oid=3859071", 240, -40, 16, 190, 290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3859071", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859069"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859070"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859071"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.sendNormalTalk_Bottom("(呃……这样的话应该能引起大家的瞩目了吧？)", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哦，是传说之樱桃……！！！", 37, 9111060, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#噢噢，传说之樱桃！", 37, 9111061, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#噢噢噢！", 37, 9111060, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("(狐妖们有反应了……！)", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=3859068", -1, 715, 180);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#是守护者！守护者回来了！！！", 37, 9111061, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#呜哇啊啊啊！", 37, 9111060, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#(干得漂亮！！)", 37, 9111007, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue("不久后。", 1);
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
                                            cm.sendNormalTalk_Bottom("#face0#我们要以守护者为榜样，勤加修炼！", 37, 9111061, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#修炼吧！", 37, 9111060, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#守护者！我们也想学习你的技能奥义！", 37, 9111061, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们想学！", 37, 9111060, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#请把技能教给我们吧！", 37, 9111061, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#(#h0#！成功了！狐妖们都把#h0#你当成崇拜对象呢！)", 37, 9111007, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("好，不过首先需要准备点东西。", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=3859069"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3859070"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3859071"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("在这种地面上修炼不行，得收集些尽可能坚硬的岩石，在岩石堆上修炼！", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859069"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859070"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3859071"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.sendNormalTalk_Bottom("#face0#噢噢……守护者的技能从修炼阶段开始就跟人家不一样啊！", 37, 9111061, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我去收集吧。我要给你们树立好榜样！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#耶-！守护者最棒！！那我们等你回来！", 37, 9111060, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("(好，那我就先为训练收集些足够坚硬的岩石吧。)", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else if (status === V++) {
                                                                      cm.warp(800023015, 0, false);
                                                                      cm.npc_LeaveField("oid=3859068");
                                                                      cm.npc_LeaveField("oid=3859068");
                                                                      cm.npc_LeaveField("oid=3859069");
                                                                      cm.npc_LeaveField("oid=3859069");
                                                                      cm.npc_LeaveField("oid=3859070");
                                                                      cm.npc_LeaveField("oid=3859070");
                                                                      cm.npc_LeaveField("oid=3859071");
                                                                      cm.npc_LeaveField("oid=3859071");
                                                                      cm.eventSKill(0);
                                                                      cm.setInGameDirectionMode(false, true, false);
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