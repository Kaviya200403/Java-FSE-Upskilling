import java.util.Scanner;
import java.util.Random;

public class numberguessing {
    public static void main(String[] args) {
        Random random = new Random();
        int secretNumber = random.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Guess the number between 1 and 100");
        
        int attempts = 0;
        while (true) {
            System.out.print("Enter your guess: ");
            int guess = scanner.nextInt();
            attempts++;
            
            if (guess == secretNumber) {
                System.out.println("Congratulations! You guessed it in " + attempts + " attempts");
                break;
            } else if (guess < secretNumber) {
                System.out.println("Too low, try again");
            } else {
                System.out.println("Too high, try again");
            }
        }
    }
}