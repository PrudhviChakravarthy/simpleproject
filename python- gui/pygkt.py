import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QLabel

def on_button_click():
    label.setText("Button Clicked!")

app = QApplication(sys.argv)
window = QMainWindow()
window.setWindowTitle("Button Click Example")

button = QPushButton("Click Me", window)
button.clicked.connect(on_button_click)
button.move(10, 10)

label = QLabel(window)
label.setText("")
label.move(10, 50)

window.show()
sys.exit(app.exec_())
