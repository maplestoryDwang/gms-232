var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("双弩精灵！双弩精灵！我想见你！呜呜～虽然我装得很坦然，但我一直害怕我们再也不能见面了！", 0, 1033101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你身体没事吧，#p1033101#？", 2, 1033101, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的！没事！就身体而言，我自信比任何精灵都要强壮！虽然没有自信能像以前那样使用技能，但是没有不舒服的地方！", 0, 1033101, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("太好了……", 2, 1033101, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("当然啦！很棒吧！独自生活在已经历经数百年时间的世界！那是多么苦闷的事情啊！呜哇！~ 从现在开始，就让#p1033101#我来陪伴你吧！	\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 2000 exp", 0, 1033101)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(24063, "");
                                cm.forceCompleteQuest(24063);
                                cm.dispose()
                            } else {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};