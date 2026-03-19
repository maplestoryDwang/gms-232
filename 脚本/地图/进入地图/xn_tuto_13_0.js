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
      cm.npc_ChangeController(2159386, "oid=307196", -248, 58, 26, -298, -198, 4, true, 0, false);
      cm.npc_ChangeController(2159384, "oid=307197", -50, 58, 27, -100, 0, 5, true, 0, false);
      cm.npc_ChangeController(2159385, "oid=307198", 41, 58, 27, -9, 91, 1, false, 0, false);
      cm.npc_ChangeController(2159387, "oid=307199", -340, 58, 25, -390, -290, 4, true, 0, false);
      cm.npc_ChangeController(2159388, "oid=307200", 121, 58, 28, 71, 171, 1, false, 0, false);
      cm.npc_ChangeController(2159381, "oid=307201", -171, 58, 26, -221, -121, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("吉格蒙特！还好你没事。你不知道我有多担心。", 1, 2159385, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("谢谢你，贝尔。", 1, 2159384, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("但是……这家伙是谁？从刚才的情况看，好像不是敌人，所以也把他带来了。", 1, 2159388, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("应该是格里梅尔的部下。刚见到的时候，他还想攻击吉格蒙特。……这段时间到底发生了什么事？刚才的情况真是让人看不懂。", 1, 2159386, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我也搞不太清楚，但他不是个坏人。他是我的救命恩人。不仅如此，他好像失去了记忆，被关在格里梅尔的研究所里。", 1, 2159384, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("话虽这么说，但之前你不也看见了吗？我看这个人好像受到了格里梅尔的操纵。让他进入秘密广场真的没关系吗？要是他再次受到操纵，那该怎么办？", 1, 2159387, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg0/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那个装置，我应该可以拆除……", 1, 2159380, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=0"], [1200, -250, -60, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=0"], [1200, 50, -90, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=0"], [1200, -60, -50, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=0"], [1200, 130, -50, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1", "oid=0"], [1200, -340, -100, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("那就马上拆除。总不能把那种危险的东西一直带在身上。", 1, 2159388, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("但是这好像不是单纯用于操纵的装置……好像还包含有战斗系统。如果把它拆掉，系统就会失效，#h0#你会变得比现在弱得多。格里梅尔随时可能派出追踪者，那样做太危险了。", 1, 2159380, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("没关系，鲁提。能拆掉的话，就拆掉吧。", 3, 2159380, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("真的？你不后悔？", 1, 2159380, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("系统只要慢慢修复就行，虽然会花费一点时间……。但是如果被操纵，那就完蛋了。所以带着那种装置反而更危险。我不想再被人操纵了。", 3, 2159380, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("既然你这么说，明白了，我马上帮你拆除。", 1, 2159380, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("好的，拆掉了。刚开始会不太熟悉，可能会感觉有点困难。", 1, 2159380, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(39391, "level=1");
                                          cm.gainExp(1242);
                                          cm.teachSkill(30020233, 0, -1);
                                          cm.updateInfoQuest(1073, "3600=10");
                                          cm.teachSkill(30021238, -1, 0);
                                          cm.teachSkill(30020232, 1, 1);
                                          cm.teachSkill(30020234, 1, 1);
                                          cm.teachSkill(30021237, 1, 1);
                                          cm.teachSkill(30020240, 1, 1);
                                          cm.forceStartQuest(23711, '1');
                                          while (cm.getLevel() < 10) {
                                            cm.getPlayer().levelUp();
                                          }
                                          cm.changeJob(3600);
                                          cm.gainItem(2000018, 15);
                                          cm.gainItem(1142575, 1);
                                          cm.gainItem(3010585, 1);
                                          cm.dispose();
                                          cm.warp(310010000, 0, false);
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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