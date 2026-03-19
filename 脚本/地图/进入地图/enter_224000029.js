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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2374, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074123, "oid=2595691", -2443, 323, 478, -2493, -2393, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2595691", 'summon', 0, 0);
        cm.npc_ChangeController(2074100, "oid=2595692", -2390, 323, 480, -2440, -2340, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2595692", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.askMenu_Bottom("#face0#得让他鼓起勇气去表白才行……'\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#你想失去她吗？#l\r\n#g#L1#若不是现在，也许以后就没有机会了。#l", 37, 2074100);
      } else {
        var O = "action分支1_" + selectionLog[2];
        eval(O)(f, E, e, V);
      }
    }
  }
}
function action分支1_0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#你想失去她嘛？\r\n如果你不表白……", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("不，如果我表白了，就会失去她了。\r\n我……实在是做不到。", 37, 2074123, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3##b(该死……好像说错话了。)", 37, 2074100, true, true);
      } else if (status === V++) {
        end();
      }
    }
  }
}
function action分支1_1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#若不是现在，也许以后就没有机会了。", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("……可能是吧，谁知道呢。\r\n但是，总比完全失去她要好吧。", 37, 2074123, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#你为什么只想着失去呢？也可能会有其他的路啊？", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("但是……我害怕，我畏惧，实在是……\r\n现在这个状态，我已经很满足了。", 37, 2074123, true, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("#face0#'看样子现在他完全没有勇气去表白……该怎么办呢？'\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#你真的满足了吗？#l\r\n#g#L1#和她在一起不是更好吗？#l", 37, 2074100);
          } else {
            var O = "action分支2_" + selectionLog[7];
            eval(O)(f, E, e, V);
          }
        }
      }
    }
  }
}
function action分支2_1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#和她在一起不是更好吗？", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("现在的我也很好，就这样就挺好的。", 37, 2074123, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3##b(该死……看来是说错话了。)", 37, 2074100, true, true);
      } else if (status === V++) {
        end();
      }
    }
  }
}
function action分支2_0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#……你真的，真的就满足了吗？", 37, 2074100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("…………", 37, 2074123, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#不是的吧，是吧？其实……", 37, 2074100, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("没错，不可能满足的！\r\n但是……但是又能怎么样呢。\r\n我就要继续保持这个状态活下去。", 37, 2074123, true, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("#face0#'完全死心了啊，有没有哪句话能够唤醒他的……'\r\n#b(到底说什么好呢？)#k\r\n\r\n#g#L0#如果做好了死的准备，就没有什么做不到的！#l\r\n#g#L1#就这样活下去，也没什么不好的。#l", 37, 2074100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#就这样活下去，也没什么不好的。", 37, 2074100, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("…………", 37, 2074123, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#就算，心意没有办法传达，也只有自己承受这份惋惜，随着时间的流逝，", 37, 2074100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("…………", 37, 2074123, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#别人幸福地、鼓起勇气地生活，\r\n而自己只能独自一人孤独地老去，这又能怎么样。", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……那个，这话有点。", 37, 2074123, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#这么活下去！", 37, 2074100, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#这么活下去……就会在最后想起来。", 37, 2074100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#当初就该，紧紧抓住，\r\n就该表白的。", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#就该活得更加幸福一些的。", 37, 2074100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("…………", 37, 2074123, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#尝试去变得更幸福就好，\r\n这些都会留作回忆的。", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("……姑娘，你多大了啊？\r\n怎么感觉这话说得倒像是比我年长了许多的样子啊……哼。", 37, 2074123, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#所以说，你不要太过烦恼，鼓起勇气……", 37, 2074100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("花，是不是很漂亮？", 37, 2074123, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#什么？", 37, 2074100, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……以后，每次看到花我都会告诉孩子们。\r\n当初我是这么表白的。", 37, 2074123, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#大叔……", 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这个嘛，稍微变幸福一点也无妨吧。", 37, 2074123, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你会去，表白的吧？", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("等一等，让我再深呼吸一下……", 37, 2074123, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呼，呼……", 37, 2074123, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("来！那……我就去了。", 37, 2074139, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#有点自信！挺直肚子上的王字腹肌！\r\n一路顺风哦~", 37, 2074100, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField("oid=2595691");
                                                                  cm.sendNormalTalk_Bottom("#face0#呼……真是太累了……\r\n谁能想到让他去表一次白得这么费事。", 37, 2074100, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#不管是顺利，还是被甩了，往后他们互相之间就不会嫉妒了吧？\r\n那我们再去找七南说一说吧。", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.updateInfoQuest(30424, "gExpCheck=1;skip=1");
                                                                      cm.gainExp(284119);
                                                                      cm.forceStartQuest(30424, '');
                                                                      cm.forceCompleteQuest(30424);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                    } else if (status === V++) {
                                                                      end();
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function end() {
  cm.dispose();
  cm.warp(224000000, 25, true);
  cm.setInGameDirectionMode(false, true, false);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;