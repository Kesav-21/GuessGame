import random
def playAgain():
    pg=input("Do you want to play Again? Enter y/n")
    if pg=='y' or pg=='n':
        return pg
    else:
        playAgain()
def guessGame():
    playGame='y'
    score=0
    while playGame=='y':
        Cnum=random.randint(1,50)
        Unum=int(input("Enter the number between 1 to 50:"))
        diff=Cnum-Unum
        if diff==0:
            print("Its the same number,You got 50 points")
            score=score+50
            print("Your updated score is",score)
        elif diff<=5 and diff >=-5:
            print("this number is very close to real number")
            print("UserNumber= ",Unum)
            print("ComputerNumber= ",Cnum)
            score=score+25
            print("YOur updated score is ",score)
        elif diff<=10 and diff >=-10:
            print("this number is close to real number")
            print("UserNumber= ",Unum)
            print("ComputerNumber= ",Cnum)
            score=score+10
            print("YOur updated score is ",score)
        else:
            print("You guess is not close or same as random number")
            print("UserNum",Unum)
            print("ComputerNum",Cnum)
        playGame= playAgain()
guessGame()
