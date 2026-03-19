var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getNumberFromQuestCustomData(40005) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2410001, "oid=23562", 100, 296, 10, 50, 150, 1, false, 0, false);
      cm.npc_ChangeController(2410002, "oid=23563", -20, 296, 9, -70, -20, 1, false, 0, false);
      cm.npc_ChangeController(2410000, "oid=23564", 322, 296, 10, 272, 372, 1, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm33.img/NastyLiar", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.updateInfoQuest(41910, "clear=clear");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
      cm.teachSkill(100001273, 0, -1);
      cm.teachSkill(100000275, 0, -1);
      cm.teachSkill(100000278, 0, -1);
      cm.teachSkill(100001273, 1, 0);
      cm.teachSkill(100000275, 1, 0);
      cm.teachSkill(100000278, 1, 0);
      cm.teachSkill(100001262, 1, 0);
      cm.teachSkill(100001263, 1, 0);
      cm.teachSkill(100001264, 1, 0);
      cm.teachSkill(100001265, 1, 0);
      cm.teachSkill(100001266, 1, 0);
      cm.teachSkill(100000267, 1, 0);
      cm.teachSkill(100001268, 1, 0);
      cm.teachSkill(100000282, 1, 0);
      cm.teachSkill(101000103, 8, 10);
      cm.teachSkill(101000203, 8, 10);
      if (!cm.haveItem(1003840)) {
        cm.gainItem(1003840, 1);
      }
      if (!cm.haveItem(1113060)) {
        cm.gainItem(1113060, 1);
      }
      if (!cm.haveItem(1113061)) {
        cm.gainItem(1113061, 1);
      }
      if (!cm.haveItem(1113062)) {
        cm.gainItem(1113062, 1);
      }
      if (!cm.haveItem(2001530)) {
        cm.gainItem(2001530, 100);
      }
      if (!cm.haveItem(1142634)) {
        cm.gainItem(1142634, 1);
      }
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("zero/before1day");
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……终于，在本次战斗中的13只#o9300744#全部确认消灭完毕。战斗进行时间为1分30秒，我军无任何伤亡。以上。", 41, 2410008, false, true);
              cm.effect_Voice("Voice.img/Alpha/0", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("好像比预计的慢了些，以后会尽力缩短时间的。", 41, 2410008, true, true);
                cm.effect_Voice("Voice.img/Alpha/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我以为要花2小时，但是结果却出奇的快。没有必要再缩短了，已经非常优秀了。", 33, 2410001, true, true);
                  cm.effect_Voice("Voice.img/Kaison/0", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这种程度应该是充分确认过了吧，#p2410002#攻击队长。#p2410008#属于攻击队，由攻击队长来判断吧。", 33, 2410001, true, true);
                    cm.effect_Voice("Voice.img/Kaison/1", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("通过9轮的战斗能力评价，我觉得#p2410008#骑士战斗等级应该再提高一阶段。", 33, 2410002, true, true);
                      cm.effect_Voice("Voice.img/Layla/0", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("个人做了相当于整个部队的事情，如果不提高等级的话我觉得太吃亏了。所以我赞成。", 33, 2410002, true, true);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice.img/Layla/1", 100);
                          cm.sendNormalTalk("继最年轻骑士之后，又要诞生最年轻S级骑士了吗？嘿嘿……好像我们影子骑士团的记录，都被#p2410008#给刷新了。祝贺你，#p2410008#。", 33, 2410000, true, true);
                          cm.effect_Voice("Voice.img/Will/0", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face5#不不，只是运气好而已。非常感谢如此器重我，以后我也会继续努力，不会让大家失望。", 41, 2410008, true, true);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice.img/Alpha/2", 100);
                              cm.sendNormalTalk("这谦逊的态度也正是影子骑士的风范，希望你不要忘记了。那么你先回去休息吧，#p2410008#。", 33, 2410002, true, true);
                              cm.effect_Voice("Voice.img/Layla/2", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face5#那个……我有件事情想跟队长说。我可不可以请求执行一个任务？", 41, 2410008, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice.img/Alpha/3", 100);
                                  cm.sendNormalTalk("防御队的骑士#p2410004#在2周前的战斗中受伤了，但是好像还没有完全康复。", 41, 2410008, true, true);
                                  cm.effect_Voice("Voice.img/Alpha/4", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("如果我的任务还没有定下来的话，我希望能替#p2410004#执行任务。刚好本次战斗之后，#o9300744#会消失一段时间，请你允许这项任务。", 41, 2410008, true, true);
                                    cm.effect_Voice("Voice.img/Alpha/5", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("防御队的#p2410004#……是粮食运输任务的那个骑士吗？#p2410008#，你也想去运送粮食啊？", 33, 2410001, true, true);
                                      cm.effect_Voice("Voice.img/Kaison/2", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("对，是的。", 41, 2410008, true, true);
                                        cm.effect_Voice("Voice.img/Alpha/6", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [1500, -14, 185, 1, 0, 1, 1, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [1500, 99, 180, 1, 0, 1, 1, 0]);
                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10"], [1500, 322, 178, 1, 0, 1, 1, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("……粮食运送任务发生战斗的情况很少，是很单纯的运输工作。只要从其他村子把粮食拿回来就行了。", 33, 2410000, false, true);
                                            cm.effect_Voice("Voice.img/Will/1", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("看似简单，但是影子森林本身就非常大，而且村子离这里还比较远，肯定会需要很长时间……我不知道你要做这件事的理由是什么？#p2410008#？？", 33, 2410000, true, true);
                                              cm.effect_Voice("Voice.img/Will/2", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face10#嗯……众所周知，因为我从小是在#m321000100#长大的，所以一次都没去过其他地方。我想借此机会看看世界，顺便也长长见识。", 41, 2410008, true, true);
                                                cm.effect_Voice("Voice.img/Alpha/7", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("是嘛。#p2410008#也已经到了那个时候了，不过……", 33, 2410000, true, true);
                                                  cm.effect_Voice("Voice.img/Will/3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("#face0##p2410008#，你也知道我们影子骑士团要盯着从影子神殿诞生的#o9300744#，不能让其破坏这个世界。", 33, 2410000, true, true);
                                                    cm.effect_Voice("Voice.img/Will/4", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#face0##o9300744#是接触一下就能够消灭人类的危险怪物，只要有一只从这里逃出去了，整个世界就会变成混乱。", 33, 2410000, true, true);
                                                      cm.effect_Voice("Voice.img/Will/5", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face0#想想我们所肩负的任务，将#p2410008#这么有才的骑士派去做那么小的任务，这是人力资源的极大浪费啊。", 33, 2410000, true, true);
                                                        cm.effect_Voice("Voice.img/Will/6", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("还有……呵呵，可能#p2410008#你会很期待，但是也没有你想象得那么有趣。因为运输粮食的任务时间紧迫，根本就没有时间去欣赏沿途风景。", 33, 2410000, true, true);
                                                          cm.effect_Voice("Voice.img/Will/7", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("还不如把精力集中在消灭#o9300744#，如何？我们把#o9300744#全都消灭掉，再把影子神殿封闭起来，到那个时候你想去哪里都可以。", 33, 2410000, true, true);
                                                            cm.effect_Voice("Voice.img/Will/8", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("一向成熟的#p2410008#能说出这么可爱的想法，真是让我大吃一惊啊？呵呵……看到了#p2410008#的另一面，我感到很高兴。", 33, 2410000, true, true);
                                                              cm.effect_Voice("Voice.img/Will/9", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("目前的情况还不能给#p2410008#那个任务……我知道#p2410008#能够理解。", 33, 2410000, true, true);
                                                                cm.effect_Voice("Voice.img/Will/10", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("#face5#是的！作为影子骑士我知道义务才是最重要的。很抱歉我说了些没用的话。", 41, 2410008, true, true);
                                                                  cm.effect_Voice("Voice.img/Alpha/8", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("不不。你还是快回去休息吧，战斗的疲劳肯定还没退去。", 33, 2410000, true, true);
                                                                    cm.effect_Voice("Voice.img/Will/11", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      cm.effect_REPEAT("Effect/Direction13.img/effect/zero/guide/0", 1, 1, 0, -410, 150);
                                                                    } else if (status === V++) {
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.dispose();
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
}