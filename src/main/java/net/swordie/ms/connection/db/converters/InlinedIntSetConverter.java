package net.swordie.ms.connection.db.converters;

import javax.persistence.AttributeConverter;
import java.util.HashSet;
import java.util.Set;

public class InlinedIntSetConverter implements AttributeConverter<Set<Integer>, String> {

    @Override
    public String convertToDatabaseColumn(Set<Integer> integers) {
        StringBuilder sb = new StringBuilder();
        if (integers == null) {
            return null;
        }
        for (int i : integers) {
            sb.append(i).append(",");
        }
        String res;
        if (integers.size() > 0) {
            res = sb.toString().substring(0, sb.length() - 1); // removes last comma
        } else {
            res = "";
        }
        return res;
    }

    @Override
    public Set<Integer> convertToEntityAttribute(String s) {
        if (s == null) {
            return null;
        }
        String[] split = s.split(",");
        Set<Integer> ints = new HashSet<>();
        if (split.length > 0 && split[0].length() > 0) {
            for (String str : split) {
                ints.add(Integer.valueOf(str));
            }
        }
        return ints;
    }

    public static String toDbColumn(Set<Integer> integers) {
        StringBuilder sb = new StringBuilder();
        if (integers == null) {
            return null;
        }
        for (int i : integers) {
            sb.append(i).append(",");
        }
        String res;
        if (integers.size() > 0) {
            res = sb.toString().substring(0, sb.length() - 1); // removes last comma
        } else {
            res = "";
        }
        return res;
    }

    public static Set<Integer> fromDbColumn(String s) {
        if (s == null) {
            return null;
        }
        String[] split = s.split(",");
        Set<Integer> ints = new HashSet<>();
        if (split.length > 0 && split[0].length() > 0) {
            for (String str : split) {
                ints.add(Integer.valueOf(str));
            }
        }
        return ints;
    }
}
