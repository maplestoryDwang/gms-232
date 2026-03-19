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
      cm.fieldEffect_PlayBGM("Bgm43/Unexpected crisis", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 507, 230);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074106, "oid=2588393", 550, 178, 8, 500, 600, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588393", "summon", 0, 0);
        cm.npc_ChangeController(2074107, "oid=2588394", 350, 178, 11, 300, 400, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588394", 'summon', 0, 0);
        cm.npc_ChangeController(2074100, "oid=2588395", 408, 183, 10, 358, 458, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2588395", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2588393", "dies", -1, 1);
        cm.npc_SetSpecialAction("oid=2588394", "normal", -1, 1);
        cm.npc_SetSpecialAction("oid=2588395", "pain3", -1, 1);
        cm.sendNormalTalk_Bottom("额……好生气啊，好委屈。", 37, 2074132, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("兴夫，你这个混账东西！", 37, 2074002, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("古语有云善恶终有报，\r\n看来今天就是你偿还罪责的时候了，嘿嘿嘿。\r\n居然胆敢威胁我，往我妻子脸上抹饭粒？", 37, 2074002, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("为什么我，整天被饭勺打脸，忍饥挨饿，痛苦难耐，\r\n还是得……整日忍受这一切？为什么啊，为什么。", 37, 2074132, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("给我闭嘴，混账！我看你还没清醒啊……", 37, 2074002, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(200, 2200, 0, 507, 230);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=2588395", "ang", -1, 1);
                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                    cm.npc_setForceFlip("oid=2588395", -1);
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2588393"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2588394"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face5#啊，真是吵死了！", 37, 2074100, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face5#虽说兴夫有问题，但乐夫大叔也没做对什么啊！\r\n你怎么敢如此大放厥词？", 37, 2074100, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("那，那个……真是的，年纪轻轻就目中无人了是吧！\r\n我哪有做错什么？", 37, 2074002, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face5#整天自己不做好事，好吃好喝地过日子，却让弟弟整日苦哈哈地老实过日子。\r\n这才让兴夫大叔生气的嘛？", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#本来只要说一句对不起，道一次歉就可以解决的事情……你真是越来越过分了！", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("…………", 37, 2074132, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("咳，咳！真是的，那我到底做错了什么？\r\n我多善良啊，我把我的饭粒都分给兴夫了……", 37, 2074002, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2588395", 1);
                                    cm.sendNormalTalk_Bottom("#face6#啊，实在是看不下去了！\r\n兴夫大叔，麻烦把那边的饭勺递给我一下！", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=2588395");
                                        cm.npc_ChangeController(2074122, "oid=2588631", 550, 183, 8, 500, 600, 1, true, 500, false);
                                        cm.npc_SetSpecialAction("oid=2588631", 'summon', 0, 0);
                                        cm.npc_SetForceMove("oid=2588631", -1, 130, 70);
                                        cm.setNpcSpecialActionReset("oid=2588394");
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("咳，你，你要做什么！！", 37, 2074107, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/punch", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('哎！', 37, 2074109, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2588394", "die", -1, 1);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哪儿来的……力气……", 37, 2074109, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=2588631");
                                                              cm.npc_ChangeController(2074100, "oid=2588690", 408, 183, 10, 358, 458, 1, true, 500, false);
                                                              cm.npc_SetSpecialAction("oid=2588690", "summon", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=2588690", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2588690", -1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=2588690", 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#……啊，我到底做了什么……", 37, 2074100, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('……', 37, 2074132, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face2#该死，实在是太让人生气了我……", 37, 2074100, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("哼……和我……所遭遇的相比……不过是九牛一毛。", 37, 2074132, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#话说回来乐夫已经晕过去了……该拿他怎么办呢。", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.updateInfoQuest(30900, '05=1');
                                                                                cm.forceStartQuest(30911, '1');
                                                                                cm.forceCompleteQuest(30911);
                                                                                cm.gainExp(369355);
                                                                                cm.forceForfeitQuest(30911);
                                                                                cm.updateInfoQuest(30911, '');
                                                                                cm.updateInfoQuest(30405, "end=1");
                                                                                cm.updateInfoQuest(30405, "gExpCheck=1;end=1");
                                                                                cm.forceCompleteQuest(30405);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(224000017, 0, true);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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