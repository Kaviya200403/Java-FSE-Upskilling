import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob", "Charlie", "Diana");
        
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted names: " + names);
        
        Collections.sort(names, (a, b) -> b.compareTo(a));
        System.out.println("Reverse sorted names: " + names);
    }
}