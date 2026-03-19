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
      cm.onZeroInfo(2);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("真安静……就像沙图团预想的一样，所有的警卫好像都去守护蓝色眼泪了。但是着火的话，肯定会乱得一塌糊涂的……但是什么时候会给信号呢？沙图团这帮家伙，太慢了。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('已经夜深了……', 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("就是说啊，在这么下去如果幻影出现了，就麻烦了……还是等等吧？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2420015, "oid=2083764", -707, 263, 14, -757, -657, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=2083764", 'summon', 0, 0);
              cm.npc_SetForceMove("oid=2083764", 1, 600, 100);
              cm.fieldEffect_PlayBGM("Bgm19/DancingWitnTheMoon", 0, 0);
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
              cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face6#……话刚说完，#b怪盗幻影#k就出现了？！沙图团在做什么？！该不会是把我们骗了吧？", 41, 2400005, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("咦？我还以为甩掉了所有人，后门怎么还有人呢？这位小姐也是在等我的吗？嗯~非常感谢你对我的炽热的爱情，但是我现在很忙。那么后会有期咯。", 33, 2420015, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("…………？", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face0#说什么话呢？！别胡说！", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("嫉妒了？", 33, 2420015, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face0#嫉什么妒啊？！少废话，把蓝色眼泪叫出来！", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("蓝色眼泪？啊，这个呀？嗯……我就说你们怎么没穿警卫服呢，难道你们是小偷吗？偷盗可不是好事哦。", 33, 2420015, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face0#小偷不正是你自己吗！", 41, 2400005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("哎呦，吵死了。警卫兵都要被你们给招来了。", 33, 2420015, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face1#看来你是说不通啊！那只能用武力了！", 41, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("不是小偷而是强盗？！哈啊，这就难办了。我可是非暴力主义者，不喜欢打架的。小姐，能不能语言解决啊？", 33, 2420015, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("……只要给蓝色眼泪……？", 41, 2400006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face0#什么给蓝色眼泪！别被他给骗了，你也做好战斗的准备！", 41, 2400005, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("额额，真的要打吗？一旦开打了，我可是不分男女……没有关系吗？我给你们机会重新考虑一下……", 33, 2420015, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face1#你想拖延时间，趁机逃跑吧！快打！", 41, 2400005, true, true);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=2083764");
                                            cm.spawnMobLimit(9300762, 1, -107, 275, 100);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;