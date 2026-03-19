var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(25515)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(20737)) {
      cm.dispose();
      cm.forceCompleteQuest(20737);
      return;
    } else {
      if (cm.isQuestFinished(20951)) {
        if (cm.getMapId() != 130090000) {
          cm.warp(130090000, 1, true);
        }
        cm.dispose();
        return;
      } else {
        cm.dispose();
      }
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("见到你很高兴，夜光法师。听说你是击败黑魔法师的最后一位英雄。", 1, 1404008, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("我突然邀请你，没让你感到惊讶吧？", 1, 1404008, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("说起来，我很意外你竟然知道我的身份。我还以为这个世界上已经没有人记得我们了。", 3, 1404008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你可以认为是我的家族代代相传的家族史。这不重要，我有话要对你说。", 1, 1404008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不久前，我发觉黑暗力量重新侵入了这个世界。虽然上一次你和其他四位英雄费尽一切封印了黑魔法师，但现在没有如同你们当时那样的英雄。", 1, 1404008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("好在我找到了其他几位英雄。正是在冒险岛世界进行探险的无数冒险家，以及和邪恶集团对抗的各位反抗者。现在他们都朝着各自的理想努力，有不同的世界观。但我相信大家一定会为了阻止黑魔法师欣然地凝聚成一股力量。我打算和这些人一起对付黑魔法师。", 1, 1404008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("数百年前，也许只有你们五位和黑魔法师战斗……但现在不同，会有无数的人和你并肩作战。我会让这一切成为现实的。", 1, 1404008, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("所以，希望你能助我一臂之力。", 1, 1404008, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("希纳斯，你和阿莉亚既相像，又有些不同啊。我真想知道如果幻影见到你会是怎么样的情景。", 17, 1404008, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("好吧，如果我们的命运再次交织在一起，我很高兴协助你。", 17, 1404008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("谢谢你，我希望那天早点到来，夜光法师。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 36700 exp", 1, 1404008, true, true);
                        } else if (status === V++) {
                          cm.playerMessage(-1, "获得联盟的意志技能！");
                          cm.playerMessage(5, "获得了<联盟的意志>技能。");
                          cm.gainExp(36700);
                          cm.teachSkill(20040190, 0, -1);
                          cm.teachSkill(20040190, 1, 0);
                          cm.forceStartQuest(25515, '');
                          cm.forceCompleteQuest(25515);
                          cm.eventSKill(0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.gainItem(1142355, 1);
                          cm.dispose();
                          cm.warp(130030006, 1, false);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}