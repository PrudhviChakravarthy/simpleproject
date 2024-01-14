import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QLabel

app = QApplication(sys.argv)
window = QMainWindow()
window.setWindowTitle("Simple Window")

label = QLabel("Hello, PyQt!")
window.setCentralWidget(label)
window.show()

sys.exit(app.exec_())
