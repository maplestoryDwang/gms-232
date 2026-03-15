var status = -1;
var selectionLog = [];

function start(f, c, b) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(65136, "count=0;start=on");
            cm.updateInfoQuest(65136, "count=0;start=on;daily=0");
            cm.forceCompleteQuest(65134);
            cm.sendNormalTalk("有一些即将被人遗忘的歌曲……\r\n有人认为只是#r谣言#k，也有人认为是#b真实的故事#k……\r\n你想听听看吗？", 0, 9270148, false, true)
        } else {
            if (status === a++) {
                var e = "<遗忘的歌曲>\r\n";
                var d = ["为了爱情而越界的神官", "现在已经消失的某个地方", "少女找寻的那个地方……", "冒险岛海盗谱系", "满月之夜传统游戏的祈愿", "贫穷兄妹的圣诞节", "渴望爱的孩子的选择", "抵抗外星人攻击的最终兵器", "床下的黑暗存在", "利用怪物进行的禁断的游戏", "维持城市秩序的方法", "渔夫不愿出海的原因", "谁也不知在哪里的岛", "武道家的决心", "加入女皇骑士团的条件", "无法捕食羊的狼", "沙漠中的巨大建筑", "城市中的可怕怪谈", "时间变了的森林", "魔族和人类的关系"];
                for (var a = 0; a < 20; a++) {
                    if (cm.isQuestFinished(65140 + a)) {
                        e += "#r #i" + (3801449 + a) + "# " + d[a] + "\r\n"
                    } else {
                        e += "#b#L" + a + "# #i" + (3801449 + a) + "# " + d[a] + "#l\r\n"
                    }
                }
                cm.askMenu(e, 0, 9270148)
            } else {
                if (status === a++) {
                    cm.setNumberForQuestInfo(65136, "quest", 65140 + b);
                    cm.sendNormalTalk("为了完成歌曲，必须集齐音乐的3要素。\r\n你去帮我收集#i4036550# #t4036550#、#i4036551# #t4036551#和#i4036552# #t4036552#吧。", 0, 9270148, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(65136, "");
                        cm.setNumberForQuestInfo(65136, "daily", 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("音乐的3要素全部集齐啦。\r\n好的～让我们来完成曲子吧。嘟吧～萨吧吧吧！哒咚～哒", 0, 9270148, false, true)
        } else {
            if (status === b++) {
                cm.updateInfoQuest(65140, "start=on");
                cm.setNumberForQuestInfo(65136, "daily", 0);
                cm.addNumberForQuestInfo(65136, "count", 1);
                var a = cm.getNumberFromQuestInfo(65136, "quest");
                cm.forceCompleteQuest(a);
                cm.forceCompleteQuest(65136);
                cm.sendNormalTalk("完美地完成了～想听的话，就重新和我对话。", 0, 9270148, true, false);
                cm.gainItem(4036550, -1);
                cm.gainItem(4036551, -1);
                cm.gainItem(4036552, -1)
            } else {
                if (status == b++) {
                    cm.dispose()
                }
            }
        }
    }
};