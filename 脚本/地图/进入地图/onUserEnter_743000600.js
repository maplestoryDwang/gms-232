var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.isQuestFinished(52403) && cm.getQuestStatus(52411) == 0) {
        cm.forceCompleteQuest(52407);
        cm.npc_ChangeController(9330208, "oid=103759", -251, 150, 1);
        cm.npc_ChangeController(9330209, "oid=103760", -66, 150, 0);
        cm.npc_ChangeController(9330215, 'oid=103761', 164, 86, 1);
        cm.npc_ChangeController(1090000, "oid=103762", 129, 150, 1);
        cm.sendNormalTalk("起来了？身体还好吗？", 1, 9330215, false, true);
      } else {
        cm.dispose();
        return;
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk("啊…还好。救我的人是你吗？", 3, 9330215, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("真是厉害？没错。我开着很久没开的诺特勒斯号前往异国的海洋，就发现你。", 1, 9330215, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("啊…… 啊！秀禾…… 秀禾现在他的状况怎样呢？", 3, 9330215, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("啊…你是说和你在一起的女人吗？现在躺在那里。伤势严重，已经做了紧急处理。还要再观察看看，可是已经度过了危险期。", 1, 9330215, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啊…… 真的太好了…太好了。", 3, 9330215, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("总之，请不要担心！我们会好好照顾！", 1, 9330215, true, true);
                } else {
                  if (status === V++) {
                    cm.askAcceptDecline("很好~我收你为海盗的一员！准备好了吗！", 0, 1090000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("很好！从现在起你就是我们的同伴了！一开始要过流浪者的生活，可是过不久像天堂般的日子就会来临了~", 0, 1090000, false, true);
                    } else {
                      if (status === V++) {
                        cm.gainItem(1352820, 1);
                        cm.gainItem(1492144, 1);
                        cm.gainItem(1142727, 1);
                        cm.gainItem(3010408, 1);
                        cm.sendNormalTalk("还有给你一把枪，这把枪是你来这里时，和你在一起的朋友，说要转交给你的枪。模样特殊看起来是很珍贵的物品。", 0, 1090000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("欢迎来到诺特勒斯。如果你不打算出海的话，这里没什么好看的。请离开甲板好吗？", 0, 1090000, false, false);
                        } else {
                          if (status === V++) {
                            while (cm.getPlayer().getLevel() < 10) {
                              cm.getPlayer().levelUp();
                            }
                            cm.changeJob(508);
                            cm.forceCompleteQuest(52411);
                            cm.forceCompleteQuest(52412);
                            cm.forceStartQuest(65235, '');
                            cm.warp(100000201, 2, false);
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