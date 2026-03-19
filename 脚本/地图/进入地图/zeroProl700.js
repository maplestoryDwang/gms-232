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
      cm.npc_ChangeController(2410003, "oid=23599", 835, -6, 124, 785, 885, 5, true, 0, false);
      cm.npc_ChangeController(2410004, "oid=23600", 661, -6, 124, 642, 711, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("喂，#p2410008#！你怎么这么晚！别人都在说我！说我怎么能把我们的王牌独自丢在那里！不过……话说回来", 33, 2410003, false, true);
          cm.effect_Voice("Voice.img/Milro/10", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("王牌也觉得棘手的敌人，像我这种人肯定不是对手！那么我留下来也帮不了什么忙，说不定我还会被一起干掉！那么我有什么理由一直留在那里！不是吗？", 33, 2410003, true, true);
            cm.effect_Voice("Voice.img/Milro/11", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face10#实在是很抱歉，#p2410003#前辈……我本该快点解决的，但是……#o9300744#比预想的跑得还要远。真是对不起你了。", 41, 2410008, true, true);
              cm.effect_Voice("Voice.img/Alpha/58", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("该不会是消灭#o9300744#之后，做了其他什么事情吧？", 33, 2410004, true, true);
                cm.effect_Voice("Voice.img/Ken/0", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#啊？是嘛……难道……被你们发现了？", 41, 2410008, true, true);
                  cm.effect_Voice("Voice.img/Alpha/59", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [1500, 652, -131, 1, 0, 1, 1, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你，该不会……！", 33, 2410004, false, true);
                      cm.effect_Voice("Voice.img/Ken/1", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("其实，消灭了怪物之后，我在空地上练习了一会儿剑术。因为最近一直忙着战斗，没有时间练习，所以……真的很抱歉！", 41, 2410008, true, true);
                        cm.effect_Voice("Voice.img/Alpha/60", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("啊……原来是这个啊？", 33, 2410004, true, true);
                          cm.effect_Voice("Voice.img/Ken/2", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("切，你怎么可能会发现我……果然你还是影子骑士团的最佳典范，就喜欢那些个没用的剑术训练。", 33, 2410004, true, true);
                            cm.effect_Voice("Voice.img/Ken/3", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("喂，你干嘛这么刁难他，晚辈做得好前辈就应该感到高兴才对。", 33, 2410003, true, true);
                              cm.effect_Voice("Voice.img/Milro/12", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("什么晚辈……哼。", 33, 2410004, true, true);
                                cm.effect_Voice("Voice.img/Ken/4", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("咳……啊，#p2410008#，别放在心上。#p2410004#这小子本来就很刻薄，感觉又要挑起我神经了。话说，你有没有受伤？", 33, 2410003, true, true);
                                  cm.effect_Voice("Voice.img/Milro/13", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face5#我很好，没有受伤。谢谢你这么关心。", 41, 2410008, true, true);
                                    cm.effect_Voice("Voice.img/Alpha/61", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("没受伤就好，受伤了不就得住院吗。#p2410000#医疗队长虽然一直面带微笑，不是那种可怕的人……但是也不想和他一起待一天……不是吗，#p2410004#？？", 33, 2410003, true, true);
                                      cm.effect_Voice("Voice.img/Milro/14", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("你以前手腕受伤的时候不是住进医院了吗，那个时候你说都快要憋死了什么的。", 33, 2410003, true, true);
                                        cm.effect_Voice("Voice.img/Milro/15", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("别说没用的话！一提到那事情我就气愤……放在诊室的那个#r拼图#k……简直是最低级的趣味。换作是我，拿都不会拿出来。", 33, 2410004, true, true);
                                          cm.effect_Voice("Voice.img/Ken/5", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("也对，拿出来也看不懂，还能怎么办。哼。", 33, 2410004, true, true);
                                            cm.effect_Voice("Voice.img/Ken/6", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("啊！对了，#p2410008#你应该很累了吧？快回去休息吧，我来替你汇报。", 33, 2410003, true, true);
                                              cm.effect_Voice("Voice.img/Milro/16", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face5#啊……真是太感谢你了。那么就拜托你了，前辈，我就先告辞了。", 41, 2410008, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/62", 100);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(321000800, 1, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;