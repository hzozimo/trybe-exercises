numbers = input("insira numeros, separados por espaço: ")

nums = numbers.split(" ")

sum = 0

for num in nums:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é {sum}")
