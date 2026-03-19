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
      cm.npc_ChangeController(1530130, "oid=36448820", 1460, 6, 46, 1410, 1510, 1, true, false);
      cm.npc_SetSpecialAction("oid=36448820", "summon", 0, 0);
      cm.npc_ChangeController(1530050, "oid=36448821", 1160, 6, 45, 1110, 1210, 0, true, false);
      cm.npc_SetSpecialAction("oid=36448821", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呼，这里这么安静真好。学校里实在是太吵了。", 37, 1530130, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH2_07/1", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不管我去哪儿，只要大家见到我奥尔卡就都会沸腾起来。", 37, 1530130, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH2_07/2", 100);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=36448820", 1, 350, 120);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b（我为什么在这儿跟她一起营造氛围呢……）#k", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("会不会是有话想要对#h0#你说呢？", 37, 1530050, true, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                    cm.npc_SetForceMove("oid=36448821", 1, 350, 120);
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 350);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=36448820", "sad", -1, 1);
                      cm.fieldEffect_PlayBGM("Bgm15.img/ElinForest", 0, 0);
                      cm.sendNormalTalk_Bottom("#face1#刚才的那里……就是我哥哥发生事故的地方。", 37, 1530130, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH2_07/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#奥尔卡偶尔想哭的时候，就会来这儿。", 37, 1530130, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_07/4", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#到今天，我哥哥昏迷不醒已经整整三年了。", 37, 1530130, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH2_07/5", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b（窃窃私语）#k突然变成伤感模式了呢。", 37, 1530050, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b（原来是这样……）#k", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1894, 46);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(6286);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#我的双胞胎哥哥斯乌非常受女孩子欢迎。而且那些女孩子都对奥尔卡很好。", 37, 1530130, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_07/6", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#因为如果在奥尔卡面前表现好的话，就能和斯乌变得更亲密了。", 37, 1530130, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH2_07/7", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#可是发生了那场事故之后，斯乌就昏迷不醒了……而那些女孩子也原形毕露了！", 37, 1530130, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH2_07/8", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#她们撇开奥尔卡，在背后说我的坏话，甚至还欺负我。说我是个倒霉的家伙啊什么的。", 37, 1530130, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH2_07/9", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#虽然我表面上装得很淡定，可奥尔卡的心里非常害怕，非常孤独。这让我再也不敢相信别人。", 37, 1530130, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH2_07/10", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#可是，更可笑的你知道是什么吗？自从奥尔卡上了电视……那些女孩子就又开始主动联系奥尔卡，还装作很要好的样子！", 37, 1530130, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH2_07/11", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#我早就看清楚了。这个世界上没有所谓的真心。大家只不过是表面上想要亲近罢了。", 37, 1530130, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH2_07/12", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#这个学校也是一样。我都知道，大家只不过是表面上装得很亲近，而转过脸去就会骂我是个倒霉蛋。", 37, 1530130, true, true);
                                                  cm.effect_Voice("Voice2.img/Friends/CH2_07/13", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#相信你一定也是这样的。", 37, 1530130, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH2_07/14", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom(" 不是那样的。因为不管你是不是什么偶像明星，都有人发自内心地喜欢着你呢。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=36448820", -1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#……真的吗？", 37, 1530130, false, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH2_07/15", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("是的。#b（虽然是个有点奇怪的家伙……）#k", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setNpcSpecialActionReset("oid=36448820");
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom('……哼，你骗人。', 37, 1530130, false, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_07/16", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else if (status === V++) {
                                                                    cm.dispose();
                                                                    cm.warp(330002213, 1);
                                                                    cm.npc_setForceFlip("oid=36448820", 0);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;