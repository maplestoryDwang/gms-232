var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("找到有用的东西了吗？")
    } else {
        if (status == 1) {
            cm.sendNext("你说他们不知道在偷偷地制作什么？会在做什么呢……或许这就是解开这个秘密的关键！")
        } else {
            if (status == 2) {
                cm.askAcceptDecline("据说，3楼的两侧也有宿舍。那么，去那里调查一下……等等，随便在淑女们的房间里翻找东西，这样没问题吗？")
            } else {
                if (status == 3) {
                    cm.sendNext("反，反正这都是为了调查……\r\n（库迪的脸不知怎地变红了。）\r\n\r\n你替我到3楼的宿舍进行调查吧。我在这里等你。")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};