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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 300, 197);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 212, 191);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#格里可能还需要点时间。", 36, 3005103, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#嗯，就算再迟，他也一定会回来的！", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#哇，海娜，我可以看着你画画吗？", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#呵呵，这是当然。", 36, 3005103, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#你的毛笔字写得相当清秀呢！\r\n我从前毛笔字就写得歪歪扭扭，可没少被训呢。", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#呵呵，我这还差得远呢，\r\n虽然领域有些不同，不过当年在我们村庄，毛笔用得最好的人是格里的父亲。", 36, 3005103, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face1#格里的父亲？真的吗？", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#他可是附近一带最有名的书法家。", 36, 3005103, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#可自从格里的父亲去世之后，就家道中落了……", 36, 3005103, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#领主以拖欠税款为由，将兄弟俩家中所有的贵重物品全都搜刮走了。", 36, 3005103, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#为了找回父亲的遗物，格里哥哥在这里一边帮我的忙，一边赚钱。", 36, 3005103, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#比任何人都坦诚、快乐……", 36, 3005103, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#咳咳，咳咳！！快看！这里全都是第一次见的工具！", 37, 3005105, false, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#我现在可以数到20了，可以帮哥哥了！", 37, 3005105, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#是吗？挺厉害的嘛！下次一定要数到30哦！", 37, 3005106, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face2#呵呵……弟弟真的好可爱啊。", 37, 3005103, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#最近你的脸看起来有些憔悴…… 没问题吗？", 37, 3005103, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#没事的！要赶紧把钱还给领主大人……尽快找回父亲的遗物啊。", 37, 3005106, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face0#也许我说这些有些冒昧，不过或许放弃遗物也是一种办法，\r\n如果继续坚持成为一种折磨的话……", 37, 3005103, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#不行，我一定要找回遗物。", 37, 3005106, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#遗物……一定要……", 37, 3005106, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.inGameDirectionEvent_Unknown9(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                            } else if (status === v++) {
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setStandAloneMode(false);
                                                              cm.forceStartQuest(36222, '');
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
      cm.sendNormalTalk_Bottom("#face5#居然还有过这种事……遗物找到了吧？不是都那么努力找了嘛。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#人类的心，就算外表看来稳重，可其实内里也就薄如一张纸。", 36, 3005103, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#然后有一天，便发生了格里人生中最不幸的事……", 36, 3005103, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36222);
          cm.gainExp(1465);
          cm.gainExp(1389);
          cm.dispose();
        }
      }
    }
  }
}