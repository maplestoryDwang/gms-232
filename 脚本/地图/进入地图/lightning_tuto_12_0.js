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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(1032201, "oid=11046317", 340, 0, 11, 290, 390, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=11046317", "summon", 0, 0);
      cm.setSessionValue("lucia", "11046317");
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("天气很好呢。这种天气应该带上盒饭去野餐才是。", 1, 1032201, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("那我买点做盒饭的材料吧？", 17, 1032201, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("好，买适合煮着吃的蔬菜和热乎乎的面包就行。", 1, 1032201, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("(真想快点回来，吃着拉尼娅做的盒饭，好好休息啊。那样心里莫名的憋闷会不会好一点呢？)", 17, 1032201, true, true);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=11046317", -1, 400, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(1);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("早点回来。我们在家等你。", 1, 1032201, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嗯，我去去就回，等我哦。", 17, 1032201, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("(如果能一直和拉尼娅这样幸福的生活下去……嗯？突然更疼了。怎么回事？！)", 17, 1032201, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……夜光法师?", 1, 1032201, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(4, 6000);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/0"], [5400, 0, 0, 1, -5, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg1/1"], [1400, 0, -120, 0, 0, 0, 0, 0, 0]);
                            cm.npc_SetForceMove("oid=11046317", -1, 50, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.effect_Direction("Effect/Direction8.img/lightningTutorial2/Scene2", 0, 0, 0);
                              cm.effect_PlayMusic("Bgm26.img/Flood");
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg1/2", "oid=11046317"], [0, 0, -120, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg1/3"], [0, 0, -180, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2300);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_SetFaceOff(20071);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/1"], [0, 0, 0, 1, -5, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/2"], [0, 0, 0, 1, -6, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else if (status === V++) {
                                  cm.curNodeEventEnd(true);
                                  cm.npc_LeaveField("oid=11046317");
                                  cm.dispose();
                                  cm.warp(910141060, 0, false);
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