import java.io.*;
import java.util.*;
public class GuessGame{
    public static void main(String args[]){
        int n;
        int i;
        int randomNum=(int)Math.random()*100;
        System.out.println("Number of attempt:");
        Scanner sc=new Scanner(System.in);
        n=sc.nextInt();
        
        for(i=1;i<n;i++){
            System.out.println("Enter the number:");
            int guessNo=sc.nextInt();

            if(guessNo==randomNum){
                System.out.println("You won the game");
                break;
            }
            else if(guessNo>randomNum){
                System.out.println("The number is greater the actual Number");
            }
            else{
                System.out.println("The number is lesser than actual number");
            }
        }
        if(i>n){
            System.out.println("Total attempt is exhausted");
        }
        System.out.println("The Actual number is"+randomNum);
    }
}