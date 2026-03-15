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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -700, -110);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -615, -70);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#是他……是那家伙把沃莉……", 36, 3004850, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('家伙？', 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face3#我以为我逃出了那天的阴影。\r\n我以为我活下来了。可是……那有什么意义呢？", 36, 3004850, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("那天？你是说你在潜水部队的时候？", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3#我……我们……太傻了。", 36, 3004850, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#我曾经相信，只要真心去拼，就能办成了不起的事情。", 36, 3004850, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3#当时我们……唉，当时大伙儿都是和沃莉一样的想法。", 36, 3004850, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face3#所以最后全都变成了星星……。", 36, 3004850, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("你说明白点。\r\n到底发生什么事了？", 56, 0, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === v++) {
                                  cm.fieldEffect_复合图片动画(["Effect/Direction25.img/Sellas/space/skeleton", "animation", '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face3#对#r没能归来的潜水员#k，人们会说他们变成了星星。", 36, 3004850, false, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face3#我也从没想过为什么要那么叫……", 36, 3004850, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face3#亲眼看到后，就知道了。", 36, 3004850, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face3#沉入深渊中的无数同僚的火光……。", 36, 3004850, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.fieldEffect_取消复合图片动画('5', 1, 1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face3#真的就像星星一样。", 36, 3004850, false, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === v++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === v++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face3#那天……是我们记忆中埃德尔斯坦的终结。", 36, 3004850, false, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom('……。', 56, 0, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("吞掉沃莉的那家伙究竟是什么呀？", 56, 0, true, true, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face3#那家伙……是#r大海#k。", 36, 3004850, true, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("大海？", 56, 0, true, true, 1);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#把像我这样的星星吞了。好无趣。", 36, 3004850, true, true, 1);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#你知道吗？人们常常会望着夜空中的星星，感叹星光的美丽。\r\n但实际上，没人能一一区分、记住那些星星。", 36, 3004850, true, true, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#为什么？因为星星……非常小，也非常多。\r\n再常见不过了。", 36, 3004850, true, true, 1);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#沃莉，我……还有我的朋友们……都是那样的存在。", 36, 3004850, true, true, 1);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#在庞然之物面前无异于尘埃的，微不足道的存在……。", 36, 3004850, true, true, 1);
                                                                        } else {
                                                                          if (status === v++) {
                                                                            cm.sendNormalTalk_Bottom("……。", 56, 0, true, true, 1);
                                                                          } else {
                                                                            if (status === v++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === v++) {
                                                                                cm.sendNormalTalk_Bottom("#face3##h0#，幸亏有你在。你和我不一样，你很特别。\r\n一定能救出沃莉。", 36, 3004850, false, true, 1);
                                                                              } else {
                                                                                if (status === v++) {
                                                                                  cm.sendNormalTalk_Bottom("#face3#可是……抓紧时间吧。\r\n一旦电池的电量耗尽，即便是你，也上不去的。", 36, 3004850, true, true, 1);
                                                                                } else {
                                                                                  if (status === v++) {
                                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else if (status === v++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                    cm.dispose();
                                                                                    cm.warp(993185013, 0, true);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.setStandAloneMode(false);
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}