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
  } else if (status == v++) {
    cm.forceStartQuest(31638, '');
    cm.dispose();
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
      cm.sendNormalTalk("？什么事。现在我没有事情要拜托你，如果你没什么的事的话，就请回吧……", 0, 3001030, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("(脸色怎么这么差……果然是业绩下降才这样的吗？)啊，没什么事啊。", 2, 3001030, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("事……有事……很多事……爆莉萌天使", 0, 3001030, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("上次是你将#o2400104#全部买光的吧？听#p3001006#说，#r#p3001005#为了妨碍我的生意，特地雇佣了你#k……", 0, 3001030, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("(什么？他是不是搞错了？)嗯？不……不可能", 2, 3001030, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("看他吞吞吐吐的样子，应该是真的。原来你也是这样的人。最终还是为了钱……", 0, 3001030, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("(好像哪里不对劲啊？哪里呢？)", 2, 3001030, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("好了。我想一个人待会，不要管我。再见。", 0, 3001030, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("等，等等啊。#p3001004#~啊，通信断了。看来得再打过去才行。\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 13,871", 2, 3001030, true, true);
                    } else if (status === v++) {
                      cm.forceCompleteQuest(31638);
                      cm.gainExp(13871);
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