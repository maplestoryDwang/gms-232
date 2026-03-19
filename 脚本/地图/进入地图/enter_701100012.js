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
      cm.npc_ChangeController(9310561, "oid=96091", 1135, -5, 106, 1085, 1185, 1, false, 0, false);
      cm.npc_ChangeController(9310537, "oid=2222467", -1135, -6, 15, -1185, -1085, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2222467", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1200, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=2222467", "blink", 0, 0);
        cm.sendNormalTalk_Bottom('…', 37, 9310537, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('…？', 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2222467", 'blink', 0, 0);
            cm.sendNormalTalk_Bottom('…', 37, 9310537, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你……为何一直盯着我看呢？？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=2222467", 'say', 0, 0);
                cm.sendNormalTalk_Bottom("啥？我哪有？是你一直盯着我看，所以我也盯着你看罢了！", 37, 9310537, true, true);
              } else {
                if (status === V++) {
                  cm.emotion(5, 3000);
                  cm.sendNormalTalk_Bottom("不是啊，你从刚才就一直在盯着我看啊！", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什么？？！难道你觉得我是在撒谎吗？", 37, 9310537, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不是的。呼，我还是走吧。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("喂，你等一下。\r\n你身上穿的衣服是从哪里弄来的？呃，我问这个干吗？总之你打算卖你这件衣服吗？", 37, 9310537, true, true);
                      } else {
                        if (status === V++) {
                          cm.emotion(3, 3000);
                          cm.sendNormalTalk_Bottom("这件衣服？挺贵的哟……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("要多少钱？你说说看！价钱好商量。", 37, 9310537, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("那你过来，我悄悄告诉你……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                cm.sendNormalTalk_Bottom("(叽里呱啦 叽里呱啦)", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2222467"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('…', 37, 9310537, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('…？', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2222467", "say", 0, 0);
                                        cm.sendNormalTalk_Bottom("仔细瞧了一下，这衣服也不过如此嘛。嗯嗯，这件衣服还是算了吧！对了，忘了做自我介绍了。我是豫园的古董商人，许贯杰。想当初我可是东台路上名气响当当的商人，可现在……", 37, 9310537, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("总之，你以后在狩猎时得到什么稀有道具的话，就拿来给我吧。反正价格好商量！好了，那我先告辞了！", 37, 9310537, true, true);
                                        } else if (status === V++) {
                                          cm.forceCompleteQuest(62127);
                                          cm.updateInfoQuest(62127, 'chk=1');
                                          cm.addNumberForQuestInfo(62109, "yuyuanPoint", 2);
                                          cm.dispose();
                                          cm.warp(701100000, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;