# Importamos las librerías necesarias

from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
# Implementamos la puerta de Grover

Grover = QuantumCircuit(3,3)

Grover.h(range(3))
Grover.x(range(3))

#CORRECCIÓN !!!
# Si el ccz lo implementamos de esta manera estaremos cambiando algunas amplitudes que no debemos
# la solución está en recordar que Z = HXH


Grover.h(2)
Grover.mct([0,1],2,0) # esto es el cccx, el primer parámetro indica los qubits de control, el segundo
Grover.h(2)             # el qubit objetivo. Finalmente poned un cero, no deis importancia a ese valor

#Grover.x(2)
#Grover.z(2)
#Grover.x(2)
#Grover.mct(range(2),2,0)

Grover.x(range(3))
Grover.h(range(3))

Grover.draw(output = "mpl")