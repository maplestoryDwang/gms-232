# Stone Table
# 2502002
# Wild Bear Area 1 (250010301)
# Consumes a Peach to produce Tae Roon's Note.

peach = 2022116
note = 2022252

drop = sm.getDropInRect(peach, 100)
if drop is not None:
    field.removeDrop(drop.getObjectId(), 0, False, -1)
    sm.dropItem(note, 894, -93)
    