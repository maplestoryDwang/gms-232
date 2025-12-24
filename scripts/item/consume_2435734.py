# For quest 1465. TODO add exp thing
STONES = [2435734, 2435735, 2435736]


if sm.hasQuestCompleted(1478):
    for stone in STONES:
        while sm.hasItem(stone):
            sm.consumeItem(stone)
else:
    sm.setPlayerAsSpeaker()
    sm.sendNext("I should gather all the stones and return to the librarian")