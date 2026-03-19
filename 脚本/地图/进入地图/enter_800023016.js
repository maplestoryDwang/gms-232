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
      cm.forceStartQuest(58767, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3870887", 760, -40, 10, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3870887", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3870888", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3870888", "summon", 0, 0);
      cm.npc_ChangeController(9111004, "oid=3870889", 405, -40, 19, 355, 455, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3870889", "summon", 0, 0);
      cm.npc_ChangeController(9111005, "oid=3870890", 305, -40, 20, 255, 355, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3870890", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("暗！外面大家伙儿都很崇敬你！快出来瞧瞧吧！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#……我不在乎！", 37, 9111006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#居然不在乎其他生灵的崇敬之情……他到底是个什么样的妖怪啊……", 37, 9111004, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870888"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870889"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870890"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎我说，他不在乎其他人的崇拜，是不是心里有暗恋的对象，只想得到她的关心哦？", 37, 9111002, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870889"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('暗恋的对象……。', 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哼，没想到你这妖鬼脑子还挺好使。", 37, 9111004, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("等等！难不成……他暗恋泉奈？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=3870887", -1);
                            cm.sendNormalTalk_Bottom("#face1#诶……诶？？！", 37, 9111007, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870890"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face0#唔……是因为缺爱吗。", 37, 9111005, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("泉奈，你跟暗是不是互相喜欢对方？", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.sendNormalTalk_Bottom("#face1#嗬！没，没有啦~我们是挚友，虽然很亲密，但是完全不是那种关系啊……", 37, 9111007, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……那只公狐狸不见得跟你想法一致哦？", 37, 9111005, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.sendNormalTalk_Bottom("#face1#诶……诶？？！", 37, 9111007, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870888"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.sendNormalTalk_Bottom("#face1#你回忆下，暗有没有送过你特别的礼物……", 37, 9111002, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#唔……我想想……我们俩是经常互送礼物，可是特别的……", 37, 9111007, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3870888"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3870889"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3870890"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#啊！有一次他送我樱桃，让我自己吃就好不要给别人！", 37, 9111007, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870888"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870889"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870890"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#就是这个！那樱桃肯定有特殊意义！", 37, 9111002, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#居然送吃的，明显是在表白！", 37, 9111004, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face2#诶？？！", 37, 9111007, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#他向挚友表白，对方却没察觉出他的心意，这么郁闷难怪成了蛰居者。", 37, 9111005, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#没，没那么夸张吧……！虽然那樱桃味道很甜很好吃，可他也没说过是特别的樱桃啊……", 37, 9111007, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("樱桃……对了！", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("那肯定不是一般的樱桃。你们等我一会儿，我去找证据。", 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("(我记得泉奈所说的那个长着传说之樱桃的悬崖上有枝条是光秃秃的。暗会不会是给她送了传说之樱桃？爬到崖顶去确认下吧！)", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("不久后。", 1);
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
                                                                                    cm.sendNormalTalk_Bottom("给，这就是证据。", 57, 0, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3870888"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3870889"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3870890"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.sendNormalTalk_Bottom("#face0#………？！", 37, 9111007, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#……这是什么？树枝跟脚印？", 37, 9111002, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("暗送给泉奈的，是传说之樱桃。", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("这个就是证据。上次我登上崖顶时就看到了，但没想太多……", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("暗早在5年前就爬上悬崖，为泉奈准备了礼物！", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("其他狐妖垂涎传说之樱桃的故事是假的。", 57, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("只有一只狐妖巴望着传说之樱桃，这狐妖就是你，泉奈！", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("暗就是为了你，才专程去摘这传说之樱桃！", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.sendNormalTalk_Bottom("#face2#这，这……！", 37, 9111007, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face1#果然是爱的告白。", 37, 9111005, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("泉奈，你心里是怎么想的？你只把暗当成朋友吗？", 57, 0, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#我，我……。", 37, 9111007, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face2#我，我之前一点儿都不知道啊……", 37, 9111007, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face2#暗竟然抱着这样的心思……", 37, 9111007, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=3870887"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face2#……我明明最喜欢暗，却不明白他的心意……", 37, 9111007, false, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("走，我们去把暗弄出来！", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.warp(800023017, 0, false);
                                                                                                                              cm.npc_LeaveField("oid=3870887");
                                                                                                                              cm.npc_LeaveField("oid=3870887");
                                                                                                                              cm.npc_LeaveField("oid=3870888");
                                                                                                                              cm.npc_LeaveField("oid=3870888");
                                                                                                                              cm.npc_LeaveField("oid=3870889");
                                                                                                                              cm.npc_LeaveField("oid=3870889");
                                                                                                                              cm.npc_LeaveField("oid=3870890");
                                                                                                                              cm.npc_LeaveField("oid=3870890");
                                                                                                                              cm.eventSKill(0);
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}