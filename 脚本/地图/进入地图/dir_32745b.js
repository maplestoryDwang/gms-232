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
      cm.npc_ChangeController(1530060, "oid=21016139", 341, 38, 7, 291, 391, 0, true, false);
      cm.npc_SetSpecialAction("oid=21016139", "summon", 0, 0);
      cm.npc_ChangeController(1530030, "oid=21016140", 447, 38, 6, 397, 497, 1, true, false);
      cm.npc_SetSpecialAction("oid=21016140", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("哎呦，真是个可爱的小狗狗！", 37, 1530060, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('汪！汪汪！', 37, 1530030, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=21016139"], [6000, 0, 0, 1, 0, 1, 0, 0]);
            cm.npc_SetForceMove("oid=21016140", -1, 100, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=21016140", 1, 30, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=21016140", -1, 50, 200);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=21016140", 1, 50, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=21016140", -1);
                    cm.sendNormalTalk_Bottom("嗷！啊哈哈，痒死了。别在我身上蹭来蹭去的，小狗狗。", 37, 1530060, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗬！埃尔文，这个阴险的家伙。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯？你说什么？ ", 37, 1530060, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('啊，没什么。', 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#哈哈……我今天是不是太笨了？对不起，其实我是第一次买年糕串吃，乘坐巴士也是第一次……", 37, 1530060, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("就连自己用双脚行走在这个城市的街道上都是第一次。", 37, 1530060, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("其实，我说想要给你介绍一下这里也只不过是个借口，我就是想和#h0#你一起玩。因为我的生活就如同被关在鸟笼里一样……根本就没有机会能像现在这样到处走走。", 37, 1530060, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("谢谢你今天陪我一起玩，#h0#。", 37, 1530060, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎呀，那边好像有什么声音。会是什么呢？", 37, 1530060, true, true);
                                    cm.effect_NormalSpeechBalloon('?', 1, 0, 1, 1500, 1530060, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('汪！汪汪！', 37, 1530030, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=21016140", 'happyTail', -1, 1);
                                        cm.sendNormalTalk_Bottom("啊哈哈，痒死了！别舔来舔去的，小狗狗。", 37, 1530060, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("希纳斯小姐~~原来你在这里啊！", 37, 1530360, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(1530360, "oid=21022081", 779, 38, 10, 729, 829, 1, false, 1500, false);
                                            cm.npc_SetSpecialAction("oid=21022081", "summon", 0, 0);
                                            cm.sendNormalTalk_Bottom('呃，被发现了……', 37, 1530060, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("希纳斯小姐，你这样擅自行动是很危险的。要是被会长知道，我的小命可就不保了啊~！", 37, 1530360, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#唉，没办法……看来我今天只能先回去了。#h0#，下次再见吧。", 37, 1530060, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=21016139", 1, 500, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                } else if (status === V++) {
                                                  cm.forceCompleteQuest(32745);
                                                  cm.dispose();
                                                  cm.warp(330001700, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;