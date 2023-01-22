import random
while True:
    print("y to roll the dice or any other to quit")
    a = input()
    if a=="y":
        b=random.randint(1,6)
        if b==1:
            print("[- - -]")
            print("[  0  ]")
            print("[- - -]")
        elif b==2:
            print("[- - -]")
            print("[0   0]")
            print("[- - -]")
        elif b==3:
            print("[- - -]")
            print("[0 0 0]")
            print("[- - -]")
        elif b==4:
            print("[0   0]")
            print("[- - -]")
            print("[0   0]")
        elif b==5:
            print("[0   0]")
            print("[  0  ]")
            print("[0   0]")
        elif b==6:
            print("[0 0 0]")
            print("[     ]")
            print("[0 0 0]")
    else:
        print("Thank you for using Dice Roller")
        break 

