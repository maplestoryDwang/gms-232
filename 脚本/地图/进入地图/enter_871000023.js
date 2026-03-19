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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400932, "oid=1704943", -520, 295, 8, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=1704943", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -450, 295);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400935, "oid=1704944", -150, 295, 5, -200, -100, 0, true, false);
      cm.npc_SetSpecialAction("oid=1704944", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=1704945", -25, 295, 7, -75, 25, 1, true, false);
      cm.npc_SetSpecialAction("oid=1704945", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -450, 320]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#在金盏花盛开的村庄森林里……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNewEffects(12, [3000, -200, 320, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b特鲁迪！", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=1704944"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                  cm.npc_setForceFlip("oid=1704944", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#勇士？", 37, 9400926, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=1704943", 1, 150, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b你在这里干什么呢？大家都很担心你。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嘿嘿，我正和凯蒂一起制作花束呢~~~ ", 37, 9400926, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=1704944"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                              cm.sendNormalTalk_Bottom("#b花束？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯嗯……", 37, 9400926, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我要送给善良的幽灵。", 37, 9400926, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b……善良的幽灵？", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#你不是说幽灵们会在万圣节时出来玩嘛。", 37, 9400926, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#特鲁迪本来好怕怕……但是我想到，雪莉大婶可能也会回来……", 37, 9400926, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b雪莉大婶是谁？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#她是凯尼斯大叔喜欢的人。她先上天堂了，凯尼斯大叔很伤心呢。", 37, 9400926, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……是凯尼斯的夫人。", 37, 9400923, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#雪莉大神说不定会在万圣节时回家，我想在大婶的照片旁边放一束花，那样她一定会很高兴的，对吧？", 37, 9400926, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [3000, 0, 0, 1, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1704943"], [3000, 0, 0, 1, 1, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呃……唔嗯……特鲁迪真是好孩子。", 37, 9400923, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b特鲁迪……怎么想到这个的呢……", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#嘿嘿，要是有魔女和怪物来，勇士你会把他们都打跑吧？", 37, 9400926, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b那当然。", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#谢谢你呀，勇士！你要和特鲁迪一起制作花束吗？", 37, 9400926, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b好呀！", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#我帅气艾丹也要加入！", 37, 9400923, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.updateInfoQuest(64696, "chk=1;NpcSpeech=94009551;enter=1;give=1");
                                                                      cm.forceCompleteQuest(64696, '');
                                                                      cm.forceStartQuest(64697, '');
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(19, [0]);
                                                                        } else if (status === V++) {
                                                                          cm.warp(871000024, 0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=1704943");
                                                                          cm.npc_LeaveField("oid=1704944");
                                                                          cm.npc_LeaveField("oid=1704945");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;