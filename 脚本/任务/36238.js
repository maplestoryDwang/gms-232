var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -88, 21);
    } else {
      if (status === v++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#什么情况，是谁在公共场所正中央大声喧哗？", 36, 3005122, false, true, 1);
          } else {
            if (status === v++) {
              cm.Npc_Fadeout("oid=638068", 255, 500);
              cm.sendNormalTalk_Bottom("#face0#啊，你来得正好，卡德娜！", 36, 3001542, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face5#……诶？什么嘛，这家伙长得弱不禁风，没头没脑的。", 36, 3005122, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#啊，那个，就是说那位是……", 36, 3001542, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face6#你好！我是啦啦，我来自纳林村，刚刚才到这里！", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#那个，你知道影子商团吗？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#我是收到朋友的介绍信才过来的，可我还是第一次来这么大的城市，所以迷路了。", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face1#……你说介绍信吗？", 36, 3005122, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_头顶图片(["Skill/6400.img/skill/64001001/effect", "oid=638068"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(250);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/6400.img/skill/64001001/hit/0"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.emotion(1, 1000);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=638067"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.sendNormalTalk_Bottom("#face5#啊，危险啊！", 36, 3005100, false, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#卡、卡、卡德娜！我明白你很激动，可、可绝不能贸然攻击外地人啊！", 36, 3001542, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face5#什么操之过急，你都看到那家伙拿了什么东西，还能说出这种风凉话来？", 36, 3005122, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face4#你看清楚了，这是哈扎尔先生的往来明细账嘛！", 36, 3005122, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face5#这是误会！这是，我朋友……", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face4#什么狗屁朋友！", 36, 3005122, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#哎哟，真有劲儿。", 36, 3001250, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=638068'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                            cm.Npc_Fadeout("oid=638069", 255, 500);
                                            cm.sendNormalTalk_Bottom("#face0#好吧，那边那两个人，不要动。", 36, 3001250, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#这可真是，听说有外地人过来了我就抱着怀疑的态度过来看了看，结果果然没猜错呢。", 36, 3001250, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#卡德娜，我明白你的心思，可这次真的过了。", 36, 3001250, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face5#……", 36, 3005122, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.Npc_Fadeout("oid=638068", 0, 500);
                                                    cm.sendNormalTalk_Bottom("#face0#啊，卡、卡德娜！", 36, 3001542, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.Npc_Fadeout("oid=638067", 0, 500);
                                                      cm.sendNormalTalk_Bottom("#face0#那家伙的脾气也真是的……", 36, 3001250, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.npc_setForceFlip("oid=638069", 1);
                                                        cm.sendNormalTalk_Bottom("#face0#啊，别操心，既然已经跟上了一个家伙，应该没事的。", 36, 3001250, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我听说了，听说你来自纳林村？那你应该就是传说中的啦啦了。", 36, 3001250, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("#face1#啊，你认识我吗？", 36, 3005100, true, true, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face0#是啊，真是对委托人多有冒犯了。", 36, 3001250, true, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#你手上那个，是某个流氓暂时占据我们分部的时候发行的。", 36, 3001250, true, true, 1);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#就算说了要回收，也真的回收了，竟然还有剩下的……我颜面尽失啊。", 36, 3001250, true, true, 1);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.askAcceptDecline_Bottom("#face0#……这些话好像不适合在外面说，不介意换个地方吧？\r\n\r\n#r（※自动前往任务地图。）#k", 37, 3001250, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === v++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.forceStartQuest(36238, '');
                                                                      cm.npc_LeaveField("oid=638067");
                                                                      cm.npc_LeaveField("oid=638068");
                                                                      cm.npc_LeaveField("oid=638069");
                                                                      cm.dispose();
                                                                      cm.warp(402000001, 0, false);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#嗯，好，那现在就开始切入正题吧？", 36, 3001250, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(36238);
      cm.dispose();
    }
  }
}