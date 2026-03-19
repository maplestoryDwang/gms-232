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
      cm.npc_ChangeController(1540476, 'oid=34948', -2312, -237, 15, -2347, -2280, 0, false, 0, false);
      cm.npc_ChangeController(1540476, "oid=34949", -2362, -237, 15, -2362, -2312, 0, false, 0, false);
      cm.npc_ChangeController(1540476, "oid=34950", -1324, -237, 33, -1374, -1324, 1, false, 0, false);
      cm.npc_ChangeController(1540476, "oid=34951", -1272, -237, 17, -1289, -1222, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540450, "oid=22716753", -2230, -400, 10, -2280, -2180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716753", 'summon', 0, 0);
      cm.npc_ChangeController(1540451, "oid=22716754", -2190, -350, 3, -2240, -2140, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716754", 'summon', 0, 0);
      cm.npc_ChangeController(1540452, "oid=22716755", -2300, -250, 15, -2350, -2250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716755", "summon", 0, 0);
      cm.npc_ChangeController(1540453, "oid=22716756", -1870, -250, 26, -1920, -1820, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716756", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=22716757", -2380, -400, 9, -2430, -2330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716757", "summon", 0, 0);
      cm.npc_ChangeController(1540462, "oid=22716758", -2420, -400, 9, -2470, -2370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716758", "summon", 0, 0);
      cm.npc_ChangeController(1540463, "oid=22716759", -2450, -250, 16, -2500, -2400, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716759", 'summon', 0, 0);
      cm.npc_ChangeController(1540464, "oid=22716760", -2130, -400, 10, -2180, -2080, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716760", "summon", 0, 0);
      cm.npc_ChangeController(1540465, "oid=22716761", -2090, -400, 10, -2140, -2040, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716761", 'summon', 0, 0);
      cm.npc_ChangeController(1540466, "oid=22716762", -2410, -250, 16, -2460, -2360, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716762", "summon", 0, 0);
      cm.npc_ChangeController(1540480, "oid=22716763", -2250, -250, 27, -2300, -2200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22716763", "summon", 0, 0);
      cm.npc_ChangeController(1540478, "oid=22716764", -2500, -250, 23, -2550, -2450, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22716764", "summon", 0, 0);
      cm.npc_ChangeController(1540479, "oid=22716765", -2030, -400, 10, -2080, -1980, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22716765", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 50, -2079, -237);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("怎么找都找不到啊。\r\n看来他是从这艘船上消失了。", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1540467, "oid=22717069", -2650, -250, 28, -2700, -2600, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=22717069", "summon", 0, 0);
                cm.npc_SetForceMove("oid=22717069", -1, 1000, 130);
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 50, -1869, -237);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716753"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716754"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716755"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716756"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716757"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716758"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716759"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716760"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716761"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716762"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716763"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716764"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=22716765"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=22716756", 1);
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.sendNormalTalk_Bottom("你们不觉得奥尔卡有些胖吗？", 37, 1540451, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                          cm.effect_NormalSpeechBalloon(" !", 1, 0, 1, 1000, 0, 0, 0, 0, 4, 1540467, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("脸蛋不怎么样，说话语气也很差，奥尔卡真的是一点魅力都没有。", 37, 1540451, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon(" !", 0, 0, 1, 1000, 0, 0, 0, 0, 4, 1540467, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=22717069", -1);
                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/12", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2800);
                                cm.effect_NormalSpeechBalloon("我的奥尔卡才不是这样的呢!!!", 0, 0, 1, 2000, 0, 0, 0, 0, 4, 1540467, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=22717069");
                                  cm.npc_LeaveField("oid=22717069");
                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/3110001/Use", 100);
                                  cm.npc_ChangeController(1540460, "oid=22717738", -1600, -250, 30, -1650, -1550, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=22717738", "summon", 0, 0);
                                  cm.npc_SetSpecialAction("oid=22717738", "boom", -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset("oid=22717738");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("该, 该死!被发现了吗?那样的话……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540460, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon('人偶分身术!', 0, 0, 0, 2000, 0, 0, 0, 0, 4, 1540460, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/shuffle", 100);
                                          cm.npc_SetSpecialAction("oid=22717738", "summon2", -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=22717738");
                                            cm.npc_SetSpecialAction("oid=22717738", "shuffle", -1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(2100);
                                          } else {
                                            if (status === V++) {
                                              cm.setNpcSpecialActionReset("oid=22717738");
                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/1", 100);
                                              cm.npc_SetSpecialAction("oid=22717738", "hehe", -1, 1);
                                              cm.npc_ChangeController(1540468, "oid=22718350", -1490, -250, 31, -1540, -1440, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=22718350", "summon", 0, 0);
                                              cm.npc_ChangeController(1540477, "oid=22718351", -1710, -250, 29, -1760, -1660, 1, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=22718351", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              cm.effect_NormalSpeechBalloon("嘻嘻嘻", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540460, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon("嘻嘻嘻", 1, 0, 0, 2000, 0, 0, -75, 0, 4, 1540468, cm.getPlayer().getId());
                                              cm.effect_NormalSpeechBalloon('嘻嘻嘻', 1, 0, 0, 2000, 0, 0, -75, 0, 4, 1540477, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/10", 100);
                                                cm.sendNormalTalk_Bottom("哈哈哈！！\r\n你们肯定不知道哪个是真的我吧？", 37, 1540460, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=22716763", 1, 400, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/12101021/Use", 100);
                                                    cm.npc_SetSpecialAction("oid=22716763", "attack", -1, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(750);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.setNpcSpecialActionReset("oid=22717738");
                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/2", 100);
                                                      cm.npc_SetSpecialAction("oid=22717738", "fire1", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1650);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNpcSpecialActionReset("oid=22716763");
                                                        cm.npc_ChangeController(1540468, "oid=22719114", -1600, -250, 30, -1650, -1550, 1, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=22719114", 'summon', 0, 0);
                                                        cm.npc_SetSpecialAction("oid=22719114", "fire2", -1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/fran/13", 100);
                                                        cm.setNpcSpecialActionReset("oid=22717738");
                                                        cm.npc_LeaveField("oid=22717738");
                                                        cm.npc_LeaveField("oid=22717738");
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                        cm.forceCompleteQuest(33148);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(350024701, 0, true);
                                                            cm.npc_LeaveField("oid=22716753");
                                                            cm.npc_LeaveField("oid=22716753");
                                                            cm.npc_LeaveField("oid=22716754");
                                                            cm.npc_LeaveField("oid=22716754");
                                                            cm.npc_LeaveField("oid=22716755");
                                                            cm.npc_LeaveField("oid=22716755");
                                                            cm.npc_LeaveField("oid=22716756");
                                                            cm.npc_LeaveField("oid=22716756");
                                                            cm.npc_LeaveField("oid=22716757");
                                                            cm.npc_LeaveField("oid=22716757");
                                                            cm.npc_LeaveField("oid=22716758");
                                                            cm.npc_LeaveField("oid=22716758");
                                                            cm.npc_LeaveField("oid=22716759");
                                                            cm.npc_LeaveField("oid=22716759");
                                                            cm.npc_LeaveField("oid=22716760");
                                                            cm.npc_LeaveField("oid=22716760");
                                                            cm.npc_LeaveField("oid=22716761");
                                                            cm.npc_LeaveField("oid=22716761");
                                                            cm.npc_LeaveField("oid=22716762");
                                                            cm.npc_LeaveField("oid=22716762");
                                                            cm.npc_LeaveField("oid=22716763");
                                                            cm.npc_LeaveField("oid=22716763");
                                                            cm.npc_LeaveField("oid=22716764");
                                                            cm.npc_LeaveField("oid=22716764");
                                                            cm.npc_LeaveField("oid=22716765");
                                                            cm.npc_LeaveField("oid=22716765");
                                                            cm.npc_LeaveField("oid=22718350");
                                                            cm.npc_LeaveField("oid=22718350");
                                                            cm.npc_LeaveField("oid=22718351");
                                                            cm.npc_LeaveField("oid=22718351");
                                                            cm.npc_LeaveField("oid=22719114");
                                                            cm.npc_LeaveField("oid=22719114");
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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