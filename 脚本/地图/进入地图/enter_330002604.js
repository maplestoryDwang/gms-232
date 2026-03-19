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
      cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
      cm.npc_ChangeController(1530604, "oid=39649642", 460, 0, 1, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=39649642", "summon", 0, 0);
      cm.npc_ChangeController(1530605, "oid=39649643", 860, 0, 3, 810, 910, 1, true, false);
      cm.npc_SetSpecialAction("oid=39649643", 'summon', 0, 0);
      cm.npc_ChangeController(1530606, "oid=39649644", 600, 0, 2, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=39649644", "summon", 0, 0);
      cm.npc_ChangeController(1530607, "oid=39649645", 530, 0, 2, 480, 580, 0, true, false);
      cm.npc_SetSpecialAction("oid=39649645", 'summon', 0, 0);
      cm.npc_ChangeController(1530616, "oid=39649646", 940, 0, 3, 890, 990, 1, true, false);
      cm.npc_SetSpecialAction("oid=39649646", 'summon', 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 700, 70);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 694, 19);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好，现在大家都聚在一起了，我们就开始吧。从几天前开始，我们学校爆发了强大的#bRock病毒#k。", 37, 1530070, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##bRock病毒？#k", 37, 1530110, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("只要接近强大的#bRock Soul#k，就会屈服于Rock的破坏力和魅力。病毒的宿主就是转学生#b戴米安#k。", 37, 1530070, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哎，我真不明白转学生为什么总是搞出这样的事故出来呢。学校行政上是不是出现了什么错误啊。", 37, 1530070, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('我怎么了吗……', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#Rock？不是早就不流行了吗？到底是谁啊？戴米安那家伙。", 37, 1530120, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我们现在就是要弄清楚这个。所以，如果希纳斯能来，获得斯坦老师的许可，就能看到个人资料了……", 37, 1530070, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('啊，来得正好。', 37, 1530070, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                            cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, 250, 70);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(1530619, "oid=39654080", 249, 0, 1, 199, 299, 0, true, false);
                              cm.npc_SetSpecialAction("oid=39654080", "summon", 0, 0);
                              cm.npc_ChangeController(1530620, "oid=39654081", 143, 0, 1, 93, 193, 0, true, false);
                              cm.npc_SetSpecialAction("oid=39654081", "summon", 0, 0);
                              cm.sendNormalTalk_Bottom("吱吱吱~！", 37, 1530619, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_02/1", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("蹦蹦蹦！", 37, 1530620, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_02/2", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 700, 70);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39649642"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39649643"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39649644"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39649645"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=39649646"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                          cm.sendNormalTalk_Bottom("#face0#如果是这样，我们就没办法看到个人资料了呢。你们谁有好主意吗？", 37, 1530070, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.emotion(5, 3000);
                                            cm.sendNormalTalk_Bottom("(你们都不担心一下吗？！)", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我有意见！你们没听过这样的话吗？以牙还牙！以Rock还Rock！瓜田李下！", 37, 1530100, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#瓜田李下的意思是……", 37, 1530070, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们也要成立乐队才能和他对抗！我们要以强大的实力让他俯首称臣！", 37, 1530100, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#胡克你有会弹奏的乐器吗？", 37, 1530070, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("那个不重要！要是再这么下去，戴米安那家伙就要把我的女性粉丝都抢走了！", 37, 1530100, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#你根本就没有粉丝。", 37, 1530120, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("趁此机会，我要展示一下我的艺术感性表现。要将我们迷途的羔羊重新引导回正道才行。", 37, 1530100, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("居然说是迷路的羔羊，呵呵。", 37, 1530110, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("好，既然成立了乐队，那我们就在庆典上演出吧。就让我们亲自来教教那个转学生，什么才是真正的Rock Soul！", 37, 1530100, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#所以，你有会演奏的乐……", 37, 1530070, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('好，胡克乐队成立！', 37, 1530100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#喂？你听见我的话了吗？", 37, 1530070, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("吉他就交给伊莉娜……", 37, 1530100, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#算了吧。我才不想和你们这群笨蛋一起呢~", 37, 1530120, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("喂~！你真的要这样吗？！", 37, 1530100, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("抱歉~我要走了，你们好好干。", 37, 1530120, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 400, 70);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetForceMove("oid=39649642", -1, 600, 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("吱吱吱~！", 37, 1530619, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("蹦蹦蹦！", 37, 1530620, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetForceMove("oid=39654080", -1, 300, 100);
                                                                                          cm.npc_SetForceMove("oid=39654081", -1, 300, 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 700, 70);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("哼！你以后看到人气爆棚的胡克大人，可不要后悔。来，想要加入乐队的人，举手~", 37, 1530100, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom('……', 37, 1530090, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("伊卡尔特，你能弹贝斯或者吉他吗？", 37, 1530110, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('嘘！', 37, 1530090, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("好！贝斯就由伊卡尔特来弹！", 37, 1530100, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('切！', 37, 1530090, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("那么架子鼓~", 37, 1530100, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("我~我想敲架子鼓~", 37, 1530110, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=39649642");
                                                                                                                cm.npc_LeaveField("oid=39649642");
                                                                                                                cm.npc_LeaveField("oid=39654080");
                                                                                                                cm.npc_LeaveField("oid=39654080");
                                                                                                                cm.npc_LeaveField("oid=39654081");
                                                                                                                cm.npc_LeaveField("oid=39654081");
                                                                                                                cm.forceCompleteQuest(33531);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#大家还真的都很兴奋啊。", 37, 1530070, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else if (status === V++) {
                                                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                    cm.forceCompleteQuest(33502);
                                                                                                                    cm.dispose();
                                                                                                                    cm.warp(330000610, 1);
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
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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