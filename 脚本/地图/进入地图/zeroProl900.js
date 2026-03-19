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
      cm.npc_ChangeController(2410000, 'oid=23610', -571, -81, 109, -621, -521, 0, false, 0, false);
      cm.npc_ChangeController(2410001, "oid=23611", 104, -213, 75, 54, 154, 1, false, 0, false);
      cm.npc_ChangeController(2410002, 'oid=23612', -121, -213, 75, -171, -71, 0, false, 0, false);
      cm.npc_ChangeController(2410005, "oid=23613", 291, -6, 122, 241, 341, 1, false, 0, false);
      cm.npc_ChangeController(2410004, "oid=23614", -189, -6, 121, -239, -139, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_ScreenMsg("zero/before1hour");
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(什么事情这么突然？……昨天和今天都有了战斗，应该安静一段时间才是正常啊。)", 41, 2410008, false, true);
        cm.effect_Voice("Voice.img/Alpha/71", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("虽然很突然，但是要发表意见是一项重大的事情！所有人都注意！这次要进行前所未有的作战！名曰：影子神殿抹杀作战！", 33, 2410001, false, true);
              cm.effect_Voice("Voice.img/Kaison/3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("作战内容非常简单！进入#m321000600#，将里边所有的#o9300744#全部一网打尽……不要讨论！", 33, 2410001, true, true);
                cm.effect_Voice("Voice.img/Kaison/4", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face7# #b(可恶，他说什么？进攻#m321000600#？！)", 41, 2410008, false, true);
                    cm.effect_Voice("Voice.img/Alpha/72", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你这么惊讶我能够理解！但是最近#m321000600#里发现了至今为止从未有过的动静，而且这个动静昨天达到了最高潮！", 33, 2410002, true, true);
                      cm.effect_Voice("Voice.img/Layla/11", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("因此，我们影子骑士团的队长们纷纷决定不能坐视不顾，要马上进攻把#m321000600#恢复原样。", 33, 2410002, true, true);
                        cm.effect_Voice("Voice.img/Layla/12", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("当然，这会非常危险！但是冒着生命危险来维护世界，正是我们的责任！有意见等到战斗结束之后再提吧！", 33, 2410002, true, true);
                          cm.effect_Voice("Voice.img/Layla/13", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("只要这次的战斗能够成功结束，说不定就能完全消灭#o9300744#！为了那个时刻，大家要用尽全力！", 33, 2410002, true, true);
                            cm.effect_Voice("Voice.img/Layla/14", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face7# #b(发现了前所未有的动静……难道，我进入神殿还是被发现了？)", 41, 2410008, true, true);
                              cm.effect_Voice("Voice.img/Alpha/73", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face7# #b(不行……！我已经开始揭开事件的真相……)", 41, 2410008, true, true);
                                cm.effect_Voice("Voice.img/Alpha/74", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("请稍等，#p2410008#。你能到这来一下吗？", 33, 2410000, true, true);
                                  cm.effect_Voice("Voice.img/Will/15", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face0#你昨天和今天连续两天参与了个别战斗，你现在的状态不适合参加本次任务。", 33, 2410000, false, true);
                                        cm.effect_Voice("Voice.img/Will/16", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face0#很遗憾，这次的任务希望你能留在后方支援部队里。", 33, 2410000, true, true);
                                          cm.effect_Voice("Voice.img/Will/17", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face1#后方部队？我属于攻击部队，而且我一次也没有在后方部队战斗过……！", 41, 2410008, false, true);
                                              cm.effect_Voice("Voice.img/Alpha/75", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("我知道……但是昨天#p2410008#不是也勉勉强强地完成了任务吗？现在这个状态不适合战斗。", 33, 2410000, true, true);
                                                cm.effect_Voice("Voice.img/Will/18", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#face1#昨天只是在追逐的时候花了些时间而已，我现在一点事情也没有！请让我参加战斗！", 41, 2410008, true, true);
                                                  cm.effect_Voice("Voice.img/Alpha/76", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("……看来你真的很想参加战斗……也对，因为#p2410008#从小开始就成为了影子骑士，也会珍惜作为影子骑士的遗物。对吧？", 33, 2410000, true, true);
                                                    cm.effect_Voice("Voice.img/Will/19", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("那么就没办法了……来，这是影子中和剂。要参加战斗就要吃一个，对吧？", 33, 2410000, true, true);
                                                      cm.effect_Voice("Voice.img/Will/20", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face11# #b(……影子中和剂……！这只不过是洗脑用的药物而已。如果现在吃下去，至今为止所掌握的情报说不定会全部回调……绝对不能吃……！)", 41, 2410008, true, true);
                                                        cm.effect_Voice("Voice.img/Alpha/77", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#face2#你在犹豫什么，#p2410008#？难道……你不打算吃中和剂就参加战斗吗？#p2410008#的实力再怎么出众，也不能允许。", 33, 2410000, true, true);
                                                          cm.effect_Voice("Voice.img/Will/21", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("#face11# #b(这个眼神……难道知道了我在怀疑吗？可恶……我到底该怎么办？)", 41, 2410008, true, true);
                                                            cm.effect_Voice("Voice.img/Alpha/78", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("#face10#……不……正如你所说，如果我参加了这次战斗，如果妨碍了别人可不太好。", 41, 2410008, true, true);
                                                              cm.effect_Voice("Voice.img/Alpha/79", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("#face5#对不起，妨碍了你的工作，#p2410000#医疗队长。这次我就在后方支援部队里待命吧。", 41, 2410008, true, true);
                                                                cm.effect_Voice("Voice.img/Alpha/80", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("很好，#p2410008#。那么你就在这里安静地等着我们回来吧。", 33, 2410000, true, true);
                                                                  cm.effect_Voice("Voice.img/Will/22", 100);
                                                                } else if (status === V++) {
                                                                  cm.dispose();
                                                                  cm.warp(321001000, 0, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;