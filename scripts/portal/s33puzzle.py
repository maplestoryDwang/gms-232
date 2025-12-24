from net.swordie.ms.client.partyquests.towerofoz import OzTowerModule
from net.swordie.ms.constants import OzConstants
from net.swordie.ms.util import Position

# Floor 33 Puzzle

portals = [
    [29, 30, 31, 32, 45],
    [33, 34, 35, 36, 46],
    [37, 38, 39, 40, 47],
    [41, 42, 43, 28, 48],
    [50, 51, 52, 53, 54],
]
end_portal = 17


def get_row_column_by_portal(portal_id):
    r = 0
    c = 0
    for row in portals:
        for column in row:
            if column == portal_id:
                return r, c
            c += 1
        r += 1
        c = 0
    return -1, -1


def get_target_portal(portal_id):
    field = chr.getField()
    field_info = field.getInfo()
    portal = field_info.getPortalByID(portal_id)
    portal_x = portal.getX()
    portal_y = portal.getY()
    reactor = field.getReactorsInRect(Position(portal_x, portal_y).getRectAround(OzConstants.F33_RECT))[0]

    # 0 = Left
    # 1 = Up
    # 2 = Right
    # 3 = Down

    reactor_direction = reactor.getState()
    row, column = get_row_column_by_portal(portal_id)

    # Finishing Portal & Direction
    if portal_id == 54 and reactor_direction == 3:
        return 17

    # Left Direction
    elif reactor_direction == 0:
        new_column = column - 1
        if new_column < 0:
            return portal_id
        return portals[row][new_column]

    # Up Direction
    elif reactor_direction == 1:
        new_row = row - 1
        if new_row < 0:
            return portal_id
        return portals[new_row][column]

    # Right Direction
    elif reactor_direction == 2:
        new_column = column + 1
        if new_column > 4:
            return portal_id
        return portals[row][new_column]

    # Down Direction
    elif reactor_direction == 3:
        new_row = row + 1
        if new_row > 4:
            return portal_id
        return portals[new_row][column]



portal_id = parentID
target_portal = get_target_portal(portal_id)

if target_portal == 17:
    OzTowerModule.clearStage(chr.getInstance(), chr)

if not target_portal == portal_id:
    if sm.canHold(OzConstants.CLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT) \
            and sm.canHold(OzConstants.COUNTERCLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT):
        sm.giveItem(OzConstants.CLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT)
        sm.giveItem(OzConstants.COUNTERCLOCKWISE_LABYRINTH_KEY, OzConstants.KEYS_GIVEN_PER_TELEPORT)

        sm.teleportToPortal(target_portal)
