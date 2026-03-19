var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.eventSKill(0);
      cm.sendNormalTalk("老师！", 5, 1500003, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('想死你了！', 5, 1500004, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('吓死我了。', 5, 1500005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我错了。下次再也不会去危险的地方了。", 5, 1500006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不，是我不好！我当初没有批评你们的话，也就……以后我会尊重你们的兴趣！", 5, 1500002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("啊啊，多么美好的场面啊。对吧，#b#h0##k？", 5, 1500000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呵呵……如果没有各位帮忙，根本无法找到孩子们。", 5, 1500001, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("对于我的误会，再次深表歉意，魔法师库迪。要说报答的话，我想给你一个建议。", 5, 1500001, true, true);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(101072002, 0, false);
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