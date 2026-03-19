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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 280, 400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074105, "oid=2596969", 242, 375, 62, 192, 292, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2596969", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2596970", 310, 372, 60, 260, 360, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2596970", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#现在#fs15##fn黑体#鬼怪岭"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#你说我……当时就晕倒在这里吗？\r\n为什么，我一点都不记得了……", 37, 2074100, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("那会儿你昏迷了很长一段时日。", 37, 2074105, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("为了治疗，便将你从童话村送了出去，在赫丽奥斯图书馆度过了那段时光。", 37, 2074105, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#童话村的人……原本就可以随意外出的吗？\r\n不是不可以的嘛。", 37, 2074100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("所以，估计你……\r\n并不是童话村的人。", 37, 2074105, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("就连知晓所有童话中人物的威兹也说是第一次见到你，\r\n我们也只是猜测，你也许和鬼怪、九尾狐之类的有关。", 37, 2074105, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2##b鬼怪#k和#b九尾狐#k吗？", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#那两个……不都是童话村童话中的人物嘛，\r\n为什么突然提起这两个？……", 37, 2074100, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这和两年前的火灾有关。", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('back2', "Map/Effect2.img/downtown2015/illust/26", 0, 500, 0, 0, 10, 4, 1);
                              cm.sendNormalTalk_Bottom("鬼怪和九尾狐……\r\n他俩几乎如朋友一般亲密无间。", 37, 2074105, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("但是，他们在火灾现场留下了脚印，并在最后销声匿迹了。", 37, 2074105, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("其实我和威兹，一直在猜测宝玉其实是被他们二人拿走的。", 37, 2074105, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#鬼怪和九尾狐吗？为什么？", 37, 2074100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我在事故发生之前，曾经不小心给九尾狐看过宝玉。\r\n在此之前，知道宝玉存在的就只有威兹和我而已。", 37, 2074105, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#那九尾狐为什么要……", 37, 2074100, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("为什么要这么做……这个嘛……这我也不太清楚。", 37, 2074105, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("他们原本都很善良，都很喜欢童话村的……", 37, 2074105, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer("back2", '', 2, 500, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=2596970", 'pain2', -1, 1);
                                                cm.sendNormalTalk_Bottom("#face3#…………", 37, 2074100, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你的表情？……你没事吗？", 37, 2074105, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#可能是因为我一次性听了太多的事情……\r\n头有点痛……", 37, 2074100, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#……额……头，头好痛。", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("小可爱啊？", 37, 2074105, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=2596970", "pain1", -1, 1);
                                                          cm.sendNormalTalk_Bottom("#face3#头，好痛啊，啊！\r\n啊啊，啊！", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("小可爱啊，小可爱啊！你没事吗？", 37, 2074105, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#啊啊……啊啊啊啊！", 37, 2074100, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("该死，帮忙搀着点小可爱！\r\n得赶紧回村子里去！", 37, 2074105, true, true);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(224000037, 21);
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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