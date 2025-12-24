package net.swordie.ms.connection.packet;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.MapTaggedObject;

import java.util.Collections;
import java.util.Set;

/**
 * @author Sjonnie
 * Created on 11/27/2018.
 */
public class MapLoadable {

    public static OutPacket setMapTaggedObjectVisible(MapTaggedObject object) {
        return setMapTaggedObjectVisible(Collections.singleton(object));
    }

    public static OutPacket setMapTaggedObjectVisible(Set<MapTaggedObject> objects) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_TAGGED_OBJECT_VISISBLE);

        outPacket.encodeByte(objects.size());
        for (MapTaggedObject mto : objects) {
            outPacket.encode(mto);
        }

        return outPacket;
    }

    public static OutPacket setMapTaggedObjectSmoothVisible(MapTaggedObject object) {
        return setMapTaggedObjectSmoothVisible(Collections.singleton(object));
    }

    public static OutPacket setMapTaggedObjectSmoothVisible(Set<MapTaggedObject> objects) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_TAGGED_OBJECT_SMOOTH_VISIBLE);

        outPacket.encodeByte(objects.size());
        for (MapTaggedObject mto : objects) {
            outPacket.encode(mto);
        }

        return outPacket;
    }

    public static OutPacket setMapTaggedObjectAnimation(MapTaggedObject mapTaggedObject) {
        return setMapTaggedObjectAnimation(Collections.singleton(mapTaggedObject));
    }

    public static OutPacket setMapTaggedObjectAnimation(Set<MapTaggedObject> mapTaggedObjects) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_TAGGED_OBJECT_ANIMATION);

        outPacket.encodeInt(mapTaggedObjects.size());

        for (var mto : mapTaggedObjects) {
            outPacket.encodeString(mto.getTag());
            outPacket.encodeInt(mto.getDelay());
        }

        return outPacket;
    }

    public static OutPacket setMapObjectAnimation(MapTaggedObject mapTaggedObject) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_OBJECT_ANIMATION);

        outPacket.encodeString(mapTaggedObject.getTag());
        outPacket.encodeInt(mapTaggedObject.getDelay());

        return outPacket;
    }

    public static OutPacket setMapObjectVisible(MapTaggedObject mapTaggedObject) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_OBJECT_VISIBLE);

        outPacket.encodeString(mapTaggedObject.getTag());
        outPacket.encodeInt(mapTaggedObject.isVisible() ? 1 : 0);

        return outPacket;
    }

    public static OutPacket setMapObjectMove(MapTaggedObject mapTaggedObject, Position position) {
        OutPacket outPacket = new OutPacket(OutHeader.SET_MAP_OBJECT_MOVE);

        outPacket.encodeString(mapTaggedObject.getTag());
        outPacket.encodePositionInt(position);
        outPacket.encodeInt(mapTaggedObject.getDelay());

        return outPacket;
    }
}
