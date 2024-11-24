from qiskit import QuantumCircuit
from qiskit.quantum_info import Statevector

# Crear un circuito cuántico con 2 qubits
circuit = QuantumCircuit(2)

# Aplicar una puerta Hadamard al primer qubit
circuit.h(0)

# Aplicar una puerta CNOT con el primer qubit como control y el segundo como objetivo
circuit.cx(0, 1)

# Dibujar el circuito
print("Circuito cuántico:")
print(circuit)

# Obtener el estado final del sistema cuántico usando el simulador Statevector
state = Statevector.from_instruction(circuit)

# Mostrar el estado final del sistema
print("\nEstado cuántico final:")
print(state)
