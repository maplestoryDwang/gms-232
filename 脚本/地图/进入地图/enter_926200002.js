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
      cm.npc_ChangeController(2184008, "oid=247939", 263, 155, 5, 213, 313, 1, false, false);
      cm.forceStartQuest(31058, '0');
      cm.npc_ChangeController(2184004, "oid=42775371", 220, 113, 5, 170, 270, 0, true, false);
      cm.npc_SetSpecialAction("oid=42775371", "summon", 0, 0);
      cm.npc_ChangeController(2184005, "oid=42775372", 320, 113, 4, 270, 370, 1, true, false);
      cm.npc_SetSpecialAction("oid=42775372", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_NormalSpeechBalloon("哥哥, 年轻秘药真的存在吗? ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("好像不是普通的盗墓者.\r\n要偷听一下吗? ", 1, 0, 1, 3000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_PushMoveInfo(0, 100, 300, 113);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                    cm.effect_NormalSpeechBalloon("有没有都没关系.反正都是王妃要喝的东西.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                      cm.effect_NormalSpeechBalloon("刚才那个人说是“王妃”? ！", 1, 0, 1, 3000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                        cm.effect_NormalSpeechBalloon("我之前就说过.如果秘药的传闻传到王妃的耳朵里, \r\n最后辛苦的只是我们.", 1, 0, 0, 5000, 0, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(5500);
                          cm.effect_NormalSpeechBalloon("那个传闻整个阿里安特的人都知道了, 怎么能不让她知道? \r\n被王妃听到只不过是时间问题.", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                            cm.effect_NormalSpeechBalloon("比起那个, 更然人担心的是今后会怎么样.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                              cm.effect_NormalSpeechBalloon("我们会不会因为找不到秘药而受到惩罚? ", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                cm.effect_NormalSpeechBalloon("当然不会.", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  cm.effect_NormalSpeechBalloon("我们一定会找到秘药, 然后交给王妃.", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4500);
                                    cm.effect_NormalSpeechBalloon("她的脸长得那么可怕, \r\n阿里安特不会一直由她统治下去吧? ", 1, 0, 0, 4000, 0, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      cm.effect_NormalSpeechBalloon("让, 让人直起鸡皮疙瘩……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                                        cm.effect_NormalSpeechBalloon("还不如让帅气的我喝了它, 这样对阿里安特更有好处.", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                          cm.effect_NormalSpeechBalloon("就凭你这张脸? 我喝还差不多.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                            cm.effect_NormalSpeechBalloon("丑八怪, 你也不照照镜子.", 1, 0, 0, 3500, 1, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(2184006, "oid=42791262", 650, 113, 11, 600, 700, 1, true, false);
                                              cm.npc_SetSpecialAction("oid=42791262", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                              cm.effect_NormalSpeechBalloon("他们……不是双胞胎吗? ", 1, 0, 1, 3000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1700);
                                                cm.effect_NormalSpeechBalloon("丑八怪们, 别吵了.", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2184006, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=42775372", 1, 5, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("啊? 是大哥.", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=42791262", -1, 140, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                      cm.effect_NormalSpeechBalloon("至少得长成我这样, 才叫帅.", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184006, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        cm.effect_NormalSpeechBalloon('......', 1, 0, 1, 2000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                          cm.effect_NormalSpeechBalloon("他们……不是三胞胎吗? ", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                            cm.effect_NormalSpeechBalloon("废话先不说了.怎么样? 找到什么了吗? ", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                              cm.effect_NormalSpeechBalloon("那个吉普赛人的话是真的.", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 2184006, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                cm.effect_NormalSpeechBalloon("吉普赛人? ", 1, 0, 1, 1500, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                  cm.effect_NormalSpeechBalloon("没想到真的有秘药……", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2184006, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    cm.effect_NormalSpeechBalloon("最好先去告诉美迪莎.", 1, 0, 1, 2000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/onUserEff.img/normalEffect/chatBalloon/1"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                                                                        cm.fieldEffect_PlayFieldSound("Coconut/Broken", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=42775371"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=42775372"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=42791262"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                                                                          cm.npc_SetForceMove("oid=42775371", -1, 5, 100);
                                                                          cm.npc_SetForceMove("oid=42775372", -1, 5, 100);
                                                                          cm.npc_SetForceMove("oid=42791262", -1, 20, 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_MoveAction(0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                cm.effect_NormalSpeechBalloon("你是谁? ！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2184004, cm.getPlayer().getId());
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  cm.effect_NormalSpeechBalloon("那个家伙一定是在偷听我们的话！", 0, 0, 0, 3000, 1, 0, 0, 0, 4, 2184005, cm.getPlayer().getId());
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    cm.effect_NormalSpeechBalloon("快抓住他！", 0, 0, 0, 2000, 1, 0, 0, 0, 4, 2184006, cm.getPlayer().getId());
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 300, 0, 0);
                                                                                    } else if (status === V++) {
                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                      cm.playerMessage(-1, "击退敌人.");
                                                                                      cm.npc_LeaveField("oid=42775371");
                                                                                      cm.npc_LeaveField("oid=42775372");
                                                                                      cm.npc_LeaveField("oid=42791262");
                                                                                      cm.spawnMobLimit(8870203, 1, 215, 105, 3);
                                                                                      cm.spawnMobLimit(8870203, 1, 320, 105, 3);
                                                                                      cm.spawnMobLimit(8870203, 1, 490, 105, 3);
                                                                                      cm.forceJoinEvent("希拉_阿斯旺下层2");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;