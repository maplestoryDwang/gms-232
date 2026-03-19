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
      cm.npc_ChangeController(2159012, "oid=248460", 538, 16, 7, 488, 588, 0, false, 0, false);
      cm.npc_ChangeController(2159008, "oid=248461", 424, 16, 2, 374, 474, 0, false, 0, false);
      cm.npc_ChangeController(2159006, "oid=248462", 903, -182, 12, 883, 923, 1, false, 0, false);
      cm.sendNormalTalk("嗯……实验好像进展很顺利。只要能得到足够的镥，一切就不会有问题。和黑色之翼联手，果然是明智的选择……呵呵呵。", 1, 2159012, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("格里梅尔大人果然有先见之明。", 5, 2159008, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("黑色之翼所说的智能机器人马上就能完成了。现在我得开始下一阶段的实验了。我要做出比他们所说的更有趣的东西。", 1, 2159012, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("下一阶段？", 5, 2159008, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("呵呵……你还不知道吗？看了这个实验室你应该就能知道了吧？我想做的东西是什么。和纯粹机械的无趣的智能机器人不同，是更有意思的……", 1, 2159012, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("嗯？这个实验室？你是想用这些实验体来做什么吗？", 5, 2159008, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("以你的眼光，可能无法看到这个实验的伟大之处，我可以理解。你只要做好自己的任务就行了。只要看好这里的实验体，不让他们逃跑就行。", 1, 2159012, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……嗯？你有没有听到什么奇怪的声音？", 1, 2159012, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嗯？奇怪的声音？嗯，好像是有什么东西在响？……？", 5, 2159008, true, true);
                    } else if (status === V++) {
                      cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=2;vel01=1");
                      cm.fieldEffect_Tremble(0, 500, 30);
                      cm.effect_Direction("Effect/Direction4.img/Resistance/TalkInLab", 0, 0, 0);
                      cm.dispose();
                      cm.warp(931000012, 0, false);
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