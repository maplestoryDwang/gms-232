var status = -1;
function action(f, W, U) {
  var V = cm.getEventManager("副本_列娜海峡_迷路的诺拉");
  var w = V.getNumberProperty("state");
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (w > 1) {
      cm.sendNextNoESC("越是这样的时候，就越要沉着……要沉着……");
    } else {
      cm.sendOk("请消灭我周围的怪物！\r\n#b（消灭所有怪物后，再次对话。）");
      cm.dispose();
    }
  } else {
    if (status == 1) {
      cm.sendNextNoESC("呃，怪物都消失了耶？它们哪儿去了？");
    } else {
      if (status == 2) {
        cm.sendNextNoESC("啊，是勇士你救了我啊！我刚刚好像听见叮铃哐啷的声音……真的很谢谢你！");
      } else {
        if (status == 3) {
          cm.sendNextNoESC("我的名字叫#b诺拉#k，我是考古字家。\r\n\r\n因为我对永久冻土和冰川地区很感兴趣，所以来到了里恩这地方。我见到有的化石外形奇异，就拿放大镜仔细观察，谁知那化石竟突然动起来，袭击了我。真是吓死人了。");
        } else {
          if (status == 4) {
            cm.sendNextNoESC("哎，勇士，你来这里有什么事？");
          } else {
            if (status == 5) {
              cm.sendNextSNoESC("#b（把我帮助这里的原住民寻找魔女行踪的事告诉了学者诺拉。）");
            } else {
              if (status == 6) {
                cm.sendNextNoESC("魔女？你说那些怪物的出现，以前海平面上升都是魔女造成的？");
              } else {
                if (status == 7) {
                  cm.sendNextNoESC("这不可能。这些化石是由于气温上升导致永久冻土融化，基础岩石层在拥有魔法力量的矿物影响下，自然而然地掉落而形成的。简单点说，它们是自然生成的怪物。不是人为召唤出来的。");
                } else {
                  if (status == 8) {
                    cm.sendNextNoESC("还有，海平面的上升……真的是魔女捣的鬼吗？会不会另有原因？");
                  } else {
                    if (status == 9) {
                      cm.sendNextNoESC("我想麻烦你一件事，你在这地方调查的期间，我能不能和你同行？请你接受我当你的同伴吧！");
                    } else {
                      if (status == 10) {
                        cm.sendNextSNoESC("#b（这位年轻学者的知识应该会有助于我解这地方的问题。）");
                      } else {
                        if (status == 11) {
                          cm.sendNextNoESC("谢谢你！你不会后悔这个决定的。\r\n（向第1观测站移动。）");
                        } else if (status == 12) {
                          cm.forceStartQuest(32194, '1');
                          cm.warp(141010000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;