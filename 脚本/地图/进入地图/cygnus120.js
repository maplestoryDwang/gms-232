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
      cm.npc_ChangeController(1104304, "oid=217480", 698, 97, 3, 648, 748, 1, false, 0, false);
      cm.npc_ChangeController(1104306, "oid=217481", 541, 97, 3, 491, 591, 1, false, 0, false);
      cm.npc_ChangeController(1104307, "oid=217482", 624, 97, 3, 574, 674, 1, false, 0, false);
      cm.npc_ChangeController(1104308, "oid=217483", 771, 97, 3, 721, 821, 1, false, 0, false);
      cm.npc_ChangeController(1104310, 'oid=217484', 338, 97, 2, 288, 388, 1, false, 0, false);
      cm.npc_ChangeController(1104309, "oid=217485", 882, 97, 3, 832, 904, 1, false, 0, false);
      cm.npc_ChangeController(1104311, "oid=217486", 244, 97, 2, 194, 294, 0, false, 0, false);
      cm.npc_ChangeController(1102107, 'oid=217487', 433, 97, 2, 383, 451, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 470, 300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("等，等等……请大家先停下来……！", 1, 1104311, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("奇库？你到底是怎么受伤的？没事吧？得快点接受治疗……", 1, 1104310, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("不，不！没，没时间了……！大家请听我说！圣地……圣地遭到了袭击！", 1, 1104311, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 333, -20, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", 'oid=0'], [1500, 435, -29, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 540, -18, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 625, -11, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 687, 2, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", 'oid=0'], [1500, 767, -6, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=0"], [1500, 882, 1, 1, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("神兽还在坚持战斗，但是情况看上去很危险……！不快点赶过去的话，神兽就有危险了！快回到圣地……咳咳咳咳！", 1, 1104311, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("等等，奇库。究竟是谁入侵了圣地？你记得对方长什么样吗？", 1, 1102107, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我不认识那个人……灰色的皮肤……长着紫色的头发……", 1, 1104311, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("女皇殿下！必须马上中止会议，马上让骑士们赶回圣地……！", 1, 1102107, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("好的，我也要回到圣地去！", 1, 1104304, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("没，没关系吗？如果敌人还在圣地的话……", 1, 1104307, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("也许会有危险！", 1, 1104306, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("不，把骑士们分成两拨人也许更危险。", 1, 1104304, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("女皇殿下说的没错。他们也许是想等我们全力回援圣地之后，再趁机袭击女皇。所有人全部回圣地去。联盟那边以后再派人去。", 1, 1102107, true, true);
                                  } else if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.dispose();
                                    cm.warp(104020120, 0, false);
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