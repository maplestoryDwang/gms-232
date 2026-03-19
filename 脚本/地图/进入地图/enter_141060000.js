var status = -1;
function action(f, E, e) {
  status++;
  cm.gainSkillBuff(80001346);
  if (cm.isQuestActive(32163)) {
    cm.sendNext("你说过你是第一次航海吧？航海没什么难的。这个地区的海峡不算很宽。只要之间有大海相连，你想去哪里都行。\r\n\r\n如果你要搜集木材，就用#b鼠标#k点击前面漂浮的受难船碎片进行调查吧。", 1510006);
  } else {
    if (cm.isQuestActive(32167)) {
      cm.sendNext("第1观测站在总部上方，从总部过去很近，不难找的。", 1510006);
    } else {
      if (cm.isQuestActive(32170)) {
        cm.sendNext("声音是从西边传来的……我们到左边去瞧瞧吧，航海士？", 1510006);
      } else {
        if (cm.isQuestActive(32171)) {
          cm.sendNext("谢谢你救了我，航海士。你要到总部去吗？", 1510007);
        } else {
          if (cm.isQuestActive(32173)) {
            cm.sendNext("你往下走，就能看见第2观测站，航海士。", 1510006);
          } else {
            if (cm.isQuestActive(32176)) {
              cm.sendNext("环境污染是个很严重的问题……元凶真的是魔女吗？不管怎样，我们先回总部吧，航海士！", 1510007);
            } else {
              if (cm.isQuestActive(32177)) {
                cm.sendNext("航海士，我们去消灭邪恶的魔女芭芭拉吧！一直往右走到底，在下方就能找到她。", 1510006);
              } else {
                if (cm.isQuestActive(32179)) {
                  cm.sendNext("在大海上可以钓鱼耶。你到鱼群聚集区上方去，使用物品栏里的#b#i2431796##b#t2431796##k吧。", 1510007);
                } else {
                  if (cm.isQuestActive(32180)) {
                    cm.sendNext("魔女是清白的……航海士，你到总部去吧。", 1510006);
                  } else {
                    if (cm.isQuestActive(32182)) {
                      cm.sendNext("第3观测站位于海峡中央的正上方，航海士。", 1510006);
                    } else {
                      if (cm.isQuestActive(32186)) {
                        cm.sendNext("航海士，向总部前进吧！", 1510007);
                      } else {
                        if (cm.isQuestActive(32187)) {
                          cm.sendNext("你要去冰川破坏者的巢穴啊，航海士。你往右上方最偏僻的地方走就能到达。", 1510006);
                        } else if (cm.isQuestActive(32191)) {
                          cm.sendNext('返回总部吧，航海士！', 1510006);
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
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;