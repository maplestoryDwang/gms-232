var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.sendOkS("喔不…也许会真的哭出来…", 56);
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("果然大家的表情都很沉闷…那个孩子现在也是快要哭出来的表情…要去跟他说说话吗？")
    } else {
        if (status == 1) {
            cm.sendNextS("你还好吗？一个人吗？", 56)
        } else {
            if (status == 2) {
                cm.sendNextPrev("妈妈为了我去找食物了…因为肚子饿无法使出力量…", 32)
            } else {
                if (status == 3) {
                    cm.sendNextPrev("...\r\n#b(真是让人难过…没有我能帮忙的事情吗？)", 56)
                } else {
                    if (status == 4) {
                        cm.gainExp(1000);
                        cm.forceCompleteQuest();
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
};