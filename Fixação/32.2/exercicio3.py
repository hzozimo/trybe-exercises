repro = []
file = open("arquivo.txt", mode="r")
for line in file:
    info = line.split(" ")
    if int(info[1]) < 6:
        repro.append(info[0] + "\n")

file.close()

reprovados = open("reprovados.txt", mode="w")
for aluno in repro:
    reprovados.write(aluno)

reprovados.close()
