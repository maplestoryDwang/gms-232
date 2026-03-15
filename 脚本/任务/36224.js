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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 594, 304);
    } else {
      if (status === v++) {
        cm.npc_ChangeController(3005102, "oid=620826", 465, 264, 4, 415, 515, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620826", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1015, 248);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#格里大哥！！啦啦姐！！", 36, 3005110, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#什么嘛，你们为什么从上次开始就这样，装作和我很熟吗？", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#我引进了一个超赞的生意项目。", 36, 3005110, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#那是为旅行者们准备的旅游生意……", 36, 3005111, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#可以大赚一笔的……", 36, 3005112, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我不是说了嘛，我不和其他人合作。", 36, 3005102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_PushScaleInfo(800, 0, 2000, 800, 433, 304);
                      } else {
                        if (status === v++) {
                          cm.npc_setForceFlip("oid=620826", -1);
                          cm.sendNormalTalk_Bottom("#face0#喂，走吧……诶？", 36, 3005102, false, true, 1);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 1034, 304);
                            } else {
                              if (status === v++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face3#哇，那是真的吗？", 36, 3005100, false, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face2#喂，你在那儿做什么呢！", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face3#你听我说，格里，若是照这几位的意思，一天的收益就足足有……", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#你为什么需要用钱？", 36, 3005102, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#嗯……那是秘密！", 36, 3005100, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#……用脚趾头想都知道，你们一定是在牛奶里掺水，打算高价卖出去吧？", 36, 3005102, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#别、别把我们当垃圾看待！", 36, 3005110, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#没错！不是牛奶，是蜂蜜！", 36, 3005111, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom('#face0#……', 36, 3005102, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0#可这样的行为是在欺骗别人噢。", 36, 3005100, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face0#一定有光明磊落的方法！", 36, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#既然啦啦姐这么说了……", 36, 3005110, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我还以为会大赚一笔呢……", 36, 3005111, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.inGameDirectionEvent_Unknown9(1000);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else if (status === v++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.npc_LeaveField("oid=620826");
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setStandAloneMode(false);
                                                              cm.forceStartQuest(36224, '');
                                                              cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h0;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h1;78=h0;88=h1;set=1");
                                                              cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h0;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h1;set=1");
                                                              cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h1;64=h0;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
                                                              cm.dispose();
                                                              cm.warp(410004003, 0, true);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
      cm.sendNormalTalk_Bottom("#face0#真羡慕你啊，可以大胆地说实话。", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#说实话？这是什么意思？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我啊，一辈子都在苦恼这次该讹谁一笔钱才好。", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你以为后巷那些可恶的流氓生来就这样吗？", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#为什么放着好好的家不回，非要去勉强能晒到一点阳光的狭窄后巷，\r\n你知道原因吗？", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#行了，毕竟你之前所生活的地方，是个既没有矛盾也没有区别对待的温暖世界，\r\n所以你才会这么说。", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#你说得没错，我生长在一个明媚又幸福的村庄，不懂那些事。", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#可是，如果不知道，想办法搞清楚不就行了嘛。", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我很会学习的！所以你教教我。", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#算了，那有什么好厉害的，还用学啊。", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#我先走了。", 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face1#啊，格里！", 36, 3005100, true, true, 1);
                          } else if (status === v++) {
                            cm.forceCompleteQuest(36224);
                            cm.gainExp(3425);
                            cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;62=h1;53=h1;63=h0;64=h0;73=h0;55=h0;night=0;57=h0;76=h0;59=h0;77=h0;87=h0;78=h0;88=h0;set=1");
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