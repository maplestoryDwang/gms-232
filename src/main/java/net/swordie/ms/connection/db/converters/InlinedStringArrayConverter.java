package net.swordie.ms.connection.db.converters;

import javax.persistence.AttributeConverter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class InlinedStringArrayConverter implements AttributeConverter<List<String>, String> {

    @Override
    public String convertToDatabaseColumn(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        if (strs == null) {
            return null;
        }
        for (var s : strs) {
            sb.append(s).append(",");
        }
        String res;
        if (strs.size() > 0) {
            res = sb.toString().substring(0, sb.length() - 1); // removes last comma
        } else {
            res = "";
        }
        return res;
    }

    @Override
    public List<String> convertToEntityAttribute(String s) {
        if (s == null) {
            return null;
        }
        String[] split = s.split(",");
        List<String> strs = new ArrayList<>();
        if (split.length > 0 && split[0].length() > 0) {
            strs.addAll(Arrays.asList(split));
        }
        return strs;
    }

    public static String toDbColumn(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        if (strs == null) {
            return null;
        }
        for (var s : strs) {
            sb.append(s).append(",");
        }
        String res;
        if (strs.size() > 0) {
            res = sb.toString().substring(0, sb.length() - 1); // removes last comma
        } else {
            res = "";
        }
        return res;
    }

    public static List<String> fromDbColumn(String s) {
        if (s == null) {
            return null;
        }
        String[] split = s.split(",");
        List<String> strs = new ArrayList<>();
        if (split.length > 0 && split[0].length() > 0) {
            strs.addAll(Arrays.asList(split));
        }
        return strs;
    }

}
