import random

# receive a input called name
name = input("What is your name? ")
# scramble characters in random order
scramble = "".join(random.sample(name, len(name)))
# print the scrambled name
print("Your scrambled name is: ", scramble)
