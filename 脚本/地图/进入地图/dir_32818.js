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
      cm.npc_ChangeController(1530150, "oid=37809777", -78, 124, 17, -128, -28, 1, true, false);
      cm.npc_SetSpecialAction("oid=37809777", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("老师！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
          cm.npc_setForceFlip("oid=37809777", -1);
          cm.sendNormalTalk_Bottom("搞什么，又是你？嗯？", 37, 1530150, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 220);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=37809777", 1, 50, 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("麦格纳斯老师，最近因为我们让您很累吧？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这家伙，我最近被你烦得很累！", 37, 1530150, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那您喝了这个打起精神来吧。这是能量饮料。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=37809777", 0);
                      cm.npc_SetForceMove("oid=37809777", -1, 10, 100);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=37809777"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#现在竟然还有这么体贴的学生。好吧，谢谢你。那么我就喝了……#b（咕嘟咕嘟）#k", 37, 1530150, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=37809777", 1, 250, 100);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 222, 124);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=37809777", "die", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("嗬，还真是效果神速啊？？", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("弗朗西斯这家伙，到底制作的什么东西啊……？赶紧送到医务室去吧。", 57, 0, true, true);
                                  } else if (status === V++) {
                                    cm.forceCompleteQuest(32818);
                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                    cm.gainItem(4034152, -1);
                                    cm.dispose();
                                    cm.warp(330000400, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;