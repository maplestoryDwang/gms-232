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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2420015, "oid=2084347", 6, 263, 8, -44, 56, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2084347", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("哈哈……这两个家伙可不简单啊，看来要动动久违的筋骨了，但是……警卫也快到了。", 33, 2420015, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_REPEAT("Effect/Direction13.img/effect/zero/ariantBalloon/0", 1, 1, 1, -300, 150);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("火？！啊，我可没放火，为什么偏偏这个时候……万一以后被人把纵火的罪名栽赃给我怎么办？", 33, 2420015, false, true);
              cm.effect_REPEAT("Effect/Direction13.img/effect/zero/ariantBalloon/0", 1, 0, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face11# #b(沙图团这群家伙，简直是慢的要死了！怪盗幻影早就把蓝色眼泪带走了！而且这家伙也不是个省油的灯！怎么办？蓝色眼泪……！)", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face7#等下……那火……烧的太大了。那个方向……是#r接见室#k……", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("喂，小姐，不用担心。反正王和王妃已经回到寝宫了。接见室里就剩下了宰相#b#p2420000##k而已？", 33, 2420015, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face11##p2420000#？！", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那个宰相工作到晚可是出了名的，更何况刚才我出来的时候也看到他在接见室……", 33, 2420015, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11#……！", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face11#……！", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face11#要救出#p2420000#。", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face1#什么？！但是……但是我们要找回女神之泪啊！我们来这里不就是为了这个吗！", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face1#……但是……！", 41, 2400006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face1#可恶！为什么会想到救出#p2420000#呢？我们的目的不是这个……#p2420000#什么的，是跟我们没有任何关系的人啊……！", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("……？我不知道是什么，但是不要做后悔的事情。比起宝石，当然是人更加重要了？……反正你又不愿意交出宝石……", 33, 2420015, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face10#真狡猾……", 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("额……抱歉抱歉……但是，作为怪盗我也有自尊心。……啊，怎么办……好困扰啊……？", 33, 2420015, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face11#……#p2400006#！蓝色眼泪的话不是应该能感到时间之力吗？", 41, 2400005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("……？嗯，那当然要感觉到……咦？这个男人……怎么感觉不到时间之力……", 41, 2400006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("怪盗幻影！时间之泪……不对，你确定你拿的是蓝色眼泪吗？", 41, 2400005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("嗯？那当然……怎么了？", 33, 2420015, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("#face11#……怪盗幻影拿着的蓝色眼泪上，感觉不到时间之力……但是时间之力仍在接见室的方向可以感觉到……这难道是……", 41, 2400005, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#face11##b#p2420000#也说过……自己的名字不是#p2420000#……他等人等了这么久……这说明……#k", 41, 2400006, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face1#去找#p2420000#吧！", 41, 2400005, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk('#face11#嗯！', 41, 2400006, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("咦？喂喂！你们不需要蓝色眼泪了吗？……这到底是什么情况？", 33, 2420015, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_MoveAction(1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(322090420, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;