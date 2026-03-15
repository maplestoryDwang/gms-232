var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("I can tell you've worked really hard by seeing that you're already at Level 10. I think it's time now for you to break out as a Nobless and officially become the Knight-in-Training. Before doing that, however, I want to ask you one thing. Have you decided which Knight you'd want to beome?")
    } else {
        if (status == 1) {
            cm.sendNext("There isn't a single path to becoming a Knight. In fact, there are five of them laid out for you. It's up to you to choose which path you'd like to take, but it should definitely be something you will not regret. That's why... I am offering to show you what you'll look like once you become a Knight.")
        } else {
            if (status == 2) {
                cm.sendNext("What do you think? Are you interested in seeing yourself as the leader of the Knights? If you have already decided what kind of Knight you'd like to become, then you won't necessarily have to look at it...#b#L0#Show me how I'd look like as the leader of the Knights.#l ..#b#L1#No, I'm okay.")
            } else {
                if (status == 3) {
                    cm.askYesNo("Would you like to see for it yourself right now? A short clip will come out soon. Be prepared for what you are about to witness.")
                } else {
                    if (status == 4) {
                        cm.forceStartQuest();
                        cm.hireTutor(false);
                        cm.warp(913040100, 0);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextPrev("Test");
        cm.dispose()
    }
};