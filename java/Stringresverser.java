import java.util.Scanner;

public class Stringresverser {
    public static String reverse(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        
        System.out.println("Reversed string: " + reverse(input));
    }
}