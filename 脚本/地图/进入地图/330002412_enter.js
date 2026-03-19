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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/ding", 100, 60);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs26##r卡珊德拉怪谈剧场\r\n#fs14#~ 第三个故事 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你知道我们学校为什么这么多鬼吗……？", 37, 1530180, false, true);
        cm.effect_Voice("Voice2.img/Friends/CH4_04/1", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("那都是有原因的。我接下来说的话都是真的。", 37, 1530180, true, true);
          cm.effect_Voice("Voice2.img/Friends/CH4_04/2", 100);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1530190, "oid=37813063", 150, 20, 4, 100, 200, 1, true, false);
                cm.npc_SetSpecialAction("oid=37813063", "summon", 0, 0);
                cm.sendNormalTalk_Bottom("想必大家都知道长相凶恶的看门大叔吧……？", 37, 1530180, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH4_04/3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("实际上，那个大叔有个秘密。", 37, 1530180, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH4_04/4", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("看门大叔终日缄口不言。", 37, 1530180, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH4_04/5", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("一直在等待夜晚十二点的到来。", 37, 1530180, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH4_04/6", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("等到晚上十二点，旧楼那里必定会传来孩子的哭声……", 37, 1530180, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH4_04/7", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                          cm.effect_Voice("Voice2.img/Friends/GHOST/8", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那哭声跟普通孩子的哭声有所不同，会给人一种毛骨悚然的感觉。", 37, 1530180, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH4_04/8", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("但是，看门大叔对此毫不畏惧。反而看起来很开心。", 37, 1530180, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH4_04/9", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("呵呵呵呵呵……", 37, 1530190, true, true);
                                cm.effect_Voice("Voice2.img/Friends/GHOST/9", 100);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=37813063", 1, 1000, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("在进入旧楼之前，看门大叔总会先观察四周。", 37, 1530180, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH4_04/10", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("因为他所做的事情不能让别人发现。", 37, 1530180, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH4_04/11", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("他究竟在旧楼里做些什么呢……？", 37, 1530180, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH4_04/12", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.warp(330002413, 0);
                                          cm.inGameDirectionEvent_SetHideEffect(0);
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