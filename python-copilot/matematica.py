# Solicitar dois números e o símbolo da operação do usuário
numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))
simbolo = input("Digite o símbolo da operação (+, -, *, /): ")

# Realizar a operação com base no símbolo fornecido
if simbolo == '+':
    resultado = numero1 + numero2
elif simbolo == '-':
    resultado = numero1 - numero2
elif simbolo == '*':
    resultado = numero1 * numero2
elif simbolo == '/':
    if numero2 != 0:
        resultado = numero1 / numero2
    else:
        resultado = 'Erro: Divisão por zero'
else:
    resultado = 'Erro: Operação inválida'

# Exibir o resultado
print("Resultado:", resultado)
