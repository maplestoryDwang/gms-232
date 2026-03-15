var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("如果织田军和冒险岛世界的恶势力黑色之翼联手，那不仅日本，整个冒险岛世界都会受到威胁……", 57, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("这件事可不简单。不仅我们晓之阵盟军，连冒险岛世界的居民们都会很危险。稍有差池，曾经日本因织田信长陷入恐惧中的惨象，会再次在冒险岛世界上演。我们快去将这件事告诉hellena吧。", 57, 0, 1);
      } else if (status === v++) {
        cm.forceStartQuest(57491, '');
        cm.OnStartNavigation(100000201, 1, "1012100", 0);
        cm.dispose();
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo_Bottom("#face0##h0#，你回来啦。得到你想要的情报了吗？", 37, 1012100, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("我见过了你之前所说的黑色之翼干部，和黑色之翼接触的人应该是织田军。", 57, 0, false, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#黑色之翼干部怎么会……难道！？！？", 37, 1012100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("织田军好像准备扩大势力，统治这个世界。", 57, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#所以，黑色之翼和织田军联手了吗？", 37, 1012100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("我遇见的黑色之翼干部属于中间管理层，无法直接做出决定，所以他只能向主人报告。他告诉我，他也不知道主人会做出怎样的决定。如果那位主人能够拒绝自然最好，但假如这两股势力真的联手……", 57, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#虽然我不知道那个叫做织田信长的人物，但从#h0#你的话听来，这次事件就像黑色之翼出现在冒险岛世界那时一样，十分危险。所以，我们不能坐以待毙。", 37, 1012100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##h0#，既然你我的敌人联手，那我们也应该合作，共同度过这次危机，不是吗。作为冒险岛世界的一员，我答应会与你合作。", 37, 1012100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#还有圣地的冒险骑士团，埃德尔斯坦的反抗者，以及在各地游历的英雄们……请你将这件事转告冒险岛世界中的所有人。大家必须团结合作，保护世界免于两个邪恶组织的迫害。", 37, 1012100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom(" 谢谢。虽然来到这里很冒险，但找到hellena您果然是个正确的决定。我也会把这件事告知枫叶山丘的盟军大本营，与冒险岛世界的各位合作，一起对抗织田军、黑色之翼两股势力。", 57, 0, true, true, 1);
                      } else if (status === v++) {
                        cm.forceCompleteQuest(57491);
                        cm.gainExp(7682);
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