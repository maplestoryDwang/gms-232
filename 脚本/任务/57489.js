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
      cm.sendNormalTalk_Bottom("#face0#我想他应该是找我有事才会来弓箭手培训中心……但怎么办呢，我根本记不住他的名字。", 37, 1012100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("(告诉hellena受次元移动影响，本能寺一带被转移到了冒险岛世界，并向她说明了关于我们的敌人织田信长的情况。)", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#你不是冒险岛世界的人，而是来自另一个世界？这……有点令人难以置信呢。啊，别误会。我不觉得你在说谎，只是，听到这些太突然了……", 37, 1012100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#目前情况太复杂了，我也想尽可能与你合作……但可惜，我们对次元移动和第六天魔王一点都不了解。", 37, 1012100, true, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face0#魔法密林魔法图书馆中有一位叫hainz的魔法师，他知晓世间许多知识，我会给你写一封介绍信，你不如去找hainz聊聊如何？", 37, 1012100, 1);
            } else {
              if (status === v++) {
                cm.forceStartQuest(57489, '');
                cm.OnStartNavigation(101000003, 0, '', 0);
                cm.sendNormalTalk_Bottom("#face0#你可以走着去魔法密林，但乘坐村庄的中巴会更方便一些。", 37, 1012100, false, true, 1);
              } else if (status === v++) {
                cm.gainItem(4033308, 1);
                cm.dispose();
              }
            }
          }
        }
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
      cm.sendNormalTalk_Bottom("#face0#你来自其它次元吗？不久前我收到了hellena的消息。她说你是来自异世界的访客，很高兴见到你这样的客人。欢迎来到冒险岛世界！", 37, 1032001, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("谢谢你热情的欢迎。不好意思，一见面就要向你提问，你能告诉我关于次元移动和第六天魔王的情况吗？", 57, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face0#很遗憾，我也不清楚详情。尤其是关于那个叫做第六天魔王的存在，我第一次听说。但是，魔法密林图书馆的诸多书籍中也许有能够帮助到你的内容，你要和我一起找找看吗？", 37, 1032001, 1);
        } else {
          if (status === v++) {
            cm.forceCompleteQuest(57489);
            cm.gainExp(3201);
            cm.sendNormalTalk_Bottom("(花费大量时间查阅了图书馆的藏书，但并没有得到有帮助的情报。)", 57, 0, false, true, 1);
          } else {
            if (status === v++) {
              cm.gainItem(4033308, -1);
              cm.sendNormalTalk_Bottom("#face0#很遗憾，没有找到什么对你有帮助的内容。抱歉，没能帮到你。我也对这件事十分感兴趣呢……", 37, 1032001, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("hainz您不必道歉。我非常感谢您愿意抽出时间来，帮助我这个异邦人。", 57, 0, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#这里的藏书，并不能记录下冒险岛世界的所有知识，所以别太失望。周游冒险岛世界的过程中，你一定会得到自己想要的知识。到时，希望你也能把那些知识同我分享。", 37, 1032001, true, true, 1);
                } else if (status === v++) {
                  cm.sendNormalTalk("欢迎你来到魔法图书馆。不过这里好像没有你适合阅读的书哦……", 0, 1032001, false, false);
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