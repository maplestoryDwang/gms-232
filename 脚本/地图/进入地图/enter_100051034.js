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
      if (cm.isQuestFinished(35919) && cm.getQuestStatus(35920) == 0) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -359, 11);
        cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 25600, -51200);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1152000, 1, 384000, 1152000, -71680, 11775);
            } else {
              if (status === V++) {
                cm.effect_Text(["#fn黑体##fs18#哇哇峡谷", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(4500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#咦,奇怪。森林虫之地就到这里为止……\r\n但是没发现罗盘碎片,到底藏在哪里了呢……", 37, 1013350, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#是高尔根看错了吗……\r\n勇士,最后一个罗盘碎片到底在哪儿呢？", 37, 1013350, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(256000, 0, 384000, 256000, -38400, 11775);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 190);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0##b(溪边好像有什么东西在发光,于是走过去查看。\r\n隐约可以看到罗盘碎片。好像沉在了峡谷的底下。)#k", 37, 1013358, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#最后一块碎片沉在那里了。", 37, 1013358, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face0#！？', 37, 1013350, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嘿嘿,真的耶。花纹跟之前的碎片一样。", 37, 1013350, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#但是……该怎么把它拿出来呢？\r\n水流速度好像很快,看上去很危险。", 37, 1013350, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b(把手放进水里试了试,感觉到了强劲的水流。\r\n直接下来捞上来好像会很危险。)#k", 37, 1013358, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#要是能让峡谷的水暂停就好了……", 37, 1013350, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#让水停下来？", 37, 1013358, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#啊,我又在说傻话了……\r\n哎呀……勇士,我不想给你添乱的……", 37, 1013350, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face6##b(如果只是停一下下,我倒是有办法。\r\n让大石头掉下来,就能暂时堵住水流。)#k", 37, 1013358, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face6##b(那样需要用到炸药…… 但是手上刚好没有。\r\n只能用周围可以找到的材料来做了。)#k", 37, 1013358, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#喂,小孩。", 37, 1013358, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#抽泣……是,勇士……", 37, 1013350, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#周围有可以用来制作炸药的材料吗？", 37, 1013358, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你要炸药干嘛……知,知道了！你是想到什么办法了吗！？\r\n炸药……炸药……", 37, 1013350, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.setStandAloneMode(false);
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.updateInfoQuest(35947, "12=1;16=1;2=1;6=1");
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