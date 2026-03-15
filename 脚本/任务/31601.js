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
      cm.sendNormalTalk("呃啊~ 嘿嘿嘿…哇哇！你不是？最近因诺巴翅膀声名四起的……四起的……那个……天……天……什么来着？", 0, 3001007, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b爆-莉-萌天使！出什么事了，哭的好像世界末日似的？", 2, 3001007, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("呜呜……早上幽灵突然袭击，打伤了很多士兵。幸好皮塔斯和伊黛娜一马当先，全力阻止惨剧发生。虽然士兵们的牺牲得以最小化，但他们两位却被幽灵包围了。呜呜……", 0, 3001007, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b也就是说，是我爆莉萌天使出场的时候啦！向着总部正门，前进！", 2, 3001007, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("可是本部正面已经有狂龙战士负责了……", 0, 3001007, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b?! 那还有什么可担心的？看来没我什么事了。狂龙战士很厉害的。", 2, 3001007, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("但是后来发现有敌人正从总部后方袭来……可就是联系不上狂龙战士，所以现在总部已经被彻底包围了……呜呜", 0, 3001007, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("#b?! 什么~是这样啊?! (虽然把刚才说过的话再说一遍有点那个……) 也就是说，是我爆莉萌天使出场的时候啦！向着总部后方，前进！", 2, 3001007, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("那个……这句话刚才不是说过了吗？", 0, 3001007, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("#b(装作完全不知道的样子……)呃啊。说过了啊。现，现在去总部后方就行了吧？", 2, 3001007, true, true);
                      } else {
                        if (status === v++) {
                          cm.askAcceptDecline("是的！拜托你了。\r\n#b#e(接受后，即刻移动到战场地图。需要重新开始时，请放弃任务。)#n#k", 0, 3001007);
                        } else if (status === v++) {
                          cm.forceStartQuest(31601, '');
                          cm.forceJoinEvent("爆莉萌天使_赫里希安_清怪1");
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
      cm.sendNormalTalk("我不放心总部后方，所以才去看看……结果吓我一跳。看您干掉敌人的帅气身影，我想您一定是被誉为战场女神的爆莉萌天使吧？！", 0, 3001015, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("吼吼。仅靠力量还未全部觉醒的狂龙战士还无法制胜。现在终于可以思考一下如何做战略上的抉择了。如果你不是路过这里，而是特地来帮助赫里希安的话，请到 #b#m401000001##k来吧。我在这里等你。\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 169,497", 0, 3001015, true, true);
      } else if (status === v++) {
        cm.npc_LeaveField("oid=1077507");
        cm.forceCompleteQuest(31601);
        cm.gainExp(169497);
        cm.dispose();
      }
    }
  }
}