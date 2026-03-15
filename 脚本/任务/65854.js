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
      var e = [100, 200, 200, 300, 300, 400, 400, 500, 500, 500];
      var H = cm.getNumberFromQuestInfo(65858, 'lv');
      var b = "你想了解#b#e<冒险岛水晶球>#k#n吗？\r\n   * 当前等级 : #r#e" + H + "#k#n级\r\n" + (H < 11 ? "   * 升级需要的水晶气息 : #b#e" + e[H - 1] + "#k#n个\r\n\r\n" : "   * 已到达最高等级\r\n\r\n") + "#L0# 告诉我关于#b冒险岛水晶球#k的内容。#l\r\n" + "#L1# 我想知道获得#b#t2632545:##k的方法。#l\r\n" + "#L3# 可以在哪儿得到#b材料#k呢？#l\r\n" + "#L8# " + (cm.isQuestActive(65856) ? "#r材料太多了#k，我想#b关闭" : "#r材料不够了#k，我想#b开启") + "#k水晶球材料的掉落。#l\r\n" + "#L6# 我没有想了解的了。#l";
      if (cm.getPlayer().isGM() && cm.getzhizunvip() == 2) {
        b += "\r\n\r\n#L98# #r<调试>一键清空记录#l\r\n#L99# #r<调试>一键满级满收集#l\r\n";
      }
      cm.askMenu(b, 4, 9010010);
    } else {
      var d = "action分支" + selectionLog[1];
      eval(d)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("冒险岛水晶球可以通过使用#i2632545:# #e#t2632545:##n，接收气息，一点一点成长。", 4, 9010010, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("请记住，成长到更高等级之后，可以装扮#r更多外形#k。", 4, 9010010, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("装扮成长后的#i3018622:# #e#b#t3018622:##n#k需要#e#r材料#k#n。", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#r#e装扮材料#k#n可以在冒险岛世界各处得到，用心去寻找吧。", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("使用获得的#b#e材料#k#n即可添加新的#e#b外形#n#k，可通过添加的外形装扮#i3018622:# #e#b#t3018622:##n#k。", 4, 9010010, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("你随时随地都有可能得到材料，所以最好保证#e#b消耗栏#n#k一直有充足的空间。", 4, 9010010, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("添加#e#b外形#n#k之后，可随时通过\r\n#e#b[冒险岛水晶球]装扮冒险岛水晶球#n#k变更。", 4, 9010010, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("记住，#i3018622:# #e#b#t3018622:##n#k #r#e只能在村庄里装扮#k#n。\r\n这是为了让大家能够安全装扮水晶球，请你谅解。", 4, 9010010, true, true);
                } else if (status === v++) {
                  cm.sendNormalTalk("好了，去装扮#i3018622:# #e#b#t3018622:##n#k吧！\r\n我很好奇你的喜好是什么呢！", 4, 9010010, true, true);
                  status = -1;
                }
              }
            }
          }
        }
      }
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#i2632545:# #e#t2632545:##n可通过狩猎#r#e等级范围怪物#k#n获得。\r\n\r\n #fc0xFFAAAAAA#- 等级范围怪物：以角色等级为基准，-20级到+20级范围内的怪物#k", 4, 9010010, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#i2632545:# #e#t2632545:##n每次获得\r\n#i2632545:# #e#t2632545:##n时，它的气息都会渗入你的#b水晶球#k中。", 4, 9010010, true, true);
    } else if (status === v++) {
      cm.sendNormalTalk("我能理解你想一次性使它快快成长，对它精心装扮的心情……\r\n但水晶球内如果一次性流入过于强大的气息，可能会因为承受不住而破碎，所以我才设定了限制，请你谅解。", 4, 9010010, true, true);
      status = -1;
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("今天获得了#r#e0个#n#k水晶气息，", 4, 9010010, false, true);
    status = -1;
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("装扮水晶球需要#e#b各种各样的材料#n#k。", 4, 9010010, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("\r\n树木、椅子、可爱的手办、结实的背景、闪亮的玻璃、还有华丽的发光特效……", 4, 9010010, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n其中的姿势和表情……还有……", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n还有能够让你内心平静下来的音乐！冒险岛世界的各处隐藏着许多材料。", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#r#e装扮材料#k#n可以通过冒险岛世界各处的#b#e浓缩水晶气息#k#n，#b#e狩猎怪物#k#n，#b#e完成每日任务#k#n等获得。", 4, 9010010, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("完成#b#e隐藏任务#k#n后还能得到礼物，记得一定要好好观察周围哦！", 4, 9010010, true, true);
            } else if (status === v++) {
              cm.sendNormalTalk("精心装扮你的#b#e冒险岛水晶球#k#n吧！我很好奇你的喜好如何呢？吼吼。", 4, 9010010, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("你想知道活动时间吗？\r\n\r\n#b#e※ 活动时间\r\n 2021年 05月 26号 09点 00分 ~ 2021年 06月 15号 23点 59分#n#k\r\n\r\n#b#e※ 自定义时间\r\n 2021年 05月 26号 09点 00分 ~ 2021年 06月 15号 23点 59分#n#k", 4, 9010010, false, true);
    status = -1;
  }
}
function action分支6(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
  }
}
function action分支7(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("你想了解#r#e<冒险岛水晶球雕像>#n#k吗？", 4, 9010010, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#e<冒险岛水晶球雕像>#n指的是按照你的冒险岛水晶球，原封不动建立的雕像。不仅冒险岛水晶球，连你的模样都可以完全复制哦？！", 4, 9010010, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#e<冒险岛水晶球雕像>可建立在#n #b#m100000000##k，#b#m240000000##k，#b#m450001000##k共3个村庄中。\r\n每个村庄中备有可建立雕像的#e平台#n！", 4, 9010010, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("点击平台，确认是否可以将你的冒险岛水晶球建立在平台上后，根据次数支付#fs18##e#r1亿~3亿金币#k#n#fs12#，即可建立雕像。\r\n你说这是不是太贵了？这可是炫耀冒险岛水晶球的机会，当然要支付这么多了！", 4, 9010010, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("雕像建立后将会维持#b#e1个小时#k#n。这段时间内，人们会因为看见你的雕像而赞叹！", 4, 9010010, true, true);
          } else if (status === v++) {
            cm.sendNormalTalk("每天可建立#b#e3次#k#n雕像，冒险岛水晶球至少需要达到#b#e3级#k#n，一定要记住哦！", 4, 9010010, true, true);
            status = -1;
          }
        }
      }
    }
  }
}
function action分支8(g, w, a, v) {
  if (status <= v++) {
    cm.askAcceptDecline('确定要#b' + (cm.isQuestActive(65856) ? '关闭' : '开启') + "#k水晶球材料的掉落吗？\r\n如果改变了主意，可以再次进行调整。", 9010010);
  } else if (status === v++) {
    cm.sendNormalTalk('成功#b' + (cm.isQuestActive(65856) ? '关闭' : '开启') + "#k了水晶球材料的掉落！", 4, 9010010, false, false);
    if (cm.isQuestActive(65856)) {
      cm.forceCompleteQuest(65856);
    } else {
      cm.forceStartQuest(65856);
    }
    cm.dispose();
  }
}
function action分支98(g, w, a, v) {
  if (status <= v++) {
    cm.playerMessage(-1, "已清空记录");
    cm.updateInfoQuest(65858, "part4=0;part5=0;part6=0;part7=0;part8=0;part9=0;lv=1;part10=0;part11=0;part12=0;part0=0;part1=0;part2=0;part3=0");
    cm.updateInfoQuest(65859, "check=10000000000");
    cm.updateInfoQuest(65860, "check=10000000000");
    cm.updateInfoQuest(65861, "check=100000000000");
    cm.updateInfoQuest(65862, "check=100000");
    cm.updateInfoQuest(65863, "check=10000000000");
    cm.updateInfoQuest(65864, "check=1000000000");
    cm.updateInfoQuest(65865, "check=1000000000000");
    cm.updateInfoQuest(65866, "check=10000000000");
    cm.updateInfoQuest(65867, "check=100000000000");
    cm.updateInfoQuest(65868, "check=100000000000000000000");
    cm.updateInfoQuest(66012, "check1a=00000000;check1b=00000;check3a=0000000;check3b=00000;check2=000000");
    cm.forceStartQuest(65855);
    cm.dispose();
  }
}
function action分支99(g, w, a, v) {
  if (status <= v++) {
    cm.updateInfoQuest(65858, "part4=0;part5=0;part6=0;part7=0;part8=0;part9=0;lv=11;part10=0;part11=0;part12=0;part0=0;part1=0;part2=0;part3=0");
    cm.updateInfoQuest(65859, "check=11111111111");
    cm.updateInfoQuest(65860, "check=11111111111");
    cm.updateInfoQuest(65861, "check=111111111111");
    cm.updateInfoQuest(65862, "check=111111");
    cm.updateInfoQuest(65863, "check=11111111111");
    cm.updateInfoQuest(65864, "check=1111111111");
    cm.updateInfoQuest(65865, "check=1111111111111");
    cm.updateInfoQuest(65866, "check=11111111111");
    cm.updateInfoQuest(65867, "check=111111111111");
    cm.updateInfoQuest(65868, "check=111111111111111111111");
    cm.updateInfoQuest(66012, "check1a=11111111;check1b=11111;check3a=1111111;check2=111111;check3b=11111");
    cm.getAPI().addPopupSay(9010010, 5000, "冒险岛水晶球达到了#r#e11级#k#n！\r\n\r\n#e#b[ Lv.11 ]#n#k\r\n\r\n- 冒险岛水晶球-所有功能#n#k可以使用。", '', 0);
    cm.forceCompleteQuest(65855);
    cm.dispose();
  }
}